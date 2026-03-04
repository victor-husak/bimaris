import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { Button } from "@/components/button";

import { LangIcon, MeetingIcon } from "@/icons/header-links";

import { clsx } from "clsx";

export type BalticsDeskItemDomainHeaderProps = {
  className?: string;
};

export const BalticsDeskItemDomainHeader: React.FC<
  BalticsDeskItemDomainHeaderProps
> = (props): React.JSX.Element => {
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
      title={
        <>
          Solutions in <span>Estonia</span>
        </>
      }
      description="Bimaris  helps individuals and families navigate the Ukrainian immigration process with clarity, confidence, and expert legal support."
      subtitle="Legal Advisory in the"
      tag="Baltic states"
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
    title: "Select language",
    label: "Translate to",
    icon: <LangIcon />,
  },
  {
    id: 2,
    title: "Schedule a meeting",
    icon: <MeetingIcon />,
  },
];
