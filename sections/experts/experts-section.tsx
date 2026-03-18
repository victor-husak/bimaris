"use client";

import { Support } from "@/ui";

import { PeopleCard } from "@/cards/people";

import { SectionArrows } from "@/components/section";

import * as Components from "./components";

import { useSwiper } from "@/hooks";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { clsx } from "clsx";

import type { ExpertShort } from "@/types/experts";

export type ExpertsSectionProps = {
  className?: string;
  title?: string;
  description?: string;
};

export type ExpertsSectionCombinedProps = ExpertsSectionProps & {
  data: ExpertShort[];
};

export const ExpertsSection: React.FC<ExpertsSectionCombinedProps> = (
  props,
): React.JSX.Element => {
  const { prevRef, nextRef, onBeforeInit } = useSwiper();

  return (
    <section className={clsx(props.className, "")}>
      {/* Header */}
      <Components.Header
        title={props.title}
        description={props.description}
        RightComponent={
          <SectionArrows
            className="ml-auto"
            prevRef={prevRef}
            nextRef={nextRef}
          />
        }
      />

      {/* Content */}
      <Swiper
        className="px-(--local-container-offset)! pt-15!"
        modules={[Navigation]}
        slidesPerView="auto"
        onBeforeInit={onBeforeInit}
        navigation
        // navigation={{
        //   prevEl: prevRef.current,
        //   nextEl: nextRef.current,
        // }}
      >
        {props.data?.map((item) => (
          <SwiperSlide
            className="not-last:pr-7.5"
            key={item.id}
            style={{ width: "auto" }}
          >
            <PeopleCard className="w-[350px]" data={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Footer */}
      <footer className="container-full">
        <Support />
      </footer>
    </section>
  );
};
