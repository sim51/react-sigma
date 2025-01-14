import { ControlsContainer, FullScreenControl, SearchControl, SigmaContainer, ZoomControl } from '@react-sigma/core';
import '@react-sigma/core/lib/react-sigma.min.css';
import { LayoutForceAtlas2Control } from '@react-sigma/layout-forceatlas2';
import { NodeImageProgram } from '@sigma/node-image';
import Graph from 'graphology';
import { SerializedGraph } from 'graphology-types';
import { CSSProperties, FC } from 'react';

import jsonGraph from '../public/react-sigma/demo/dataset.json';

// Sigma settings
const sigmaSettings = {
  allowInvalidContainer: true,
  nodeProgramClasses: { image: NodeImageProgram },
  defaultNodeType: 'image',
  defaultEdgeType: 'arrow',
  labelDensity: 0.07,
  labelGridCellSize: 60,
  labelRenderedSizeThreshold: 15,
  labelFont: 'Lato, sans-serif',
  zIndex: true,
};

export const Demo: FC<{ style?: CSSProperties }> = ({ style }) => {
  const graph = Graph.from(jsonGraph as SerializedGraph);

  return (
    <SigmaContainer settings={sigmaSettings} style={style} graph={graph}>
      <ControlsContainer position={'bottom-right'}>
        <ZoomControl />
        <FullScreenControl />
        <LayoutForceAtlas2Control />
      </ControlsContainer>
      <ControlsContainer position={'top-right'}>
        <SearchControl style={{ width: '200px' }} />
      </ControlsContainer>
    </SigmaContainer>
  );
};
