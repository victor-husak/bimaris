import { Support } from "@/ui";

import * as Components from "./components";

import { clsx } from "clsx";

export type MenuSectionProps = {
  className?: string;
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
        {data.map((item, index) => (
          <Components.Item data={item} key={index} />
        ))}
      </div>

      <div className="container-full">
        <Support />
      </div>
    </section>
  );
};

const data = [
  {
    key: "1",
    title: "Legal alerts (+3)",
    description:
      "Timely legal updates on immigration rules, regulatory changes, and official announcements.",
    href: "/",
  },
  {
    key: "2",
    title: "All publications",
    description:
      "Expert insights and legal updates, covering immigration, relocation, and cross-border mobility.",
    href: "/insights",
  },
  {
    key: "3",
    title: "Case studies",
    description:
      "Real client stories showcasing how we handle complex immigration and relocation cases.",
    href: "/case-studies",
  },
];
