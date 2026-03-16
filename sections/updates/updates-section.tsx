import NextImage from "next/image";
import { clsx } from "clsx";
import { useTranslations } from "next-intl";

import { SectionHeader, Section, Button } from "@/components";

import * as Components from "./components";

import { useUpdatesSectionHeader } from "./updates-section.hook";

import type { PublicationShort } from "@/types/publication";

export type UpdatesSectionProps = {
  className?: string;
  data: PublicationShort[];
  HeaderComponent?: React.ReactNode;
};

export const UpdatesSection: React.FC<UpdatesSectionProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("sections.updates");

  const { data } = useUpdatesSectionHeader(props);

  return (
    <Section
      className={clsx(props.className, "")}
      HeaderComponent={
        props.HeaderComponent || (
          <SectionHeader
            title={t("header.title")}
            description={t("header.description")}
            ActionComponent={
              <Button animation="scale" href="/insights">
                {t("header.action")}
              </Button>
            }
          />
        )
      }
    >
      {/* Content */}
      <div className={clsx("relative flex flex-col gap-12.5", "xl:flex-row")}>
        {/* List */}
        <div className="sticky top-25 mb-auto flex flex-[1.3] flex-col gap-3.5">
          {data.map((item) => (
            <Components.Item key={item.id} data={item} />
          ))}
        </div>

        {/* Preview */}
        {/* aspect-square */}
        <div
          className={clsx(
            "group fr relative hidden h-auto max-w-80 flex-1 overflow-hidden rounded-2xl",
            "2xl:max-w-132.5",
            "xl:flex",
          )}
        >
          <NextImage
            className={clsx(
              "transition-img h-full w-full object-cover object-center",
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
