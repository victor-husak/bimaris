import { useLayoutEffect, useMemo, useState } from "react";

import { useCarousel } from "@/hooks";

// import type { Image } from "@/types/common";

import type { HomeDomainHeaderProps } from "./home-domain-header";

export const useHomeDomainHeader = (props: HomeDomainHeaderProps) => {
  const [loaded, setLoaded] = useState(false);

  const slides = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      href: item.href,
      title: item.tag,
      avatar: item.avatar,
    }));
  }, []);

  const { activeIndex, onChangeActiveIndex } = useCarousel({
    count: items.length,
    duration: 8000,
  });

  const activeItem = useMemo(() => {
    return items[activeIndex] ?? items.at(0);
  }, [activeIndex]);

  // const slidesControl = useMemo(() => {
  //   return slides.map((item, index) => ({
  //     // url: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.image.url}`,
  //     url: item.avatar.url,
  //     id: index,
  //   }));
  // }, [slides]);

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
    items,
    loaded,
    slides,
    // slidesControl,
    activeItem,
    activeIndex,
    onChangeActiveIndex,
    onChangeLoaded: setLoaded,
  };
};

const items = [
  {
    id: 1,
    tag: "For individuals",
    title: ["Immigration", "with clarity"],
    subtitle: "Immigration services",
    description:
      "Personalized immigration legal support for individuals - from first consultation to long-term residency, handled with clarity, care, and precision.",
    href: "/roles/individuals",
    avatar: {
      url: "/images/genereted/home/slide1.webp",
      width: 120,
      height: 120,
      alt: "For individuals",
    },
    media: {
      url: "/images/home/home-header.webp",
      width: 3978,
      height: 1860,
      alt: "Home header background",
    },
  },
  {
    id: 2,
    tag: "For businesses",
    title: ["Immigration", "for businesses"],
    subtitle: "Immigration services",
    description:
      "Bimaris  helps individuals and families navigate the Ukrainian immigration process with clarity, confidence, and expert legal support.",
    href: "/roles/businesses",
    avatar: {
      url: "/images/genereted/home/slide2.webp",
      width: 120,
      height: 120,
      alt: "For businesses",
    },
    media: {
      url: "/images/genereted/role.webp",
      width: 3978,
      height: 1860,
      alt: "Home header background",
    },
  },
  {
    id: 3,
    tag: "For investors",
    title: ["Immigration", "for investors"],
    subtitle: "Immigration services",
    description:
      "Personalized immigration legal support for investors - from initial consultation to long-term investment strategies, handled with clarity, care, and precision.",
    href: "/roles/investors",
    avatar: {
      url: "/images/genereted/home/slide3.webp",
      width: 120,
      height: 120,
      alt: "For investors",
    },
    media: {
      url: "/images/genereted/service.webp",
      width: 3978,
      height: 1860,
      alt: "Home header background",
    },
  },
];
