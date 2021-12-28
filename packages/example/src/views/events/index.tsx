import { FC } from "react";

import { SigmaContainer } from "@react-sigma/core";
import { MyGraph } from "./my-graph";

export const EventsView: FC = () => {
  return (
    <SigmaContainer>
      <MyGraph />
    </SigmaContainer>
  );
};
