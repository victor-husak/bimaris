import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={1} height={14} {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeDasharray="0 4"
      strokeLinecap="round"
      d="M.5.5v13"
    />
  </svg>
);
export default SvgComponent;
