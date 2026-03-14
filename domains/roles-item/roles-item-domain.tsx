import { PageLayout } from "@/layouts/page";

import { AdvantagesSection } from "@/sections/advantages";
import { ContactSection } from "@/sections/contact";
import { FaqsSection } from "@/sections/faqs";
import { CasesSection } from "@/sections/cases";
import { ServicesSection } from "@/sections/services";

import { Rating } from "@/ui";

import * as Components from "./components";

import { clsx } from "clsx";

import { useRolesItemDomain } from "./roles-item-domain.hook";

import type { Role } from "@/types/roles";

export type RolesItemDomainProps = {
  className?: string;
  data: Role;
};

export const RolesItemDomain: React.FC<RolesItemDomainProps> = (
  props,
): React.JSX.Element => {
  const { routes } = useRolesItemDomain(props);

  return (
    <PageLayout
      className={clsx(props.className, "")}
      routes={routes}
      HeaderComponent={<Components.Header data={props.data} />}
    >
      {/* Advantages */}
      <AdvantagesSection className="mt-5" withBanner data={advantages} />

      {/* Points */}
      <Components.Points />

      {/* Services */}
      <ServicesSection
        className="section-gradient"
        data={props.data.services}
      />

      {/* Cases */}
      <CasesSection className="mb-15" data={props.data.case_studies} />

      {/* FAQs */}
      <FaqsSection
        className="section-gradient z-1 mb-[100px] pt-[100px]"
        data={props.data.faqs}
      />

      {/* Rating */}
      <section className="container-full">
        <Rating />
      </section>

      {/* Contact */}
      <ContactSection className="mb-[50px]" />
    </PageLayout>
  );
};

const advantages = [
  {
    key: "1",
    title: "98%",
    description:
      "Client satisfaction rate based on long-term partnerships and repeat engagements.",
    href: "/",
  },
  {
    key: "2",
    title: "1,000+",
    description:
      "Successful immigration cases handled for individuals and businesses across multiple jurisdictions.",
    href: "/",
  },
  {
    key: "3",
    title: "10 years",
    description:
      "Of combined professional experience in immigration law and international advisory.",
    href: "/",
  },
];
