import { useMemo } from "react";
import { useTranslations } from "next-intl";

// import type { AboutUsDomainProps } from "./about-us-domain";

export const useAboutUsDomain = () => {
  const t = useTranslations("common.routes");

  const routes = useMemo(() => {
    return [
      { label: t("home"), value: "/" },
      { label: t("about"), value: "/about-us" },
    ];
  }, [t]);

  return { routes };
};
