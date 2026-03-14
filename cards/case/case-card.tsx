import { NextLink } from "@/i18n/routing";
import NextImage from "next/image";
import { clsx } from "clsx";

import { CardAction } from "@/components/card";

import * as Components from "./components";

import { useCaseCard } from "./case-card.hook";

import type { CaseStudyShort } from "@/types/case-studies";

export type CaseCardProps = {
  className?: string;
  data: CaseStudyShort;
};

export const CaseCard: React.FC<CaseCardProps> = (props): React.JSX.Element => {
  const { data } = useCaseCard(props);

  return (
    <div
      className={clsx(
        props.className,
        "group bg-background-secondary rounded-[11px] transition-all",
        "hover:-translate-y-2.5",
      )}
    >
      {/* Tags */}
      <div className="flex items-center gap-2 px-[30px] py-[25px] py-[30px]">
        <Components.Tag title="Personal" />

        <Components.Tag title="To Ukraine" type="to" />
      </div>

      {/* Preview */}
      <div className="mx-[15px] h-[180px] overflow-hidden rounded-lg bg-gray-300">
        <NextImage
          className="h-full w-full object-cover"
          src={data.preview}
          alt="Case preview"
          width={960}
          height={540}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col px-[30px] pt-[25px] pb-[26px]">
        {/* Title */}
        <NextLink
          className="underline-hover mr-auto mb-[17px] text-[15px]/[19px] tracking-[.024em] text-[#2D3A52]"
          href={data.href}
        >
          {data.name}
        </NextLink>

        {/* Description */}
        <p className="text-[14px]/[20px] tracking-[.024em] text-[#969BA7]">
          {data.description}
        </p>

        {/* Action */}
        <CardAction
          className="mt-[25px] mr-auto"
          title="Explore"
          href={data.href}
        />
      </div>
    </div>
  );
};
