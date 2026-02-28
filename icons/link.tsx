import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} {...props}>
    <g fill={props.color || "#3B4552"} fillRule="evenodd">
      <path d="M8.727 12H1.909A1.911 1.911 0 0 1 0 10.091V3.273a1.911 1.911 0 0 1 1.909-1.909H6a.545.545 0 0 1 0 1.091H1.909a.819.819 0 0 0-.818.818v6.818a.819.819 0 0 0 .818.818h6.818a.819.819 0 0 0 .818-.818V6a.545.545 0 0 1 1.091 0v4.091A1.911 1.911 0 0 1 8.727 12Z" />
      <path d="M5.318 7.227a.545.545 0 0 1-.385-.927l6.14-6.14a.545.545 0 1 1 .771.771L5.708 7.067a.544.544 0 0 1-.39.16Z" />
      <path d="M11.455 4.5a.545.545 0 0 1-.545-.545V1.091H8.045a.545.545 0 0 1 0-1.091h3.409A.545.545 0 0 1 12 .545v3.41a.545.545 0 0 1-.545.545Z" />
    </g>
  </svg>
);
export default SvgComponent;
