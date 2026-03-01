"use client";

import { ArrowRightIcon } from "@/icons";

import { useCardAction } from "./card-action.hook";

import clsx from "clsx";

export type CardActionProps = {
  className?: string;
  disabled?: boolean;
  href?: string;
  target?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const CardAction: React.FC<CardActionProps> = (
  props,
): React.JSX.Element => {
  const { onClick } = useCardAction(props);

  return (
    <button
      className={clsx(
        props.className,
        "relative mt-[25px] flex h-[36px] w-[36px] cursor-pointer items-center overflow-hidden rounded-full border border-[#ECEFF4] transition-all duration-200",
        "group-hover:w-[93px] group-hover:border-[#507FEB] group-hover:bg-[#507FEB]",
      )}
      onClick={onClick}
      disabled={props.disabled}
    >
      <ArrowRightIcon
        color="#333333"
        className={clsx(
          "ml-[14px] shrink-0 translate-x-1/2 [&>path]:transition-all [&>path]:duration-200",
          "group-hover:[&>path]:stroke-white",
        )}
      />

      <span
        className={clsx(
          "absolute left-[34px] text-[12px]/[15px] font-medium tracking-[.028em] whitespace-nowrap text-white opacity-0 transition-all duration-200",
          "group-hover:opacity-100",
        )}
      >
        Explore
      </span>
    </button>
  );
};
