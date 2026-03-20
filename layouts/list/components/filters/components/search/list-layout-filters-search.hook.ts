import { useState, useCallback } from "react";

import { useDebounce } from "use-debounce";

import { useDidMountEffect } from "@/hooks";

import type { ListLayoutFiltersSearchProps } from "./list-layout-filters-search";

export const useListLayoutFiltersSearch = (
  props: ListLayoutFiltersSearchProps,
) => {
  const [text, setText] = useState(props.value);

  const [value] = useDebounce(text, 500);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }, []);

  useDidMountEffect(() => {
    props.onSearch(value);
  }, [value]);

  return { text, onChange };
};
