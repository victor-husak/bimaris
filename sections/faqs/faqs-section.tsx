import * as Components from "./components";

import NextImage from "next/image";

import { clsx } from "clsx";

export type FaqsSectionProps = {
  className?: string;
};

export const FaqsSection: React.FC<FaqsSectionProps> = (
  props,
): React.JSX.Element => {
  return (
    <section className={clsx(props.className, "container-full flex gap-x-20")}>
      {/* Preview */}
      <NextImage
        className="aspect-[500px/530px] max-w-[500px] flex-1 rounded-2xl object-cover object-center"
        src="/images/faqs.webp"
        alt="FAQs"
        width={1500}
        height={1590}
        objectFit="cover"
        objectPosition="center"
      />

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between">
        <h2 className="text-secondary max-w-[620px] text-[32px]/[43px] font-light tracking-[.024em]">
          Clear answers to common immigration questions for people and families
        </h2>

        <div>
          <Components.Item
            className="first:border-t"
            title="Do I need a visa to enter Ukraine?"
            description="It depends on your citizenship and the purpose of your stay. Some nationals can enter visa-free for a limited period, while others require a visa in advance. We help determine the correct entry option and next legal steps based on your situation."
          />

          <Components.Item
            className="first:border-t"
            title="What is the difference between a visa and a residence permit?"
            description="A visa allows you to enter Ukraine for a specific purpose and duration, while a residence permit grants you the right to live in Ukraine for an extended period. We assist with both visa applications and residence permits, ensuring you understand the requirements and processes for each."
          />

          <Components.Item
            className="first:border-t"
            title="How long does the immigration process usually take?"
            description="The duration of the immigration process varies depending on the type of visa or residence permit you are applying for, as well as your individual circumstances. We provide guidance and support throughout the process to help ensure a smooth and timely application."
          />

          <Components.Item
            className="first:border-t"
            title="Can my family apply together with me?"
            description="Yes, family members can often apply together with the primary applicant. We provide guidance on the necessary documentation and processes to ensure a smooth application for all eligible family members."
          />
        </div>
      </div>
    </section>
  );
};
