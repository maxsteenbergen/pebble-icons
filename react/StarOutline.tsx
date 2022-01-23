import * as React from "react";
import { SVGProps } from "react";

const SvgStarOutline = (props: SVGProps<SVGSVGElement>) => (
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
      id="star_outline"
      x={0.127}
      y={0.139}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M31.718,8.991l5.406,10.995l12.077,1.762c3.278,0.478 4.012,2.747 1.65,5.058l-8.748,8.559l2.065,12.084c0.559,3.27 -1.366,4.666 -4.297,3.12l-10.802,-5.7l-10.802,5.7c-2.932,1.547 -4.855,0.144 -4.297,-3.12l2.065,-12.084l-8.748,-8.559c-2.367,-2.316 -1.628,-4.58 1.65,-5.058l12.077,-1.762l5.406,-10.995c1.463,-2.975 3.837,-2.969 5.298,-0Zm-1.747,4.116c-0.496,-0.985 -1.303,-0.986 -1.8,-0l-5.111,10.139l-11.459,1.63c-1.101,0.157 -1.336,0.9 -0.538,1.662l8.281,7.902l-1.952,11.144c-0.19,1.082 0.45,1.553 1.43,1.049l10.249,-5.275l10.249,5.275c0.985,0.507 1.62,0.035 1.43,-1.049l-1.953,-11.144l8.281,-7.902c0.793,-0.756 0.558,-1.506 -0.537,-1.662l-11.459,-1.63l-5.111,-10.139Z"
      fill={props.color}
    />
  </svg>
);

export default SvgStarOutline;
