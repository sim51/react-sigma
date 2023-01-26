import React from "react";
import { ForceAtlas2LayoutParameters } from "graphology-layout-forceatlas2";

import { WorkerLayoutControlProps, WorkerLayoutControl } from "@react-sigma/layout-core";
import { useWorkerLayoutForceAtlas2 } from "./useWorkerLayoutForceAtlas2";

/**
 * Properties for `LayoutForceAtlas2Control` component
 */
export type LayoutForceAtlas2ControlProps = Omit<
  WorkerLayoutControlProps<ForceAtlas2LayoutParameters>,
  "layout" | "settings"
> & {
  settings?: ForceAtlas2LayoutParameters;
};

/**
 * @category Component
 */
export const LayoutForceAtlas2Control: React.FC<LayoutForceAtlas2ControlProps> = ({
  id,
  className,
  style,
  settings = {},
  autoRunFor,
  children,
  labels,
}) => {
  const workerLayoutProps = { id, className, style, settings, autoRunFor, labels, layout: useWorkerLayoutForceAtlas2 };
  return <WorkerLayoutControl {...workerLayoutProps}>{children}</WorkerLayoutControl>;
};
