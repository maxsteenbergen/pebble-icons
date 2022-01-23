import * as React from "react";
import { SVGProps } from "react";

const SvgSignalMid = (props: SVGProps<SVGSVGElement>) => (
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
      id="signal_mid"
      x={0}
      y={0.04}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M23.898,20.644l9.039,0.004c1.515,0.001 2.887,1.209 3.085,2.7l0.372,2.785c0.597,4.474 0.625,11.727 0.065,16.208l-0.46,3.685c-0.185,1.481 -1.557,2.691 -3.062,2.691l-9.039,0c-1.515,0 -2.876,-1.205 -3.062,-2.691l-0.46,-3.685c-0.56,-4.475 -0.531,-11.739 0.065,-16.212l0.372,-2.786c0.199,-1.494 1.58,-2.7 3.085,-2.699Zm-9.039,8.554c1.493,-0.223 2.691,0.811 2.691,2.31l0,7.274c0,4.502 0.417,6.347 0.417,6.347c0.251,1.99 -1.123,3.383 -3.112,3.129c-0,0 -1.789,-0.22 -4.055,-0.534l-2.375,-0.33c-1.422,-0.197 -2.869,-1.521 -3.198,-2.954c-0,-0 -0.355,-3.772 -0.355,-5.658l0.001,-0.167c0.018,-1.836 0.315,-5.126 0.35,-5.507l0.004,-0.036c0.327,-1.425 1.761,-2.755 3.198,-2.954l2.375,-0.33c2.109,-0.292 3.809,-0.551 4.034,-0.586l0.025,-0.004Z"
      fill={props.color}
    />
  </svg>
);

export default SvgSignalMid;
