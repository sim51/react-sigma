import { WorkerLayoutControl, WorkerLayoutControlProps } from '@react-sigma/layout-core';
import { NoverlapLayoutSupervisorParameters } from 'graphology-layout-noverlap/worker';
import React from 'react';

import { useWorkerLayoutNoverlap } from './useWorkerLayoutNoverlap';

/**
 * Properties for `NoverlapControl` component
 */
export type LayoutNoverlapControlProps = Omit<WorkerLayoutControlProps, 'layout' | 'settings'> & {
  settings?: NoverlapLayoutSupervisorParameters;
};

/**
 * @category Component
 */
export const LayoutNoverlapControl: React.FC<LayoutNoverlapControlProps> = ({
  id,
  className,
  style,
  settings = {},
  autoRunFor,
  children,
  labels,
}) => {
  const layout = useWorkerLayoutNoverlap(settings);
  const workerLayoutProps = { id, className, style, autoRunFor, labels, layout };
  return <WorkerLayoutControl {...workerLayoutProps}>{children}</WorkerLayoutControl>;
};
