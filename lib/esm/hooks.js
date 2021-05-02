"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSetSettings = exports.useRegisterEvents = exports.useLoadGraph = exports.useSigma = void 0;
const react_1 = require("react");
const context_1 = require("./context");
function useSigma() {
    return context_1.useSigmaContext().sigma;
}
exports.useSigma = useSigma;
function useLoadGraph() {
    const sigma = useSigma();
    return (graph, clear = true) => {
        if (sigma && graph) {
            if (clear && sigma.getGraph().order > 0)
                sigma.getGraph().clear();
            sigma.getGraph().import(graph);
        }
    };
}
exports.useLoadGraph = useLoadGraph;
function useRegisterEvents() {
    const sigma = useSigma();
    const [eventHandlers, setEventHandlers] = react_1.useState({});
    react_1.useEffect(() => {
        if (sigma && eventHandlers) {
            Object.keys(eventHandlers).forEach(name => {
                if (name === "cameraUpdated") {
                    sigma.camera.on(name, eventHandlers[name]);
                }
                else {
                    sigma.on(name, eventHandlers[name]);
                }
            });
            // cleanup
            return () => {
                Object.keys(eventHandlers).forEach(name => {
                    if (name === "cameraUpdated") {
                        sigma.camera.removeListener(name, eventHandlers[name]);
                    }
                    else {
                        sigma.removeListener(name, eventHandlers[name]);
                    }
                });
            };
        }
    }, [sigma, eventHandlers]);
    return setEventHandlers;
}
exports.useRegisterEvents = useRegisterEvents;
function useSetSettings() {
    const sigma = useSigma();
    const [settings, setSettings] = react_1.useState({});
    react_1.useEffect(() => {
        if (sigma && settings) {
            const prevSettings = {};
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
exports.useSetSettings = useSetSettings;
//# sourceMappingURL=hooks.js.map