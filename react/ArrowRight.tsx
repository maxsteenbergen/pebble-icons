import * as React from "react";
import { SVGProps } from "react";

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      id="arrow_right"
      x={0.194}
      y={0.101}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M51.539,27.517c0.829,0.764 0.825,2.005 0.007,2.759l-2.36,2.173c-4.131,3.806 -11.786,8.176 -17.083,9.757l-1.182,0.353c-1.591,0.475 -2.457,-0.46 -1.934,-2.088l0.105,-0.328c0.523,-1.627 -0.17,-3.719 -1.544,-4.669l0.327,0.226c-0.461,-0.319 -1.265,-0.681 -1.807,-0.81l-16.262,-3.892c-4.842,-1.159 -4.846,-3.036 -0,-4.196l16.262,-3.892c0.536,-0.128 1.327,-0.513 1.76,-0.854l-0.181,0.143c1.321,-1.043 1.949,-3.204 1.404,-4.818c-0.569,-1.688 0.277,-2.614 1.877,-2.135l1.203,0.36c5.305,1.589 12.951,5.96 17.082,9.767l2.326,2.144Z"
      fill={props.color}
    />
  </svg>
);

export default SvgArrowRight;
