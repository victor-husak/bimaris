"use client";

import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { Button } from "@/components/button";

import { ServiceIcon, MeetingIcon } from "@/icons/header-links";

import { clsx } from "clsx";

import { useServicesItemDomainHeader } from "./services-item-domain-header.hook";

import type { Service } from "@/types/services";

export type ServicesItemDomainHeaderProps = {
  className?: string;
  data: Service;
};

export const ServicesItemDomainHeader: React.FC<
  ServicesItemDomainHeaderProps
> = (props): React.JSX.Element => {
  const { data } = useServicesItemDomainHeader(props);

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
      title={<>{data.name}</>}
      description={data.description}
      subtitle="Immigration services"
      tag="For individuals"
      ActionsComponent={
        <>
          <Button href="/" variant="white" size="medium" animation="scale">
            Connect with our team
          </Button>

          <Button
            href="/services/1"
            size="medium"
            variant="blur"
            animation="opacity"
          >
            Open services
          </Button>
        </>
      }
      RightComponent={
        <PageLayoutHeaderSlides title="Quick links:" data={slides} />
      }
    />
  );
};

const slides = [
  {
    id: 1,
    title: "Overview",
    icon: <ServiceIcon />,
  },
  {
    id: 2,
    title: "Schedule a meeting",
    icon: <MeetingIcon />,
  },
];
