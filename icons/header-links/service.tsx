import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} {...props}>
    <g fill="#fff">
      <path d="M6 8.334H2.028a2.028 2.028 0 1 1 0-4.056h.306a.5.5 0 0 1 0 1h-.306a1.028 1.028 0 1 0 0 2.056H6a.5.5 0 0 1 0 1Z" />
      <path d="M6.306 12a2.03 2.03 0 0 1-2.028-2.028v-.306a.5.5 0 0 1 1 0v.306a1.028 1.028 0 1 0 2.056 0V6a.5.5 0 0 1 1 0v3.972A2.03 2.03 0 0 1 6.306 12Z" />
      <path d="M9.972 7.723h-.306a.5.5 0 0 1 0-1h.306a1.028 1.028 0 1 0 0-2.056H6a.5.5 0 0 1 0-1h3.972a2.028 2.028 0 1 1 0 4.056Z" />
      <path d="M4.167 6.5a.5.5 0 0 1-.5-.5V2.028a2.028 2.028 0 1 1 4.056 0v.306a.5.5 0 1 1-1 0v-.306a1.028 1.028 0 1 0-2.056 0V6a.5.5 0 0 1-.5.5Z" />
    </g>
  </svg>
);
export default SvgComponent;
