import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={11.956} {...props}>
    <path
      fill="#9f9f9f"
      d="M12 6a6 6 0 0 0-6-6 6 6 0 0 0-6 6 6 6 0 0 0 4.551 5.823v-3.99H3.314V6h1.237v-.79c0-2.042.924-2.989 2.929-2.989a6.616 6.616 0 0 1 1.3.149v1.662a7.706 7.706 0 0 0-.693-.022c-.984 0-1.364.373-1.364 1.342V6h1.96l-.337 1.833H6.723v4.123A6 6 0 0 0 11.996 6"
    />
  </svg>
);
export default SvgComponent;
