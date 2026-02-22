import NextImage from "next/image";

import * as Icons from "./icons";

import { clsx } from "clsx";

export type PageLayoutHeaderSlidesItemProps = {
  className?: string;
  data: { id: number; label: string; avatar?: Media };
};

export const PageLayoutHeaderSlidesItem: React.FC<
  PageLayoutHeaderSlidesItemProps
> = (props): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "group flex h-15 cursor-pointer items-center gap-[15px] rounded-lg bg-white/10 p-2.5 pr-[15px] backdrop-blur-[30px]",
      )}
    >
      {/* Avatar */}
      {props.data.avatar && (
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <NextImage
            className="h-full w-full object-cover object-center"
            src={props.data.avatar.url}
            width={props.data.avatar.width}
            height={props.data.avatar.height}
            alt={props.data.avatar.alt || props.data.label}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      )}

      {/* Label */}
      <span className="flex-1 text-[13px]/[17px] tracking-[.024em] text-[#FFFFFF]">
        {props.data.label}
      </span>

      {/* Arrow */}
      <button
        className={clsx(
          "flex h-6 w-6 items-center justify-center rounded-full border border-white/15 transition-all",
          "group-hover:bg-white",
        )}
      >
        <Icons.Arrow
          className={clsx(
            "[&>path]:transition-all",
            "group-hover:[&>path]:stroke-[#333333]",
          )}
        />
      </button>
    </div>
  );
};
