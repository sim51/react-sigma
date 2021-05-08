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
exports.SigmaContainer = void 0;
const react_1 = __importStar(require("react"));
const sigma_1 = __importDefault(require("sigma/sigma"));
const graphology_1 = __importDefault(require("graphology"));
const context_1 = require("./context");
const SigmaContainer = ({ graphOptions, id, className, style, initialSettings, children, }) => {
    // HTML element for the sigma instance
    const containerRef = react_1.useRef(null);
    // Common html props for the container
    const [props] = react_1.useState({ className: `react-sigma-v2 ${className ? className : ""}`, id, style });
    // The sigma instance
    const [sigma, setSigma] = react_1.useState(null);
    // When graphOptions or settings changed
    react_1.useEffect(() => {
        if (containerRef.current !== null) {
            const instance = new sigma_1.default(new graphology_1.default(graphOptions), containerRef.current, initialSettings);
            setSigma(instance);
        }
        return () => {
            setSigma(instance => {
                if (instance)
                    instance.kill();
                return null;
            });
        };
    }, [containerRef]);
    const context = react_1.useMemo(() => (sigma ? { sigma } : null), [sigma]);
    const contents = context !== null ? react_1.default.createElement(context_1.SigmaProvider, { value: context }, children) : null;
    return (react_1.default.createElement("div", Object.assign({}, props),
        react_1.default.createElement("div", { className: "sigma-container", ref: containerRef }),
        contents));
};
exports.SigmaContainer = SigmaContainer;
//# sourceMappingURL=SigmaContainer.js.map