import { useCallback } from "react";

export type UseScrollToSectionProps = {
  offset: number;
};

export const useScrollToSection = (props: UseScrollToSectionProps) => {
  const onScrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = props.offset || -70; // высота header
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  return { onScrollToSection };
};
