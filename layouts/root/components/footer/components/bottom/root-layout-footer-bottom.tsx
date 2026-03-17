import { NextLink } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import * as Icons from "./icons";

// import "./root-layout-footer-bottom.css";

import { clsx } from "clsx";

export type RootLayoutFooterBottomProps = {
  className?: string;
};

export const RootLayoutFooterBottom: React.FC<RootLayoutFooterBottomProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("layouts.root.footer.bottom-line");

  return (
    <div
      className={clsx(
        props.className,
        "flex flex-wrap items-center justify-between gap-y-5 pt-5 pb-8 text-[14px]/[18px] tracking-[.012em] text-[#8D8D91]",
      )}
    >
      {/* copyright */}
      <p>{t("copyright")}</p>

      <div className="mx-[15px] h-2 w-px bg-[#2E2E2E]" />

      {/* menu */}
      <ul
        className={clsx(
          "flex items-center gap-5",
          "[&>li]:transition-colors [&>li]:hover:text-white",
        )}
      >
        <li className="underline-hover">
          <NextLink href="/cookie-preferences">{t("cookies-policy")}</NextLink>
        </li>

        <li className="underline-hover">
          <NextLink href="/privacy-policy">{t("privacy-policy")}</NextLink>
        </li>
      </ul>

      {/* designed */}
      <div className={clsx("flex gap-[11px] text-[#727272]", "lg:ml-auto")}>
        <span>{t("exclusively-designed")}</span>

        <NextLink
          href="https://smotrow.com/"
          target="_blank"
          className={clsx(
            "link-with-arrow text-white transition-colors",
            "hover:text-white/80",
            "[&>svg]:ml-[4px]!",
          )}
        >
          <span className="link-dashed">Smotrów Design</span>{" "}
          <Icons.Link color="#fff" />
        </NextLink>
      </div>
    </div>
  );
};
