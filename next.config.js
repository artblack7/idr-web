/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    domains: ['idr.cat'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;


