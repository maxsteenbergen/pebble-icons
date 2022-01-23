import * as React from "react";
import { SVGProps } from "react";

const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
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
    <rect id="play" x={0.04} y={0.12} width={57.6} height={57.6} fill="none" />
    <path
      d="M35.111,21.805l4.931,3.856c2.41,1.885 2.411,4.939 0.004,6.82l-4.948,3.867c-3.012,2.355 -8.426,5.22 -12.11,6.404l-3.374,1.085c-2.572,0.827 -4.209,-0.579 -3.657,-3.141l0.217,-1.003c0.632,-2.933 1.082,-6.776 1.082,-10.619c-0,-3.842 -0.449,-7.684 -1.082,-10.62l-0.217,-1.003c-0.552,-2.562 1.092,-3.965 3.653,-3.141l3.399,1.094c3.675,1.183 9.097,4.051 12.102,6.401Z"
      fill={props.color}
    />
  </svg>
);

export default SvgPlay;
