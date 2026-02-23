import { clsx } from "clsx";

export type FormItemProps = {
  className?: string;
  label: string;
  children: React.ReactNode;
};

export const FormItem: React.FC<FormItemProps> = (props): React.JSX.Element => {
  return (
    <div className={clsx(props.className, "flex flex-col")}>
      {/* Label */}
      <span className="text-[12px]/[1] tracking-[.012em] text-[#828891]">
        {props.label}
      </span>

      {props.children}
    </div>
  );
};
