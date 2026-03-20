import { getContactUsPage } from "@/api/strapi/queries/contact-us-page";
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

  const [pageData, offices] = await Promise.all([
    getContactUsPage({ locale: params.locale }),
    getOffices({ locale: params.locale }),
  ]);

  return <ContactUsDomain pageData={pageData.data} offices={offices.data} />;
}
