import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={5} height={5} {...props}>
    <path
      fill={props.color || "#fff"}
      d="M4.964.036q.019 2.29.035 4.584a.01.01 0 0 1-.011.011l-.929-.006a.011.011 0 0 1-.011-.011L4.027 1.65a.005.005 0 0 0-.009 0L.672 4.996a.01.01 0 0 1-.015 0l-.328-.328-.328-.328a.01.01 0 0 1 0-.015L3.346.98a.005.005 0 0 0 0-.009L.382.951A.011.011 0 0 1 .371.94L.365.011A.01.01 0 0 1 .376 0Q2.67.015 4.96.033Z"
    />
  </svg>
);
export default SvgComponent;
