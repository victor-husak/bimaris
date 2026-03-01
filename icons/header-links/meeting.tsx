import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={7} {...props}>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M1.087 0A1.087 1.087 0 0 0 0 1.087v3.74a2.174 2.174 0 0 0 2.174 2.174h5.239A1.087 1.087 0 0 0 8.5 5.914v-3.74A2.174 2.174 0 0 0 6.326 0ZM12 .982v5.037a.5.5 0 0 1-.794.4L9.662 5.3a1 1 0 0 1-.412-.809V2.51a1 1 0 0 1 .412-.809L11.206.578A.5.5 0 0 1 12 .982Z"
    />
  </svg>
);
export default SvgComponent;
