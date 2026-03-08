import { useRef } from "react";

import type { LoadingProps } from "./loading";

const useLoading = (props: LoadingProps) => {
  const nodeRef = useRef(null);

  return { nodeRef };
};

export default useLoading;
