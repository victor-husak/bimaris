import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={4.414}
    height={7.414}
    {...props}
  >
    <path
      fill="none"
      stroke="#2c2c2c"
      strokeLinecap="round"
      d="m.708.707 3 3-3 3"
    />
  </svg>
);
export default SvgComponent;
