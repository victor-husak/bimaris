import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={10} {...props}>
    <g fill="#fff">
      <path d="M12 2.209v5.916a1.844 1.844 0 0 1-1.694 1.872H1.8A1.833 1.833 0 0 1 0 8.235V2.209l5.667 3.936.07.041a.578.578 0 0 0 .527 0l.07-.041L12 2.209Z" />
      <path d="M10.2 0a1.784 1.784 0 0 1 1.533.892L6 4.873.267.892A1.79 1.79 0 0 1 1.679 0H1.8Z" />
    </g>
  </svg>
);
export default SvgComponent;
