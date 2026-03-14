import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { ServiceIcon, MeetingIcon } from "@/icons/header-links";

import { clsx } from "clsx";

import { usePeopleDomainHeader } from "./people-domain-header.hook";

import type { Publication } from "@/types/publication";
import type { CaseStudy } from "@/types/case-studies";

export type PeopleDomainHeaderProps = {
  className?: string;
  data: Publication | CaseStudy;
};

export const PeopleDomainHeader: React.FC<PeopleDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  const { data } = usePeopleDomainHeader(props);

  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      classNameTitle="max-w-[540px]"
      size="sm"
      type="second"
      media={{
        url: "/images/people/header.webp",
        width: 3978,
        height: 1560,
        alt: "Service header background",
      }}
      title={"Mr. Taras Horbatiuk"}
      subtitle="Explore our"
      description="Founder & Managing Partner"
      tag="People"
      RightComponent={
        <PageLayoutHeaderSlides title="Quick links:" data={slides} />
      }
    />
  );
};

const slides = [
  {
    id: 1,
    title: "Related case studies",
    icon: <ServiceIcon />,
  },
  {
    id: 2,
    title: "Schedule a meeting",
    icon: <MeetingIcon />,
  },
];
