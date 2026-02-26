import { ArrowRightIcon } from "@/icons";

import { clsx } from "clsx";

export type ContactSectionOfficesItemProps = {
  className?: string;
  data: {
    tag: string;
    items: string[];
    action: string;
  };
  variant: "base" | "secondary";
};

export const ContactSectionOfficesItem: React.FC<
  ContactSectionOfficesItemProps
> = (props): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "flex w-[300px] shrink-0 flex-col items-start rounded-lg border border-[#D0D9ED] p-[25px]",
      )}
    >
      {/* Tag */}
      <div
        className={clsx(
          "mb-[35px] flex items-center gap-2.5 rounded-full px-2.5 py-1",
          props.variant === "base"
            ? "bg-[#CAD8EB] text-[#2D3A52]"
            : "bg-[#507FEB] text-white",
        )}
      >
        <ArrowRightIcon
          className={clsx({
            "[&>path]:stroke-[#2D3A52]": props.variant === "base",
          })}
        />

        <span className="text-[12px]/[15px] tracking-[.028em]">
          {props.data.tag}
        </span>
      </div>

      {/* Content */}
      <ul className="--font-sf-pro flex flex-col items-start gap-1.5 text-[14px]/[18px] [--dashed-url:url(/images/underline.svg)]">
        {props.data.items.map((item, index) => (
          <li key={index} className="link-dashed">
            {item}
          </li>
        ))}

        <li
          className={clsx(
            "link-dashed text-secondary cursor-pointer transition-all",
            "hover:opacity-70",
          )}
        >
          {props.data.action}
        </li>
      </ul>
    </div>
  );
};
