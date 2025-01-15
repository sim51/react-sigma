import { WorkerLayoutControl, WorkerLayoutControlProps } from '@react-sigma/layout-core';
import { ForceAtlas2LayoutParameters } from 'graphology-layout-forceatlas2';
import React from 'react';

import { useWorkerLayoutForceAtlas2 } from './useWorkerLayoutForceAtlas2';

/**
 * Properties for `LayoutForceAtlas2Control` component
 */
export type LayoutForceAtlas2ControlProps = Omit<WorkerLayoutControlProps, 'layout' | 'settings'> & {
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
  const layout = useWorkerLayoutForceAtlas2(settings);
  const workerLayoutProps = { id, className, style, autoRunFor, labels, layout };
  return <WorkerLayoutControl {...workerLayoutProps}>{children}</WorkerLayoutControl>;
};
