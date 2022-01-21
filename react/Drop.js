import * as React from "react";

const SvgDrop = (props) => (
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
    <rect id="drop" x={0.2} y={0.095} width={57.6} height={57.6} fill="none" />
    <path
      d="M25.696,8.508c0.376,-3.719 2.628,-4.61 5.262,-1.972c-0,-0 14.573,12.23 14.574,29.415c-0,9.426 -7.362,17.067 -16.442,17.067c-9.08,0 -16.441,-7.641 -16.441,-17.067c-0,-9.529 7.553,-13.964 10.638,-20.167c2.902,-3.385 2.409,-7.276 2.409,-7.276Zm-0.277,15.062c0,0 -11.443,7.159 -5.033,17.843c1.451,2.418 3.001,3.595 5.185,3.815c3.39,0.343 6.416,-2.128 6.758,-5.518c0.343,-3.39 -2.272,-6.518 -5.518,-6.759c-2.027,-0.15 -3.244,-1.178 -3.964,-2.827c-1.099,-2.52 0.44,-5.153 2.572,-6.554Z"
      fill={props.color}
    />
  </svg>
);

export default SvgDrop;
