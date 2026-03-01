"use client";

import { Markdown } from "@/components/markdown";

import * as Icons from "./icons";

import { clsx } from "clsx";

export type AlertProps = {
  className?: string;
  children: React.ReactNode;
};

export const Alert: React.FC<AlertProps> = (props): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "flex flex-col items-start gap-[15px] rounded-lg bg-[#E0EBFA] p-5 pr-6.25",
      )}
    >
      {/* Tag */}
      <div className="flex items-center gap-2 rounded-full bg-[#507FEB] px-2 py-[5px]">
        <Icons.Note />

        <span className="font-sf-pro text-[12px]/[14px] text-white">
          Please note
        </span>
      </div>

      {/* Content */}
      <div>{props.children}</div>
    </div>
  );
};
