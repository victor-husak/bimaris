import NextLink from "next/link";

import { CaretIcon } from "@/icons";

import { clsx } from "clsx";

export type AdvantagesSectionItemProps = {
  className?: string;
  data: {
    key: string;
    title: string;
    description: string;
    href: string;
  };
  onClick?: () => void;
};

export const AdvantagesSectionItem: React.FC<AdvantagesSectionItemProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        "group relative flex cursor-pointer items-center rounded-xl transition-all",
        "hover:bg-[#F7F8FA]",
        // "md:first:border-r",
        "after:absolute after:-right-2.5 after:h-[92px] after:w-px after:bg-[#EFF2F5]",
        // { "flex flex-col gap-2.5 md:p-[25px]": !props.data.href },
        props.className,
      )}
      onClick={props.onClick}
    >
      <NextLink
        className="flex flex-1 flex-col gap-2.5 p-[25px]"
        href={props.data.href}
      >
        {/* Header */}
        <div className="flex items-center">
          {/* Title */}
          <span className="font-season-mix text-[30px]/[37px] font-light tracking-[0.034em] transition-opacity">
            {props.data.title}
          </span>

          {/* Icon */}
          <CaretIcon className="ml-auto" />
        </div>

        {/* Description */}
        <p className="max-w-[340px] text-[13px]/[18px] tracking-[0.028em] text-[#939AAA]">
          {props.data.description}
        </p>
      </NextLink>
    </div>
  );
};
