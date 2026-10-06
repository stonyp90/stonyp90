# Tooling evidence — 2026-10-02

## Scope and architecture

The application remains a Next.js static export. This change adds development
and verification adapters; it does not introduce domain logic, API routes, a
database, or a queue. Docker builds the export with Node, then serves only `out/`
with Nginx. Cloudflare's existing canonical-domain Worker remains unchanged.

## Versions observed

Observed with `node --version`, `npm --version`, and `npm ls` on 2026-10-02:

| Component | Actual installed version | Decision |
| --- | --- | --- |
| Node.js | 22.16.0 | Use `.node-version` for CI and the same default Docker build version. |
| npm | 10.9.2 | Use the checked-in lockfile with `npm ci`. |
| Next.js / eslint-config-next | 15.5.9 | Preserve the current versions and Core Web Vitals rules. |
| ESLint | 9.39.2 | Use the ESLint CLI and flat configuration. |
| @eslint/eslintrc | 3.3.3 | Declare the existing transitive version directly for `FlatCompat`; no dependency upgrades. |
| TypeScript | 5.9.3 | Preserve strict project configuration; add `tsc --noEmit`. |
| Docker CLI | 28.4.0 | Compose config validated locally. |
| Docker Compose | 2.39.4-desktop.1 | Support optional rebuild watch for local iteration. |
| Nginx image | 1.30.5-alpine | New static-serving adapter; tag is listed in the official image registry source. Override via `STATIC_SERVER_IMAGE`. Image execution not verified locally. |
| GitHub Actions | checkout v6 / setup-node v6 | Maintained documented majors; npm download cache, read-only repository permission, no stored checkout credentials. |

`package-lock.json` changes only its root development dependency declaration
for `@eslint/eslintrc`. All existing dependency versions and integrity entries
remain unchanged.

## Sources checked and decisions

All links below were consulted on 2026-10-02. Exact-tag sources take precedence
over the rolling latest documentation where applicable.

- [Next.js 15.5.9 ESLint documentation](https://raw.githubusercontent.com/vercel/next.js/v15.5.9/docs/01-app/03-api-reference/05-config/03-eslint.mdx): use `FlatCompat` with the existing `next/core-web-vitals` preset. The installed Next CLI reports that `next lint` is deprecated, so the package command now invokes ESLint directly.
- [ESLint 9.39.2 configuration migration guide](https://raw.githubusercontent.com/eslint/eslint/v9.39.2/docs/src/use/configure/migration-guide.md): use `eslint.config.mjs`; generated directories have explicit global ignores.
- [Node.js 22.16.0 test runner](https://nodejs.org/download/release/v22.16.0/docs/api/test.html): use the built-in runner and strict assertions; no added test framework. Worker tests execute the existing source and verify redirect and asset-forwarding behavior.
- [TypeScript 5.9 release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-9.html) and [noEmit reference](https://www.typescriptlang.org/tsconfig/noEmit.html): use the project's installed compiler for independent type verification.
- [Next.js 15 static exports](https://nextjs.org/docs/15/app/guides/static-exports): retain `output: 'export'`, `trailingSlash`, and static image behavior. The runtime needs only a web server.
- [Cloudflare Fetch handler](https://developers.cloudflare.com/workers/runtime-apis/handlers/fetch/): module Workers use an exported handler object. The lint override permits object exports only in `worker/**/*.js`; all other lint rules remain active.
- [Docker frontend containerization](https://docs.docker.com/guides/reactjs/), [Compose service reference](https://docs.docker.com/reference/compose-file/services/), and [Compose Watch](https://docs.docker.com/compose/how-tos/file-watch/): use a multi-stage build, one required service, configurable host/port/image/build runtime, healthcheck, and optional rebuild watch.
- [Nginx official image registry source](https://raw.githubusercontent.com/docker-library/official-images/master/library/nginx), [try_files](https://nginx.org/en/docs/http/ngx_http_core_module.html#try_files), and [response headers](https://nginx.org/en/docs/http/ngx_http_headers_module.html#add_header): serve directory-style pages and the exported 404 page; immutable cache headers apply only to Next's hashed static assets. HTML revalidates on revisit.
- [checkout v6](https://raw.githubusercontent.com/actions/checkout/v6/README.md), [setup-node v6](https://raw.githubusercontent.com/actions/setup-node/v6/README.md), and [GitHub Node build/test guide](https://docs.github.com/en/actions/tutorials/build-and-test-code/nodejs): run lockfile install, lint, typecheck, tests, and static build on every push and pull request. The workflow does not publish or deploy.

## Verification

| Check | Result |
| --- | --- |
| Original `npm run lint` / `next lint` | Exit 0, but emitted the deprecation warning. |
| Red: `npx --no-install eslint .` before migration | Exit 2: ESLint 9 could not find a flat configuration. |
| Green: `npm run lint` after migration | Exit 0, zero warnings. |
| `npm run typecheck` | Exit 0 on the observed working tree. |
| `npm test` | Exit 0, four Worker behavior tests passed. Parent task may add further content tests. |
| `docker compose config --quiet` | Exit 0. |
| `docker info --format '{{.ServerVersion}}'` | Docker daemon did not respond; interrupted. Container build, Nginx config execution, and HTTP healthcheck are unverified. |
| Production build | Reserved for the parent task's final build to avoid concurrent changes to `.next/`. |
| GitHub Actions | Workflow defined locally; no remote run or branch-protection change performed. |

## Local commands

```sh
npm ci
npm run check
docker compose up --build --wait
```

Docker serves the static export at `http://127.0.0.1:3000` by default. Override
with `SITE_PORT=3100 docker compose up --build --wait`. Use
`docker compose up --build --watch` for export rebuilds during iteration, or
`npm run dev` for Next.js fast refresh. Stop the local container with
`docker compose down`.

The default Docker runtime does not emulate Cloudflare's canonical-domain
redirects; those are covered independently by the Worker unit tests. This is a
static-site serving adapter, not a new HTTP API, so no new OpenAPI service is
introduced. No commit, push, deployment, or public publication was performed.
