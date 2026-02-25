import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={17} height={16} {...props}>
    <path
      fill="#fff"
      d="M17 6.115h-6.492L8.5 0 6.492 6.115 0 6.109l5.257 3.782L3.246 16 8.5 12.223 13.754 16l-2.005-6.109Z"
    />
    <path fill="#a0a0a0" d="m12.203 11.274-.451-1.383-3.246 2.332Z" />
  </svg>
);
export default SvgComponent;
