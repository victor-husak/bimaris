import { useMemo } from "react";
import { useTranslations } from "next-intl";

export const useBalticsDeskDomain = () => {
  const t = useTranslations("common.routes");

  const routes = useMemo(() => {
    return [
      { label: t("home"), value: "/" },
      { label: t("baltics-desk"), value: "/baltics-desk" },
    ];
  }, [t]);

  return { routes };
};
