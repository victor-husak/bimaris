import type { MouseEvent as ReactMouseEvent } from "react";

import { useCallback } from "react";

import { useRouter } from "nextjs-toploader/app";

import type { CardActionProps } from "./card-action";

export const useCardAction = (props: CardActionProps) => {
  const router = useRouter();

  const onClick = useCallback(
    (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (!!props.disabled) {
        return;
      }

      if (props.href) {
        if (props.target === "_blank") {
          window.open(props.href as string, "_blank");
        } else {
          router.push(props.href as string);

          if (props.onClick) {
            props.onClick(event);
          }
        }
      } else if (props.onClick) {
        props.onClick(event);
      }
    },
    [props, router],
  );

  return { onClick };
};
