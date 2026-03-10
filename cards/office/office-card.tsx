import NextImage from "next/image";

import { Tag } from "@/components";

import { CardAction } from "@/components/card";

import { ArrowRightIcon } from "@/icons";

import { clsx } from "clsx";

export type OfficeCardProps = {
  className?: string;
};

export const OfficeCard: React.FC<OfficeCardProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "group flex flex-col rounded-[11px] bg-white p-[25px]",
      )}
    >
      <Tag
        className="bg-secondary mr-auto mb-[25px] text-white"
        title="Main office"
        IconComponent={<ArrowRightIcon color="#fff" />}
      />

      {/* Preview */}
      <NextImage
        className="aspect-auto=[357px/180px] w-full rounded-lg bg-gray-300 object-cover object-center"
        src="/images/genereted/latvia.webp"
        alt="Case preview"
        objectFit="cover"
        objectPosition="center"
        width={1071}
        height={540}
      />

      {/* Content */}
      <div className="flex flex-col pt-[25px]">
        {/* Title */}
        <span className="mr-auto mb-[25px] text-[16px]/[21px] tracking-[.024em] text-[#2D3A52]">
          Kyiv, Ukraine
        </span>

        {/* Description */}
        <p className="text-[14px]/[20px] tracking-[.024em] text-[#969BA7]">
          Strategic access to the European Union with flexible residence and
          investment pathways. We assist with residence permits, investor
          programs, and corporate immigration matters.
        </p>

        {/* Action */}
        <CardAction
          className="mt-[35px] mr-auto group-hover:w-[125px]"
          href="/baltics-desk/latvia"
          title="Show on map"
        />
      </div>
    </div>
  );
};
