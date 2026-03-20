import { useMemo } from "react";

import type { RolesItemDomainPointsProps } from "./roles-item-domain-points";

export const useRolesItemDomainPoints = (props: RolesItemDomainPointsProps) => {
  const data = useMemo(() => {
    return {
      title: props.data.title,
      preview: props.data.preview
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${props.data.preview.url}`
        : "/images/faqs.webp",
      items: props.data.items,
    };
  }, [props.data]);

  return { data };
};
