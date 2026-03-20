import { useState, useRef, useCallback } from "react";

import { useDidMountEffect } from "@/hooks";

import type { FiltersCheckboxProps } from "./filters-checkbox";

export const useFiltersCheckbox = (props: FiltersCheckboxProps) => {
  const containerNodeRef = useRef<HTMLDivElement | null>(null);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  const [active, setActive] = useState(false);

  const onTrigger = useCallback(() => {
    if (!props.disabled) setActive(!active);
  }, [active, props.disabled]);

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

  return { containerNodeRef, nodeRef, active, onTrigger };
};
