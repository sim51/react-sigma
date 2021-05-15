import React, { CSSProperties, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import Sigma from "sigma/sigma";
import { Settings } from "sigma/settings";
import Graph from "graphology";
import { GraphOptions } from "graphology-types";
import { isEqual } from "lodash";
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
  // Sigma instance
  const [sigma, setSigma] = useState<Sigma | null>(null);
  // Sigma settings
  const settings = useRef<Settings>(initialSettings);
  if (!isEqual(settings.current, initialSettings)) settings.current = initialSettings;
  // Graph options
  const graph = useRef<Settings>(graphOptions);
  if (!isEqual(graph.current, graphOptions)) graph.current = graphOptions;

  // When graphOptions or settings changed
  useEffect(() => {
    if (containerRef.current !== null) {
      const instance = new Sigma(new Graph(graph.current), containerRef.current, settings.current);
      setSigma(instance);
      console.log("New Sigma");
    }
    return () => {
      console.log("kill");
      setSigma(instance => {
        if (instance) instance.kill();
        return null;
      });
    };
  }, [containerRef, graph, settings]);

  const context = useMemo(() => (sigma ? { sigma } : null), [sigma]);
  const contents = context !== null ? <SigmaProvider value={context}>{children}</SigmaProvider> : null;

  return (
    <div {...props}>
      <div className={"sigma-container"} ref={containerRef}></div>
      {contents}
    </div>
  );
};
