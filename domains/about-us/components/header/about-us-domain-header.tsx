import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { Button } from "@/components/button";

import { ServiceIcon, MeetingIcon } from "@/icons/header-links";

import { clsx } from "clsx";

export type AboutUsDomainHeaderProps = {
  className?: string;
};

export const AboutUsDomainHeader: React.FC<AboutUsDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      size="lg"
      media={{
        url: "/images/about-us/header.webp",
        width: 3978,
        height: 1767,
        alt: "About Us header background",
      }}
      title={
        <>
          Discover <span>Bimáris</span>
        </>
      }
      description="Bimaris  helps individuals and families navigate the Ukrainian immigration process with clarity, confidence, and expert legal support."
      subtitle="Explore"
      tag="Our story"
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
