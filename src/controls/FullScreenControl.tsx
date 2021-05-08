import React, { useEffect, useState, useRef } from "react";
import { useSigma } from "../hooks";

interface Props {}

export const FullScreenControl: React.FC<Props> = ({}) => {
  // Get Sigma
  const sigma = useSigma();
  // Is full screen mode enabled
  const [isFullScreen, setFullScreen] = useState<boolean>(false);
  // HTML element for the button
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const sigmaRootElement = containerRef.current.closest("div.react-sigma-v2");
      if (sigmaRootElement) {
        if (isFullScreen && !sigmaRootElement.classList.contains("fullscreen"))
          sigmaRootElement.classList.add("fullscreen");
        sigma.refresh();
        if (!isFullScreen && sigmaRootElement.classList.contains("fullscreen"))
          sigmaRootElement.classList.remove("fullscreen");
        sigma.refresh();
      }
    }
  }, [isFullScreen, useSigma]);

  return (
    <>
      <div ref={containerRef} className={`react-sigma-control-${isFullScreen ? "normalscreen" : "fullscreen"}`}>
        <button onClick={() => setFullScreen(!isFullScreen)} title="Toggle Fullscreen"></button>
      </div>
    </>
  );
};
