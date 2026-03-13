import { PublicationCard } from "@/cards/publication";

import { clsx } from "clsx";

import { ListLayout } from "@/layouts/list";

import type { PublicationShort } from "@/types/publication";

export type InsightsDomainListProps = {
  className?: string;
  publications: StrapiCollection<PublicationShort>;
};

export const InsightsDomainList: React.FC<InsightsDomainListProps> = (
  props,
): React.JSX.Element => {
  return (
    <ListLayout
      className={clsx(props.className, "")}
      title="All publications"
      description="Explore our selected examples of immigration cases handled for individuals and businesses, demonstrating our structured approach and long-term legal support."
      totalCount={props.publications.meta?.pagination.total || 0}
    >
      {props.publications.data.map((item) => (
        <PublicationCard key={item.id} data={item} type="publication" />
      ))}
    </ListLayout>
  );
};
