import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} {...props}>
    <g fill="#9f9f9f" transform="translate(.001)">
      <path
        fillRule="evenodd"
        d="M8.992 3.785c2.538 0 3.006 1.659 3.006 3.818v4.4H9.492v-3.9c0-.929-.016-2.125-1.3-2.125-1.3-.001-1.5 1.007-1.5 2.058V12h-2.5V3.985h2.4v1.1h.035a2.635 2.635 0 0 1 2.365-1.3Zm-6.379.2V12H.106V3.985Z"
      />
      <ellipse cx={1.349} cy={1.338} rx={1.349} ry={1.338} />
    </g>
  </svg>
);
export default SvgComponent;
