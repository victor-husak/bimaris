import NextImage from "next/image";
import { NextLink } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import { Tag, List } from "@/components";

import { CardAction } from "@/components/card";

import { clsx } from "clsx";

import { usePeopleCard } from "./people-card.hook";

import type { ExpertShort } from "@/types/experts";

export type PeopleCardProps = {
  className?: string;
  data: ExpertShort;
};

export const PeopleCard: React.FC<PeopleCardProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("cards.people");

  const { data } = usePeopleCard(props);

  return (
    <div
      className={clsx(
        props.className,
        "group flex flex-col rounded-[11px] bg-white p-2.5 transition-all",
        "hover:-translate-y-2.5",
      )}
    >
      {/* Preview */}
      <div className="h-[220px] overflow-hidden rounded-lg bg-[#F5F7FA]">
        <NextImage
          className={clsx(
            "transition-img h-full w-full object-contain object-center",
            "group-hover:transform-[scale(1.03)]",
          )}
          src={data.avatar}
          alt={data.name}
          width={660}
          height={660}
        />
      </div>

      {/* Content */}
      <div className="mt-2.5 flex flex-col items-start p-[15px]">
        {/* Title */}
        <NextLink
          className="underline-hover mr-auto mb-5 text-[16px]/[21px] tracking-[.024em] text-[#333333]"
          href={`/people/${props.data.slug}`}
        >
          {data.name}
        </NextLink>

        <Tag className="mb-[25px] bg-[#E6EFFC]" title={data.position} />

        {/* List */}
        <List items={data.items} />

        {/* Action */}
        <CardAction
          className="mt-10 group-hover:w-[110px]"
          size="base"
          href={`/people/${props.data.slug}`}
          title={t("action")}
        />
      </div>
    </div>
  );
};
