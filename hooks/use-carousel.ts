import { useState, useEffect, useCallback } from "react";

export interface UseCarouselProps {
  count: number;
  duration?: number;
  pause?: boolean | null;
}

export const useCarousel = ({
  count,
  duration = 8000,
  pause,
}: UseCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (count <= 1 || pause) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, duration);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const onTrigger = useCallback(
    (type: "next" | "prev") => {
      setActiveIndex((prev) =>
        type === "next" ? (prev + 1) % count : (prev - 1 + count) % count,
      );
    },
    [count],
  );

  return { activeIndex, onChangeActiveIndex: setActiveIndex, onTrigger };
};
