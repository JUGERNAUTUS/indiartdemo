// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 46Sa4WMCscwEt6Udy4KXw2
// Component: W1AS1CJCm2P1
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../../reactComponents/Button"; // plasmic-import: H6IfdFc-NOE-/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_indiart_demo.module.css"; // plasmic-import: 46Sa4WMCscwEt6Udy4KXw2/projectcss
import sty from "./PlasmicLogin.module.css"; // plasmic-import: W1AS1CJCm2P1/css

export const PlasmicLogin__VariantProps = new Array();

export const PlasmicLogin__ArgProps = new Array();

function PlasmicLogin__RenderFunc(props) {
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
          <div className={classNames(projectcss.all, sty.freeBox__buZwi)}>
            <div className={classNames(projectcss.all, sty.freeBox__vmAl)}>
              <Button
                data-plasmic-name={"signupwithEmail"}
                data-plasmic-override={overrides.signupwithEmail}
                className={classNames("__wab_instance", sty.signupwithEmail)}
              >
                {"Login with Email"}
              </Button>

              <Button
                data-plasmic-name={"signupwithFb"}
                data-plasmic-override={overrides.signupwithFb}
                className={classNames("__wab_instance", sty.signupwithFb)}
              >
                {"Login with Facebook"}
              </Button>

              <Button
                data-plasmic-name={"signupwithGoogle"}
                data-plasmic-override={overrides.signupwithGoogle}
                className={classNames("__wab_instance", sty.signupwithGoogle)}
              >
                {"Login with Google"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "signupwithEmail", "signupwithFb", "signupwithGoogle"],
  signupwithEmail: ["signupwithEmail"],
  signupwithFb: ["signupwithFb"],
  signupwithGoogle: ["signupwithGoogle"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLogin__ArgProps,
      internalVariantPropNames: PlasmicLogin__VariantProps
    });

    return PlasmicLogin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogin";
  } else {
    func.displayName = `PlasmicLogin.${nodeName}`;
  }
  return func;
}

export const PlasmicLogin = Object.assign(
  // Top-level PlasmicLogin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    signupwithEmail: makeNodeComponent("signupwithEmail"),
    signupwithFb: makeNodeComponent("signupwithFb"),
    signupwithGoogle: makeNodeComponent("signupwithGoogle"),
    // Metadata about props expected for PlasmicLogin
    internalVariantProps: PlasmicLogin__VariantProps,
    internalArgProps: PlasmicLogin__ArgProps
  }
);

export default PlasmicLogin;
/* prettier-ignore-end */
