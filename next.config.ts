import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com',  port: '', pathname: '/**'},
    ],
  },
  allowedDevOrigins: ['10.17.237.11'],
};

export default nextConfig;
