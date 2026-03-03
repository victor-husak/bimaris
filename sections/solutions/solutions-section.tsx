import NextImage from "next/image";

import { Support } from "@/ui/support";

import * as Components from "./components";

import { clsx } from "clsx";

export type SolutionsSectionProps = {
  className?: string;
  withBanner?: boolean;
  withSupport?: boolean;
  data: Array<{
    key: string;
    title: string;
    description: string;
    href: string;
  }>;
};

export const SolutionsSection: React.FC<SolutionsSectionProps> = (
  props,
): React.JSX.Element => {
  return (
    <section className={clsx(props.className)}>
      <div
        className={clsx("container-large bg-background-secondary rounded-2xl", {
          "pb-[35px]": props.withBanner,
        })}
      >
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
        {!!props.withBanner && (
          <div
            className={clsx(
              "group border-footer-border relative mx-[35px] overflow-hidden border-t border-[#F4F5F7] pt-[35px]",
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
                src="/images/solutions.webp"
                width={3768}
                height={360}
                objectFit="cover"
                alt="Smotrow design banner"
              />
            </div>
          </div>
        )}
      </div>

      {!!props.withSupport && (
        <footer className="container-full">
          <Support />
        </footer>
      )}
    </section>
  );
};
