import { useState, useRef, useCallback } from "react";

import { useDidMountEffect } from "@/hooks";

import type { FormDropdownProps } from "./form-dropdown";

export const useFormDropdown = (props: FormDropdownProps) => {
  const containerNodeRef = useRef<HTMLDivElement | null>(null);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  const [active, setActive] = useState(false);

  const onTrigger = useCallback(() => {
    setActive(!active);
  }, [active]);

  useDidMountEffect(() => {
    if (active) {
      const handleClickOutside = (event: MouseEvent | TouchEvent) => {
        if (
          containerNodeRef.current &&
          !containerNodeRef.current.contains(event.target as Node)
        ) {
          setActive(!active);
        }
      };

      document.addEventListener("click", handleClickOutside, true);

      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    }
  }, [active]);

  const onChange = useCallback(
    (value: Option) => {
      props.onChange(value);
      setActive(false);
    },
    [props.onChange],
  );

  return {
    containerNodeRef,
    nodeRef,
    active,
    onTrigger,
    onChange,
  };
};
