import { clsx } from "clsx";
import { Suspense } from "react";

import { SectionHeader } from "@/components";

import { PageLayout } from "@/layouts/page";

import { ContactSection } from "@/sections/contact";
import { CasesSection } from "@/sections/cases";
import { ExpertsSection } from "@/sections/experts";
import { RolesService } from "@/sections/roles";
import { AdvantagesSection } from "@/sections/advantages";
import { InformationSection } from "@/sections/information";

import { Rating } from "@/ui/rating";

import * as Components from "./components";

import type { CaseStudyShort } from "@/types/case-studies";

export type AboutUsDomainProps = {
  className?: string;
  caseStudies: CaseStudyShort[];
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
      <AdvantagesSection className="mb-[75px]" data={advantages} />

      {/* Information */}
      <InformationSection
        className="mb-[100px]"
        title="Professional immigration legal services for individuals, businesses, and investors in the Baltics"
        description={information}
      />

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
      <Suspense>
        <ExpertsSection />
      </Suspense>

      {/* Cases */}
      <CasesSection className="mb-[60px]" data={props.caseStudies} />

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

const information = `That’s why we provide expert legal support to help you achieve your dreams of living and working in a new country. At our firm, we pride ourselves on being more than just lawyers – we are [dedicated partners in your journey.](/)

With extensive experience, we have successfully assisted over 1,000 businesses in navigating the complexities of immigration to Ukraine. Our team is here to provide you with personalized guidance and support every step of the way. Let us help you achieve your goals and make your transition to Ukraine as smooth as possible!`;
