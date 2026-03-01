"use client";

import { ArrowRightIcon } from "@/icons";

import { clsx } from "clsx";

import { useButton } from "./button.hook";

import type { LinkProps } from "next/link";

export type ButtonProps = {
  className?: string;
  title?: string;
  rounded?: boolean;
  disabled?: boolean;
  href?: LinkProps["href"];
  target?: string;
  size?: "small" | "base" | "medium" | "large";
  variant?: "base" | "second" | "white" | "blur";
  animation?: "base" | "none" | "scale" | "darken" | "opacity" | "background";
  children?: React.ReactNode;
  IconComponent?: React.ReactNode;
  RightIconComponent?: React.ReactNode;
} & React.ComponentProps<"button">;

export const Button: React.FC<ButtonProps> = ({
  className,
  title,
  size = "base",
  variant = "base",
  animation = "base",
  rounded = false,
  disabled,
  href,
  target,
  children,
  IconComponent,
  RightIconComponent,
  ...props
}): React.JSX.Element => {
  const { onClick } = useButton({
    disabled,
    href,
    target,
    onClick: props.onClick,
  });

  return (
    <button
      {...props}
      className={clsx("button hoverable", className)}
      data-size={size}
      data-variant={variant}
      data-animation={animation}
      data-rounded={!!rounded}
      onClick={onClick}
    >
      {IconComponent}

      {title || children}

      {RightIconComponent}

      {!!href && <ArrowRightIcon className="[&>path]:stroke-current-color" />}
    </button>
  );
};
