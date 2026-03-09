declare module "markdown-to-jsx" {
  import { ComponentType, ReactNode } from "react";

  export interface MarkdownToJSX {
    options?: {
      overrides?: Record<string, ComponentType<any>>;
      [key: string]: any;
    };
  }

  const Markdown: ComponentType<{
    options?: MarkdownToJSX["options"];
    children?: ReactNode;
  }>;

  export default Markdown;
  export type { MarkdownToJSX };
}
