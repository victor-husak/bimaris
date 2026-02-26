import NextLink from "next/link";

import { ArrowRightIcon } from "@/icons";

import * as Components from "./components";
import * as Icons from "./icons";

import { clsx } from "clsx";

export type RootLayoutToplineProps = {
  className?: string;
};

export const RootLayoutTopline: React.FC<RootLayoutToplineProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "container-full bg-background-secondary relative z-10 flex items-center justify-between border border-[#F4F5FA] pt-2.75 pb-3 text-[12px]/[15px] tracking-[.024em] text-[#8D98A8]",
      )}
    >
      <ul className="flex">
        <Components.Item>
          <NextLink href="tel:+380449953535">+380 44 995 35 35</NextLink>
        </Components.Item>

        <Components.Item>
          <NextLink href="mailto:office@smotrow.com">
            office@smotrow.com
          </NextLink>
        </Components.Item>
      </ul>

      {/* description */}
      <p className="absolute left-1/2 -translate-x-1/2 transform text-[12px]/[14px] tracking-[.024em]">
        Innovative immigration legal consultancy.{" "}
        <NextLink
          className={clsx(
            "group link-with-arrow text-secondary inline-flex items-center transition-opacity",
            "hover:opacity-80",
          )}
          href="/"
        >
          <span className="link-dashed [--dashed-url:url(/images/underline.svg)]">
            Explore company
          </span>

          <Icons.Arrow className="mt-[3px]" />

          {/* <PlusIcon
            className="transition-all group-hover:rotate-360"
            width={6}
            height={6}
            color={props.variant === "invert" ? "#fff" : "#33383C"}
          /> */}
        </NextLink>
      </p>

      <ul className="flex">
        <Components.Item>
          <NextLink href="tel:+380449953535">Baltics desk</NextLink>
        </Components.Item>

        <Components.Item>
          <NextLink href="mailto:office@smotrow.com">
            Schedule a meeting
          </NextLink>
        </Components.Item>

        <Components.Item>
          <NextLink href="mailto:office@smotrow.com">Sign in</NextLink>
        </Components.Item>

        <Components.Item className="cursor-pointer">
          <span>En</span>

          <ArrowRightIcon className="[&>path]:stroke-current-color ml-1.25 [&>path]:transition-all" />
        </Components.Item>
      </ul>
    </div>
  );
};
