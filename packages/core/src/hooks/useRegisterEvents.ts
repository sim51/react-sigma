import { useEffect, useState } from "react";
import { SigmaEvents, TouchCaptorEvents, MouseCaptorEvents, CameraEvents } from "sigma/types";

import { useSigma } from "./useSigma";
import { useSetSettings } from "./useSetSettings";
import { EventHandlers } from "../types";
import { Attributes } from "graphology-types";

type EventType = keyof EventHandlers;

function keySet<T>(record: Record<keyof T, unknown>): Set<string> {
  return new Set<string>(Object.keys(record));
}

const sigmaEvents = keySet<SigmaEvents>({
  clickNode: true,
  rightClickNode: true,
  downNode: true,
  enterNode: true,
  leaveNode: true,
  doubleClickNode: true,
  wheelNode: true,
  clickEdge: true,
  rightClickEdge: true,
  downEdge: true,
  enterEdge: true,
  leaveEdge: true,
  doubleClickEdge: true,
  wheelEdge: true,
  clickStage: true,
  rightClickStage: true,
  downStage: true,
  doubleClickStage: true,
  wheelStage: true,
  beforeRender: true,
  afterRender: true,
  kill: true,
  upStage: true,
  upEdge: true,
  upNode: true,
  enterStage: true,
  leaveStage: true,
  resize: true,
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
});
const cameraEvents = keySet<CameraEvents>({ updated: true });

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
 * @category Hook
 */
export function useRegisterEvents<
  N extends Attributes = Attributes,
  E extends Attributes = Attributes,
  G extends Attributes = Attributes,
>(): (eventHandlers: Partial<EventHandlers>) => void {
  const sigma = useSigma<N, E, G>();
  const setSettings = useSetSettings<N, E, G>();
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
  }, [sigma, eventHandlers, setSettings]);

  return setEventHandlers;
}
