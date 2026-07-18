import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Anyone opening the free Vercel address lands on the real domain
      {
        source: "/:path*",
        has: [{ type: "host", value: "rupmilan-jewellers.vercel.app" }],
        destination: "https://www.rupmilanjewellers.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
