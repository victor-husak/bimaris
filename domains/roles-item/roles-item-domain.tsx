import { Suspense } from "react";
import { clsx } from "clsx";

import { PageLayout } from "@/layouts/page";

import { AdvantagesSection } from "@/sections/advantages";
import { ContactSection } from "@/sections/contact";
import { FaqsSection } from "@/sections/faqs";
import { CasesSection } from "@/sections/cases";
import { ServicesSection } from "@/sections/services";

import { Rating } from "@/ui";

import * as Components from "./components";

import { useRolesItemDomain } from "./roles-item-domain.hook";

import type { Role } from "@/types/roles";
import type { Client } from "@/types/clients";

export type RolesItemDomainProps = {
  className?: string;
  data: Role;
  clients: Client[];
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
      {!!props.data.advantages && (
        <AdvantagesSection
          className="mt-5"
          withBanner
          data={props.data.advantages}
        />
      )}

      {/* Points */}
      <Components.Points data={props.data.points} clients={props.clients} />

      {/* Services */}
      {!!props.data.services.length && (
        <ServicesSection
          className="section-gradient"
          data={props.data.services}
        />
      )}

      {/* Cases */}
      <CasesSection className="mb-15" data={props.data.caseStudies} />

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
      <Suspense>
        <ContactSection className="mb-[50px]" />
      </Suspense>
    </PageLayout>
  );
};
