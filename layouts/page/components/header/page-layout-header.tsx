"use client";

import NextImage from "next/image";

import { Button } from "@/components";

import { usePageLayoutHeader } from "./page-layout-header.hook";

import { clsx } from "clsx";

export type PageLayoutHeaderProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  RightComponent?: React.ReactNode;
};

export const PageLayoutHeader: React.FC<PageLayoutHeaderProps> = (
  props,
): React.JSX.Element => {
  const {} = usePageLayoutHeader(props);

  return (
    <header
      className={clsx(
        props.className,
        "container-large-full relative mt-5 h-155",
      )}
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
          src="/images/home/home-header.webp"
          width={3978}
          height={1860}
          objectFit="cover"
          objectPosition="center"
          alt="header"
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
              Immigration services
            </span>

            {/* Tag */}
            <div className="flex rounded-full bg-[#C1DBFF] px-2 pt-1 pb-[5px]">
              <span className="test-[#00335A] text-[12px]/[15px] tracking-[.024em]">
                For individuals
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-season-mix mb-5 text-[42px]/[52px] font-light tracking-[.038em] text-[#D8E8FF]">
            <span className="text-white">Immigration,</span> with clarity
          </h1>

          {/* Description */}
          <p className="max-w-[530px] text-[14px]/[19px] tracking-[.024em] text-white/60">
            Personalized immigration legal support for individuals - from first
            consultation to long-term residency, handled with clarity, care, and
            precision.
          </p>

          {/* Actions */}
          <div className="mt-[25px] flex flex-col items-start gap-2.5">
            <Button href="/" variant="white" size="medium" animation="scale">
              Connect with our team
            </Button>

            <Button href="/" size="medium" variant="blur">
              Open services
            </Button>
          </div>
        </div>

        {/* Right component */}
        {props.RightComponent}
      </div>
    </header>
  );
};
