// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function TimeSvgrepoComsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 83.001 83.001"}
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
          "M41.5 0C18.617 0 .001 18.617.001 41.5c0 22.884 18.616 41.501 41.499 41.501C64.383 83.001 83 64.384 83 41.5 83 18.617 64.382 0 41.5 0zm0 77.001C21.926 77.001 6 61.075 6 41.5S21.925 6 41.5 6 77 21.925 77 41.5 61.075 77.001 41.5 77.001z"
        }
      ></path>

      <path
        d={
          "M53.508 45.32h-.046l-8.962.134V22a3 3 0 10-6 0v26.5l.002.018-.002.027c.002.122.025.237.041.354.01.073.011.148.025.22.027.129.072.249.115.37.022.063.036.129.062.189.052.123.122.235.189.35.031.051.054.107.087.157.076.111.167.21.257.311.038.042.069.09.109.131.097.096.206.177.315.26.044.033.083.073.128.104.118.08.247.143.376.205.045.021.085.051.131.07.15.063.31.107.472.146.03.007.058.021.089.027.194.039.395.061.601.061h.046l12.008-.18a3.002 3.002 0 002.955-3.045 2.998 2.998 0 00-2.998-2.955z"
        }
      ></path>
    </svg>
  );
}

export default TimeSvgrepoComsvgIcon;
/* prettier-ignore-end */
