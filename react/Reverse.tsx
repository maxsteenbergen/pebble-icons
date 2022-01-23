import * as React from "react";
import { SVGProps } from "react";

const SvgReverse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 58 58"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
    {...props}
  >
    <rect
      id="reverse"
      x={0.2}
      y={0.12}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M44.931,15.404l3.399,-1.094c2.562,-0.824 4.205,0.579 3.653,3.141l-0.216,1.003c-0.633,2.936 -1.082,6.778 -1.082,10.62c-0,3.843 0.449,7.686 1.082,10.619l0.216,1.003c0.552,2.562 -1.085,3.968 -3.657,3.141l-3.374,-1.085c-3.683,-1.184 -11.409,-6.231 -11.409,-6.231c-1.399,-0.887 -2.347,-0.275 -2.099,1.362c-0,-0 0.018,0.395 0.323,1.81l0.216,1.003c0.552,2.562 -1.085,3.968 -3.657,3.141l-3.374,-1.085c-3.683,-1.184 -9.097,-4.049 -12.11,-6.404l-4.948,-3.867c-2.406,-1.881 -2.405,-4.935 0.004,-6.82l4.932,-3.856c3.005,-2.35 8.426,-5.218 12.101,-6.401l3.399,-1.094c2.562,-0.824 4.205,0.579 3.653,3.141l-0.216,1.003c-0.305,1.415 -0.323,1.809 -0.323,1.809c-0.24,1.638 0.693,2.245 2.096,1.363c0,-0 7.716,-5.039 11.391,-6.222Z"
      fill={props.color}
    />
  </svg>
);

export default SvgReverse;
