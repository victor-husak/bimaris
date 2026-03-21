import { useState, useRef, useCallback, useMemo } from "react";

import { useDidMountEffect } from "@/hooks";

import type { FiltersCheckboxProps } from "./filters-checkbox";

export const useFiltersCheckbox = (props: FiltersCheckboxProps) => {
  const containerNodeRef = useRef<HTMLDivElement | null>(null);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  const [active, setActive] = useState(false);
  const [value, setValue] = useState<Array<Option>>(props.value || []);

  const activeItems = useMemo(() => {
    const res: Record<string, boolean> = {};

    value.forEach((item) => {
      res[item.value] = true;
    });

    return res;
  }, [value]);

  const renderValue = useMemo(() => {
    if (!props.value?.length) return null;

    return props.value.map((item) => item.label).join(", ");
  }, [props.value]);

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
    } else {
      props.onChange(value);
    }
  }, [active]);

  const onChange = useCallback((value: Option) => {
    setValue((prev) => {
      const isExist = prev.some((item) => item.value === value.value);

      if (isExist) {
        return prev.filter((item) => item.value !== value.value);
      } else {
        return [...prev, value];
      }
    });
  }, []);

  return {
    containerNodeRef,
    nodeRef,
    active,
    onTrigger,
    onChange,
    value,
    renderValue,
    activeItems,
  };
};
