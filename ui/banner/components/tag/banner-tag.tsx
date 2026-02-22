import { clsx } from "clsx";

export type BannerTagProps = {
  className?: string;
  title: string;
  IconComponent: React.ReactNode;
};

export const BannerTag: React.FC<BannerTagProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        "mb-[25px] flex items-center gap-2 rounded-full bg-[#7C78ED] px-2.5 py-[5px] text-[12px]/[14px] font-medium tracking-[-.016em] text-white",
        props.className,
      )}
    >
      {props.IconComponent}

      <span>{props.title}</span>
    </div>
  );
};
