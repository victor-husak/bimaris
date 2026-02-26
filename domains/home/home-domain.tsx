import { PageLayout } from "@/layouts/page";

import { CasesSection } from "@/sections/cases";
import { AdvantagesSection } from "@/sections/advantages";
import { ContactSection } from "@/sections/contact";

import { Rating } from "@/ui";

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
      HeaderComponent={<Components.Header />}
    >
      {/* Advantages */}
      <AdvantagesSection className="mt-5" />

      {/* Role */}
      <Components.Role />

      {/* Updates */}
      <Components.Updates className="pb-27.5" />

      {/* Cases */}
      <CasesSection className="mb-[63px]" />

      <section className="container-full">
        <Rating />
      </section>

      <ContactSection className="mb-[50px]" />
    </PageLayout>
  );
};
