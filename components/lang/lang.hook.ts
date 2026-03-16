import { useMemo, useCallback } from "react";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { useRouter } from "nextjs-toploader/app";

export const useLang = () => {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = useLocale();

  const langLabel = useMemo(() => {
    return currentLocale.at(0)?.toUpperCase() + currentLocale.slice(1);
  }, [currentLocale]);

  const onTriggerLang = useCallback(() => {
    router.replace(`/${currentLocale === "en" ? "uk" : "en"}${pathname}`);
  }, [currentLocale, pathname]);

  return {
    currentLocale,
    langLabel,
    onTriggerLang,
  };
};
