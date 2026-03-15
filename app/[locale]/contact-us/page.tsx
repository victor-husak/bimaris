import { getCommonData } from "@/api/strapi/queries/common";
import { getOffices } from "@/api/strapi/queries/offices";

import { ContactUsDomain } from "@/domains/contact-us";

import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function ContactUsPage() {
  const [commonData, offices] = await Promise.all([
    getCommonData(),
    getOffices(),
  ]);

  return (
    <ContactUsDomain commonData={commonData.data} offices={offices.data} />
  );
}
