import * as React from "react";
import { SVGProps } from "react";

const SvgLightning = (props: SVGProps<SVGSVGElement>) => (
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
      id="lightning"
      x={0.141}
      y={0.129}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M14.992,51.981c-0.404,0.868 -0.044,1.203 0.797,0.755l3.602,-1.92c7.172,-3.822 17.724,-11.502 23.57,-17.152l0.524,-0.506c1.378,-1.332 1.09,-3.068 -0.649,-3.879l-6.351,-2.961c-1.3,-0.606 -1.865,-2.149 -1.257,-3.454l7.911,-16.965c0.405,-0.867 0.041,-1.214 -0.812,-0.773l-1.951,1.006c-7.225,3.726 -17.873,11.258 -23.794,16.832l-1.913,1.801c-1.391,1.308 -1.112,3.025 0.627,3.836l6.35,2.961c1.301,0.607 1.866,2.149 1.257,3.454l-7.911,16.965Z"
      fill={props.color}
    />
  </svg>
);

export default SvgLightning;
