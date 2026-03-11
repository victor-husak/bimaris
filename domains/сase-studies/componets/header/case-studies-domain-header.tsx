"use client";

import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { Button, ButtonIcon } from "@/components";

import { ArrowRightIcon } from "@/icons";

import { ServiceIcon, MeetingIcon } from "@/icons/header-links";

import { useCaseStudiesDomainHeader } from "./case-studies-domain-header.hook";

import { clsx } from "clsx";

export type CaseStudiesDomainHeaderProps = {
  className?: string;
};

export const CaseStudiesDomainHeader: React.FC<CaseStudiesDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  const { activeIndex, activeItem, onTrigger } =
    useCaseStudiesDomainHeader(props);

  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      classNameTitle="max-w-[530px]"
      type="second"
      size="sm"
      activeIndex={activeIndex}
      media={activeItem.media}
      title={activeItem.title}
      subtitle="Featured"
      tag="Case study"
      RightComponent={
        <PageLayoutHeaderSlides title="Quick links:" data={links} />
      }
      ContentComponent={
        <div className="mt-[30px] flex items-center">
          {/* Arrows */}
          <div className={clsx("flex items-center gap-2")}>
            <ButtonIcon
              className="rotate-180"
              onClick={() => onTrigger("prev")}
            >
              <ArrowRightIcon color="#fff" />
            </ButtonIcon>

            <ButtonIcon onClick={() => onTrigger("next")}>
              <ArrowRightIcon color="#fff" />
            </ButtonIcon>
          </div>

          {/* Hr */}
          <div className="mx-[15px] h-2 w-px bg-white/20" />

          {/* Action */}
          <Button variant="white" animation="scale" href={activeItem.href}>
            Read case study
          </Button>
        </div>
      }
    />
  );
};

const links = [
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
