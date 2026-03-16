import { useMemo } from "react";

import { format } from "date-fns";

import type { ServicesItemDomainHeaderProps } from "./services-item-domain-header";

export const useServicesItemDomainHeader = (
  props: ServicesItemDomainHeaderProps,
) => {
  const data = useMemo(() => {
    return {
      name: props.data.name,
      preview: `${process.env.NEXT_PUBLIC_STRAPI_URL}${props.data.preview.url}`,
      category: "category" in props.data ? props.data.category : undefined,
      createdAt: format(new Date(props.data.createdAt), "dd.MM.yyyy"),
    };
  }, [props.data]);

  return { data };
};
