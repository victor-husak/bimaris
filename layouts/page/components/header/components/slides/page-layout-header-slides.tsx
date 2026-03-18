"use client";

import * as Components from "./components";

import { clsx } from "clsx";

import type { PageLayoutHeaderSlidesItemProps } from "./components/item";

export type PageLayoutHeaderSlidesProps = {
  className?: string;
  withRating?: boolean;
  activeIndex?: number;
  title: string;
  data: Array<PageLayoutHeaderSlidesItemProps["data"]>;
  onSelect?: (key: string) => void;
};

export const PageLayoutHeaderSlides: React.FC<PageLayoutHeaderSlidesProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "mb-[20px] flex flex-col gap-[15px]",
        "md:mb-[35px]",
        "2xl:mr-[53px] 2xl:mb-0",
      )}
    >
      {/* Title */}
      <span className="text-[13px]/[17px] tracking-[0.024em] text-white/70">
        {props.title}
      </span>

      {/* Content */}
      <div className={clsx("flex gap-2.5", "2xl:w-65 2xl:flex-col")}>
        {props.data.map((item, index) => (
          <Components.Item
            data={item}
            key={item.key}
            active={props.activeIndex === index}
            onClick={() => props.onSelect?.(item.key)}
          />
        ))}
      </div>

      {/* Rating */}
      {props.withRating !== false && (
        <Components.Raiting className="hidden 2xl:flex" />
      )}
    </div>
  );
};
