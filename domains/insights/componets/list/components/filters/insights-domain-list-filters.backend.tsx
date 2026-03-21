import {
  InsightsDomainListFilters,
  type InsightsDomainListFiltersProps,
} from "./insights-domain-list-filters";

import { getRoles } from "@/api/strapi/queries/roles";
import { getPublicationCategories } from "@/api/strapi/queries/publications";

export type InsightsDomainFltersBackendProps =
  InsightsDomainListFiltersProps & {};

export const InsightsDomainFltersBackend: React.FC<
  InsightsDomainFltersBackendProps
> = async (props): Promise<React.JSX.Element> => {
  const [roles, publicationCategories] = await Promise.all([
    getRoles({
      pageSize: 1000,
    }),
    getPublicationCategories({
      pageSize: 1000,
    }),
  ]);

  return (
    <InsightsDomainListFilters
      {...props}
      roles={roles.data}
      publicationCategories={publicationCategories.data}
    />
  );
};
