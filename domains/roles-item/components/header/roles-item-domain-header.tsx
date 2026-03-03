"use client";

import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { Button } from "@/components/button";

import { ServiceIcon, MeetingIcon } from "@/icons/header-links";

// import { useRolesItemDomainHeader } from "./roles-item-domain-header.hook";

import { clsx } from "clsx";

export type RolesItemDomainHeaderProps = {
  className?: string;
};

export const RolesItemDomainHeader: React.FC<RolesItemDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  // const { slides } = useRolesItemDomainHeader(props);

  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      size="md"
      media={{
        url: "/images/genereted/role.webp",
        width: 3978,
        height: 1860,
        alt: "Role header background",
      }}
      title={
        <>
          Immigration, <span>built for you</span>
        </>
      }
      description="Bimaris  helps individuals and families navigate the Ukrainian immigration process with clarity, confidence, and expert legal support."
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
