import { SectionArrows } from "@/components/section";

import { clsx } from "clsx";

export type ExpertsSectionHeaderProps = {
  className?: string;
};

export const ExpertsSectionHeader: React.FC<ExpertsSectionHeaderProps> = (
  props,
): React.JSX.Element => {
  return (
    <header className={clsx(props.className, "container-full")}>
      {/* Title */}
      <h2 className="text-secondary mb-[25px] text-[28px]/[36px] font-light tracking-[.024em]">
        Meet your experts
      </h2>

      {/* Content */}
      <div className="flex items-end">
        {/* Description */}
        <p className="max-w-[630px] text-[14px]/[21px] tracking-[.024em] text-[#868D9A]">
          Explore our selected examples of immigration cases handled for
          individuals and businesses, demonstrating our structured approach and
          long-term legal support.
        </p>

        {/* Arrows */}
        <SectionArrows className="ml-auto" />
      </div>
    </header>
  );
};
