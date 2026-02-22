import { useLayoutEffect, useState } from "react";

import type { PageLayoutHeaderProps } from "./page-layout-header";

export const usePageLayoutHeader = (props: PageLayoutHeaderProps) => {
  const [loaded, setLoaded] = useState(false);

  useLayoutEffect(() => {
    const layer = document.getElementById("layer-back");
    if (!layer) return;

    // Устанавливаем willChange один раз
    layer.style.willChange = "transform";

    let latestScrollY = window.scrollY;
    let currentScrollY = latestScrollY;
    let rafId: number | null = null;

    const animate = () => {
      currentScrollY += (latestScrollY - currentScrollY) * 0.12;

      // Применяем только zoom, так как speed = 0
      const scale = 1 + currentScrollY * 0.0002;
      layer.style.transform = `scale(${scale})`;

      // Продолжаем анимацию пока есть разница
      if (Math.abs(latestScrollY - currentScrollY) > 0.1) {
        rafId = requestAnimationFrame(animate);
      } else {
        rafId = null;
      }
    };

    const handleScroll = () => {
      latestScrollY = window.scrollY;
      // Запускаем анимацию только если она еще не запущена
      if (rafId === null) {
        rafId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      // Очищаем willChange при размонтировании
      layer.style.willChange = "auto";
    };
  }, []);

  return {
    loaded,
    onChangeLoaded: setLoaded,
  };
};
