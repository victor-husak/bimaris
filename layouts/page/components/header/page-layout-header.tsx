"use client";

import NextImage from "next/image";

import { Button } from "@/components";

import * as Icons from "./icons";

import { usePageLayoutHeader } from "./page-layout-header.hook";

import { clsx } from "clsx";

export type PageLayoutHeaderProps = {
  className?: string;
  classNameTitle?: string;
  size?: "sm" | "md" | "lg";
  media: Media;
  title: React.ReactNode;
  subtitle: string;
  tag: string;
  description?: string;
  RightComponent?: React.ReactNode;
  ActionsComponent?: React.ReactNode;
};

export const PageLayoutHeader: React.FC<PageLayoutHeaderProps> = (
  props,
): React.JSX.Element => {
  const {} = usePageLayoutHeader(props);

  return (
    <header
      className={clsx(props.className, "container-large-full relative", {
        "h-155": props.size === "lg",
        "h-147.5": props.size === "md",
        "h-130": props.size === "sm",
      })}
    >
      <div
        className={clsx(
          "relative flex h-full items-center justify-between overflow-hidden rounded-2xl pr-[53px] pl-[140px]",
        )}
      >
        {/* Background */}
        <NextImage
          id="layer-back"
          className="absolute inset-0 -z-3 h-full w-full object-cover object-center will-change-transform"
          {...props.media}
          src={props.media.url}
          width={props.media.width}
          height={props.media.height}
          objectFit="cover"
          objectPosition="center"
          alt={props.media.alt || "Header background"}
        />

        <div
          className={clsx(
            "absolute inset-0 -z-1",
            "after:absolute after:inset-0 after:bg-black/20",
            "before:absolute before:right-0 before:bottom-0 before:left-0 before:h-95 before:bg-linear-to-b before:from-black/0 before:to-black/30",
          )}
        />

        {/* Content */}
        <div className="relative z-2 my-auto flex flex-col items-start">
          {/* Meta */}
          <div className="mb-[15px] flex items-center gap-1.5">
            {/* Text */}
            <span className="text-[13px]/[17px] tracking-[.024em] text-white/60">
              {props.subtitle}
            </span>

            {/* Tag */}
            <div className="flex rounded-full bg-[#C1DBFF] px-2 pt-1 pb-[5px]">
              <span className="test-[#00335A] text-[12px]/[15px] tracking-[.024em]">
                {props.tag}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1
            className={clsx(
              props.classNameTitle,
              "font-season-mix mb-5 text-[42px]/[52px] font-light tracking-[.038em] text-white",
              "[&>span]:text-[#D8E8FF]",
            )}
          >
            {props.title}
          </h1>

          {/* Description */}
          {!!props.description && (
            <p className="max-w-[530px] text-[14px]/[19px] tracking-[.024em] text-white/60">
              {props.description}
            </p>
          )}

          {/* Actions */}
          {!!props.ActionsComponent && (
            <div className="mt-[25px] flex flex-col items-start gap-2.5">
              {props.ActionsComponent}
            </div>
          )}
        </div>

        {/* Right component */}
        {props.RightComponent}

        {/* Arrow */}
        <div className="absolute bottom-5 left-1/2 flex h-5 w-5 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5">
          <Icons.Arrow />
        </div>
      </div>
    </header>
  );
};
