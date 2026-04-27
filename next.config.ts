import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' https://app.contentful.com https://app.eu.contentful.com https://*.contentful.com",
          },
        ],
      },
    ];
  },
};

export default nextConfig;