// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 46Sa4WMCscwEt6Udy4KXw2
// Component: _vy3lDbrsdZT
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TextInput from "../../../reactComponents/TextInput"; // plasmic-import: pD-B5n7bBeW/component
import Button from "../../../reactComponents/Button"; // plasmic-import: H6IfdFc-NOE-/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_indiart_demo.module.css"; // plasmic-import: 46Sa4WMCscwEt6Udy4KXw2/projectcss
import sty from "./PlasmicLoginWithEmail.module.css"; // plasmic-import: _vy3lDbrsdZT/css

export const PlasmicLoginWithEmail__VariantProps = new Array();

export const PlasmicLoginWithEmail__ArgProps = new Array();

function PlasmicLoginWithEmail__RenderFunc(props) {
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
          <div className={classNames(projectcss.all, sty.freeBox__if60K)}>
            <div className={classNames(projectcss.all, sty.freeBox__ldJ7M)}>
              <TextInput
                data-plasmic-name={"emailId"}
                data-plasmic-override={overrides.emailId}
                className={classNames("__wab_instance", sty.emailId)}
                placeholder={"Email ID"}
              />

              <TextInput
                data-plasmic-name={"password"}
                data-plasmic-override={overrides.password}
                className={classNames("__wab_instance", sty.password)}
                placeholder={"Password"}
              />

              <Button
                data-plasmic-name={"submit"}
                data-plasmic-override={overrides.submit}
                className={classNames("__wab_instance", sty.submit)}
              >
                {"Submit"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "emailId", "password", "submit"],
  emailId: ["emailId"],
  password: ["password"],
  submit: ["submit"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLoginWithEmail__ArgProps,
      internalVariantPropNames: PlasmicLoginWithEmail__VariantProps
    });

    return PlasmicLoginWithEmail__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoginWithEmail";
  } else {
    func.displayName = `PlasmicLoginWithEmail.${nodeName}`;
  }
  return func;
}

export const PlasmicLoginWithEmail = Object.assign(
  // Top-level PlasmicLoginWithEmail renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    emailId: makeNodeComponent("emailId"),
    password: makeNodeComponent("password"),
    submit: makeNodeComponent("submit"),
    // Metadata about props expected for PlasmicLoginWithEmail
    internalVariantProps: PlasmicLoginWithEmail__VariantProps,
    internalArgProps: PlasmicLoginWithEmail__ArgProps
  }
);

export default PlasmicLoginWithEmail;
/* prettier-ignore-end */
