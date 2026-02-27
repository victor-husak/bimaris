import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { clsx } from "clsx";

export type InsightsDomainHeaderProps = {
  className?: string;
};

export const InsightsDomainHeader: React.FC<InsightsDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      size="md"
      media={{
        url: "/images/insights.webp",
        width: 3978,
        height: 1560,
        alt: "Insights header background",
      }}
      RightComponent={
        <PageLayoutHeaderSlides title="Quick links:" data={items} />
      }
    />
  );
};

const items = [
  {
    id: 1,
    label: "Legal alerts",
    avatar: {
      url: "/images/genereted/home/slide1.webp",
      width: 120,
      height: 120,
      alt: "Legal alerts",
    },
  },
  {
    id: 2,
    label: "Case studies",
    avatar: {
      url: "/images/genereted/home/slide2.webp",
      width: 120,
      height: 120,
      alt: "For businesses",
    },
  },
];
