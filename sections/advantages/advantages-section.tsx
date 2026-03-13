import NextImage from "next/image";

import { Support } from "@/ui";

import * as Components from "./components";

import { clsx } from "clsx";

export type AdvantagesSectionProps = {
  className?: string;
  withBanner?: boolean;
  data: Array<{
    key: string;
    title: string;
    description: string;
    href: string;
  }>;
  BannerComponent?: React.ReactNode;
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
          {props.data.map((item, index) => (
            <Components.Item data={item} key={index} />
          ))}
        </div>

        {/* Banner */}
        {(props.withBanner || !!props.BannerComponent) && (
          <div
            className={clsx(
              "group border-footer-border relative z-1 mx-[35px] mt-2.5 overflow-hidden border-t border-[#F4F5F7] py-[35px]",
            )}
          >
            {props.BannerComponent || (
              <div
                className={clsx(
                  "relative h-[120px] w-full overflow-hidden rounded-[11px]",
                  "after:absolute after:inset-0 after:z-1 after:bg-black/10",
                )}
              >
                {/* Image */}
                <NextImage
                  className={clsx("h-full w-full object-cover object-center")}
                  src="/images/advantages.webp"
                  width={3768}
                  height={360}
                  alt="Smotrow design banner"
                />
              </div>
            )}
          </div>
        )}
      </div>

      <footer className="container-full">
        <Support />
      </footer>
    </section>
  );
};
