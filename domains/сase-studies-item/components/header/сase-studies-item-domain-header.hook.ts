import { useMemo } from "react";

import { format } from "date-fns";

import { CaseStudiesItemDomainHeaderProps } from "./сase-studies-item-domain-header";

export const useCaseStudiesItemDomainHeader = (
  props: CaseStudiesItemDomainHeaderProps,
) => {
  const data = useMemo(() => {
    const date = props.data.date || props.data.createdAt;

    const isUpdated = new Date(props.data.updatedAt) > new Date(date);

    return {
      name: props.data.name,
      preview: `${process.env.NEXT_PUBLIC_STRAPI_URL}${props.data.preview.url}`,
      category: "category" in props.data ? props.data.category : undefined,
      date: format(
        new Date(isUpdated ? props.data.updatedAt : date),
        "dd.MM.yyyy",
      ),
      isUpdated,
    };
  }, [props.data]);

  return { data };
};
