import type { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={7.071}
    height={7.071}
    {...props}
  >
    <path
      fill="#fff"
      d="M3.536 7.02Q1.903 5.414.27 3.803a.01.01 0 0 1 0-.015l.661-.653a.011.011 0 0 1 .016 0l2.11 2.08a.005.005 0 0 0 .007-.005V.478a.01.01 0 0 1 .01-.011h.928a.01.01 0 0 1 .01.01v4.731a.005.005 0 0 0 .007.007l2.11-2.082a.011.011 0 0 1 .016 0l.66.652a.01.01 0 0 1 0 .016Q5.174 5.413 3.542 7.019Z"
      opacity={0.6}
    />
  </svg>
);
export default SvgComponent;
