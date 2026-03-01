import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={12} {...props}>
    <g fill="#fff">
      <path d="M5 0h.073a.613.613 0 0 1 .547.526V3.09A1.226 1.226 0 0 0 6.777 4.2H9.45a.613.613 0 0 1 .55.53V10.2A1.833 1.833 0 0 1 8.235 12h-6.36A1.844 1.844 0 0 1 0 10.305V1.8A1.833 1.833 0 0 1 1.765 0H5Z" />
      <path d="M9.375 3h-2.5V.6Z" />
    </g>
  </svg>
);
export default SvgComponent;
