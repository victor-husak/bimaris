import { ArrowRightIcon } from "@/icons";
import clsx from "clsx";

export type CaseCardActionProps = {
  className?: string;
};

export const CaseCardAction: React.FC<CaseCardActionProps> = (
  props,
): React.JSX.Element => {
  return (
    <button
      className={clsx(
        props.className,
        "relative mt-[25px] flex h-[36px] w-[36px] cursor-pointer items-center overflow-hidden rounded-full border border-[#ECEFF4] transition-all",
        "group-hover:w-[93px] group-hover:border-[#507FEB] group-hover:bg-[#507FEB]",
      )}
    >
      <ArrowRightIcon
        color="#333333"
        className={clsx(
          "ml-[14px] shrink-0 translate-x-1/2 [&>path]:transition-all",
          "group-hover:[&>path]:stroke-white",
        )}
      />

      <span
        className={clsx(
          "absolute left-[34px] text-[12px]/[15px] font-medium tracking-[.028em] whitespace-nowrap text-white opacity-0 transition-opacity",
          "group-hover:opacity-100",
        )}
      >
        Explore
      </span>
    </button>
  );
};
