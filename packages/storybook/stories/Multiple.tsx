import { ControlsContainer, FullScreenControl, SigmaContainer, ZoomControl } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { LayoutForceAtlas2Control } from '@react-sigma/layout-forceatlas2';
import { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import { SigmaOptions } from 'sigma/types';

import { SampleGraph } from './common/SampleGraph';

// Sigma style
const sigmaStyle: CSSProperties = { height: '50%', width: '50%', float: 'left' };

const sigmaOptions: SigmaOptions = { settings: {} };

export const Multiple: FC<{ style?: CSSProperties }> = ({ style }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [faTime, setFaTime] = useState<number>(2000);

  useEffect(() => {
    // Set the FA2 time based on query parameters
    const params = new URLSearchParams(window.location.search);
    const time = params.get('faTime');
    setFaTime(Number.parseInt(time ?? '2000') || 2000);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100%', ...style }}>
      <SigmaContainer style={sigmaStyle} options={sigmaOptions}>
        <SampleGraph />
        <ControlsContainer position={'top-left'}>
          <ZoomControl />
          <FullScreenControl container={containerRef} />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer style={sigmaStyle} options={sigmaOptions}>
        <SampleGraph />
        <ControlsContainer position={'top-right'}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer style={sigmaStyle} options={sigmaOptions}>
        <SampleGraph />
        <ControlsContainer position={'bottom-left'}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
      </SigmaContainer>
      <SigmaContainer style={sigmaStyle} options={sigmaOptions}>
        <SampleGraph />
        <ControlsContainer position={'bottom-right'}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={faTime || 2000} />
        </ControlsContainer>
      </SigmaContainer>
    </div>
  );
};
