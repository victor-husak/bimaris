import { MarkdownLi } from "../li";
import { clsx } from "clsx";
import React from "react";

export type MarkdownUlProps = {
  className?: string;
  children: React.ReactNode;
};

export const MarkdownUl: React.FC<MarkdownUlProps> = (
  props,
): React.JSX.Element => {
  // Обрабатываем дочерние элементы и оборачиваем li в кастомный компонент
  const children = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child) && child.type === "li") {
      const liProps = child.props as {
        className?: string;
        children?: React.ReactNode;
      };
      return (
        <MarkdownLi className={liProps.className}>
          {liProps.children}
        </MarkdownLi>
      );
    }
    return child;
  });

  return <ul className={clsx(props.className)}>{children}</ul>;
};
