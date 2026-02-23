import { clsx } from "clsx";

export type FormInputProps = {
  className?: string;
  invalid?: boolean;
} & React.ComponentProps<"input">;

export const FormInput: React.FC<FormInputProps> = ({
  className,
  invalid,
  ...props
}): React.JSX.Element => {
  return (
    <input
      {...props}
      className={clsx(
        className,
        "form-inner placeholder:text-form-placeholder text-[#33383C] placeholder:transition-all placeholder:duration-200",
        "focus:placeholder:text-transparent",
      )}
      data-invalid={!!invalid}
    />
  );
};
