import * as React from "react";
import { SVGProps } from "react";

const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
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
      id="heart"
      x={0.087}
      y={0.102}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M49.358,10.733c-9.831,-9.233 -20.266,0.675 -20.266,0.675c0,-0 -10.591,-9.908 -20.422,-0.675c-14.597,13.71 15.199,40.268 20.303,40.428c5.104,0.161 34.982,-26.718 20.385,-40.428Z"
      fill={props.color}
    />
  </svg>
);

export default SvgHeart;
