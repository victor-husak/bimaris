import { useMemo } from "react";

import { useTranslations } from "next-intl";

import { CaseStudiesItemDomainProps } from "./сase-studies-item-domain";

export const useCaseStudiesItemDomain = (props: CaseStudiesItemDomainProps) => {
  const t = useTranslations("common.routes");

  const routes = useMemo(() => {
    return [
      { label: t("home"), value: "/" },
      { label: t("case-studies"), value: "/case-studies" },
      {
        label: props.data.name,
        value: `/case-studies/${props.data.slug}`,
      },
    ];
  }, [props.data, t]);

  return { routes };
};
