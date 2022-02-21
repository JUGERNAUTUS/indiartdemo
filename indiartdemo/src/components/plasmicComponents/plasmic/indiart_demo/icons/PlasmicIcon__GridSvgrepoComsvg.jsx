// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GridSvgrepoComsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
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
          "M21 2H3c-.6 0-1 .4-1 1v4h20V3c0-.6-.4-1-1-1zM2 15h9V9H2v6zm0 6c0 .6.4 1 1 1h8v-5H2v4zm11-6h9V9h-9v6zm0 7h8c.6 0 1-.4 1-1v-4h-9v5z"
        }
      ></path>
    </svg>
  );
}

export default GridSvgrepoComsvgIcon;
/* prettier-ignore-end */
