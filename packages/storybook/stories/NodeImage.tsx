import { ControlsContainer, SigmaContainer } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { layerImage } from '@sigma/node-image';
import { CSSProperties, FC } from 'react';
import { layerFill } from 'sigma/rendering';
import { SigmaOptions } from 'sigma/types';

import { LayoutsControl } from './common/LayoutsControl';
import { SampleGraph } from './common/SampleGraph';

// We add the node boder program to the sigma settings, and we set it as the default one.
// Now a node with a `borderSize` and/ord `borderColor` attributs will be displayed with a border.
// Check this link to know how to use this program :  https://www.sigmajs.org/storybook/?path=/story/node-border--node-border
//

// Sigma settings
const sigmaOptions: SigmaOptions = {
  settings: {
    allowInvalidContainer: true,
    labelDensity: 0.07,
    labelGridCellSize: 60,
    labelRenderedSizeThreshold: 15,
  },
  primitives: {
    nodes: {
      variables: { image: { type: 'string', default: '/' } },
      layers: [layerFill(), layerImage()],
    },
  },
};

export const NodeImage: FC<{ style?: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} options={sigmaOptions}>
      <SampleGraph />
      <ControlsContainer position={'bottom-right'}>
        <LayoutsControl />
      </ControlsContainer>
    </SigmaContainer>
  );
};
