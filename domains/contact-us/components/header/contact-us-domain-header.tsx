import { clsx } from "clsx";
import { useTranslations } from "next-intl";

import { NextLink } from "@/i18n/routing";

import { PageLayoutHeader } from "@/layouts/page";

import { ArrowRightIcon } from "@/icons";

import { ContactForm } from "@/forms/contact";

import { Button, List } from "@/components";

export type ContactUsDomainHeaderProps = {
  className?: string;
};

export const ContactUsDomainHeader: React.FC<ContactUsDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("pages.contact.header");

  return (
    <PageLayoutHeader
      className={clsx(props.className, "")}
      classNameDescription="max-w-[400px]!"
      classNameTitle="text-[38px]/[49px]"
      size="md"
      media={{
        url: "/images/people/header.webp",
        width: 3978,
        height: 1560,
        alt: "Service header background",
      }}
      title={
        <>
          {t("title")} <span>Bimáris</span>
        </>
      }
      description={t("description")}
      subtitle="Response within"
      tag="1 business day"
      InfoCpmponent={
        <List
          className="mt-[25px] text-[white]"
          items={["+380 44 995 35 35", "info@bimaris.legal", t("items.map")]}
        />
      }
      // ActionsComponent={
      //   <>
      //     <Button href="/" variant="white" size="medium" animation="scale">
      //       {t("actions")} ($99)
      //     </Button>
      //   </>
      // }
      FooterComponent={
        <div className="container-full">
          <div className="flex max-w-[calc(100%-700px-25px-17px)] items-center justify-between border-b border-[#E7EBF2] py-[25px]">
            <p className="text-[13px]/[17px] tracking-[.028em] text-[#818796]">
              {t("footer.description")}{" "}
              <NextLink
                className={clsx(
                  "text-secondary link-with-arrow transition-all",
                  "hover:opacity-70",
                )}
                href="/contact-us"
              >
                <span className="link-dashed [--dashed-url:url(/images/underline-second.svg)]">
                  {t("footer.action")}
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
