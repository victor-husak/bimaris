import NextLink from "next/link";

import { ArrowRightIcon } from "@/icons";

import { clsx } from "clsx";

export type HomeDomainRoleFooterProps = {
  className?: string;
};

export const HomeDomainRoleFooter: React.FC<HomeDomainRoleFooterProps> = (
  props,
): React.JSX.Element => {
  return (
    <footer
      className={clsx(
        props.className,
        "flex items-center justify-between border-b border-[#E7EBF2] py-[25px]",
      )}
    >
      <p className="text-[13px]/[17px] tracking-[.028em] text-[#818796]">
        Personalized immigration legal support for people and companies.{" "}
        <NextLink
          className={clsx(
            "text-secondary link-with-arrow link-dashed transition-all [--dashed-url:url(/images/underline.svg)]",
            "hover:opacity-80",
          )}
          href="/contact-us"
        >
          <span>Read more</span>

          <ArrowRightIcon className="mt-[3px] ml-[5px]! [&>path]:stroke-[#5373DB]" />
        </NextLink>
      </p>

      <p className="text-[13px]/[17px] -tracking-[.008em] text-[#818796]">
        Have questions.{" "}
        <NextLink className="text-secondary underline-hover" href="/contact-us">
          Contact us
        </NextLink>
      </p>
    </footer>
  );
};
