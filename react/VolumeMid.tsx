import * as React from "react";
import { SVGProps } from "react";

const SvgVolumeMid = (props: SVGProps<SVGSVGElement>) => (
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
      id="volume_mid"
      x={0.2}
      y={0.068}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M28.262,12.286l0.659,5.857c0.672,5.976 0.677,15.658 0.008,21.651l-0.667,5.97c-0,2.592 -1.522,3.239 -3.4,1.452l-7.286,-6.935c-1.123,-1.07 -3.287,-1.936 -4.845,-1.936l-0.407,-0c-2.595,-0 -4.7,-2.098 -4.7,-4.686l0,-9.39c0,-2.588 2.104,-4.686 4.7,-4.686l0.537,0c1.552,0 3.724,-0.871 4.849,-1.941l7.152,-6.808c1.875,-1.785 3.4,-1.137 3.4,1.452Zm2.814,2.607c1.036,0 4.69,6.3 4.69,14.071c0,7.771 -3.654,14.071 -4.69,14.071c0,0 0.938,-7.035 0.938,-14.071c0,-7.035 -0.938,-14.071 -0.938,-14.071Zm7.505,1.876c6.735,0 12.195,5.46 12.195,12.195c-0,6.735 -5.46,12.195 -12.195,12.195c-1.022,-0 -2.015,-0.126 -2.964,-0.363c0.372,-0.827 0.724,-1.713 1.042,-2.648c0.62,0.129 1.263,0.197 1.922,0.197c5.18,-0 9.38,-4.2 9.38,-9.381c0,-5.181 -4.2,-9.381 -9.38,-9.381c-0.659,0 -1.302,0.068 -1.922,0.197c-0.318,-0.935 -0.67,-1.821 -1.042,-2.648c0.949,-0.237 1.942,-0.363 2.964,-0.363Zm-0,5.629c3.626,-0 6.566,2.94 6.566,6.566c0,3.627 -2.94,6.567 -6.566,6.567c-0.388,-0 -0.768,-0.034 -1.137,-0.099c0.212,-0.892 0.389,-1.816 0.52,-2.766c0.201,0.033 0.407,0.05 0.617,0.05c2.072,0 3.752,-1.68 3.752,-3.752c-0,-2.072 -1.68,-3.752 -3.752,-3.752c-0.21,-0 -0.416,0.017 -0.617,0.05c-0.131,-0.95 -0.308,-1.874 -0.52,-2.766c0.369,-0.065 0.749,-0.098 1.137,-0.098Z"
      fill={props.color}
    />
  </svg>
);

export default SvgVolumeMid;