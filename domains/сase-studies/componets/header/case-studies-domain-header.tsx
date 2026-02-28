import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { clsx } from "clsx";

export type CaseStudiesDomainHeaderProps = {
  className?: string;
};

export const CaseStudiesDomainHeader: React.FC<CaseStudiesDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      size="md"
      media={{
        url: "/images/case-studies/header.webp",
        width: 3978,
        height: 1560,
        alt: "Case studies header background",
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
