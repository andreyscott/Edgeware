import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/fellowship",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
