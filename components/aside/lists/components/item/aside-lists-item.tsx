import * as Icons from "./icons";

import { clsx } from "clsx";

export type AsideListsItemProps = {
  className?: string;
  title: string;
};

export const AsideListsItem: React.FC<AsideListsItemProps> = (
  props,
): React.JSX.Element => {
  return (
    <li className={clsx(props.className, "flex items-center gap-6")}>
      <Icons.Link />

      <span className="text-[14px]/[16px] text-[#6B7586]">{props.title}</span>
    </li>
  );
};
