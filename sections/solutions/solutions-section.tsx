import NextImage from "next/image";

import * as Components from "./components";

import { clsx } from "clsx";

export type SolutionsSectionProps = {
  className?: string;
};

export const SolutionsSection: React.FC<SolutionsSectionProps> = (
  props,
): React.JSX.Element => {
  return (
    <section
      className={clsx(
        props.className,
        "container-large bg-background-secondary rounded-2xl",
      )}
    >
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
          "group border-footer-border relative m-[35px] mt-0 overflow-hidden border-t border-[#F4F5F7] pt-[35px]",
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
    </section>
  );
};

const data = [
  {
    key: "individuals",
    title: "Solutions for individuals",
    description:
      "Personalized immigration support for individual needs, long-term goals, and personal circumstances.",
    href: "/",
  },
  {
    key: "businesses",
    title: "Solutions for businesses",
    description:
      "Strategic immigration advisory supporting companies with cross-border talent, compliance, and workforce.",
    href: "/",
  },
  {
    key: "investors",
    title: "Solutions for investors",
    description:
      "We support investors entering the Ukrainian market with structured legal guidance.",
    href: "/",
  },
];
