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
        "bg-[#507FEB] rounded-b-sm px-3.75 pt-1.25 pb-1.75 flex gap-1.25 items-center cursor-pointer",
      )}
    >
      <span className="text-[12px]/[15px] tracking-[.024em] text-white">
        Menu
      </span>

      <Icons.Arrow />
    </div>
  );
};
