// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 46Sa4WMCscwEt6Udy4KXw2
// Component: OfP8Q6aP8wv
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_indiart_demo.module.css"; // plasmic-import: 46Sa4WMCscwEt6Udy4KXw2/projectcss
import sty from "./PlasmicSelect__Option.module.css"; // plasmic-import: OfP8Q6aP8wv/css
import SUPER__PlasmicSelect from "./PlasmicSelect"; // plasmic-import: lisclnfVCzN/render

export const PlasmicSelect__Option__VariantProps = new Array(
  "isSelected",
  "isHighlighted",
  "isDisabled"
);

export const PlasmicSelect__Option__ArgProps = new Array(
  "children",
  "value",
  "textValue"
);

function PlasmicSelect__Option__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const superContexts = {
    Select: React.useContext(SUPER__PlasmicSelect.Context)
  };

  return (
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
        sty.root,
        {
          [sty.rootisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          [sty.rootisHighlighted]: hasVariant(
            variants,
            "isHighlighted",
            "isHighlighted"
          ),

          [sty.rootisSelected]: hasVariant(variants, "isSelected", "isSelected")
        }
      )}
    >
      <div
        data-plasmic-name={"labelContainer"}
        data-plasmic-override={overrides.labelContainer}
        className={classNames(projectcss.all, sty.labelContainer)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Option",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrenisHighlighted]: hasVariant(
              variants,
              "isHighlighted",
              "isHighlighted"
            ),

            [sty.slotTargetChildrenisSelected]: hasVariant(
              variants,
              "isSelected",
              "isSelected"
            )
          })
        })}
      </div>
    </div>
  );
}

function useBehavior(props, ref) {
  return pp.useSelectOption(
    PlasmicSelect__Option,
    props,
    {
      isSelectedVariant: { group: "isSelected", variant: "isSelected" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      isHighlightedVariant: {
        group: "isHighlighted",
        variant: "isHighlighted"
      },

      labelSlot: "children",
      root: "root",
      labelContainer: "labelContainer"
    },

    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "labelContainer"],
  labelContainer: ["labelContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSelect__Option__ArgProps,
      internalVariantPropNames: PlasmicSelect__Option__VariantProps
    });

    return PlasmicSelect__Option__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelect__Option";
  } else {
    func.displayName = `PlasmicSelect__Option.${nodeName}`;
  }
  return func;
}

export const PlasmicSelect__Option = Object.assign(
  // Top-level PlasmicSelect__Option renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    labelContainer: makeNodeComponent("labelContainer"),
    // Metadata about props expected for PlasmicSelect__Option
    internalVariantProps: PlasmicSelect__Option__VariantProps,
    internalArgProps: PlasmicSelect__Option__ArgProps,
    useBehavior
  }
);

export default PlasmicSelect__Option;
/* prettier-ignore-end */
