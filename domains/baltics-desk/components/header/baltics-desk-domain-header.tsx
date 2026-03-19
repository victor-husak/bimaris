import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { Button } from "@/components/button";

import { ServiceIcon, MeetingIcon } from "@/icons/header-links";

import { clsx } from "clsx";

export type BalticsDeskDomainHeaderProps = {
  className?: string;
};

export const BalticsDeskDomainHeader: React.FC<BalticsDeskDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      size="lg"
      media={{
        url: "/images/baltics-desk/header.webp",
        width: 3978,
        height: 1767,
        alt: "Baltics Desk header background",
      }}
      title="Baltics desk"
      description="We support individuals, founders, and international companies navigating immigration and relocation processes in Estonia, Latvia, and Lithuania."
      subtitle="Legal Advisory in the"
      tag="Baltic states"
      ActionsComponent={
        <>
          <Button
            href="/contact-us"
            variant="white"
            size="medium"
            animation="scale"
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
    href: "/about-us/#section-roles",
  },
  {
    key: "2",
    title: "Schedule a meeting",
    icon: <MeetingIcon />,
    href: "/contact-us",
  },
];
