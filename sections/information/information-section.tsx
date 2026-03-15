import NextImage from "next/image";

import * as Components from "./components";

import { Button } from "@/components";

import { clsx } from "clsx";

export type InformationSectionProps = {
  className?: string;
  title: string;
  description: string;
};

export const InformationSection: React.FC<InformationSectionProps> = (
  props,
): React.JSX.Element => {
  return (
    <section
      className={clsx(
        props.className,
        "container-full flex flex-col gap-x-15 gap-y-15",
        "lg:flex-row",
        "2xl:gap-x-25",
      )}
    >
      {/* Preview */}
      <div
        className={clsx(
          "group max-h-[350px] max-w-full flex-1 overflow-hidden rounded-2xl",
          "xl:max-h-[530px] xl:max-w-[480px]",
        )}
      >
        <NextImage
          className={clsx(
            "transition-img h-full w-full object-cover object-center",
            "group-hover:transform-[scale(1.03)]",
          )}
          src="/images/genereted/information.webp"
          alt="Preview"
          width={1440}
          height={1590}
        />
      </div>

      {/* Content */}
      <div
        className={clsx(
          "flex flex-[1.5] flex-col items-start gap-[50px]",
          "lg:max-w-[640px]",
        )}
      >
        {/* Title */}
        <h2 className="text-[30px]/[42px] font-light text-[#507FEB]">
          {props.title}
        </h2>

        {/* Description */}
        <Components.Markdown className="mt-auto" content={props.description} />

        {/* Action */}
        <Button href="/case-studies">Open case studies</Button>
      </div>
    </section>
  );
};
