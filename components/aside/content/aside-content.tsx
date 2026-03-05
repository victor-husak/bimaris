"use client";

import { AsideGroup } from "@/components/aside/group";

import { ArrowRightIcon } from "@/icons";

import { clsx } from "clsx";

import { useAsideContent } from "./aside-content.hook";

export type AsideContentProps = {
  className?: string;
  content: string;
};

export const AsideContent: React.FC<AsideContentProps> = (
  props,
): React.JSX.Element => {
  const { activeId, headings, indicatorOffset } = useAsideContent(
    props.content,
  );

  return (
    <AsideGroup className={clsx(props.className, "")} title="Contents">
      {/* Content */}
      <div className="relative py-[25px] pr-[52px] pl-[58px]">
        {/* List */}
        <ul className="flex flex-col gap-[15px]" id="navigation-ul">
          {headings.map((h) => (
            <li
              className={clsx(
                "underline-hover font-sf-pro line-clamp-1 cursor-pointer text-[14px]/[16px] text-[#6B7586] transition-all",
                "hover:text-secondary",
                { "text-secondary": activeId === h.id },
              )}
              key={h.id}
            >
              {h.text}
            </li>
          ))}
        </ul>

        {/* Indicator */}
        <div
          className="absolute top-[24px] left-5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#C1DBFF] transition-all duration-500 ease-linear"
          style={{ transform: `translateY(${indicatorOffset}px)` }}
        >
          <ArrowRightIcon color="#00335A" />
        </div>
      </div>
    </AsideGroup>
  );
};
