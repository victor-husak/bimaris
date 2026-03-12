"use client";

import NextLink from "next/link";

import { PageLayoutHeader } from "@/layouts/page";

import { ArrowRightIcon } from "@/icons";

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
      FooterComponent={
        <div className="container-full">
          <div className="flex max-w-[calc(100%-700px-25px-17px)] items-center justify-between border-b border-[#E7EBF2] py-[25px]">
            <p className="text-[13px]/[17px] tracking-[.028em] text-[#818796]">
              Personalized immigration legal support for people and companies.{" "}
              <NextLink
                className={clsx(
                  "text-secondary link-with-arrow transition-all",
                  "hover:opacity-70",
                )}
                href="/contact-us"
              >
                <span className="link-dashed [--dashed-url:url(/images/underline-second.svg)]">
                  Read more
                </span>

                <ArrowRightIcon className="mt-[3px] [&>path]:stroke-[#5373DB]" />
              </NextLink>
            </p>
          </div>
        </div>
      }
    >
      <ContactForm
        className={clsx(
          "relative z-1 mt-auto mr-10 -mb-[62px] max-w-[700px] rounded-2xl",
          "after:absolute after:-inset-[5px] after:-z-2 after:rounded-[20px] after:bg-white/15 after:backdrop-blur-[30px] after:backdrop-brightness-115",
          "before:absolute before:-inset-x-[5px] before:-bottom-[5px] before:-z-1 before:h-[67px] before:rounded-b-[20px] before:bg-[#EAEDF2]",
        )}
        withHeader={false}
      />
    </PageLayoutHeader>
  );
};
