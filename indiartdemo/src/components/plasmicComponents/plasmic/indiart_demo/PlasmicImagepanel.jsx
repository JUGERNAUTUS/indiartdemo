// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 46Sa4WMCscwEt6Udy4KXw2
// Component: mGO5EwcSvI
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_indiart_demo.module.css"; // plasmic-import: 46Sa4WMCscwEt6Udy4KXw2/projectcss
import sty from "./PlasmicImagepanel.module.css"; // plasmic-import: mGO5EwcSvI/css
import untitledDesign6GifYhAkdO91 from "./images/untitledDesign6Gif.jpeg"; // plasmic-import: YhAkd-o91/picture

export const PlasmicImagepanel__VariantProps = new Array("loading");

export const PlasmicImagepanel__ArgProps = new Array();

function PlasmicImagepanel__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.PlasmicImg
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      alt={""}
      className={classNames(
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rootloading]: hasVariant(variants, "loading", "loading") }
      )}
      displayHeight={"600px"}
      displayMaxHeight={"none"}
      displayMaxWidth={"100%"}
      displayMinHeight={"0"}
      displayMinWidth={"0"}
      displayWidth={"400px"}
      loading={"lazy"}
      src={{
        src: untitledDesign6GifYhAkdO91,
        fullWidth: 1440,
        fullHeight: 810,
        aspectRatio: undefined
      }}
    />
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicImagepanel__ArgProps,
      internalVariantPropNames: PlasmicImagepanel__VariantProps
    });

    return PlasmicImagepanel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicImagepanel";
  } else {
    func.displayName = `PlasmicImagepanel.${nodeName}`;
  }
  return func;
}

export const PlasmicImagepanel = Object.assign(
  // Top-level PlasmicImagepanel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicImagepanel
    internalVariantProps: PlasmicImagepanel__VariantProps,
    internalArgProps: PlasmicImagepanel__ArgProps
  }
);

export default PlasmicImagepanel;
/* prettier-ignore-end */