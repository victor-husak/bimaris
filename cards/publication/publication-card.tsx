import NextImage from "next/image";
import NextLink from "next/link";

import { Tag } from "@/components";

import { CardAction } from "@/components/card";

import * as Icons from "./icons";

import { clsx } from "clsx";

export type PublicationCardProps = {
  className?: string;
};

export const PublicationCard: React.FC<PublicationCardProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "group flex flex-col rounded-[11px] bg-white p-[25px]",
      )}
    >
      <Tag className="mr-auto mb-[25px] bg-[#E5E2F7]" title="Case study" />

      {/* Preview */}
      <div className="h-[180px] overflow-hidden rounded-lg bg-gray-300">
        <NextImage
          className="h-full w-full object-cover"
          src="/images/genereted/case.webp"
          alt="Case preview"
          width={960}
          height={540}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col pt-[25px]">
        {/* Meta */}
        <div className="mb-[25px] flex gap-2">
          <Tag
            className="bg-[#E7EFFC]"
            title="Business relocation"
            IconComponent={<Icons.Business />}
          />

          {/* Date */}
          <div className="flex rounded-full bg-[#EFF2F7] px-2 py-[5px]">
            <span className="font-sf-pro text-[12px]/[14px] text-[#2D3A52]">
              05.01.2026
            </span>
          </div>
        </div>

        {/* Title */}
        <NextLink
          className="underline-hover mr-auto mb-[15px] text-[16px]/[22px] tracking-[.024em] text-[#2D3A52]"
          href="/cases/1"
        >
          Ukraine updates documentation rules for temporary residence permits
        </NextLink>

        {/* Description */}
        <p className="text-[14px]/[20px] tracking-[.024em] text-[#969BA7]">
          Assisting individual professionals with immigration planning and legal
          support complex.
        </p>

        {/* Action */}
        <CardAction className="mr-auto" />
      </div>
    </div>
  );
};
