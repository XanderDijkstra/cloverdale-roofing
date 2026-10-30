import type { NextConfig } from "next";

// Fully static site, served as Cloudflare Workers static assets (see wrangler.jsonc).
// Static export ignores headers()/redirects(): they live in public/_headers and public/_redirects.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
