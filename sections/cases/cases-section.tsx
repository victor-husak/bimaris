import { CaseCard } from "@/cards/case";

import { Section, SectionHeader, Button } from "@/components";

import { SectionArrows } from "@/components/section";

import { clsx } from "clsx";

export type CasesSectionProps = {
  className?: string;
};

export const CasesSection: React.FC<CasesSectionProps> = (
  props,
): React.JSX.Element => {
  return (
    <Section
      className={clsx(props.className, "")}
      HeaderComponent={
        <SectionHeader
          classNameDescription="max-w-[500px]"
          title="Customer case studies"
          description="Explore our selected examples of immigration cases handled for individuals and businesses, demonstrating our structured approach and long-term legal support."
          ActionComponent={
            <Button href="/cases" animation="scale">
              View all
            </Button>
          }
        />
      }
    >
      <div className="flex gap-[20px]">
        <CaseCard className="w-[350px]" />

        <CaseCard className="w-[350px]" />

        <CaseCard className="w-[350px]" />
      </div>

      {/* Actions */}

      <SectionArrows className="mt-[35px]" />
    </Section>
  );
};
