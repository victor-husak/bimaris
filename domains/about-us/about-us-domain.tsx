import { SectionHeader } from "@/components";

import { PageLayout } from "@/layouts/page";

import { ContactSection } from "@/sections/contact";
import { CasesSection } from "@/sections/cases";
import { ExpertsSection } from "@/sections/experts";
import { RolesService } from "@/sections/roles";
import { AdvantagesSection } from "@/sections/advantages";

import { Rating } from "@/ui/rating";

import * as Components from "./components";

import { clsx } from "clsx";

export type AboutUsDomainProps = {
  className?: string;
};

export const AboutUsDomain: React.FC<AboutUsDomainProps> = (
  props,
): React.JSX.Element => {
  return (
    <PageLayout
      className={clsx(props.className, "")}
      routes={[
        { label: "Home", value: "/" },
        { label: "About us", value: "/about-us" },
      ]}
      HeaderComponent={<Components.Header className="mb-5" />}
    >
      {/* Advantages */}
      <AdvantagesSection className="mb-[100px]" />

      {/* Information */}
      <Components.Information className="mb-[100px]" />

      {/* Roles */}
      <RolesService
        className="section-gradient mb-[100px]"
        HeaderComponent={
          <SectionHeader
            title="Who we serve"
            description="Founded by professional lawyers and immigration experts, Bimaris provides structured, reliable immigration legal support for."
          />
        }
      />

      {/* Experts */}
      <ExpertsSection />

      {/* Cases */}
      <CasesSection className="mb-[60px]" />

      {/* Rating */}
      <section className="container-full">
        <Rating />
      </section>

      {/* Contact */}
      <ContactSection className="mb-[50px]" />
    </PageLayout>
  );
};
