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
exports.SearchControl = void 0;
const react_1 = __importStar(require("react"));
const hooks_1 = require("../hooks");
const SearchControl = ({}) => {
    // Get sigma
    const sigma = hooks_1.useSigma();
    // Search value
    const [search, setSearch] = react_1.useState("");
    // Datalist values
    const [values, setValues] = react_1.useState([]);
    // Selected
    const [selected, setSelected] = react_1.useState(null);
    react_1.useEffect(() => {
        const newValues = [];
        if (!selected && search.length > 1) {
            sigma.getGraph().forEachNode((key, attributes) => {
                if (attributes.label && attributes.label.toLowerCase().includes(search.toLowerCase()))
                    newValues.push({ id: key, label: attributes.label });
            });
        }
        setValues(newValues);
    }, [search]);
    react_1.useEffect(() => {
        if (selected) {
            sigma.getGraph().setNodeAttribute(selected, "highlighted", true);
            sigma.getCamera().animate(sigma.getNodeAttributes(selected), {
                easing: "linear",
                duration: 500,
            });
            return () => {
                sigma.getGraph().setNodeAttribute(selected, "highlighted", false);
            };
        }
    }, [selected]);
    const onInputChange = e => {
        const searchString = e.target.value;
        const valueItem = values.find(value => value.label === searchString);
        if (valueItem) {
            setSearch(valueItem.label);
            setValues([]);
            setSelected(valueItem.id);
        }
        else {
            setSelected(null);
            setSearch(searchString);
        }
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("input", { type: "text", placeholder: "Search...", list: "nodes", value: search, onChange: onInputChange }),
        react_1.default.createElement("datalist", { id: "nodes" }, values.map((value) => (react_1.default.createElement("option", { key: value.id, value: value.label }, value.label))))));
};
exports.SearchControl = SearchControl;
//# sourceMappingURL=SearchControl.js.map