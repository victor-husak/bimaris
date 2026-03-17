import { forwardRef } from "react";

import { ArrowRightIcon } from "@/icons";

import { clsx } from "clsx";

export type ContactSectionOfficesArrowProps = {
  className?: string;
};

export const ContactSectionOfficesArrow = forwardRef<
  HTMLButtonElement,
  ContactSectionOfficesArrowProps
>((props, ref) => {
  return (
    <button
      className={clsx(
        props.className,
        "box-shadow-[0_0_6px_6px_black/5] flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#F7F8FA]/80 backdrop-blur-[30px] backdrop-brightness-115",
      )}
      ref={ref}
    >
      <ArrowRightIcon color="#3C3C3C" />
    </button>
  );
});
