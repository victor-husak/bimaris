import * as Components from "./components";

import { clsx } from "clsx";

export type RootLayoutFooterMenuProps = {
  className?: string;
  title: string;
  items: { key: string; title: string; href?: string }[];
};

export const RootLayoutFooterMenu: React.FC<RootLayoutFooterMenuProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "flex min-w-[172px] flex-col gap-[25px]",
      )}
    >
      {/* title */}
      <span className="text-footer-second text-[14px]/[18px] font-medium tracking-[.024em]">
        {props.title}
      </span>

      {/* menu */}
      <ul
        className={clsx(
          "relative flex flex-col items-start",
          "before:bg-footer-b before:absolute before:top-[6.5px] before:bottom-[6.5px] before:w-px before:rounded-xs",
        )}
      >
        {props.items.map((item) => (
          <Components.Item title={item.title} href={item.href} key={item.key} />
        ))}
      </ul>
    </div>
  );
};
