import * as React from "react";
import { SVGProps } from "react";

const SvgRotate = (props: SVGProps<SVGSVGElement>) => (
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
      id="rotate"
      x={0.021}
      y={0.178}
      width={57.6}
      height={57.6}
      fill="none"
    />
    <path
      d="M40.563,14.885l1.846,0.996c3.233,1.744 7.564,5.547 9.67,8.486l0.469,0.655c0.633,0.883 0.239,1.617 -0.878,1.64l-0.226,0.005c-1.117,0.023 -2.577,1.12 -2.616,2.232c0.039,5.77 -2.472,11.435 -7.165,15.288c-0.48,0.395 -0.942,0.703 -1.383,0.936c-3.322,2.386 -7.318,3.678 -11.43,3.678c-2.156,0 -3.903,-1.747 -3.903,-3.903c-0,-2.156 1.747,-3.904 3.903,-3.904c2.729,0 5.373,-0.946 7.482,-2.678c0.306,-0.251 0.624,-0.475 0.95,-0.672c2.025,-1.925 4.653,-5.674 2.875,-6.811c-0.74,-0.474 -1.896,0.025 -2.778,0.705c-0.922,0.712 -1.675,0.386 -1.719,-0.705l-0.034,-0.821c-0.147,-3.618 0.928,-9.276 2.402,-12.641l0.831,-1.894c0.296,-0.675 1.064,-0.938 1.704,-0.592Zm-11.713,-5.335c2.156,0 3.904,1.748 3.904,3.904c-0,2.156 -1.748,3.903 -3.904,3.903c-2.729,0 -5.373,0.947 -7.482,2.678c-0.306,0.251 -0.624,0.475 -0.949,0.672c-2.026,1.926 -4.654,5.675 -2.876,6.812c0.741,0.473 1.896,-0.025 2.778,-0.706c0.922,-0.711 1.675,-0.385 1.719,0.706l0.034,0.82c0.147,3.619 -0.927,9.277 -2.402,12.642l-0.83,1.894c-0.296,0.675 -1.064,0.937 -1.705,0.592l-1.846,-0.996c-3.232,-1.745 -7.564,-5.547 -9.669,-8.486l-0.47,-0.656c-0.632,-0.882 -0.239,-1.617 0.879,-1.64l0.225,-0.004c1.118,-0.023 2.578,-1.121 2.616,-2.232c-0.038,-5.77 2.473,-11.436 7.165,-15.288c0.481,-0.395 0.943,-0.704 1.383,-0.936c3.323,-2.386 7.319,-3.679 11.43,-3.679Zm0,15.83c2.156,0 3.904,1.748 3.904,3.904c-0,2.156 -1.748,3.903 -3.904,3.903c-2.156,0 -3.903,-1.747 -3.903,-3.903c-0,-2.156 1.747,-3.904 3.903,-3.904Z"
      fill={props.color}
    />
  </svg>
);

export default SvgRotate;
