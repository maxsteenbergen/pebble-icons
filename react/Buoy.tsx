import * as React from "react";
import { SVGProps } from "react";

const SvgBuoy = (props: SVGProps<SVGSVGElement>) => (
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
    <rect id="buoy" x={0.16} y={0.16} width={57.6} height={57.6} fill="none" />
    <path
      d="M53.09,29.074c0,-13.255 -10.745,-24 -24,-24c-13.255,-0 -24,10.745 -24,24c0,13.255 10.745,24 24,24c13.255,-0 24,-10.745 24,-24Zm-15.428,-0c-0,-4.734 -3.838,-8.571 -8.572,-8.571c-4.734,-0 -8.571,3.837 -8.571,8.571c-0,4.734 3.837,8.571 8.571,8.571c4.734,0 8.572,-3.837 8.572,-8.571Zm-13.016,-12.913c-0.232,-1.4 -1.008,-3.525 -1.735,-4.751l-0.968,-1.632c2.227,-0.825 4.634,-1.275 7.147,-1.275c2.513,-0 4.921,0.45 7.147,1.275l-0.938,1.57c-0.728,1.22 -1.512,3.352 -1.747,4.737l-0.293,1.733c-1.298,-0.481 -2.703,-0.744 -4.169,-0.744c-1.466,-0 -2.87,0.263 -4.169,0.744l-0.275,-1.657Zm-8.986,7.052c-1.119,-0.872 -3.178,-1.49 -4.587,-1.383l-1.279,0.097c-0.825,2.226 -1.275,4.634 -1.275,7.147c-0,2.428 0.42,4.758 1.193,6.921l1.722,-0.989c1.232,-0.707 3.368,-1.45 4.771,-1.659l1.581,-0.236c-0.45,-1.262 -0.696,-2.621 -0.696,-4.037c0,-1.466 0.263,-2.871 0.744,-4.169l-2.174,-1.692Zm19.095,19.279c0.867,1.128 1.478,3.196 1.364,4.611l-0.108,1.349c-2.163,0.773 -4.493,1.193 -6.921,1.193c-2.513,0 -4.92,-0.45 -7.147,-1.275l-0.095,-1.284c-0.105,-1.42 0.517,-3.479 1.393,-4.602l1.68,-2.154c1.299,0.481 2.703,0.744 4.169,0.744c1.417,-0 2.776,-0.245 4.037,-0.696l1.628,2.114Zm7.205,-8.985c1.397,0.228 3.523,1 4.751,1.725l1.675,0.989c0.825,-2.226 1.276,-4.634 1.276,-7.147c-0,-2.513 -0.451,-4.921 -1.276,-7.147l-1.264,-0.098c-1.417,-0.109 -3.479,0.513 -4.597,1.381l-2.179,1.695c0.481,1.298 0.744,2.703 0.744,4.169c0,1.466 -0.263,2.871 -0.744,4.169l1.614,0.264Z"
      fill={props.color}
    />
  </svg>
);

export default SvgBuoy;
