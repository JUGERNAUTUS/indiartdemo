// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ThreeDotsSvgrepoComsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"20x20/three-dots--grey"} transform={"rotate(90 12 12)"}>
        <path fill={"none"} d={"M0 0h24v24H0z"}></path>

        <circle
          cx={"1"}
          cy={"1"}
          r={"1"}
          transform={"translate(5 11)"}
          stroke={"currentColor"}
          strokeMiterlimit={"10"}
          strokeWidth={".5"}
        ></circle>

        <circle
          data-name={"Oval"}
          cx={"1"}
          cy={"1"}
          r={"1"}
          transform={"translate(11 11)"}
          stroke={"currentColor"}
          strokeMiterlimit={"10"}
          strokeWidth={".5"}
        ></circle>

        <circle
          data-name={"Oval"}
          cx={"1"}
          cy={"1"}
          r={"1"}
          transform={"translate(17 11)"}
          stroke={"currentColor"}
          strokeMiterlimit={"10"}
          strokeWidth={".5"}
        ></circle>
      </g>
    </svg>
  );
}

export default ThreeDotsSvgrepoComsvgIcon;
/* prettier-ignore-end */
