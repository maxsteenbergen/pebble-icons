import * as React from "react";
import { SVGProps } from "react";

const SvgChatOvalOk = (props: SVGProps<SVGSVGElement>) => (
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
      id="chat_oval_ok"
      x={0.156}
      y={0.107}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M29,9.09c14.004,-0 25.356,8.144 25.356,18.19c0,10.046 -11.352,18.19 -25.356,18.19c-1.668,0 -3.299,-0.115 -4.878,-0.336c-5.306,4.609 -11.381,3.98 -11.381,3.98c-2.749,0.124 -3.085,-0.962 -1.008,-2.776c-0,-0 5.181,-1.748 -0.407,-5.959c-0.166,-0.125 -0.306,-0.243 -0.42,-0.356c-4.492,-3.282 -7.262,-7.78 -7.262,-12.743c-0,-10.046 11.352,-18.19 25.356,-18.19Zm8.46,11.481c-0.976,-0.976 -2.565,-0.971 -3.531,-0.004l-6.717,6.716c-0.393,0.393 -1.027,0.397 -1.416,0.009l-1.775,-1.776c-0.974,-0.974 -2.548,-0.978 -3.531,0.005c-0.977,0.976 -0.971,2.565 -0.005,3.531l4.252,4.251c0.486,0.486 1.122,0.731 1.768,0.727c0.639,-0.001 1.276,-0.244 1.758,-0.727l9.202,-9.201c0.973,-0.974 0.978,-2.548 -0.005,-3.531Z"
      fill={props.color}
    />
  </svg>
);

export default SvgChatOvalOk;
