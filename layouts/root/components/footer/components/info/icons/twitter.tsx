import * as React from 'react';
import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={11} height={11} {...props}>
    <path
      fill="#9f9f9f"
      d="M6.494 4.658 10.384 0h-.922L6.084 4.044 3.386 0H.275l4.08 6.116L.275 11h.922l3.566-4.271L7.613 11h3.112L6.493 4.658ZM5.231 6.169l-.413-.609L1.529.715h1.418l2.652 3.91.413.609 3.45 5.083H8.047Z"
    />
  </svg>
);
export default SvgComponent;
