import NextImage from "next/image";

import { clsx } from "clsx";

export type BannerImageProps = {
  className?: string;
  media: Media;
  withOverlay?: boolean;
};

export const BannerImage: React.FC<BannerImageProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(props.className, "rounded-[97px]", {
        "overflow-hidden": !props.withOverlay,
        "relative z-1": props.withOverlay,
        "after:absolute after:-top-[5px] after:-bottom-[5px] after:-left-[5px] after:-z-1 after:w-full after:rounded-full after:bg-(--overlay-bg)":
          props.withOverlay,
      })}
    >
      <NextImage
        className={clsx("h-full w-[194px] object-cover", {
          "rounded-[97px]": props.withOverlay,
        })}
        src={props.media.url}
        alt={props.media.alt || "Banner image"}
        width={props.media.width}
        height={props.media.height}
        objectFit="cover"
      />
    </div>
  );
};
