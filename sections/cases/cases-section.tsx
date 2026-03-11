"use client";

import { CaseCard } from "@/cards/case";

import { SectionHeader, Button } from "@/components";

import { SectionArrows } from "@/components/section";

import { useSwiper } from "@/hooks";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { clsx } from "clsx";

import "swiper/css";

export type CasesSectionProps = {
  className?: string;
};

export const CasesSection: React.FC<CasesSectionProps> = (
  props,
): React.JSX.Element => {
  const { prevRef, nextRef, onBeforeInit } = useSwiper();

  return (
    <section className={clsx(props.className, "")}>
      <SectionHeader
        className="container-full pb-0"
        classNameDescription="max-w-[500px]"
        title="Customer case studies"
        description="Explore our selected examples of immigration cases handled for individuals and businesses, demonstrating our structured approach and long-term legal support."
        ActionComponent={
          <Button href="/case-studies" animation="scale">
            View all
          </Button>
        }
      />

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
