import { useMemo } from "react";

import { useTranslations } from "next-intl";

export const useContactSectionOffices = () => {
  const t = useTranslations("sections.contact.offices");

  const items = useMemo(
    () => [
      {
        id: 1,
        tag: t("main.tag"),
        items: [
          t("main.items.address1"),
          t("main.items.address2"),
          'info@bimaris.legal",',
        ],
        action: t("action"),
      },
      {
        id: 2,
        tag: t("back.tag"),
        items: [
          t("back.items.address1"),
          t("back.items.address2"),
          "estonia@bimaris.legal",
        ],
        action: t("action"),
      },
    ],
    [t],
  );

  return {
    t,
    items,
  };
};
