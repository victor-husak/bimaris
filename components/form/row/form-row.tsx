import { clsx } from "clsx";

export type FormRowProps = {
  className?: string;
  children: React.ReactNode;
};

export const FormRow: React.FC<FormRowProps> = (props): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "grid grid-cols-1 gap-5",
        "md:grid-cols-2",
      )}
    >
      {props.children}
    </div>
  );
};
