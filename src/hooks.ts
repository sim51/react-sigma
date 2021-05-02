import { useEffect, useState } from "react";
import { Sigma } from "sigma/sigma";
import { Settings } from "sigma/settings";
import Graph from "graphology";
import { useSigmaContext } from "./context";
import { EventHandlers } from "./index";

export function useSigma(): Sigma {
  return useSigmaContext().sigma;
}

export function useLoadGraph(): (graph: Graph, clear?: boolean) => void {
  const sigma = useSigma();

  return (graph: Graph, clear = true) => {
    if (sigma && graph) {
      if (clear && sigma.getGraph().order > 0) sigma.getGraph().clear();
      sigma.getGraph().import(graph);
    }
  };
}

export function useRegisterEvents(): (eventHandlers: Partial<EventHandlers>) => void {
  const sigma = useSigma();
  const [eventHandlers, setEventHandlers] = useState<Partial<EventHandlers>>({});

  useEffect(() => {
    if (sigma && eventHandlers) {
      Object.keys(eventHandlers).forEach(name => {
        if (name === "cameraUpdated") {
          sigma.camera.on(name, eventHandlers[name]);
        } else {
          sigma.on(name, eventHandlers[name]);
        }
      });
      // cleanup
      return () => {
        Object.keys(eventHandlers).forEach(name => {
          if (name === "cameraUpdated") {
            sigma.camera.removeListener(name, eventHandlers[name]);
          } else {
            sigma.removeListener(name, eventHandlers[name]);
          }
        });
      };
    }
  }, [sigma, eventHandlers]);

  return setEventHandlers;
}

export function useSetSettings(): (settings: Partial<Settings>) => void {
  const sigma = useSigma();
  const [settings, setSettings] = useState<Partial<Settings>>({});

  useEffect(() => {
    if (sigma && settings) {
      const prevSettings: Partial<Settings> = {};

      Object.keys(settings).forEach(key => {
        prevSettings[key] = sigma.getSetting(key);
        sigma.setSetting(key, settings[key]);
      });

      // cleanup
      return () => {
        Object.keys(prevSettings).forEach(key => {
          sigma.setSetting(key, prevSettings[key]);
        });
      };
    }
  }, [sigma, settings]);

  return setSettings;
}
