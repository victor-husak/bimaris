import { FormCheckbox } from "@/components/form/checkbox";

import { clsx } from "clsx";

export type FiltersCheckboxItemProps = {
  className?: string;
  data: Option;
  value: boolean;
  onClick: () => void;
};

export const FiltersCheckboxItem: React.FC<FiltersCheckboxItemProps> = (
  props,
): React.JSX.Element => {
  return (
    <li
      className={clsx(
        props.className,
        "relative flex cursor-pointer items-center gap-2.5 py-[7px] whitespace-nowrap",
        "hover:after:opacity-100",
        "after:absolute after:-inset-x-2.5 after:-inset-y-0.5 after:-z-1 after:rounded-md after:bg-[#F2F4F7] after:opacity-0 after:transition-all",
      )}
      onClick={props.onClick}
    >
      <FormCheckbox value={props.value} />

      <span className="line-clamp-1 text-[14px]/[18px] tracking-[.024em]">
        {props.data.label}
      </span>
    </li>
  );
};
