import { useMemo } from "react";

import { useCarousel } from "@/hooks";

import { CaseStudiesDomainHeaderProps } from "./case-studies-domain-header";

export const useCaseStudiesDomainHeader = (
  props: CaseStudiesDomainHeaderProps,
) => {
  const items = useMemo(() => {
    return props.data.map((item) => {
      return {
        id: item.id,
        title: item.name,
        href: `/case-studies/${item.slug}`,
        media: {
          url: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.preview.url}`,
          width: item.preview.width,
          height: item.preview.height,
          alt: item.preview.alternativeText || "",
        },
      };
    });
  }, [props.data]);

  const { activeIndex, onTrigger } = useCarousel({
    count: items.length,
    duration: 8000,
  });

  const activeItem = useMemo(() => {
    return items[activeIndex] ?? items.at(0);
  }, [activeIndex, items]);

  return { activeIndex, activeItem, onTrigger };
};
