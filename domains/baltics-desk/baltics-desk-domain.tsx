import { clsx } from "clsx";

import { PageLayout } from "@/layouts/page";

import { InformationSection } from "@/sections/information";
import { MenuSection } from "@/sections/menu";
import { FaqsSection } from "@/sections/faqs";

import * as Components from "./components";

import { useBalticsDeskDomain } from "./baltics-desk-domain.hook";

import type { BalticShort } from "@/types/baltics";

export type BalticsDeskDomainProps = {
  className?: string;
  commonData: CommonData | null;
  baltics: BalticShort[];
};

export const BalticsDeskDomain: React.FC<BalticsDeskDomainProps> = (
  props,
): React.JSX.Element => {
  const { routes } = useBalticsDeskDomain();

  return (
    <PageLayout
      className={clsx(props.className, "")}
      routes={routes}
      HeaderComponent={<Components.Header className="mb-5" />}
    >
      {/* Advantages */}
      <MenuSection className="mb-[75px]" data={advantages} />

      {/* Information */}
      <InformationSection
        className="mb-[100px]"
        title="Professional immigration legal services for individuals, businesses, and investors in the Baltics"
        description={information}
      />

      {/* Regions */}
      <Components.Regions
        className="section-gradient mb-25"
        baltics={props.baltics}
      />

      {/* Faqs */}
      {props.commonData && (
        <FaqsSection className="mb-25" data={props.commonData.faqs} />
      )}
    </PageLayout>
  );
};

const advantages = [
  {
    key: "Estonia",
    title: "Solutions in Estonia",
    description:
      "Comprehensive immigration and business relocation support in Estonia.",
    href: "/baltics-desk/estonia",
  },
  {
    key: "Latvia",
    title: "Solutions in Latvia",
    description:
      "Strategic advisory on Latvian residence programs, investor immigration, and company setup.",
    href: "/baltics-desk/latvia",
  },
  {
    key: "Lithuania",
    title: "Solutions in Lithuania",
    description:
      "Legal assistance for relocation to Lithuania, covering temporary and permanent residence permits.",
    href: "/baltics-desk/lithuania",
  },
];

const information = `That’s why we provide expert legal support to help you achieve your dreams of living and working in a new country. At our firm, we pride ourselves on being more than just lawyers – we are [dedicated partners in your journey.](/)

With extensive experience, we have successfully assisted over 1,000 businesses in navigating the complexities of immigration to the Baltics. Our team is here to provide you with personalized guidance and support every step of the way. Let us help you achieve your goals and make your transition to the Baltics as smooth as possible!`;
