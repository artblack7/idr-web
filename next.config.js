/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {

    unoptimized: false,
    domains: ['idr.cat'],
    pageExtensions: ['js', 'jsx', 'md', 'mdx'], // Allow .md and .mdx files as pages
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;


