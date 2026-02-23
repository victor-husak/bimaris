import { useMemo, useState, useRef, useCallback } from "react";

import { useDidMountEffect } from "@/hooks";

import type { FormSelectProps } from "./form-select";

export const useFormSelect = (props: FormSelectProps) => {
  const containerNodeRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [active, setActive] = useState(false);
  const [search, setSearch] = useState("");

  const options = useMemo(() => {
    if (props.withSearch && search) {
      return props.options?.filter((item) => {
        return item.label.toLowerCase().includes(search.trim().toLowerCase());
      });
    }

    return props.options;
  }, [props.withSearch, search, props.options]);

  const onTrigger = useCallback(() => {
    if (!props.disabled) setActive(!active);
  }, [active, props.disabled]);

  useDidMountEffect(() => {
    if (active) {
      if (search) {
        setSearch("");
      }

      if (inputRef.current) {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 300);
      }

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

  const onChangeSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    [],
  );

  return {
    options,
    containerNodeRef,
    inputRef,
    nodeRef,
    overlayRef,
    active,
    search,
    onTrigger,
    onChange,
    onChangeSearch,
  };
};
