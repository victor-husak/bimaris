import { useMemo } from "react";

import type { FaqsSectionProps } from "./faqs-section";

export const useFaqsSection = (props: FaqsSectionProps) => {
  const data = useMemo(() => {
    return {
      id: props.data.id,
      title: props.data.title,
      preview: `${process.env.NEXT_PUBLIC_STRAPI_URL}${props.data.preview.url}`,
      items: props.data.items.map((i) => ({
        id: i.id,
        question: i.question,
        answer: i.answer,
      })),
    };
  }, [props.data]);

  return { data };
};
