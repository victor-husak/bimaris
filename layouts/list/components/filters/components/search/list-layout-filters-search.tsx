import * as Icons from "./icons";

import { clsx } from "clsx";

export type ListLayoutFiltersSearchProps = {
  className?: string;
};

export const ListLayoutFiltersSearch: React.FC<ListLayoutFiltersSearchProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "relative flex items-center overflow-hidden rounded-full bg-[#EAEDF2]",
      )}
    >
      {/* Icon */}
      <Icons.Search className="absolute left-[15px]" />

      <input
        className="z-1 h-[38px] w-[220px] pr-[15px] pl-[35px] text-[13px]/[17px] tracking-[.008em] outline-0"
        name="search"
        placeholder="Find..."
      />
    </div>
  );
};
