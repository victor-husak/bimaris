import * as Components from "./components";

import { AsideGroup } from "@/components/aside/group";

import { clsx } from "clsx";

import type { AsideListsItemProps } from "./components/item";

export type AsideListsProps = {
  className?: string;
  title: string;
  data: Array<AsideListsItemProps["data"]>;
};

export const AsideLists: React.FC<AsideListsProps> = (
  props,
): React.JSX.Element => {
  return (
    <AsideGroup className={clsx(props.className, "")} title={props.title}>
      <ul className="flex flex-col gap-[15px] px-[24px] py-[25px]">
        {props.data.map((item) => (
          <Components.Item key={item.id} data={item} />
        ))}
      </ul>
    </AsideGroup>
  );
};
