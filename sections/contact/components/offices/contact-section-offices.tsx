// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, EffectFade } from "swiper/modules";

// import { useSwiper } from "@/hooks";
import { clsx } from "clsx";

import { useContactSectionOffices } from "./contact-section-offices.hook";

import * as Components from "./components";

import type { Office } from "@/types/offices";

// import "swiper/css";

export type ContactSectionOfficesProps = {
  className?: string;
  data: Office[];
};

export const ContactSectionOffices: React.FC<ContactSectionOfficesProps> = (
  props,
): React.JSX.Element => {
  const { items } = useContactSectionOffices(props);
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
      {items.map((item) => (
        <Components.Item
          key={item.id}
          data={item}
          variant={item.isMain ? "secondary" : "base"}
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
