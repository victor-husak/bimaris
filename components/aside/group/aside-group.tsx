import { ArrowRightIcon } from "@/icons";

import { clsx } from "clsx";

export type AsideGroupProps = {
  className?: string;
  variant?: "base" | "secondary" | "thridary";
  title: string;
  children: React.ReactNode;
};

export const AsideGroup: React.FC<AsideGroupProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "rounded-[11px] border border-[#E7EAF2]",
      )}
    >
      {/* Header */}
      <header className="flex border-b border-[#E7EAF2] px-5 py-[14px]">
        <div
          className={clsx(
            "flex items-center gap-2 rounded-full px-2 py-[5px] text-[12px]/[14px] tracking-[.034em]",
            {
              "bg-[#DEDBF4] text-[#3B3255]":
                !props.variant || props.variant === "base",
              "bg-[#C1DBFF] text-[#00335A]": props.variant === "secondary",
              "bg-[#507FEB] text-[#FFFFFF]": props.variant === "thridary",
            },
          )}
        >
          {props.variant === "thridary" && <ArrowRightIcon color="#fff" />}

          {/* Title */}
          <span>{props.title}</span>
        </div>
      </header>

      {/* Children */}
      {props.children}
    </div>
  );
};
