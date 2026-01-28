/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Don't try to prerender API routes
  experimental: {
    outputFileTracingRoot: undefined,
  },
  // Exclude API routes from static generation
  pageExtensions: ['js', 'jsx'],
}

module.exports = nextConfig
