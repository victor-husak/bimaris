import { ContactSection, type ContactSectionProps } from "./contact-section";

import { getOffices } from "@/api/strapi/queries/offices";

export type ContactSectionBackendProps = ContactSectionProps;

export const ContactSectionBackend: React.FC<
  ContactSectionBackendProps
> = async (props): Promise<React.JSX.Element> => {
  const offices = await getOffices({});

  return <ContactSection {...props} offices={offices.data} />;
};
