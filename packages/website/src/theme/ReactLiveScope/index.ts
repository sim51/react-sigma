import React from "react";

import Graph from "graphology";
import { SigmaContainer, ControlsContainer, ZoomControl, SearchControl, FullScreenControl } from "@react-sigma/core";
import { useLayoutCircular } from "@react-sigma/layout-circular";
import { useLayoutCirclepack } from "@react-sigma/layout-circlepack";
import { useLayoutRandom } from "@react-sigma/layout-random";
import { useLayoutNoverlap, useWorkerLayoutNoverlap, LayoutNoverlapControl } from "@react-sigma/layout-noverlap";
import { useLayoutForce, useWorkerLayoutForce, LayoutForceControl } from "@react-sigma/layout-force";
import {
  useLayoutForceAtlas2,
  useWorkerLayoutForceAtlas2,
  LayoutForceAtlas2Control,
} from "@react-sigma/layout-forceatlas2";

const ReactLiveScope = {
  React,
  ...React,
  Graph,
  SigmaContainer,
  ControlsContainer,
  ZoomControl,
  SearchControl,
  FullScreenControl,
  useLayoutCircular,
  useLayoutCirclepack,
  useLayoutRandom,
  useLayoutNoverlap,
  useWorkerLayoutNoverlap,
  LayoutNoverlapControl,
  useLayoutForce,
  useWorkerLayoutForce,
  LayoutForceControl,
  useLayoutForceAtlas2,
  useWorkerLayoutForceAtlas2,
  LayoutForceAtlas2Control,
};

export default ReactLiveScope;
