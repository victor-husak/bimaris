import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={1} height={200} {...props}>
    <path
      fill="none"
      stroke="#C1C7D0"
      strokeDasharray="0 5"
      strokeLinecap="round"
      d="M.5.5v199"
    />
  </svg>
);
export default SvgComponent;
