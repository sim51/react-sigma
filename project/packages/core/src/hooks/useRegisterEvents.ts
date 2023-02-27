import { useEffect, useState } from "react";
import { Settings } from "sigma/settings";
import { SigmaEvents } from "sigma/sigma";
import { TouchCaptorEvents } from "sigma/core/captors/touch";
import { MouseCaptorEvents } from "sigma/core/captors/mouse";
import { CameraEvents } from "sigma/core/camera";

import { useSigma } from "./useSigma";
import { useSetSettings } from "./useSetSettings";
import { EventHandlers } from "../types";

type EventType = keyof EventHandlers;

const sigmaEvents: Array<keyof SigmaEvents> = [
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
  "beforeRender",
  "afterRender",
  "kill",
];
const mouseEvents: Array<keyof MouseCaptorEvents> = [
  "click",
  "rightClick",
  "mouseup",
  "mousedown",
  "mousemove",
  "mousemovebody",
  "doubleClick",
  "wheel",
];
const touchEvents: Array<keyof TouchCaptorEvents> = ["touchup", "touchdown", "touchmove"];
const cameraEvents: Array<keyof CameraEvents> = ["updated"];

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

    const userEvents = eventHandlers;

    // list of event types to register
    const eventTypes = Object.keys(userEvents) as Array<EventType>;

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
      const eventHandler = userEvents[event] as (...args: unknown[]) => void;
      if (sigmaEvents.find((e) => e === event)) {
        sigma.on(event as keyof SigmaEvents, eventHandler);
      }
      if (mouseEvents.find((e) => e === event)) {
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        sigma.getMouseCaptor().on(event as keyof MouseCaptorEvents, eventHandler);
      }
      if (touchEvents.find((e) => e === event)) {
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        sigma.getTouchCaptor().on(event as keyof TouchCaptorEvents, eventHandler);
      }
      if (cameraEvents.find((e) => e === event)) {
        sigma.getCamera().on(event as keyof CameraEvents, eventHandler);
      }
    });

    // cleanup
    return () => {
      // Reverse settings
      if (Object.keys(reverseEdgeSettings).length > 0) {
        setSettings(reverseEdgeSettings);
      }

      // remove events listener
      if (sigma) {
        eventTypes.forEach((event: EventType) => {
          const eventHandler = userEvents[event] as (...args: unknown[]) => void;
          if (sigmaEvents.find((e) => e === event)) {
            sigma.off(event as keyof SigmaEvents, eventHandler);
          }
          if (mouseEvents.find((e) => e === event)) {
            sigma.getMouseCaptor().off(event as keyof MouseCaptorEvents, eventHandler);
          }
          if (touchEvents.find((e) => e === event)) {
            sigma.getTouchCaptor().off(event as keyof TouchCaptorEvents, eventHandler);
          }
          if (cameraEvents.find((e) => e === event)) {
            sigma.getCamera().off(event as keyof CameraEvents, eventHandler);
          }
        });
      }
    };
  }, [sigma, eventHandlers, setSettings]);

  return setEventHandlers;
}
