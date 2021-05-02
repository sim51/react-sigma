import React, { CSSProperties, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import Sigma from "sigma/sigma";
import { Settings } from "sigma/settings";
import Graph from "graphology";
import { GraphOptions } from "graphology-types";
import { SigmaContext, SigmaProvider } from "./context";

interface SigmaContainerProps {
  graphOptions?: GraphOptions;
  initialSettings?: Settings;
  id?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export const SigmaContainer: React.FC<SigmaContainerProps> = ({
  graphOptions,
  id,
  className,
  style,
  initialSettings,
  children,
}) => {
  // HTML element for the sigma instance
  const containerRef = useRef<HTMLDivElement>(null);
  // Common html props for the container
  const [props] = useState({ className: `react-sigma-v2 ${className ? className : ""}`, id, style });
  // The sigma instance
  const [sigma, setSigma] = useState<Sigma | null>(null);

  // When graphOptions or settings changed
  useEffect(() => {
    if (containerRef.current !== null) {
      if (sigma !== null) sigma.kill();
      const instance = new Sigma(new Graph(graphOptions), containerRef.current, initialSettings);
      setSigma(instance);
    }
  }, [graphOptions, initialSettings, containerRef]);

  const context = useMemo(() => (sigma ? { sigma } : null), [sigma]);
  const contents = context !== null ? <SigmaProvider value={context}>{children}</SigmaProvider> : null;

  return (
    <div {...props}>
      <div className={"sigma-container"} ref={containerRef}></div>
      {contents}
    </div>
  );
};
