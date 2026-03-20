import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { CSSTransition } from "react-transition-group";

import classes from "./filters-checkbox-content.module.scss";

import { clsx } from "clsx";

export type FiltersCheckboxContentProps = ComponentPropsWithoutRef<"div"> & {
  className?: string;
  active: boolean;
  children?: React.ReactNode;
};

export const FiltersCheckboxContent = forwardRef<
  HTMLDivElement,
  FiltersCheckboxContentProps
>((props, ref): React.JSX.Element => {
  return (
    <CSSTransition
      unmountOnExit
      in={props.active}
      nodeRef={ref}
      timeout={300}
      classNames={{
        enterActive: classes["overlay-enter-active"],
        enterDone: classes["overlay-enter-active"],
        exitActive: classes["overlay-exit-active"],
        exitDone: classes["overlay-exit-active"],
      }}
    >
      <div ref={ref}>
        <div
          className={clsx(
            classes.content,
            "absolute top-[calc(100%+10px)] left-0 z-2 flex w-65 min-w-full flex-col rounded-lg border border-[#ECEFF4] bg-[#fff]",
          )}
          data-lenis-prevent
        >
          {props.children}
        </div>
      </div>
    </CSSTransition>
  );
});
