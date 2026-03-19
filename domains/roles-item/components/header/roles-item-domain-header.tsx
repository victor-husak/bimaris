"use client";

import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { Button } from "@/components/button";

import { ServiceIcon, MeetingIcon } from "@/icons/header-links";

import { useScrollToSection } from "@/hooks";

import { useRolesItemDomainHeader } from "./roles-item-domain-header.hook";

import { clsx } from "clsx";

import type { Role } from "@/types/roles";

export type RolesItemDomainHeaderProps = {
  className?: string;
  data: Role;
};

export const RolesItemDomainHeader: React.FC<RolesItemDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  const { onScrollToSection } = useScrollToSection();

  const { data } = useRolesItemDomainHeader(props);

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
      title={data.title}
      description={data.description}
      subtitle="Immigration services"
      tag={data.name}
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
            size="medium"
            variant="blur"
            animation="opacity"
            onClick={() => onScrollToSection("services-section")}
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
    key: "1",
    title: "Browse services",
    icon: <ServiceIcon />,
  },
  {
    key: "2",
    title: "Schedule a meeting",
    icon: <MeetingIcon />,
  },
];
