import { useMemo } from "react";

import { useTranslations } from "next-intl";

import type { ServicesItemDomainProps } from "./services-item-domain";

export const useServicesItemDomain = (props: ServicesItemDomainProps) => {
  const t = useTranslations("common.routes");

  const routes = useMemo(() => {
    return [
      { label: t("home"), value: "/" },
      {
        label: props.data.name,
        value: `/services/${props.data.slug}`,
      },
    ];
  }, [props.data, t]);

  return { routes };
};
