// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function WalletSvgrepoComsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 487.6 487.6"}
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
          "M460.3 216.55h-11.6v-69.7c0-28.5-23.2-51.6-51.6-51.6h-10.7l.1-25.9c0-19.2-15.6-34.8-34.8-34.8H42.3c-23.1 0-42 18.6-42.3 41.7v342c0 19.2 15.6 34.8 34.8 34.8h362.4c28.5 0 51.6-23.2 51.6-51.6v-69.8h11.6c15 0 27.2-12.2 27.2-27.2v-60.7c-.1-15-12.3-27.2-27.3-27.2zm-418-158h309.4c5.9 0 10.8 4.8 10.8 10.7l-.1 26H42.3c-10.1 0-18.3-8.2-18.3-18.3s8.2-18.4 18.3-18.4zm382.4 342.8c0 15.2-12.4 27.6-27.6 27.6H34.7c-5.9 0-10.8-4.8-10.8-10.8v-303.1c5.6 2.7 11.8 4.2 18.4 4.2h354.8c15.2 0 27.6 12.4 27.6 27.6v69.7h-81.9c-15 0-27.2 12.2-27.2 27.2v60.7c0 15 12.2 27.2 27.2 27.2h81.9v69.7zm38.8-96.9c0 1.8-1.4 3.2-3.2 3.2H342.9c-1.8 0-3.2-1.4-3.2-3.2v-60.7c0-1.7 1.4-3.2 3.2-3.2h117.4c1.7 0 3.2 1.4 3.2 3.2v60.7z"
        }
      ></path>
    </svg>
  );
}

export default WalletSvgrepoComsvgIcon;
/* prettier-ignore-end */
