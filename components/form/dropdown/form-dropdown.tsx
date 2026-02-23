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
          "flex h-7 cursor-pointer items-center justify-center gap-2 rounded-[5px] bg-[#EBEBEB] px-2.5 transition-colors",
          "hover:bg-[#D9D9D9]",
        )}
        onClick={onTrigger}
      >
        {props.IconComponent}

        {/* Title */}
        <span className="font-sf-pro text-[12px]/[14px] tracking-[.008em] text-[#33383C]">
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
