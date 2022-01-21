import * as React from "react";

const SvgEye = (props) => (
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
    <rect id="eye" x={0.155} y={0.04} width={57.6} height={57.6} fill="none" />
    <path
      d="M29.09,16.074c16.016,-0 25.202,9.753 25.202,9.753c2.144,1.743 2.102,4.697 0.01,6.486c0,-0 -9.196,9.761 -25.212,9.761c-16.016,-0 -25.201,-9.753 -25.201,-9.753c-2.144,-1.743 -2.103,-4.697 -0.011,-6.486c-0,-0 9.196,-9.761 25.212,-9.761Zm0,4c-4.97,-0 -9,4.029 -9,9c0,4.971 4.03,9 9,9c4.971,-0 9,-4.029 9,-9c0,-4.971 -4.029,-9 -9,-9Zm0,4c0.513,-0 1.008,0.077 1.473,0.221c-0.868,0.391 -1.473,1.264 -1.473,2.279c0,1.381 1.119,2.5 2.5,2.5c1.015,-0 1.888,-0.605 2.28,-1.473c0.143,0.466 0.22,0.96 0.22,1.473c0,2.761 -2.238,5 -5,5c-2.761,-0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5Z"
      fill={props.color}
    />
  </svg>
);

export default SvgEye;
