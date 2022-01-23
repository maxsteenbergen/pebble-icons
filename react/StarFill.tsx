import * as React from "react";
import { SVGProps } from "react";

const SvgStarFill = (props: SVGProps<SVGSVGElement>) => (
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
      id="star_fill"
      x={0.127}
      y={0.139}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M29.069,44.869l-10.802,5.7c-2.932,1.547 -4.855,0.144 -4.297,-3.12l2.065,-12.084l-8.748,-8.559c-2.367,-2.316 -1.628,-4.58 1.65,-5.058l12.077,-1.762l5.406,-10.995c1.463,-2.975 3.837,-2.969 5.298,-0l5.406,10.995l12.077,1.762c3.278,0.478 4.012,2.747 1.65,5.058l-8.748,8.559l2.065,12.084c0.559,3.27 -1.366,4.666 -4.297,3.12l-10.802,-5.7Z"
      fill={props.color}
    />
  </svg>
);

export default SvgStarFill;
