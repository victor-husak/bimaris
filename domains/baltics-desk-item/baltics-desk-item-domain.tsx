import { PageLayout } from "@/layouts/page";

import { InformationSection } from "@/sections/information";
import { FaqsSection } from "@/sections/faqs";
import { ContactSection } from "@/sections/contact";
import { CasesSection } from "@/sections/cases";
import { ServicesSection } from "@/sections/services";

import { SectionHeader, Button } from "@/components";

import { Rating } from "@/ui/rating";
import { Support } from "@/ui/support";

import * as Components from "./components";

import { clsx } from "clsx";

export type BalticsDeskItemDomainProps = {
  className?: string;
};

export const BalticsDeskItemDomain: React.FC<BalticsDeskItemDomainProps> = (
  props,
): React.JSX.Element => {
  return (
    <PageLayout
      className={clsx(props.className, "")}
      routes={[
        { label: "Home", value: "/" },
        { label: "Baltics desk", value: "/baltics-desk" },
        { label: "Estonia", value: "/baltics-desk/estonia" },
      ]}
      HeaderComponent={<Components.Header />}
    >
      <div className="container-full mb-25">
        <Support />
      </div>
      {/* Advantages */}
      {/* <MenuSection className="mb-[75px]" data={advantages} /> */}

      {/* Information */}
      <InformationSection
        className="mb-25"
        title="Professional immigration legal services for individuals, businesses, and investors in the Baltics"
        description={information}
      />

      {/* Services */}
      <ServicesSection className="section-gradient" />

      {/* Cases */}
      <CasesSection
        className="mb-[60px]"
        HeaderComponent={
          <SectionHeader
            className="container-full pb-0"
            classNameDescription="max-w-[500px]"
            title="Customer case studies"
            description="Explore our selected examples of immigration cases handled for individuals and businesses, demonstrating our structured approach and long-term legal support."
            ActionComponent={
              <Button href="/case-studies" animation="scale">
                View all
              </Button>
            }
          />
        }
      />

      {/* Faqs */}
      <FaqsSection className="section-gradient mb-25 pt-25" />

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
    key: "Estonia",
    title: "Solutions in Estonia",
    description:
      "Client satisfaction rate based on long-term partnerships and repeat engagements.",
    href: "/",
  },
  {
    key: "Latvia",
    title: "Solutions in Latvia",
    description:
      "Strategic advisory on Latvian residence programs, investor immigration, and company setup.",
    href: "/",
  },
  {
    key: "Lithuania",
    title: "Solutions in Lithuania",
    description:
      "Legal assistance for relocation to Lithuania, covering temporary and permanent residence permits.",
    href: "/",
  },
];

const information = `That’s why we provide expert legal support to help you achieve your dreams of living and working in a new country. At our firm, we pride ourselves on being more than just lawyers – we are [dedicated partners in your journey.](/)

With extensive experience, we have successfully assisted over 1,000 businesses in navigating the complexities of immigration to the Baltics. Our team is here to provide you with personalized guidance and support every step of the way. Let us help you achieve your goals and make your transition to the Baltics as smooth as possible!`;
