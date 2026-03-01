"use client";

import { Markdown, Alert } from "@/components";

import { clsx } from "clsx";

export type SingleLayoutContentProps = {
  className?: string;
  content: string;
};

export const SingleLayoutContent: React.FC<SingleLayoutContentProps> = (
  props,
): React.JSX.Element => {
  return (
    <Markdown
      className={clsx(props.className, "markdown flex-1")}
      content={props.content}
      overrides={{
        Alert: {
          component: Alert,
        },
      }}
    />
  );
};
