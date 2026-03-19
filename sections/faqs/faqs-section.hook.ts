import { useMemo, useState, useCallback } from "react";

import type { FaqsSectionProps } from "./faqs-section";

export const useFaqsSection = (props: FaqsSectionProps) => {
  const [activeId, setActiveId] = useState<number | null>(
    props.data.items.at(0)?.id ?? null,
  );

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

  const onToggle = useCallback((id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  }, []);

  return { data, activeId, onToggle };
};
