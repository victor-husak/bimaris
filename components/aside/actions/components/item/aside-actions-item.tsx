import { clsx } from "clsx";

export type AsideActionsItemProps = {
  className?: string;
  title: string;
  IconComponent?: React.ReactNode;
  onClick?: () => void;
};

export const AsideActionsItem: React.FC<AsideActionsItemProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "flex cursor-pointer items-center gap-2 rounded-full border border-[#E7EAF2] px-[14px] py-2.5 transition-all",
        "hover:bg-[#EDF0F5]",
      )}
      onClick={props.onClick}
    >
      {/* Icon */}
      {props.IconComponent}

      {/* Title */}
      <span className="text-[13px]/[14px] tracking-[.008em] whitespace-nowrap text-[#33383C]">
        {props.title}
      </span>
    </div>
  );
};
