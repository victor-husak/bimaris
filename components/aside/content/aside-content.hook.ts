import { useState, useEffect, useRef, useMemo } from "react";

import { findIndex } from "lodash-es";

export const useAsideContent = () => {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const ticking = useRef(false);

  useEffect(() => {
    const tempDiv = document.getElementById("markdown");
    if (tempDiv) {
      const extractedHeadings = Array.from(tempDiv.querySelectorAll("h2")).map(
        (el) => ({
          id:
            el.textContent
              ?.toLowerCase()
              .replace(/[^a-zA-Zа-яА-Я0-9 \-]/g, "")
              .trim()
              .replace(/\s+/g, "-")
              .replaceAll("--", "-") || "",
          text: el.textContent || "",
          level: Number(el.tagName[1]),
        }),
      );
      setHeadings(extractedHeadings);

      if (extractedHeadings.at(0))
        setActiveId(`${extractedHeadings.at(0)?.id}`);
    }
  }, []);

  const indicatorOffset = useMemo(() => {
    let res = 0;

    if (activeId) {
      const index = findIndex(headings, { id: activeId });

      if (headings.length) {
        const ul = document.getElementById("navigation-ul");

        const list = ul?.getElementsByTagName("li");

        if (list?.length) {
          const items = Array.from(list).splice(0, index);

          items.forEach((el) => {
            res += el.clientHeight;
          });
        }
      }
    }

    return res;
  }, [activeId, headings]);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const headingElements = headings
          .map((h) => document.getElementById(h.id))
          .filter((el): el is HTMLElement => el !== null);

        if (headingElements.length === 0) {
          ticking.current = false;
          return;
        }

        const topHeading = headingElements.find((el) => {
          const rect = el.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 4; // Активируем, если заголовок в верхней 1/4 экрана
        });

        if (topHeading) {
          setActiveId(topHeading.id);
        } else if (window.scrollY === 0) {
          setActiveId(headings[0]?.id || null);
        }

        ticking.current = false;
      });
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [headings]);

  return { headings, activeId, indicatorOffset };
};
