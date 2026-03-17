import NextImage from "next/image";
import NextLink from "next/link";

import { ArrowRightIcon } from "@/icons";

import { useAsideAuthor } from "./aside-author.hook";

import { clsx } from "clsx";

import { ExpertShort } from "@/types/experts";

export type AsideAuthorProps = {
  className?: string;
  data: ExpertShort;
};

export const AsideAuthor: React.FC<AsideAuthorProps> = (
  props,
): React.JSX.Element => {
  const { data } = useAsideAuthor(props);

  return (
    <div className={clsx(props.className, "flex items-center gap-5 p-5")}>
      {/* Avatar */}
      {!!data.avatar && (
        <NextImage
          className={clsx("h-[46px] w-[46px] object-contain object-center")}
          src={data.avatar}
          alt={data.name}
          width={138}
          height={138}
        />
      )}

      {/* Content */}
      <div className="justufy-start flex flex-col gap-y-0.5">
        {/* Name */}
        <NextLink
          className={clsx(
            "group link-with-arrow mr-auto text-[14px]/[18px] tracking-[.028em] text-[#3B4552] transition-all",
            "hover:text-secondary",
          )}
          href={data.href}
        >
          <span className="link-dashed [--dashed-url:url(/images/underline.svg)]">
            {data.name}
          </span>

          <ArrowRightIcon className="mt-[3px] [&>path]:stroke-[#3B4552]" />
        </NextLink>

        {/* Position */}
        <span className="text-[14px]/[18px] tracking-[.026em] text-[#818796]">
          {data.position}
        </span>
      </div>
    </div>
  );
};
