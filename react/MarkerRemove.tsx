import * as React from "react";
import { SVGProps } from "react";

const SvgMarkerRemove = (props: SVGProps<SVGSVGElement>) => (
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
      id="marker_remove"
      x={0.16}
      y={0.12}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M29.16,7.96c8.837,0 16,7.163 16,16c0,13 -12,26 -16,26c-4,0 -16,-13 -16,-26c0,-8.837 7.163,-16 16,-16Zm0,4c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12Zm0,9c4,0 8,0.5 8,3c0,2.5 -4,3 -8,3l-0.261,-0.001c-3.911,-0.022 -7.739,-0.553 -7.739,-2.999c0,-2.5 4,-3 8,-3Z"
      fill={props.color}
    />
  </svg>
);

export default SvgMarkerRemove;
