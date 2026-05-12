import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // @ts-ignore
    allowedDevOrigins: ['10.104.115.1', '*'],
  }
};

export default nextConfig;
