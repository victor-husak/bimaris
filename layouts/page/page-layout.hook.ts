import { useMemo } from "react";

import { useTranslations } from "next-intl";

export const usePageLayout = () => {
  const t = useTranslations("layouts.page");

  const data = useMemo(() => {
    return [
      {
        key: "individuals",
        title: t("solutions.individuals.title"),
        description: t("solutions.individuals.description"),
        href: "/",
      },
      {
        key: "businesses",
        title: t("solutions.businesses.title"),
        description: t("solutions.businesses.description"),
        href: "/",
      },
      {
        key: "investors",
        title: t("solutions.investors.title"),
        description: t("solutions.investors.description"),
        href: "/",
      },
    ];
  }, [t]);

  return { data };
};
