import { NextLink } from "@/i18n/routing";

import * as Icons from "./icons";

import { clsx } from "clsx";

export type AsideListsItemProps = {
  className?: string;
  data: { id: string; name: string; href: string };
};

export const AsideListsItem: React.FC<AsideListsItemProps> = (
  props,
): React.JSX.Element => {
  return (
    <li className={clsx(props.className, "flex items-center gap-6")}>
      <Icons.Link />

      <NextLink
        className={clsx(
          "underline-hover font-sf-pro line-clamp-1 text-[14px]/[16px] tracking-[.024em] text-[#6B7586] transition-all",
          "hover:text-secondary",
        )}
        href={props.data.href}
      >
        {props.data.name}
      </NextLink>
    </li>
  );
};
