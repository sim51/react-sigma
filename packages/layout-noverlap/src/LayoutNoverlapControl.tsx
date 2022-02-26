import React from "react";
import { NoverlapLayoutSupervisorParameters } from "graphology-layout-noverlap/worker";

import { WorkerLayoutControlProps, WorkerLayoutControl } from "@react-sigma/layout-core";
import { useWorkerLayoutNoverlap } from "./useWorkerLayoutNoverlap";

/**
 * Properties for `NoverlapControl` component
 */
export type LayoutNoverlapControlProps = Omit<
  WorkerLayoutControlProps<NoverlapLayoutSupervisorParameters>,
  "layout" | "settings"
> & {
  settings?: NoverlapLayoutSupervisorParameters;
};

/**
 * @category Component
 */
export const LayoutNoverlapControl: React.FC<LayoutNoverlapControlProps> = (props: LayoutNoverlapControlProps) => {
  const workerLayoutProps = {
    ...props,
    settings: props.settings || {},
    layout: useWorkerLayoutNoverlap,
  };
  return <WorkerLayoutControl {...workerLayoutProps} />;
};
