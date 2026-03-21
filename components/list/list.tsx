import { NextLink } from "@/i18n/routing";

import { Box } from "@/components/box";

import * as Icons from "./icons";

import { clsx } from "clsx";

export type ListProps = {
  className?: string;
  items: Array<{ title: string; href?: string; target?: string; rel?: string }>;
};

export const List: React.FC<ListProps> = (props): React.JSX.Element => {
  return (
    <ul className={clsx(props.className, "flex flex-col gap-2")}>
      {props.items.map((item, index) => (
        <li className="relative flex items-center gap-[15px]" key={index}>
          <Icons.Star />

          {index < props.items.length - 1 && (
            <div className="absolute -bottom-px left-[1.5px] flex h-1.5 w-1.5 -translate-x-1/2 translate-y-full items-center justify-center">
              <Icons.Texture />
            </div>
          )}

          <Box
            as={item.href ? NextLink : "span"}
            className={clsx(
              "link-dashed text-[13px]/[17px] tracking-[.032em] transition-all",
              { "hover:opacity-60": item.href },
            )}
            {...(item.href && {
              href: item.href,
              target: item.target,
              rel: item.rel,
            })}
          >
            {item.title}
          </Box>
        </li>
      ))}
    </ul>
  );
};
