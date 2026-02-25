import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={11} {...props}>
    <path
      fill="#fff"
      d="M5.448 1.3a.6.6 0 0 1 1.1 0l.954 2.251a.6.6 0 0 0 .51.364l2.475.176a.6.6 0 0 1 .337 1.064l-1.858 1.52a.6.6 0 0 0-.2.613l.586 2.3a.6.6 0 0 1-.889.663L6.308 8.97a.6.6 0 0 0-.615 0l-2.154 1.286a.6.6 0 0 1-.889-.663l.586-2.3a.6.6 0 0 0-.2-.613L1.173 5.158a.6.6 0 0 1 .337-1.064l2.475-.176a.6.6 0 0 0 .51-.364Z"
    />
  </svg>
);
export default SvgComponent;
