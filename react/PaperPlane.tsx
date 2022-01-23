import * as React from "react";
import { SVGProps } from "react";

const SvgPaperPlane = (props: SVGProps<SVGSVGElement>) => (
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
      id="paper_plane"
      x={0.123}
      y={0.122}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M53.1,9.039l-0.004,0.034c-0.999,8.715 -3.845,22.211 -6.551,31.256l-0.038,0.122l-0.004,0.011c-0.535,1.179 -1.89,1.924 -3.172,1.692l-7.371,-1.331c-1.384,-0.25 -3.196,0.459 -4.042,1.577l-5.943,7.844c-1.418,1.872 -3.153,1.579 -3.877,-0.664l-3.096,-9.586c-0.432,-1.338 -1.914,-2.614 -3.294,-2.848l-8.196,-1.392c-2.781,-0.473 -3.19,-2.21 -0.924,-3.874l8.382,-6.155c6.441,-4.729 17.623,-11.116 24.962,-14.259l10.423,-4.464c1.73,-0.741 2.959,0.169 2.745,2.037Zm-10.884,6.146l-2.208,1.626c-4.542,3.346 -11.095,9.611 -14.644,14.004l-3.74,4.63l2.125,8.195c0.471,1.819 1.035,1.78 1.259,-0.087l0.668,-5.572c0.112,-0.931 0.653,-2.308 1.203,-3.063c-0,-0 4.694,-6.546 7.391,-9.461c5.713,-6.173 8.972,-9.054 8.972,-9.054c4.98,-4.758 4.523,-5.306 -1.026,-1.218Z"
      fill={props.color}
    />
  </svg>
);

export default SvgPaperPlane;
