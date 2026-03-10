import { clsx } from "clsx";
import { forwardRef } from "react";

export type SectionArrowsItemProps = {
  className?: string;
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
        "flex h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-full border border-[#E7EBF2] bg-[#F0F3F7] transition-all",
        "hover:bg-[#D9EAE7]",
      )}
    >
      {props.children}
    </button>
  );
});

SectionArrowsItem.displayName = "SectionArrowsItem";
