import { clsx } from "clsx";

import { PageLayout } from "@/layouts/page";

import { FaqsSection } from "@/sections/faqs";

import * as Components from "./components";

import { useContactUsDomain } from "./contact-us-domain.hook";

// import type { CommonData } from "@/types/common";
import type { Office } from "@/types/offices";

export type ContactUsDomainProps = {
  className?: string;
  commonData: CommonData | null;
  offices: Office[];
};

export const ContactUsDomain: React.FC<ContactUsDomainProps> = (
  props,
): React.JSX.Element => {
  const { routes } = useContactUsDomain();
  return (
    <PageLayout
      className={clsx(props.className, "")}
      routes={routes}
      HeaderComponent={<Components.Header />}
    >
      <Components.Offices data={props.offices} />

      {/* Faqs */}
      {props.commonData && (
        <FaqsSection className="mt-25 mb-25" data={props.commonData.faqs} />
      )}
    </PageLayout>
  );
};
