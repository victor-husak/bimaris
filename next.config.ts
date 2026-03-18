import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   scrollRestoration: true,
  // },
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

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
