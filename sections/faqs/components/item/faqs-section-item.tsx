"use client";

import * as Icons from "./icons";

import { useCollapse } from "react-collapsed";

import { clsx } from "clsx";

export type FaqsSectionItemProps = {
  className?: string;
  title: string;
  description: string;
};

export const FaqsSectionItem: React.FC<FaqsSectionItemProps> = (
  props,
): React.JSX.Element => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    duration: 400,
  });

  return (
    <div className={clsx(props.className, "border-b border-[#E7EBF2]")}>
      {/* Header */}
      <div
        className={clsx(
          "flex cursor-pointer items-center justify-between px-[15px] py-5 transition-all",
          { "hover:bg-[#E9ECF2]": !isExpanded },
        )}
        //
        {...getToggleProps()}
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
        <div className="px-[15px] pb-5">
          <p className="text-[14px]/[20px] tracking-[.028em] text-[#8A91A2]">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
