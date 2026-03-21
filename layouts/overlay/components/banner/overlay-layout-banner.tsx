import { Tag, List, Button } from "@/components";

import { ArrowRightIcon } from "@/icons";

import NextImage from "next/image";

import { clsx } from "clsx";

export type OverlayLayoutBannerProps = {
  className?: string;
};

export const OverlayLayoutBanner: React.FC<OverlayLayoutBannerProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "group flex max-w-[330px] flex-col rounded-2xl bg-[#F4F8FD]",
      )}
    >
      <Tag
        className="bg-secondary m-[25px] mr-auto text-white"
        title="Book a call"
        IconComponent={<ArrowRightIcon />}
      />

      {/* Preview */}
      <div className="mx-[15px] h-[160px] overflow-hidden rounded-lg bg-gray-300">
        <NextImage
          className={clsx(
            "transition-img h-full w-full object-cover",
            "group-hover:transform-[scale(1.03)]",
          )}
          src="/images/common/overlay-contact.webp"
          alt="Case preview"
          width={900}
          height={480}
        />
      </div>

      {/* Content */}
      <div className="p-[25px]">
        {/* Description */}
        <p className="text-[14px]/[20px] tracking-[.028em] text-[#878D9D]">
          Schedule a 30-minute consultation with our experts to discuss your
          situation and plan a collaboration.
        </p>

        {/* List */}
        <List
          className="text-secondary mt-[15px]"
          items={[
            { title: "+380 44 995 35 35", href: "tel:+380449953535" },
            { title: "info@bimaris.legal", href: "mailto:info@bimaris.legal" },
          ]}
        />

        {/* Action */}
        <Button className="mt-[26px]" href="">
          Schedule a meeting
        </Button>
      </div>
    </div>
  );
};
