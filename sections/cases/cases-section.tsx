import { CaseCard } from "@/cards/case";

import { Section, SectionHeader, Button } from "@/components";

import { ArrowRightIcon } from "@/icons";

import * as Components from "./components";

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
      <div className="mt-[35px] flex items-center gap-2">
        <Components.Arrow>
          <ArrowRightIcon className="rotate-180" color="#3C3C3C" />
        </Components.Arrow>

        <Components.Arrow>
          <ArrowRightIcon color="#3C3C3C" />
        </Components.Arrow>
      </div>
    </Section>
  );
};
