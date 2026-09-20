import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NOTE: `output: "standalone"` was removed for Cloudflare Pages compat.
  // @cloudflare/next-on-pages generates its own worker bundle from the
  // standard `.next/` build output. If you ever want to deploy on a
  // Node.js container (Docker/Vercel standalone), re-add `output: "standalone"`.
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Cloudflare Pages (via @cloudflare/next-on-pages) needs the standard build
  // output and the edge runtime for ISR/SSR pages.
  experimental: {
    // Helps the Cloudflare adapter bundle server components correctly.
    serverActions: {
      allowedOrigins: ["localhost:3000"],
    },
  },
};

export default nextConfig;
