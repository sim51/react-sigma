import { CameraState } from "sigma/core/camera";
import { useSigma, useRegisterEvents, useLoadGraph, useSetSettings } from "./hooks";
import { SigmaContainer } from "./SigmaContainer";
import { ControlsContainer } from "./controls/ControlsContainer";
import { ForceAtlasControl } from "./controls/ForceAtlasControl";
import { ZoomControl } from "./controls/ZoomControl";
import { FullScreenControl } from "./controls/FullScreenControl";
import { SearchControl } from "./controls/SearchControl";
interface EventHandlers {
    clickNode: ({ node: NodeKey, event: MouseCoords }: {
        node: any;
        event: any;
    }) => void;
    rightClickNode: ({ node: NodeKey, event: MouseCoords }: {
        node: any;
        event: any;
    }) => void;
    downNode: ({ node: NodeKey, event: MouseCoords }: {
        node: any;
        event: any;
    }) => void;
    leaveNode: ({ node: NodeKey }: {
        node: any;
    }) => void;
    enterNode: ({ node: NodeKey }: {
        node: any;
    }) => void;
    clickStage: ({ event: MouseCoords }: {
        event: any;
    }) => void;
    rightClickStage: ({ event: MouseCoords }: {
        event: any;
    }) => void;
    downStage: ({ event: MouseCoords }: {
        event: any;
    }) => void;
    kill: () => void;
    cameraUpdated: (e: CameraState) => void;
}
export { ControlsContainer, EventHandlers, ForceAtlasControl, FullScreenControl, SearchControl, SigmaContainer, ZoomControl, useSigma, useRegisterEvents, useLoadGraph, useSetSettings, };
