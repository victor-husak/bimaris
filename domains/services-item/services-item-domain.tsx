import { PageLayout } from "@/layouts/page";

import { AdvantagesSection } from "@/sections/advantages";
import { ContactSection } from "@/sections/contact";
import { CasesSection } from "@/sections/cases";
import { FaqsSection } from "@/sections/faqs";

import { Rating } from "@/ui/rating";

import * as Components from "./components";

import { clsx } from "clsx";

export type ServicesItemDomainProps = {
  className?: string;
};

export const ServicesItemDomain: React.FC<ServicesItemDomainProps> = (
  props,
): React.JSX.Element => {
  return (
    <PageLayout
      className={clsx(props.className, "")}
      routes={[
        { label: "Home", value: "/" },
        { label: "Private clients", value: "/private-clients" },
        { label: "Citizenship of Ukraine", value: "/services/1" },
      ]}
      HeaderComponent={<Components.Header />}
    >
      {/* Advantages */}
      <AdvantagesSection className="mt-5" />

      {/* Content */}
      <Components.Content className="mb-[67px]" />

      {/* Faqs */}
      <FaqsSection className="z-1 mb-[110px]" />

      {/* Cases */}
      <CasesSection className="section-gradient mb-[70px]" />

      {/* Rating */}
      <section className="container-full">
        <Rating />
      </section>

      {/* Contact */}
      <ContactSection className="mb-[50px]" />
    </PageLayout>
  );
};
