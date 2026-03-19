"use client";

import * as Icons from "./icons";

import { useCollapse } from "react-collapsed";

import { clsx } from "clsx";

export type FaqsSectionItemProps = {
  className?: string;
  title: string;
  description: string;
  active?: boolean;
  onToggle?: () => void;
};

export const FaqsSectionItem: React.FC<FaqsSectionItemProps> = (
  props,
): React.JSX.Element => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    duration: 400,
    isExpanded: props.active,
  });

  return (
    <div className={clsx(props.className, "border-b border-[#E7EBF2]")}>
      {/* Header */}
      <div
        className={clsx(
          "flex cursor-pointer items-center justify-between py-5 transition-all",
          "lg:px-[15px]",
          { "hover:bg-[#E9ECF2]": !isExpanded },
        )}
        onClick={props.onToggle}
      >
        {/* Title */}
        <p className="text-[16px]/[21px] font-medium tracking-[.024em] text-[#2D3A52]">
          {props.title}
        </p>

        <Icons.Arrow
          className={clsx("transition-all", { "rotate-180": isExpanded })}
        />
      </div>

      {/* Content */}
      <div {...getCollapseProps()}>
        <div className={clsx("pb-5", "lg:px-[15px]")}>
          <p className="text-[15px]/[22px] tracking-[.024em] text-[#8A91A2]">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
