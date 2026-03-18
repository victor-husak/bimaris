import { clsx } from "clsx";

export type OverlayLayoutItemProps = {
  className?: string;
  title: string;
  description?: string;
};

export const OverlayLayoutItem: React.FC<OverlayLayoutItemProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "relative z-1 flex max-w-[350px] cursor-pointer flex-col justify-center gap-1.5",
        "before:absolute before:top-0 before:bottom-0 before:-left-[31px] before:w-px before:bg-[#507FEB] before:opacity-0 before:transition-all",
        "hover:before:opacity-100",
        {
          "after:absolute after:-top-3 after:-right-[15px] after:-bottom-3  after:-left-[15px] after:-z-1 after:rounded-lg after:bg-[#F7F8FA] after:opacity-0 after:transition-all":
            !!props.description,
          "hover:after:opacity-100": !!props.description,
        },
      )}
    >
      {/* Title */}
      <span className="underline-hover line-clamp-1 text-[15px]/[19px] tracking-[.018em] text-[#2C2C2C]">
        {props.title}
      </span>

      {/* Description */}
      {!!props.description && (
        <p className="line-clamp-2 text-[13px]/[18px] tracking-[.024em] text-[#8A91A2]">
          {props.description}
        </p>
      )}
    </div>
  );
};
