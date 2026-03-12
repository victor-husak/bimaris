import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: process.env.NEXT_PUBLIC_APP_ENV === "production" ? "/" : undefined,
      disallow:
        process.env.NEXT_PUBLIC_APP_ENV === "development"
          ? "/"
          : ["/_next/", "/api/", "/*?*"],
    },
    sitemap: `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`,
  };
}
