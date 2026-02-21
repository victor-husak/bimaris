import { Section, SectionHeader, Button } from "@/components";

import { clsx } from "clsx";

export type HomeDomainRoleProps = {
  className?: string;
};

export const HomeDomainRole: React.FC<HomeDomainRoleProps> = (
  props,
): React.JSX.Element => {
  return (
    <Section
      className={clsx(props.className, "")}
      HeaderComponent={
        <SectionHeader
          title="Choose your role"
          description="Founded by professional lawyers and immigration experts, Bimaris provides structured, reliable immigration legal support for individuals and businesses."
          ActionComponent={
            <Button animation="scale" href="/">
              Get Started
            </Button>
          }
        />
      }
    ></Section>
  );
};
