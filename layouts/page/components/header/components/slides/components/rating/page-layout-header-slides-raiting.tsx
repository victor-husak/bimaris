import NextLink from "next/link";

import * as Icons from "./icons";

import { ArrowRightIcon } from "@/icons";

import { clsx } from "clsx";

export type PageLayoutHeaderSlidesRaitingProps = {
  className?: string;
};

export const PageLayoutHeaderSlidesRaiting: React.FC<
  PageLayoutHeaderSlidesRaitingProps
> = (props): React.JSX.Element => {
  return (
    <div className={clsx(props.className, "flex items-center gap-1.5")}>
      <Icons.Rating />

      <p className="text-[13px]/[17px] text-white/60">
        5.0 rating on{" "}
        <NextLink
          href="https://www.trustpilot.com"
          className={clsx("link-with-arrow transition-all", "hover:opacity-80")}
          target="_blank"
          // ref="nofollow noopener noreferrer"
        >
          <span className="link-dashed text-white [--dashed-url:url(/images/underline-white.svg)]">
            Trustpilot
          </span>

          <ArrowRightIcon className="mt-px inline-block" />
        </NextLink>
      </p>
    </div>
  );
};
