import * as React from "react";
import { SVGProps } from "react";

const SvgChatOval = (props: SVGProps<SVGSVGElement>) => (
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
      id="chat_oval"
      x={0.156}
      y={0.107}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M29.12,9.009c14.004,0 25.356,8.145 25.356,18.191c0,10.046 -11.352,18.19 -25.356,18.19c-1.668,0 -3.299,-0.115 -4.878,-0.336c-5.306,4.609 -11.381,3.98 -11.381,3.98c-2.749,0.124 -3.085,-0.962 -1.008,-2.777c-0,0 5.181,-1.747 -0.407,-5.958c-0.166,-0.125 -0.306,-0.243 -0.42,-0.356c-4.492,-3.282 -7.262,-7.78 -7.262,-12.743c-0,-10.046 11.352,-18.191 25.356,-18.191Zm-0.5,14.871c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5Zm-10,0c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5Zm20,0c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5Z"
      fill={props.color}
    />
  </svg>
);

export default SvgChatOval;
