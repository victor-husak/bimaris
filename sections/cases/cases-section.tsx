"use client";

import { CaseCard } from "@/cards/case";

import { SectionArrows } from "@/components/section";

import { useSwiper } from "@/hooks";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { clsx } from "clsx";

export type CasesSectionProps = {
  className?: string;
  HeaderComponent?: React.JSX.Element;
};

export const CasesSection: React.FC<CasesSectionProps> = (
  props,
): React.JSX.Element => {
  const { prevRef, nextRef, onBeforeInit } = useSwiper();

  return (
    <section className={clsx(props.className, "")}>
      {/* Header */}
      {props.HeaderComponent}

      <Swiper
        className="px-(--local-container-offset)! pt-25! pb-[35px]!"
        modules={[Navigation]}
        slidesPerView="auto"
        onBeforeInit={onBeforeInit}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {items.map((item) => (
          <SwiperSlide
            className="not-last:pr-5"
            key={item.id}
            style={{ width: "auto" }}
          >
            <CaseCard className="w-[350px]" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Actions */}
      <SectionArrows
        className="container-full"
        prevRef={prevRef}
        nextRef={nextRef}
      />
    </section>
  );
};

const items = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];
