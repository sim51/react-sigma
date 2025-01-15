import { WorkerLayoutControl, WorkerLayoutControlProps } from '@react-sigma/layout-core';
import { ForceLayoutSupervisorParameters } from 'graphology-layout-force/worker';
import React from 'react';

import { useWorkerLayoutForce } from './useWorkerLayoutForce';

/**
 * Properties for `ForceDirectedControl` component
 */
export type LayoutForceControlProps = Omit<WorkerLayoutControlProps, 'layout' | 'settings'> & {
  settings?: ForceLayoutSupervisorParameters;
};

/**
 * Component that display a button to start/stop the layout.
 *
 * @category Component
 */
export const LayoutForceControl: React.FC<LayoutForceControlProps> = ({
  id,
  className,
  style,
  settings = {},
  autoRunFor,
  children,
  labels,
}) => {
  const layout = useWorkerLayoutForce(settings);
  const workerLayoutProps = { id, className, style, autoRunFor, labels, layout };
  return <WorkerLayoutControl {...workerLayoutProps}>{children}</WorkerLayoutControl>;
};
