import { clsx } from "clsx";

export type OfficeCardItemProps = {
  className?: string;
  title: string;
  onClick?: () => void;
};

export const OfficeCardItem: React.FC<OfficeCardItemProps> = (
  props,
): React.JSX.Element => {
  return (
    <li
      className={clsx(
        props.className,
        "text-[14px]/[18px] tracking-[.032em] transition-all",
        {
          "text-[#2D3A52] [--dashed-url:url(/images/underline.svg)]":
            !props.onClick,
          "text-secondary cursor-pointer [--dashed-url:url(/images/underline-second.svg)]":
            props.onClick,
          "hover:opacity-70": props.onClick,
        },
      )}
    >
      <span className="link-dashed" onClick={props.onClick}>
        {props.title}
      </span>
    </li>
  );
};
