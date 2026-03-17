import { useCallback } from "react";

export const useScrollToSection = () => {
  const onScrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -70; // высота header
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  return { onScrollToSection };
};
