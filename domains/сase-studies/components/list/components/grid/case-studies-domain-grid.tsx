"use client";

import { ListLayoutGrid } from "@/layouts/list";

import { PublicationCard } from "@/cards/publication";

import { useList } from "@/hooks";

import { getCaseStudies } from "@/api/strapi/queries/case-studies";

import type { CaseStudyShort } from "@/types/case-studies";

export type CaseStudiesDomainListProps = {
  className?: string;
  caseStudies: StrapiCollection<CaseStudyShort>;
  searchParams?: SearchParams;
};

export const CaseStudiesDomainListGrid: React.FC<CaseStudiesDomainListProps> = (
  props,
): React.JSX.Element => {
  const { data, loading, hasMore, onLoadMore } = useList<CaseStudyShort>({
    initialData: props.caseStudies.data,
    pagination: props.caseStudies.meta?.pagination,
    searchParams: props.searchParams,
    request: getCaseStudies,
  });

  return (
    <ListLayoutGrid
      className={props.className}
      pagination={props.caseStudies.meta?.pagination}
      hasMore={hasMore}
      loading={loading}
      onLoadMore={onLoadMore}
    >
      {data.map((item) => (
        <PublicationCard key={item.id} data={item} type="case-study" />
      ))}
    </ListLayoutGrid>
  );
};
