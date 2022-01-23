import * as React from "react";
import { SVGProps } from "react";

const SvgVolumeLow = (props: SVGProps<SVGSVGElement>) => (
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
      id="volume_low"
      x={0.08}
      y={0.068}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M30.796,12.286l0.659,5.857c0.672,5.976 0.677,15.658 0.008,21.651l-0.667,5.97c0,2.592 -1.522,3.239 -3.4,1.452l-7.286,-6.935c-1.123,-1.07 -3.287,-1.936 -4.844,-1.936l-0.408,-0c-2.595,-0 -4.699,-2.098 -4.699,-4.686l-0,-9.39c-0,-2.588 2.104,-4.686 4.699,-4.686l0.538,0c1.551,0 3.724,-0.871 4.849,-1.941l7.151,-6.808c1.875,-1.785 3.4,-1.137 3.4,1.452Zm2.814,2.607c1.037,0 4.691,6.3 4.691,14.071c-0,7.771 -3.654,14.071 -4.691,14.071c0,0 0.938,-7.035 0.938,-14.071c0,-7.035 -0.938,-14.071 -0.938,-14.071Zm7.505,7.505c3.626,-0 6.566,2.94 6.566,6.566c0,3.627 -2.94,6.567 -6.566,6.567c-0.388,-0 -0.768,-0.034 -1.137,-0.099c0.213,-0.892 0.389,-1.816 0.52,-2.766c0.201,0.033 0.407,0.05 0.617,0.05c2.072,0 3.752,-1.68 3.752,-3.752c0,-2.072 -1.68,-3.752 -3.752,-3.752c-0.21,-0 -0.416,0.017 -0.617,0.05c-0.131,-0.95 -0.307,-1.874 -0.52,-2.766c0.369,-0.065 0.749,-0.098 1.137,-0.098Z"
      fill={props.color}
    />
  </svg>
);

export default SvgVolumeLow;
