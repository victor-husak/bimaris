import { Tag } from "@/components";

import { ArrowRightIcon } from "@/icons";

import { clsx } from "clsx";

export type AboutUsDomainPointsItemProps = {
  className?: string;
  variant?: "base" | "secondary";
  number: string;
  title: string;
  description: string;
};

export const AboutUsDomainPointsItem: React.FC<AboutUsDomainPointsItemProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "flex flex-col items-start border-l border-[#E7EBF2] px-5",
      )}
    >
      {/* Tag */}
      <Tag
        className={clsx("mb-[42px]", {
          "bg-[#C1DBFF] text-[#00335A]":
            !props.variant || props.variant === "base",
          "bg-[#E5E2F7] text-[#423953]": props.variant === "secondary",
        })}
        title={props.number}
        RightIconComponent={<ArrowRightIcon color="#423953" />}
      />
      {/* <div className="mb-[42px]">
        <span className="text-[12px]/[14px] font-light tracking-[.024em] text-[#00335A]">
          {props.number}
        </span>
      </div> */}

      {/* Title */}
      <p className="mb-[15px] text-[15px]/[19px] tracking-[.024em] text-[#2D3A52]">
        {props.title}
      </p>

      {/* Description */}
      <p className="max-w-[280px] text-[14px]/[20px] tracking-[.024em] text-[#8A91A2]">
        {props.description}
      </p>
    </div>
  );
};
