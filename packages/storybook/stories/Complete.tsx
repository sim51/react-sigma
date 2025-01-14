import {
  ControlsContainer,
  FullScreenControl,
  SigmaContainer,
  ZoomControl,
  useCamera,
  useSigma,
} from '@react-sigma/core';
import '@react-sigma/core/lib/react-sigma.min.css';
import { GraphSearch } from '@react-sigma/graph-search';
import { MiniMap } from '@react-sigma/minimap';
import { CSSProperties, FC, useEffect, useState } from 'react';

import { LayoutsControl } from './common/LayoutsControl';
import { SampleGraph } from './common/SampleGraph';

const FocusOnNode: FC<{ node: string | null; move?: boolean }> = ({ node, move }) => {
  // Get sigma
  const sigma = useSigma();
  // Get camera hook
  const { gotoNode } = useCamera();

  /**
   * When the selected item changes, highlighted the node and center the camera on it.
   */
  useEffect(() => {
    if (!node) return;
    sigma.getGraph().setNodeAttribute(node, 'highlighted', true);
    if (move) gotoNode(node);

    return () => {
      sigma.getGraph().setNodeAttribute(node, 'highlighted', false);
    };
  }, [node, move, sigma]);

  return null;
};

export const Complete: FC<{ style?: CSSProperties }> = ({ style }) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [focusNode, setFocusNode] = useState<string | null>(null);

  return (
    <SigmaContainer settings={{ allowInvalidContainer: true }} style={style}>
      <SampleGraph />
      <FocusOnNode node={focusNode ?? selectedNode} />
      <ControlsContainer position={'bottom-right'}>
        <ZoomControl />
        <FullScreenControl />
        <LayoutsControl />
      </ControlsContainer>
      <ControlsContainer position={'top-right'}>
        <GraphSearch
          value={selectedNode ? { type: 'nodes', id: selectedNode } : null}
          onFocus={(value) => {
            if (value === null) setFocusNode(null);
            else if (value.type === 'nodes') setFocusNode(value.id);
          }}
          onChange={(value) => {
            if (value === null) setSelectedNode(null);
            else if (value.type === 'nodes') setSelectedNode(value.id);
          }}
        />
      </ControlsContainer>

      <ControlsContainer position={'bottom-left'}>
        <MiniMap width="100px" height="100px" />
      </ControlsContainer>
    </SigmaContainer>
  );
};
