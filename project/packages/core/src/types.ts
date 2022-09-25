import { SigmaEvents } from "sigma/sigma";
import { TouchCaptorEvents } from "sigma/core/captors/touch";
import { MouseCaptorEvents } from "sigma/core/captors/mouse";
import { CameraEvents } from "sigma/core/camera";

/**
 * Sigma's events
 */
export type EventHandlers = SigmaEvents & TouchCaptorEvents & MouseCaptorEvents & CameraEvents;
