// "use client";

import NextImage from "next/image";

import * as Icons from "./icons";

// import { useMediaQuery } from "usehooks-ts";

import { clsx } from "clsx";

export type BannerImageProps = {
  className?: string;
  classNameImage?: string;
  media: Media;
  withTexture?: boolean;
  withOverlay?: boolean;
};

export const BannerImage: React.FC<BannerImageProps> = (
  props,
): React.JSX.Element => {
  // const isDesktop = useMediaQuery("(min-width:1200px)");

  return (
    <div
      className={clsx(
        props.className,
        // "w-[194px] shrink-0 rounded-[97px]",
        // "max-sm:h-[280px]",
        // {
        //   "overflow-hidden": !props.withOverlay && isDesktop,
        //   "relative z-1": props.withOverlay || !isDesktop,
        //   "after:absolute after:-top-[5px] after:-bottom-[5px] after:-left-[5px] after:-z-1 after:w-full after:rounded-full after:bg-(--overlay-bg)":
        //     props.withOverlay || !isDesktop,
        // },

        props.className,
        "relative flex w-[194px] shrink-0 justify-center rounded-[97px]",
        "max-sm:h-[280px]",
        {
          "overflow-hidden": !props.withOverlay,
          "relative z-1": props.withOverlay,
        },
        "xl:overflow-hidden",
        "after:absolute after:-top-[5px] after:-bottom-[5px] after:-left-[5px] after:-z-1 after:w-full after:rounded-full after:bg-(--overlay-bg)",
      )}
    >
      <NextImage
        className={clsx(
          "h-full w-full rounded-[97px] object-cover object-center",
          !props.withOverlay && "xl:rounded-none",
          props.classNameImage,
        )}
        // className={clsx("h-full w-full object-cover object-center", {
        //   "rounded-[97px]": props.withOverlay || !isDesktop,
        // })}
        src={props.media.url}
        alt={props.media.alt || "Banner image"}
        width={props.media.width}
        height={props.media.height}
      />

      {props.withTexture && (
        <Icons.TextureIcon className="absolute top-[41px] z-2" />
      )}
    </div>
  );
};
