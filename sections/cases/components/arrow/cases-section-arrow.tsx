import { clsx } from "clsx";

export type CasesSectionArrowProps = {
  className?: string;
  children: React.ReactNode;
};

export const CasesSectionArrow: React.FC<CasesSectionArrowProps> = (
  props,
): React.JSX.Element => {
  return (
    <button
      className={clsx(
        props.className,
        "flex h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-full border border-[#E7EBF2] bg-[#F0F3F7] transition-all",
        "hover:bg-[#D9EAE7]",
      )}
    >
      {props.children}
    </button>
  );
};
