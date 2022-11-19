/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: process.env.NODE_ENV === 'development',
  reactStrictMode: true,
};

module.exports = nextConfig;
