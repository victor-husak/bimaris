// @ts-ignore
import MarkdownJSX from "markdown-to-jsx";

import * as Components from "./components";

import { clsx } from "clsx";

export type MarkdownProps = {
  className?: string;
  content: string;
  overrides?: any;
};

export const Markdown: React.FC<MarkdownProps> = (props): React.JSX.Element => {
  return (
    <MarkdownJSX
      id="markdown"
      className={clsx(props.className, "markdown")}
      options={{
        forceBlock: true,
        forceWrapper: true,
        overrides: {
          a: {
            component: Components.Link,
          },
          ul: {
            component: Components.Ul,
          },
          ...props.overrides,
        },
      }}
    >
      {props.content}
    </MarkdownJSX>
  );
};
