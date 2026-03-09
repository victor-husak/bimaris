"use client";

// @ts-ignore
import MarkdownJSX from "markdown-to-jsx";

import { clsx } from "clsx";

export type InformationSectionMarkdownProps = {
  className?: string;
  content: string;
};

export const InformationSectionMarkdown: React.FC<
  InformationSectionMarkdownProps
> = (props): React.JSX.Element => {
  return (
    <MarkdownJSX
      className={clsx(props.className, "markdown-info mt-auto text-[#8A91A2]")}
      options={{
        forceBlock: true,
        forceWrapper: true,
        overrides: {
          a: {
            component: "a",
            props: {
              className:
                "link-dashed [--dashed-url:url(/images/underline-second.svg)] leading-[1]",
              target: "_blank",
              // ref: "nofollow noopener noreferrer",
            },
          },
        },
      }}
    >
      {props.content}
    </MarkdownJSX>
  );
};
