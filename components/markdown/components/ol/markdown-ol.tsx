import { MarkdownLi } from "../li";
import { clsx } from "clsx";
import React from "react";

export type MarkdownOLProps = {
  className?: string;
  children: React.ReactNode;
};

export const MarkdownOL: React.FC<MarkdownOLProps> = (
  props,
): React.JSX.Element => {
  // Обрабатываем дочерние элементы и оборачиваем li в кастомный компонент
  const children = React.Children.map(props.children, (child, index) => {
    if (React.isValidElement(child) && child.type === "li") {
      const liProps = child.props as {
        className?: string;
        children?: React.ReactNode;
      };
      return (
        <MarkdownLi className={liProps.className} number={index + 1}>
          {liProps.children}
        </MarkdownLi>
      );
    }
    return child;
  });

  return <ol className={clsx(props.className)}>{children}</ol>;
};
