import { clsx } from "clsx";

export type ListLayoutFiltersProps = {
  className?: string;
};

export const ListLayoutFilters: React.FC<ListLayoutFiltersProps> = (
  props,
): React.JSX.Element => {
  return <div className={clsx(props.className, "flex")}></div>;
};
