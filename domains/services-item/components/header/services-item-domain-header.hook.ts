import { useMemo } from "react";

import type { ServicesItemDomainHeaderProps } from "./services-item-domain-header";

export const useServicesItemDomainHeader = (
  props: ServicesItemDomainHeaderProps,
) => {
  const data = useMemo(() => {
    return {
      name: props.data.name,
      description: props.data.description,
      preview: !!props.data.mainImage
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${props.data.mainImage.url}`
        : "",
      category: "category" in props.data ? props.data.category : undefined,
    };
  }, [props.data]);

  return { data };
};
