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
    <section className={clsx(props.className, "container-full flex gap-25")}>
      {/* Preview */}
      <div className="group h-[530px] w-[480px] overflow-hidden rounded-2xl">
        <NextImage
          className={clsx(
            "transition-img h-full w-full object-cover",
            "group-hover:transform-[scale(1.03)]",
          )}
          src="/images/genereted/information.webp"
          alt="Preview"
          width={1440}
          height={1590}
        />
      </div>

      {/* Content */}
      <div className="mt-[25px] flex max-w-[640px] flex-col items-start gap-[50px]">
        {/* Title */}
        <h2 className="text-[30px]/[42px] font-light text-[#507FEB]">
          {props.title}
        </h2>

        {/* Description */}
        <Components.Markdown className="mt-auto" content={props.description} />

        {/* Action */}
        <Button href="/">Open case studies</Button>
      </div>
    </section>
  );
};
