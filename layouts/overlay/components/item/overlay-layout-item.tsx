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
      className={clsx(props.className, "flex max-w-[280px] flex-col gap-1.5")}
    >
      {/* Title */}
      <span className="text-[15px]/[19px] tracking-[.018em] text-[#2C2C2C]">
        {props.title}
      </span>

      {/* Description */}
      {!!props.description && (
        <p className="text-[13px]/[18px] tracking-[.024em] text-[#8A91A2]">
          {props.description}
        </p>
      )}
    </div>
  );
};
