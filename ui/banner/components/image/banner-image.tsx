"use client";

import NextImage from "next/image";

import { useMediaQuery } from "usehooks-ts";

import { clsx } from "clsx";

export type BannerImageProps = {
  className?: string;
  media: Media;
  withOverlay?: boolean;
};

export const BannerImage: React.FC<BannerImageProps> = (
  props,
): React.JSX.Element => {
  const isDesktop = useMediaQuery("(min-width:1200px)");

  return (
    <div
      className={clsx(
        props.className,
        "w-[194px] shrink-0 rounded-[97px]",
        "max-sm:h-[280px]",
        {
          "overflow-hidden": !props.withOverlay && isDesktop,
          "relative z-1": props.withOverlay || !isDesktop,
          "after:absolute after:-top-[5px] after:-bottom-[5px] after:-left-[5px] after:-z-1 after:w-full after:rounded-full after:bg-(--overlay-bg)":
            props.withOverlay || !isDesktop,
        },
      )}
    >
      <NextImage
        className={clsx("h-full w-full object-cover object-center", {
          "rounded-[97px]": props.withOverlay || !isDesktop,
        })}
        src={props.media.url}
        alt={props.media.alt || "Banner image"}
        width={props.media.width}
        height={props.media.height}
      />
    </div>
  );
};
