"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSigmaContext = exports.SigmaProvider = exports.SigmaContext = void 0;
const react_1 = require("react");
exports.SigmaContext = react_1.createContext(null);
exports.SigmaProvider = exports.SigmaContext.Provider;
function useSigmaContext() {
    const context = react_1.useContext(exports.SigmaContext);
    if (context == null) {
        throw new Error("No context provided: useSigmaContext() can only be used in a descendant of <SigmaContainer>");
    }
    return context;
}
exports.useSigmaContext = useSigmaContext;
//# sourceMappingURL=context.js.map