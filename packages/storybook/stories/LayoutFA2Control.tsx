import { ControlsContainer, SigmaContainer } from '@react-sigma/core';
import '@react-sigma/core/lib/react-sigma.min.css';
import '@react-sigma/core/lib/react-sigma.min.css';
import { LayoutForceAtlas2Control } from '@react-sigma/layout-forceatlas2';
import { CSSProperties, FC } from 'react';

import { SampleGraph } from './common/SampleGraph';

export const LayoutFA2Control: FC<{ style: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={{ allowInvalidContainer: true }}>
      <SampleGraph />
      <ControlsContainer position={'bottom-right'}>
        <LayoutForceAtlas2Control settings={{ settings: { slowDown: 10 } }} />
      </ControlsContainer>
    </SigmaContainer>
  );
};
