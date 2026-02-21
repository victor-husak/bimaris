import { useLayoutEffect, useState } from "react";

import type { PageLayoutHeaderProps } from "./page-layout-header";

export const usePageLayoutHeader = (props: PageLayoutHeaderProps) => {
  const [loaded, setLoaded] = useState(false);

  useLayoutEffect(() => {
    const layer = {
      el: document.getElementById("layer-back"),
      speed: 0,
      zoomSpeed: 0.0002,
    };

    let latestScrollY = 0;
    let currentScrollY = 0;
    let mouseY = 0;

    window.addEventListener("scroll", () => {
      latestScrollY = window.scrollY;
      requestAnimationFrame(animate);
    });

    function animate() {
      currentScrollY += (latestScrollY - currentScrollY) * 0.12;

      const moveY = currentScrollY * layer.speed + mouseY;
      const scale = 1 + currentScrollY * layer.zoomSpeed;

      if (layer.el) {
        layer.el.style.willChange = "transform";
        layer.el.style.transform = `translate(0px, ${moveY}px) scale(${scale})`;
      }
    }
  }, []);

  return {
    loaded,
    onChangeLoaded: setLoaded,
  };
};
