import { useLayoutEffect, useMemo, useState } from "react";

import { useCarousel } from "@/hooks";

import { ServiceIcon, MeetingIcon } from "@/icons/header-links";

// import type { Image } from "@/types/common";

import type { RolesItemDomainHeaderProps } from "./roles-item-domain-header";

export const useRolesItemDomainHeader = (props: RolesItemDomainHeaderProps) => {
  const [loaded, setLoaded] = useState(false);

  const slides = useMemo(() => {
    return items;
    // return props.data.map((item) => ({
    //   href: `/works/${item.work?.slug}`,
    //   title: item.work?.name,
    //   subtitle: "Recent",
    //   description: item.work?.description,
    //   image: item.preview ? item.preview : item.work?.image,
    // }));
  }, []);

  const { activeIndex, onChangeActiveIndex } = useCarousel({
    count: slides.length,
    duration: 8000,
  });

  const activeSlide = useMemo(() => {
    return slides[activeIndex];
  }, [activeIndex, slides]);

  const slidesControl = useMemo(() => {
    return slides.map((item, index) => ({
      // url: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.image.url}`,
      url: item.avatar.url,
      id: index,
    }));
  }, [slides]);

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
    slides,
    slidesControl,
    activeSlide,
    activeIndex,
    onChangeActiveIndex,
    onChangeLoaded: setLoaded,
  };
};

const items = [
  {
    id: 1,
    label: "Browse services",
    icon: <ServiceIcon />,
  },
  {
    id: 2,
    label: "Schedule a meeting",
    icon: <MeetingIcon />,
  },
];
