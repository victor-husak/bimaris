import { clsx } from "clsx";

import { Section, SectionHeader } from "@/components";

import { RegionCard } from "@/cards/region";

import type { BalticShort } from "@/types/baltics";

export type BalticsDeskDomainRegionsProps = {
  className?: string;
  baltics: BalticShort[];
};

export const BalticsDeskDomainRegions: React.FC<
  BalticsDeskDomainRegionsProps
> = (props): React.JSX.Element => {
  return (
    <Section
      className={clsx(props.className)}
      HeaderComponent={
        <SectionHeader
          title="Choose your region"
          description="Our offices in Ukraine and Estonia ensure accessible, on-the-ground legal support for individuals and businesses."
        />
      }
    >
      <div
        className={clsx(
          "grid grid-cols-1 gap-[30px] border-b border-[#E7EBF2] pb-25",
          "md:grid-cols-2",
          "xl:grid-cols-3",
        )}
      >
        {/* grid-cols-3 */}
        {props.baltics.map((baltic) => (
          <RegionCard key={baltic.id} data={baltic} />
        ))}
      </div>
    </Section>
  );
};
