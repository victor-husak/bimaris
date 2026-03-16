import { useMemo } from "react";
import { useTranslations } from "next-intl";

export const useCaseStudiesDomain = () => {
  const t = useTranslations("common.routes");

  const routes = useMemo(() => {
    return [
      { label: t("home"), value: "/" },
      { label: t("case-studies"), value: "/case-studies" },
    ];
  }, [t]);

  return { routes };
};
