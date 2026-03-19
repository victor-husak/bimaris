import { useMemo } from "react";

import { useTranslations } from "next-intl";

import type { MenuProps } from "./components";

export const useRootLayoutFooter = () => {
  const t = useTranslations("layouts.root.footer");

  const companyOptions = useMemo<MenuProps["items"]>(
    () => [
      {
        key: "about",
        title: t("menu.company.items.about"),
        href: "/about-us",
      },
      {
        key: "case-studies",
        title: "Case studies",
        href: "/case-studies",
      },
      {
        key: "insights",
        title: "Insights",
        href: "/insights",
      },
      {
        key: "contact",
        title: "Contact",
        href: "/contact-us",
      },
      {
        key: "baltics-desk",
        title: "Baltics desk",
        href: "/baltics-desk",
      },
    ],
    [t],
  );

  const businessesOptions = useMemo<MenuProps["items"]>(
    () => [
      {
        key: "companyFormation",
        title: t("menu.businesses.items.companyFormation"),
        href: "/services/company-formation-in-ukraine",
      },
      {
        key: "businessImmigration",
        title: t("menu.businesses.items.businessImmigration"),
        href: "/services/business-immigration-to-ukraine",
      },
      {
        key: "corporateImmigration",
        title: t("menu.businesses.items.corporateImmigration"),
        href: "/services/corporate-immigration-to-ukraine",
      },
      {
        key: "representativeOffice",
        title: t("menu.businesses.items.representativeOffice"),
        href: "/services/registration-representative-office",
      },
    ],
    [t],
  );

  const individualsOptions = useMemo<MenuProps["items"]>(
    () => [
      {
        key: "crypto",
        title: t("menu.individuals.items.crypto"),
        href: "/services/crypto",
      },
      {
        key: "marketing",
        title: t("menu.individuals.items.marketing"),
        href: "/services/marketing-and-advertising",
      },
      {
        key: "consumerGoods",
        title: t("menu.individuals.items.consumerGoods"),
        href: "/services/consumer-goods",
      },
      {
        key: "talentSolutions",
        title: t("menu.individuals.items.talentSolutions"),
        href: "/services/talent-solutions",
      },
      {
        key: "healthcare",
        title: t("menu.individuals.items.healthcare"),
        href: "/services/healthcare",
      },
      {
        key: "finance",
        title: t("menu.individuals.items.finance"),
        href: "/services/finance",
      },
      {
        key: "legal",
        title: t("menu.individuals.items.legal"),
        href: "/services/legal",
      },
    ],
    [t],
  );

  const investorsOptions = useMemo<MenuProps["items"]>(
    () => [
      {
        key: "talentSolutions",
        title: t("menu.investors.items.talentSolutions"),
        href: "/services/talent-solutions",
      },
      {
        key: "healthcare",
        title: t("menu.investors.items.healthcare"),
        href: "/services/healthcare",
      },
      {
        key: "finance",
        title: t("menu.investors.items.finance"),
        href: "/services/finance",
      },
      {
        key: "legal",
        title: t("menu.investors.items.legal"),
        href: "/services/legal",
      },
    ],
    [t],
  );

  return {
    t,
    companyOptions,
    businessesOptions,
    individualsOptions,
    investorsOptions,
  };
};
