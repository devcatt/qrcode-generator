import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'api.qrserver.com',
          port: '',
          pathname: '/v1/**',
        },
      ],
  }
};

export default nextConfig;
