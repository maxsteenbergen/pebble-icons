import * as React from "react";
import { SVGProps } from "react";

const SvgCloudError = (props: SVGProps<SVGSVGElement>) => (
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
      id="cloud_error"
      x={0.116}
      y={0.021}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M25.88,11c6.242,0 11.476,4.8 12.865,10.787c0.77,-0.494 1.675,-0.801 2.654,-0.852c3.003,-0.158 5.565,2.149 5.722,5.152c0.035,0.668 -0.052,1.315 -0.241,1.918c3.594,1.014 6.351,4.318 6.228,8.236c-0.228,7.259 -9.228,11.259 -32.228,10.759c-11.995,-0.261 -15.5,-6.5 -16,-12.315c0,-4.782 3.319,-8.789 7.779,-9.842c0.062,-7.464 5.956,-13.843 13.221,-13.843Zm7.232,14.697c-0.976,-0.977 -2.565,-0.971 -3.531,-0.005c-0.82,0.607 -1.992,1.666 -1.992,1.666c-0.417,0.367 -1.087,0.371 -1.506,0.013c-0,-0 -1.242,-1.082 -1.975,-1.608c-0.974,-0.974 -2.548,-0.978 -3.531,0.005c-0.977,0.976 -0.971,2.565 -0.005,3.531c0.607,0.82 1.666,1.992 1.666,1.992c0.367,0.417 0.371,1.087 0.013,1.506c-0,0 -1.082,1.242 -1.608,1.975c-0.973,0.974 -0.978,2.548 0.005,3.531c0.976,0.977 2.565,0.971 3.531,0.005c0.82,-0.607 1.992,-1.666 1.992,-1.666c0.417,-0.367 1.087,-0.371 1.506,-0.012c0,-0 1.242,1.081 1.975,1.607c0.974,0.973 2.548,0.978 3.531,-0.005c0.977,-0.976 0.971,-2.565 0.005,-3.531c-0.607,-0.82 -1.666,-1.992 -1.666,-1.992c-0.367,-0.417 -0.371,-1.087 -0.013,-1.506c0,-0 1.082,-1.242 1.608,-1.975c0.974,-0.974 0.978,-2.548 -0.005,-3.531Z"
      fill={props.color}
    />
  </svg>
);

export default SvgCloudError;
