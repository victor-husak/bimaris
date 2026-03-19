import { useMemo } from "react";

import { useTranslations } from "next-intl";

import type { RootLayoutFooterProps } from "./root-layout-footer";
import type { MenuProps } from "./components";

export const useRootLayoutFooter = (props: RootLayoutFooterProps) => {
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

  const businessesOptions = useMemo<MenuProps["items"]>(() => {
    return props.servicesBusinesses.map((service) => ({
      key: service.id,
      title: service.name,
      href: `/services/${service.slug}`,
    }));
  }, [props.servicesBusinesses]);

  const individualsOptions = useMemo<MenuProps["items"]>(() => {
    return props.servicesIndividuals.map((service) => ({
      key: service.id,
      title: service.name,
      href: `/services/${service.slug}`,
    }));
  }, [props.servicesIndividuals]);

  const investorsOptions = useMemo<MenuProps["items"]>(() => {
    return props.servicesInvestors.map((service) => ({
      key: service.id,
      title: service.name,
      href: `/services/${service.slug}`,
    }));
  }, [props.servicesInvestors]);

  return {
    t,
    companyOptions,
    businessesOptions,
    individualsOptions,
    investorsOptions,
  };
};
