"use client";

import { List, Tag } from "@/components";

import { CardAction } from "@/components/card";

import * as Icons from "./icons";

import { useServicesSectionItem } from "./services-section-item.hook";

import { clsx } from "clsx";

export type ServicesSectionItemProps = {
  className?: string;
  data: {
    title: string;
    tag?: string;
    description: string;
    list: string[];
    href: string;
  };
};

export const ServicesSectionItem: React.FC<ServicesSectionItemProps> = (
  props,
): React.JSX.Element => {
  const { onNavigation } = useServicesSectionItem(props);

  return (
    <div
      className={clsx(
        props.className,
        "group relative cursor-pointer rounded-[11px] border border-[#E7EAF2] py-[25px] pr-[56px] pl-[54px] transition-all",
        "hover:-translate-y-2.5 hover:bg-[#F0F3F7]",
      )}
      onClick={onNavigation}
    >
      {/* Header */}
      <header className="relative mb-[25px] flex items-center">
        {/* Icon */}
        <Icons.Service className="absolute -left-[29px]" />

        {/* Title */}
        <h3 className="text-[15px]/[19px] font-normal tracking-[.024em] text-[#2D3A52]">
          {props.data.title}
        </h3>

        {/* Tag */}
        {props.data.tag && (
          <Tag
            className={clsx("-my-[2.5px] ml-1.5", {
              "bg-[#C1DBFF]": props.data.tag === "top-choice",
              "bg-[#DEDBF4]": props.data.tag === "new",
            })}
            title={props.data.tag === "top-choice" ? "Top choice" : "New"}
          />
        )}
      </header>

      {/* Description */}
      <p className="text-[14px]/[20px] tracking-[.028em] text-[#8A91A2]">
        {props.data.description}
      </p>

      {/* List */}
      <List className="my-[25px]" items={props.data.list} />

      {/* Action */}
      <CardAction
        className="mt-[25px] group-hover:w-[105px]"
        size="small"
        title="Read more"
        href={props.data.href}
      />
    </div>
  );
};
