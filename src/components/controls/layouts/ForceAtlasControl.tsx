import React from "react";
import { FA2LayoutSupervisorParameters } from "graphology-layout-forceatlas2/worker";

import { useWorkerLayoutForceAtlas2 } from "../../../hooks/layouts/worker/useWorkerLayoutForceAtlas2";
import { WorkerLayoutControlProps, WorkerLayoutControl } from "./WorkerLayoutControl";

/**
 * Properties for `ForceAtlasControl` component
 */
export type ForceAtlasControlProps = Omit<
  WorkerLayoutControlProps<FA2LayoutSupervisorParameters>,
  "layout" | "settings"
> & {
  settings?: FA2LayoutSupervisorParameters;
};

export const ForceAtlasControl: React.FC<ForceAtlasControlProps> = props => {
  const workerLayoutProps = { ...props, settings: props.settings || {}, layout: useWorkerLayoutForceAtlas2 };
  return <WorkerLayoutControl {...workerLayoutProps} />;
};
