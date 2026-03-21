import { Suspense } from "react";

import * as Components from "./components";

import { ListLayout } from "@/layouts/list";

import { clsx } from "clsx";

import { useCaseStudiesDomainList } from "./case-studies-domain-list.hook";

import type { CaseStudyShort } from "@/types/case-studies";

export type CaseStudiesDomainListProps = {
  className?: string;
  caseStudies: StrapiCollection<CaseStudyShort>;
  searchParams?: SearchParams;
};

export const CaseStudiesDomainList: React.FC<CaseStudiesDomainListProps> = (
  props,
): React.JSX.Element => {
  const { searchKeys } = useCaseStudiesDomainList(props);

  return (
    <ListLayout
      className={clsx(props.className)}
      title="All case studies"
      description="Explore our selected examples of immigration cases handled for individuals and businesses, demonstrating our structured approach and long-term legal support."
      FiltersComponent={
        <Suspense>
          <Components.Filters />
        </Suspense>
      }
    >
      <Suspense key={searchKeys}>
        <Components.Grid
          caseStudies={props.caseStudies}
          searchParams={props.searchParams}
        />
      </Suspense>
    </ListLayout>
  );
};
