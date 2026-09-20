import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standard Next.js build for Vercel deploys. Cloudflare Pages fallback
  // is available via `npm run pages:build` (uses @cloudflare/next-on-pages).
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
