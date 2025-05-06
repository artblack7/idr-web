/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {

    unoptimized: false,
    domains: ['idr.cat'],
    // pageExtensions: ['js', 'jsx', 'md', 'mdx'], 
  },
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;


