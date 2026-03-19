import {
  PageLayoutHeader,
  PageLayoutHeaderSlides,
  PageLayoutHeaderActions,
} from "@/layouts/page";

import { LangIcon, MeetingIcon } from "@/icons/header-links";

import { clsx } from "clsx";

import { useCaseStudiesItemDomainHeader } from "./сase-studies-item-domain-header.hook";

import type { Publication } from "@/types/publication";
import type { CaseStudy } from "@/types/case-studies";

export type CaseStudiesItemDomainHeaderProps = {
  className?: string;
  data: Publication | CaseStudy;
};

export const CaseStudiesItemDomainHeader: React.FC<
  CaseStudiesItemDomainHeaderProps
> = (props): React.JSX.Element => {
  const { data } = useCaseStudiesItemDomainHeader(props);

  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      classNameTitle="max-w-[640px]"
      size="sm"
      type="second"
      media={{
        url: data.preview,
        width: 3978,
        height: 1860,
        alt: data.name,
      }}
      title={data.name}
      subtitle="Posted in"
      meta={
        <>
          {data.isUpdated ? "Updated on" : "Posted on"} {data.date}
        </>
      }
      tag="Case studies"
      RightComponent={
        <PageLayoutHeaderSlides title="Quick links:" data={slides} />
      }
      InfoCpmponent={<PageLayoutHeaderActions className="mt-[30px]" />}
    />
  );
};

const slides = [
  {
    key: "1",
    label: "Translate to",
    title: "Select language",
    icon: <LangIcon />,
  },
  {
    key: "2",
    title: "Schedule a meeting",
    icon: <MeetingIcon />,
  },
];
