import { ControlsContainer, SigmaContainer } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { layerBorder } from '@sigma/node-border';
import { CSSProperties, FC } from 'react';
import { SigmaOptions } from 'sigma/types';

import { LayoutsControl } from './common/LayoutsControl';
import { SampleGraph } from './common/SampleGraph';

// We add the node boder program to the sigma settings, and we set it as the default one.
// Now a node with a `borderSize` and/ord `borderColor` attributs will be displayed with a border.
// Check this link to know how to use this program :  https://www.sigmajs.org/storybook/?path=/story/node-border--node-border
//

const sigmaOptions: SigmaOptions = {
  primitives: {
    nodes: {
      variables: {
        borderColor: { type: 'color', default: 'red' },
      },
      layers: [
        layerBorder({
          borders: [
            { size: 0.3, color: { attribute: 'borderColor' }, mode: 'relative' },
            { size: 0, color: { attribute: 'color' }, fill: true },
          ],
        }),
      ],
    },
  },
};
export const NodeBorder: FC<{ style?: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} options={sigmaOptions}>
      <SampleGraph />
      <ControlsContainer position={'bottom-right'}>
        <LayoutsControl />
      </ControlsContainer>
    </SigmaContainer>
  );
};
