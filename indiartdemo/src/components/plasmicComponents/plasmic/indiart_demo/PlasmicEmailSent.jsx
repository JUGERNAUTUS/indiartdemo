// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 46Sa4WMCscwEt6Udy4KXw2
// Component: kMXYSZXsFp7N
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_indiart_demo.module.css"; // plasmic-import: 46Sa4WMCscwEt6Udy4KXw2/projectcss
import sty from "./PlasmicEmailSent.module.css"; // plasmic-import: kMXYSZXsFp7N/css
import emailSentgifBJonJr1Ejcl4 from "./images/emailSentgif.gif"; // plasmic-import: bJONJr1EJCL4/picture

export const PlasmicEmailSent__VariantProps = new Array();

export const PlasmicEmailSent__ArgProps = new Array();

function PlasmicEmailSent__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"500px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: emailSentgifBJonJr1Ejcl4,
                fullWidth: 908,
                fullHeight: 1284,
                aspectRatio: undefined
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "img"],
  freeBox: ["freeBox", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicEmailSent__ArgProps,
      internalVariantPropNames: PlasmicEmailSent__VariantProps
    });

    return PlasmicEmailSent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEmailSent";
  } else {
    func.displayName = `PlasmicEmailSent.${nodeName}`;
  }
  return func;
}

export const PlasmicEmailSent = Object.assign(
  // Top-level PlasmicEmailSent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicEmailSent
    internalVariantProps: PlasmicEmailSent__VariantProps,
    internalArgProps: PlasmicEmailSent__ArgProps
  }
);

export default PlasmicEmailSent;
/* prettier-ignore-end */
