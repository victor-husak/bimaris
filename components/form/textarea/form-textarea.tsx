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
      className={clsx(className, "form-inner h-[106px] resize-none leading-5")}
      cols={5}
      data-invalid={!!invalid}
    />
  );
};
