import * as React from "react";
import { SVGProps } from "react";

const SvgCrown = (props: SVGProps<SVGSVGElement>) => (
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
    <rect id="crown" x={0.2} y={0.116} width={57.6} height={57.6} fill="none" />
    <path
      d="M29.09,8.596c2.743,0 4.966,2.223 4.966,4.966c-0,1.627 -0.783,3.072 -1.993,3.977l5.277,12.943c1.037,2.544 2.591,2.498 3.476,-0.091c0,-0 1.126,-3.658 2.903,-7.417c0.04,-0.084 0.084,-0.172 0.132,-0.263c-0.44,-0.74 -0.692,-1.605 -0.692,-2.529c0,-2.742 2.223,-4.965 4.966,-4.965c2.742,-0 4.965,2.223 4.965,4.965c0,2.743 -2.223,4.966 -4.965,4.966c-0.084,-0 -0.168,-0.002 -0.25,-0.006c-0.4,1.877 -0.767,4.017 -0.986,6.256c-0.416,4.261 -1.733,13.628 -1.733,13.628c-0.189,1.368 -1.419,2.75 -2.747,3.1l-0.515,0.135c-7.071,1.861 -18.556,1.932 -25.651,0.158l-1.298,-0.325c-1.321,-0.33 -2.544,-1.708 -2.713,-3.072c0,-0 -1.086,-8.566 -1.369,-12.429c-0.163,-2.228 -0.639,-4.974 -1.149,-7.457c-2.583,-0.175 -4.624,-2.326 -4.624,-4.954c0,-2.742 2.223,-4.965 4.966,-4.965c2.742,-0 4.965,2.223 4.965,4.965c0,1.042 -0.32,2.008 -0.868,2.806c1.127,2.781 2.631,7.385 2.631,7.385c0.882,2.598 2.468,2.667 3.554,0.152l5.649,-13.087c-1.135,-0.91 -1.862,-2.308 -1.862,-3.876c-0,-2.743 2.223,-4.966 4.965,-4.966Zm-9.931,4.966c1.828,-0 3.31,1.482 3.31,3.31c0,1.273 -0.719,2.379 -1.773,2.933l0.946,4.101l-1.9,4.343c-0.55,1.258 -1.328,1.216 -1.738,-0.093l-1.328,-4.25l0.947,-4.101c-1.055,-0.553 -1.774,-1.659 -1.774,-2.933c-0,-1.828 1.482,-3.31 3.31,-3.31Zm19.862,-0c1.828,-0 3.311,1.482 3.311,3.31c-0,1.273 -0.72,2.379 -1.774,2.933l0.946,4.101l-1.328,4.25c-0.409,1.309 -1.187,1.351 -1.738,0.093l-1.9,-4.343l0.947,-4.101c-1.055,-0.553 -1.774,-1.659 -1.774,-2.933c-0,-1.828 1.482,-3.31 3.31,-3.31Z"
      fill={props.color}
    />
  </svg>
);

export default SvgCrown;
