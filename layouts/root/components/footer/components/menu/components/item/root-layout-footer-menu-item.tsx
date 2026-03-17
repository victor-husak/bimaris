import { NextLink } from "@/i18n/routing";

import { clsx } from "clsx";

export type RootLayoutFooterMenuItemProps = {
  className?: string;
  title: string;
  href?: string;
};

export const RootLayoutFooterMenuItem: React.FC<
  RootLayoutFooterMenuItemProps
> = (props): React.JSX.Element => {
  return (
    <li
      className={clsx(
        props.className,
        "underline-hover text-footer relative flex flex-1 cursor-pointer items-center px-4 py-[6.5px] text-[14px]/[18px] tracking-[.012em] transition-colors",
        "hover:text-footer-second hover:before:bg-footer-second",
        "before:absolute before:left-0 before:h-[22px] before:w-px before:rounded-xs before:transition-all",
      )}
    >
      {/* max-w-[180px] */}
      {props.href ? (
        <NextLink
          className={clsx("line-clamp-1", "2xl:max-w-[180px]")}
          href={props.href}
        >
          {props.title}
        </NextLink>
      ) : (
        <span className={clsx("line-clamp-1", "2xl:max-w-[180px]")}>
          {props.title}
        </span>
        // max-w-[180px]
      )}
    </li>
  );
};
