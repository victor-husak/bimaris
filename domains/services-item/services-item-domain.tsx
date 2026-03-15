import { Suspense } from "react";
import { clsx } from "clsx";

import { SectionHeader, Button } from "@/components";

import { PageLayout } from "@/layouts/page";

import { AdvantagesSection } from "@/sections/advantages";
import { ContactSection } from "@/sections/contact";
import { CasesSection } from "@/sections/cases";
import { FaqsSection } from "@/sections/faqs";
import { ExpertsSection } from "@/sections/experts";

import { Rating } from "@/ui/rating";

import * as Components from "./components";

import type { Service } from "@/types/services";
// import type { CommonData } from "@/types/common";

export type ServicesItemDomainProps = {
  className?: string;
  data: Service;
  commonData: CommonData | null;
};

export const ServicesItemDomain: React.FC<ServicesItemDomainProps> = (
  props,
): React.JSX.Element => {
  return (
    <PageLayout
      className={clsx(props.className, "")}
      routes={[
        { label: "Home", value: "/" },
        { label: "Private clients", value: "/roles/private-clients" },
        { label: "Citizenship of Ukraine", value: "/services/1" },
      ]}
      HeaderComponent={<Components.Header data={props.data} />}
    >
      {/* Advantages */}
      <AdvantagesSection
        className="mt-5"
        data={advantages}
        BannerComponent={<Rating />}
      />

      {/* Content */}
      <Components.Content className="pb-25" data={props.data} />

      <div className="container-full section-gradient z-1 mb-[100px]">
        <Components.Banner />
      </div>

      {/* Experts */}
      <Suspense>
        <ExpertsSection className="z-1 mb-[110px]" />
      </Suspense>

      {/* Faqs */}
      {props.commonData && (
        <FaqsSection className="z-1 mb-[110px]" data={props.commonData.faqs} />
      )}

      {/* Cases */}
      <CasesSection
        className="section-gradient mb-[70px]"
        data={[]}
        HeaderComponent={
          <SectionHeader
            className="container-full pb-0"
            classNameDescription="max-w-[500px]"
            title="Related case studies"
            description="Explore our selected examples of immigration cases handled for individuals and businesses, demonstrating our structured approach and long-term legal support."
            ActionComponent={
              <Button href="/case-studies" animation="scale">
                View all
              </Button>
            }
          />
        }
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
    key: "individuals",
    title: "98%",
    description:
      "Client satisfaction rate based on long-term partnerships and repeat engagements.",
    href: "/",
  },
  {
    key: "businesses",
    title: "1,200+",
    description:
      "Successful immigration cases handled for individuals across different personal backgrounds.",
    href: "/",
  },
  {
    key: "investors",
    title: "10 years",
    description:
      "Of combined professional experience supporting individuals with immigration and residency matters.",
    href: "/",
  },
];
