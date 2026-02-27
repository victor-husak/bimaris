import { PageLayout } from "@/layouts/page";

import { AdvantagesSection } from "@/sections/advantages";
import { ContactSection } from "@/sections/contact";
import { FaqsSection } from "@/sections/faqs";
import { CasesSection } from "@/sections/cases";

import { Rating } from "@/ui";

import * as Components from "./components";

import { clsx } from "clsx";

export type RolesItemDomainProps = {
  className?: string;
};

export const RolesItemDomain: React.FC<RolesItemDomainProps> = (
  props,
): React.JSX.Element => {
  return (
    <PageLayout
      className={clsx(props.className, "")}
      HeaderComponent={<Components.Header />}
    >
      {/* Advantages */}
      <AdvantagesSection className="mt-5" />

      {/* Points */}
      <Components.Points />

      {/* Services */}
      <Components.Services className="section-gradient" />

      {/* Cases */}
      <CasesSection className="mb-15" />

      {/* FAQs */}
      <FaqsSection className="section-gradient z-1 mb-[100px] pt-[100px]" />

      {/* Rating */}
      <section className="container-full">
        <Rating />
      </section>

      {/* Contact */}
      <ContactSection className="mb-[50px]" />
    </PageLayout>
  );
};
