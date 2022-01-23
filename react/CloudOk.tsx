import * as React from "react";
import { SVGProps } from "react";

const SvgCloudOk = (props: SVGProps<SVGSVGElement>) => (
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
      id="cloud_ok"
      x={0.116}
      y={0.021}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M25.8,11c6.242,0 11.476,4.8 12.865,10.787c0.77,-0.494 1.675,-0.801 2.654,-0.852c3.003,-0.158 5.565,2.149 5.722,5.152c0.035,0.668 -0.052,1.315 -0.241,1.918c3.594,1.014 6.351,4.318 6.228,8.236c-0.228,7.259 -9.228,11.259 -32.228,10.759c-11.995,-0.261 -15.5,-6.5 -16,-12.315c-0,-4.782 3.319,-8.789 7.779,-9.842c0.062,-7.464 5.956,-13.843 13.221,-13.843Zm8.46,13.611c-0.976,-0.976 -2.565,-0.971 -3.531,-0.005l-6.717,6.717c-0.393,0.393 -1.027,0.397 -1.416,0.009l-1.775,-1.776c-0.974,-0.974 -2.548,-0.978 -3.531,0.005c-0.977,0.976 -0.971,2.565 -0.005,3.531l4.252,4.251c0.486,0.486 1.122,0.731 1.767,0.727c0.639,-0.001 1.277,-0.244 1.759,-0.727l9.202,-9.201c0.973,-0.974 0.978,-2.548 -0.005,-3.531Z"
      fill={props.color}
    />
  </svg>
);

export default SvgCloudOk;
