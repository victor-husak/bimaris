"use client";

import { FormSelectContent } from "@/components/form/select";

import * as Icons from "./icons";

import { clsx } from "clsx";

import { useFormDropdown } from "./form-dropdown.hook";

export type FormDropdownProps = {
  className?: string;
  title: string;
  options?: Array<Option>;
  IconComponent?: React.ReactNode;
  onChange: (value: Option) => void;
};

export const FormDropdown: React.FC<FormDropdownProps> = (
  props,
): React.JSX.Element => {
  const { nodeRef, containerNodeRef, active, onTrigger, onChange } =
    useFormDropdown(props);

  return (
    <div ref={containerNodeRef} className={clsx(props.className, "relative")}>
      {/* Inner */}
      <div
        className={clsx(
          "flex cursor-pointer items-center gap-2 rounded-full border border-[#E7EAF2] px-[12px] py-2.5 transition-all",
          "hover:bg-[#EDF0F5]",
        )}
        onClick={onTrigger}
      >
        {props.IconComponent}

        {/* Title */}
        <span className="text-[13px]/[14px] tracking-[.34px] text-[#33383c]">
          {props.title}
        </span>

        {!!props.options && <Icons.Current />}
      </div>

      <FormSelectContent
        ref={nodeRef}
        options={props.options}
        active={active}
        onChange={onChange as any}
      />
    </div>
  );
};
