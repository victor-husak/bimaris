"use client";

import { PageLayoutHeader } from "@/layouts/page";

import { ContactForm } from "@/forms/contact";

import { Button, List } from "@/components";

import { clsx } from "clsx";

export type ContactUsDomainHeaderProps = {
  className?: string;
};

export const ContactUsDomainHeader: React.FC<ContactUsDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      classNameDescription="max-w-[400px]!"
      size="md"
      media={{
        url: "/images/home/home-header.webp",
        width: 3978,
        height: 1860,
        alt: "Home header background",
      }}
      title={
        <>
          Connect with <span>Bimáris</span>
        </>
      }
      description="Share a few details about your situation, and our team will get back to you with clear next steps."
      subtitle="Explore"
      tag="Connect"
      InfoCpmponent={
        <List
          className="mt-[25px] text-[white]"
          items={["+380 44 995 35 35", "info@bimaris.legal", "Show on the map"]}
        />
      }
      ActionsComponent={
        <>
          <Button href="/" variant="white" size="medium" animation="scale">
            Book a meeting in Calendly ($99)
          </Button>
        </>
      }
      RightComponent={<ContactForm className="-mb-[62px] max-w-[700px]" />}
      // RightComponent={
      //   <PageLayoutHeaderSlides title="Quick links:" data={items} />
      // }
    ></PageLayoutHeader>
  );
};
