import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} {...props}>
    <path
      fill="#fff"
      d="M7.5.67A5 5 0 1 1 0 5.162v-.324A5 5 0 0 1 7.5.67Zm-.647 2.976a.5.5 0 0 0-.66-.041l-.047.041L4.5 5.292l-.646-.646-.048-.046a.5.5 0 0 0-.7.7l.041.047 1 1 .047.041a.5.5 0 0 0 .613 0l.047-.041 2-2 .041-.047a.5.5 0 0 0-.042-.654Z"
    />
  </svg>
);
export default SvgComponent;
