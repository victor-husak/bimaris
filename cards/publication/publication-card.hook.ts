import { useMemo } from "react";

import { format } from "date-fns";

import type { PublicationCardProps } from "./publication-card";
import type { PublicationShort } from "@/types/publication";

export const usePublicationCard = (props: PublicationCardProps) => {
  const data = useMemo(() => {
    const date = props.data.date || props.data.createdAt;
    const isUpdated = new Date(props.data.updatedAt) > new Date(date);

    return {
      date: format(
        new Date(isUpdated ? props.data.updatedAt : date),
        "dd.MM.yyyy",
      ),
      name: props.data.name,
      description: props.data.description,
      preview: `${process.env.NEXT_PUBLIC_STRAPI_URL}${props.data.preview.url}`,
      category:
        props.type === "publication"
          ? (props.data as PublicationShort).category
          : undefined,
      href:
        props.type === "case-study"
          ? `/case-studies/${props.data.slug}`
          : `/insights/${props.data.slug}`,
    };
  }, [props.data, props.type]);

  return { data };
};
