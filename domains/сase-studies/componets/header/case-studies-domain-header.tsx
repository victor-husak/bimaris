import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { ServiceIcon, MeetingIcon } from "@/icons/header-links";

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
      classNameTitle="max-w-[530px]"
      type="second"
      size="md"
      media={{
        url: "/images/case-studies/header.webp",
        width: 3978,
        height: 1560,
        alt: "Case studies header background",
      }}
      title="Relocating a European technology company to Ukraine"
      subtitle="Featured"
      tag="Case study"
      RightComponent={
        <PageLayoutHeaderSlides title="Quick links:" data={items} />
      }
    />
  );
};

const items = [
  {
    id: 1,
    title: "Browse services",
    icon: <ServiceIcon />,
  },
  {
    id: 2,
    title: "Schedule a meeting",
    icon: <MeetingIcon />,
  },
];
