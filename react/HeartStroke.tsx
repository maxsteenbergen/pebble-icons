import * as React from "react";
import { SVGProps } from "react";

const SvgHeartStroke = (props: SVGProps<SVGSVGElement>) => (
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
      id="heart_stroke"
      x={0.087}
      y={0.102}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M29.092,11.408c0,-0 10.435,-9.908 20.266,-0.675c14.597,13.71 -15.281,40.589 -20.385,40.428c-5.104,-0.16 -34.9,-26.718 -20.303,-40.428c9.634,-9.048 19.999,0.286 20.41,0.663l0.012,0.012Zm-17.061,2.215c-11.201,10.006 12.678,31.783 16.936,31.91c4.257,0.126 28.396,-23.013 17.003,-31.91c-8.733,-6.819 -17.003,4.463 -17.003,4.463c-0,-0 -8.757,-11.767 -16.936,-4.463Z"
      fill={props.color}
    />
  </svg>
);

export default SvgHeartStroke;
