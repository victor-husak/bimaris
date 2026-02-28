"use client";

import Markdown from "markdown-to-jsx";

import * as Components from "./components";

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
      options={{
        forceBlock: true,
        forceWrapper: true,
        overrides: {
          a: {
            component: Components.Link,
          },
        },
      }}
    >
      {props.content}
    </Markdown>
  );
};
