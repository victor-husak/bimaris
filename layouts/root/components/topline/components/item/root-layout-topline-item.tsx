import { clsx } from "clsx";

export type RootLayoutToplineItemProps = {
  className?: string;
  children: React.ReactNode;
  variant?: "base" | "invert";
};

export const RootLayoutToplineItem: React.FC<RootLayoutToplineItemProps> = (
  props,
): React.JSX.Element => {
  return (
    <li
      className={clsx(
        props.className,
        "flex items-center underline-hover first:before:hidden",
        "hover:text-secondary",
        "before:mx-3.75 before:h-2 before:w-px before:bg-[#E4E8F0]",
      )}
    >
      {props.children}
    </li>
  );
};
