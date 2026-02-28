import NextImage from "next/image";

import { clsx } from "clsx";

export type SingleLayoutProps = {
  className?: string;
  AsideComponent: React.JSX.Element;
  ContentComponent: React.JSX.Element;
};

export const SingleLayout: React.FC<SingleLayoutProps> = (
  props,
): React.JSX.Element => {
  return (
    <section className="pb-25">
      {/* Content */}
      <div
        className={clsx(props.className, "container-full flex gap-x-20 pt-20")}
      >
        {/* Aside */}
        {props.AsideComponent}

        {/* Content */}
        {props.ContentComponent}
      </div>

      <div className="container-full section-gradient">
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
      </div>
    </section>
  );
};
