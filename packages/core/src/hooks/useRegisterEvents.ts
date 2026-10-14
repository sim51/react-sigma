import { Attributes } from 'graphology-types';
import { useEffect, useState } from 'react';
import { CameraEvents, MouseCaptorEvents, PrimitivesDeclaration, SigmaEvents, TouchCaptorEvents } from 'sigma/types';

import { EventHandlers } from '../types';
import { useSigma } from './useSigma';

type EventType = keyof EventHandlers;

function keySet<T>(record: Record<keyof T, unknown>): Set<string> {
  return new Set<string>(Object.keys(record));
}

const sigmaEvents = keySet<SigmaEvents>({
  // node events
  clickNode: true,
  rightClickNode: true,
  downNode: true,
  upNode: true,
  enterNode: true,
  leaveNode: true,
  doubleClickNode: true,
  wheelNode: true,
  // node's label events
  clickNodeLabel: true,
  rightClickNodeLabel: true,
  doubleClickNodeLabel: true,
  wheelNodeLabel: true,
  downNodeLabel: true,
  upNodeLabel: true,
  enterNodeLabel: true,
  leaveNodeLabel: true,
  // edge events
  clickEdge: true,
  rightClickEdge: true,
  downEdge: true,
  upEdge: true,
  enterEdge: true,
  leaveEdge: true,
  doubleClickEdge: true,
  wheelEdge: true,
  // edge's label event
  clickEdgeLabel: true,
  rightClickEdgeLabel: true,
  doubleClickEdgeLabel: true,
  wheelEdgeLabel: true,
  downEdgeLabel: true,
  upEdgeLabel: true,
  enterEdgeLabel: true,
  leaveEdgeLabel: true,
  // stage events
  clickStage: true,
  rightClickStage: true,
  downStage: true,
  doubleClickStage: true,
  wheelStage: true,
  upStage: true,
  enterStage: true,
  leaveStage: true,
  // misc
  beforeRender: true,
  afterRender: true,
  kill: true,
  resize: true,
  afterClear: true,
  afterProcess: true,
  beforeClear: true,
  beforeProcess: true,
  moveBody: true,
  nodeDragStart: true,
  nodeDrag: true,
  nodeDragEnd: true,
  afterTexturesUpload: true,
  webglContextLost: true,
  webglContextRestored: true,
});

const mouseEvents = keySet<MouseCaptorEvents>({
  click: true,
  rightClick: true,
  doubleClick: true,
  mouseup: true,
  mousedown: true,
  mousemove: true,
  mousemovebody: true,
  mouseleave: true,
  mouseenter: true,
  wheel: true,
});

const touchEvents = keySet<TouchCaptorEvents>({
  touchup: true,
  touchdown: true,
  touchmove: true,
  touchmovebody: true,
  tap: true,
  doubletap: true,
});
const cameraEvents = keySet<CameraEvents>({
  updated: true,
  animationStart: undefined,
  animationEnd: undefined,
});

/**
 * React hook that helps you to listen Sigma’s events.
 * It handles for you all the lifecyle of listener (ie. on / remove)
 *
 * ```typescript
 * const registerEvents = useRegisterEvents();
 * const [setHoveredNode,setHoveredNode] = useState<string|null>(null);
 * ...
 * useEffect(() => {
 *  registerEvents({
 *    enterNode: event => setHoveredNode(event.node),
 *    leaveNode: event => setHoveredNode(null),
 *  });
 * }, []);
 *```
 *
 * See {@link EventHandlers} for the events.
 *
 * @category Hook
 */
export function useRegisterEvents<
  N extends Attributes = Attributes,
  E extends Attributes = Attributes,
  G extends Attributes = Attributes,
  NS = unknown,
  ES = unknown,
  GS = unknown,
  P extends PrimitivesDeclaration = PrimitivesDeclaration,
>(): (eventHandlers: Partial<EventHandlers>) => void {
  const sigma = useSigma<N, E, G, NS, ES, GS, P>();
  const [eventHandlers, setEventHandlers] = useState<Partial<EventHandlers>>({});

  useEffect(() => {
    if (!sigma || !eventHandlers) {
      return;
    }

    const userEvents = eventHandlers;

    // list of event types to register
    const eventTypes = Object.keys(userEvents) as Array<EventType>;

    // register events
    eventTypes.forEach((event: EventType) => {
      const eventHandler = userEvents[event] as (...args: unknown[]) => void;
      if (sigmaEvents.has(event)) {
        sigma.on(event as keyof SigmaEvents, eventHandler);
      }
      if (mouseEvents.has(event)) {
        sigma.getMouseCaptor().on(event as keyof MouseCaptorEvents, eventHandler);
      }
      if (touchEvents.has(event)) {
        sigma.getTouchCaptor().on(event as keyof TouchCaptorEvents, eventHandler);
      }
      if (cameraEvents.has(event)) {
        sigma.getCamera().on(event as keyof CameraEvents, eventHandler);
      }
    });

    // cleanup
    return () => {
      // remove events listener
      if (sigma) {
        eventTypes.forEach((event: EventType) => {
          const eventHandler = userEvents[event] as (...args: unknown[]) => void;
          if (sigmaEvents.has(event)) {
            sigma.off(event as keyof SigmaEvents, eventHandler);
          }
          if (mouseEvents.has(event)) {
            sigma.getMouseCaptor().off(event as keyof MouseCaptorEvents, eventHandler);
          }
          if (touchEvents.has(event)) {
            sigma.getTouchCaptor().off(event as keyof TouchCaptorEvents, eventHandler);
          }
          if (cameraEvents.has(event)) {
            sigma.getCamera().off(event as keyof CameraEvents, eventHandler);
          }
        });
      }
    };
  }, [sigma, eventHandlers]);

  return setEventHandlers;
}
