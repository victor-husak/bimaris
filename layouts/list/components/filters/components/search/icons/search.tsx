import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} {...props}>
    <g fill="#868d9a">
      <path d="M4.444 0a4.444 4.444 0 0 1 3.143 7.587 4.444 4.444 0 0 1-6.285-6.285A4.415 4.415 0 0 1 4.444 0Zm0 7.9A3.457 3.457 0 1 0 2 6.889a3.434 3.434 0 0 0 2.444 1.012Z" />
      <path d="M9.444 9.999a.554.554 0 0 1-.393-.164l-1.99-1.99a.556.556 0 1 1 .786-.786l1.988 1.992a.556.556 0 0 1-.393.948Z" />
    </g>
  </svg>
);
export default SvgComponent;
