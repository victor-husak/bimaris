import { useMemo } from "react";
import { useTranslations } from "next-intl";

export const useContactUsDomain = () => {
  const t = useTranslations("common.routes");

  const routes = useMemo(() => {
    return [
      { label: t("home"), value: "/" },
      { label: t("contact"), value: "/contact-us" },
    ];
  }, [t]);

  return { routes };
};
