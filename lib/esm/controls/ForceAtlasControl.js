"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForceAtlasControl = void 0;
const react_1 = __importStar(require("react"));
const worker_1 = __importDefault(require("graphology-layout-forceatlas2/worker"));
const lodash_1 = require("lodash");
const hooks_1 = require("../hooks");
const ForceAtlasControl = ({ settings, autoRunFor = -1 }) => {
    // Get Sigma
    const sigma = hooks_1.useSigma();
    // FA2 Setting
    const fa2Settings = react_1.useRef(null);
    if (settings && !lodash_1.isEqual(fa2Settings.current, settings))
        fa2Settings.current = settings;
    // FA2 worker
    const [fa2, setFa2] = react_1.useState(null);
    // Is FA2 is running
    const [fa2IsRunning, setFa2IsRunning] = react_1.useState(false);
    react_1.useEffect(() => {
        if (sigma) {
            // Create the FA2 worker
            const nFa2 = new worker_1.default(sigma.getGraph(), fa2Settings.current || {});
            setFa2(nFa2);
            // we run the algo
            let timeout = null;
            if (autoRunFor > -1 && sigma.getGraph().order > 0) {
                setFa2IsRunning(true);
                // set a timeout to stop it
                timeout =
                    autoRunFor > 0
                        ? window.setTimeout(() => {
                            setFa2IsRunning(false);
                        }, autoRunFor)
                        : null;
            }
            //cleaning
            return () => {
                if (nFa2)
                    nFa2.kill();
                if (timeout)
                    clearTimeout(timeout);
            };
        }
    }, [autoRunFor, fa2Settings, sigma]);
    react_1.useEffect(() => {
        try {
            if (fa2) {
                if (fa2IsRunning === true) {
                    fa2.start();
                }
                else {
                    fa2.stop();
                }
            }
        }
        catch (e) { }
    }, [fa2, fa2IsRunning]);
    return (react_1.default.createElement("div", { className: `react-sigma-control-forceatlas2 ${fa2IsRunning ? "running" : "stopped"}` },
        react_1.default.createElement("button", { onClick: () => setFa2IsRunning(e => !e), title: fa2IsRunning ? "Stop the layout animation" : "Start the layout animation" })));
};
exports.ForceAtlasControl = ForceAtlasControl;
//# sourceMappingURL=ForceAtlasControl.js.map