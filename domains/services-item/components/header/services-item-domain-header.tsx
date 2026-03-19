"use client";

import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { Button } from "@/components/button";

import { ServiceIcon, MeetingIcon } from "@/icons/header-links";

import { clsx } from "clsx";

import { useServicesItemDomainHeader } from "./services-item-domain-header.hook";

import { useScrollToSection } from "@/hooks";

import type { Service } from "@/types/services";

export type ServicesItemDomainHeaderProps = {
  className?: string;
  data: Service;
};

export const ServicesItemDomainHeader: React.FC<
  ServicesItemDomainHeaderProps
> = (props): React.JSX.Element => {
  const { data, onActionClick } = useServicesItemDomainHeader(props);

  const { onScrollToSection } = useScrollToSection();

  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      size="md"
      media={{
        url: data.preview,
        width: 3978,
        height: 1860,
        alt: "Service header background",
      }}
      title={data.name}
      description={data.description}
      subtitle="Immigration services"
      tag="For individuals"
      ActionsComponent={
        <>
          <Button
            variant="white"
            size="medium"
            animation="scale"
            onClick={() => onScrollToSection("contact-us")}
          >
            Connect with our team
          </Button>

          <Button
            href="/about-us/#section-roles"
            size="medium"
            variant="blur"
            animation="opacity"
          >
            Open services
          </Button>
        </>
      }
      RightComponent={
        <PageLayoutHeaderSlides
          title="Quick links:"
          data={slides}
          onSelect={onScrollToSection}
        />
      }
    />
  );
};

const slides = [
  {
    key: "single-layout-content",
    title: "Overview",
    icon: <ServiceIcon />,
  },
  {
    key: "contact-us",
    title: "Schedule a meeting",
    icon: <MeetingIcon />,
  },
];
