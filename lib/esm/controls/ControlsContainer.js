"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlsContainer = void 0;
const react_1 = __importDefault(require("react"));
const ControlsContainer = ({ children, position = "bottom-left" }) => {
    return react_1.default.createElement("div", { className: `react-sigma-controls ${position}` }, children);
};
exports.ControlsContainer = ControlsContainer;
//# sourceMappingURL=ControlsContainer.js.map