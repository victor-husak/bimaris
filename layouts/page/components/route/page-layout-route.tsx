import NextLink from "next/link";

import * as Icons from "./icons";

import { clsx } from "clsx";
import React from "react";

export type PageLayoutRouteProps = {
  className?: string;
  items: Route[];
  onClick?: (value: string) => void;
};

export const PageLayoutRoute: React.FC<PageLayoutRouteProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "flex items-center text-[12px]/[15px] tracking-[.012em] text-[#8D98A8]",
      )}
    >
      {props.items.map((item, index) => (
        <div
          className={clsx(
            "flex items-center",
            "[&>*:where([data-action='true'])]:hover:text-foreground [&>*:where([data-action='true'])]:transition-colors",
          )}
          key={`${index}`}
        >
          {!!item.value && index < props.items.length - 1 ? (
            <NextLink
              className="underline-hover line-clamp-1"
              href={item.value}
              data-action
            >
              <span>{item.label}</span>
            </NextLink>
          ) : (
            <span
              className={clsx("line-clamp-1", {
                "underline-hover cursor-pointer": !!props.onClick && !!item.key,
              })}
              data-action={!!props.onClick && !!item.key}
              onClick={
                props.onClick && item.key
                  ? () => props.onClick!(item.key)
                  : undefined
              }
            >
              {item.label}
            </span>
          )}

          {index < props.items.length - 1 && <Icons.HR className="mx-2.25" />}
        </div>
      ))}
    </div>
  );
};
