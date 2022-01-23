import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
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
      id="arrow_up_right"
      x={0.093}
      y={0.093}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M43.77,12.402c1.127,-0.046 2.002,0.834 1.956,1.946l-0.131,3.205c-0.231,5.613 -2.553,14.116 -5.181,18.979l-0.586,1.085c-0.79,1.462 -2.063,1.413 -2.844,-0.108l-0.157,-0.306c-0.781,-1.521 -2.75,-2.51 -4.394,-2.21l0.391,-0.072c-0.552,0.101 -1.376,0.414 -1.851,0.705l-14.251,8.748c-4.242,2.604 -5.573,1.279 -2.967,-2.967l8.747,-14.251c0.289,-0.471 0.576,-1.302 0.641,-1.849l-0.027,0.229c0.197,-1.672 -0.888,-3.643 -2.414,-4.4c-1.596,-0.791 -1.652,-2.044 -0.182,-2.836l1.105,-0.596c4.875,-2.629 13.372,-4.944 18.985,-5.173l3.16,-0.129Z"
      fill={props.color}
    />
  </svg>
);

export default SvgArrowUpRight;
