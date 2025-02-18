import { ControlsContainer, SigmaContainer } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { createNodeBorderProgram } from '@sigma/node-border';
import { CSSProperties, FC } from 'react';

import { LayoutsControl } from './common/LayoutsControl';
import { SampleGraph } from './common/SampleGraph';

// We add the node boder program to the sigma settings, and we set it as the default one.
// Now a node with a `borderSize` and/ord `borderColor` attributs will be displayed with a border.
// Check this link to know how to use this program :  https://www.sigmajs.org/storybook/?path=/story/node-border--node-border
//
// NB: the graph used in this example is printed in the console.
const sigmaSettings = {
  allowInvalidContainer: true,
  defaultNodeType: 'bordered',
  nodeProgramClasses: {
    bordered: createNodeBorderProgram({
      borders: [
        { size: { attribute: 'borderSize', defaultValue: 0 }, color: { attribute: 'borderColor' } },
        { size: { fill: true }, color: { attribute: 'color' } },
      ],
    }),
  },
};

export const NodeBorder: FC<{ style?: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={sigmaSettings}>
      <SampleGraph />
      <ControlsContainer position={'bottom-right'}>
        <LayoutsControl />
      </ControlsContainer>
    </SigmaContainer>
  );
};
