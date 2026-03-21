import {
  CaseStudiesDomainListFilters,
  type CaseStudiesDomainListFiltersProps,
} from "./case-studies-domain-list-filters";

import { getRoles } from "@/api/strapi/queries/roles";
// import { getPublicationCategories } from "@/api/strapi/queries/publications";

export type CaseStudiesDomainFltersBackendProps =
  CaseStudiesDomainListFiltersProps & {};

export const CaseStudiesDomainListFiltersBackend: React.FC<
  CaseStudiesDomainFltersBackendProps
> = async (props): Promise<React.JSX.Element> => {
  const [roles] = await Promise.all([
    getRoles({
      pageSize: 1000,
    }),
    // getPublicationCategories({
    //   pageSize: 1000,
    // }),
  ]);

  return (
    <CaseStudiesDomainListFilters
      {...props}
      roles={roles.data}
      // publicationCategories={publicationCategories.data}
    />
  );
};
