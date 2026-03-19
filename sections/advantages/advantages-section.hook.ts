import { useMemo } from "react";

import type { AdvantagesSectionProps } from "./advantages-section";

export const useAdvantagesSection = (props: AdvantagesSectionProps) => {
  const data = useMemo(() => {
    return {
      banner: props.data.banner
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${props.data.banner.url}`
        : "/images/advantages.webp",
      items: props.data.items,
    };
  }, [props.data]);

  return { data };
};
