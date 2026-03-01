import NextLink from "next/link";

import { LinkIcon } from "@/icons";

import { clsx } from "clsx";

import type { Url } from "next/dist/shared/lib/router/router";

export type MarkdownLinkProps = {
  className?: string;
  href: Url;
  children: React.ReactNode;
};

export const MarkdownLink: React.FC<MarkdownLinkProps> = ({
  children,
  ...props
}): React.JSX.Element => {
  return (
    <NextLink
      {...props}
      className={clsx(
        props.className,
        "text-secondary inline-flex items-center gap-1",
      )}
      target="_blank"
    >
      {children}

      <LinkIcon color="currentColor" />
    </NextLink>
  );
};
