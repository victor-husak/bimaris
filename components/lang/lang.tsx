"use client";

import * as Icons from "./icons";

import { clsx } from "clsx";

export type LangProps = {
  className?: string;
};

export const Lang: React.FC<LangProps> = (props): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "group transition-color flex cursor-pointer items-center",
      )}
    >
      <Icons.Lang className="mr-2" />

      <span
        className={clsx(
          "transition-colors",
          "group-hover:text-topline-second group-hover:[--link-dashed-border-color: var(--color-topline-second)]",
        )}
      >
        Global - En
      </span>

      <Icons.Arrow className="ml-2.5" />
    </div>
  );
};
