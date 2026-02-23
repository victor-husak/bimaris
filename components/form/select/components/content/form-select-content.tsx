import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { CSSTransition } from "react-transition-group";

import classes from "./form-select-content.module.scss";

import { clsx } from "clsx";

export type FormSelectContentProps = ComponentPropsWithoutRef<"div"> & {
  className?: string;
  active: boolean;
  options?: Array<Option>;
  onChange: (value: Option) => void;
};

export const FormSelectContent = forwardRef<
  HTMLDivElement,
  FormSelectContentProps
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
            "bg-overlay-background absolute top-[calc(100%+7px)] left-0 z-2 flex min-w-full flex-col overflow-hidden rounded-md border border-[#e7e9ed]",
          )}
          data-lenis-prevent
        >
          {!!props.options?.length ? (
            <div className="max-h-[234px] overflow-y-auto">
              {props.options.map((item) => (
                <div
                  className={clsx(
                    "flex cursor-pointer items-center gap-4 px-[15px] py-2.5 whitespace-nowrap transition-all",
                    "hover:bg-[#EBEBEB]",
                  )}
                  key={item.value}
                  onClick={() => props.onChange(item)}
                >
                  <span className="line-clamp-1 text-[14px]/[19px] tracking-[.006em]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="px-[15px] py-2.5">
              <span className="text-[14px]/[19px] tracking-[.006em]">
                Empty
              </span>
            </div>
          )}
        </div>
      </div>
    </CSSTransition>
  );
});
