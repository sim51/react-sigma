import { Sigma } from "sigma";
import { Settings } from "sigma/settings";
import Graph from "graphology";
import { EventHandlers } from "./index";
export declare function useSigma(): Sigma;
export declare function useLoadGraph(): (graph: Graph, clear?: boolean) => void;
export declare function useRegisterEvents(): (eventHandlers: Partial<EventHandlers>) => void;
export declare function useSetSettings(): (newSettings: Partial<Settings>) => void;
