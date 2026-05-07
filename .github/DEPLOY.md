# Deploy setup for anthonypaquet.com

Static-export Next.js site, hosted on S3 behind CloudFront. Deploys run from GitHub Actions via OIDC federation, so no long-lived AWS keys exist anywhere.

## What ships in this repo

| File | Purpose |
|---|---|
| `.github/workflows/deploy.yml` | Builds (`npm ci` → `npm run build`) and uploads `out/` to S3, then invalidates CloudFront. Triggers on push to `main` or manual dispatch. |
| `.github/aws-oidc-setup.yml` | CloudFormation template that creates the IAM OIDC provider and the deploy role the workflow assumes. One-time setup. |

## One-time setup

You only do this once per account. After it's done, every push to `main` deploys.

### 1. Create the IAM role and OIDC provider in AWS

You need three pieces of info before you start:

- **GitHub repo** — for this site: `stonyp90/stonyp90`
- **S3 bucket name** — the bucket the static site is served from (e.g. `anthonypaquet.com`)
- **CloudFront distribution ID** — looks like `E1ABCD2EFGHIJK`

If you don't remember the bucket and distribution, run after `aws sso login --profile aws-prod`:

```bash
aws --profile aws-prod s3 ls
aws --profile aws-prod cloudfront list-distributions \
  --query 'DistributionList.Items[].{Id:Id,Domain:DomainName,Aliases:Aliases.Items}' \
  --output table
```

#### Option A — AWS Console (recommended for the first time)

1. CloudFormation → Create stack → With new resources (standard)
2. Upload `.github/aws-oidc-setup.yml`
3. Stack name: `github-actions-anthonypaquet-deploy`
4. Fill the parameters with the values above
   - If your account already has an OIDC provider for `token.actions.githubusercontent.com` (other GitHub Actions workflows have used it), set `ExistingOIDCProvider=true` to avoid a duplicate-resource error
5. Acknowledge the IAM resource creation checkbox → Create stack
6. Wait for `CREATE_COMPLETE`. The Outputs tab gives you three values:
   - `DeployRoleArn`
   - `S3BucketEnvVar`
   - `CloudFrontDistEnvVar`

#### Option B — AWS CLI

```bash
aws sso login --profile aws-prod

aws --profile aws-prod cloudformation deploy \
  --template-file .github/aws-oidc-setup.yml \
  --stack-name github-actions-anthonypaquet-deploy \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameter-overrides \
    S3BucketName=YOUR_BUCKET_NAME \
    CloudFrontDistributionId=YOUR_DISTRIBUTION_ID

aws --profile aws-prod cloudformation describe-stacks \
  --stack-name github-actions-anthonypaquet-deploy \
  --query 'Stacks[0].Outputs'
```

### 2. Tell GitHub about it

Go to: `https://github.com/stonyp90/stonyp90/settings/secrets/actions`

**Secrets** (encrypted, only the workflow can read):
- `AWS_ROLE_ARN` = the `DeployRoleArn` output from step 1

**Variables** (visible in workflow logs, no need to encrypt):
- `S3_BUCKET` = your bucket name
- `CLOUDFRONT_DIST_ID` = your CloudFront distribution ID

### 3. First deploy

Push a commit to `main` (or use Actions → "Deploy to S3 + CloudFront" → Run workflow → main). The workflow:

1. `actions/checkout@v4`
2. `npm ci` and `npm run build` (Next.js static export to `out/`)
3. `aws-actions/configure-aws-credentials@v4` assumes `AWS_ROLE_ARN` via OIDC
4. `aws s3 sync out/ s3://$S3_BUCKET/ --delete`
   - Static assets get `Cache-Control: max-age=31536000, immutable`
   - HTML files get `Cache-Control: max-age=0, must-revalidate` so the CloudFront invalidation is meaningful
5. `aws cloudfront create-invalidation --paths "/*"`
6. `aws cloudfront wait invalidation-completed`
7. Smoke check: HTTP 200 on `https://www.anthonypaquet.com/`

If any step fails, the Actions tab has the full log. Common first-deploy hiccups:

- **`AccessDenied` on s3:PutObject** — the bucket name in the CloudFormation parameter doesn't match the actual bucket. Update the role policy or redeploy the stack with the correct name.
- **`InvalidIdentityToken` from STS** — the workflow's `permissions: id-token: write` is missing, or the trust policy's `sub` condition doesn't match (workflow ran from a non-main ref, for example).
- **CloudFront wait times out** — invalidations occasionally take longer than the wait default. Re-run; the next push will use the latest objects.

## Rolling back

If a deploy ships something broken:

```bash
git revert HEAD            # creates a revert commit
git push origin main       # workflow re-runs and re-syncs the previous content
```

Or, faster, restore the previous version directly from S3 versioning if your bucket has it enabled.

## Security notes

- The deploy role's trust policy is locked to `repo:stonyp90/stonyp90:ref:refs/heads/main`. Pushes to other branches cannot assume it, even with `workflow_dispatch`. To enable preview deploys from feature branches later, broaden the `StringLike` condition in `aws-oidc-setup.yml` (e.g., `repo:stonyp90/stonyp90:ref:refs/heads/*`).
- The role only has access to the specific S3 bucket and CloudFront distribution you parameterized. It cannot list other buckets, touch IAM, or call any other AWS service.
- No AWS credentials live in `.env`, the repo, or in the chat history of any AI tool. Sessions are issued per workflow run, expire automatically, and are scoped to the role's permissions.
