import { notFound } from "next/navigation";

import { getRoleBySlug, getRoleSlugs } from "@/api/strapi/queries/roles";

import { RolesItemDomain } from "@/domains/roles-item";

import { generateSEO } from "@/utils/seo";

import type { Metadata } from "next";

interface RolesItemPageProps {
  params: Promise<Params>;
}

export async function generateMetadata(
  props: RolesItemPageProps,
): Promise<Metadata | undefined> {
  const params = await props.params;

  const res = await getRoleBySlug(params.slug);
  const role = res.data[0];

  if (!role) return undefined;

  return generateSEO({
    title: role.name,
    description: role.description,
    images: role.mainImage
      ? [`${process.env.NEXT_PUBLIC_STRAPI_URL}${role.mainImage.url}`]
      : [],
    url: `/roles/${params.slug}`,
    type: "article",
    publishedTime: role.createdAt,
    modifiedTime: role.updatedAt,
  });
}

export async function generateStaticParams() {
  const res = await getRoleSlugs();

  return res.data.map((item) => ({
    slug: item.slug,
  }));
}

export default async function RolesItemPage(props: RolesItemPageProps) {
  const params = await props.params;

  const res = await getRoleBySlug(params.slug);
  const role = res.data[0];

  if (!role) notFound();

  return <RolesItemDomain data={role} />;
}
