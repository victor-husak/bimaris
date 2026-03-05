"use client";

import { Markdown, Alert } from "@/components";

import { clsx } from "clsx";

import { Children } from "react";

import { generateHeadingId } from "@/utils/generate-heading-id";

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
        // h2: {
        //   component: ({ children, ...props }) => {
        //     console.log("children", children);
        //     const id = generateHeadingId(children.at(0));
        //     return (
        //       <h2 id={id} {...props}>
        //         {children}
        //       </h2>
        //     );
        //   },
        // },
      }}
    />
  );
};
