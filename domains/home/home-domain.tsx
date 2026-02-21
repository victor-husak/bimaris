import { PageLayout, PageLayoutHeader } from "@/layouts/page";

import { CasesSection } from "@/sections/cases";

import { SectionHeader, Button } from "@/components";

import * as Components from "./components";

import { clsx } from "clsx";

export type HomeDomainProps = {
  className?: string;
};

export const HomeDomain: React.FC<HomeDomainProps> = (
  props,
): React.JSX.Element => {
  return (
    <PageLayout
      className={clsx(props.className, "")}
      HeaderComponent={<PageLayoutHeader />}
    >
      {/* Header */}
      <Components.Header />

      {/* Role */}
      {/* <Components.Role /> */}

      {/* Updates */}
      <Components.Updates className="pb-27.5" />

      {/* Cases */}
      <CasesSection
        className="mb-[63px]"
        SectionHeader={
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
      />
    </PageLayout>
  );
};
