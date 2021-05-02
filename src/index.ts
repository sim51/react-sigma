import { CameraState } from "sigma/core/camera";
import { useSigma, useRegisterEvents, useLoadGraph, useSetSettings } from "./hooks";
import { ForceAtlasControl } from "./ForceAtlasControl";
import { SigmaContainer } from "./SigmaContainer";
import { ZoomControl } from "./ZoomControl";
import { ControlsContainer } from "./ControlsContainer";

interface EventHandlers {
  clickNode: ({ node: NodeKey, event: MouseCoords }) => void;
  rightClickNode: ({ node: NodeKey, event: MouseCoords }) => void;
  downNode: ({ node: NodeKey, event: MouseCoords }) => void;
  leaveNode: ({ node: NodeKey }) => void;
  enterNode: ({ node: NodeKey }) => void;
  clickStage: ({ event: MouseCoords }) => void;
  rightClickStage: ({ event: MouseCoords }) => void;
  downStage: ({ event: MouseCoords }) => void;
  kill: () => void;
  cameraUpdated: (e: CameraState) => void;
}

export {
  ControlsContainer,
  EventHandlers,
  ForceAtlasControl,
  SigmaContainer,
  ZoomControl,
  useSigma,
  useRegisterEvents,
  useLoadGraph,
  useSetSettings,
};
