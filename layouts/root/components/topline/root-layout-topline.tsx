import { useTranslations } from "next-intl";

import { NextLink } from "@/i18n/routing";

import * as Components from "./components";
import * as Icons from "./icons";

import { clsx } from "clsx";

export type RootLayoutToplineProps = {
  className?: string;
};

export const RootLayoutTopline: React.FC<RootLayoutToplineProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("layouts.root.topline");

  return (
    <div
      className={clsx(
        props.className,
        "container-full bg-background-secondary relative z-10 flex items-center justify-between border border-[#F4F5FA] pt-2.75 pb-3 text-[12px]/[15px] tracking-[.024em] text-[#8D98A8]",
      )}
    >
      <ul className={clsx("hidden", "2xl:flex")}>
        {/* flex */}
        <Components.Item>
          <NextLink href="tel:+380449953535">+380 44 995 35 35</NextLink>
        </Components.Item>

        <Components.Item>
          <NextLink href="mailto:office@bimaris.legal">
            office@bimaris.legal
          </NextLink>
        </Components.Item>
      </ul>

      {/* description */}
      <p
        className={clsx(
          "transform text-[12px]/[14px] tracking-[.024em]",
          "2xl:absolute 2xl:left-1/2 2xl:-translate-x-1/2",
        )}
      >
        {t("description")}{" "}
        <NextLink
          className={clsx(
            "group link-with-arrow text-secondary inline-flex items-center transition-opacity",
            "hover:opacity-80",
          )}
          href="/"
        >
          <span className="link-dashed [--dashed-url:url(/images/underline.svg)]">
            {t("action")}
          </span>

          <Icons.Arrow className="mt-[3px]" />
        </NextLink>
      </p>

      <ul className={clsx("hidden", "sm:flex")}>
        <Components.Item className="max-lg:hidden">
          <NextLink href="/baltics-desk">{t("menu.baltics-desk")}</NextLink>
        </Components.Item>

        <Components.Item className="max-lg:hidden">
          <NextLink href="mailto:office@bimaris.legal">
            {t("menu.schedule")}
          </NextLink>
        </Components.Item>

        <Components.Item>
          <NextLink href="/Offices">{t("menu.offices")}</NextLink>
        </Components.Item>

        <Components.Lang />
      </ul>
    </div>
  );
};
