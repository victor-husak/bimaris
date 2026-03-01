import MarkdownJSX, { type MarkdownToJSX } from "markdown-to-jsx";

import * as Components from "./components";

import { clsx } from "clsx";

export type MarkdownProps = {
  className?: string;
  content: string;
  overrides?: MarkdownToJSX.Overrides;
};

export const Markdown: React.FC<MarkdownProps> = (props): React.JSX.Element => {
  return (
    <MarkdownJSX
      className={clsx(props.className, "markdown")}
      options={{
        forceBlock: true,
        forceWrapper: true,
        overrides: {
          a: {
            component: Components.Link,
          },
          li: {
            component: Components.Li,
          },
          ...props.overrides,
        },
      }}
    >
      {props.content}
    </MarkdownJSX>
  );
};
