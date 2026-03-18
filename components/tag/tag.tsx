import { clsx } from "clsx";

export type TagProps = {
  className?: string;
  title: string;
  IconComponent?: React.ReactNode;
  RightIconComponent?: React.ReactNode;
};

export const Tag: React.FC<TagProps> = (props): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "flex items-center gap-2 rounded-full px-2 py-[5px]",
        {
          "px-2.5": props.IconComponent,
        },
      )}
    >
      {props.IconComponent}

      <span className="text-[12px]/[15px] tracking-[.024em]">
        {props.title}
      </span>

      {props.RightIconComponent}
    </div>
  );
};
