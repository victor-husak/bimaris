import { useMemo } from "react";
import { useTranslations } from "next-intl";

import type { BalticsDeskItemDomainProps } from "./baltics-desk-item-domain";

export const useBalticsDeskItemDomain = (props: BalticsDeskItemDomainProps) => {
  const t = useTranslations("common.routes");

  const routes = useMemo(() => {
    return [
      { label: t("home"), value: "/" },
      { label: t("baltics-desk"), value: "/baltics-desk" },
      { label: props.data.name, value: `/baltics-desk/${props.data.slug}` },
    ];
  }, [props.data, t]);

  return { routes };
};
