import NextImage from "next/image";
import { NextLink } from "@/i18n/routing";
import { clsx } from "clsx";
import { useTranslations } from "next-intl";

import { Tag } from "@/components";

import { CardAction } from "@/components/card";

import * as Icons from "./icons";

import { usePublicationCard } from "./publication-card.hook";

import type { PublicationShort } from "@/types/publication";
import { CaseStudyShort } from "@/types/case-studies";

export type PublicationCardProps = {
  className?: string;
  data: PublicationShort | CaseStudyShort;
  type?: "publication" | "case-study";
};

export const PublicationCard: React.FC<PublicationCardProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("cards.publication");

  const { data } = usePublicationCard(props);

  return (
    <div
      className={clsx(
        props.className,
        "group flex flex-col items-start rounded-[11px] bg-white py-[25px] transition-all",
        "hover:-translate-y-2.5",
      )}
    >
      {props.type === "publication" && !!data.category && (
        <Tag
          className="mx-[25px] mb-[25px] bg-[#E7EFFC]"
          title={data.category.name}
        />
      )}

      {props.type === "case-study" && (
        <Tag
          className="mx-[25px] mb-[25px] bg-[#E7EFFC]"
          title={t("caseStudy")}
        />
      )}

      {/* Preview */}
      <div className="mx-[15px] h-[180px] w-[calc(100%-30px)] overflow-hidden rounded-lg bg-gray-300">
        <NextImage
          className={clsx(
            "transition-img h-full w-full object-cover",
            "group-hover:transform-[scale(1.03)]",
          )}
          src={data.preview}
          alt="Case preview"
          width={960}
          height={540}
        />
      </div>

      {/* Content */}
      <div className="mx-[25px] flex flex-1 flex-col pt-[25px]">
        {/* Meta */}
        <div className="mb-[25px] flex gap-2">
          <Tag
            className="bg-[#E7EFFC] text-[#2D3A52]"
            title="Business relocation"
            IconComponent={<Icons.Business />}
          />

          {/* Date */}
          <div className="flex rounded-full bg-[#EFF2F7] px-2 py-[5px]">
            <span className="text-[12px]/[14px] tracking-[.024em] text-[#2D3A52]">
              {data.date}
            </span>
          </div>
        </div>

        {/* Title */}
        <NextLink
          className="underline-hover mr-auto mb-[15px] line-clamp-2 text-[16px]/[22px] tracking-[.024em] text-[#2D3A52]"
          href={data.href}
        >
          {data.name}
        </NextLink>

        {/* Description */}
        <p className="mb-auto line-clamp-4 text-[14px]/[20px] tracking-[.024em] text-[#969BA7]">
          {data.description}
        </p>

        {/* Action */}
        <CardAction
          className="mt-[25px] mr-auto group-hover:w-[110px]"
          href={data.href}
          title={t("action")}
        />
      </div>
    </div>
  );
};
