// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CollectionSvgrepoComsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames("plasmic-default__svg", className, "icon")}
      viewBox={"0 0 1024 1024"}
      height={"1em"}
      width={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M192 736h640V128H256a64 64 0 00-64 64v544zm64-672h608a32 32 0 0132 32v672a32 32 0 01-32 32H160l-32 57.536V192A128 128 0 01256 64z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M240 800a48 48 0 100 96h592v-96H240zm0-64h656v160a64 64 0 01-64 64H240a112 112 0 010-224zm144-608v250.88l96-76.8 96 76.8V128H384zm-64-64h320v381.44a32 32 0 01-51.968 24.96L480 384l-108.032 86.4A32 32 0 01320 445.44V64z"
        }
      ></path>
    </svg>
  );
}

export default CollectionSvgrepoComsvgIcon;
/* prettier-ignore-end */
