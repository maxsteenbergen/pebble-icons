import * as React from "react";
import { SVGProps } from "react";

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
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
      id="check"
      x={0.04}
      y={0.046}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M40.715,13.522c2.308,-2.308 6.156,-2.269 8.552,0.127c2.413,2.413 2.453,6.225 0.127,8.552l-21.981,21.98c-1.152,1.152 -2.688,1.72 -4.236,1.701c-1.564,-0.01 -3.111,-0.623 -4.305,-1.817l-10.435,-10.435c-2.372,-2.371 -2.438,-6.219 -0.105,-8.551c2.348,-2.349 6.16,-2.285 8.551,0.105l5.375,5.376c0.392,0.392 1.034,0.386 1.417,0.003l17.04,-17.041Z"
      fill={props.color}
    />
  </svg>
);

export default SvgCheck;
