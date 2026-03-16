import { ArrowRightIcon } from "@/icons";

import * as Icons from "./icons";

import { clsx } from "clsx";

export type MarkdownLiProps = {
  className?: string;
  number?: number;
  children: React.ReactNode;
};

export const MarkdownLi: React.FC<MarkdownLiProps> = (
  props,
): React.JSX.Element => {
  return (
    <li className={clsx(props.className, "group relative gap-5")}>
      {/* Arrow */}

      <div className="absolute top-[3px] left-0 flex h-5 w-5 items-center justify-center rounded-full border border-[#E7EAF2]">
        {props.number ? (
          <span className="text-[11px]/[1]">{props.number}</span>
        ) : (
          <ArrowRightIcon color="#333333" />
        )}
      </div>

      {/* Texture */}

      <Icons.TextureIcon className="absolute top-[33px] bottom-[20px] left-2.5 h-[70%] -translate-x-1/2 group-last:hidden" />

      {/* Children */}
      {props.children}
    </li>
  );
};
