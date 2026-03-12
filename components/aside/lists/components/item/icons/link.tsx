import type { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={11} height={11.435} {...props}>
    <g
      fill="none"
      stroke="#6b7586"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3.625 7.595 3.75-3.75" />
      <path d="m4.875 1.97.289-.335a3.125 3.125 0 1 1 4.42 4.42l-.334.29" />
      <path d="m6.125 9.47-.248.334a3.168 3.168 0 0 1-4.455 0 3.108 3.108 0 0 1 0-4.42l.328-.289" />
    </g>
  </svg>
);
export default SvgComponent;
