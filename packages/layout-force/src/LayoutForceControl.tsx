import { WorkerLayoutControl, WorkerLayoutControlProps } from '@react-sigma/layout-core';
import { ForceLayoutSupervisorParameters } from 'graphology-layout-force/worker';
import React from 'react';

import { useWorkerLayoutForce } from './useWorkerLayoutForce';

/**
 * Properties for `ForceDirectedControl` component
 */
export type LayoutForceControlProps = Omit<
  WorkerLayoutControlProps<ForceLayoutSupervisorParameters>,
  'layout' | 'settings'
> & {
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
  const workerLayoutProps = { id, className, style, settings, autoRunFor, labels, layout: useWorkerLayoutForce };
  return <WorkerLayoutControl {...workerLayoutProps}>{children}</WorkerLayoutControl>;
};
