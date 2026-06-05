/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Emit directory-style pages (out/fr/index.html) so S3/CloudFront serves
  // /fr/ via the index document without a URL-rewrite function.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
