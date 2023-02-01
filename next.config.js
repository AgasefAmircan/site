/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "cdn.jsdelivr.net","unsplash.com"],
  },
};

module.exports = nextConfig;
