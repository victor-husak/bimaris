"use client";

import NextImage from "next/image";
import { NextLink } from "@/i18n/routing";

import { Box } from "@/components";

import * as Icons from "./icons";

import { usePageLayoutHeaderSlidesItem } from "./page-layout-header-slides-item.hook";

import { clsx } from "clsx";

export type PageLayoutHeaderSlidesItemProps = {
  className?: string;
  active?: boolean;
  data: {
    id: number;
    title: string;
    href?: string;
    label?: string;
    avatar?: Media;
    icon?: React.ReactNode;
  };
};

export const PageLayoutHeaderSlidesItem: React.FC<
  PageLayoutHeaderSlidesItemProps
> = (props): React.JSX.Element => {
  const { onClick } = usePageLayoutHeaderSlidesItem(props);

  return (
    <div
      className={clsx(
        props.className,
        "group flex cursor-pointer flex-col items-center gap-[15px] overflow-hidden rounded-lg bg-white/10 p-2.5 pr-[15px] backdrop-blur-[30px] backdrop-brightness-110 transition-all duration-400",
        "md:h-15 md:flex-row",
        "hover:scale-103",
      )}
      onClick={onClick}
    >
      {props.data.icon && (
        <div
          className={clsx(
            "flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-[30px] backdrop-brightness-110",
            // "lg:h-7.5 lg:w-7.5",
          )}
        >
          {props.data.icon}
        </div>
      )}

      {/* Avatar */}
      {props.data.avatar && (
        <div
          className={clsx(
            "h-8 w-8 shrink-0 overflow-hidden rounded-full",
            "md:h-10 md:w-10",
          )}
        >
          <NextImage
            className="h-full w-full object-cover object-center"
            src={props.data.avatar.url}
            width={props.data.avatar.width}
            height={props.data.avatar.height}
            alt={props.data.avatar.alt || props.data.title}
          />
        </div>
      )}

      {/* Title */}
      {props.data.label ? (
        <div className="flex flex-col text-[13px]/[17px] tracking-[.012em] text-white">
          <span className="text-white/60">{props.data.label}</span>

          <span className="link-dashed [--dashed-url:url(/images/underline-white.svg)]">
            {props.data.title}
          </span>
        </div>
      ) : (
        <Box
          className={clsx(
            "text-center text-[13px]/[17px] tracking-[.012em] text-white",
            "md:text-left",
          )}
          // text-white
          as={props.data.href ? NextLink : "span"}
          {...(props.data.href ? { href: props.data.href } : {})}
        >
          {props.data.title}
        </Box>
      )}

      {/* Arrow */}
      <button
        className={clsx(
          "ml-auto flex hidden h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 transition-all duration-400",
          "md:flex",
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

      {/* Indicator */}
      {props.active && (
        <div
          className={clsx(
            "animate-fill-progress absolute right-0 bottom-0 left-0 z-1 h-[3px] w-full bg-white/30 transition-all",
          )}
        >
          <div
            className={clsx(
              "animate-fill-progress-indicator h-full w-1/3 bg-white transition-all",
            )}
          />
        </div>
      )}
    </div>
  );
};
