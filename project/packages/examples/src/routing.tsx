import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { HomeView } from "./views/home";
import { CompleteView } from "./views/complete";
import { EventsView } from "./views/events";
import { MultipleView } from "./views/multiple";
import { CustomButtonsView } from "./views/custom-buttons";
import { MultiDirectedGraphView } from "./views/multidirectedgraph";
import { ExternalView } from "./views/external";

export const Routing: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<HomeView />} />
      <Route path="/complete" element={<CompleteView />} />
      <Route path="/events" element={<EventsView />} />
      <Route path="/multiple" element={<MultipleView />} />
      <Route path="/custom-buttons" element={<CustomButtonsView />} />
      <Route path="/multidirectedgraph" element={<MultiDirectedGraphView />} />
      <Route path="/external" element={<ExternalView />} />
    </Routes>
  );
};
