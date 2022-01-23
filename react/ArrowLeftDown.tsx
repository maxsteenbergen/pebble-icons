import * as React from "react";
import { SVGProps } from "react";

const SvgArrowLeftDown = (props: SVGProps<SVGSVGElement>) => (
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
      id="arrow_left_down"
      x={0.093}
      y={0.093}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M14.39,45.598c-1.127,0.046 -2.002,-0.834 -1.957,-1.946l0.132,-3.205c0.231,-5.613 2.553,-14.116 5.181,-18.979l0.586,-1.085c0.79,-1.462 2.063,-1.413 2.844,0.108l0.157,0.306c0.781,1.521 2.75,2.51 4.394,2.21l-0.391,0.072c0.552,-0.101 1.376,-0.414 1.851,-0.705l14.251,-8.748c4.242,-2.604 5.573,-1.279 2.967,2.967l-8.748,14.251c-0.288,0.471 -0.575,1.302 -0.64,1.849l0.027,-0.229c-0.197,1.672 0.887,3.644 2.414,4.4c1.596,0.791 1.652,2.044 0.182,2.836l-1.105,0.596c-4.875,2.629 -13.372,4.944 -18.985,5.173l-3.16,0.129Z"
      fill={props.color}
    />
  </svg>
);

export default SvgArrowLeftDown;
