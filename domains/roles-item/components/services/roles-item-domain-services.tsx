import NextImage from "next/image";

import { Section, SectionHeader } from "@/components";

import * as Components from "./components";

import { clsx } from "clsx";

export type RolesItemDomainServicesProps = {
  className?: string;
};

export const RolesItemDomainServices: React.FC<RolesItemDomainServicesProps> = (
  props,
): React.JSX.Element => {
  return (
    <Section
      className={clsx(props.className, "")}
      HeaderComponent={
        <SectionHeader
          classNameDescription="max-w-[500px]"
          title="Choose your service"
          description="Explore our selected examples of immigration cases handled for individuals and businesses, demonstrating our structured approach and long-term legal support."
        />
      }
    >
      <div className="mb-15 grid grid-cols-2 gap-5">
        <Components.Item
          data={{
            title: "Citizenship of Ukraine",
            description:
              "Comprehensive legal support for individuals seeking Ukrainian citizenship, with a structured approach to eligibility and documentation.",
            list: [
              "Eligibility assessment and strategy",
              "Attorney-led application process",
              "End-to-end legal support",
            ],
          }}
        />

        <Components.Item
          data={{
            title: "D Visa to Ukraine",
            description:
              "Legal assistance with obtaining a Ukrainian D Visa, providing a clear entry pathway for long-term residence, work or family reunification.",
            list: [
              "Purpose-based visa strategy",
              "Accurate documentation preparation",
              "Lawyer-supervised process",
            ],
          }}
        />

        <Components.Item
          data={{
            title: "Permanent Residence Permit in Ukraine",
            description:
              "Legal support for obtaining permanent residence in Ukraine, enabling long-term stay with stable legal status and expanded rights.",
            list: [
              "Eligibility and pathway analysis",
              "Structured documentation and filings",
              "Long-term status planning",
            ],
          }}
        />
        <Components.Item
          data={{
            title: "Temporary Residence Permit in Ukraine",
            description:
              "Assistance with obtaining a temporary residence permit in Ukraine, allowing lawful long-term stay based on work, family or study.",
            list: [
              "Ground-based eligibility review",
              "Status continuity and compliance",
              "End-to-end application support",
            ],
          }}
        />

        <Components.Item
          data={{
            title: "Permanent Residence Permit in Ukraine",
            description:
              "Legal support for obtaining permanent residence in Ukraine, enabling long-term stay with stable legal status and expanded rights.",
            list: [
              "Eligibility and pathway analysis",
              "Structured documentation and filings",
              "Long-term status planning",
            ],
          }}
        />

        <Components.Item
          data={{
            title: "Temporary Residence Permit in Ukraine",
            description:
              "Assistance with obtaining a temporary residence permit in Ukraine, allowing lawful long-term stay based on work, family or study.",
            list: [
              "Ground-based eligibility review",
              "Status continuity and compliance",
              "End-to-end application support",
            ],
          }}
        />
      </div>

      <div
        className={clsx(
          "group border-footer-border relative overflow-hidden border-t border-[#F4F5F7]",
        )}
      >
        <div
          className={clsx(
            "relative h-[120px] w-full overflow-hidden rounded-md",
            "after:absolute after:inset-0 after:z-1 after:bg-black/10",
          )}
        >
          {/* Image */}
          <NextImage
            className={clsx("h-full w-full object-cover object-center")}
            src="/images/solutions.webp"
            width={3768}
            height={360}
            objectFit="cover"
            alt="Smotrow design banner"
          />
        </div>
      </div>
    </Section>
  );
};
