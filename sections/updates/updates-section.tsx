import NextImage from "next/image";
import { clsx } from "clsx";

import { SectionHeader, Section, Button } from "@/components";

import * as Components from "./components";

import { useUpdatesSectionHeader } from "./updates-section.hook";

import type { PublicationShort } from "@/types/publication";

export type UpdatesSectionProps = {
  className?: string;
  data: PublicationShort[];
};

export const UpdatesSection: React.FC<UpdatesSectionProps> = (
  props,
): React.JSX.Element => {
  const { data } = useUpdatesSectionHeader(props);

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
          {data.map((item) => (
            <Components.Item key={item.id} data={item} />
          ))}
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
