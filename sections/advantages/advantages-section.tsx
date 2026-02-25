import NextImage from "next/image";

import { Support } from "@/ui";

import * as Components from "./components";

import { clsx } from "clsx";

export type AdvantagesSectionProps = {
  className?: string;
};

export const AdvantagesSection: React.FC<AdvantagesSectionProps> = (
  props,
): React.JSX.Element => {
  return (
    <section className={clsx(props.className)}>
      <div className="container-large bg-background-secondary rounded-2xl">
        <div
          className={clsx(
            "grid grid-cols-1 gap-x-[21px] gap-y-[35px] p-2.5",
            "md:grid-cols-2",
            "xl:grid-cols-3",
          )}
        >
          {data.map((item, index) => (
            <Components.Item data={item} key={index} />
          ))}
        </div>

        {/* Banner */}
        <div
          className={clsx(
            "group border-footer-border relative mx-[35px] mt-2.5 overflow-hidden border-t border-[#F4F5F7] py-[35px]",
          )}
        >
          <div
            className={clsx(
              "relative h-[120px] w-full overflow-hidden rounded-md",
              "after:absolute after:inset-0 after:z-1 after:bg-black/10",
            )}
          >
            {/* Image */}
            <NextImage
              className={clsx("h-full w-full object-cover object-center")}
              src="/images/advantages.webp"
              width={3768}
              height={360}
              objectFit="cover"
              alt="Smotrow design banner"
            />
          </div>
        </div>
      </div>

      <div className="container-full">
        <Support />
      </div>
    </section>
  );
};

const data = [
  {
    key: "1",
    title: "98%",
    description:
      "Client satisfaction rate based on long-term partnerships and repeat engagements.",
    href: "/",
  },
  {
    key: "2",
    title: "1,000+",
    description:
      "Successful immigration cases handled for individuals and businesses across multiple jurisdictions.",
    href: "/",
  },
  {
    key: "3",
    title: "10 years",
    description:
      "Of combined professional experience in immigration law and international advisory.",
    href: "/",
  },
];
