import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={7} {...props}>
    <g fill="none" stroke="#33383C">
      <path d="M0 .5h12" />
      <path d="M0 6.5h12" />
    </g>
  </svg>
);
export default SvgComponent;
