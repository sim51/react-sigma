import { SigmaContainer, debounce, useSigma } from '@react-sigma/core';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Sigma } from 'sigma';

interface MiniMapProps {
  /**
   * Width of the minimap.
   * Exemple: "200px"
   */
  width: string;
  /**
   * Height of the minimap.
   * Exemple: "200px"
   */
  height: string;
  /**
   * Debouce time in ms for the minimap to update its viewbox, to avoid too many updates.
   * Default: 0
   */
  debounceTime?: number;
}
export const MiniMap: FC<MiniMapProps> = ({ width, height, debounceTime }) => {
  const sigma = useSigma();
  const [minimap, setMinimap] = useState<Sigma | null>(null);
  const [ratioHeight, setRatioHeight] = useState(0);
  const [view, setView] = useState({ top: 0, left: 0, width: 0, height: 0 });

  /**
   * When minimap is mounted, disable its camera and set the ratio between the minimap and the main sigma instance.
   */
  useEffect(() => {
    if (minimap) {
      minimap.getCamera().disable();
      setRatioHeight(minimap.getContainer().clientHeight / sigma.getContainer().clientHeight);
    }
  }, [minimap]);

  /**
   * Minimap node reducer based on the one used in the main sigma instance.
   */
  const nodeReducer = useCallback(
    (node: string) => {
      const data = sigma.getNodeDisplayData(node)!;
      return {
        ...data,
        type: 'circle',
        size: data.size * ratioHeight,
      };
    },
    [sigma, ratioHeight],
  );

  /**
   * Minimap edge reducer => do not display edges.
   */
  const edgeReducer = useCallback((_edge: string) => ({ hidden: true }), []);

  /**
   * Update the viewbox of the minimap based on the main sigma instance camera,
   * by listening to the camera updates.
   */
  useEffect(() => {
    function fnUpdateViewbox() {
      if (minimap === null) return;

      const bbox = sigma.viewRectangle();
      const topLeft = minimap?.framedGraphToViewport({ x: bbox.x1, y: bbox.y1 });
      const bottomRight = minimap?.framedGraphToViewport({ x: bbox.x2, y: bbox.y2 + bbox.height });
      setView({
        left: topLeft.x,
        top: topLeft.y,
        height: topLeft.y - bottomRight.y,
        width: bottomRight.x - topLeft.x,
      });
    }
    // Call it at mount
    fnUpdateViewbox();

    // Debounce the function and listen on sigma camera updates
    const fnUpdateViewboxDebounce = debounce(fnUpdateViewbox, debounceTime || 0);
    sigma.getCamera().on('updated', fnUpdateViewboxDebounce);

    // Cleanup
    return () => {
      sigma.getCamera().off('updated', fnUpdateViewbox);
    };
  }, [sigma, minimap, setView, debounce]);

  return (
    <SigmaContainer
      ref={setMinimap}
      settings={{
        renderLabels: false,
        maxCameraRatio: 1,
        minCameraRatio: 1,
        stagePadding: 2,
        nodeReducer,
        edgeReducer,
      }}
      style={{ width, height }}
      graph={sigma.getGraph()}
    >
      <div
        className="overlay"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            border: '1px solid #000',
            backgroundColor: '#CCC',
            opacity: 0.5,
            position: 'absolute',
            ...view,
          }}
        />
      </div>
    </SigmaContainer>
  );
};
