import { useMemo } from "react";

import { useCarousel } from "@/hooks";

export const useInsightsDomainHeader = () => {
  const { activeIndex, onTrigger } = useCarousel({
    count: items.length,
    duration: 8000,
  });

  const activeItem = useMemo(() => {
    return items[activeIndex] ?? items.at(0);
  }, [activeIndex]);

  return { activeIndex, activeItem, onTrigger };
};

const items = [
  {
    id: 1,
    title: "Changes to entry and stay rulesfor foreign nationals",
    href: "/insights/1",
    media: {
      url: "/images/insights.webp",
      width: 3978,
      height: 1560,
      alt: "Insights header background",
    },
  },
  {
    id: 2,
    title: "Relocating a European technology company to Ukraine",
    href: "/insights/2",
    media: {
      url: "/images/case-studies/header.webp",
      width: 3978,
      height: 1560,
      alt: "Case studies header background",
    },
  },
];
