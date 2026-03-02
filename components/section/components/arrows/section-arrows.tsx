import * as Components from "./components";

import { ArrowRightIcon } from "@/icons";

import { clsx } from "clsx";

export type SectionArrowsProps = {
  className?: string;
};

export const SectionArrows: React.FC<SectionArrowsProps> = (
  props,
): React.JSX.Element => {
  return (
    <div className={clsx(props.className, "flex items-center gap-2")}>
      <Components.Item>
        <ArrowRightIcon className="rotate-180" color="#3C3C3C" />
      </Components.Item>

      <Components.Item>
        <ArrowRightIcon color="#3C3C3C" />
      </Components.Item>
    </div>
  );
};
