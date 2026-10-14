import { ControlsContainer, FullScreenControl, SigmaContainer, ZoomControl } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { LayoutForceAtlas2Control } from '@react-sigma/layout-forceatlas2';
import { MiniMap } from '@react-sigma/minimap';
import { layerImage } from '@sigma/node-image';
import Graph from 'graphology';
import { SerializedGraph } from 'graphology-types';
import { CSSProperties, FC } from 'react';
import { DEFAULT_STYLES } from 'sigma';
import { layerFill } from 'sigma/rendering';
import { SigmaOptions } from 'sigma/types';

import jsonGraph from '../public/react-sigma/demo/dataset.json';

// Sigma settings
const sigmaOptions: SigmaOptions = {
  settings: {
    labelDensity: 0.07,
    labelGridCellSize: 60,
    labelRenderedSizeThreshold: 15,
    itemSizesReference: 'screen',
  },
  primitives: {
    nodes: {
      variables: { image: { type: 'string', default: '/' } },
      layers: [layerFill(), layerImage()],
    },
  },
  styles: {
    nodes: [
      DEFAULT_STYLES.nodes,
      {
        labelFont: 'Lato, sans-serif',
      },
    ],
  },
};

export const MinimapDemo: FC<{ style?: CSSProperties }> = ({ style }) => {
  const graph = Graph.from(jsonGraph as SerializedGraph);

  return (
    <SigmaContainer options={sigmaOptions} style={style} graph={graph}>
      <ControlsContainer position={'bottom-right'}>
        <ZoomControl />
        <FullScreenControl />
        <LayoutForceAtlas2Control />
      </ControlsContainer>
      <ControlsContainer position={'bottom-left'}>
        <MiniMap width="100px" height="100px" />
      </ControlsContainer>
    </SigmaContainer>
  );
};
