import * as React from "react";
import { SVGProps } from "react";

const SvgAlert = (props: SVGProps<SVGSVGElement>) => (
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
      id="alert"
      x={0.143}
      y={0.237}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M32.181,8.133l3.089,3.244c6.485,6.809 13.908,19.637 16.579,28.651l1.059,3.575c0.703,2.373 -0.696,4.719 -3.112,5.237l-6.693,1.434c-7.739,1.659 -20.296,1.657 -28.026,0l-6.693,-1.434c-2.422,-0.519 -3.816,-2.858 -3.111,-5.237l1.059,-3.575c2.671,-9.015 10.092,-21.841 16.578,-28.651l3.089,-3.244c1.707,-1.793 4.475,-1.792 6.182,0Zm-3.091,31.702c-1.979,0 -3.584,1.605 -3.584,3.585c-0,1.979 1.605,3.584 3.584,3.584c1.98,0 3.585,-1.605 3.585,-3.584c-0,-1.98 -1.605,-3.585 -3.585,-3.585Zm0,-25.091c-2.988,0 -3.831,7.237 -3.831,7.237c-0.359,1.921 -0.464,5.05 -0.163,6.991c0,-0 0.581,8.141 3.994,8.141c3.413,-0 3.994,-8.141 3.994,-8.141c0.269,-1.94 0.226,-5.082 -0.166,-7.006c-0,0 -0.84,-7.222 -3.828,-7.222Z"
      fill={props.color}
    />
  </svg>
);

export default SvgAlert;
