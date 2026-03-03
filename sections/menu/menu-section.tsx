import { Support } from "@/ui";

import * as Components from "./components";

import { clsx } from "clsx";

export type MenuSectionProps = {
  className?: string;
  data: Array<{
    key: string;
    title: string;
    description: string;
    href: string;
  }>;
};

export const MenuSection: React.FC<MenuSectionProps> = (
  props,
): React.JSX.Element => {
  return (
    <section className={clsx(props.className)}>
      <div
        className={clsx(
          "container-large bg-background-secondary grid grid-cols-1 gap-x-[21px] gap-y-[35px] rounded-2xl p-2.5",
          "md:grid-cols-2",
          "xl:grid-cols-3",
        )}
      >
        {props.data.map((item, index) => (
          <Components.Item data={item} key={index} />
        ))}
      </div>

      <div className="container-full">
        <Support />
      </div>
    </section>
  );
};
