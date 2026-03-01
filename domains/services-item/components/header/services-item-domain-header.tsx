"use client";

import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { ServiceIcon, MeetingIcon } from "@/icons/header-links";

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
      size="md"
      media={{
        url: "/images/genereted/service.webp",
        width: 3978,
        height: 1860,
        alt: "Service header background",
      }}
      RightComponent={
        <PageLayoutHeaderSlides title="Quick links:" data={slides} />
      }
    />
  );
};

const slides = [
  {
    id: 1,
    label: "Overview",
    icon: <ServiceIcon />,
  },
  {
    id: 2,
    label: "Schedule a meeting",
    icon: <MeetingIcon />,
  },
];
