import React from "react";
import { NoverlapLayoutSupervisorParameters } from "graphology-layout-noverlap/worker";

import { useWorkerLayoutNoverlap } from "../../../hooks/layouts/worker/useWorkerLayoutNoverlap";
import { WorkerLayoutControlProps, WorkerLayoutControl } from "./WorkerLayoutControl";

/**
 * Properties for `NoverlapControl` component
 */
export type NoverlapControlProps = Omit<
  WorkerLayoutControlProps<NoverlapLayoutSupervisorParameters>,
  "layout" | "settings"
> & {
  settings?: NoverlapLayoutSupervisorParameters;
};

export const NoverlapControl: React.FC<NoverlapControlProps> = props => {
  const workerLayoutProps = {
    ...props,
    settings: props.settings || {},
    layout: useWorkerLayoutNoverlapForceAtlas2,
  };
  return <WorkerLayoutControl {...workerLayoutProps} />;
};
