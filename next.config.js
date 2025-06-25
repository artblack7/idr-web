/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    domains: ['idr.cat'],
    // pageExtensions: ['js', 'jsx', 'md', 'mdx'], 
  },
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ['ca', 'es', 'en'],
    defaultLocale: 'ca',
    localeDetection: true,
  },
};

module.exports = nextConfig;


