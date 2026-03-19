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
import type { AboutUsPage } from "@/types/about-us-page";

export type AboutUsDomainProps = {
  className?: string;
  pageData: AboutUsPage | null;
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
      {!!props.pageData?.advantages && (
        <AdvantagesSection
          className="mb-[75px]"
          data={props.pageData.advantages}
        />
      )}

      {/* Information */}
      {!!props.pageData?.information && (
        <InformationSection
          className="mb-[100px]"
          data={props.pageData.information}
        />
      )}

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
