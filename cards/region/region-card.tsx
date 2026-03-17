import NextImage from "next/image";
import { NextLink } from "@/i18n/routing";
import { clsx } from "clsx";

import { Tag } from "@/components";

import { CardAction } from "@/components/card";

import { ArrowRightIcon } from "@/icons";

import { useRegionCard } from "./region-card.hook";

import type { BalticShort } from "@/types/baltics";

export type RegionCardProps = {
  className?: string;
  data: BalticShort;
};

export const RegionCard: React.FC<RegionCardProps> = (
  props,
): React.JSX.Element => {
  const { data } = useRegionCard(props);

  return (
    <div
      className={clsx(
        props.className,
        "group flex flex-col rounded-[11px] bg-white p-[25px] transition-all",
        "hover:-translate-y-2.5",
      )}
    >
      <Tag
        className="bg-secondary mr-auto mb-[25px] text-white"
        title="Baltics"
        IconComponent={<ArrowRightIcon color="#fff" />}
      />

      {/* Preview */}
      <div className="aspect-auto=[357px/180px] w-full overflow-hidden rounded-lg bg-gray-300">
        <NextImage
          className={clsx(
            "transition-img h-full w-full object-cover",
            "group-hover:transform-[scale(1.03)]",
          )}
          src={data.preview}
          alt="Case preview"
          width={1071}
          height={540}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col pt-[25px]">
        {/* Title */}
        <NextLink
          className="underline-hover mr-auto mb-[25px] text-[16px]/[21px] tracking-[.024em] text-[#2D3A52]"
          href={`/baltics-desk/${data.slug}`}
        >
          {data.name}
        </NextLink>

        {/* Description */}
        <p className="text-[14px]/[20px] tracking-[.024em] text-[#969BA7]">
          {data.description}
        </p>

        {/* Action */}
        <CardAction
          className="mt-[35px] mr-auto"
          href={`/baltics-desk/${data.slug}`}
          title="Explore"
        />
      </div>
    </div>
  );
};
