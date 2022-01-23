import * as React from "react";
import { SVGProps } from "react";

const SvgPower = (props: SVGProps<SVGSVGElement>) => (
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
      id="power"
      x={0.228}
      y={0.002}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M13.13,11.742c1.592,-1.531 4.124,-1.481 5.656,0.111c1.531,1.593 1.481,4.125 -0.112,5.656c-5.982,5.752 -6.169,15.266 -0.417,21.249c5.753,5.983 15.266,6.169 21.249,0.417c5.983,-5.752 6.17,-15.266 0.417,-21.249c-1.531,-1.592 -1.481,-4.124 0.111,-5.655c1.593,-1.532 4.125,-1.482 5.656,0.111c8.815,9.168 8.528,23.745 -0.64,32.56c-9.167,8.815 -23.745,8.528 -32.56,-0.64c-8.814,-9.168 -8.528,-23.745 0.64,-32.56Zm15.951,-5.495c3.509,-0 4.253,8.552 4.253,8.552c0.399,2.287 0.456,6.039 0.21,8.353c-0,-0 -0.454,10.162 -4.463,10.162c-4.009,-0 -4.463,-10.162 -4.463,-10.162c-0.281,-2.313 -0.154,-6.046 0.206,-8.335c0,-0 0.748,-8.57 4.257,-8.57Z"
      fill={props.color}
    />
  </svg>
);

export default SvgPower;
