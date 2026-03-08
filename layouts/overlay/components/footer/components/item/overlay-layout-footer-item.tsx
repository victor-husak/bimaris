import NextLink from "next/link";

import { Box } from "@/components";

import { clsx } from "clsx";

export type OverlayLayoutFooterItemProps = {
  className?: string;
  title: string;
  href?: string;
  onClick?: () => void;
};

export const OverlayLayoutFooterItem: React.FC<OverlayLayoutFooterItemProps> = (
  props,
): React.JSX.Element => {
  return (
    <li
      className={clsx(
        props.className,
        "flex cursor-pointer items-center first:before:hidden",
        "before:mx-[15px] before:h-2 before:w-px before:bg-[#E1E8EF]",
      )}
    >
      <Box
        className={clsx(
          "underline-hover text-[12px]/[15px] tracking-[.024em] text-[#79839A]",
          "hover:text-[#2D3A52]",
        )}
        as={props.href ? NextLink : "span"}
        {...(props.href ? { href: props.href } : {})}
        onClick={props.onClick}
      >
        {props.title}
      </Box>
    </li>
  );
};
