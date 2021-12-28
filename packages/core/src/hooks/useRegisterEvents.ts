import { useEffect, useState } from "react";
import { Settings } from "sigma/settings";

import { useSigma } from "./useSigma";
import { useSetSettings } from "./useSetSettings";
import { EventHandlers } from "../types";

type EventType = keyof EventHandlers;

const sigmaEvents: Array<EventType> = [
  "clickNode",
  "rightClickNode",
  "downNode",
  "enterNode",
  "leaveNode",
  "doubleClickNode",
  "wheelNode",
  "clickEdge",
  "rightClickEdge",
  "downEdge",
  "enterEdge",
  "leaveEdge",
  "doubleClickEdge",
  "wheelEdge",
  "clickStage",
  "rightClickStage",
  "downStage",
  "doubleClickStage",
  "wheelStage",
  "kill",
];
const mouseEvents: Array<EventType> = [
  "click",
  "rightClick",
  "mouseup",
  "mousedown",
  "mousemove",
  "doubleClick",
  "wheel",
];
const touchEvents: Array<EventType> = ["mouseup", "mousedown", "mousemove"];
const cameraEvents: Array<EventType> = ["cameraUpdated"];

/**
 * React hook that helps you to listen Sigma’s events.
 * It handles for you all the lifecyle of listener (ie. on / remove)
 *
 * ```typescript
 * const registerEvents = useRegisterEvents();
 * registerEvents({
 *  enterNode: event => setHoveredNode(event.node),
 *  leaveNode: event => setHoveredNode(null),
 * });
 *```
 * @category Hook
 */
export function useRegisterEvents(): (eventHandlers: Partial<EventHandlers>) => void {
  const sigma = useSigma();
  const setSettings = useSetSettings();
  const [eventHandlers, setEventHandlers] = useState<Partial<EventHandlers>>({});

  useEffect(() => {
    if (!sigma || !eventHandlers) {
      return;
    }

    // list of event types to register
    const eventTypes = Object.keys(eventHandlers) as Array<EventType>;

    // Set settings for edge event if needed
    const edgeSettings: Partial<Settings> = {};
    const reverseEdgeSettings: Partial<Settings> = {};
    const sigmaSettings = sigma.getSettings();
    if (
      eventTypes.some((event) => ["clickEdge", "rightClickEdge", "doubleClickEdge", "downEdge"].includes(event)) &&
      sigmaSettings.enableEdgeClickEvents === false
    ) {
      edgeSettings["enableEdgeClickEvents"] = true;
      reverseEdgeSettings["enableEdgeClickEvents"] = false;
    }
    if (
      eventTypes.some((event) => ["enterEdge", "leaveEdge"].includes(event)) &&
      sigmaSettings.enableEdgeHoverEvents === false
    ) {
      edgeSettings["enableEdgeHoverEvents"] = true;
      reverseEdgeSettings["enableEdgeHoverEvents"] = false;
    }
    if (eventTypes.some((event) => ["wheelEdge"].includes(event)) && sigmaSettings.enableEdgeWheelEvents === false) {
      edgeSettings["enableEdgeWheelEvents"] = true;
      reverseEdgeSettings["enableEdgeWheelEvents"] = false;
    }
    if (Object.keys(edgeSettings).length > 0) {
      setSettings(edgeSettings);
    }

    eventTypes.forEach((event: EventType) => {
      const eventHandler = eventHandlers[event] as (...args: unknown[]) => void;
      if (sigmaEvents.includes(event)) {
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        sigma.on(event as any, eventHandler);
      }
      if (mouseEvents.includes(event)) {
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        sigma.getMouseCaptor().on(event as any, eventHandler);
      }
      if (touchEvents.includes(event)) {
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        sigma.getTouchCaptor().on(event as any, eventHandler);
      }
      if (cameraEvents.includes(event)) {
        // For now there is only one event on the camera
        sigma.getCamera().on("updated", eventHandler);
      }
    });

    // cleanup
    return () => {
      let event: EventType;

      // Reverse settings
      if (Object.keys(reverseEdgeSettings).length > 0) {
        setSettings(reverseEdgeSettings);
      }

      // remove events listener
      if (sigma) {
        for (event in eventHandlers) {
          const eventHandler = eventHandlers[event] as (...args: unknown[]) => void;
          if (sigmaEvents.includes(event)) {
            sigma.removeListener(event, eventHandler);
          }
          if (mouseEvents.includes(event)) {
            sigma.getMouseCaptor().removeListener(event, eventHandler);
          }
          if (touchEvents.includes(event)) {
            sigma.getTouchCaptor().removeListener(event, eventHandler);
          }
          if (cameraEvents.includes(event)) {
            // For now there is only one event on the camera
            sigma.getCamera().removeListener("updated", eventHandler);
          }
        }
      }
    };
  }, [sigma, eventHandlers, setSettings]);

  return setEventHandlers;
}
