import NextLink from "next/link";

import { ArrowRightIcon } from "@/icons";

import { clsx } from "clsx";

import { useTranslations } from "next-intl";

import type { Office } from "@/types/offices";

export type ContactSectionOfficesItemProps = {
  className?: string;
  data: Office;
};

export const ContactSectionOfficesItem: React.FC<
  ContactSectionOfficesItemProps
> = (props): React.JSX.Element => {
  const t = useTranslations("sections.contact.offices");

  return (
    <div
      className={clsx(
        props.className,
        "flex w-[300px] shrink-0 flex-col items-start rounded-lg border border-[#D0D9ED] p-[25px]",
      )}
    >
      {/* Tag */}
      <div
        className={clsx(
          "mb-[35px] flex items-center gap-2.5 rounded-full px-2.5 py-1",
          !props.data.isMain
            ? "bg-[#CAD8EB] text-[#2D3A52]"
            : "bg-[#507FEB] text-white",
        )}
      >
        <ArrowRightIcon
          className={clsx({
            "[&>path]:stroke-[#2D3A52]": !props.data.isMain,
          })}
        />

        <span className="text-[12px]/[15px] tracking-[.028em]">
          {props.data.isMain ? t("tag.main") : t("tag.back")}
        </span>
      </div>

      {/* Content */}
      <ul className="--font-sf-pro flex flex-col items-start gap-1.5 text-[14px]/[18px] [--dashed-url:url(/images/underline.svg)]">
        <li className="link-dashed">{props.data.city}</li>

        <li className="link-dashed">{props.data.address}</li>

        <li className="link-dashed">{props.data.email}</li>

        <li
          className={clsx(
            "link-dashed text-secondary cursor-pointer transition-all",
            "hover:opacity-70",
          )}
        >
          <NextLink
            href={props.data.url}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            {t("action")}
          </NextLink>
        </li>
      </ul>
    </div>
  );
};
