import NextImage from "next/image";

import * as Components from "./components";

import { clsx } from "clsx";

export type AboutUsDomainPointsProps = {
  className?: string;
};

export const AboutUsDomainPoints: React.FC<AboutUsDomainPointsProps> = (
  props,
): React.JSX.Element => {
  return (
    <section
      className={clsx(
        props.className,
        "container-full relative flex pt-[100px] pb-[100px]",
        "after:absolute after:bottom-0 after:left-0 after:-z-1 after:h-[340px] after:w-full after:border-b after:border-[#E7EBF2] after:bg-gradient-to-b after:from-[#f5f7fa] after:to-[#f0f3f7]",
      )}
    >
      {/* Content */}
      <div className="flex-1">
        {/* title */}
        <h2 className="mb-20 max-w-[650px] text-[32px]/[44px] font-light tracking-[.024em] text-[#507FEB]">
          Guiding businesses and individuals through the complexities of
          immigration law.
        </h2>

        <div className="grid grid-cols-2 gap-y-[52px]">
          <Components.Item
            number="2022 - 2023"
            title="Founding"
            description="Independent immigration practice launched by Taras Horbatiuk, helping clients relocate and build plans in Ukraine."
          />

          <Components.Item
            number="2024"
            title="Evolving..."
            description="The firm officially evolved into Intermarium, expanding into investment and business immigration services."
          />

          <Components.Item
            number="2025"
            title="Pivotal change"
            description="Following restructuring, the firm was re-established as Bimaris, with a stronger focus on corporate and immigration."
          />

          <Components.Item
            variant="secondary"
            number="2026 - and beyond"
            title="Moving forward"
            description="Our mission continues - to empower individuals and businesses to invest, find opportunities, and build their future."
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
      />
    </section>
  );
};
