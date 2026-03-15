import { clsx } from "clsx";

import { useTranslations } from "next-intl";

import { Section, SectionHeader } from "@/components";

import { OfficeCard } from "@/cards/office";

import type { Office } from "@/types/offices";

export type ContactUsDomainOfficesProps = {
  className?: string;
  data: Office[];
};

export const ContactUsDomainOffices: React.FC<ContactUsDomainOfficesProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("pages.contact.offices");

  return (
    <Section
      className={clsx(props.className)}
      HeaderComponent={
        <SectionHeader
          classNameDescription="max-w-[500px]"
          title={t("title")}
          description={t("description")}
        />
      }
    >
      <div className="grid grid-cols-3 gap-[30px] border-b border-[#E7EBF2] pb-25">
        {props.data.map((office) => (
          <OfficeCard key={office.id} data={office} />
        ))}
      </div>
    </Section>
  );
};
