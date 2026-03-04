import * as Components from "./components";

import { AsideGroup } from "@/components/aside/group";

import { clsx } from "clsx";

export type AsideListsProps = {
  className?: string;
  title: string;
};

export const AsideLists: React.FC<AsideListsProps> = (
  props,
): React.JSX.Element => {
  return (
    <AsideGroup className={clsx(props.className, "")} title={props.title}>
      <ul className="flex flex-col gap-[15px] px-[24px] py-[25px]">
        <Components.Item title="D Visa to Ukraine" />

        <Components.Item title="Temporary Residence Permit in Ukraine" />

        <Components.Item title="Citizenship of Ukraine" />
      </ul>
    </AsideGroup>
  );
};
