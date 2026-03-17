import { clsx } from "clsx";
import { forwardRef } from "react";

export type SectionArrowsItemProps = {
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
};

export const SectionArrowsItem = forwardRef<
  HTMLButtonElement,
  SectionArrowsItemProps
>((props, ref): React.JSX.Element => {
  return (
    <button
      ref={ref}
      className={clsx(
        props.className,
        "flex h-9.5 w-9.5 items-center justify-center rounded-full border border-[#E7EBF2] bg-[#F1F3F7] transition-all",

        {
          "opacity-80": props.disabled,
          "cursor-pointer hover:bg-[#D9EAE7]": !props.disabled,
        },
      )}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
});

SectionArrowsItem.displayName = "SectionArrowsItem";
