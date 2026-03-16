import NextImage from "next/image";

import {
  PageLayoutHeader,
  PageLayoutHeaderSlides,
  PageLayoutHeaderActions,
} from "@/layouts/page";

import { Support } from "@/ui/support";

import { ServiceIcon, MeetingIcon } from "@/icons/header-links";

import { clsx } from "clsx";

import type { Expert } from "@/types/experts";

import { usePeopleDomainHeader } from "./people-domain-header.hook";

// import type { Publication } from "@/types/publication";
// import type { CaseStudy } from "@/types/case-studies";

export type PeopleDomainHeaderProps = {
  className?: string;
  data: Expert;
  // data: Publication | CaseStudy;
};

export const PeopleDomainHeader: React.FC<PeopleDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  const { data } = usePeopleDomainHeader(props);

  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      classNameTitle="max-w-[540px]"
      classNameOverlay="after:opacity-20 after:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)] before:hidden"
      size="sm"
      type="second"
      media={{
        url: "/images/people/header.webp",
        width: 3978,
        height: 1560,
        alt: "Service header background",
      }}
      title={data.name}
      subtitle="Explore our"
      description={data.position}
      tag="People"
      RightComponent={
        <PageLayoutHeaderSlides title="Quick links:" data={slides} />
      }
      InfoCpmponent={<PageLayoutHeaderActions className="mt-[25px]" />}
      FooterComponent={
        <div className="container-full">
          <Support />
        </div>
      }
    >
      <NextImage
        className="absolute right-[300px] bottom-0 h-[420px] w-[460px] object-contain object-center"
        src={data.avatar}
        alt={data.name}
        width={660}
        height={660}
      />
    </PageLayoutHeader>
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
