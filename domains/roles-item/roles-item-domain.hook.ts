import { useMemo } from "react";

import { useTranslations } from "next-intl";

import type { RolesItemDomainProps } from ".//roles-item-domain";

export const useRolesItemDomain = (props: RolesItemDomainProps) => {
  const t = useTranslations("common.routes");

  const routes = useMemo(() => {
    return [
      { label: t("home"), value: "/" },
      {
        label: props.data.name,
        value: `/roles/${props.data.slug}`,
      },
    ];
  }, [props.data, t]);

  return { routes };
};
