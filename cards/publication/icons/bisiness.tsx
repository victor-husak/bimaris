import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} {...props}>
    <g fill="#2d3a52">
      <path d="M4.646 7.5a.5.5 0 0 0 .5.5h4.353a.5.5 0 1 0 0-1H5.146a.5.5 0 0 0-.5.5Z" />
      <path d="M7 5.5a.5.5 0 0 0 .146.354L8.793 7.5 7.146 9.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.707l-2-2A.5.5 0 0 0 7 5.5Z" />
      <path d="M3.5 2.5a.5.5 0 0 0 .854.354L6 1.207l1.646 1.647a.5.5 0 0 0 .707-.707l-2-2a.5.5 0 0 0-.707 0l-2 2A.5.5 0 0 0 3.5 2.5Z" />
      <path d="M0 7.5a.5.5 0 0 0 .5.5 6.007 6.007 0 0 0 6-6V.5a.5.5 0 0 0-1 0V2a5.006 5.006 0 0 1-5 5 .5.5 0 0 0-.5.5Z" />
    </g>
  </svg>
);
export default SvgComponent;
