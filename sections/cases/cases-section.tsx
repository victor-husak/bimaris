"use client";

import { useTranslations } from "next-intl";

import { PublicationCard } from "@/cards/publication";

import { SectionArrows } from "@/components/section";

import { SectionHeader, Button } from "@/components";

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
  const t = useTranslations("sections.case-studies");
  const { prevRef, nextRef, onBeforeInit } = useSwiper();

  return (
    <section className={clsx(props.className, "")}>
      {/* Header */}
      {props.HeaderComponent || (
        <SectionHeader
          className="container-full pb-0"
          classNameDescription="max-w-[500px]"
          title={t("header.title")}
          description={t("header.description")}
          ActionComponent={
            <Button href="/case-studies" animation="scale">
              {t("header.action")}
            </Button>
          }
        />
      )}

      <Swiper
        className="px-(--local-container-offset)! pt-25! pb-[35px]!"
        wrapperClass="items-stretch!"
        modules={[Navigation]}
        slidesPerView="auto"
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={onBeforeInit}
      >
        {props.data.map((item) => (
          <SwiperSlide
            className="h-auto! not-last:pr-5"
            key={item.id}
            style={{ width: "auto" }}
          >
            <PublicationCard
              className="h-full w-[380px]"
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
