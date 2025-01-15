import { useSigma } from '@react-sigma/core';
import React, { FC, ReactNode, useMemo } from 'react';

import { Labels } from './types';

export interface NodeProps {
  label?: ReactNode;
  color?: string;
  hidden?: boolean;
  // Dynamic labels (for i18n for example)
  labels?: Labels;
}

/**
 * Component that display a node.
 *
 * @category Component
 */
export const Node: FC<NodeProps> = ({ label, color, hidden, labels = {} }) => {
  return (
    <div className="node">
      <span className={`render ${hidden ? 'circle' : 'disc'}`} style={{ backgroundColor: color || '#000' }} />
      <span className={`label ${hidden ? 'text-muted' : ''} ${!label ? 'text-italic' : ''}`}>
        {label || labels['no_label'] || 'No label'}
      </span>
    </div>
  );
};

/**
 * Component that display a node by its id.
 *
 * @category Component
 */
export const NodeById: FC<{ id: string; labels?: Labels }> = ({ id, labels }) => {
  const sigma = useSigma();

  const nodeProps = useMemo(() => {
    const attrs = sigma.getGraph().getNodeAttributes(id);
    const reducer = sigma.getSetting('nodeReducer');
    return {
      color: sigma.getSetting('defaultNodeColor'),
      ...attrs,
      ...(reducer ? reducer(id, attrs) : {}),
    };
  }, [sigma, id]);
  return <Node {...nodeProps} labels={labels} />;
};
