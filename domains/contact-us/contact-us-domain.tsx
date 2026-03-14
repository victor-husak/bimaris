import { PageLayout } from "@/layouts/page";

import { FaqsSection } from "@/sections/faqs";

import * as Components from "./components";

import { clsx } from "clsx";

import type { CommonData } from "@/types/common";

export type ContactUsDomainProps = {
  className?: string;
  commonData: CommonData | null;
};

export const ContactUsDomain: React.FC<ContactUsDomainProps> = (
  props,
): React.JSX.Element => {
  return (
    <PageLayout
      className={clsx(props.className, "")}
      routes={[
        { label: "Home", value: "/" },
        { label: "Contact us", value: "/contact-us" },
      ]}
      HeaderComponent={<Components.Header />}
    >
      <Components.Offices className="mt-[62px]" />

      {/* Faqs */}
      {props.commonData && (
        <FaqsSection className="mt-25 mb-25" data={props.commonData.faqs} />
      )}
    </PageLayout>
  );
};
