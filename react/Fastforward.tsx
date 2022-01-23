import * as React from "react";
import { SVGProps } from "react";

const SvgFastforward = (props: SVGProps<SVGSVGElement>) => (
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
      id="fastforward"
      x={0.2}
      y={0.12}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M13.249,15.404l-3.399,-1.094c-2.561,-0.824 -4.205,0.579 -3.653,3.141l0.217,1.003c0.633,2.936 1.082,6.778 1.082,10.62c-0,3.843 -0.45,7.686 -1.082,10.619l-0.217,1.003c-0.552,2.562 1.085,3.968 3.657,3.141l3.374,-1.085c3.684,-1.184 11.409,-6.231 11.409,-6.231c1.4,-0.887 2.347,-0.275 2.099,1.362c0,-0 -0.017,0.395 -0.322,1.81l-0.217,1.003c-0.552,2.562 1.085,3.968 3.657,3.141l3.374,-1.085c3.684,-1.184 9.098,-4.049 12.11,-6.404l4.948,-3.867c2.407,-1.881 2.406,-4.935 -0.004,-6.82l-4.931,-3.856c-3.005,-2.35 -8.427,-5.218 -12.102,-6.401l-3.399,-1.094c-2.561,-0.824 -4.205,0.579 -3.653,3.141l0.217,1.003c0.305,1.415 0.322,1.809 0.322,1.809c0.24,1.638 -0.692,2.245 -2.096,1.363c0,-0 -7.716,-5.039 -11.391,-6.222Z"
      fill={props.color}
    />
  </svg>
);

export default SvgFastforward;
