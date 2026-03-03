"use client";

import { Button } from "@/components";

import { PageLayoutHeader, PageLayoutHeaderSlides } from "@/layouts/page";

import { useHomeDomainHeader } from "./home-domain-header.hook";

import { clsx } from "clsx";

export type HomeDomainHeaderProps = {
  className?: string;
};

export const HomeDomainHeader: React.FC<HomeDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  const { slides } = useHomeDomainHeader(props);

  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      size="lg"
      description="Personalized immigration legal support for individuals - from first consultation to long-term residency, handled with clarity, care, and precision."
      media={{
        url: "/images/home/home-header.webp",
        width: 3978,
        height: 1860,
        alt: "Home header background",
      }}
      title={
        <>
          Immigration, <span>with clarity</span>
        </>
      }
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
        <PageLayoutHeaderSlides
          withRating={false}
          title="Choose your role:"
          data={slides}
        />
      }
    />
  );
};
