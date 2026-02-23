import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={7} height={4} {...props}>
    <path
      fill="#33383c"
      d="M.001.606.627 0 3.5 2.787 6.375 0l.626.606L3.501 4Z"
    />
  </svg>
);
export default SvgComponent;
