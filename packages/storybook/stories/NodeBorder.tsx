import { FC, CSSProperties } from "react";

import { createNodeBorderProgram } from "@sigma/node-border";
import { SigmaContainer, ControlsContainer } from "@react-sigma/core";
import { SampleGraph } from "./common/SampleGraph";
import { LayoutsControl } from "./common/LayoutsControl";

import "@react-sigma/core/lib/react-sigma.min.css";

// We add the node boder program to the sigma settings, and we set it as the default one.
// Now a node with a `borderSize` and/ord `borderColor` attributs will be displayed with a border.
// Check this link to know how to use this program :  https://www.sigmajs.org/storybook/?path=/story/node-border--node-border
//
// NB: the graph used in this example is printed in the console.
//
// NB: Sigma settings are outside the react lifecycle to avoid the change of its ref at every render
// which triggers a full render of sigma. An other way is to use the `useMemo` hook inside the component.
const sigmaSettings = {
  allowInvalidContainer: true,
  defaultNodeType: "bordered",
  nodeProgramClasses: {
    bordered: createNodeBorderProgram({
      borders: [
        { size: { attribute: "borderSize", defaultValue: 0 }, color: { attribute: "borderColor" } },
        { size: { fill: true }, color: { attribute: "color" } },
      ],
    }),
  },
};

export const NodeBorder: FC<{ style?: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={sigmaSettings}>
      <SampleGraph />
      <ControlsContainer position={"bottom-right"}>
        <LayoutsControl />
      </ControlsContainer>
    </SigmaContainer>
  );
};
