import * as React from "react";
import { SVGProps } from "react";

const SvgLockClosed = (props: SVGProps<SVGSVGElement>) => (
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
      id="lock_closed"
      x={0.212}
      y={0.138}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M47.047,29.195c0,-0 0.851,1.868 0.851,6.969c-0,5.1 -0.851,10.228 -0.851,10.228c-0.518,2.762 -2.559,4.374 -2.559,4.374c-0.667,0.664 -1.96,1.32 -2.894,1.456c-0,0 -5.187,0.92 -12.35,0.92c-7.163,0 -12.664,-0.932 -12.664,-0.932c-0.919,-0.134 -2.224,-0.77 -2.87,-1.446c-0,0 -2.039,-1.612 -2.554,-4.386c-0,-0 -0.776,-5.156 -0.769,-10.214c0.007,-5.057 0.733,-6.871 0.733,-6.871c0.541,-2.855 3.796,-6.161 6.634,-6.146c-1.69,-2.906 -1.397,-7.507 -1.397,-7.507c0.232,-5.831 5.847,-10.498 12.74,-10.498c6.893,0 12.508,4.667 12.74,10.498c0,0 0.917,4.538 -1.511,7.492c2.954,-0 6.203,3.296 6.721,6.063Zm-13.697,5.196c0,-2.348 -1.903,-4.252 -4.252,-4.252c-2.349,-0 -4.253,1.904 -4.253,4.252c0,1.744 1.351,2.691 1.351,2.691c0.663,0.667 1.201,1.971 1.201,2.907l-0,2.568c-0,0.942 0.755,1.705 1.701,1.705c0.939,0 1.701,-0.754 1.701,-1.705l-0,-2.568c-0,-0.939 0.554,-2.214 1.201,-2.907c0,0 1.35,-0.947 1.35,-2.691Zm-9.689,-11.797c-2.418,-2.315 -2.046,-6.954 -2.046,-6.954c0.257,-2.931 3.509,-5.249 7.482,-5.249c3.974,-0 7.225,2.318 7.482,5.249c0,0 0.876,4.035 -1.347,6.996c-3.751,-0.24 -7.786,-0.255 -11.571,-0.042Z"
      fill={props.color}
    />
  </svg>
);

export default SvgLockClosed;
