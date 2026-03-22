"use client";

import { ListLayoutGrid } from "@/layouts/list";

import { PublicationCard } from "@/cards/publication";

import { useList } from "@/hooks";

import { getPublications } from "@/api/strapi/queries/publications";

import { PublicationShort } from "@/types/publication";

export type InsightsDomainListProps = {
  className?: string;
  publications: StrapiCollection<PublicationShort>;
  searchParams?: SearchParams;
};

export const InsightsDomainListGrid: React.FC<InsightsDomainListProps> = (
  props,
): React.JSX.Element => {
  const { data, loading, hasMore, onLoadMore } = useList<PublicationShort>({
    initialData: props.publications.data,
    pagination: props.publications.meta?.pagination,
    searchParams: props.searchParams,
    request: getPublications,
  });

  return (
    <ListLayoutGrid
      className={props.className}
      pagination={props.publications.meta?.pagination}
      hasMore={hasMore}
      loading={loading}
      onLoadMore={onLoadMore}
    >
      {!!data.length &&
        data.map((item) => (
          <PublicationCard key={item.id} data={item} type="publication" />
        ))}
    </ListLayoutGrid>
  );
};
