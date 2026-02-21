import NextLink from "next/link";

import { Box } from "@/components";

import * as Icons from "./icons";

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
        "flex cursor-pointer items-baseline justify-between gap-1.5 transition-opacity",
        "hover:opacity-60",
        { "text-white": props.variant === "invert" },
        { "px-[12.5px] py-1.5": !props.href },
      )}
      onClick={props.onClick}
    >
      <Box
        as={props.href ? NextLink : "span"}
        className="flex items-center gap-1.5"
      >
        <span className="text-[14px]/[18px] tracking-[.024em]">
          {props.title}
        </span>

        {props.withArrow && <Icons.Arrow className="mt-0.5" />}
      </Box>
      {/* {!props.href ? (
        <>
          <Content title={props.title} />

          {props.withArrow && (
            <Icons.Arrow
              className={clsx({
                "[&>path]:fill-white": props.variant === "invert",
              })}
            />
          )}
        </>
      ) : (
        <NextLink className="px-[12.5px] py-1.5" href={props.href}>
          <Content title={props.title} />
        </NextLink>
      )} */}

      {/* {props.href ? (
        <NextLink
          className="text-[12px]/[14px] tracking-[.038em] uppercase"
          href={props.href}
        >
          {props.title}
        </NextLink>
      ) : (
        <span className="text-[12px]/[14px] tracking-[.038em] uppercase">
          {props.title}
        </span>
      )}

      {!props.href && (
        <Icons.Arrow
          className={clsx({
            "[&>path]:fill-white": props.variant === "invert",
          })}
        />
      )} */}
    </li>
  );
};
