import { CaseCard } from "@/cards/case";

import { Section } from "@/components";

import { clsx } from "clsx";

export type CasesSectionProps = {
  className?: string;
  SectionHeader: React.ReactNode;
};

export const CasesSection: React.FC<CasesSectionProps> = (
  props,
): React.JSX.Element => {
  return (
    <Section
      className={clsx(props.className, "")}
      HeaderComponent={props.SectionHeader}
    >
      <div className="flex gap-[20px]">
        <CaseCard className="w-[350px]" />

        <CaseCard className="w-[350px]" />

        <CaseCard className="w-[350px]" />
      </div>
    </Section>
  );
};
