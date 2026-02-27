import NextLink from "next/link";

import { CaretIcon } from "@/icons";

import { clsx } from "clsx";

export type MenuSectionItemProps = {
  className?: string;
  data: {
    key: string;
    title: string;
    description: string;
    href: string;
  };
  onClick?: () => void;
};

export const MenuSectionItem: React.FC<MenuSectionItemProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        "group relative flex cursor-pointer items-center rounded-xl transition-all",
        "hover:bg-[#F7F8FA]",
        // "md:first:border-r",
        "after:absolute after:-right-2.5 after:h-[63px] after:w-px after:bg-[#F4F5F7]",
        // { "flex flex-col gap-2.5 md:p-[25px]": !props.data.href },
        props.className,
      )}
      onClick={props.onClick}
    >
      <NextLink
        className="flex flex-1 flex-col gap-2.5 px-[25px] pt-[23px] pb-[27px]"
        href={props.data.href}
      >
        {/* Header */}
        <div className="flex items-center">
          {/* Title */}
          <span
            className={clsx(
              "underline-hover text-[14px]/[18px] tracking-[0.012em] transition-opacity",
              "group-hover:decoration-current-color group-hover:underline",
            )}
          >
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
