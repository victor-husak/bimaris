import { clsx } from "clsx";

export type FormTextareaProps = {
  className?: string;
  invalid?: boolean;
} & React.ComponentProps<"textarea">;

export const FormTextarea: React.FC<FormTextareaProps> = ({
  className,
  invalid,
  ...props
}): React.JSX.Element => {
  return (
    <textarea
      {...props}
      className={clsx(
        className,
        "form-inner h-[100px] resize-none py-[5px] leading-5",
      )}
      cols={5}
      data-invalid={!!invalid}
    />
  );
};
