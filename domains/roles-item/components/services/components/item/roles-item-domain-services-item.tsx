import { List } from "@/components";

import { CardAction } from "@/components/card";

import * as Icons from "./icons";

import { clsx } from "clsx";

export type RolesItemDomainServicesItemProps = {
  className?: string;
  data: {
    title: string;
    description: string;
    list: string[];
  };
};

export const RolesItemDomainServicesItem: React.FC<
  RolesItemDomainServicesItemProps
> = (props): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "group relative cursor-pointer rounded-[11px] border border-[#E7EAF2] py-[25px] pr-[56px] pl-[54px] transition-all",
        "hover:bg-[#F0F3F7]",
      )}
    >
      {/* Header */}
      <header className="relative mb-[25px] flex items-center">
        {/* Icon */}
        <Icons.Service className="absolute -left-[29px]" />

        {/* Title */}
        <h3 className="text-[15px]/[19px] font-normal tracking-[.024em] text-[#2D3A52]">
          {props.data.title}
        </h3>
      </header>

      {/* Description */}
      <p className="text-[14px]/[20px] tracking-[.028em] text-[#8A91A2]">
        {props.data.description}
      </p>

      {/* List */}
      <List className="my-[25px]" items={props.data.list} />

      {/* Action */}
      <CardAction />
    </div>
  );
};
