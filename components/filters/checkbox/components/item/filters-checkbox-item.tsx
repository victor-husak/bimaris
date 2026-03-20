import { clsx } from "clsx";

export type FiltersCheckboxItemProps = {
  className?: string;
  data: Option;
  onClick: () => void;
};

export const FiltersCheckboxItem: React.FC<FiltersCheckboxItemProps> = (
  props,
): React.JSX.Element => {
  return (
    <li
      className={clsx(
        props.className,
        "flex cursor-pointer items-center gap-2.5 py-[7px] whitespace-nowrap transition-all",
        // "hover:bg-[#EBEBEB]",
      )}
      onClick={props.onClick}
    >
      <span className="line-clamp-1 text-[14px]/[18px] tracking-[.024em]">
        {props.data.label}
      </span>
    </li>
  );
};
