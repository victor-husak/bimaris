import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={9.697}
    height={5.697}
    {...props}
  >
    <path
      fill="none"
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={1.2}
      d="m8.849.849-4 4-4-4"
    />
  </svg>
);
export default SvgComponent;
