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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullScreenControl = void 0;
const react_1 = __importStar(require("react"));
const hooks_1 = require("../hooks");
const FullScreenControl = ({}) => {
    // Get Sigma
    const sigma = hooks_1.useSigma();
    // Is full screen mode enabled
    const [isFullScreen, setFullScreen] = react_1.useState(false);
    // HTML element for the button
    const containerRef = react_1.useRef(null);
    react_1.useEffect(() => {
        if (containerRef.current) {
            const sigmaRootElement = containerRef.current.closest("div.react-sigma-v2");
            if (sigmaRootElement) {
                if (isFullScreen && !sigmaRootElement.classList.contains("fullscreen"))
                    sigmaRootElement.classList.add("fullscreen");
                sigma.refresh();
                if (!isFullScreen && sigmaRootElement.classList.contains("fullscreen"))
                    sigmaRootElement.classList.remove("fullscreen");
                sigma.refresh();
            }
        }
    }, [isFullScreen, hooks_1.useSigma]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { ref: containerRef, className: `react-sigma-control-${isFullScreen ? "normalscreen" : "fullscreen"}` },
            react_1.default.createElement("button", { onClick: () => setFullScreen(!isFullScreen), title: "Toggle Fullscreen" }))));
};
exports.FullScreenControl = FullScreenControl;
//# sourceMappingURL=FullScreenControl.js.map