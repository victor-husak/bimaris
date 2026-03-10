import { Section, SectionHeader } from "@/components";

import { OfficeCard } from "@/cards/office";

import { clsx } from "clsx";

export type ContactUsDomainOfficesProps = {
  className?: string;
};

export const ContactUsDomainOffices: React.FC<ContactUsDomainOfficesProps> = (
  props,
): React.JSX.Element => {
  return (
    <Section
      className={clsx(props.className)}
      HeaderComponent={
        <SectionHeader
          title="Find our office"
          description="Our offices in Ukraine and Estonia ensure accessible, on-the-ground legal support for individuals and businesses."
        />
      }
    >
      <div className="grid grid-cols-3 gap-[30px] border-b border-[#E7EBF2] pb-25">
        <OfficeCard />

        <OfficeCard />

        <OfficeCard />
      </div>
    </Section>
  );
};
