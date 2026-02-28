import NextLink from "next/link";

import * as Icons from "./icons";

// import "./root-layout-footer-bottom.css";

import { clsx } from "clsx";

export type RootLayoutFooterBottomProps = {
  className?: string;
};

export const RootLayoutFooterBottom: React.FC<RootLayoutFooterBottomProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "flex items-center justify-between pt-5 pb-8 text-[14px]/[18px] tracking-[.012em] text-[#8D8D91]",
      )}
    >
      {/* copyright */}
      <p>© 2026 Bimaris Legal. All Rights Reserved</p>

      <div className="mx-[15px] h-2 w-px bg-[#2E2E2E]" />

      {/* menu */}
      <ul
        className={clsx(
          "flex items-center gap-5",
          "[&>li]:transition-colors [&>li]:hover:text-white",
        )}
      >
        <li>
          <NextLink href="/cookie-preferences">Cookie Preferences</NextLink>
        </li>

        <li>
          <NextLink href="/privacy-policy">Privacy Policy</NextLink>
        </li>
      </ul>

      {/* designed */}
      <div className="ml-auto flex gap-[11px] text-[#727272]">
        <span>Exclusively designed by</span>

        <NextLink
          href="https://smotrow.com/"
          target="_blank"
          className={clsx(
            "link-with-arrow text-white transition-colors",
            "hover:text-white/80",
            "[&>svg]:ml-[4px]!",
          )}
        >
          <span className="link-dashed">Smotrów Design</span>{" "}
          <Icons.Link color="#fff" />
        </NextLink>
      </div>
    </div>
  );
};
