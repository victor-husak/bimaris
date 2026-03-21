import * as Components from "./components";

import { clsx } from "clsx";

export type ListLayoutFiltersProps = {
  className?: string;
  children?: React.ReactNode;
  search: string;
  onSearchChange: (value: string) => void;
};

export const ListLayoutFilters: React.FC<ListLayoutFiltersProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "mt-[30px] flex items-center justify-between",
      )}
    >
      {/* Content */}
      <div className="flex items-center gap-2.5">{props.children}</div>

      {/* Search */}
      <Components.Search value={props.search} onSearch={props.onSearchChange} />
    </div>
  );
};
