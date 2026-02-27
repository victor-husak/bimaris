import NextImage from "next/image";

import { SectionHeader, Section, Button } from "@/components";

import * as Components from "./components";

import { clsx } from "clsx";

export type UpdatesSectionProps = {
  className?: string;
};

export const UpdatesSection: React.FC<UpdatesSectionProps> = (
  props,
): React.JSX.Element => {
  return (
    <Section
      className={clsx(props.className, "")}
      HeaderComponent={
        <SectionHeader
          title="Legal alerts and updates"
          description="Stay informed about key immigration law changes, policy updates, and regulatory developments affecting individuals moving in Ukraine."
          ActionComponent={
            <Button animation="scale" href="/">
              Newsroom
            </Button>
          }
        />
      }
    >
      {/* Content */}
      <div className="flex gap-12.5">
        {/* List */}
        <div className="flex flex-1 flex-col gap-3.5">
          <Components.Item
            title="Updates to temporary residence permit requirements"
            description="The Ukrainian authorities have introduced updated documentation requirements for certain Temporary Residence Permit applications."
          />

          <Components.Item
            title="Changes to entry and stay rules for foreign nationals"
            description="Recent adjustments to entry regulations impact visa-free stays and permitted duration rules for several nationalities."
          />

          <Components.Item
            title="New guidelines for Ukrainian citizenship applications"
            description="Authorities have clarified procedural requirements and documentation standards for citizenship applications."
          />

          <Components.Item
            title="Updated work permit processing timelines"
            description="Processing timelines for work permits have been revised, with faster review periods for priority employment sectors and international specialists."
          />
        </div>

        {/* Preview */}
        <div className="group aspect-square w-132.5 overflow-hidden rounded-2xl">
          <NextImage
            className={clsx(
              "transition-img h-full w-full object-cover",
              "group-hover:transform-[scale(1.03)]",
            )}
            src="/images/home/home-updates.webp"
            alt="Preview"
            width={1590}
            height={1590}
          />
        </div>
      </div>
    </Section>
  );
};
