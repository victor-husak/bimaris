import NextLink from "next/link";
import NextImage from "next/image";

import * as Icons from "./icons";

import { clsx } from "clsx";

export type CaseCardProps = {
  className?: string;
};

export const CaseCard: React.FC<CaseCardProps> = (props): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "group bg-background-secondary rounded-[11px]",
      )}
    >
      {/* Tags */}
      <div className="flex items-center py-[25px] py-[30px]"></div>

      {/* Preview */}
      <div className="mx-[15px] h-[180px] overflow-hidden rounded-lg bg-gray-300">
        <NextImage
          className={clsx(
            "transition-img h-full w-full object-cover",
            "group-hover:transform-[scale(1.03)]",
          )}
          src="/images/genereted/case.webp"
          alt="Case preview"
          width={960}
          height={540}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col px-[30px] pt-[25px] pb-[26px]">
        {/* Title */}
        <NextLink
          className="mr-auto mb-[17px] text-[15px]/[19px] tracking-[.024em] text-[#2D3A52]"
          href="/cases/1"
        >
          Midvale
        </NextLink>

        {/* Description */}
        <p className="text-[14px]/[20px] tracking-[.024em] text-[#969BA7]">
          Midvale Ltd is a UK-based supplier of certified timber and structural
          materials, delivering sustainable wood products to construction.
        </p>

        <button className="mt-[25px] flex h-[36px] w-[36px] items-center justify-center rounded-full border border-[#ECEFF4] transition-all">
          <Icons.Arrow />
        </button>
      </div>
    </div>
  );
};
