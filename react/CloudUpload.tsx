import * as React from "react";
import { SVGProps } from "react";

const SvgCloudUpload = (props: SVGProps<SVGSVGElement>) => (
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
      id="cloud_upload"
      x={0.116}
      y={0.021}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M25.96,11c6.242,0 11.476,4.8 12.865,10.787c0.77,-0.494 1.675,-0.801 2.654,-0.852c3.003,-0.158 5.565,2.149 5.722,5.152c0.035,0.668 -0.052,1.315 -0.241,1.918c3.594,1.014 6.351,4.318 6.228,8.236c-0.228,7.259 -9.228,11.259 -32.228,10.759c-11.995,-0.261 -15.5,-6.5 -16,-12.315c0,-4.782 3.319,-8.789 7.779,-9.842c0.062,-7.464 5.956,-13.843 13.221,-13.843Zm1.307,10.298c-0.726,-0.831 -1.902,-0.831 -2.627,0l-1.211,1.389c-1.083,1.242 -2.586,3.452 -3.345,4.921l-0.209,0.405c-0.504,0.975 -0.022,1.775 1.083,1.775l2,-0l2.148,7.275c0.472,1.598 1.288,1.613 1.827,0.044l2.508,-7.308l1.512,0c1.117,0 1.594,-0.796 1.088,-1.779l-0.209,-0.405c-0.756,-1.468 -2.259,-3.68 -3.351,-4.928l-1.214,-1.389Z"
      fill={props.color}
    />
  </svg>
);

export default SvgCloudUpload;
