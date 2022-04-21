import { FC } from "react";
import { MultiDirectedGraph } from "graphology";

import { SigmaContainer } from "@react-sigma/core";
import { MyGraph } from "./my-graph";

export const MultiDirectedGraphView: FC = () => {
  return (
    <SigmaContainer graph={MultiDirectedGraph} initialSettings={{ renderEdgeLabels: true }}>
      <MyGraph />
    </SigmaContainer>
  );
};
