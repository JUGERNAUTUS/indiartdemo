// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function WalletSvgrepoCom1SvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 64 64"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M57.79 7H6.21C2.786 7 0 9.79 0 13.22v37.568A6.22 6.22 0 006.212 57h47.576c2.666 0 4.94-1.692 5.818-4.056C62.398 52.662 64 50.468 64 46.78V13.22C64 9.79 61.214 7 57.79 7zm-4.002 48H6.212A4.217 4.217 0 012 50.788V17.212A4.217 4.217 0 016.212 13h47.576A4.217 4.217 0 0158 17.212V24H45.948C41.014 24 37 28.123 37 33.191v1.619c0 5.067 4.014 9.19 8.948 9.19H58v6.788A4.217 4.217 0 0153.788 55zM58 42H45.948C42.118 42 39 38.774 39 34.81v-1.62c0-3.964 3.117-7.19 6.948-7.19H58v16zm4 4.78c0 2.933-1.09 3.826-2.005 4.099 0-.03.005-.06.005-.09V17.211A6.22 6.22 0 0053.788 11H6.212a6.18 6.18 0 00-4.15 1.603C2.363 10.57 4.1 9 6.21 9h51.58A4.22 4.22 0 0162 13.22v33.56z"
        }
      ></path>

      <path
        d={
          "M42 34c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm4-2c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"
        }
      ></path>
    </svg>
  );
}

export default WalletSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
