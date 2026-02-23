import * as Components from "./components";
import * as Icons from "./icons";

import { useFormSelect } from "./form-select.hook";

import { clsx } from "clsx";

export type FormSelectProps = {
  className?: string;
  withSearch?: boolean;
  options?: Array<Option>;
  value?: Option | null;
  disabled?: boolean;
  invalid?: boolean;
  onChange: (value: Option) => void;
};

export const FormSelect: React.FC<FormSelectProps> = (
  props,
): React.JSX.Element => {
  const {
    options,
    containerNodeRef,
    inputRef,
    nodeRef,
    active,
    search,
    onChangeSearch,
    onTrigger,
    onChange,
  } = useFormSelect(props);

  return (
    <div ref={containerNodeRef} className={clsx(props.className, "relative")}>
      {/* Inner */}
      <div
        className="form-inner flex cursor-pointer items-center justify-between"
        data-invalid={!!props.invalid}
        onClick={onTrigger}
      >
        <span
          className={clsx("transition-all duration-200", {
            "text-form-placeholder": !props.value,
            "opacity-0": active && props.withSearch,
          })}
        >
          {props.value?.label ?? "Select"}
        </span>

        <Icons.Arrow
          className={clsx("transition-all", { "rotate-180": active })}
        />

        {props.withSearch && (
          <input
            className={clsx(
              "absolute inset-0 w-full outline-0 transition-all duration-200",
              { "opacity-0": !active },
            )}
            ref={inputRef}
            placeholder="Search"
            value={search}
            onChange={onChangeSearch}
          />
        )}
      </div>

      <Components.Content
        ref={nodeRef}
        options={options}
        active={active}
        onChange={onChange as any}
      />
    </div>
  );
};
