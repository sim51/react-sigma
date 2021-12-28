import React from "react";
import { ForceLayoutSupervisorParameters } from "graphology-layout-force/worker";

import { WorkerLayoutControlProps, WorkerLayoutControl } from "@react-sigma/layout-core";
import { useWorkerLayoutForce } from "./useWorkerLayoutForce";

/**
 * Properties for `ForceDirectedControl` component
 */
export type LayoutForceControlProps = Omit<
  WorkerLayoutControlProps<ForceLayoutSupervisorParameters>,
  "layout" | "settings"
> & {
  settings?: ForceLayoutSupervisorParameters;
};

export const LayoutForceControl: React.FC<LayoutForceControlProps> = (props: LayoutForceControlProps) => {
  const workerLayoutProps = { ...props, settings: props.settings || {}, layout: useWorkerLayoutForce };
  return <WorkerLayoutControl {...workerLayoutProps} />;
};
