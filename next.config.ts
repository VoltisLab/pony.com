import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [
          {
            key: "content-type",
            value: "application/json"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
