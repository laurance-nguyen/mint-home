/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: process.env.POCKETBASE_DOMAIN,
        protocol: "https",
        pathname: "/api/files/**",
      },
    ],
  },
};

module.exports = nextConfig;
