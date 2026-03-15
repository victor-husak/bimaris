"use client";

import NextImage from "next/image";

import * as Icons from "./icons";

import { motion, AnimatePresence, type Variants } from "framer-motion";

import { usePageLayoutHeader } from "./page-layout-header.hook";

import { clsx } from "clsx";

export type PageLayoutHeaderProps = {
  className?: string;
  classNameTitle?: string;
  classNameDescription?: string;
  classNameActions?: string;
  classNameOverlay?: string;
  size?: "sm" | "md" | "lg";
  type?: "base" | "second";
  media: Media;
  title: React.ReactNode;
  subtitle: string;
  tag: string;
  description?: string;
  activeIndex?: number;
  children?: React.ReactNode;
  InfoCpmponent?: React.ReactNode;
  RightComponent?: React.ReactNode;
  ActionsComponent?: React.ReactNode;
  ContentComponent?: React.ReactNode;
  FooterComponent?: React.ReactNode;
};

export const PageLayoutHeader: React.FC<PageLayoutHeaderProps> = (
  props,
): React.JSX.Element => {
  const { mounted } = usePageLayoutHeader(props);

  return (
    <header className={clsx(props.className, "")}>
      <div
        className={clsx("container-large-full relative", "max-sm:px-0!", {
          "h-155": props.size === "lg",
          "h-147.5": props.size === "md",
          "h-130": props.size === "sm",
        })}
      >
        <div
          className={clsx(
            "relative flex h-full flex-col justify-between rounded-2xl px-[20px]",
            "md:px-[35px]",
            // "max-sm:w-[100vw! max-sm:-mx-5 max-sm:-mt-5 max-sm:max-w-[100vw]!",
            // "pl-[53px]",
            "2xl:flex-row 2xl:items-center 2xl:pl-[140px]",
          )}
        >
          {/* Background */}
          <div
            className={clsx(
              "absolute inset-0 -z-3 h-full w-full overflow-hidden",
              "sm:rounded-2xl",
            )}
          >
            <div
              id="layer-back"
              className="h-full w-full will-change-transform"
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={props.activeIndex ?? 0}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{
                    duration: mounted ? 0.9 : 0,
                    ease: EASE_OUT_CUBIC,
                    scale: {
                      duration: mounted ? 1.1 : 0,
                      ease: EASE_OUT_CUBIC,
                    },
                    opacity: { duration: mounted ? 0.9 : 0 },
                  }}
                  className="absolute inset-0 h-full w-full"
                >
                  <NextImage
                    preload
                    className="h-full w-full object-cover object-center"
                    src={props.media.url}
                    width={props.media.width}
                    height={props.media.height}
                    alt={props.media.alt || "Header background"}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div
            className={clsx(
              "absolute inset-0 -z-1 overflow-hidden",
              "sm:rounded-2xl",
              "after:absolute after:inset-0 after:bg-black/20",
              "before:absolute before:right-0 before:bottom-0 before:left-0 before:h-95 before:bg-linear-to-b before:from-black/0 before:to-black/30",
              props.classNameOverlay,
            )}
          />

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              className={clsx(
                "relative z-2 my-auto flex flex-col items-start",
                // mt-[35px]
                // "md:mt-[45px]",
                "2xl:my-0",
                // 2xl:mt-0
              )}
              key={props.activeIndex ?? 0}
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* Meta */}
              <motion.div
                variants={itemVariants}
                className="mb-[15px] flex items-center gap-1.5"
              >
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
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={{
                  initial: { y: 25, opacity: 0, scale: 0.97 },
                  animate: {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: ANIMATION_DURATION,
                      ease: EASE_OUT_EXPO,
                      delay: 0.15,
                    },
                  },
                  exit: {
                    y: -20,
                    opacity: 0,
                    scale: 0.97,
                    transition: {
                      duration: EXIT_DURATION,
                      ease: EASE_OUT_EXPO,
                    },
                  },
                }}
                className={clsx(
                  props.classNameTitle,
                  "font-season-mix font-light tracking-[.038em] text-white",
                  "[&>span]:text-[#D8E8FF]",
                  {
                    "text-[40px]/[50px]": props.size === "lg",
                    "text-[42px]/[52px]": props.type !== "second",
                    "text-[34px]/[45px]": props.type === "second",
                  },
                )}
              >
                {props.title}
              </motion.h1>

              {/* Description */}
              {!!props.description && (
                <motion.p
                  variants={itemVariants}
                  className={clsx(
                    "mt-5 max-w-[530px] text-[14px]/[19px] tracking-[.024em] text-white/60",
                    props.classNameDescription,
                  )}
                >
                  {props.description}
                </motion.p>
              )}

              {/* Children */}
              {!!props.InfoCpmponent && (
                <motion.div variants={itemVariants}>
                  {props.InfoCpmponent}
                </motion.div>
              )}

              {props.ContentComponent}

              {/* Actions */}
              {!!props.ActionsComponent && (
                <motion.div
                  variants={itemVariants}
                  className={clsx(
                    "mt-[25px] flex flex-col items-start gap-2.5",
                    props.classNameActions,
                  )}
                >
                  {props.ActionsComponent}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Right component */}
          {props.RightComponent}

          {/* Children */}
          {props.children}

          {/* Arrow */}
          {!props.children && (
            <div
              className={clsx(
                "absolute bottom-5 left-1/2 hidden h-5 w-5 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5",
                "2xl:flex",
              )}
            >
              <Icons.Arrow />
            </div>
          )}
        </div>
      </div>

      {props.FooterComponent}
    </header>
  );
};

// Animation constants
const EASE_OUT_EXPO = [0.25, 0.46, 0.45, 0.94] as const;
const EASE_OUT_CUBIC = [0.22, 0.61, 0.36, 1] as const;
const ANIMATION_DURATION = 0.6;
const EXIT_DURATION = 0.4;

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      ease: EASE_OUT_EXPO,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: EXIT_DURATION,
      ease: EASE_OUT_EXPO,
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 15, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION,
      ease: EASE_OUT_EXPO,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: {
      duration: EXIT_DURATION,
      ease: EASE_OUT_EXPO,
    },
  },
};
