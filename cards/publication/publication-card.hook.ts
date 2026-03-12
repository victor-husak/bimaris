import { useMemo } from "react";

import { format } from "date-fns";

import type { PublicationCardProps } from "./publication-card";

export const usePublicationCard = (props: PublicationCardProps) => {
  const href = useMemo(() => {
    return `/insights/${props.data.slug}`;
  }, [props.data]);

  const data = useMemo(() => {
    return {
      date: format(new Date(props.data.createdAt), "MMMM dd, yyyy"),
      name: props.data.name,
      description: props.data.description,
      preview: `${process.env.NEXT_PUBLIC_STRAPI_URL}${props.data.preview.url}`,
      category: props.data.category,
    };
  }, [props.data]);

  return { href, data };
};
