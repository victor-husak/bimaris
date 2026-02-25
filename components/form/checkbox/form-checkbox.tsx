import * as Icons from "./icons";

import { clsx } from "clsx";

export type FormCheckboxProps = {
  className?: string;
  value: boolean;
};

export const FormCheckbox: React.FC<FormCheckboxProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "flex h-4 w-4 items-center justify-center rounded-sm border transition-all duration-200 ease-linear",
        { "border-[#d6d8dc]": !props.value },
        { "border-secondary bg-secondary": props.value },
      )}
      data-active={props.value}
    >
      <Icons.Check
        className={clsx("mt-px transition-all duration-200 ease-linear", {
          "opacity-0": !props.value,
          "opacity-100": props.value,
        })}
      />
    </div>
  );
};
