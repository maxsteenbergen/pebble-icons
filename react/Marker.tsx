import * as React from "react";
import { SVGProps } from "react";

const SvgMarker = (props: SVGProps<SVGSVGElement>) => (
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
      id="marker"
      x={0.156}
      y={0.12}
      width={57.617}
      height={57.6}
      fill="none"
    />
    <path
      d="M29,7.96c8.837,0 16,7.163 16,16c-0,13 -12,26 -16,26c-4,0 -15.542,-13 -16,-26c-0.311,-8.824 7.163,-16 16,-16Zm-0,4c-6.627,0 -12,5.373 -12,12c-0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c-0,-6.627 -5.373,-12 -12,-12Z"
      fill={props.color}
    />
  </svg>
);

export default SvgMarker;
