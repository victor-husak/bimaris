import { CaseCard } from "@/cards/case";

import { Section } from "@/components";

import { ArrowRightIcon } from "@/icons";

import * as Components from "./components";

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
