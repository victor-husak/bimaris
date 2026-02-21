import type { MouseEvent as ReactMouseEvent } from "react";

import { useCallback } from "react";

import { useRouter } from "nextjs-toploader/app";

import type { ButtonProps } from "./button";

export type UseButtonProps = {
  disabled?: ButtonProps["disabled"];
  href?: ButtonProps["href"];
  target?: ButtonProps["target"];
  onClick?: ButtonProps["onClick"];
};

const useButton = (props: UseButtonProps) => {
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

export { useButton };
