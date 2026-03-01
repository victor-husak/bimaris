import * as Icons from "./icons";

import { clsx } from "clsx";

export type RootLayoutHeaderTriggerProps = {
  className?: string;
};

export const RootLayoutHeaderTrigger: React.FC<RootLayoutHeaderTriggerProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "flex cursor-pointer items-center gap-1.25 rounded-b-sm bg-[#507FEB] px-3.75 pt-1.25 pb-1.75 transition-all duration-300",
        "hover:translate-y-0.5 hover:bg-[#4775DD]",
      )}
    >
      <span className="text-[12px]/[15px] tracking-[.024em] text-white">
        Menu
      </span>

      <Icons.Arrow />
    </div>
  );
};
