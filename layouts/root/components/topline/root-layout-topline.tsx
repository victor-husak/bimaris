"use client";

import { NextLink } from "@/i18n/routing";

import { ArrowRightIcon } from "@/icons";

import * as Components from "./components";
import * as Icons from "./icons";

import { useRootLayoutTopline } from "./root-layout-topline.hook";

import { clsx } from "clsx";

export type RootLayoutToplineProps = {
  className?: string;
};

export const RootLayoutTopline: React.FC<RootLayoutToplineProps> = (
  props,
): React.JSX.Element => {
  const { langLabel, onTriggerLang } = useRootLayoutTopline();

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
        Innovative immigration legal consultancy.{" "}
        <NextLink
          className={clsx(
            "group link-with-arrow text-secondary inline-flex items-center transition-opacity",
            "hover:opacity-80",
          )}
          href="/"
        >
          <span className="link-dashed [--dashed-url:url(/images/underline.svg)]">
            Explore company
          </span>

          <Icons.Arrow className="mt-[3px]" />
        </NextLink>
      </p>

      <ul className={clsx("hidden", "sm:flex")}>
        <Components.Item className="max-lg:hidden">
          <NextLink href="/baltics-desk">Baltics desk</NextLink>
        </Components.Item>

        <Components.Item className="max-lg:hidden">
          <NextLink href="mailto:office@bimaris.legal">
            Schedule a meeting
          </NextLink>
        </Components.Item>

        <Components.Item>
          <NextLink href="/Offices">Offices</NextLink>
        </Components.Item>

        <Components.Item className="cursor-pointer" onClick={onTriggerLang}>
          <span>{langLabel}</span>

          <ArrowRightIcon className="[&>path]:stroke-current-color ml-1.25 [&>path]:transition-all" />
        </Components.Item>
      </ul>
    </div>
  );
};
