import { useTranslations } from "next-intl";
import { clsx } from "clsx";

import { Banner, BannerList } from "@/ui";

import { ContactForm } from "@/forms/contact";

import { Section, SectionHeader, Button } from "@/components";

import * as Components from "./components";

import type { Office } from "@/types/offices";

export type ContactSectionProps = {
  className?: string;
};

export type ContactSectionCombinedProps = ContactSectionProps & {
  offices: Office[];
};

export const ContactSection: React.FC<ContactSectionCombinedProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("sections.contact");

  return (
    <Section
      id="contact-us"
      className={clsx(props.className, "")}
      HeaderComponent={
        <SectionHeader
          classNameDescription="max-w-[500px]"
          title={t("header.title")}
          description={t("header.description")}
        />
      }
    >
      <div className={clsx("flex flex-col-reverse gap-5", "lg:flex-row")}>
        {/* Info */}
        <div
          className={clsx(
            "flex flex-[1.7] flex-col overflow-hidden rounded-2xl bg-[#D9E4F4]",
            "xl:max-w-[560px]",
          )}
        >
          {/* Banner */}
          <Banner
            className="flex-1 rounded-b-lg bg-[#E0EBFA] pt-[50px] pb-[50px] text-[#507FEB] shadow-[0_0_1px_2px_black/3]"
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
          <Components.Offices data={props.offices} />
        </div>

        {/* Form */}
        <ContactForm className="flex-2" />
      </div>
    </Section>
  );
};
