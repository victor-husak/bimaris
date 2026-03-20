import { NextLink } from "@/i18n/routing";

import { Box } from "@/components";

import * as Icons from "./icons";

import clasess from "./root-layout-header-item.module.scss";

import { clsx } from "clsx";

export type RootLayoutHeaderItemProps = {
  className?: string;
  title: string;
  active?: boolean;
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
        {
          "text-white": props.variant === "invert",
          "px-[12.5px] py-1.5": !props.href,
          "after:bg-[#F0F1F4]": props.active,
        },
      )}
      onClick={props.onClick}
    >
      <Box
        as={props.href ? NextLink : "span"}
        className={clsx("relative flex items-center overflow-hidden", {
          "px-[12.5px] py-1.5": !!props.href,
        })}
        {...(props.href ? { href: props.href } : {})}
      >
        <span
          className={clsx(
            clasess.text,
            "flex items-center gap-1.5 text-[14px]/[18px] tracking-[.024em]",
          )}
        >
          {props.title}

          {props.withArrow && (
            <Icons.Arrow
              className={clsx("mt-0.5 transition-all", {
                "rotate-180": props.active,
              })}
            />
          )}
        </span>

        <span
          className={clsx(
            clasess.text,
            "flex items-center gap-1.5 text-[14px]/[18px] tracking-[.024em]",
          )}
        >
          {props.title}

          {props.withArrow && (
            <Icons.Arrow
              className={clsx("mt-0.5 transition-all", {
                "rotate-180": props.active,
              })}
            />
          )}
        </span>
      </Box>
    </li>
  );
};
