import { getCommonData } from "@/api/strapi/queries/common";

import { ContactUsDomain } from "@/domains/contact-us";

import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function ContactUsPage() {
  const commonData = await getCommonData();

  return <ContactUsDomain commonData={commonData.data} />;
}
