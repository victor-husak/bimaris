import type { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13.204}
    height={13.187}
    {...props}
  >
    <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.037 5.847a2 2 0 1 0 2-1.948 1.975 1.975 0 0 0-2 1.948" />
      <path d="M5.937 12.652a1.344 1.344 0 0 1-.842-.377L2.265 9.52a5.094 5.094 0 0 1-.6-6.653 5.419 5.419 0 0 1 6.623-1.728 5.154 5.154 0 0 1 2.9 6.053" />
      <path d="m11.37 12.343 1.333-1.3-1.333-1.3" />
      <path d="m9.37 9.743-1.333 1.3 1.333 1.3" />
    </g>
  </svg>
);
export default SvgComponent;
