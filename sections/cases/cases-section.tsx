"use client";

import { PublicationCard } from "@/cards/publication";

import { SectionArrows } from "@/components/section";

import { useSwiper } from "@/hooks";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { clsx } from "clsx";

import type { CaseStudyShort } from "@/types/case-studies";

export type CasesSectionProps = {
  className?: string;
  data: CaseStudyShort[];
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
        navigation
      >
        {props.data.map((item) => (
          <SwiperSlide
            className="not-last:pr-5"
            key={item.id}
            style={{ width: "auto" }}
          >
            <PublicationCard
              className="w-[350px]"
              data={item}
              type="case-study"
            />
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
