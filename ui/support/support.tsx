import NextLink from "next/link";

import { ArrowRightIcon } from "@/icons";

import { clsx } from "clsx";

export type SupportProps = {
  className?: string;
};

export const Support: React.FC<SupportProps> = (props): React.JSX.Element => {
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
            "text-secondary link-with-arrow transition-all",
            "hover:opacity-70",
          )}
          href="/contact-us"
        >
          <span className="link-dashed [--dashed-url:url(/images/underline-second.svg)]">
            Read more
          </span>

          <ArrowRightIcon className="mt-[3px] [&>path]:stroke-[#5373DB]" />
        </NextLink>
      </p>

      <p className="text-[13px]/[17px] tracking-[.028em] text-[#818796]">
        Have questions.{" "}
        <NextLink
          className={clsx(
            "link-with-arrow text-secondary transition-all",
            "hover:opacity-70",
          )}
          href="/contact-us"
        >
          <span className="link-dashed [--dashed-url:url(/images/underline-second.svg)]">
            Contact us
          </span>

          <ArrowRightIcon className="mt-[3px] [&>path]:stroke-[#5373DB]" />
        </NextLink>
      </p>
    </footer>
  );
};
