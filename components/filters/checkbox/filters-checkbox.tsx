"use client";

import * as Components from "./components";
import * as Icons from "./icons";

import { useFiltersCheckbox } from "./filters-checkbox.hook";

import { clsx } from "clsx";

export type FiltersCheckboxProps = {
  className?: string;
  label: string;
  titleContent: string;
  disabled?: boolean;
  options?: Array<Option>;
  onChange: (value: Option) => void;
};

export const FiltersCheckbox: React.FC<FiltersCheckboxProps> = (
  props,
): React.JSX.Element => {
  const { containerNodeRef, nodeRef, active, onTrigger } =
    useFiltersCheckbox(props);

  return (
    <div className={clsx(props.className, "relative")} ref={containerNodeRef}>
      {/* Inner */}
      <div
        className={clsx(
          "flex h-[34px] cursor-pointer items-center gap-1.5 rounded-full border border-[#E4E7F0]! px-[15px] transition-all",
          "hover:bg-[#EDF0F5]",
        )}
        onClick={onTrigger}
      >
        <span className="text-[13px]/[17px] tracking-[.024em] text-[#333333]">
          {props.label}
        </span>

        <Icons.Arrow
          className={clsx("mt-px transition-all", { "rotate-180": active })}
        />
      </div>

      {/* Content */}
      {!!props.options?.length && (
        <Components.Content active={active} ref={nodeRef}>
          <div className="flex w-[260px] flex-col px-5 pt-5 pb-3">
            {/* Title */}
            <span className="mb-3 flex text-[13px]/[17px] tracking-[.024em] text-[#969BA7]">
              {props.titleContent}:
            </span>

            <ul>
              {props.options.map((item) => (
                <Components.Item
                  key={item.value}
                  data={item}
                  onClick={() => props.onChange(item)}
                />
              ))}
            </ul>
          </div>
        </Components.Content>
      )}
    </div>
  );
};
