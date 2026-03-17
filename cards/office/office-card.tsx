import NextImage from "next/image";

import { useTranslations } from "next-intl";

import * as Components from "./components";

import { Tag } from "@/components";

import { CardAction } from "@/components/card";

import { ArrowRightIcon } from "@/icons";

import { clsx } from "clsx";

import { useOfficeCard } from "./office-card.hook";

import type { Office } from "@/types/offices";

export type OfficeCardProps = {
  className?: string;
  data: Office;
};

export const OfficeCard: React.FC<OfficeCardProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("cards.office");

  const { data } = useOfficeCard(props);

  return (
    <div
      className={clsx(
        props.className,
        "group flex flex-col rounded-[11px] bg-white p-[25px]",
      )}
    >
      <Tag
        className={clsx("mr-auto mb-[25px]", {
          "bg-secondary text-white": data.isMain,
          "bg-[#E7EFFC] text-[#2D3A52]": !data.isMain,
        })}
        title={data.isMain ? t("tag.main") : t("tag.back")}
        IconComponent={
          <ArrowRightIcon
            className={clsx({
              "rotate-180": !data.isMain,
            })}
            color="currentColor"
          />
        }
      />

      {/* Preview */}
      <NextImage
        className="aspect-auto=[357px/180px] w-full rounded-lg bg-gray-300 object-cover object-center"
        src={data.preview}
        alt="Case preview"
        width={1071}
        height={540}
      />

      {/* Content */}
      <div className="flex flex-col pt-[25px]">
        {/* Title */}
        <span className="mr-auto mb-[25px] text-[16px]/[21px] tracking-[.024em] text-[#2D3A52]">
          {data.name}
        </span>

        {/* Content */}
        <ul className="flex flex-col gap-2">
          <Components.Item title={data.address} />

          <Components.Item title={data.email} />

          <Components.Meeting />
        </ul>
        {/* <p className="text-[14px]/[20px] tracking-[.024em] text-[#969BA7]">
          Strategic access to the European Union with flexible residence and
          investment pathways. We assist with residence permits, investor
          programs, and corporate immigration matters.
        </p> */}

        {/* Action */}
        <CardAction
          className="mt-[35px] mr-auto group-hover:w-[125px]"
          href={data.url}
          target="_blank"
          rel="nofollow noopener noreferrer"
          title={t("action")}
        />
      </div>
    </div>
  );
};
