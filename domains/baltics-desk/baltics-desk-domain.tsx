import { clsx } from "clsx";

import { PageLayout } from "@/layouts/page";

import { InformationSection } from "@/sections/information";
import { MenuSection } from "@/sections/menu";
import { FaqsSection } from "@/sections/faqs";

import * as Components from "./components";

import { useBalticsDeskDomain } from "./baltics-desk-domain.hook";

import type { BalticShort } from "@/types/baltics";
import type { BalticsDeskPage } from "@/types/baltics-desk-page";

export type BalticsDeskDomainProps = {
  className?: string;
  // commonData: CommonData | null;
  baltics: BalticShort[];
  pageData: BalticsDeskPage | null;
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
      {!!props.pageData?.information && (
        <InformationSection
          className="mb-[100px]"
          data={props.pageData.information}
        />
      )}

      {/* <pre>{JSON.stringify(props.pageData)}</pre> */}

      {/* Regions */}
      <Components.Regions
        className="section-gradient mb-25"
        baltics={props.baltics}
      />

      {/* Faqs */}
      {props.pageData && (
        <FaqsSection className="mb-25" data={props.pageData.faqs} />
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
