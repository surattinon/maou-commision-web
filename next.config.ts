import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/admin',
        destination: '/en/admin',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
