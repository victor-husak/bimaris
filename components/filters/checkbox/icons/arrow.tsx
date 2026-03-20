import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={4}
    viewBox="0 0 5.414 3.414"
    {...props}
  >
    <path
      fill="none"
      stroke="#3c3c3c"
      strokeLinecap="round"
      d="m4.707.708-2 2-2-2"
    />
  </svg>
);
export default SvgComponent;
