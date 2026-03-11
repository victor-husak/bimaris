"use client";

import { Support } from "@/ui";

import { PeopleCard } from "@/cards/people";

import { SectionArrows } from "@/components/section";

import * as Components from "./components";

import { useSwiper } from "@/hooks";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { clsx } from "clsx";

export type ExpertsSectionProps = {
  className?: string;
};

export const ExpertsSection: React.FC<ExpertsSectionProps> = (
  props,
): React.JSX.Element => {
  const { prevRef, nextRef, onBeforeInit } = useSwiper();

  return (
    <section className={clsx(props.className, "")}>
      {/* Header */}
      <Components.Header
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
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {items.map((item) => (
          <SwiperSlide
            className="not-last:pr-7.5"
            key={item.id}
            style={{ width: "auto" }}
          >
            <PeopleCard className="w-[350px]" />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="container-full flex gap-[30px]">
        <PeopleCard className="w-[350px]" />

        <PeopleCard className="w-[350px]" />

        <PeopleCard className="w-[350px]" />
      </div> */}

      {/* Footer */}
      <footer className="container-full">
        <Support />
      </footer>
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
];
