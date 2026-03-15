import { useMemo } from "react";
import { useTranslations } from "next-intl";

export const useContactUsDomain = () => {
  const t = useTranslations("common");

  const routes = useMemo(() => {
    return [
      { label: t("routes.home"), value: "/" },
      { label: t("routes.contact"), value: "/contact-us" },
    ];
  }, [t]);

  return { routes };
};
