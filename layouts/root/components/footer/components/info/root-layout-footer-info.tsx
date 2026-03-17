import { NextLink } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import * as Icons from "./icons";

import { clsx } from "clsx";

export type RootLayoutFooterInfoProps = {
  className?: string;
};

export const RootLayoutFooterInfo: React.FC<RootLayoutFooterInfoProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("layouts.root.footer.info");

  return (
    <div
      className={clsx(
        props.className,
        "border-footer-b text-footer flex flex-col justify-between gap-y-5 border-b py-5 text-[14px]/[18px]",
        "xl:flex-row xl:items-center",
      )}
    >
      {/* menu */}
      <ul
        className={clsx(
          "flex flex-col gap-y-2.5",
          "[&>li]:flex [&>li]:items-center",
          "[&>li]:after:mx-[15px] [&>li]:after:flex [&>li]:after:h-2 [&>li]:after:w-px [&>li]:after:bg-[#2E2E2E]",
          "md:flex-row md:items-center",
        )}
      >
        <li>
          <NextLink
            className="link-dashed transition-all hover:text-white"
            href="tel:+380670101108"
          >
            +38 067 01-01-108
          </NextLink>
        </li>

        <li>
          <NextLink
            className="link-dashed transition-all hover:text-white"
            href="mailto:office@bimaris.legal"
          >
            office@bimaris.legal
          </NextLink>
        </li>

        <li className="after:hidden!">
          <NextLink
            className="link-dashed transition-all hover:text-white"
            href="mailto:reception@agalawyers.org"
          >
            {t("address")}
          </NextLink>
        </li>
      </ul>

      {/* social */}
      <div className={clsx("flex items-center gap-2.5")}>
        <button className="button-icon button-icon-footer">
          <Icons.Twitter />
        </button>

        <button className="button-icon button-icon-footer">
          <Icons.Instagram />
        </button>

        <button className="button-icon button-icon-footer">
          <Icons.Facebook />
        </button>

        <button className="button-icon button-icon-footer">
          <Icons.Likedin />
        </button>

        <button
          className={clsx(
            "h-8 cursor-pointer rounded-full border border-[#2F2F2F] px-[15px] text-[12px]/[14px] tracking-[0.008em] text-[#9F9F9F] transition-all",
            "transition-colors",
            "hover:border-white hover:bg-white hover:text-[#0B0B0B]",
          )}
        >
          {t("subscribe")}
        </button>
      </div>
    </div>
  );
};
