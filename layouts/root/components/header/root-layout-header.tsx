"use client";

import NextLink from "next/link";

import { Button } from "@/components";

import * as Components from "./components";
import * as Icons from "./icons";

import { usePathname } from "next/navigation";

import { clsx } from "clsx";

export type RootLayoutHeaderProps = {
  className?: string;
};

export const RootLayoutHeader: React.FC<RootLayoutHeaderProps> = (
  props,
): React.JSX.Element => {
  const pathname = usePathname();

  return (
    <header
      className={clsx(
        props.className,
        "container-full bg-background-secondary sticky top-0 z-9 flex h-17.5 items-center shadow-[0_1px_2px_rgba(0,0,0,0.02)]",
      )}
    >
      <ul className="ml-[-12.5px] flex">
        <Components.Item withArrow title="Businesses" />

        <Components.Item withArrow title="Private clients" />

        <Components.Item withArrow title="Investors" />
      </ul>

      {/* Logo */}
      <div className="absolute left-1/2 -translate-x-1/2">
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

      <ul className="ml-auto flex">
        <Components.Item title="Businesses" />

        <Components.Item title="Private clients" />

        <Components.Item title="Investors" />
      </ul>

      <Button className="ml-[27.5px]" size="small" animation="scale" href={"/"}>
        Log in
      </Button>

      <Components.Trigger className="absolute top-[100%] left-1/2 -translate-x-1/2 transform" />
    </header>
  );
};

// sticky top-0 left-0 right-0
