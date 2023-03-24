import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { HomeView } from "./views/home";
import { CompleteView } from "./views/complete";
import { EventsView } from "./views/events";
import { MultipleView } from "./views/multiple";
import { CustomRenderView } from "./views/custom-render";
import { MultiDirectedGraphView } from "./views/multidirectedgraph";
import { UpdatedGraphReferenceView } from "./views/updatedgraphreference";
import { ExternalView } from "./views/external";

export const Routing: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<HomeView />} />
      <Route path="/complete" element={<CompleteView />} />
      <Route path="/events" element={<EventsView />} />
      <Route path="/multiple" element={<MultipleView />} />
      <Route path="/custom-render" element={<CustomRenderView />} />
      <Route path="/multidirectedgraph" element={<MultiDirectedGraphView />} />
      <Route path="/updatedgraphreference" element={<UpdatedGraphReferenceView />} />
      <Route path="/external" element={<ExternalView />} />
    </Routes>
  );
};
