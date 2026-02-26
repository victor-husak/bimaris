"use client";

import NextLink from "next/link";

import { Lang } from "@/components";

import * as Icons from "./icons";

import { usePathname } from "next/navigation";

import { clsx } from "clsx";

export type RootLayoutFooterToplineProps = {
  className?: string;
};

export const RootLayoutFooterTopline: React.FC<RootLayoutFooterToplineProps> = (
  props,
): React.JSX.Element => {
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        props.className,
        "border-footer-b relative flex items-center border-b pt-[52px] pb-[54px]",
      )}
    >
      {/* logo */}
      <div className="absolute left-1/2 -translate-x-1/2">
        {pathname === "/" ? (
          <Icons.Logo />
        ) : (
          <NextLink
            className={clsx("transition-opacity", "hover:opacity-60")}
            href="/"
          >
            <Icons.Logo />
          </NextLink>
        )}
      </div>

      {/* action */}
      <div className="ml-auto flex items-center gap-[10px]">
        {/* search */}
        <button className="button-icon button-icon-footer">
          <Icons.Search />
        </button>

        {/* lang */}
        <Lang
          className={clsx(
            "font-sp-pro-text h-[32px] rounded-[17px] border border-[#2F2F2F] px-[11px] text-[12px]/[14px] tracking-wide text-white",
            // "hover:border-white",
            "[&>svg>path]:fill-white",
          )}
        />
      </div>
    </div>
  );
};
