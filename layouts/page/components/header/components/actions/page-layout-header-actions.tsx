import { ButtonIcon } from "@/components";

import * as Icons from "./icons";

import { clsx } from "clsx";

export type PageLayoutHeaderActionsProps = {
  className?: string;
};

export const PageLayoutHeaderActions: React.FC<PageLayoutHeaderActionsProps> = (
  props,
): React.JSX.Element => {
  return (
    <div className={clsx(props.className, "items flex gap-2")}>
      <ButtonIcon className="group">
        <Icons.Like
          className={clsx(
            "opacity-60 transition-all",
            "group-hover:opacity-100",
          )}
        />
      </ButtonIcon>

      <ButtonIcon className="group">
        <Icons.Linkedin
          className={clsx(
            "opacity-60 transition-all",
            "group-hover:opacity-100",
          )}
        />
      </ButtonIcon>
    </div>
  );
};
