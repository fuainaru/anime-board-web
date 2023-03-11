/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["konachan.com"],
  },
};

module.exports = nextConfig;
