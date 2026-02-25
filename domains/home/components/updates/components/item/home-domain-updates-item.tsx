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
        "group flex cursor-pointer rounded-[11px] border border-[#E7EAF2] p-6.25 transition-all",
        "hover:bg-[#F0F3F7]",
      )}
    >
      {/* Icon */}
      <div className="relative mt-0.5 mr-5 h-3.5 w-3.5 shrink-0">
        <Icons.Notification
          className={clsx("absolute transition-all", "group-hover:opacity-0")}
        />

        <Icons.NotificationActive
          className={clsx(
            "absolute opacity-0 transition-all",
            "group-hover:opacity-100",
          )}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Title */}
        <p className="mb-3.75 text-[15px]/[19px] tracking-[.024em]">
          {props.title}
        </p>

        {/* Description */}
        <p className="text-[14px]/[20px] tracking-[.028em] text-[#8A91A2]">
          <span
            className="link-dashed text-[#507FEB]"
            style={
              {
                "--dashed-url": "url(/images/underline-second.svg)",
              } as React.CSSProperties
            }
          >
            01.02.2026
          </span>{" "}
          - {props.descrition}
        </p>
      </div>

      {/* Arrow */}
      <div
        className={clsx(
          "-mt-1.25 -mr-1.25 ml-2.75 flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-full border border-[#E1E5EF] transition-all duration-300",
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
