import { clsx } from "clsx";

export type ListLayoutHeaderProps = {
  className?: string;
  FiltersComponent?: React.JSX.Element;
};

export const ListLayoutHeader: React.FC<ListLayoutHeaderProps> = (
  props,
): React.JSX.Element => {
  return (
    <header className={clsx(props.className, "pt-25 pb-14")}>
      {/* Title */}
      <h2 className="mb-[25px] text-[28px]/[43px] font-light tracking-[.024em] text-[#507FEB]">
        All publications
      </h2>

      {/* Description */}
      <p className="max-w-[630px] text-[14px]/[21px] tracking-[.024em] text-[#868D9A]">
        Explore our selected examples of immigration cases handled for
        individuals and businesses, demonstrating our structured approach and
        long-term legal support.
      </p>

      {/* Filters */}
      {props.FiltersComponent}
    </header>
  );
};
