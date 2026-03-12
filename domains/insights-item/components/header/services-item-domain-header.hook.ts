import { useMemo } from "react";

import type { ServicesItemDomainHeaderProps } from "./services-item-domain-header";

export const useServicesItemDomainHeader = (
  props: ServicesItemDomainHeaderProps,
) => {
  const data = useMemo(() => {
    return {
      name: props.data.name,
      preview: `${process.env.NEXT_PUBLIC_STRAPI_URL}${props.data.preview.url}`,
      category: props.data.category,
    };
  }, [props.data]);

  return { data };
};
