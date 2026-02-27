import NextImage from "next/image";

import * as Components from "./components";

import { clsx } from "clsx";

export type RolesItemDomainPointsProps = {
  className?: string;
};

export const RolesItemDomainPoints: React.FC<RolesItemDomainPointsProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "container-full flex pt-[100px] pb-[110px]",
      )}
    >
      {/* Content */}
      <div className="flex-1">
        {/* title */}
        <h2 className="mb-20 max-w-[512px] text-[32px]/[43px] font-light tracking-[.024em] text-[#507FEB]">
          Immigration should be a source of inspiration, not pain.
        </h2>

        <div className="grid grid-cols-2 gap-y-[52px]">
          <Components.Item
            number={1}
            title="Clarity before action"
            description="We begin every case by defining goals and risks, so decisions are informed and aligned with long-term outcomes."
          />

          <Components.Item
            number={2}
            title="Lawyer-led at every stage"
            description="All matters are handled and supervised by experienced immigration lawyers, ensuring legal accuracy."
          />

          <Components.Item
            number={3}
            title="Predictable process"
            description="We work through defined steps, timelines, and documentation flows, reducing uncertainty."
          />

          <Components.Item
            number={4}
            title="Long-term perspective"
            description="We consider not only the immediate outcome, but also future residency, compliance, and personal plans."
          />
        </div>
      </div>

      {/* Preview */}
      <NextImage
        className="aspect-[500px/530px] max-w-[500px] flex-1 rounded-2xl object-cover object-center"
        src="/images/faqs.webp"
        alt="FAQs"
        width={1500}
        height={1590}
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};
