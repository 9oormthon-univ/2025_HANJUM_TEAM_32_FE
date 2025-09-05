import { SVGProps } from "react";
import * as React from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  stroke?: string;
  fill?: string;

}

export function GgTrending(props:IconProps) {
  const { className, stroke, fill } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" stroke={stroke} className={className} width="1em" height="1em" viewBox="0 0 24 24" {...props}>{/* Icon from css.gg by Astrit - https://github.com/astrit/css.gg/blob/master/LICENSE */}<path  fill={fill || "currentColor"} d="M1.414 16.432L0 15.018l7.071-7.071l6.364 6.364l4.243-4.243l-1.743-1.742l6.692-1.793l-1.793 6.692l-1.742-1.742l-5.657 5.656l-6.364-6.364z" /></svg>
  )
}

export function GalaBell({
  className,
  stroke,
  fill,
  ...rest
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      aria-hidden="true"
      {...rest}
    >
      {/* Icon from Gala Icons by Jake Wells - https://github.com/cyberalien/gala-icons/blob/main/LICENSE */}
      <g
        fill={fill ?? "currentColor"}
        stroke={stroke ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4.233}
      >
        <path d="M 33.866678,59.266666 A 4.2333331,4.2333331 0 0 1 29.633345,63.5" transform="translate(16)scale(3.77953)" />
        <path d="M -25.4,59.266666 A 4.2333331,4.2333331 0 0 1 -29.633333,63.5" transform="matrix(-3.77953 0 0 3.77953 16 0)" />
        <path d="m 25.400031,55.033482 v 4.233333" transform="translate(16)scale(3.77953)" />
        <path d="m 33.866698,55.033482 -1.9e-5,4.233332" transform="translate(16)scale(3.77953)" />
        <path d="m 55.033333,50.8 c -8.466667,4.233333 -21.166667,4.233333 -25.4,4.233333" transform="translate(16)scale(3.77953)" />
        <path d="m 55.033333,50.8 c 0,-8.466667 -8.466667,-4.233336 -8.466667,-25.400002 0,-9.466021 -8.466666,-16.9330112 -12.699988,-16.9330112" transform="translate(16)scale(3.77953)" />
        <path d="M 4.233334,50.8 C 12.7,55.033333 25.4,55.033333 29.633333,55.033333" transform="translate(16)scale(3.77953)" />
        <path d="m 4.2333451,50.799681 c 0,-8.466669 8.4666669,-4.233338 8.4666669,-25.400003 0,-9.46602 8.466666,-16.9330108 12.699988,-16.9330108" transform="translate(16)scale(3.77953)" />
        <path d="m -25.400012,-8.4666872 a 4.2333331,4.2333331 0 0 1 -4.233333,4.2333331" transform="rotate(180 8 0)scale(3.77953)" />
        <path d="m 33.866666,-8.4666672 a 4.2333331,4.2333331 0 0 1 -4.233333,4.2333331" transform="matrix(3.77953 0 0 -3.77953 16 0)" />
      </g>
    </svg>
  );
}

const Icon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    {...props}
  >
    <path

      fillRule="evenodd"
      d="M19.943 24.276c-.52.52-1.365.52-1.886 0l-7.333-7.333a1.333 1.333 0 0 1 0-1.886l7.333-7.333a1.333 1.333 0 1 1 1.886 1.885L13.553 16l6.39 6.39c.52.521.52 1.365 0 1.886"
      clipRule="evenodd"
    />
  </svg>
);
export default Icon;



export function Scrap(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>{/* Icon from Cuida Icons by Sysvale - https://github.com/Sysvale/cuida-icons/blob/main/LICENSE */}<g className="bookmark-outline"><path fill="currentColor" fillRule="evenodd" d="M5 6.09A3.09 3.09 0 0 1 8.09 3h7.82A3.09 3.09 0 0 1 19 6.09v13.697c0 1.336-1.597 2.024-2.568 1.107L12 16.71l-4.432 4.185c-.97.918-2.568.229-2.568-1.107V6.091ZM8.09 5A1.09 1.09 0 0 0 7 6.09v12.59l3.954-3.735a1.523 1.523 0 0 1 2.091 0L17 18.68V6.09A1.09 1.09 0 0 0 15.91 5z" className="Vector" clipRule="evenodd" /></g></svg>
  )
}