"use client";

import { clsx } from "clsx";

import { ArrowRightIcon } from "@/icons";

import { Item } from "../index";

import { useRootLayoutToplineLang } from "./root-layout-topline-lang.hook";

export type RootLayoutToplineLangProps = {
  className?: string;
};

export const RootLayoutToplineLang: React.FC<RootLayoutToplineLangProps> = (
  props,
): React.JSX.Element => {
  const { langLabel, onTriggerLang } = useRootLayoutToplineLang();

  return (
    <Item
      className={clsx(props.className, "cursor-pointer")}
      onClick={onTriggerLang}
    >
      <span>{langLabel}</span>

      <ArrowRightIcon className="[&>path]:stroke-current-color ml-1.25 [&>path]:transition-all" />
    </Item>
  );
};
