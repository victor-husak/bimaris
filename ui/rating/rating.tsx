import NextImage from "next/image";

import * as Icons from "./icons";

import { clsx } from "clsx";

export type RatingProps = {
  className?: string;
};

export const Rating: React.FC<RatingProps> = (props): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "relative flex items-center justify-center overflow-hidden rounded-[11px] py-9",
        "after:absolute after:inset-0 after:-z-1 after:bg-black/10",
      )}
    >
      {/* Background */}
      <NextImage
        src="/images/rating.webp"
        alt="Rating"
        width={3840}
        height={360}
        className="absolute inset-0 -z-2 h-full w-full object-cover object-center"
        objectFit="cover"
        objectPosition="center"
      />

      {/* Hr */}
      <div className="h-px flex-1 bg-linear-to-r from-transparent to-white/10" />

      {/* Blur */}
      <div
        className={clsx(
          "relative h-[58px] w-[290px] rounded-full border border-white/10 bg-white/10 backdrop-blur-[40px] backdrop-brightness-110",
        )}
      />

      {/* Hr */}
      <div className="h-px flex-1 bg-linear-to-l from-transparent to-white/10" />

      {/* Content */}
      <div
        className={clsx(
          "absolute z-1 flex h-[48px] w-full max-w-[280px] items-center gap-3 rounded-full border border-white/10 p-[5px] pr-[17px] pl-[10px] backdrop-blur-[40px] backdrop-brightness-110",
        )}
      >
        {/* Icon */}
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-[40px] backdrop-brightness-115">
          <Icons.Star />
        </div>

        {/* Info */}
        <div className="flex flex-1 flex-col items-start text-[12px]/[16px]">
          <span className="text-white/60">5.0 on Truspilot</span>

          <span className="link-dashed text-white [--dashed-url:url(/images/underline.svg)]">
            Explore all reviews
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-[5px]">
          {/* Icon */}
          <Icons.Rating />

          {/* Value */}
          <span className="font-sf-pro text-[12px]/[14px] tracking-[.004em] text-white/60">
            5.0
          </span>
        </div>
      </div>
    </div>
  );
};
