import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_URL!;

import { getPublicationSlugs } from "@/api/strapi/queries/publications";

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [publicationSlugs] = await Promise.all([getPublicationSlugs()]);

  const staticPages = [
    { url: `${SITE_URL}`, priority: 1.0 },
    // { url: `${SITE_URL}/expertise`, priority: 0.9 },
    // { url: `${SITE_URL}/works`, priority: 0.8 },
    { url: `${SITE_URL}/insights`, priority: 0.7 },
  ].map((p) => ({
    ...p,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as ChangeFreq,
  }));

  const build = (
    items: Array<{ slug: string; updatedAt: string }>,
    path?: string,
    priority?: number,
  ) =>
    items.map((i) => ({
      url: `${SITE_URL}/${path ? `${path}/` : ""}${i.slug}`,
      lastModified: new Date(i.updatedAt).toISOString(),
      changeFrequency: "weekly" as ChangeFreq,
      priority,
    }));

  return [...staticPages, ...build(publicationSlugs.data, "publications", 0.8)];
}
