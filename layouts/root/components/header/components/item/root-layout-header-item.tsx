import NextLink from "next/link";

import { Box } from "@/components";

import * as Icons from "./icons";

import clasess from "./root-layout-header-item.module.scss";

import { clsx } from "clsx";

export type RootLayoutHeaderItemProps = {
  className?: string;
  title: string;
  href?: string;
  variant?: "base" | "invert";
  withArrow?: boolean;
  onClick?: () => void;
};

export const RootLayoutHeaderItem: React.FC<RootLayoutHeaderItemProps> = (
  props,
): React.JSX.Element => {
  return (
    <li
      className={clsx(
        props.className,
        clasess.container,
        "relative flex cursor-pointer items-baseline justify-between gap-1.5",
        "hover:after:bg-[#F0F1F4]",
        "after:absolute after:top-0 after:right-[2.5px] after:bottom-0 after:left-[2.5px] after:-z-1 after:rounded-sm after:transition-all",
        { "text-white": props.variant === "invert" },
        { "px-[12.5px] py-1.5": !props.href },
      )}
      onClick={props.onClick}
    >
      <Box
        as={props.href ? NextLink : "span"}
        className={clsx("relative flex items-center gap-1.5 overflow-hidden", {
          "px-[12.5px] py-1.5": !!props.href,
        })}
        {...(props.href ? { href: props.href } : {})}
      >
        <span
          className={clsx(clasess.text, "text-[14px]/[18px] tracking-[.024em]")}
        >
          {props.title}
        </span>

        <span
          className={clsx(clasess.text, "text-[14px]/[18px] tracking-[.024em]")}
        >
          {props.title}
        </span>

        {props.withArrow && <Icons.Arrow className="mt-0.5" />}
      </Box>
    </li>
  );
};
