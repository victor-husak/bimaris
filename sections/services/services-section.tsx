import NextImage from "next/image";
import { clsx } from "clsx";

import { Section, SectionHeader } from "@/components";

import * as Components from "./components";

import { useServicesSectionHeader } from "./services-section.hook";

import type { ServiceShort } from "@/types/services";

export type ServicesSectionProps = {
  className?: string;
  data: ServiceShort[];
};

export const ServicesSection: React.FC<ServicesSectionProps> = (
  props,
): React.JSX.Element => {
  const { data } = useServicesSectionHeader(props);

  return (
    <Section
      className={clsx(props.className, "")}
      HeaderComponent={
        <SectionHeader
          classNameDescription="max-w-[500px]"
          title="Choose your service"
          description="Explore our selected examples of immigration cases handled for individuals and businesses, demonstrating our structured approach and long-term legal support."
        />
      }
    >
      <div className="mb-15 grid grid-cols-2 gap-5">
        {data.map((item) => (
          <Components.Item key={item.id} data={item} />
        ))}
      </div>

      <div
        className={clsx(
          "group border-footer-border relative overflow-hidden border-t border-[#F4F5F7]",
        )}
      >
        <div
          className={clsx(
            "relative h-[120px] w-full overflow-hidden rounded-[11px]",
            "after:absolute after:inset-0 after:z-1 after:bg-black/10",
          )}
        >
          {/* Image */}
          <NextImage
            className={clsx("h-full w-full object-cover object-center")}
            src="/images/solutions.webp"
            width={3768}
            height={360}
            alt="Smotrow design banner"
          />
        </div>
      </div>
    </Section>
  );
};
