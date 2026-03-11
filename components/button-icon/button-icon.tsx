import { clsx } from "clsx";

export type ButtonIconProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export const ButtonIcon: React.FC<ButtonIconProps> = (
  props,
): React.JSX.Element => {
  return (
    <button
      className={clsx(
        props.className,
        "flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-white/25 transition-all",
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
