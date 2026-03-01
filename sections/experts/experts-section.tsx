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
      <Components.Header />

      {/* className="mb-15" */}
    </section>
  );
};
