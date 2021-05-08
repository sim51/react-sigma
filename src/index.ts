import { CameraState } from "sigma/core/camera";
import { useSigma, useRegisterEvents, useLoadGraph, useSetSettings } from "./hooks";
import { SigmaContainer } from "./SigmaContainer";
import { ControlsContainer } from "./controls/ControlsContainer";
import { ForceAtlasControl } from "./controls/ForceAtlasControl";
import { ZoomControl } from "./controls/ZoomControl";
import { FullScreenControl } from "./controls/FullScreenControl";
import { SearchControl } from "./controls/SearchControl";

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
  FullScreenControl,
  SearchControl,
  SigmaContainer,
  ZoomControl,
  useSigma,
  useRegisterEvents,
  useLoadGraph,
  useSetSettings,
};
