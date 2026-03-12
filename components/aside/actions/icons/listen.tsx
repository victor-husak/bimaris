import type { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={11} {...props}>
    <g
      fill="none"
      stroke="#33383c"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.075 1.5a6.326 6.326 0 0 1 0 8" />
      <path d="M9.45 2.55a4.669 4.669 0 0 1 0 5.9" />
      <path d="M7.799 3.525a3.136 3.136 0 0 1 0 3.95" />
      <path d="M6.175 4.574a1.479 1.479 0 0 1 0 1.85" />
      <path d="M8 1.143a5 5 0 1 0 0 8.714" />
    </g>
  </svg>
);
export default SvgComponent;
