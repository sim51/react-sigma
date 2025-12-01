import Graph from 'graphology';
import { Attributes } from 'graphology-types';
import React, {
  CSSProperties,
  PropsWithChildren,
  PropsWithoutRef,
  ReactElement,
  Ref,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Sigma } from 'sigma';
import { Settings } from 'sigma/settings';
import { CameraState } from 'sigma/types';

import { SigmaContextInterface, SigmaProvider } from '../hooks/context';
import { GraphType } from '../types';
import { isEqual } from '../utils';

/**
 * Properties for `SigmaContainer` component
 */
export interface SigmaContainerProps<N extends Attributes, E extends Attributes, G extends Attributes> {
  /**
   * Graphology instance or constructor
   */
  graph?: GraphType<N, E, G>;
  /**
   * Sigma settings
   */
  settings?: Partial<Settings<N, E, G>>;
  /**
   * HTML id
   */
  id?: string;
  /**
   * HTML class
   */
  className?: string;
  /**
   * HTML CSS style
   */
  style?: CSSProperties;
}

/**
 * The `SigmaContainer` component is responsible of create the Sigma instance, and provide it to its child components using a React Context that can be accessible via the hook {@link useSigma}.
 *
 * ```jsx
 * <SigmaContainer id="sigma-graph">
 *   <MyCustomGraph />
 * </SigmaContainer>
 *```
 *
 * See {@link SigmaContainerProps} for the component's properties.
 *
 * @category Component
 */
const SigmaContainerComponent = <
  N extends Attributes = Attributes,
  E extends Attributes = Attributes,
  G extends Attributes = Attributes,
>(
  { graph, id, className, style, settings = {}, children }: PropsWithChildren<SigmaContainerProps<N, E, G>>,
  ref: Ref<Sigma<N, E, G> | null>,
) => {
  // Root HTML element
  const rootRef = useRef<HTMLDivElement>(null);
  // HTML element for the sigma instance
  const containerRef = useRef<HTMLDivElement>(null);
  // Common html props for the container
  const props = { className: `react-sigma ${className ? className : ''}`, id, style };
  // Sigma instance
  const [sigma, setSigma] = useState<Sigma<N, E, G> | null>(null);
  // Sigma settings
  const [sigmaSettings, setSigmaSettings] = useState<Partial<Settings<N, E, G>>>(settings);
  useEffect(() => {
    setSigmaSettings((prev) => {
      if (!isEqual(prev, settings)) return settings;
      return prev;
    });
  }, [settings]);

  /**
   * When graph or settings changed
   * => create sigma
   */
  useEffect(() => {
    let instance: Sigma<N, E, G> | null = null;
    if (containerRef.current !== null) {
      let sigGraph = new Graph<N, E, G>();
      if (graph) {
        sigGraph = typeof graph === 'function' ? new graph() : graph;
      }
      instance = new Sigma(sigGraph, containerRef.current, sigmaSettings);
      setSigma((prev) => {
        let prevCameraState: CameraState | null = null;
        if (prev) {
          prevCameraState = prev.getCamera().getState();
        }
        if (prevCameraState) instance!.getCamera().setState(prevCameraState);
        return instance;
      });
    }
    return () => {
      if (instance) {
        instance.kill();
      }
    };
  }, [containerRef, graph, sigmaSettings]);

  /**
   * Forward the sigma ref
   */
  useImperativeHandle<Sigma<N, E, G> | null, Sigma<N, E, G> | null>(ref, () => sigma, [sigma]);

  /**
   * Memoify the context
   */
  const context = useMemo(() => {
    return sigma && rootRef.current ? { sigma, container: rootRef.current as HTMLElement } : null;
  }, [sigma, rootRef]) as SigmaContextInterface | null;

  // When context is created we provide it to children
  const contents = context !== null ? <SigmaProvider value={context}>{children}</SigmaProvider> : null;

  return (
    <div {...props} ref={rootRef}>
      <div className="sigma-container" ref={containerRef} />
      {contents}
    </div>
  );
};

/**
 * Redefine forwardRef for generics
 */
function fixedForwardRef<T, P = unknown>(
  render: (props: PropsWithoutRef<P>, ref: React.Ref<T>) => ReactElement,
): (props: P & React.RefAttributes<T>) => ReactElement {
  return forwardRef(render) as (props: P & React.RefAttributes<T>) => ReactElement;
}

/**
 * The `SigmaContainer` component is responsible of create the Sigma instance, and provide it to its child components using a React Context that can be accessible via the hook {@link useSigma}.
 *
 * ```jsx
 * <SigmaContainer id="sigma-graph">
 *   <MyCustomGraph />
 * </SigmaContainer>
 *```
 *
 * See {@link SigmaContainerProps} for the component's properties.
 *
 * @category Component
 */
export const SigmaContainer = fixedForwardRef(SigmaContainerComponent);
