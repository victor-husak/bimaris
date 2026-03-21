import { clsx } from "clsx";
import { Suspense, use, useMemo } from "react";

import { ListLayout } from "@/layouts/list";

import * as Components from "./components";

import type { PublicationShort } from "@/types/publication";

export type InsightsDomainListProps = {
  className?: string;
  publications: StrapiCollection<PublicationShort>;
  searchParams?: SearchParams;
};

export const InsightsDomainList: React.FC<InsightsDomainListProps> = (
  props,
): React.JSX.Element => {
  const keys = useMemo(
    () => Object.values(props.searchParams || {}).toString(),
    [props.searchParams],
  );

  return (
    <ListLayout
      className={clsx(props.className, "")}
      title="All publications"
      description="Explore our selected examples of immigration cases handled for individuals and businesses, demonstrating our structured approach and long-term legal support."
      // totalCount={props.publications.meta?.pagination.total || 0}
      FiltersComponent={
        <Suspense>
          <Components.Filters />
        </Suspense>
      }
    >
      <Suspense key={keys}>
        <Components.Grid
          publications={props.publications}
          searchParams={props.searchParams}
        />
      </Suspense>
    </ListLayout>
  );
};
