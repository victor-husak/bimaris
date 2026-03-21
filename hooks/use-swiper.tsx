import { useRef, useCallback, useState, useEffect } from "react";

import type { SwiperClass } from "swiper/react";

export const useSwiper = () => {
  const [mainSwiper, setMainSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const prevRef = useRef<HTMLElement | undefined>(undefined);
  const nextRef = useRef<HTMLElement | undefined>(undefined);

  // Обновляем состояния при изменении mainSwiper
  useEffect(() => {
    if (mainSwiper) {
      const updateStates = () => {
        setIsBeginning(mainSwiper.isBeginning);
        setIsEnd(mainSwiper.isEnd);
        setActiveIndex(mainSwiper.activeIndex);
      };

      // Обновляем сразу после инициализации
      updateStates();

      // Подписываемся на события достижения краев
      mainSwiper.on("reachBeginning", updateStates);
      mainSwiper.on("reachEnd", updateStates);
      mainSwiper.on("fromEdge", updateStates);
      mainSwiper.on("resize", updateStates);

      return () => {
        mainSwiper.off("reachBeginning", updateStates);
        mainSwiper.off("reachEnd", updateStates);
        mainSwiper.off("fromEdge", updateStates);
        mainSwiper.off("resize", updateStates);
      };
    }
  }, [mainSwiper]);

  const onBeforeInit = useCallback((Swiper: SwiperClass): void => {
    if (typeof Swiper.params.navigation !== "boolean") {
      const navigation = Swiper.params.navigation;
      if (!!navigation) {
        navigation.prevEl = prevRef.current;
        navigation.nextEl = nextRef.current;
      }
    }

    // Инициализация и обновление navigation после установки кастомных элементов
    Swiper.navigation.init();
    Swiper.navigation.update();

    setMainSwiper(Swiper);
  }, []);

  const onSwiper = useCallback((swiper: SwiperClass) => {
    setMainSwiper(swiper);
  }, []);

  const onSlideChange = useCallback((swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
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
    isBeginning,
    isEnd,
    onBeforeInit,
    onSwiper,
    onSlideChange,
    onChangeActiveIndex,
  };
};
