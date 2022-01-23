import * as React from "react";
import { SVGProps } from "react";

const SvgLeaf = (props: SVGProps<SVGSVGElement>) => (
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
      id="leaf"
      x={0.134}
      y={0.124}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M46.488,4.974c2.908,-0.254 4.984,1.993 4.629,4.885c-0,0 -1.118,29.12 -27.456,36.817c-7.612,0.932 -5.376,-5.495 -5.376,-5.495c7.488,-17.618 21.142,-25.106 21.583,-25.546c0.44,-0.441 1.762,-2.203 -0.881,-0.881c-3.983,1.991 -7.459,4.531 -10.477,7.346c-1.912,-1.124 2.286,-6.334 1.668,-6.025c-4.405,2.202 -4.405,7.928 -6.167,10.571c-0.097,0.19 -0.15,0.326 -0.164,0.414c-0.496,0.597 -0.977,1.202 -1.441,1.808c-2.952,-4.748 1.824,-10.118 1.131,-9.68c-5.906,3.73 -3.201,10.241 -4.099,13.915c-6.313,9.815 -8.64,19.09 -8.64,19.09c-0,-0 -2.203,2.202 -3.524,-0.881c-1.322,-3.083 1.762,-7.928 1.762,-9.25c-3.418,-36.316 35.034,-37.074 37.344,-37.088l0.108,0Z"
      fill={props.color}
    />
  </svg>
);

export default SvgLeaf;
