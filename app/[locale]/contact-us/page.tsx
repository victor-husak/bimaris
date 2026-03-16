import { getCommonData } from "@/api/strapi/queries/common";
import { getOffices } from "@/api/strapi/queries/offices";

import { ContactUsDomain } from "@/domains/contact-us";

import { routing } from "@/i18n/routing";

interface ContactUsPageProps {
  params: Promise<Params>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function ContactUsPage(props: ContactUsPageProps) {
  const params = await props.params;

  const [commonData, offices] = await Promise.all([
    getCommonData({ locale: params.locale }),
    getOffices({ locale: params.locale }),
  ]);

  return (
    <ContactUsDomain commonData={commonData.data} offices={offices.data} />
  );
}
