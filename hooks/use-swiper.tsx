import { useRef, useCallback, useState } from "react";

import type { SwiperClass } from "swiper/react";

export const useSwiper = () => {
  const [mainSwiper, setMainSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const prevRef = useRef<HTMLElement | undefined>(undefined);
  const nextRef = useRef<HTMLElement | undefined>(undefined);

  const onBeforeInit = useCallback((Swiper: SwiperClass): void => {
    setMainSwiper(Swiper);

    if (typeof Swiper.params.navigation !== "boolean") {
      const navigation = Swiper.params.navigation;
      if (!!navigation) {
        navigation.prevEl = prevRef.current;
        navigation.nextEl = nextRef.current;
      }
    }
  }, []);

  const onSwiper = useCallback((swiper: SwiperClass) => {
    setMainSwiper(swiper);
  }, []);

  const onSlideChange = useCallback((swiper: SwiperClass) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  const onChangeActiveIndex = useCallback(
    (index: number) => {
      setActiveIndex(index);
      if (mainSwiper) {
        mainSwiper.slideToLoop(index); // slideToLoop учитывает loop
      }
    },
    [mainSwiper],
  );

  return {
    activeIndex,
    prevRef,
    nextRef,
    mainSwiper,
    setMainSwiper,
    onBeforeInit,
    onSwiper,
    onSlideChange,
    onChangeActiveIndex,
  };
};
