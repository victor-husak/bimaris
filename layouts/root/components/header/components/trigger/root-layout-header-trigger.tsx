"use client";

import * as Icons from "./icons";

import { clsx } from "clsx";

import { useTranslations } from "next-intl";

export type RootLayoutHeaderTriggerProps = {
  className?: string;
  onClick?: () => void;
};

export const RootLayoutHeaderTrigger: React.FC<RootLayoutHeaderTriggerProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("layouts.root.header.trigger");

  return (
    <div
      className={clsx(
        props.className,
        "flex cursor-pointer items-center gap-1.25 rounded-b-sm bg-[#507FEB] px-3.75 pt-1.25 pb-1.75 transition-all duration-300",
        "hover:translate-y-0.5 hover:bg-[#4775DD]",
      )}
      onClick={props.onClick}
    >
      <span className="text-[12px]/[15px] tracking-[.024em] text-white">
        {t("menu")}
      </span>

      <Icons.Arrow />
    </div>
  );
};
