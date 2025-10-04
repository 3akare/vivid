import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // ❌ Ignore build errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // ❌ Ignore ESLint errors too
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
