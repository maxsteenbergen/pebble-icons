import * as React from "react";
import { SVGProps } from "react";

const SvgSkipBackward = (props: SVGProps<SVGSVGElement>) => (
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
      id="skip_backward"
      x={0.165}
      y={0.12}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M48.09,14.31l-3.399,1.094c-3.675,1.183 -9.096,4.051 -12.101,6.401l-4.932,3.856c-2.409,1.885 -2.41,4.939 -0.004,6.82l4.948,3.867c3.013,2.355 8.427,5.22 12.11,6.404l3.374,1.085c2.572,0.827 4.209,-0.579 3.657,-3.141l-0.216,-1.003c-0.633,-2.933 -1.082,-6.776 -1.082,-10.619c-0,-3.842 0.449,-7.684 1.082,-10.62l0.216,-1.003c0.552,-2.562 -1.091,-3.965 -3.653,-3.141Zm-35.24,-0.236c-2.204,-0 -4.351,1.756 -4.784,3.921l-1.275,6.374c-0.521,2.604 -0.52,6.811 0,9.41l1.275,6.374c0.434,2.171 2.575,3.921 4.784,3.921l0.199,-0.005c2.099,-0.103 3.556,-1.835 3.273,-3.956l-0.839,-6.293c-0.348,-2.613 -0.35,-6.871 -0,-9.492l0.839,-6.293c0.291,-2.181 -1.263,-3.961 -3.472,-3.961Z"
      fill={props.color}
    />
  </svg>
);

export default SvgSkipBackward;
