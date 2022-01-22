import * as React from "react";

const SvgPebble = (props) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 58 58"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    xmlns:serif="http://www.serif.com/"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
    {...props}
  >
    <rect
      id="pebble"
      x={0.136}
      y={0.045}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M32.032,6.792c8.977,0.02 16.26,7.316 16.26,16.299c0,8.995 -7.303,16.299 -16.299,16.299c-0,-0 -0.369,4.347 0.039,6.81c0.322,1.945 -2.105,4.698 -4.698,4.698l-9.395,0c-2.593,0 -4.206,-2.604 -4.698,-4.698c-2.719,-11.57 -2.649,-23.14 -0,-34.711c0.593,-2.592 2.105,-4.697 4.698,-4.697l14.093,-0l-0,-0Zm-1.997,11.374c2.648,-0 4.798,2.15 4.798,4.798c0,2.648 -2.15,4.798 -4.798,4.798c-2.648,-0 -2.789,-2.15 -2.789,-4.798c-0,-2.648 0.141,-4.798 2.789,-4.798Z"
      fill={props.color}
    />
  </svg>
);

export default SvgPebble;
