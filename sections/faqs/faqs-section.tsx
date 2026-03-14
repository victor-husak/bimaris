import NextImage from "next/image";
import { clsx } from "clsx";

import * as Components from "./components";

import { useFaqsSection } from "./faqs-section.hook";

import type { Faq } from "@/types/components";

export type FaqsSectionProps = {
  className?: string;
  data: Faq;
};

export const FaqsSection: React.FC<FaqsSectionProps> = (
  props,
): React.JSX.Element => {
  const { data } = useFaqsSection(props);

  return (
    <section className={clsx(props.className, "container-full flex gap-x-20")}>
      {/* Preview */}
      <NextImage
        className="aspect-[500px/530px] max-w-[500px] flex-1 rounded-2xl object-cover object-center"
        src={data.preview}
        alt="FAQs"
        width={1500}
        height={1590}
      />

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between">
        <h2 className="text-secondary max-w-[620px] text-[32px]/[43px] font-light tracking-[.024em]">
          {data.title}
        </h2>

        <div>
          {data.items.map((item) => (
            <Components.Item
              key={item.id}
              className="first:border-t"
              title={item.question}
              description={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
