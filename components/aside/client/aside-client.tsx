import NextLink from "next/link";
import NextImage from "next/image";

import { ArrowRightIcon } from "@/icons";

import { clsx } from "clsx";

import { Client } from "@/types/clients";

export type AsideClientProps = {
  className?: string;
  data: Client;
};

export const AsideClient: React.FC<AsideClientProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "flex items-center gap-5 py-[15px] pr-[34px] pl-5",
      )}
    >
      {/* Preview */}
      <div className="group flex aspect-square w-[117px] shrink-0 items-center justify-center rounded-md bg-[#E9ECF2]">
        {/* Logo */}
        <NextImage
          className="max-w-[55%] object-contain transition-all duration-350 ease-linear"
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${props.data.logo.url}`}
          width={props.data.logo.width}
          height={props.data.logo.height}
          alt={props.data.logo.alternativeText || props.data.name}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5">
        {/* Title */}
        {props.data.url ? (
          <NextLink
            className={clsx(
              "link-with-arrow text-[13px]/[17px] tracking-[.028em] text-[#3B4552] transition-all",
              "hover:opacity-70",
            )}
            href={props.data.url}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <span className="link-dashed [--dashed-url:url(/images/underline.svg)]">
              {props.data.name}
            </span>

            <ArrowRightIcon className="mt-[3px] [&>path]:stroke-[#3B4552]" />
          </NextLink>
        ) : (
          <span className="text-[13px]/[17px] tracking-[.028em] text-[#3B4552]">
            {props.data.name}
          </span>
        )}

        {/* Description */}
        <p className="text-[13px]/[19px] tracking-[.028em] text-[#818796]">
          {props.data.description}
        </p>
      </div>
    </div>
  );
};
