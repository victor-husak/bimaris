import { useMemo } from "react";

import type { CaseStudiesDomainListProps } from "./case-studies-domain-list";

export const useCaseStudiesDomainList = (props: CaseStudiesDomainListProps) => {
  const searchKeys = useMemo(
    () => Object.values(props.searchParams || {}).toString(),
    [props.searchParams],
  );

  return { searchKeys };
};
