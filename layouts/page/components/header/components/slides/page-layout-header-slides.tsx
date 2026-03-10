import * as Components from "./components";

import { clsx } from "clsx";

import type { PageLayoutHeaderSlidesItemProps } from "./components/item";

export type PageLayoutHeaderSlidesProps = {
  className?: string;
  withRating?: boolean;
  activeIndex?: number;
  title: string;
  data: Array<PageLayoutHeaderSlidesItemProps["data"]>;
};

export const PageLayoutHeaderSlides: React.FC<PageLayoutHeaderSlidesProps> = (
  props,
): React.JSX.Element => {
  return (
    <div className={clsx(props.className, "flex flex-col gap-[15px]")}>
      {/* Title */}
      <span className="text-[13px]/[17px] tracking-[0.024em] text-white/70">
        {props.title}
      </span>

      {/* Content */}
      <div className="flex w-65 flex-col gap-2.5">
        {props.data.map((item, index) => (
          <Components.Item
            data={item}
            key={item.id}
            active={props.activeIndex === index}
          />
        ))}
      </div>

      {/* Rating */}
      {props.withRating !== false && <Components.Raiting className="ml-auto" />}
    </div>
  );
};
