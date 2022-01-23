import * as React from "react";
import { SVGProps } from "react";

const SvgUser = (props: SVGProps<SVGSVGElement>) => (
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
    <rect id="user" x={0.2} y={0.192} width={57.6} height={57.6} fill="none" />
    <path
      d="M40.221,44.115c0.117,0.065 8.561,3.791 8.561,5.501c-0,3.696 -18.807,3.439 -19.662,3.425l-0.06,-0c-0.855,0.014 -19.661,0.271 -19.661,-3.425c-0,-1.785 5.092,-4.193 8.584,-5.481c2.731,2.279 6.376,3.6 11.107,3.6c4.745,-0 8.397,-1.329 11.131,-3.62Zm-4.964,-39.066c5.066,0 7.83,2.743 8.585,5.763c0.605,2.42 0.8,7.295 0.513,10.093c1.103,0.853 1.858,2.579 1.858,4.57c0,2.582 -1.27,4.719 -2.924,5.082c-1.166,8.433 -5.32,14.609 -14.199,14.609c-8.878,0 -13.033,-6.176 -14.199,-14.609c-1.654,-0.363 -2.924,-2.5 -2.924,-5.082c0,-2.467 1.159,-4.528 2.705,-5.024c0.025,-0.365 -0.018,-7.604 0.766,-9.773c0.891,-2.469 3.56,-6.415 9.482,-5.302c5.922,1.113 5.271,-0.327 10.337,-0.327Z"
      fill={props.color}
    />
  </svg>
);

export default SvgUser;
