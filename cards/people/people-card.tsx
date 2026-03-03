import NextImage from "next/image";
import NextLink from "next/link";

import { Tag, List } from "@/components";

import { CardAction } from "@/components/card";

import { clsx } from "clsx";

export type PeopleCardProps = {
  className?: string;
};

export const PeopleCard: React.FC<PeopleCardProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "group flex flex-col rounded-[11px] bg-white p-2.5",
      )}
    >
      {/* Preview */}
      <div className="h-[220px] overflow-hidden rounded-lg bg-[#F5F7FA]">
        <NextImage
          className={clsx(
            "transition-img h-full w-full object-contain object-center",
            "group-hover:transform-[scale(1.03)]",
          )}
          src="/images/genereted/people.webp"
          alt="Case preview"
          objectFit="contain"
          objectPosition="center"
          width={660}
          height={660}
        />
      </div>

      {/* Content */}
      <div className="mt-2.5 flex flex-col items-start p-[15px]">
        {/* Title */}
        <NextLink
          className="underline-hover mr-auto mb-5 text-[16px]/[21px] tracking-[.024em] text-[#333333]"
          href="/insights/1"
        >
          Mr. Taras Horbatiuk
        </NextLink>

        <Tag
          className="mb-[25px] bg-[#E6EFFC]"
          title="Founder & Managing Partner"
        />

        {/* List */}
        <List
          items={["t.horbatiuk@bimaris.legal", "Book a meeting", "LinkedIn"]}
        />

        {/* Action */}
        <CardAction
          className="mt-10 group-hover:w-[110px]"
          href="/insights/1"
          title="Read more"
        />
      </div>
    </div>
  );
};
