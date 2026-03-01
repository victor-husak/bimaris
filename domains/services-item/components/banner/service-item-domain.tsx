import NextImage from "next/image";

import { clsx } from "clsx";

export type ServiceItemDomainProps = {
  className?: string;
};

export const ServiceItemDomain: React.FC<ServiceItemDomainProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "group border-footer-border relative mt-0 overflow-hidden border-t border-[#F4F5F7] pt-[35px]",
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
  );
};
