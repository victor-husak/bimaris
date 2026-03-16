import { useMemo } from "react";
import { useTranslations } from "next-intl";

export const useInsightsDomain = () => {
  const t = useTranslations("common.routes");

  const routes = useMemo(() => {
    return [
      { label: t("home"), value: "/" },
      { label: t("insights"), value: "/insights" },
    ];
  }, [t]);

  return { routes };
};
