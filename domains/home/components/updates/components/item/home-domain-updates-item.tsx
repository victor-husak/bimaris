import * as Icons from "./icons";

import { clsx } from "clsx";

export type HomeDomainUpdatesItemProps = {
  className?: string;
  title: string;
  descrition: string;
};

export const HomeDomainUpdatesItem: React.FC<HomeDomainUpdatesItemProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "group border border-[#E7EAF2] bg-background-secondary/50 p-6.25 rounded-[11px] flex transition-all cursor-pointer",
        "hover:bg-[#F0F3F7]",
      )}
    >
      {/* Icon */}
      <div className="w-3.5 h-3.5 shrink-0 mt-0.5 relative mr-5">
        <Icons.Notification
          className={clsx("absolute transition-all", "group-hover:opacity-0")}
        />

        <Icons.NotificationActive
          className={clsx(
            "absolute transition-all opacity-0",
            "group-hover:opacity-100",
          )}
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <p className="text-[15px]/[19px] tracking-[.024em] mb-3.75">
          {props.title}
        </p>

        {/* Description */}
        <p className="text-[14px]/[20px] tracking-[.028em] text-[#8A91A2]">
          <span
            className="text-[#507FEB] link-dashed"
            style={{ "--dashed-url": "url(/images/underline-second.svg)" }}
          >
            01.02.2026
          </span>{" "}
          - {props.descrition}
        </p>
      </div>

      {/* Arrow */}
      <div
        className={clsx(
          "w-7.5 h-7.5 -mt-1.25 -mr-1.25 ml-2.75 rounded-full border border-[#E1E5EF] flex items-center justify-center shrink-0 transition-all",
          "group-hover:bg-secondary group-hover:border-secondary",
        )}
      >
        <Icons.Arrow
          className={clsx(
            "[&>path]:transition-all",
            "group-hover:[&>path]:stroke-white",
          )}
        />
      </div>
    </div>
  );
};
