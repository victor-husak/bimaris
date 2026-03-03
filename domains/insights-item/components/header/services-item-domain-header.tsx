"use client";

import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { LangIcon, MeetingIcon } from "@/icons/header-links";

import { clsx } from "clsx";

export type ServicesItemDomainHeaderProps = {
  className?: string;
};

export const ServicesItemDomainHeader: React.FC<
  ServicesItemDomainHeaderProps
> = (props): React.JSX.Element => {
  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      classNameTitle="max-w-[540px]"
      size="md"
      type="second"
      media={{
        url: "/images/genereted/insights-item.webp",
        width: 3978,
        height: 1860,
        alt: "Service header background",
      }}
      title="Relocating a European technology company to Ukraine"
      subtitle="Posted in"
      tag="Insights"
      RightComponent={
        <PageLayoutHeaderSlides title="Quick links:" data={slides} />
      }
    />
  );
};

const slides = [
  {
    id: 1,
    label: "Translate to",
    title: "Select language",
    icon: <LangIcon />,
  },
  {
    id: 2,
    title: "Schedule a meeting",
    icon: <MeetingIcon />,
  },
];
