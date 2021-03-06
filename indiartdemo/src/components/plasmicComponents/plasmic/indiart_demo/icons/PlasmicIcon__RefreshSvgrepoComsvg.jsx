// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function RefreshSvgrepoComsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 489.935 489.935"}
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
          "M278.235 33.267c-116.7 0-211.6 95-211.6 211.7v.7l-41.9-63.1c-4.1-6.2-12.5-7.9-18.7-3.8-6.2 4.1-7.9 12.5-3.8 18.7l60.8 91.5c2.2 3.3 5.7 5.4 9.6 5.9.6.1 1.1.1 1.7.1 3.3 0 6.5-1.2 9-3.5l84.5-76.1c5.5-5 6-13.5 1-19.1-5-5.5-13.5-6-19.1-1l-56.1 50.7v-1c0-101.9 82.8-184.7 184.6-184.7s184.7 82.8 184.7 184.7-82.8 184.7-184.6 184.7c-49.3 0-95.7-19.2-130.5-54.1-5.3-5.3-13.8-5.3-19.1 0-5.3 5.3-5.3 13.8 0 19.1 40 40 93.1 62 149.6 62 116.6 0 211.6-94.9 211.6-211.7s-95-211.7-211.7-211.7z"
        }
      ></path>
    </svg>
  );
}

export default RefreshSvgrepoComsvgIcon;
/* prettier-ignore-end */
