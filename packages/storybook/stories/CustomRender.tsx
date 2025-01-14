import { ControlsContainer, FullScreenControl, SigmaContainer, ZoomControl } from '@react-sigma/core';
import '@react-sigma/core/lib/react-sigma.min.css';
import { LayoutForceAtlas2Control } from '@react-sigma/layout-forceatlas2';
import { CSSProperties, FC, useEffect, useState } from 'react';
import {
  AiFillPauseCircle,
  AiFillPlayCircle,
  AiOutlineFullscreen,
  AiOutlineFullscreenExit,
  AiOutlineZoomIn,
  AiOutlineZoomOut,
} from 'react-icons/ai';
import { MdFilterCenterFocus } from 'react-icons/md';

import { SampleGraph } from './common/SampleGraph';

export const CustomRender: FC<{ style?: CSSProperties }> = ({ style }) => {
  const [faTime, setFaTime] = useState<number>(2000);

  useEffect(() => {
    // Globally seed the Math.random
    const params = new URLSearchParams(window.location.search);
    const time = params.get('faTime');
    setFaTime(Number.parseInt(time ?? '2000') || 2000);
  }, [window.location]);

  return (
    <SigmaContainer style={style} settings={{ allowInvalidContainer: true }}>
      <SampleGraph />
      <ControlsContainer position={'bottom-right'}>
        <ZoomControl labels={{ zoomIn: 'PLUS', zoomOut: 'MINUS', reset: 'RESET' }}>
          <AiOutlineZoomIn />
          <AiOutlineZoomOut />
          <MdFilterCenterFocus />
        </ZoomControl>
        <FullScreenControl labels={{ enter: 'ENTER', exit: 'EXIT' }}>
          <AiOutlineFullscreen />
          <AiOutlineFullscreenExit />
        </FullScreenControl>
        <LayoutForceAtlas2Control labels={{ stop: 'STOP', start: 'START' }} autoRunFor={faTime}>
          <AiFillPlayCircle />
          <AiFillPauseCircle />
        </LayoutForceAtlas2Control>
      </ControlsContainer>
    </SigmaContainer>
  );
};
