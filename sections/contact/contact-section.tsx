import { Banner, BannerList } from "@/ui";

import { Section, SectionHeader, Button } from "@/components";

import * as Components from "./components";

import { clsx } from "clsx";

export type ContactSectionProps = {
  className?: string;
};

export const ContactSection: React.FC<ContactSectionProps> = (
  props,
): React.JSX.Element => {
  return (
    <Section
      className={clsx(props.className, "")}
      HeaderComponent={
        <SectionHeader
          classNameDescription="max-w-[500px]"
          title="Contact us"
          description="Connect with our team in the way that suits you best - to ask questions, or explore the right immigration path forward."
        />
      }
    >
      <div className="flex gap-5">
        {/* Info */}
        <div className="max-w-[560px] rounded-2xl bg-[#D9E4F4]">
          {/* Banner */}
          <Banner
            className="rounded-b-lg bg-[#E0EBFA] text-[#507FEB] shadow-[0_0_1px_2px_black/3]"
            classNameDescription="max-w-[400px] text-[#818796]"
            title="Start the conversation"
            description="Share a few details about your situation, and our team will review your request and get back to you with clear next steps."
            ListComponent={
              <BannerList
                items={[
                  "+380 44 995 35 35",
                  "info@bimaris.legal",
                  "Show on the map",
                ]}
              />
            }
            ActionComponent={
              <Button href="/contact" animation="scale">
                Schedule a meeting
              </Button>
            }
          />

          {/* Offices */}
          <Components.Offices />
        </div>

        {/* Form */}
        <Components.Form className="flex-1" />
      </div>
    </Section>
  );
};
