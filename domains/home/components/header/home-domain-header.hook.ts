import { useLayoutEffect, useMemo, useState } from "react";

import { useCarousel } from "@/hooks";

// import type { Image } from "@/types/common";

import type { HomeDomainHeaderProps } from "./home-domain-header";

export const useHomeDomainHeader = (props: HomeDomainHeaderProps) => {
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
    label: "For individuals",
    avatar: {
      url: "/images/genereted/home/slide1.webp",
      width: 120,
      height: 120,
      alt: "For individuals",
    },
  },
  {
    id: 2,
    label: "For businesses",
    avatar: {
      url: "/images/genereted/home/slide2.webp",
      width: 120,
      height: 120,
      alt: "For businesses",
    },
  },
  {
    id: 3,
    label: "For investors",
    avatar: {
      url: "/images/genereted/home/slide3.webp",
      width: 120,
      height: 120,
      alt: "For investors",
    },
  },
];
