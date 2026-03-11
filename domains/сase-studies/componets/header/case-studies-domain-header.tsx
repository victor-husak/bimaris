"use client";

import {
  PageLayoutHeader,
  PageLayoutHeaderSlides,
  PageLayoutHeaderArrows,
} from "@/layouts/page";

import { Button } from "@/components";

import { ServiceIcon, MeetingIcon } from "@/icons/header-links";

import { useCaseStudiesDomainHeader } from "./case-studies-domain-header.hook";

import { clsx } from "clsx";

export type CaseStudiesDomainHeaderProps = {
  className?: string;
};

export const CaseStudiesDomainHeader: React.FC<CaseStudiesDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  const { activeIndex, activeItem, onTrigger } = useCaseStudiesDomainHeader();

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
        <PageLayoutHeaderArrows
          onTrigger={onTrigger}
          ActionComponent={
            <Button variant="white" animation="scale" href={activeItem.href}>
              Read case study
            </Button>
          }
        />
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
    href: "/contact-us",
  },
];
