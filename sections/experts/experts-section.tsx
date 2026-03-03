import { Support } from "@/ui";

import { PeopleCard } from "@/cards/people";

import * as Components from "./components";

import { clsx } from "clsx";

export type ExpertsSectionProps = {
  className?: string;
};

export const ExpertsSection: React.FC<ExpertsSectionProps> = (
  props,
): React.JSX.Element => {
  return (
    <section className={clsx(props.className, "")}>
      {/* Header */}
      <Components.Header className="mb-15" />

      {/* Content */}
      <div className="container-full flex gap-[30px]">
        <PeopleCard className="w-[350px]" />

        <PeopleCard className="w-[350px]" />

        <PeopleCard className="w-[350px]" />
      </div>

      {/* Footer */}
      <footer className="container-full">
        <Support />
      </footer>
    </section>
  );
};
