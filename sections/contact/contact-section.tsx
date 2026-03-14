import { useTranslations } from "next-intl";

import { Banner, BannerList } from "@/ui";

import { ContactForm } from "@/forms/contact";

import { Section, SectionHeader, Button } from "@/components";

import * as Components from "./components";

import { clsx } from "clsx";

export type ContactSectionProps = {
  className?: string;
};

export const ContactSection: React.FC<ContactSectionProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("sections.contact");

  return (
    <Section
      className={clsx(props.className, "")}
      HeaderComponent={
        <SectionHeader
          classNameDescription="max-w-[500px]"
          title={t("header.title")}
          description={t("header.description")}
        />
      }
    >
      <div className="flex gap-5">
        {/* Info */}
        <div className="max-w-[560px] overflow-hidden rounded-2xl bg-[#D9E4F4]">
          {/* Banner */}
          <Banner
            className="rounded-b-lg bg-[#E0EBFA] pt-[50px] pb-[50px] text-[#507FEB] shadow-[0_0_1px_2px_black/3]"
            classNameDescription="max-w-[400px] text-[#818796]"
            title={t("banner.title")}
            description={t("banner.description")}
            ListComponent={
              <BannerList
                items={[
                  "+380 44 995 35 35",
                  "info@bimaris.legal",
                  t("banner.list.map"),
                ]}
              />
            }
            ActionComponent={
              <Button href="/contact" animation="scale">
                {t("banner.action")}
              </Button>
            }
          />

          {/* Offices */}
          <Components.Offices />
        </div>

        {/* Form */}
        <ContactForm className="flex-1" />
      </div>
    </Section>
  );
};
