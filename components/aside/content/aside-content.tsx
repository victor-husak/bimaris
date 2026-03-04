"use client";

import { AsideGroup } from "@/components/aside/group";

import { clsx } from "clsx";

import { useAsideContent } from "./aside-content.hook";

export type AsideContentProps = {
  className?: string;
};

export const AsideContent: React.FC<AsideContentProps> = (
  props,
): React.JSX.Element => {
  const { activeId, headings, indicatorOffset } = useAsideContent();

  return (
    <AsideGroup className={clsx(props.className, "")} title="Contents">
      {/* Content */}
      <ul
        className="flex flex-col gap-[15px] py-[25px] pr-[52px] pl-[58px]"
        id="navigation-ul"
      >
        {headings.map((h) => (
          <li
            className={clsx(
              "underline-hover font-sf-pro line-clamp-1 cursor-pointer text-[14px]/[16px] text-[#6B7586] transition-all",
              "hover:text-secondary",
            )}
            key={h.id}
          >
            {h.text}
          </li>
        ))}
      </ul>
    </AsideGroup>
  );
};
