import { PublicationCard } from "@/cards/publication";

import { Section, SectionHeader } from "@/components";

import { SectionArrows } from "@/components/section";

import { clsx } from "clsx";

export type PublicationsSectionProps = {
  className?: string;
  // HeaderComponent?: React.ReactNode;
};

export const PublicationsSection: React.FC<PublicationsSectionProps> = (
  props,
): React.JSX.Element => {
  return (
    <Section
      className={clsx(props.className, "")}
      HeaderComponent={
        <SectionHeader
          title="Related publications"
          description="Explore related insights and legal updates, covering immigration, relocation, and cross-border mobility."
        />
      }
    >
      <div className="border-b border-[#E7EBF2] pb-15">
        <div className="grid grid-cols-3 gap-[30px]">
          <PublicationCard />

          <PublicationCard />

          <PublicationCard />
        </div>

        <SectionArrows className="mt-10" />
      </div>
    </Section>
  );
};
