import { Metadata } from "next";

export type SEOProps = {
  title?: string;
  description?: string;
  images?: string[];
  url?: string;
  type?: "website" | "article";
  locale?: string;
  siteName?: string;
  twitterCard?: "summary" | "summary_large_image";
  // canonical?: string;
  robots?: {
    index?: boolean;
    follow?: boolean;
  };
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const DEFAULT_SEO: Required<SEOProps> = {
  title: "Smotrów Design | Global Design & Technology Company",
  description:
    "A global design and technology company dedicated to crafting bespoke digital products and experiences for leading brands and institutions.",
  images: ["/default-image.png"],
  url: baseUrl,
  type: "website",
  locale: "en_EN",
  siteName: "Smotrów Design",
  twitterCard: "summary_large_image",
  // canonical: "/",
  robots: { index: true, follow: true },
  keywords: [],
  author: "",
  publishedTime: "",
  modifiedTime: "",
};

export const generateSEO = (props: SEOProps): Metadata => {
  const seo = { ...DEFAULT_SEO, ...props };

  // Добавляем суффикс сайта к заголовку
  const fullTitle = seo.title.includes(`| ${seo.siteName}`)
    ? seo.title
    : `${seo.title} | ${seo.siteName}`;

  // OpenGraph и Twitter
  const ogImages = seo.images.map((img) => ({ url: img }));
  const twitterImages = seo.images;

  const url = `${baseUrl}${seo.url}`;

  return {
    title: fullTitle,
    description: seo.description,
    metadataBase: new URL(url),
    alternates: { canonical: url },
    robots: seo.robots,
    keywords: seo.keywords.length > 0 ? seo.keywords.join(", ") : undefined,
    authors: seo.author ? [{ name: seo.author }] : undefined,
    openGraph: {
      type: seo.type,
      title: fullTitle,
      description: seo.description,
      url: url,
      siteName: seo.siteName,
      images: ogImages,
      locale: seo.locale,
      ...(seo.type === "article" && {
        publishedTime: seo.publishedTime || undefined,
        modifiedTime: seo.modifiedTime || undefined,
      }),
    },
    twitter: {
      card: seo.twitterCard,
      title: fullTitle,
      description: seo.description,
      images: twitterImages,
    },
  };
};
