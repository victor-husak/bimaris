import { clsx } from "clsx";

export type FormItemProps = {
  className?: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
};

export const FormItem: React.FC<FormItemProps> = (props): React.JSX.Element => {
  return (
    <div className={clsx(props.className, "flex flex-col gap-y-2")}>
      {/* Label */}
      <span className="text-[13px]/[17px] tracking-[.024em] text-[#333333]">
        {props.label}

        {!!props.required && <span className="text-[#EA2D3B]">*</span>}
      </span>

      {props.children}
    </div>
  );
};
