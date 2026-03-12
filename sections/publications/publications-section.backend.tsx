import {
  PublicationsSection,
  type PublicationsSectionProps,
} from "./publications-section";

import { getPublicationsRecommended } from "@/api/strapi/queries/publications";

export type PublicationsSectionBackendProps = PublicationsSectionProps;

export const PublicationsSectionBackend: React.FC<
  PublicationsSectionBackendProps
> = async (props): Promise<React.JSX.Element> => {
  const publicationsRecommended = await getPublicationsRecommended({
    slug: props.slug,
  });

  return <PublicationsSection {...props} data={publicationsRecommended.data} />;
};
