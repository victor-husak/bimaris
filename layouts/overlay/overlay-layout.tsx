"use client";

import { Loading } from "@/components/loading";

import * as Components from "./components";

import { CSSTransition } from "react-transition-group";

import classes from "./overlay-layout.module.scss";

import { clsx } from "clsx";

import { useOverlayLayout } from "./overlay-layout.hook";

export interface OverlayLayoutProps {
  className?: string;
  classNameContent?: string;
  title: string;
  loading?: boolean;
  children: React.ReactNode;
  open?: boolean;
  RightComponent?: React.ReactNode;
  onClose: () => void;
  onExited?: () => void;
}

export const OverlayLayout: React.FC<OverlayLayoutProps> = (
  props,
): React.JSX.Element => {
  const { nodeRef } = useOverlayLayout(props);

  return (
    <CSSTransition
      in={props.open}
      nodeRef={nodeRef}
      timeout={700}
      classNames={{
        enterActive: classes["overlay-enter-active"],
        enterDone: classes["overlay-enter-active"],
        exitActive: classes["overlay-exit-active"],
        exitDone: classes["overlay-exit-active"],
      }}
      appear
      unmountOnExit
      onExited={props.onExited}
    >
      <div
        className={clsx(props.className, "fixed inset-0 z-8 flex w-full")}
        ref={nodeRef}
      >
        <div
          className={clsx(
            classes.background,
            "transition-overlay fixed inset-0 bg-black/60",
          )}
          onClick={props.onClose}
        />

        <div
          className={clsx(
            classes.main,
            "relative z-11 mb-auto flex max-h-[calc(100vh-40px)] w-full flex-col bg-white pt-[108px]",
          )}
        >
          <div
            className={clsx(
              "container-full flex overflow-y-auto pt-[30px] pb-[50px]",
              props.classNameContent,
            )}
            data-lenis-prevent
          >
            <div
              className={clsx(
                "relative flex flex-1 flex-col",
                classes.children,
              )}
            >
              <p className="mb-10 text-[24px]/[31px] font-light tracking-[.024em] text-[#507FEB]">
                {props.title}
              </p>

              {props.children}
            </div>

            {/* Right */}
            {props.RightComponent}
          </div>

          <Components.Footer />

          <Loading active={props.loading} />
        </div>
      </div>
    </CSSTransition>
  );
};
