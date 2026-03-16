import { useMemo } from "react";

import { useTranslations } from "next-intl";

import type { PeopleDomainProps } from "./people-domain";

export const usePeopleDomain = (props: PeopleDomainProps) => {
  const t = useTranslations("common.routes");

  const routes = useMemo(() => {
    return [
      { label: t("home"), value: "/" },
      // { label: "Insights", value: "/insights" },
      {
        label: props.data.name,
        value: `/people/${props.data.slug}`,
      },
    ];
  }, [props.data, t]);

  return { routes };
};
