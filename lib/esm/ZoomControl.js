"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomControl = void 0;
const react_1 = __importDefault(require("react"));
const hooks_1 = require("./hooks");
const ZoomControl = ({ animationDuration = 200 }) => {
    // Get sigma
    const sigma = hooks_1.useSigma();
    /**
     * Function to zoom in sigma.
     */
    function zoom(ratio) {
        if (sigma) {
            if (!ratio) {
                sigma.getCamera().animatedReset({ duration: animationDuration });
            }
            else if (ratio > 0) {
                sigma.getCamera().animatedZoom({ duration: animationDuration });
            }
            else if (ratio < 0) {
                sigma.getCamera().animatedUnzoom({ duration: animationDuration });
            }
        }
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "react-sigma-control-zoom-in" },
            react_1.default.createElement("button", { onClick: () => zoom(1), title: "Zoom In" })),
        react_1.default.createElement("div", { className: "react-sigma-control-zoom-out" },
            react_1.default.createElement("button", { onClick: () => zoom(-1), title: "Zoom Out" })),
        react_1.default.createElement("div", { className: "react-sigma-control-zoom-center" },
            react_1.default.createElement("button", { onClick: () => zoom(), title: "See whole graph" }))));
};
exports.ZoomControl = ZoomControl;
//# sourceMappingURL=ZoomControl.js.map