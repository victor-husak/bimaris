"use client";

import * as Icons from "./icons";

import { clsx } from "clsx";

import { useListLayoutFiltersSearch } from "./list-layout-filters-search.hook";

export type ListLayoutFiltersSearchProps = {
  className?: string;
  value: string;
  onSearch: (value: string) => void;
};

export const ListLayoutFiltersSearch: React.FC<ListLayoutFiltersSearchProps> = (
  props,
): React.JSX.Element => {
  const { text, onChange } = useListLayoutFiltersSearch(props);

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
        // defaultValue={text}
        value={text}
        onChange={onChange}
      />
    </div>
  );
};
