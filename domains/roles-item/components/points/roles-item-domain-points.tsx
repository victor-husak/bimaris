import NextImage from "next/image";
import { clsx } from "clsx";

import * as Components from "./components";

import { useRolesItemDomainPoints } from "./roles-item-domain-points.hook";

import type { Points } from "@/types/components/roles";
import type { Client } from "@/types/clients";

export type RolesItemDomainPointsProps = {
  className?: string;
  data: Points;
  clients: Client[];
};

export const RolesItemDomainPoints: React.FC<RolesItemDomainPointsProps> = (
  props,
): React.JSX.Element => {
  const { data } = useRolesItemDomainPoints(props);

  return (
    <div
      className={clsx(
        props.className,
        "container-full flex flex-col-reverse pt-[100px] pb-[110px]",
        "lg:flex-row",
      )}
    >
      {/* Content */}
      <div className="flex-1">
        {/* title */}
        <h2 className="mb-20 max-w-[512px] text-[32px]/[44px] font-light tracking-[.024em] text-[#507FEB]">
          {data.title}
        </h2>

        <div className="grid grid-cols-2 gap-y-[52px]">
          {data.items.map((item, index) => (
            <Components.Item
              key={index}
              number={index + 1}
              title={item.name}
              description={item.description}
            />
          ))}
        </div>
      </div>

      {/* Preview */}
      <NextImage
        className="aspect-[500px/530px] max-w-[500px] flex-1 rounded-2xl object-cover object-center"
        src={data.preview}
        alt="FAQs"
        width={1500}
        height={1590}
      />
    </div>
  );
};
