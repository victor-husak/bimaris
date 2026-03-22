import { clsx } from "clsx";
import { Suspense } from "react";

import { useTranslations } from "next-intl";

import { SectionHeader } from "@/components";

import { PageLayout } from "@/layouts/page";

import { CasesSection } from "@/sections/cases";
import { AdvantagesSection } from "@/sections/advantages";
import { ContactSection } from "@/sections/contact";
import { UpdatesSection } from "@/sections/updates";
import { RolesService } from "@/sections/roles";

import { Rating } from "@/ui";

import * as Components from "./components";

import type { CaseStudyShort } from "@/types/case-studies";
import type { PublicationShort } from "@/types/publication";
import type { HomePage } from "@/types/home-page";
import type { RoleShort } from "@/types/roles";

export type HomeDomainProps = {
  className?: string;
  homePageData: HomePage | null;
  caseStudies: CaseStudyShort[];
  publications: PublicationShort[];
  roles: RoleShort[];
};

export const HomeDomain: React.FC<HomeDomainProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("pages.home");
  return (
    <PageLayout
      className={clsx(props.className, "")}
      HeaderComponent={<Components.Header roles={props.roles} />}
    >
      {/* Advantages */}
      {!!props.homePageData?.advantages && (
        <AdvantagesSection
          className="mt-5"
          withBanner
          data={props.homePageData.advantages}
        />
      )}

      {/* Role */}
      <RolesService
        HeaderComponent={
          <SectionHeader
            title={t("role.title")}
            description={t("role.description")}
          />
        }
      />

      {/* Updates */}
      <UpdatesSection className="pb-27.5" data={props.publications} />

      {/* Cases */}
      <CasesSection
        className="section-gradient mb-[63px]"
        data={props.caseStudies}
      />

      <section className="container-full">
        <Rating />
      </section>

      <Suspense>
        <ContactSection className="mb-[50px]" />
      </Suspense>
    </PageLayout>
  );
};

// const advantages = [
//   {
//     key: "1",
//     title: "98%",
//     description:
//       "Client satisfaction rate based on long-term partnerships and repeat engagements.",
//   },
//   {
//     key: "2",
//     title: "1,000+",
//     description:
//       "Successful immigration cases handled for individuals and businesses across multiple jurisdictions.",
//   },
//   {
//     key: "3",
//     title: "10 years",
//     description:
//       "Of combined professional experience in immigration law and international advisory.",
//   },
// ];
