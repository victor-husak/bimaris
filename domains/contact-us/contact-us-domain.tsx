import { PageLayout } from "@/layouts/page";

import { FaqsSection } from "@/sections/faqs";

import * as Components from "./components";

import { clsx } from "clsx";

export type ContactUsDomainProps = {
  className?: string;
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
      <Components.Offices />

      {/* Faqs */}
      <FaqsSection className="mt-25 mb-25" />
    </PageLayout>
  );
};
