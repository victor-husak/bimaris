import { useMemo } from "react";

import { useTranslations } from "next-intl";

import { ContactSectionOfficesProps } from "./contact-section-offices";

export const useContactSectionOffices = (props: ContactSectionOfficesProps) => {
  const t = useTranslations("sections.contact.offices");

  const items = useMemo(() => {
    return props.data.map((office) => ({
      id: office.id,
      tag: office.isMain ? t("tag.main") : t("tag.back"),
      items: [office.city, office.address, office.email],
      action: t("action"),
      isMain: office.isMain,
    }));
  }, [props.data, t]);

  return {
    t,
    items,
  };
};
