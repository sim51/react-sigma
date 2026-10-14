import { ControlsContainer, FullScreenControl, SigmaContainer, ZoomControl } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { CSSProperties, FC } from 'react';

import { SampleGraph } from './common/SampleGraph';

/**
 * With sigma v4, drag'n'drop feature is free, you just have to enabled it via the setting `enableNodeDrag`.
 * Check the documentation: https://www.sigmajs.org/how-to/interactivity/drag-drop/
 */
export const DragNdrop: FC<{ style: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} options={{ settings: { enableNodeDrag: true } }}>
      <SampleGraph />
      <ControlsContainer position={'bottom-right'}>
        <ZoomControl />
        <FullScreenControl />
      </ControlsContainer>
    </SigmaContainer>
  );
};
