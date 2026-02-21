import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} {...props}>
    <path
      fill="#fff"
      d="M8.933 9.817 6.991 7.883a4.376 4.376 0 0 1-5.71-6.6A4.376 4.376 0 0 1 7.877 7l1.941 1.933a.626.626 0 0 1-.885.885ZM1.969 1.969a3.4 3.4 0 1 0 2.406-1 3.381 3.381 0 0 0-2.406 1Z"
    />
  </svg>
);
export default SvgComponent;
