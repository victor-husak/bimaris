import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapi.bimaris.smotrow.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
