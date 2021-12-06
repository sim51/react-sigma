import React from "react";
import { ForceLayoutSupervisorParameters } from "graphology-layout-force/worker";

import { useWorkerLayoutForceDirected } from "../../../hooks/layouts/worker/useWorkerLayoutForceDirected";
import { WorkerLayoutControlProps, WorkerLayoutControl } from "./WorkerLayoutControl";

/**
 * Properties for `ForceDirectedControl` component
 */
export type ForceDirectedControlProps = Omit<
  WorkerLayoutControlProps<ForceLayoutSupervisorParameters>,
  "layout" | "settings"
> & {
  settings?: ForceLayoutSupervisorParameters;
};

export const ForceDirectedControl: React.FC<ForceDirectedControlProps> = props => {
  const workerLayoutProps = { ...props, settings: props.settings || {}, layout: useWorkerLayoutForceDirected };
  return <WorkerLayoutControl {...workerLayoutProps} />;
};
