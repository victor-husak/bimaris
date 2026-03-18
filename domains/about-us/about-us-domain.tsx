import { Suspense } from "react";

import { SectionHeader, Button } from "@/components";

import { PageLayout } from "@/layouts/page";

import { ContactSection } from "@/sections/contact";
import { CasesSection } from "@/sections/cases";
import { ExpertsSection } from "@/sections/experts";
import { RolesService } from "@/sections/roles";
import { AdvantagesSection } from "@/sections/advantages";
import { InformationSection } from "@/sections/information";

import { Rating } from "@/ui/rating";

import * as Components from "./components";

import { clsx } from "clsx";

import { useTranslations } from "next-intl";

import { useAboutUsDomain } from "./about-us-domain.hook";

import type { CaseStudyShort } from "@/types/case-studies";

export type AboutUsDomainProps = {
  className?: string;
  caseStudies: CaseStudyShort[];
};

export const AboutUsDomain: React.FC<AboutUsDomainProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("pages.about-us");

  const { routes } = useAboutUsDomain();

  return (
    <PageLayout
      className={clsx(props.className, "")}
      routes={routes}
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
            title={t("roles.title")}
            description={t("roles.description")}
          />
        }
      />

      {/* Experts */}
      <Suspense>
        <ExpertsSection
          title="Meet your experts"
          description="Explore our selected examples of immigration cases handled for individuals and businesses, demonstrating our structured approach and long-term legal support."
        />
      </Suspense>

      {/* Points */}
      <Components.Points />

      {/* Cases */}
      <CasesSection
        className="mb-[60px]"
        data={props.caseStudies}
        HeaderComponent={
          <SectionHeader
            className="pb-0"
            classNameDescription="max-w-[500px]"
            title="Customer case studies"
            description="Explore our selected examples of immigration cases handled for individuals and businesses, demonstrating our structured approach and long-term legal support."
            ActionComponent={<Button href="/case-studies">View all</Button>}
          />
        }
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

const advantages = [
  {
    key: "1",
    title: "98%",
    description:
      "Client satisfaction rate based on long-term partnerships and repeat engagements.",
  },
  {
    key: "2",
    title: "1,000+",
    description:
      "Successful immigration cases handled for individuals and businesses across multiple jurisdictions.",
  },
  {
    key: "3",
    title: "10 years",
    description:
      "Of combined professional experience in immigration law and international advisory.",
  },
];

const information = `That’s why we provide expert legal support to help you achieve your dreams of living and working in a new country. At our firm, we pride ourselves on being more than just lawyers – we are [dedicated partners in your journey.](/)

With extensive experience, we have successfully assisted over 1,000 businesses in navigating the complexities of immigration to Ukraine. Our team is here to provide you with personalized guidance and support every step of the way. Let us help you achieve your goals and make your transition to Ukraine as smooth as possible!`;
