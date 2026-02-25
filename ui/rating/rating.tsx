import NextImage from "next/image";

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

      {/* Content */}
      <div
        className={clsx(
          "relative  z-1 flex h-[48px] w-full max-w-[280px] items-center gap-3 rounded-full border border-white/10 bg-white/10 p-[5px] pr-[22px] pl-[15px] backdrop-blur-[40px]",
          "after:absolute after:-inset-2.5 after:-z-1 after:rounded-full after:border after:border-white/10 after:bg-white/10 after:backdrop-blur-[40px]",
        )}
      >
        {/* Info */}
        <div className="flex flex-col text-[12px]/[16px]">
          <span className="text-white/60">5.0 on Truspilot</span>

          <span className="text-white">Explore all reviews</span>
        </div>
      </div>
    </div>
  );
};
