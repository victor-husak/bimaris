import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={7} height={7} {...props}>
    <path
      fill="#5d5d90"
      d="M2.838 6.277 5.083 4 0 4.008V2.992h5.075L2.838.723 3.55 0 7 3.5 3.55 7Z"
    />
  </svg>
);
export default SvgComponent;
