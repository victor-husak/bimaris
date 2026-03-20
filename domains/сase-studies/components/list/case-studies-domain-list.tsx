import { PublicationCard } from "@/cards/publication";

import * as Components from "./components";

import { ListLayout } from "@/layouts/list";

import { clsx } from "clsx";

import type { CaseStudyShort } from "@/types/case-studies";

export type CaseStudiesDomainListProps = {
  className?: string;
  caseStudies: StrapiCollection<CaseStudyShort>;
};

export const CaseStudiesDomainList: React.FC<CaseStudiesDomainListProps> = (
  props,
): React.JSX.Element => {
  return (
    <ListLayout
      className={clsx(props.className, "")}
      title="All case studies"
      description="Explore our selected examples of immigration cases handled for individuals and businesses, demonstrating our structured approach and long-term legal support."
      FiltersComponent={<Components.Filters />}
    >
      {props.caseStudies.data.map((item) => (
        <PublicationCard key={item.id} data={item} type="case-study" />
      ))}
    </ListLayout>
  );
};
