import { ArrowRightIcon } from "@/icons";

import { clsx } from "clsx";

export type CaseCardTagProps = {
  className?: string;
  title: string;
  type?: "to" | "from";
};

export const CaseCardTag: React.FC<CaseCardTagProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "flex items-center gap-2 rounded-full px-2 py-[5px]",
        {
          "bg-[#E7EFFC] text-[#2D3A52]": true,
        },
      )}
    >
      {props.type === "to" && <ArrowRightIcon color="#2D3A52" />}

      <span className="font-sf-pro text-[12px]/[14px]">{props.title}</span>
    </div>
  );
};
