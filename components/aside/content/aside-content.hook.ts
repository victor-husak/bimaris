import { useState, useEffect, useRef, useMemo } from "react";

import { findIndex } from "lodash-es";

import { generateHeadingId } from "@/utils/generate-heading-id";

import { useScrollToSection } from "@/hooks";

export const useAsideContent = (content: string) => {
  const { onScrollToSection } = useScrollToSection({ offset: -100 });

  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const headingElementsRef = useRef<Map<string, Element>>(new Map());

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

        // Используем 50% от высоты экрана как порог активации
        // Элемент становится активным когда достигает середины экрана
        const threshold = window.innerHeight * 0.5;

        // Находим все элементы которые уже прошли порог (top < threshold)
        const passedElements = elementPositions.filter(
          (pos) => pos.top < threshold,
        );

        if (passedElements.length > 0) {
          // Берем последний из тех что прошли порог
          newActiveId = passedElements[passedElements.length - 1].id;
        } else {
          // Если ничего не прошло порог, берем первый видимый элемент
          const firstVisible = elementPositions.find(
            (pos) => pos.top >= 0 && pos.top < window.innerHeight,
          );
          newActiveId = firstVisible?.id || elementPositions[0]?.id || null;
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
      observer.disconnect();
    };
  }, [headings]);

  return { headings, activeId, indicatorOffset, onScrollToSection };
};
