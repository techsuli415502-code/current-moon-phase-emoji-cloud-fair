import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — produces `out/` directory which Cloudflare Pages
  // auto-detects. No deploy command, no wrangler, no Node v22 requirement.
  output: "export",
  // Static export requires unoptimized images (no server-side image optimization).
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
