import * as React from "react";

const SvgMoon = (props) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 58 58"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    xmlns:serif="http://www.serif.com/"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
    {...props}
  >
    <rect
      id="moon"
      x={0.136}
      y={0.045}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M23.192,19.085c-0,8.359 6.776,15.136 15.136,15.136c3.855,-0 7.373,-1.441 10.045,-3.814c-0.733,9.948 -9.037,17.791 -19.173,17.791c-10.619,-0 -19.227,-8.608 -19.227,-19.227c0,-9.613 7.055,-17.578 16.269,-19.001c-1.915,2.536 -3.05,5.693 -3.05,9.115Z"
      fill={props.color}
    />
  </svg>
);

export default SvgMoon;
