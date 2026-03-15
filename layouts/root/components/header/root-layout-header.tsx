"use client";

import { NextLink } from "@/i18n/routing";

import { Button } from "@/components";

import * as Components from "./components";
import * as Icons from "./icons";

import { useRootLayoutHeader } from "./root-layout-header.hook";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import { clsx } from "clsx";

export type RootLayoutHeaderProps = {
  className?: string;
};

export const RootLayoutHeader: React.FC<RootLayoutHeaderProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("layouts.root.header");

  const { onTriggerOverlay, modalContext } = useRootLayoutHeader();

  const pathname = usePathname();

  return (
    <header
      className={clsx(
        props.className,
        "container-full bg-background-secondary sticky top-0 z-9 flex h-17.5 items-center justify-between border-b border-[#F4F5FA] shadow-[0_1px_2px_rgba(0,0,0,0.02)]",
      )}
    >
      {/* Action */}
      <button
        className={clsx(
          "-ml-1.5 flex h-6 w-6 cursor-pointer items-center justify-center transition-opacity",
          "xl:hidden",
          "hover:opacity-60",
        )}
        // onClick={() => onTriggerOverfay(isMobile ? "menu" : "heritage")}
      >
        <Icons.Menu />
      </button>

      <ul
        className={clsx(
          "ml-[-12.5px] hidden",
          "2xl:flex",
          "2xl:mr-auto 2xl:flex",
        )}
      >
        <Components.Item
          withArrow
          active={modalContext?.overlay === "businesses"}
          title={t("businesses")}
          onClick={() => onTriggerOverlay("businesses")}
        />

        <Components.Item
          withArrow
          active={modalContext?.overlay === "private-clients"}
          title={t("private-clients")}
          onClick={() => onTriggerOverlay("private-clients")}
        />

        <Components.Item
          withArrow
          active={modalContext?.overlay === "investors"}
          title={t("investors")}
          onClick={() => onTriggerOverlay("investors")}
        />
      </ul>

      {/* Logo */}
      <div className={clsx("absolute left-1/2 mr-0 -translate-x-1/2")}>
        {pathname === "/" ? (
          <Icons.Logo />
        ) : (
          <NextLink
            className={clsx("transition-opacity", "hover:opacity-60")}
            href="/"
          >
            <Icons.Logo />
          </NextLink>
        )}
      </div>

      <ul className={clsx("mr-auto hidden", "xl:flex 2xl:mr-0 2xl:ml-auto")}>
        <Components.Item title={t("about")} href="/about-us" />

        <Components.Item title={t("case-studies")} href="/case-studies" />

        <Components.Item title={t("insights")} href="/insights" />

        <Components.Item title={t("contact")} href="/contact-us" />
      </ul>

      <Button
        className="ml-[27.5px]"
        size="small"
        animation="background"
        href={"/login"}
      >
        {t("log-in")}
      </Button>

      <Components.Trigger
        className={clsx(
          "absolute top-[100%] left-1/2 hidden -translate-x-1/2 transform",
          "2xl:flex",
        )}
        onClick={() => onTriggerOverlay("private-clients")}
      />
    </header>
  );
};

// sticky top-0 left-0 right-0
