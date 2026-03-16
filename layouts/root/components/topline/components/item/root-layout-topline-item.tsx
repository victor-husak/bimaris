"use client";

import { clsx } from "clsx";

export type RootLayoutToplineItemProps = {
  className?: string;
  children: React.ReactNode;
  variant?: "base" | "invert";
  onClick?: () => void;
};

export const RootLayoutToplineItem: React.FC<RootLayoutToplineItemProps> = (
  props,
): React.JSX.Element => {
  return (
    <li
      className={clsx(
        props.className,
        "underline-hover flex items-center last:after:hidden",
        "hover:text-secondary",
        "after:mx-3.75 after:h-2 after:w-px after:bg-[#E4E8F0]",
      )}
      onClick={props.onClick}
    >
      {props.children}
    </li>
  );
};
