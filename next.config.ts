import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // www → non-www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.photorganizer.org" }],
        destination: "https://photorganizer.org/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
