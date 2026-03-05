import { useState, useEffect, useRef, useMemo } from "react";

import { findIndex } from "lodash-es";

import { generateHeadingId } from "@/utils/generate-heading-id";

export const useAsideContent = (content: string) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const headingElementsRef = useRef<Map<string, Element>>(new Map());
  const lastScrollY = useRef<number>(0);
  const scrollDirectionRef = useRef<"down" | "up">("down");

  const headings = useMemo(() => {
    const h2Regex = /^##\s+(.+)$/gm;
    const extractedHeadings: { id: string; text: string; level: number }[] = [];
    let match;

    while ((match = h2Regex.exec(content)) !== null) {
      const text = match[1].trim();
      const id = generateHeadingId(text);
      extractedHeadings.push({ id, text, level: 2 });
    }

    return extractedHeadings;
  }, [content]);

  const indicatorOffset = useMemo(() => {
    if (!activeId) return 0;
    const index = findIndex(headings, { id: activeId });
    return index >= 0 ? index * 31 : 0;
  }, [activeId, headings]);

  useEffect(() => {
    // Очищаем предыдущий observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Находим все элементы заголовков
    const elements: HTMLElement[] = [];
    headingElementsRef.current.clear();

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        elements.push(element);
        headingElementsRef.current.set(heading.id, element);
      }
    });

    if (elements.length === 0) return;

    // Отслеживаем направление скролла
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDirectionRef.current =
        currentScrollY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Создаем Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        // Создаем массив всех элементов с их позициями
        const elementPositions = elements.map((element) => {
          const rect = element.getBoundingClientRect();
          const isIntersecting = entries.find(
            (e) => e.target === element,
          )?.isIntersecting;

          return {
            element,
            id: element.id,
            top: rect.top,
            isIntersecting:
              isIntersecting !== undefined
                ? isIntersecting
                : rect.top >= 0 && rect.top <= window.innerHeight,
          };
        });

        // Сортируем по позиции сверху вниз
        elementPositions.sort((a, b) => a.top - b.top);

        // Находим активный элемент
        let newActiveId: string | null = null;

        // Разные пороги для разных направлений скролла
        const scrollDown = scrollDirectionRef.current === "down";
        const activationThreshold = scrollDown
          ? window.innerHeight * 0.3 // При скролле вниз - активируем раньше (30% от верха)
          : window.innerHeight * 0.15; // При скролле вверх - активируем позже (15% от верха)

        // Ищем заголовки которые прошли порог активации
        const candidatesNearTop = elementPositions.filter(
          (pos) => pos.top <= activationThreshold,
        );

        if (candidatesNearTop.length > 0) {
          // Берем последний заголовок перед порогом (самый близкий к верху)
          newActiveId = candidatesNearTop[candidatesNearTop.length - 1].id;
        } else {
          // Все элементы ниже порога - активируем первый
          newActiveId = elementPositions[0]?.id || null;
        }

        if (newActiveId && newActiveId !== activeId) {
          setActiveId(newActiveId);
        }
      },
      {
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, 0.1, 0.5, 1],
      },
    );

    // Наблюдаем за всеми заголовками
    elements.forEach((element) => observer.observe(element));

    observerRef.current = observer;

    // Устанавливаем начальный activeId
    if (!activeId && headings[0]) {
      setActiveId(headings[0].id);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [headings]);

  return { headings, activeId, indicatorOffset };
};
