import { useMemo } from "react";

import type { RegionCardProps } from "./region-card";

export const useRegionCard = (props: RegionCardProps) => {
  const data = useMemo(() => {
    return {
      slug: props.data.slug,
      name: props.data.name,
      description: props.data.description,
      preview: props.data.preview
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${props.data.preview.url}`
        : "",
    };
  }, [props.data]);

  return { data };
};
