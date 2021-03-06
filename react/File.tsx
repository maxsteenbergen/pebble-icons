import * as React from "react";
import { SVGProps } from "react";

const SvgFile = (props: SVGProps<SVGSVGElement>) => (
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
      id="file"
      x={0.175}
      y={0.029}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M10.899,9.505c-0.804,10.829 -0.805,28.362 -0.001,39.185c0.14,1.894 1.782,3.564 3.647,3.741c8.066,0.766 21.01,0.766 28.989,0.009c1.959,-0.186 3.591,-1.858 3.731,-3.738c0.804,-10.829 0.601,-27.283 0.601,-27.283c-0,-2.561 -3.432,-8.134 -3.432,-8.134c-0.934,-1.638 -2.944,-3.846 -4.526,-4.866c0,0 -3.679,-2.694 -7.291,-3.304c-0.315,-0.053 -0.63,-0.09 -0.941,-0.108c-1.485,-0 -9.067,0.003 -17.046,0.76c-1.959,0.186 -3.592,1.858 -3.731,3.738Zm5.45,-0.334l-0.205,0.021c-0.935,0.098 -1.75,0.94 -1.82,1.88l-0.078,1.047c-0.701,9.403 -0.701,24.644 0,34.052l0.078,1.047c0.07,0.94 0.893,1.783 1.82,1.88l0.205,0.021c7.032,0.734 18.431,0.734 25.466,-0l0.205,-0.021c0.934,-0.098 1.749,-0.94 1.819,-1.88l0.015,-0.193c0.736,-9.875 0.647,-23.379 0.596,-23.969c-0.12,-1.409 -1.142,-2.595 -2.554,-2.723l-4.284,-0.389c-1.41,-0.129 -2.64,-1.379 -2.746,-2.779l-0.454,-6.007c-0.106,-1.406 -1.28,-2.535 -2.679,-2.745c-2.631,-0.306 -8.35,0.024 -15.384,0.758Z"
      fill={props.color}
    />
  </svg>
);

export default SvgFile;
