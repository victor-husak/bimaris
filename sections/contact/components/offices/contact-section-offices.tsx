"use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, EffectFade } from "swiper/modules";

// import { useSwiper } from "@/hooks";

import * as Components from "./components";

import { clsx } from "clsx";

// import "swiper/css";

export type ContactSectionOfficesProps = {
  className?: string;
};

export const ContactSectionOffices: React.FC<ContactSectionOfficesProps> = (
  props,
): React.JSX.Element => {
  // const {
  //   activeIndex,
  //   prevRef,
  //   nextRef,
  //   onBeforeInit,
  //   onSlideChange,
  //   onChangeActiveIndex,
  // } = useSwiper();

  return (
    <div
      className={clsx(
        props.className,
        "flex gap-2.5 overflow-x-auto px-[25px] py-[25px]",
      )}
    >
      {items.map((item, index) => (
        <Components.Item
          key={item.id}
          data={item}
          variant={index === 0 ? "secondary" : "base"}
        />
      ))}
    </div>
    // <Swiper
    //   className="my-[25px]"
    //   // className="h-full w-full"
    //   // loop
    //   // effect="fade"
    //   // fadeEffect={{ crossFade: true }}
    //   // autoplay={{ delay: 8000, disableOnInteraction: false }}
    //   // speed={800}
    //   spaceBetween={10}
    //   slidesPerView="auto"
    //   grabCursor={true}
    //   modules={[Navigation]}
    //   // navigation={{
    //   //   prevEl: props.prevRef.current,
    //   //   nextEl: props.nextRef.current,
    //   // }}
    //   // onBeforeInit={props.onBeforeInit}
    //   // onSlideChange={props.onSlideChange}
    // >
    // {items.map((item) => (
    //   <SwiperSlide className={clsx("relative !w-[300px]")} key={item.id}>
    //     <Components.Item />
    //   </SwiperSlide>
    // ))}
    // </Swiper>
    // </div>
  );
};

const items = [
  {
    id: 1,
    tag: "Main office",
    items: [
      "Ukraine, 01033, Kyiv",
      "Zhylianska 68, office 167",
      "info@bimaris.legal",
    ],
    action: "Show on map",
  },
  {
    id: 2,
    tag: "Back office",
    items: [
      "Estonia, 10149, Tallinn ",
      "4 Saani tn 2/2-26, Põhja-Tallinna",
      "estonia@bimaris.legal",
    ],
    action: "Schedule meeting",
  },
];
