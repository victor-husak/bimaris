"use client";

import * as Components from "./components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { useSwiper } from "@/hooks";

import { clsx } from "clsx";

import type { Office } from "@/types/offices";

export type ContactSectionOfficesProps = {
  className?: string;
  data: Office[];
};

export const ContactSectionOffices: React.FC<ContactSectionOfficesProps> = (
  props,
): React.JSX.Element => {
  const { mainSwiper, prevRef, nextRef, onBeforeInit, onSlideChange } =
    useSwiper();

  return (
    <div className="relative flex items-center">
      <Swiper
        className={clsx(props.className, "px-[25px]! py-[25px]!")}
        wrapperClass="items-stretch!"
        modules={[Navigation]}
        slidesPerView="auto"
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={onBeforeInit}
        onSlideChange={onSlideChange}
      >
        {props.data.map((item) => (
          <SwiperSlide
            className="h-auto! not-last:pr-2.5"
            key={item.id}
            style={{ width: "auto" }}
          >
            <Components.Item key={item.id} data={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Components.Arrow
        className={clsx("absolute left-[10px] z-1 rotate-180", {
          hidden: mainSwiper?.activeIndex === 0,
        })}
        ref={prevRef as React.Ref<HTMLButtonElement>}
      />

      <Components.Arrow
        className={clsx("absolute right-[25px] z-1", {
          hidden: mainSwiper?.activeIndex === props.data.length - 2,
        })}
        ref={nextRef as React.Ref<HTMLButtonElement>}
      />
    </div>
  );
};
