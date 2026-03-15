import { clsx } from "clsx";

import { SectionHeader, Button } from "@/components";

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
import type { Office } from "@/types/offices";

export type HomeDomainProps = {
  className?: string;
  caseStudies: CaseStudyShort[];
  publications: PublicationShort[];
  offices: Office[];
};

export const HomeDomain: React.FC<HomeDomainProps> = (
  props,
): React.JSX.Element => {
  return (
    <PageLayout
      className={clsx(props.className, "")}
      HeaderComponent={<Components.Header />}
    >
      {/* Advantages */}
      <AdvantagesSection className="mt-5" withBanner data={advantages} />

      {/* Role */}
      <RolesService
        HeaderComponent={
          <SectionHeader
            title="Choose your role"
            description="Founded by professional lawyers and immigration experts, Bimaris provides structured, reliable immigration legal support for individuals and businesses."
            ActionComponent={
              <Button animation="scale" href="/">
                All services
              </Button>
            }
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

      <ContactSection className="mb-[50px]" offices={props.offices} />
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
