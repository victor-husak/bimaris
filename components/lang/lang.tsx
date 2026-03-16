"use client";

import * as Icons from "./icons";

import { clsx } from "clsx";

import { useLang } from "./lang.hook";

export type LangProps = {
  className?: string;
};

export const Lang: React.FC<LangProps> = (props): React.JSX.Element => {
  const { langLabel, onTriggerLang } = useLang();

  return (
    <div
      className={clsx(
        props.className,
        "group transition-color flex items-center",
      )}
      // onClick={onTriggerLang}
    >
      <Icons.Lang className="mr-2" />

      <span
        className={clsx(
          "transition-colors",
          "group-hover:text-topline-second group-hover:[--link-dashed-border-color: var(--color-topline-second)]",
        )}
      >
        Global - {langLabel}
      </span>

      <Icons.Arrow className="ml-2.5" />
    </div>
  );
};
