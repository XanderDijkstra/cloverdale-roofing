import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/2", destination: "/", permanent: true },
      { source: "/2/:path*", destination: "/:path*", permanent: true },
      { source: "/service-areas", destination: "/locations", permanent: true },
    ];
  },
};

export default nextConfig;
