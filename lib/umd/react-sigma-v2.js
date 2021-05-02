(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("graphology"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["graphology", "react"], factory);
	else if(typeof exports === 'object')
		exports["react-sigma-v2"] = factory(require("graphology"), require("react"));
	else
		root["react-sigma-v2"] = factory(root["graphology"], root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__47__, __WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useSetSettings = exports.useRegisterEvents = exports.useLoadGraph = exports.useSigma = void 0;
const react_1 = __webpack_require__(2);
const context_1 = __webpack_require__(3);
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


/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useSigmaContext = exports.SigmaProvider = exports.SigmaContext = void 0;
const react_1 = __webpack_require__(2);
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


/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ForceAtlasControl = void 0;
const react_1 = __importStar(__webpack_require__(2));
const worker_1 = __importDefault(__webpack_require__(5));
const hooks_1 = __webpack_require__(1);
const ForceAtlasControl = ({ settings = {}, autoRunFor = -1 }) => {
    // Get Sigma
    const sigma = hooks_1.useSigma();
    // The FA2 worker
    const [fa2, setFa2] = react_1.useState(null);
    // Is FA2 is running
    const [fa2IsRunning, setFa2IsRunning] = react_1.useState(false);
    react_1.useEffect(() => {
        if (sigma) {
            // Create the FA2 worker
            const nFa2 = new worker_1.default(sigma.getGraph(), settings);
            setFa2(nFa2);
            // we run the algo
            let timeout = null;
            if (autoRunFor > -1 && sigma.getGraph().order > 0) {
                setFa2IsRunning(true);
                // set a timeout to stop it
                timeout =
                    autoRunFor > 0
                        ? setTimeout(() => {
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
    }, []);
    react_1.useEffect(() => {
        try {
            if (fa2IsRunning === true) {
                fa2.start();
            }
            else {
                fa2.stop();
            }
        }
        catch (e) { }
    }, [fa2, fa2IsRunning]);
    return (react_1.default.createElement("div", { className: `react-sigma-control-forceatlas2 ${fa2IsRunning ? "running" : "stopped"}` },
        react_1.default.createElement("button", { onClick: () => setFa2IsRunning(e => !e), title: fa2IsRunning ? "Stop the layout animation" : "Start the layout animation" })));
};
exports.ForceAtlasControl = ForceAtlasControl;


/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Graphology ForceAtlas2 Layout Supervisor
 * =========================================
 *
 * Supervisor class able to spawn a web worker to run the FA2 layout in a
 * separate thread not to block UI with heavy synchronous computations.
 */
var workerFunction = __webpack_require__(6),
    isGraph = __webpack_require__(7),
    helpers = __webpack_require__(8);

var DEFAULT_SETTINGS = __webpack_require__(9);

/**
 * Class representing a FA2 layout run by a webworker.
 *
 * @constructor
 * @param  {Graph}         graph        - Target graph.
 * @param  {object|number} params       - Parameters:
 * @param  {object}          [settings] - Settings.
 */
function FA2LayoutSupervisor(graph, params) {
  params = params || {};

  // Validation
  if (!isGraph(graph))
    throw new Error('graphology-layout-forceatlas2/worker: the given graph is not a valid graphology instance.');

  // Validating settings
  var settings = helpers.assign({}, DEFAULT_SETTINGS, params.settings),
      validationError = helpers.validateSettings(settings);

  if (validationError)
    throw new Error('graphology-layout-forceatlas2/worker: ' + validationError.message);

  // Properties
  this.worker = null;
  this.graph = graph;
  this.settings = settings;
  this.matrices = null;
  this.running = false;
  this.killed = false;

  // Binding listeners
  this.handleMessage = this.handleMessage.bind(this);

  var alreadyRespawning = false;
  var self = this;

  this.handleAddition = function() {
    if (alreadyRespawning)
      return;

    alreadyRespawning = true;

    self.spawnWorker();
    setImmediate(function() {
      alreadyRespawning = false;
    });
  };

  graph.on('nodeAdded', this.handleAddition);
  graph.on('edgeAdded', this.handleAddition);

  // Spawning worker
  this.spawnWorker();
}

/**
 * Internal method used to spawn the web worker.
 */
FA2LayoutSupervisor.prototype.spawnWorker = function() {
  if (this.worker)
    this.worker.terminate();

  this.worker = helpers.createWorker(workerFunction);
  this.worker.addEventListener('message', this.handleMessage);

  if (this.running) {
    this.running = false;
    this.start();
  }
};

/**
 * Internal method used to handle the worker's messages.
 *
 * @param {object} event - Event to handle.
 */
FA2LayoutSupervisor.prototype.handleMessage = function(event) {
  if (!this.running)
    return;

  var matrix = new Float32Array(event.data.nodes);

  helpers.assignLayoutChanges(this.graph, matrix);
  this.matrices.nodes = matrix;

  // Looping
  this.askForIterations();
};

/**
 * Internal method used to ask for iterations from the worker.
 *
 * @param  {boolean} withEdges - Should we send edges along?
 * @return {FA2LayoutSupervisor}
 */
FA2LayoutSupervisor.prototype.askForIterations = function(withEdges) {
  var matrices = this.matrices;

  var payload = {
    settings: this.settings,
    nodes: matrices.nodes.buffer
  };

  var buffers = [matrices.nodes.buffer];

  if (withEdges) {
    payload.edges = matrices.edges.buffer;
    buffers.push(matrices.edges.buffer);
  }

  this.worker.postMessage(payload, buffers);

  return this;
};

/**
 * Method used to start the layout.
 *
 * @return {FA2LayoutSupervisor}
 */
FA2LayoutSupervisor.prototype.start = function() {
  if (this.killed)
    throw new Error('graphology-layout-forceatlas2/worker.start: layout was killed.');

  if (this.running)
    return this;

  // Building matrices
  this.matrices = helpers.graphToByteArrays(this.graph);

  this.running = true;
  this.askForIterations(true);

  return this;
};

/**
 * Method used to stop the layout.
 *
 * @return {FA2LayoutSupervisor}
 */
FA2LayoutSupervisor.prototype.stop = function() {
  this.running = false;

  return this;
};

/**
 * Method used to kill the layout.
 *
 * @return {FA2LayoutSupervisor}
 */
FA2LayoutSupervisor.prototype.kill = function() {
  if (this.killed)
    return this;

  this.running = false;
  this.killed = true;

  // Clearing memory
  this.matrices = null;

  // Terminating worker
  this.worker.terminate();

  // Unbinding listeners
  this.graph.removeListener('nodeAdded', this.handleAddition);
  this.graph.removeListener('edgeAdded', this.handleAddition);
};

/**
 * Exporting.
 */
module.exports = FA2LayoutSupervisor;


/***/ }),
/* 6 */
/***/ ((module) => {

/**
 * Graphology ForceAtlas2 Layout Webworker
 * ========================================
 *
 * Web worker able to run the layout in a separate thread.
 */
module.exports = function worker() {
  var NODES,
      EDGES;

  var moduleShim = {};

  (function() {
    /* eslint no-constant-condition: 0 */
/**
 * Graphology ForceAtlas2 Iteration
 * =================================
 *
 * Function used to perform a single iteration of the algorithm.
 */

/**
 * Matrices properties accessors.
 */
var NODE_X = 0,
    NODE_Y = 1,
    NODE_DX = 2,
    NODE_DY = 3,
    NODE_OLD_DX = 4,
    NODE_OLD_DY = 5,
    NODE_MASS = 6,
    NODE_CONVERGENCE = 7,
    NODE_SIZE = 8,
    NODE_FIXED = 9;

var EDGE_SOURCE = 0,
    EDGE_TARGET = 1,
    EDGE_WEIGHT = 2;

var REGION_NODE = 0,
    REGION_CENTER_X = 1,
    REGION_CENTER_Y = 2,
    REGION_SIZE = 3,
    REGION_NEXT_SIBLING = 4,
    REGION_FIRST_CHILD = 5,
    REGION_MASS = 6,
    REGION_MASS_CENTER_X = 7,
    REGION_MASS_CENTER_Y = 8;

var SUBDIVISION_ATTEMPTS = 3;

/**
 * Constants.
 */
var PPN = 10,
    PPE = 3,
    PPR = 9;

var MAX_FORCE = 10;

/**
 * Function used to perform a single interation of the algorithm.
 *
 * @param  {object}       options    - Layout options.
 * @param  {Float32Array} NodeMatrix - Node data.
 * @param  {Float32Array} EdgeMatrix - Edge data.
 * @return {object}                  - Some metadata.
 */
moduleShim.exports = function iterate(options, NodeMatrix, EdgeMatrix) {

  // Initializing variables
  var l, r, n, n1, n2, rn, e, w, g, s;

  var order = NodeMatrix.length,
      size = EdgeMatrix.length;

  var adjustSizes = options.adjustSizes;

  var thetaSquared = options.barnesHutTheta * options.barnesHutTheta;

  var outboundAttCompensation,
      coefficient,
      xDist,
      yDist,
      ewc,
      distance,
      factor;

  var RegionMatrix = [];

  // 1) Initializing layout data
  //-----------------------------

  // Resetting positions & computing max values
  for (n = 0; n < order; n += PPN) {
    NodeMatrix[n + NODE_OLD_DX] = NodeMatrix[n + NODE_DX];
    NodeMatrix[n + NODE_OLD_DY] = NodeMatrix[n + NODE_DY];
    NodeMatrix[n + NODE_DX] = 0;
    NodeMatrix[n + NODE_DY] = 0;
  }

  // If outbound attraction distribution, compensate
  if (options.outboundAttractionDistribution) {
    outboundAttCompensation = 0;
    for (n = 0; n < order; n += PPN) {
      outboundAttCompensation += NodeMatrix[n + NODE_MASS];
    }

    outboundAttCompensation /= (order / PPN);
  }


  // 1.bis) Barnes-Hut computation
  //------------------------------

  if (options.barnesHutOptimize) {

    // Setting up
    var minX = Infinity,
        maxX = -Infinity,
        minY = Infinity,
        maxY = -Infinity,
        q, q2, subdivisionAttempts;

    // Computing min and max values
    for (n = 0; n < order; n += PPN) {
      minX = Math.min(minX, NodeMatrix[n + NODE_X]);
      maxX = Math.max(maxX, NodeMatrix[n + NODE_X]);
      minY = Math.min(minY, NodeMatrix[n + NODE_Y]);
      maxY = Math.max(maxY, NodeMatrix[n + NODE_Y]);
    }

    // squarify bounds, it's a quadtree
    var dx = maxX - minX, dy = maxY - minY;
    if (dx > dy) {
      minY -= (dx - dy) / 2;
      maxY = minY + dx;
    }
    else {
      minX -= (dy - dx) / 2;
      maxX = minX + dy;
    }

    // Build the Barnes Hut root region
    RegionMatrix[0 + REGION_NODE] = -1;
    RegionMatrix[0 + REGION_CENTER_X] = (minX + maxX) / 2;
    RegionMatrix[0 + REGION_CENTER_Y] = (minY + maxY) / 2;
    RegionMatrix[0 + REGION_SIZE] = Math.max(maxX - minX, maxY - minY);
    RegionMatrix[0 + REGION_NEXT_SIBLING] = -1;
    RegionMatrix[0 + REGION_FIRST_CHILD] = -1;
    RegionMatrix[0 + REGION_MASS] = 0;
    RegionMatrix[0 + REGION_MASS_CENTER_X] = 0;
    RegionMatrix[0 + REGION_MASS_CENTER_Y] = 0;

    // Add each node in the tree
    l = 1;
    for (n = 0; n < order; n += PPN) {

      // Current region, starting with root
      r = 0;
      subdivisionAttempts = SUBDIVISION_ATTEMPTS;

      while (true) {
        // Are there sub-regions?

        // We look at first child index
        if (RegionMatrix[r + REGION_FIRST_CHILD] >= 0) {

          // There are sub-regions

          // We just iterate to find a "leaf" of the tree
          // that is an empty region or a region with a single node
          // (see next case)

          // Find the quadrant of n
          if (NodeMatrix[n + NODE_X] < RegionMatrix[r + REGION_CENTER_X]) {

            if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {

              // Top Left quarter
              q = RegionMatrix[r + REGION_FIRST_CHILD];
            }
            else {

              // Bottom Left quarter
              q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR;
            }
          }
          else {
            if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {

              // Top Right quarter
              q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 2;
            }
            else {

              // Bottom Right quarter
              q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 3;
            }
          }

          // Update center of mass and mass (we only do it for non-leave regions)
          RegionMatrix[r + REGION_MASS_CENTER_X] =
            (RegionMatrix[r + REGION_MASS_CENTER_X] * RegionMatrix[r + REGION_MASS] +
             NodeMatrix[n + NODE_X] * NodeMatrix[n + NODE_MASS]) /
            (RegionMatrix[r + REGION_MASS] + NodeMatrix[n + NODE_MASS]);

          RegionMatrix[r + REGION_MASS_CENTER_Y] =
            (RegionMatrix[r + REGION_MASS_CENTER_Y] * RegionMatrix[r + REGION_MASS] +
             NodeMatrix[n + NODE_Y] * NodeMatrix[n + NODE_MASS]) /
            (RegionMatrix[r + REGION_MASS] + NodeMatrix[n + NODE_MASS]);

          RegionMatrix[r + REGION_MASS] += NodeMatrix[n + NODE_MASS];

          // Iterate on the right quadrant
          r = q;
          continue;
        }
        else {

          // There are no sub-regions: we are in a "leaf"

          // Is there a node in this leave?
          if (RegionMatrix[r + REGION_NODE] < 0) {

            // There is no node in region:
            // we record node n and go on
            RegionMatrix[r + REGION_NODE] = n;
            break;
          }
          else {

            // There is a node in this region

            // We will need to create sub-regions, stick the two
            // nodes (the old one r[0] and the new one n) in two
            // subregions. If they fall in the same quadrant,
            // we will iterate.

            // Create sub-regions
            RegionMatrix[r + REGION_FIRST_CHILD] = l * PPR;
            w = RegionMatrix[r + REGION_SIZE] / 2; // new size (half)

            // NOTE: we use screen coordinates
            // from Top Left to Bottom Right

            // Top Left sub-region
            g = RegionMatrix[r + REGION_FIRST_CHILD];

            RegionMatrix[g + REGION_NODE] = -1;
            RegionMatrix[g + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] - w;
            RegionMatrix[g + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] - w;
            RegionMatrix[g + REGION_SIZE] = w;
            RegionMatrix[g + REGION_NEXT_SIBLING] = g + PPR;
            RegionMatrix[g + REGION_FIRST_CHILD] = -1;
            RegionMatrix[g + REGION_MASS] = 0;
            RegionMatrix[g + REGION_MASS_CENTER_X] = 0;
            RegionMatrix[g + REGION_MASS_CENTER_Y] = 0;

            // Bottom Left sub-region
            g += PPR;
            RegionMatrix[g + REGION_NODE] = -1;
            RegionMatrix[g + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] - w;
            RegionMatrix[g + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] + w;
            RegionMatrix[g + REGION_SIZE] = w;
            RegionMatrix[g + REGION_NEXT_SIBLING] = g + PPR;
            RegionMatrix[g + REGION_FIRST_CHILD] = -1;
            RegionMatrix[g + REGION_MASS] = 0;
            RegionMatrix[g + REGION_MASS_CENTER_X] = 0;
            RegionMatrix[g + REGION_MASS_CENTER_Y] = 0;

            // Top Right sub-region
            g += PPR;
            RegionMatrix[g + REGION_NODE] = -1;
            RegionMatrix[g + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] + w;
            RegionMatrix[g + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] - w;
            RegionMatrix[g + REGION_SIZE] = w;
            RegionMatrix[g + REGION_NEXT_SIBLING] = g + PPR;
            RegionMatrix[g + REGION_FIRST_CHILD] = -1;
            RegionMatrix[g + REGION_MASS] = 0;
            RegionMatrix[g + REGION_MASS_CENTER_X] = 0;
            RegionMatrix[g + REGION_MASS_CENTER_Y] = 0;

            // Bottom Right sub-region
            g += PPR;
            RegionMatrix[g + REGION_NODE] = -1;
            RegionMatrix[g + REGION_CENTER_X] = RegionMatrix[r + REGION_CENTER_X] + w;
            RegionMatrix[g + REGION_CENTER_Y] = RegionMatrix[r + REGION_CENTER_Y] + w;
            RegionMatrix[g + REGION_SIZE] = w;
            RegionMatrix[g + REGION_NEXT_SIBLING] = RegionMatrix[r + REGION_NEXT_SIBLING];
            RegionMatrix[g + REGION_FIRST_CHILD] = -1;
            RegionMatrix[g + REGION_MASS] = 0;
            RegionMatrix[g + REGION_MASS_CENTER_X] = 0;
            RegionMatrix[g + REGION_MASS_CENTER_Y] = 0;

            l += 4;

            // Now the goal is to find two different sub-regions
            // for the two nodes: the one previously recorded (r[0])
            // and the one we want to add (n)

            // Find the quadrant of the old node
            if (NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_X] < RegionMatrix[r + REGION_CENTER_X]) {
              if (NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {

                // Top Left quarter
                q = RegionMatrix[r + REGION_FIRST_CHILD];
              }
              else {

                // Bottom Left quarter
                q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR;
              }
            }
            else {
              if (NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {

                // Top Right quarter
                q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 2;
              }
              else {

                // Bottom Right quarter
                q = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 3;
              }
            }

            // We remove r[0] from the region r, add its mass to r and record it in q
            RegionMatrix[r + REGION_MASS] = NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_MASS];
            RegionMatrix[r + REGION_MASS_CENTER_X] = NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_X];
            RegionMatrix[r + REGION_MASS_CENTER_Y] = NodeMatrix[RegionMatrix[r + REGION_NODE] + NODE_Y];

            RegionMatrix[q + REGION_NODE] = RegionMatrix[r + REGION_NODE];
            RegionMatrix[r + REGION_NODE] = -1;

            // Find the quadrant of n
            if (NodeMatrix[n + NODE_X] < RegionMatrix[r + REGION_CENTER_X]) {
              if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {

                // Top Left quarter
                q2 = RegionMatrix[r + REGION_FIRST_CHILD];
              }
              else {
                // Bottom Left quarter
                q2 = RegionMatrix[r + REGION_FIRST_CHILD] + PPR;
              }
            }
            else {
              if (NodeMatrix[n + NODE_Y] < RegionMatrix[r + REGION_CENTER_Y]) {

                // Top Right quarter
                q2 = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 2;
              }
              else {

                // Bottom Right quarter
                q2 = RegionMatrix[r + REGION_FIRST_CHILD] + PPR * 3;
              }
            }

            if (q === q2) {

              // If both nodes are in the same quadrant,
              // we have to try it again on this quadrant
              if (subdivisionAttempts--) {
                r = q;
                continue; // while
              }
              else {
                // we are out of precision here, and we cannot subdivide anymore
                // but we have to break the loop anyway
                subdivisionAttempts = SUBDIVISION_ATTEMPTS;
                break; // while
              }

            }

            // If both quadrants are different, we record n
            // in its quadrant
            RegionMatrix[q2 + REGION_NODE] = n;
            break;
          }
        }
      }
    }
  }


  // 2) Repulsion
  //--------------
  // NOTES: adjustSizes = antiCollision & scalingRatio = coefficient

  if (options.barnesHutOptimize) {
    coefficient = options.scalingRatio;

    // Applying repulsion through regions
    for (n = 0; n < order; n += PPN) {

      // Computing leaf quad nodes iteration

      r = 0; // Starting with root region
      while (true) {

        if (RegionMatrix[r + REGION_FIRST_CHILD] >= 0) {

          // The region has sub-regions

          // We run the Barnes Hut test to see if we are at the right distance
          distance = (
            (Math.pow(NodeMatrix[n + NODE_X] - RegionMatrix[r + REGION_MASS_CENTER_X], 2)) +
            (Math.pow(NodeMatrix[n + NODE_Y] - RegionMatrix[r + REGION_MASS_CENTER_Y], 2))
          );

          s = RegionMatrix[r + REGION_SIZE];

          if ((4 * s * s) / distance < thetaSquared) {

            // We treat the region as a single body, and we repulse

            xDist = NodeMatrix[n + NODE_X] - RegionMatrix[r + REGION_MASS_CENTER_X];
            yDist = NodeMatrix[n + NODE_Y] - RegionMatrix[r + REGION_MASS_CENTER_Y];

            if (adjustSizes === true) {

              //-- Linear Anti-collision Repulsion
              if (distance > 0) {
                factor = coefficient * NodeMatrix[n + NODE_MASS] *
                  RegionMatrix[r + REGION_MASS] / distance;

                NodeMatrix[n + NODE_DX] += xDist * factor;
                NodeMatrix[n + NODE_DY] += yDist * factor;
              }
              else if (distance < 0) {
                factor = -coefficient * NodeMatrix[n + NODE_MASS] *
                  RegionMatrix[r + REGION_MASS] / Math.sqrt(distance);

                NodeMatrix[n + NODE_DX] += xDist * factor;
                NodeMatrix[n + NODE_DY] += yDist * factor;
              }
            }
            else {

              //-- Linear Repulsion
              if (distance > 0) {
                factor = coefficient * NodeMatrix[n + NODE_MASS] *
                  RegionMatrix[r + REGION_MASS] / distance;

                NodeMatrix[n + NODE_DX] += xDist * factor;
                NodeMatrix[n + NODE_DY] += yDist * factor;
              }
            }

            // When this is done, we iterate. We have to look at the next sibling.
            r = RegionMatrix[r + REGION_NEXT_SIBLING];
            if (r < 0)
              break; // No next sibling: we have finished the tree

            continue;
          }
          else {

            // The region is too close and we have to look at sub-regions
            r = RegionMatrix[r + REGION_FIRST_CHILD];
            continue;
          }

        }
        else {

          // The region has no sub-region
          // If there is a node r[0] and it is not n, then repulse
          rn = RegionMatrix[r + REGION_NODE];

          if (rn >= 0 && rn !== n) {
            xDist = NodeMatrix[n + NODE_X] - NodeMatrix[rn + NODE_X];
            yDist = NodeMatrix[n + NODE_Y] - NodeMatrix[rn + NODE_Y];

            distance = xDist * xDist + yDist * yDist;

            if (adjustSizes === true) {

              //-- Linear Anti-collision Repulsion
              if (distance > 0) {
                factor = coefficient * NodeMatrix[n + NODE_MASS] *
                  NodeMatrix[rn + NODE_MASS] / distance;

                NodeMatrix[n + NODE_DX] += xDist * factor;
                NodeMatrix[n + NODE_DY] += yDist * factor;
              }
              else if (distance < 0) {
                factor = -coefficient * NodeMatrix[n + NODE_MASS] *
                  NodeMatrix[rn + NODE_MASS] / Math.sqrt(distance);

                NodeMatrix[n + NODE_DX] += xDist * factor;
                NodeMatrix[n + NODE_DY] += yDist * factor;
              }
            }
            else {

              //-- Linear Repulsion
              if (distance > 0) {
                factor = coefficient * NodeMatrix[n + NODE_MASS] *
                  NodeMatrix[rn + NODE_MASS] / distance;

                NodeMatrix[n + NODE_DX] += xDist * factor;
                NodeMatrix[n + NODE_DY] += yDist * factor;
              }
            }

          }

          // When this is done, we iterate. We have to look at the next sibling.
          r = RegionMatrix[r + REGION_NEXT_SIBLING];

          if (r < 0)
            break; // No next sibling: we have finished the tree

          continue;
        }
      }
    }
  }
  else {
    coefficient = options.scalingRatio;

    // Square iteration
    for (n1 = 0; n1 < order; n1 += PPN) {
      for (n2 = 0; n2 < n1; n2 += PPN) {

        // Common to both methods
        xDist = NodeMatrix[n1 + NODE_X] - NodeMatrix[n2 + NODE_X];
        yDist = NodeMatrix[n1 + NODE_Y] - NodeMatrix[n2 + NODE_Y];

        if (adjustSizes === true) {

          //-- Anticollision Linear Repulsion
          distance = Math.sqrt(xDist * xDist + yDist * yDist) -
            NodeMatrix[n1 + NODE_SIZE] -
            NodeMatrix[n2 + NODE_SIZE];

          if (distance > 0) {
            factor = coefficient *
              NodeMatrix[n1 + NODE_MASS] *
              NodeMatrix[n2 + NODE_MASS] /
              distance / distance;

            // Updating nodes' dx and dy
            NodeMatrix[n1 + NODE_DX] += xDist * factor;
            NodeMatrix[n1 + NODE_DY] += yDist * factor;

            NodeMatrix[n2 + NODE_DX] += xDist * factor;
            NodeMatrix[n2 + NODE_DY] += yDist * factor;
          }
          else if (distance < 0) {
            factor = 100 * coefficient *
              NodeMatrix[n1 + NODE_MASS] *
              NodeMatrix[n2 + NODE_MASS];

            // Updating nodes' dx and dy
            NodeMatrix[n1 + NODE_DX] += xDist * factor;
            NodeMatrix[n1 + NODE_DY] += yDist * factor;

            NodeMatrix[n2 + NODE_DX] -= xDist * factor;
            NodeMatrix[n2 + NODE_DY] -= yDist * factor;
          }
        }
        else {

          //-- Linear Repulsion
          distance = Math.sqrt(xDist * xDist + yDist * yDist);

          if (distance > 0) {
            factor = coefficient *
              NodeMatrix[n1 + NODE_MASS] *
              NodeMatrix[n2 + NODE_MASS] /
              distance / distance;

            // Updating nodes' dx and dy
            NodeMatrix[n1 + NODE_DX] += xDist * factor;
            NodeMatrix[n1 + NODE_DY] += yDist * factor;

            NodeMatrix[n2 + NODE_DX] -= xDist * factor;
            NodeMatrix[n2 + NODE_DY] -= yDist * factor;
          }
        }
      }
    }
  }


  // 3) Gravity
  //------------
  g = options.gravity / options.scalingRatio;
  coefficient = options.scalingRatio;
  for (n = 0; n < order; n += PPN) {
    factor = 0;

    // Common to both methods
    xDist = NodeMatrix[n + NODE_X];
    yDist = NodeMatrix[n + NODE_Y];
    distance = Math.sqrt(
      Math.pow(xDist, 2) + Math.pow(yDist, 2)
    );

    if (options.strongGravityMode) {

      //-- Strong gravity
      if (distance > 0)
        factor = coefficient * NodeMatrix[n + NODE_MASS] * g;
    }
    else {

      //-- Linear Anti-collision Repulsion n
      if (distance > 0)
        factor = coefficient * NodeMatrix[n + NODE_MASS] * g / distance;
    }

    // Updating node's dx and dy
    NodeMatrix[n + NODE_DX] -= xDist * factor;
    NodeMatrix[n + NODE_DY] -= yDist * factor;
  }

  // 4) Attraction
  //---------------
  coefficient = 1 *
    (options.outboundAttractionDistribution ?
      outboundAttCompensation :
      1);

  // TODO: simplify distance
  // TODO: coefficient is always used as -c --> optimize?
  for (e = 0; e < size; e += PPE) {
    n1 = EdgeMatrix[e + EDGE_SOURCE];
    n2 = EdgeMatrix[e + EDGE_TARGET];
    w = EdgeMatrix[e + EDGE_WEIGHT];

    // Edge weight influence
    ewc = Math.pow(w, options.edgeWeightInfluence);

    // Common measures
    xDist = NodeMatrix[n1 + NODE_X] - NodeMatrix[n2 + NODE_X];
    yDist = NodeMatrix[n1 + NODE_Y] - NodeMatrix[n2 + NODE_Y];

    // Applying attraction to nodes
    if (adjustSizes === true) {

      distance = Math.sqrt(
        (Math.pow(xDist, 2) + Math.pow(yDist, 2)) -
        NodeMatrix[n1 + NODE_SIZE] -
        NodeMatrix[n2 + NODE_SIZE]
      );

      if (options.linLogMode) {
        if (options.outboundAttractionDistribution) {

          //-- LinLog Degree Distributed Anti-collision Attraction
          if (distance > 0) {
            factor = -coefficient * ewc * Math.log(1 + distance) /
            distance /
            NodeMatrix[n1 + NODE_MASS];
          }
        }
        else {

          //-- LinLog Anti-collision Attraction
          if (distance > 0) {
            factor = -coefficient * ewc * Math.log(1 + distance) / distance;
          }
        }
      }
      else {
        if (options.outboundAttractionDistribution) {

          //-- Linear Degree Distributed Anti-collision Attraction
          if (distance > 0) {
            factor = -coefficient * ewc / NodeMatrix[n1 + NODE_MASS];
          }
        }
        else {

          //-- Linear Anti-collision Attraction
          if (distance > 0) {
            factor = -coefficient * ewc;
          }
        }
      }
    }
    else {

      distance = Math.sqrt(
        Math.pow(xDist, 2) + Math.pow(yDist, 2)
      );

      if (options.linLogMode) {
        if (options.outboundAttractionDistribution) {

          //-- LinLog Degree Distributed Attraction
          if (distance > 0) {
            factor = -coefficient * ewc * Math.log(1 + distance) /
              distance /
              NodeMatrix[n1 + NODE_MASS];
          }
        }
        else {

          //-- LinLog Attraction
          if (distance > 0)
            factor = -coefficient * ewc * Math.log(1 + distance) / distance;
        }
      }
      else {
        if (options.outboundAttractionDistribution) {

          //-- Linear Attraction Mass Distributed
          // NOTE: Distance is set to 1 to override next condition
          distance = 1;
          factor = -coefficient * ewc / NodeMatrix[n1 + NODE_MASS];
        }
        else {

          //-- Linear Attraction
          // NOTE: Distance is set to 1 to override next condition
          distance = 1;
          factor = -coefficient * ewc;
        }
      }
    }

    // Updating nodes' dx and dy
    // TODO: if condition or factor = 1?
    if (distance > 0) {

      // Updating nodes' dx and dy
      NodeMatrix[n1 + NODE_DX] += xDist * factor;
      NodeMatrix[n1 + NODE_DY] += yDist * factor;

      NodeMatrix[n2 + NODE_DX] -= xDist * factor;
      NodeMatrix[n2 + NODE_DY] -= yDist * factor;
    }
  }


  // 5) Apply Forces
  //-----------------
  var force,
      swinging,
      traction,
      nodespeed,
      newX,
      newY;

  // MATH: sqrt and square distances
  if (adjustSizes === true) {

    for (n = 0; n < order; n += PPN) {
      if (NodeMatrix[n + NODE_FIXED] !== 1) {
        force = Math.sqrt(
          Math.pow(NodeMatrix[n + NODE_DX], 2) +
          Math.pow(NodeMatrix[n + NODE_DY], 2)
        );

        if (force > MAX_FORCE) {
          NodeMatrix[n + NODE_DX] =
            NodeMatrix[n + NODE_DX] * MAX_FORCE / force;
          NodeMatrix[n + NODE_DY] =
            NodeMatrix[n + NODE_DY] * MAX_FORCE / force;
        }

        swinging = NodeMatrix[n + NODE_MASS] *
          Math.sqrt(
            (NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) *
            (NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) +
            (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY]) *
            (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY])
          );

        traction = Math.sqrt(
          (NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) *
          (NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) +
          (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY]) *
          (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY])
        ) / 2;

        nodespeed =
          0.1 * Math.log(1 + traction) / (1 + Math.sqrt(swinging));

        // Updating node's positon
        newX = NodeMatrix[n + NODE_X] + NodeMatrix[n + NODE_DX] *
          (nodespeed / options.slowDown);
        NodeMatrix[n + NODE_X] = newX;

        newY = NodeMatrix[n + NODE_Y] + NodeMatrix[n + NODE_DY] *
          (nodespeed / options.slowDown);
        NodeMatrix[n + NODE_Y] = newY;
      }
    }
  }
  else {

    for (n = 0; n < order; n += PPN) {
      if (NodeMatrix[n + NODE_FIXED] !== 1) {

        swinging = NodeMatrix[n + NODE_MASS] *
          Math.sqrt(
            (NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) *
            (NodeMatrix[n + NODE_OLD_DX] - NodeMatrix[n + NODE_DX]) +
            (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY]) *
            (NodeMatrix[n + NODE_OLD_DY] - NodeMatrix[n + NODE_DY])
          );

        traction = Math.sqrt(
          (NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) *
          (NodeMatrix[n + NODE_OLD_DX] + NodeMatrix[n + NODE_DX]) +
          (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY]) *
          (NodeMatrix[n + NODE_OLD_DY] + NodeMatrix[n + NODE_DY])
        ) / 2;

        nodespeed = NodeMatrix[n + NODE_CONVERGENCE] *
          Math.log(1 + traction) / (1 + Math.sqrt(swinging));

        // Updating node convergence
        NodeMatrix[n + NODE_CONVERGENCE] =
          Math.min(1, Math.sqrt(
            nodespeed *
            (Math.pow(NodeMatrix[n + NODE_DX], 2) +
             Math.pow(NodeMatrix[n + NODE_DY], 2)) /
            (1 + Math.sqrt(swinging))
          ));

        // Updating node's positon
        newX = NodeMatrix[n + NODE_X] + NodeMatrix[n + NODE_DX] *
          (nodespeed / options.slowDown);
        NodeMatrix[n + NODE_X] = newX;

        newY = NodeMatrix[n + NODE_Y] + NodeMatrix[n + NODE_DY] *
          (nodespeed / options.slowDown);
        NodeMatrix[n + NODE_Y] = newY;
      }
    }
  }

  // We return the information about the layout (no need to return the matrices)
  return {};
};

  })();

  var iterate = moduleShim.exports;

  self.addEventListener('message', function(event) {
    var data = event.data;

    NODES = new Float32Array(data.nodes);

    if (data.edges)
      EDGES = new Float32Array(data.edges);

    // Running the iteration
    iterate(
      data.settings,
      NODES,
      EDGES
    );

    // Sending result to supervisor
    self.postMessage({
      nodes: NODES.buffer
    }, [NODES.buffer]);
  });
};



/***/ }),
/* 7 */
/***/ ((module) => {

/**
 * Graphology isGraph
 * ===================
 *
 * Very simple function aiming at ensuring the given variable is a
 * graphology instance.
 */

/**
 * Checking the value is a graphology instance.
 *
 * @param  {any}     value - Target value.
 * @return {boolean}
 */
module.exports = function isGraph(value) {
  return (
    value !== null &&
    typeof value === 'object' &&
    typeof value.addUndirectedEdgeWithKey === 'function' &&
    typeof value.dropNode === 'function' &&
    typeof value.multi === 'boolean'
  );
};


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports) => {

/**
 * Graphology ForceAtlas2 Helpers
 * ===============================
 *
 * Miscellaneous helper functions.
 */

/**
 * Constants.
 */
var PPN = 10,
    PPE = 3;

/**
 * Very simple Object.assign-like function.
 *
 * @param  {object} target       - First object.
 * @param  {object} [...objects] - Objects to merge.
 * @return {object}
 */
exports.assign = function(target) {
  target = target || {};

  var objects = Array.prototype.slice.call(arguments).slice(1),
      i,
      k,
      l;

  for (i = 0, l = objects.length; i < l; i++) {
    if (!objects[i])
      continue;

    for (k in objects[i])
      target[k] = objects[i][k];
  }

  return target;
};

/**
 * Function used to validate the given settings.
 *
 * @param  {object}      settings - Settings to validate.
 * @return {object|null}
 */
exports.validateSettings = function(settings) {

  if ('linLogMode' in settings &&
      typeof settings.linLogMode !== 'boolean')
    return {message: 'the `linLogMode` setting should be a boolean.'};

  if ('outboundAttractionDistribution' in settings &&
      typeof settings.outboundAttractionDistribution !== 'boolean')
    return {message: 'the `outboundAttractionDistribution` setting should be a boolean.'};

  if ('adjustSizes' in settings &&
      typeof settings.adjustSizes !== 'boolean')
    return {message: 'the `adjustSizes` setting should be a boolean.'};

  if ('edgeWeightInfluence' in settings &&
      typeof settings.edgeWeightInfluence !== 'number' &&
      settings.edgeWeightInfluence < 0)
    return {message: 'the `edgeWeightInfluence` setting should be a number >= 0.'};

  if ('scalingRatio' in settings &&
      typeof settings.scalingRatio !== 'number' &&
      settings.scalingRatio < 0)
    return {message: 'the `scalingRatio` setting should be a number >= 0.'};

  if ('strongGravityMode' in settings &&
      typeof settings.strongGravityMode !== 'boolean')
    return {message: 'the `strongGravityMode` setting should be a boolean.'};

  if ('gravity' in settings &&
      typeof settings.gravity !== 'number' &&
      settings.gravity < 0)
    return {message: 'the `gravity` setting should be a number >= 0.'};

  if ('slowDown' in settings &&
      typeof settings.slowDown !== 'number' &&
      settings.slowDown < 0)
    return {message: 'the `slowDown` setting should be a number >= 0.'};

  if ('barnesHutOptimize' in settings &&
      typeof settings.barnesHutOptimize !== 'boolean')
    return {message: 'the `barnesHutOptimize` setting should be a boolean.'};

  if ('barnesHutTheta' in settings &&
      typeof settings.barnesHutTheta !== 'number' &&
      settings.barnesHutTheta < 0)
    return {message: 'the `barnesHutTheta` setting should be a number >= 0.'};

  return null;
};

/**
 * Function generating a flat matrix for both nodes & edges of the given graph.
 *
 * @param  {Graph}  graph - Target graph.
 * @return {object}       - Both matrices.
 */
exports.graphToByteArrays = function(graph) {
  var order = graph.order,
      size = graph.size,
      index = {},
      j;

  var NodeMatrix = new Float32Array(order * PPN),
      EdgeMatrix = new Float32Array(size * PPE);

  // Iterate through nodes
  j = 0;
  graph.forEachNode(function(node, attr) {

    // Node index
    index[node] = j;

    // Populating byte array
    NodeMatrix[j] = attr.x;
    NodeMatrix[j + 1] = attr.y;
    NodeMatrix[j + 2] = 0;
    NodeMatrix[j + 3] = 0;
    NodeMatrix[j + 4] = 0;
    NodeMatrix[j + 5] = 0;
    NodeMatrix[j + 6] = 1 + graph.degree(node);
    NodeMatrix[j + 7] = 1;
    NodeMatrix[j + 8] = attr.size || 1;
    NodeMatrix[j + 9] = attr.fixed ? 1 : 0;
    j += PPN;
  });

  // Iterate through edges
  j = 0;
  graph.forEachEdge(function(edge, attr, source, target) {

    // Populating byte array
    EdgeMatrix[j] = index[source];
    EdgeMatrix[j + 1] = index[target];
    EdgeMatrix[j + 2] = attr.weight || 0;
    j += PPE;
  });

  return {
    nodes: NodeMatrix,
    edges: EdgeMatrix
  };
};

/**
 * Function applying the layout back to the graph.
 *
 * @param {Graph}        graph      - Target graph.
 * @param {Float32Array} NodeMatrix - Node matrix.
 */
exports.assignLayoutChanges = function(graph, NodeMatrix) {
  var nodes = graph.nodes();

  for (var i = 0, j = 0, l = NodeMatrix.length; i < l; i += PPN) {
    graph.setNodeAttribute(nodes[j], 'x', NodeMatrix[i]);
    graph.setNodeAttribute(nodes[j], 'y', NodeMatrix[i + 1]);
    j++;
  }
};

/**
 * Function collecting the layout positions.
 *
 * @param  {Graph}        graph      - Target graph.
 * @param  {Float32Array} NodeMatrix - Node matrix.
 * @return {object}                  - Map to node positions.
 */
exports.collectLayoutChanges = function(graph, NodeMatrix) {
  var nodes = graph.nodes(),
      positions = Object.create(null);

  for (var i = 0, j = 0, l = NodeMatrix.length; i < l; i += PPN) {
    positions[nodes[j]] = {
      x: NodeMatrix[i],
      y: NodeMatrix[i + 1]
    };

    j++;
  }

  return positions;
};

/**
 * Function returning a web worker from the given function.
 *
 * @param  {function}  fn - Function for the worker.
 * @return {DOMString}
 */
exports.createWorker = function createWorker(fn) {
  var xURL = window.URL || window.webkitURL;
  var code = fn.toString();
  var objectUrl = xURL.createObjectURL(new Blob(['(' + code + ').call(this);'], {type: 'text/javascript'}));
  var worker = new Worker(objectUrl);
  xURL.revokeObjectURL(objectUrl);

  return worker;
};


/***/ }),
/* 9 */
/***/ ((module) => {

/**
 * Graphology ForceAtlas2 Layout Default Settings
 * ===============================================
 */
module.exports = {
  linLogMode: false,
  outboundAttractionDistribution: false,
  adjustSizes: false,
  edgeWeightInfluence: 0,
  scalingRatio: 1,
  strongGravityMode: false,
  gravity: 1,
  slowDown: 1,
  barnesHutOptimize: false,
  barnesHutTheta: 0.5
};


/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SigmaContainer = void 0;
const react_1 = __importStar(__webpack_require__(2));
const sigma_1 = __importDefault(__webpack_require__(11));
const graphology_1 = __importDefault(__webpack_require__(47));
const context_1 = __webpack_require__(3);
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
            if (sigma !== null)
                sigma.kill();
            const instance = new sigma_1.default(new graphology_1.default(graphOptions), containerRef.current, initialSettings);
            setSigma(instance);
        }
    }, [graphOptions, initialSettings, containerRef]);
    const context = react_1.useMemo(() => (sigma ? { sigma } : null), [sigma]);
    const contents = context !== null ? react_1.default.createElement(context_1.SigmaProvider, { value: context }, children) : null;
    return (react_1.default.createElement("div", Object.assign({}, props),
        react_1.default.createElement("div", { className: "sigma-container", ref: containerRef }),
        contents));
};
exports.SigmaContainer = SigmaContainer;


/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Sigma.js
 * ========
 * @module
 */
var events_1 = __webpack_require__(12);
var extent_1 = __importDefault(__webpack_require__(13));
var camera_1 = __importDefault(__webpack_require__(14));
var mouse_1 = __importDefault(__webpack_require__(20));
var quadtree_1 = __importDefault(__webpack_require__(22));
var utils_1 = __webpack_require__(16);
var labels_1 = __webpack_require__(24);
var settings_1 = __webpack_require__(25);
var touch_1 = __importDefault(__webpack_require__(46));
var nodeExtent = extent_1.default.nodeExtent, edgeExtent = extent_1.default.edgeExtent;
/**
 * Constants.
 */
var PIXEL_RATIO = utils_1.getPixelRatio();
var WEBGL_OVERSAMPLING_RATIO = utils_1.getPixelRatio();
/**
 * Important functions.
 */
function applyNodeDefaults(settings, key, data) {
    if (!data.hasOwnProperty("x") || !data.hasOwnProperty("y"))
        throw new Error("Sigma: could not find a valid position (x, y) for node \"" + key + "\". All your nodes must have a number \"x\" and \"y\". Maybe your forgot to apply a layout or your \"nodeReducer\" is not returning the correct data?");
    if (!data.color)
        data.color = settings.defaultNodeColor;
    if (!data.label)
        data.label = "";
    if (!data.size)
        data.size = 2;
    if (!data.hasOwnProperty("hidden"))
        data.hidden = false;
    if (!data.hasOwnProperty("highlighted"))
        data.highlighted = false;
}
function applyEdgeDefaults(settings, key, data) {
    if (!data.color)
        data.color = settings.defaultEdgeColor;
    if (!data.label)
        data.label = "";
    if (!data.size)
        data.size = 0.5;
    if (!data.hasOwnProperty("hidden"))
        data.hidden = false;
}
/**
 * Main class.
 *
 * @constructor
 * @param {Graph}       graph     - Graph to render.
 * @param {HTMLElement} container - DOM container in which to render.
 * @param {object}      settings  - Optional settings.
 */
var Sigma = /** @class */ (function (_super) {
    __extends(Sigma, _super);
    function Sigma(graph, container, settings) {
        if (settings === void 0) { settings = {}; }
        var _this = _super.call(this) || this;
        _this.elements = {};
        _this.canvasContexts = {};
        _this.webGLContexts = {};
        _this.activeListeners = {};
        _this.quadtree = new quadtree_1.default();
        _this.nodeDataCache = {};
        _this.edgeDataCache = {};
        _this.nodeKeyToIndex = {};
        _this.edgeKeyToIndex = {};
        _this.nodeExtent = null;
        _this.edgeExtent = null;
        _this.normalizationFunction = utils_1.createNormalizationFunction({
            x: [-Infinity, Infinity],
            y: [-Infinity, Infinity],
        });
        // Starting dimensions
        _this.width = 0;
        _this.height = 0;
        // State
        _this.highlightedNodes = new Set();
        _this.displayedLabels = new Set();
        _this.hoveredNode = null;
        _this.renderFrame = null;
        _this.renderHighlightedNodesFrame = null;
        _this.needToProcess = false;
        _this.needToSoftProcess = false;
        // programs
        _this.nodePrograms = {};
        _this.edgePrograms = {};
        _this.settings = utils_1.assignDeep({}, settings_1.DEFAULT_SETTINGS, settings);
        // Validating
        settings_1.validateSettings(_this.settings);
        utils_1.validateGraph(graph);
        if (!(container instanceof HTMLElement))
            throw new Error("Sigma: container should be an html element.");
        // Properties
        _this.graph = graph;
        _this.container = container;
        _this.initializeCache();
        // Initializing contexts
        _this.createWebGLContext("edges");
        _this.createWebGLContext("nodes");
        _this.createCanvasContext("edgeLabels");
        _this.createCanvasContext("labels");
        _this.createCanvasContext("hovers");
        _this.createCanvasContext("mouse");
        // Blending
        var gl = _this.webGLContexts.nodes;
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
        gl = _this.webGLContexts.edges;
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
        // Loading programs
        for (var type in _this.settings.nodeProgramClasses) {
            var NodeProgramClass = _this.settings.nodeProgramClasses[type];
            _this.nodePrograms[type] = new NodeProgramClass(_this.webGLContexts.nodes);
        }
        for (var type in _this.settings.edgeProgramClasses) {
            var EdgeProgramClass = _this.settings.edgeProgramClasses[type];
            _this.edgePrograms[type] = new EdgeProgramClass(_this.webGLContexts.edges);
        }
        // Initial resize
        _this.resize();
        // Initializing the camera
        _this.camera = new camera_1.default();
        // Binding camera events
        _this.bindCameraHandlers();
        // Initializing captors
        _this.mouseCaptor = new mouse_1.default(_this.elements.mouse, _this.camera);
        _this.touchCaptor = new touch_1.default(_this.elements.mouse, _this.camera);
        // Binding event handlers
        _this.bindEventHandlers();
        // Binding graph handlers
        _this.bindGraphHandlers();
        // Processing data for the first time & render
        _this.process();
        _this.render();
        return _this;
    }
    /**---------------------------------------------------------------------------
     * Internal methods.
     **---------------------------------------------------------------------------
     */
    /**
     * Internal function used to create a canvas element.
     * @param  {string} id - Context's id.
     * @return {Sigma}
     */
    Sigma.prototype.createCanvas = function (id) {
        var canvas = utils_1.createElement("canvas", {
            position: "absolute",
        }, {
            class: "sigma-" + id,
        });
        this.elements[id] = canvas;
        this.container.appendChild(canvas);
        return canvas;
    };
    /**
     * Internal function used to create a canvas context and add the relevant
     * DOM elements.
     *
     * @param  {string} id - Context's id.
     * @return {Sigma}
     */
    Sigma.prototype.createCanvasContext = function (id) {
        var canvas = this.createCanvas(id);
        var contextOptions = {
            preserveDrawingBuffer: false,
            antialias: false,
        };
        this.canvasContexts[id] = canvas.getContext("2d", contextOptions);
        return this;
    };
    /**
     * Internal function used to create a canvas context and add the relevant
     * DOM elements.
     *
     * @param  {string} id - Context's id.
     * @return {Sigma}
     */
    Sigma.prototype.createWebGLContext = function (id) {
        var canvas = this.createCanvas(id);
        var contextOptions = {
            preserveDrawingBuffer: false,
            antialias: false,
        };
        var context;
        // First we try webgl2 for an easy performance boost
        context = canvas.getContext("webgl2", contextOptions);
        // Else we fall back to webgl
        if (!context)
            context = canvas.getContext("webgl", contextOptions);
        // Edge, I am looking right at you...
        if (!context)
            context = canvas.getContext("experimental-webgl", contextOptions);
        this.webGLContexts[id] = context;
        return this;
    };
    /**
     * Method used to initialize display data cache.
     *
     * @return {Sigma}
     */
    Sigma.prototype.initializeCache = function () {
        var _this = this;
        var graph = this.graph;
        // NOTE: the data caches are never reset to avoid paying a GC cost
        // But this could prove to be a bad decision. In which case just "reset"
        // them here.
        var i = 0;
        graph.forEachNode(function (key) {
            _this.nodeKeyToIndex[key] = i++;
            _this.nodeDataCache[key] = {};
        });
        i = 0;
        graph.forEachEdge(function (key) {
            _this.edgeKeyToIndex[key] = i++;
            _this.edgeDataCache[key] = {};
        });
    };
    /**
     * Method binding camera handlers.
     *
     * @return {Sigma}
     */
    Sigma.prototype.bindCameraHandlers = function () {
        var _this = this;
        this.activeListeners.camera = function () {
            _this.scheduleRefresh();
        };
        this.camera.on("updated", this.activeListeners.camera);
        return this;
    };
    /**
     * Method binding event handlers.
     *
     * @return {Sigma}
     */
    Sigma.prototype.bindEventHandlers = function () {
        var _this = this;
        // Handling window resize
        this.activeListeners.handleResize = function () {
            _this.needToSoftProcess = true;
            _this.scheduleRefresh();
        };
        window.addEventListener("resize", this.activeListeners.handleResize);
        // Function checking if the mouse is on the given node
        var mouseIsOnNode = function (mouseX, mouseY, nodeX, nodeY, size) {
            return (mouseX > nodeX - size &&
                mouseX < nodeX + size &&
                mouseY > nodeY - size &&
                mouseY < nodeY + size &&
                Math.sqrt(Math.pow(mouseX - nodeX, 2) + Math.pow(mouseY - nodeY, 2)) < size);
        };
        // Function returning the nodes in the mouse's quad
        var getQuadNodes = function (mouseX, mouseY) {
            var mouseGraphPosition = _this.camera.viewportToFramedGraph({ width: _this.width, height: _this.height }, { x: mouseX, y: mouseY });
            // TODO: minus 1? lol
            return _this.quadtree.point(mouseGraphPosition.x, 1 - mouseGraphPosition.y);
        };
        // Handling mouse move
        this.activeListeners.handleMove = function (e) {
            // NOTE: for the canvas renderer, testing the pixel's alpha should
            // give some boost but this slows things down for WebGL empirically.
            // TODO: this should be a method from the camera (or can be passed to graph to display somehow)
            var sizeRatio = Math.pow(_this.camera.getState().ratio, 0.5);
            var quadNodes = getQuadNodes(e.x, e.y);
            var dimensions = { width: _this.width, height: _this.height };
            // We will hover the node whose center is closest to mouse
            var minDistance = Infinity, nodeToHover = null;
            for (var i = 0, l = quadNodes.length; i < l; i++) {
                var node = quadNodes[i];
                var data = _this.nodeDataCache[node];
                var pos = _this.camera.framedGraphToViewport(dimensions, data);
                var size = data.size / sizeRatio;
                if (mouseIsOnNode(e.x, e.y, pos.x, pos.y, size)) {
                    var distance = Math.sqrt(Math.pow(e.x - pos.x, 2) + Math.pow(e.y - pos.y, 2));
                    // TODO: sort by min size also for cases where center is the same
                    if (distance < minDistance) {
                        minDistance = distance;
                        nodeToHover = node;
                    }
                }
            }
            if (nodeToHover && _this.hoveredNode !== nodeToHover) {
                // Handling passing from one node to the other directly
                if (_this.hoveredNode)
                    _this.emit("leaveNode", { node: _this.hoveredNode });
                _this.hoveredNode = nodeToHover;
                _this.emit("enterNode", { node: nodeToHover });
                _this.scheduleHighlightedNodesRender();
                return;
            }
            // Checking if the hovered node is still hovered
            if (_this.hoveredNode) {
                var data = _this.nodeDataCache[_this.hoveredNode];
                var pos = _this.camera.framedGraphToViewport(dimensions, data);
                var size = data.size / sizeRatio;
                if (!mouseIsOnNode(e.x, e.y, pos.x, pos.y, size)) {
                    var node = _this.hoveredNode;
                    _this.hoveredNode = null;
                    _this.emit("leaveNode", { node: node });
                    return _this.scheduleHighlightedNodesRender();
                }
            }
        };
        // Handling click
        var createClickListener = function (eventType) {
            return function (e) {
                var sizeRatio = Math.pow(_this.camera.getState().ratio, 0.5);
                var quadNodes = getQuadNodes(e.x, e.y);
                var dimensions = { width: _this.width, height: _this.height };
                for (var i = 0, l = quadNodes.length; i < l; i++) {
                    var node = quadNodes[i];
                    var data = _this.nodeDataCache[node];
                    var pos = _this.camera.framedGraphToViewport(dimensions, data);
                    var size = data.size / sizeRatio;
                    if (mouseIsOnNode(e.x, e.y, pos.x, pos.y, size))
                        return _this.emit(eventType + "Node", { node: node, captor: e, event: e });
                }
                return _this.emit(eventType + "Stage", { event: e });
            };
        };
        this.activeListeners.handleClick = createClickListener("click");
        this.activeListeners.handleRightClick = createClickListener("rightClick");
        this.activeListeners.handleDown = createClickListener("down");
        this.mouseCaptor.on("mousemove", this.activeListeners.handleMove);
        this.mouseCaptor.on("click", this.activeListeners.handleClick);
        this.mouseCaptor.on("rightClick", this.activeListeners.handleRightClick);
        this.mouseCaptor.on("mousedown", this.activeListeners.handleDown);
        // TODO
        // Deal with Touch captor events
        return this;
    };
    /**
     * Method binding graph handlers
     *
     * @return {Sigma}
     */
    Sigma.prototype.bindGraphHandlers = function () {
        var _this = this;
        var graph = this.graph;
        this.activeListeners.graphUpdate = function () {
            _this.needToProcess = true;
            _this.scheduleRefresh();
        };
        this.activeListeners.softGraphUpdate = function () {
            _this.needToSoftProcess = true;
            _this.scheduleRefresh();
        };
        this.activeListeners.addNodeGraphUpdate = function (e) {
            // Adding entry to cache
            _this.nodeKeyToIndex[e.key] = graph.order - 1;
            _this.nodeDataCache[e.key] = {};
            _this.activeListeners.graphUpdate();
        };
        this.activeListeners.addEdgeGraphUpdate = function (e) {
            // Adding entry to cache
            _this.nodeKeyToIndex[e.key] = graph.order - 1;
            _this.edgeDataCache[e.key] = {};
            _this.activeListeners.graphUpdate();
        };
        // TODO: clean cache on drop!
        // TODO: bind this on composed state events
        // TODO: it could be possible to update only specific node etc. by holding
        // a fixed-size pool of updated items
        graph.on("nodeAdded", this.activeListeners.addNodeGraphUpdate);
        graph.on("nodeDropped", this.activeListeners.graphUpdate);
        graph.on("nodeAttributesUpdated", this.activeListeners.softGraphUpdate);
        graph.on("eachNodeAttributesUpdated", this.activeListeners.graphUpdate);
        graph.on("edgeAdded", this.activeListeners.addEdgeGraphUpdate);
        graph.on("edgeDropped", this.activeListeners.graphUpdate);
        graph.on("edgeAttributesUpdated", this.activeListeners.softGraphUpdate);
        graph.on("eachEdgeAttributesUpdated", this.activeListeners.graphUpdate);
        graph.on("edgesCleared", this.activeListeners.graphUpdate);
        graph.on("cleared", this.activeListeners.graphUpdate);
        return this;
    };
    /**
     * Method used to process the whole graph's data.
     *
     * @return {Sigma}
     */
    Sigma.prototype.process = function (keepArrays) {
        if (keepArrays === void 0) { keepArrays = false; }
        var graph = this.graph, settings = this.settings;
        // Clearing the quad
        this.quadtree.clear();
        // Clear the highlightedNodes
        this.highlightedNodes = new Set();
        // Computing extents
        var nodeExtentProperties = ["x", "y", "z"];
        if (this.settings.zIndex) {
            nodeExtentProperties.push("z");
            this.edgeExtent = edgeExtent(graph, ["z"]);
        }
        this.nodeExtent = nodeExtent(graph, nodeExtentProperties);
        // Rescaling function
        this.normalizationFunction = utils_1.createNormalizationFunction(this.nodeExtent);
        var nodeProgram = this.nodePrograms[this.settings.defaultNodeType];
        if (!keepArrays)
            nodeProgram.allocate(graph.order);
        var nodes = graph.nodes();
        // Handling node z-index
        // TODO: z-index needs us to compute display data before hand
        if (this.settings.zIndex)
            nodes = utils_1.zIndexOrdering(this.nodeExtent.z, function (node) { return graph.getNodeAttribute(node, "z"); }, nodes);
        for (var i = 0, l = nodes.length; i < l; i++) {
            var node = nodes[i];
            // Node display data resolution:
            //   1. First we get the node's attributes
            //   2. We optionally reduce them using the function provided by the user
            //      Note that this function must return a total object and won't be merged
            //   3. We apply our defaults, while running some vital checks
            //   4. We apply the normalization function
            var data = graph.getNodeAttributes(node);
            if (settings.nodeReducer)
                data = settings.nodeReducer(node, data);
            // We shallow copy the data to avoid mutating both the graph and the reducer's result
            data = Object.assign(this.nodeDataCache[node], data);
            applyNodeDefaults(this.settings, node, data);
            this.normalizationFunction.applyTo(data);
            this.quadtree.add(node, data.x, 1 - data.y, data.size / this.width);
            nodeProgram.process(data, data.hidden, i);
            // Save the node in the highlighted set if needed
            if (data.highlighted && !data.hidden)
                this.highlightedNodes.add(node);
            this.nodeKeyToIndex[node] = i;
        }
        // TODO: maybe we should bind and buffer as part of rendering?
        // We also need to find when it is useful and when it's really not
        nodeProgram.bind();
        nodeProgram.bufferData();
        var edgeProgram = this.edgePrograms[this.settings.defaultEdgeType];
        if (!keepArrays)
            edgeProgram.allocate(graph.size);
        var edges = graph.edges();
        // Handling edge z-index
        if (this.settings.zIndex && this.edgeExtent)
            edges = utils_1.zIndexOrdering(this.edgeExtent.z, function (edge) { return graph.getEdgeAttribute(edge, "z"); }, edges);
        for (var i = 0, l = edges.length; i < l; i++) {
            var edge = edges[i];
            // Edge display data resolution:
            //   1. First we get the edge's attributes
            //   2. We optionally reduce them using the function provided by the user
            //      Note that this function must return a total object and won't be merged
            //   3. We apply our defaults, while running some vital checks
            var data = graph.getEdgeAttributes(edge);
            if (settings.edgeReducer)
                data = settings.edgeReducer(edge, data);
            // We shallow copy the data to avoid mutating both the graph and the reducer's result
            data = Object.assign(this.edgeDataCache[edge], data);
            applyEdgeDefaults(this.settings, edge, data);
            var extremities = graph.extremities(edge), sourceData = this.nodeDataCache[extremities[0]], targetData = this.nodeDataCache[extremities[1]];
            var hidden = data.hidden || sourceData.hidden || targetData.hidden;
            edgeProgram.process(sourceData, targetData, data, hidden, i);
            this.nodeKeyToIndex[edge] = i;
        }
        // Computing edge indices if necessary
        if (!keepArrays && typeof edgeProgram.computeIndices === "function")
            edgeProgram.computeIndices();
        // TODO: maybe we should bind and buffer as part of rendering?
        // We also need to find when it is useful and when it's really not
        edgeProgram.bind();
        edgeProgram.bufferData();
        return this;
    };
    /**
     * Method used to render labels.
     *
     * @return {Sigma}
     */
    Sigma.prototype.renderLabels = function () {
        if (!this.settings.renderLabels)
            return this;
        var cameraState = this.camera.getState();
        var dimensions = { width: this.width, height: this.height };
        // Finding visible nodes to display their labels
        var visibleNodes;
        if (cameraState.ratio >= 1) {
            // Camera is unzoomed so no need to ask the quadtree for visible nodes
            visibleNodes = this.graph.nodes();
        }
        else {
            // Let's ask the quadtree
            var viewRectangle = this.camera.viewRectangle(dimensions);
            visibleNodes = this.quadtree.rectangle(viewRectangle.x1, 1 - viewRectangle.y1, viewRectangle.x2, 1 - viewRectangle.y2, viewRectangle.height);
        }
        // Selecting labels to draw
        var gridSettings = this.settings.labelGrid;
        var labelsToDisplay = labels_1.labelsToDisplayFromGrid({
            cache: this.nodeDataCache,
            camera: this.camera,
            cell: gridSettings.cell,
            dimensions: dimensions,
            displayedLabels: this.displayedLabels,
            fontSize: this.settings.labelSize,
            graph: this.graph,
            renderedSizeThreshold: gridSettings.renderedSizeThreshold,
            visibleNodes: visibleNodes,
        });
        // Drawing labels
        var context = this.canvasContexts.labels;
        var sizeRatio = Math.pow(cameraState.ratio, 0.5);
        for (var i = 0, l = labelsToDisplay.length; i < l; i++) {
            var data = this.nodeDataCache[labelsToDisplay[i]];
            var _a = this.camera.framedGraphToViewport(dimensions, data), x = _a.x, y = _a.y;
            // TODO: we can cache the labels we need to render until the camera's ratio changes
            // TODO: this should be computed in the canvas components?
            var size = data.size / sizeRatio;
            this.settings.labelRenderer(context, {
                key: labelsToDisplay[i],
                label: data.label,
                color: "#000",
                size: size,
                x: x,
                y: y,
            }, this.settings);
        }
        // Caching visible nodes and displayed labels
        this.displayedLabels = new Set(labelsToDisplay);
        return this;
    };
    /**
     * Method used to render edge labels, based on which node labels were
     * rendered.
     *
     * @return {Sigma}
     */
    Sigma.prototype.renderEdgeLabels = function () {
        if (!this.settings.renderEdgeLabels)
            return this;
        var cameraState = this.camera.getState();
        var sizeRatio = Math.pow(cameraState.ratio, 0.5);
        var context = this.canvasContexts.edgeLabels;
        var dimensions = { width: this.width, height: this.height };
        // Clearing
        context.clearRect(0, 0, this.width, this.height);
        var edgeLabelsToDisplay = labels_1.edgeLabelsToDisplayFromNodes({
            nodeDataCache: this.nodeDataCache,
            edgeDataCache: this.edgeDataCache,
            graph: this.graph,
            hoveredNode: this.hoveredNode,
            displayedNodeLabels: this.displayedLabels,
            highlightedNodes: this.highlightedNodes,
        });
        for (var i = 0, l = edgeLabelsToDisplay.length; i < l; i++) {
            var edge = edgeLabelsToDisplay[i], extremities = this.graph.extremities(edge), sourceData = this.nodeDataCache[extremities[0]], targetData = this.nodeDataCache[extremities[1]], edgeData = this.edgeDataCache[edgeLabelsToDisplay[i]];
            var _a = this.camera.framedGraphToViewport(dimensions, sourceData), sourceX = _a.x, sourceY = _a.y;
            var _b = this.camera.framedGraphToViewport(dimensions, targetData), targetX = _b.x, targetY = _b.y;
            // TODO: we can cache the labels we need to render until the camera's ratio changes
            // TODO: this should be computed in the canvas components?
            var size = edgeData.size / sizeRatio;
            this.settings.edgeLabelRenderer(context, {
                key: edge,
                label: edgeData.label,
                color: edgeData.color,
                size: size,
            }, {
                key: extremities[0],
                x: sourceX,
                y: sourceY,
            }, {
                key: extremities[1],
                x: targetX,
                y: targetY,
            }, this.settings);
        }
        return this;
    };
    /**
     * Method used to render the highlighted nodes.
     *
     * @return {Sigma}
     */
    Sigma.prototype.renderHighlightedNodes = function () {
        var _this = this;
        var camera = this.camera;
        var sizeRatio = Math.pow(camera.getState().ratio, 0.5);
        var context = this.canvasContexts.hovers;
        // Clearing
        context.clearRect(0, 0, this.width, this.height);
        // Rendering
        var render = function (node) {
            var data = _this.nodeDataCache[node];
            var _a = camera.framedGraphToViewport({ width: _this.width, height: _this.height }, data), x = _a.x, y = _a.y;
            var size = data.size / sizeRatio;
            _this.settings.hoverRenderer(context, {
                key: node,
                label: data.label,
                color: data.color,
                size: size,
                x: x,
                y: y,
            }, _this.settings);
        };
        if (this.hoveredNode) {
            render(this.hoveredNode);
        }
        this.highlightedNodes.forEach(render);
    };
    /**
     * Method used to schedule a hover render.
     *
     */
    Sigma.prototype.scheduleHighlightedNodesRender = function () {
        var _this = this;
        if (this.renderHighlightedNodesFrame || this.renderFrame)
            return;
        this.renderHighlightedNodesFrame = utils_1.requestFrame(function () {
            // Resetting state
            _this.renderHighlightedNodesFrame = null;
            // Rendering
            _this.renderHighlightedNodes();
            _this.renderEdgeLabels();
        });
    };
    /**
     * Method used to render.
     *
     * @return {Sigma}
     */
    Sigma.prototype.render = function () {
        // If a render was scheduled, we cancel it
        if (this.renderFrame) {
            utils_1.cancelFrame(this.renderFrame);
            this.renderFrame = null;
            this.needToProcess = false;
            this.needToSoftProcess = false;
        }
        // First we need to resize
        this.resize();
        // Clearing the canvases
        this.clear();
        // If we have no nodes we can stop right there
        if (!this.graph.order)
            return this;
        // TODO: improve this heuristic or move to the captor itself?
        // TODO: deal with the touch captor here as well
        var mouseCaptor = this.mouseCaptor;
        var moving = this.camera.isAnimated() ||
            mouseCaptor.isMoving ||
            mouseCaptor.draggedEvents ||
            mouseCaptor.currentWheelDirection;
        // Then we need to extract a matrix from the camera
        var cameraState = this.camera.getState(), cameraMatrix = utils_1.matrixFromCamera(cameraState, {
            width: this.width,
            height: this.height,
        });
        var program;
        // Drawing nodes
        program = this.nodePrograms[this.settings.defaultNodeType];
        program.render({
            matrix: cameraMatrix,
            width: this.width,
            height: this.height,
            ratio: cameraState.ratio,
            nodesPowRatio: 0.5,
            scalingRatio: WEBGL_OVERSAMPLING_RATIO,
        });
        // Drawing edges
        if (!this.settings.hideEdgesOnMove || !moving) {
            program = this.edgePrograms[this.settings.defaultEdgeType];
            program.render({
                matrix: cameraMatrix,
                width: this.width,
                height: this.height,
                ratio: cameraState.ratio,
                edgesPowRatio: 0.5,
                scalingRatio: WEBGL_OVERSAMPLING_RATIO,
            });
        }
        // Do not display labels on move per setting
        if (this.settings.hideLabelsOnMove && moving)
            return this;
        this.renderLabels();
        this.renderEdgeLabels();
        this.renderHighlightedNodes();
        return this;
    };
    /**---------------------------------------------------------------------------
     * Public API.
     **---------------------------------------------------------------------------
     */
    /**
     * Method returning the renderer's camera.
     *
     * @return {Camera}
     */
    Sigma.prototype.getCamera = function () {
        return this.camera;
    };
    /**
     * Method returning the renderer's graph.
     *
     * @return {Graph}
     */
    Sigma.prototype.getGraph = function () {
        return this.graph;
    };
    /**
     * Method returning the mouse captor.
     *
     * @return {MouseCaptor}
     */
    Sigma.prototype.getMouseCaptor = function () {
        return this.mouseCaptor;
    };
    /**
     * Method returning the touch captor.
     *
     * @return {TouchCaptor}
     */
    Sigma.prototype.getTouchCaptor = function () {
        return this.touchCaptor;
    };
    /**
     * Method returning the current renderer's dimensions.
     *
     * @return {Dimensions}
     */
    Sigma.prototype.getDimensions = function () {
        return { width: this.width, height: this.height };
    };
    /**
     * Method used to get all the sigma node attributes.
     * It's usefull for example to get the position of a node
     * and to get values that are set by the nodeReducer
     *
     * @param  {string} key - The node's key.
     * @return {Partial<NodeAttributes>} A copy of the desired node's attribute or undefined if not found
     */
    Sigma.prototype.getNodeAttributes = function (key) {
        var node = this.nodeDataCache[key];
        return node ? Object.assign({}, node) : undefined;
    };
    /**
     * Method used to get all the sigma edge attributes.
     * It's usefull for example to get values that are set by the edgeReducer.
     *
     * @param  {string} key - The edge's key.
     * @return {Partial<EdgeAttributes> | undefined} A copy of the desired edge's attribute or undefined if not found
     */
    Sigma.prototype.getEdgeAttributes = function (key) {
        var edge = this.edgeDataCache[key];
        return edge ? Object.assign({}, edge) : undefined;
    };
    /**
     * Method returning the current value for a given setting key.
     *
     * @param  {string} key - The setting key to get.
     * @return {any} The value attached to this setting key or undefined if not found
     */
    Sigma.prototype.getSetting = function (key) {
        return this.settings[key];
    };
    /**
     * Method setting the value of a given setting key. Note that this will schedule
     * a new render next frame.
     *
     * @param  {string} key - The setting key to set.
     * @param  {any}    value - The value to set.
     * @return {Sigma}
     */
    Sigma.prototype.setSetting = function (key, value) {
        this.settings[key] = value;
        settings_1.validateSettings(this.settings);
        this.needToProcess = true; // TODO: some keys may work with only needToSoftProcess or even nothing
        this.scheduleRefresh();
        return this;
    };
    /**
     * Method updating the value of a given setting key using the provided function.
     * Note that this will schedule a new render next frame.
     *
     * @param  {string} key - The setting key to set.
     * @param  {any}    value - The value to set.
     * @return {Sigma}
     */
    Sigma.prototype.updateSetting = function (key, updater) {
        this.settings[key] = updater(this.settings[key]);
        settings_1.validateSettings(this.settings);
        this.needToProcess = true; // TODO: some keys may work with only needToSoftProcess or even nothing
        this.scheduleRefresh();
        return this;
    };
    /**
     * Method used to resize the renderer.
     *
     * @return {Sigma}
     */
    Sigma.prototype.resize = function () {
        var previousWidth = this.width, previousHeight = this.height;
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        if (this.width === 0)
            throw new Error("Sigma: container has no width.");
        if (this.height === 0)
            throw new Error("Sigma: container has no height.");
        // If nothing has changed, we can stop right here
        if (previousWidth === this.width && previousHeight === this.height)
            return this;
        // Sizing dom elements
        for (var id in this.elements) {
            var element = this.elements[id];
            element.style.width = this.width + "px";
            element.style.height = this.height + "px";
        }
        // Sizing canvas contexts
        for (var id in this.canvasContexts) {
            this.elements[id].setAttribute("width", this.width * PIXEL_RATIO + "px");
            this.elements[id].setAttribute("height", this.height * PIXEL_RATIO + "px");
            if (PIXEL_RATIO !== 1)
                this.canvasContexts[id].scale(PIXEL_RATIO, PIXEL_RATIO);
        }
        // Sizing WebGL contexts
        for (var id in this.webGLContexts) {
            this.elements[id].setAttribute("width", this.width * WEBGL_OVERSAMPLING_RATIO + "px");
            this.elements[id].setAttribute("height", this.height * WEBGL_OVERSAMPLING_RATIO + "px");
            this.webGLContexts[id].viewport(0, 0, this.width * WEBGL_OVERSAMPLING_RATIO, this.height * WEBGL_OVERSAMPLING_RATIO);
        }
        return this;
    };
    /**
     * Method used to clear all the canvases.
     *
     * @return {Sigma}
     */
    Sigma.prototype.clear = function () {
        this.webGLContexts.nodes.clear(this.webGLContexts.nodes.COLOR_BUFFER_BIT);
        this.webGLContexts.edges.clear(this.webGLContexts.edges.COLOR_BUFFER_BIT);
        this.canvasContexts.labels.clearRect(0, 0, this.width, this.height);
        this.canvasContexts.hovers.clearRect(0, 0, this.width, this.height);
        this.canvasContexts.edgeLabels.clearRect(0, 0, this.width, this.height);
        return this;
    };
    /**
     * Method used to refresh all computed data.
     *
     * @return {Sigma}
     */
    Sigma.prototype.refresh = function () {
        // Do we need to process data?
        if (this.needToProcess) {
            this.process();
        }
        else if (this.needToSoftProcess) {
            this.process(true);
        }
        // Resetting state
        this.needToProcess = false;
        this.needToSoftProcess = false;
        // Rendering
        this.render();
        return this;
    };
    /**
     * Method used to refresh all computed data, at the next available frame.
     * If this method has already been called this frame, then it will only render once at the next available frame.
     *
     * @return {Sigma}
     */
    Sigma.prototype.scheduleRefresh = function () {
        var _this = this;
        if (!this.renderFrame) {
            this.renderFrame = utils_1.requestFrame(function () {
                _this.refresh();
                _this.renderFrame = null;
            });
        }
        return this;
    };
    /**
     * Method used to translate a point's coordinates from the viewport system (pixel distance from the top-left of the
     * stage) to the graph system (the reference system of data as they are in the given graph instance).
     *
     * @param {Coordinates} viewportPoint
     */
    Sigma.prototype.viewportToGraph = function (viewportPoint) {
        return this.normalizationFunction.inverse(this.camera.viewportToFramedGraph(this.getDimensions(), viewportPoint));
    };
    /**
     * Method used to translate a point's coordinates from the graph system (the reference system of data as they are in
     * the given graph instance) to the viewport system (pixel distance from the top-left of the stage).
     *
     * @param {Coordinates} graphPoint
     */
    Sigma.prototype.graphToViewport = function (graphPoint) {
        return this.camera.framedGraphToViewport(this.getDimensions(), this.normalizationFunction(graphPoint));
    };
    /**
     * Method used to shut the container & release event listeners.
     *
     * @return {undefined}
     */
    Sigma.prototype.kill = function () {
        var graph = this.graph;
        // Emitting "kill" events so that plugins and such can cleanup
        this.emit("kill");
        // Releasing events
        this.removeAllListeners();
        // Releasing camera handlers
        this.camera.removeListener("updated", this.activeListeners.camera);
        // Releasing DOM events & captors
        window.removeEventListener("resize", this.activeListeners.handleResize);
        this.mouseCaptor.kill();
        this.touchCaptor.kill();
        // Releasing graph handlers
        graph.removeListener("nodeAdded", this.activeListeners.addNodeGraphUpdate);
        graph.removeListener("nodeDropped", this.activeListeners.graphUpdate);
        graph.removeListener("nodeAttributesUpdated", this.activeListeners.softGraphUpdate);
        graph.removeListener("eachNodeAttributesUpdated", this.activeListeners.graphUpdate);
        graph.removeListener("edgeAdded", this.activeListeners.addEdgeGraphUpdate);
        graph.removeListener("edgeDropped", this.activeListeners.graphUpdate);
        graph.removeListener("edgeAttributesUpdated", this.activeListeners.softGraphUpdate);
        graph.removeListener("eachEdgeAttributesUpdated", this.activeListeners.graphUpdate);
        graph.removeListener("edgesCleared", this.activeListeners.graphUpdate);
        graph.removeListener("cleared", this.activeListeners.graphUpdate);
        // Releasing cache & state
        this.quadtree = new quadtree_1.default();
        this.nodeDataCache = {};
        this.edgeDataCache = {};
        this.highlightedNodes = new Set();
        this.displayedLabels = new Set();
        // Clearing frames
        if (this.renderFrame) {
            utils_1.cancelFrame(this.renderFrame);
            this.renderFrame = null;
        }
        if (this.renderHighlightedNodesFrame) {
            utils_1.cancelFrame(this.renderHighlightedNodesFrame);
            this.renderHighlightedNodesFrame = null;
        }
        // Destroying canvases
        var container = this.container;
        while (container.firstChild)
            container.removeChild(container.firstChild);
    };
    return Sigma;
}(events_1.EventEmitter));
exports.default = Sigma;


/***/ }),
/* 12 */
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Graphology Extent
 * ==================
 *
 * Simple function returning the extent of selected attributes of the graph.
 */
var isGraph = __webpack_require__(7);

/**
 * Function returning the extent of the selected node attributes.
 *
 * @param  {Graph}        graph     - Target graph.
 * @param  {string|array} attribute - Single or multiple attributes.
 * @return {array|object}
 */
function nodeExtent(graph, attribute) {
  if (!isGraph(graph))
    throw new Error('graphology-metrics/extent: the given graph is not a valid graphology instance.');

  var attributes = [].concat(attribute);

  var value,
      key,
      a;

  var results = {};

  for (a = 0; a < attributes.length; a++) {
    key = attributes[a];

    results[key] = [Infinity, -Infinity];
  }

  graph.forEachNode(function(node, data) {
    for (a = 0; a < attributes.length; a++) {
      key = attributes[a];
      value = data[key];

      if (value < results[key][0])
        results[key][0] = value;

      if (value > results[key][1])
        results[key][1] = value;
    }
  });

  return typeof attribute === 'string' ? results[attribute] : results;
}

/**
 * Function returning the extent of the selected edge attributes.
 *
 * @param  {Graph}        graph     - Target graph.
 * @param  {string|array} attribute - Single or multiple attributes.
 * @return {array|object}
 */
function edgeExtent(graph, attribute) {
  if (!isGraph(graph))
    throw new Error('graphology-metrics/extent: the given graph is not a valid graphology instance.');

  var attributes = [].concat(attribute);

  var value,
      key,
      a;

  var results = {};

  for (a = 0; a < attributes.length; a++) {
    key = attributes[a];

    results[key] = [Infinity, -Infinity];
  }

  graph.forEachEdge(function(edge, data) {
    for (a = 0; a < attributes.length; a++) {
      key = attributes[a];
      value = data[key];

      if (value < results[key][0])
        results[key][0] = value;

      if (value > results[key][1])
        results[key][1] = value;
    }
  });

  return typeof attribute === 'string' ? results[attribute] : results;
}

/**
 * Exporting.
 */
var extent = nodeExtent;
extent.nodeExtent = nodeExtent;
extent.edgeExtent = edgeExtent;

module.exports = extent;


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Sigma.js Camera Class
 * ======================
 *
 * Class designed to store camera information & used to update it.
 * @module
 */
var events_1 = __webpack_require__(12);
var animate_1 = __webpack_require__(15);
var easings_1 = __importDefault(__webpack_require__(19));
var utils_1 = __webpack_require__(16);
/**
 * Defaults.
 */
var DEFAULT_ZOOMING_RATIO = 1.5;
// TODO: animate options = number polymorphism?
// TODO: pan, zoom, unzoom, reset, rotate, zoomTo
// TODO: add width / height to camera and add #.resize
// TODO: bind camera to renderer rather than sigma
// TODO: add #.graphToDisplay, #.displayToGraph, batch methods later
/**
 * Camera class
 *
 * @constructor
 */
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super.call(this) || this;
        _this.x = 0.5;
        _this.y = 0.5;
        _this.angle = 0;
        _this.ratio = 1;
        _this.nextFrame = null;
        _this.enabled = true;
        // State
        _this.previousState = _this.getState();
        return _this;
    }
    /**
     * Static method used to create a Camera object with a given state.
     *
     * @param state
     * @return {Camera}
     */
    Camera.from = function (state) {
        var camera = new Camera();
        return camera.setState(state);
    };
    /**
     * Method used to enable the camera.
     *
     * @return {Camera}
     */
    Camera.prototype.enable = function () {
        this.enabled = true;
        return this;
    };
    /**
     * Method used to disable the camera.
     *
     * @return {Camera}
     */
    Camera.prototype.disable = function () {
        this.enabled = false;
        return this;
    };
    /**
     * Method used to retrieve the camera's current state.
     *
     * @return {object}
     */
    Camera.prototype.getState = function () {
        return {
            x: this.x,
            y: this.y,
            angle: this.angle,
            ratio: this.ratio,
        };
    };
    /**
     * Method used to retrieve the camera's previous state.
     *
     * @return {object}
     */
    Camera.prototype.getPreviousState = function () {
        var state = this.previousState;
        return {
            x: state.x,
            y: state.y,
            angle: state.angle,
            ratio: state.ratio,
        };
    };
    /**
     * Method used to check whether the camera is currently being animated.
     *
     * @return {boolean}
     */
    Camera.prototype.isAnimated = function () {
        return !!this.nextFrame;
    };
    /**
     * Method returning the coordinates of a point from the framed graph system to the
     * viewport system.
     *
     * @param  {object} dimensions  - Dimensions of the viewport.
     * @param  {object} coordinates - Coordinates of the point.
     * @return {object}             - The point coordinates in the viewport.
     */
    Camera.prototype.framedGraphToViewport = function (dimensions, coordinates) {
        var smallestDimension = Math.min(dimensions.width, dimensions.height);
        var dx = smallestDimension / dimensions.width;
        var dy = smallestDimension / dimensions.height;
        var ratio = this.ratio / smallestDimension;
        // Align with center of the graph:
        var x1 = (coordinates.x - this.x) / ratio;
        var y1 = (this.y - coordinates.y) / ratio;
        // Rotate:
        var x2 = x1 * Math.cos(this.angle) - y1 * Math.sin(this.angle);
        var y2 = y1 * Math.cos(this.angle) + x1 * Math.sin(this.angle);
        return {
            // Translate to center of screen
            x: x2 + smallestDimension / 2 / dx,
            y: y2 + smallestDimension / 2 / dy,
        };
    };
    /**
     * Method returning the coordinates of a point from the viewport system to the
     * framed graph system.
     *
     * @param  {object} dimensions  - Dimensions of the viewport.
     * @param  {object} coordinates - Coordinates of the point.
     * @return {object}             - The point coordinates in the graph frame.
     */
    Camera.prototype.viewportToFramedGraph = function (dimensions, coordinates) {
        var _a;
        var smallestDimension = Math.min(dimensions.width, dimensions.height);
        var dx = smallestDimension / dimensions.width;
        var dy = smallestDimension / dimensions.height;
        var ratio = this.ratio / smallestDimension;
        // Align with center of the graph:
        var x = coordinates.x - smallestDimension / 2 / dx;
        var y = coordinates.y - smallestDimension / 2 / dy;
        // Rotate:
        _a = __read([
            x * Math.cos(-this.angle) - y * Math.sin(-this.angle),
            y * Math.cos(-this.angle) + x * Math.sin(-this.angle),
        ], 2), x = _a[0], y = _a[1];
        return {
            x: x * ratio + this.x,
            y: -y * ratio + this.y,
        };
    };
    /**
     * Method returning the abstract rectangle containing the graph according
     * to the camera's state.
     *
     * @return {object} - The view's rectangle.
     */
    Camera.prototype.viewRectangle = function (dimensions) {
        // TODO: reduce relative margin?
        var marginX = (0 * dimensions.width) / 8, marginY = (0 * dimensions.height) / 8;
        var p1 = this.viewportToFramedGraph(dimensions, { x: 0 - marginX, y: 0 - marginY }), p2 = this.viewportToFramedGraph(dimensions, { x: dimensions.width + marginX, y: 0 - marginY }), h = this.viewportToFramedGraph(dimensions, { x: 0, y: dimensions.height + marginY });
        return {
            x1: p1.x,
            y1: p1.y,
            x2: p2.x,
            y2: p2.y,
            height: p2.y - h.y,
        };
    };
    /**
     * Method used to set the camera's state.
     *
     * @param  {object} state - New state.
     * @return {Camera}
     */
    Camera.prototype.setState = function (state) {
        if (!this.enabled)
            return this;
        // TODO: validations
        // TODO: update by function
        // Keeping track of last state
        this.previousState = this.getState();
        if (state.x)
            this.x = state.x;
        if (state.y)
            this.y = state.y;
        if (state.angle)
            this.angle = state.angle;
        if (state.ratio)
            this.ratio = state.ratio;
        // Emitting
        // TODO: don't emit if nothing changed?
        this.emit("updated", this.getState());
        return this;
    };
    /**
     * Method used to (un)zoom, while preserving the position of a viewport point.
     * Used for instance to
     *
     * @param viewportTarget
     * @param dimensions
     * @param ratio
     * @return {CameraState}
     */
    Camera.prototype.getViewportZoomedState = function (viewportTarget, dimensions, ratio) {
        // TODO: handle max zoom
        var ratioDiff = ratio / this.ratio;
        var center = {
            x: dimensions.width / 2,
            y: dimensions.height / 2,
        };
        var graphMousePosition = this.viewportToFramedGraph(dimensions, viewportTarget);
        var graphCenterPosition = this.viewportToFramedGraph(dimensions, center);
        return __assign(__assign({}, this.getState()), { x: (graphMousePosition.x - graphCenterPosition.x) * (1 - ratioDiff) + this.x, y: (graphMousePosition.y - graphCenterPosition.y) * (1 - ratioDiff) + this.y, ratio: ratio });
    };
    /**
     * Method used to animate the camera.
     *
     * @param  {object}                    state      - State to reach eventually.
     * @param  {object}                    opts       - Options:
     * @param  {number}                      duration - Duration of the animation.
     * @param  {string | number => number}   easing   - Easing function or name of an existing one
     * @param  {function}                  callback   - Callback
     */
    Camera.prototype.animate = function (state, opts, callback) {
        var _this = this;
        if (!this.enabled)
            return;
        var options = Object.assign({}, animate_1.ANIMATE_DEFAULTS, opts);
        var easing = typeof options.easing === "function" ? options.easing : easings_1.default[options.easing];
        // State
        var start = Date.now(), initialState = this.getState();
        // Function performing the animation
        var fn = function () {
            var t = (Date.now() - start) / options.duration;
            // The animation is over:
            if (t >= 1) {
                _this.nextFrame = null;
                _this.setState(state);
                if (_this.animationCallback) {
                    _this.animationCallback.call(null);
                    _this.animationCallback = undefined;
                }
                return;
            }
            var coefficient = easing(t);
            var newState = {};
            if (state.x)
                newState.x = initialState.x + (state.x - initialState.x) * coefficient;
            if (state.y)
                newState.y = initialState.y + (state.y - initialState.y) * coefficient;
            if (state.angle)
                newState.angle = initialState.angle + (state.angle - initialState.angle) * coefficient;
            if (state.ratio)
                newState.ratio = initialState.ratio + (state.ratio - initialState.ratio) * coefficient;
            _this.setState(newState);
            _this.nextFrame = utils_1.requestFrame(fn);
        };
        if (this.nextFrame) {
            utils_1.cancelFrame(this.nextFrame);
            if (this.animationCallback)
                this.animationCallback.call(null);
            this.nextFrame = utils_1.requestFrame(fn);
        }
        else {
            fn();
        }
        this.animationCallback = callback;
    };
    /**
     * Method used to zoom the camera.
     *
     * @param  {number|object} factorOrOptions - Factor or options.
     * @return {function}
     */
    Camera.prototype.animatedZoom = function (factorOrOptions) {
        if (!factorOrOptions) {
            this.animate({ ratio: this.ratio / DEFAULT_ZOOMING_RATIO });
        }
        else {
            if (typeof factorOrOptions === "number")
                return this.animate({ ratio: this.ratio / factorOrOptions });
            else
                this.animate({
                    ratio: this.ratio / (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO),
                }, factorOrOptions);
        }
    };
    /**
     * Method used to unzoom the camera.
     *
     * @param  {number|object} factorOrOptions - Factor or options.
     */
    Camera.prototype.animatedUnzoom = function (factorOrOptions) {
        if (!factorOrOptions) {
            this.animate({ ratio: this.ratio * DEFAULT_ZOOMING_RATIO });
        }
        else {
            if (typeof factorOrOptions === "number")
                return this.animate({ ratio: this.ratio * factorOrOptions });
            else
                this.animate({
                    ratio: this.ratio * (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO),
                }, factorOrOptions);
        }
    };
    /**
     * Method used to reset the camera.
     *
     * @param  {object} options - Options.
     */
    Camera.prototype.animatedReset = function (options) {
        this.animate({
            x: 0.5,
            y: 0.5,
            ratio: 1,
            angle: 0,
        }, options);
    };
    /**
     * Returns a new Camera instance, with the same state as the current camera.
     *
     * @return {Camera}
     */
    Camera.prototype.copy = function () {
        return Camera.from(this.getState());
    };
    return Camera;
}(events_1.EventEmitter));
exports.default = Camera;


/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.animateNodes = exports.ANIMATE_DEFAULTS = void 0;
var index_1 = __webpack_require__(16);
var easings_1 = __importDefault(__webpack_require__(19));
exports.ANIMATE_DEFAULTS = {
    easing: "quadraticInOut",
    duration: 150,
};
/**
 * Function used to animate the nodes.
 */
function animateNodes(graph, targets, opts, callback) {
    var options = Object.assign({}, exports.ANIMATE_DEFAULTS, opts);
    var easing = typeof options.easing === "function" ? options.easing : easings_1.default[options.easing];
    var start = Date.now();
    var startPositions = {};
    for (var node in targets) {
        var attrs = targets[node];
        startPositions[node] = {};
        for (var k in attrs)
            startPositions[node][k] = graph.getNodeAttribute(node, k);
    }
    var frame = null;
    var step = function () {
        var p = (Date.now() - start) / options.duration;
        if (p >= 1) {
            // Animation is done
            for (var node in targets) {
                var attrs = targets[node];
                for (var k in attrs)
                    graph.setNodeAttribute(node, k, attrs[k]);
            }
            if (typeof callback === "function")
                callback();
            return;
        }
        p = easing(p);
        for (var node in targets) {
            var attrs = targets[node];
            var s = startPositions[node];
            for (var k in attrs)
                graph.setNodeAttribute(node, k, attrs[k] * p + s[k] * (1 - p));
        }
        frame = index_1.requestFrame(step);
    };
    step();
    return function () {
        if (frame)
            index_1.cancelFrame(frame);
    };
}
exports.animateNodes = animateNodes;


/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateGraph = exports.canUse32BitsIndices = exports.extractPixel = exports.matrixFromCamera = exports.floatColor = exports.zIndexOrdering = exports.createNormalizationFunction = exports.getPixelRatio = exports.createElement = exports.cancelFrame = exports.requestFrame = exports.assignDeep = exports.isPlainObject = void 0;
var is_graph_1 = __importDefault(__webpack_require__(17));
var matrices_1 = __webpack_require__(18);
/**
 * Checks whether the given value is a plain object.
 *
 * @param  {mixed}   value - Target value.
 * @return {boolean}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function isPlainObject(value) {
    return typeof value === "object" && value !== null && value.constructor === Object;
}
exports.isPlainObject = isPlainObject;
/**
 * Very simple recursive Object.assign-like function.
 *
 * @param  {object} target       - First object.
 * @param  {object} [...objects] - Objects to merge.
 * @return {object}
 */
function assignDeep(target) {
    var objects = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objects[_i - 1] = arguments[_i];
    }
    target = target || {};
    for (var i = 0, l = objects.length; i < l; i++) {
        var o = objects[i];
        if (!o)
            continue;
        for (var k in o) {
            if (isPlainObject(o[k])) {
                target[k] = assignDeep(target[k], o[k]);
            }
            else {
                target[k] = o[k];
            }
        }
    }
    return target;
}
exports.assignDeep = assignDeep;
/**
 * Just some dirty trick to make requestAnimationFrame and cancelAnimationFrame "work" in Node.js, for unit tests:
 */
exports.requestFrame = typeof requestAnimationFrame !== "undefined"
    ? function (callback) { return requestAnimationFrame(callback); }
    : function (callback) { return setTimeout(callback, 0); };
exports.cancelFrame = typeof cancelAnimationFrame !== "undefined"
    ? function (requestID) { return cancelAnimationFrame(requestID); }
    : function (requestID) { return clearTimeout(requestID); };
/**
 * Function used to create DOM elements easily.
 *
 * @param  {string} tag        - Tag name of the element to create.
 * @param  {object} style      - Styles map.
 * @param  {object} attributes - Attributes map.
 * @return {HTMLElement}
 */
function createElement(tag, style, attributes) {
    var element = document.createElement(tag);
    if (style) {
        for (var k in style) {
            element.style[k] = style[k];
        }
    }
    if (attributes) {
        for (var k in attributes) {
            element.setAttribute(k, attributes[k]);
        }
    }
    return element;
}
exports.createElement = createElement;
/**
 * Function returning the browser's pixel ratio.
 *
 * @return {number}
 */
function getPixelRatio() {
    if (typeof window.devicePixelRatio !== "undefined")
        return window.devicePixelRatio;
    return 1;
}
exports.getPixelRatio = getPixelRatio;
function createNormalizationFunction(extent) {
    var _a = __read(extent.x, 2), minX = _a[0], maxX = _a[1], _b = __read(extent.y, 2), minY = _b[0], maxY = _b[1];
    var ratio = Math.max(maxX - minX, maxY - minY);
    if (ratio === 0)
        ratio = 1;
    var dX = (maxX + minX) / 2, dY = (maxY + minY) / 2;
    var fn = function (data) {
        return {
            x: 0.5 + (data.x - dX) / ratio,
            y: 0.5 + (data.y - dY) / ratio,
        };
    };
    // TODO: possibility to apply this in batch over array of indices
    fn.applyTo = function (data) {
        data.x = 0.5 + (data.x - dX) / ratio;
        data.y = 0.5 + (data.y - dY) / ratio;
    };
    fn.inverse = function (data) {
        return {
            x: dX + ratio * (data.x - 0.5),
            y: dY + ratio * (data.y - 0.5),
        };
    };
    fn.ratio = ratio;
    return fn;
}
exports.createNormalizationFunction = createNormalizationFunction;
/**
 * Function ordering the given elements in reverse z-order so they drawn
 * the correct way.
 *
 * @param  {number}   extent   - [min, max] z values.
 * @param  {function} getter   - Z attribute getter function.
 * @param  {array}    elements - The array to sort.
 * @return {array} - The sorted array.
 */
function zIndexOrdering(extent, getter, elements) {
    // If k is > n, we'll use a standard sort
    return elements.sort(function (a, b) {
        var zA = getter(a) || 0, zB = getter(b) || 0;
        if (zA < zB)
            return -1;
        if (zA > zB)
            return 1;
        return 0;
    });
    // TODO: counting sort optimization
}
exports.zIndexOrdering = zIndexOrdering;
/**
 * WebGL utils
 * ===========
 */
/**
 * Memoized function returning a float-encoded color from various string
 * formats describing colors.
 */
var FLOAT_COLOR_CACHE = {};
var INT8 = new Int8Array(4);
var INT32 = new Int32Array(INT8.buffer, 0, 1);
var FLOAT32 = new Float32Array(INT8.buffer, 0, 1);
var RGBA_TEST_REGEX = /^\s*rgba?\s*\(/;
var RGBA_EXTRACT_REGEX = /^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;
function floatColor(val) {
    // If the color is already computed, we yield it
    if (typeof FLOAT_COLOR_CACHE[val] !== "undefined")
        return FLOAT_COLOR_CACHE[val];
    var r = 0, g = 0, b = 0, a = 1;
    // Handling hexadecimal notation
    if (val[0] === "#") {
        if (val.length === 4) {
            r = parseInt(val.charAt(1) + val.charAt(1), 16);
            g = parseInt(val.charAt(2) + val.charAt(2), 16);
            b = parseInt(val.charAt(3) + val.charAt(3), 16);
        }
        else {
            r = parseInt(val.charAt(1) + val.charAt(2), 16);
            g = parseInt(val.charAt(3) + val.charAt(4), 16);
            b = parseInt(val.charAt(5) + val.charAt(6), 16);
        }
    }
    // Handling rgb notation
    else if (RGBA_TEST_REGEX.test(val)) {
        var match = val.match(RGBA_EXTRACT_REGEX);
        if (match) {
            r = +match[1];
            g = +match[2];
            b = +match[3];
            if (match[4])
                a = +match[4];
        }
    }
    a = (a * 255) | 0;
    INT32[0] = ((a << 24) | (b << 16) | (g << 8) | r) & 0xfeffffff;
    var color = FLOAT32[0];
    FLOAT_COLOR_CACHE[val] = color;
    return color;
}
exports.floatColor = floatColor;
/**
 * Function returning a matrix from the current state of the camera.
 */
// TODO: it's possible to optimize this drastically!
function matrixFromCamera(state, dimensions) {
    var angle = state.angle, ratio = state.ratio, x = state.x, y = state.y;
    var width = dimensions.width, height = dimensions.height;
    var matrix = matrices_1.identity();
    var smallestDimension = Math.min(width, height);
    var cameraCentering = matrices_1.translate(matrices_1.identity(), -x, -y), cameraScaling = matrices_1.scale(matrices_1.identity(), 1 / ratio), cameraRotation = matrices_1.rotate(matrices_1.identity(), -angle), viewportScaling = matrices_1.scale(matrices_1.identity(), 2 * (smallestDimension / width), 2 * (smallestDimension / height));
    // Logical order is reversed
    matrices_1.multiply(matrix, viewportScaling);
    matrices_1.multiply(matrix, cameraRotation);
    matrices_1.multiply(matrix, cameraScaling);
    matrices_1.multiply(matrix, cameraCentering);
    return matrix;
}
exports.matrixFromCamera = matrixFromCamera;
/**
 * Function extracting the color at the given pixel.
 */
function extractPixel(gl, x, y, array) {
    var data = array || new Uint8Array(4);
    gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, data);
    return data;
}
exports.extractPixel = extractPixel;
/**
 * Function used to know whether given webgl context can use 32 bits indices.
 */
function canUse32BitsIndices(gl) {
    var webgl2 = typeof WebGL2RenderingContext !== "undefined" && gl instanceof WebGL2RenderingContext;
    return webgl2 || !!gl.getExtension("OES_element_index_uint");
}
exports.canUse32BitsIndices = canUse32BitsIndices;
/**
 * Check if the graph variable is a valid graph, and if sigma can render it.
 */
function validateGraph(graph) {
    // check if it's a valid graphology instance
    if (!is_graph_1.default(graph))
        throw new Error("Sigma: invalid graph instance.");
    // check if nodes have x/y attributes
    graph.forEachNode(function (key, attributes) {
        if (!Number.isFinite(attributes.x) || !Number.isFinite(attributes.y)) {
            throw new Error("Sigma: Coordinates of node " + key + " are invalid. A node must have a numeric 'x' and 'y' attribute.");
        }
    });
}
exports.validateGraph = validateGraph;


/***/ }),
/* 17 */
/***/ ((module) => {

/**
 * Graphology isGraph
 * ===================
 *
 * Very simple function aiming at ensuring the given variable is a
 * graphology instance.
 */

/**
 * Checking the value is a graphology instance.
 *
 * @param  {any}     value - Target value.
 * @return {boolean}
 */
module.exports = function isGraph(value) {
  return (
    value !== null &&
    typeof value === 'object' &&
    typeof value.addUndirectedEdgeWithKey === 'function' &&
    typeof value.dropNode === 'function' &&
    typeof value.multi === 'boolean'
  );
};


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Sigma.js WebGL Matrices Helpers
 * ================================
 *
 * Matrices-related helper functions used by sigma's WebGL renderer.
 * @module
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.multiply = exports.translate = exports.rotate = exports.scale = exports.identity = void 0;
function identity() {
    return Float32Array.of(1, 0, 0, 0, 1, 0, 0, 0, 1);
}
exports.identity = identity;
// TODO: optimize
function scale(m, x, y) {
    m[0] = x;
    m[4] = typeof y === "number" ? y : x;
    return m;
}
exports.scale = scale;
function rotate(m, r) {
    var s = Math.sin(r), c = Math.cos(r);
    m[0] = c;
    m[1] = s;
    m[3] = -s;
    m[4] = c;
    return m;
}
exports.rotate = rotate;
function translate(m, x, y) {
    m[6] = x;
    m[7] = y;
    return m;
}
exports.translate = translate;
function multiply(a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    var b00 = b[0], b01 = b[1], b02 = b[2];
    var b10 = b[3], b11 = b[4], b12 = b[5];
    var b20 = b[6], b21 = b[7], b22 = b[8];
    a[0] = b00 * a00 + b01 * a10 + b02 * a20;
    a[1] = b00 * a01 + b01 * a11 + b02 * a21;
    a[2] = b00 * a02 + b01 * a12 + b02 * a22;
    a[3] = b10 * a00 + b11 * a10 + b12 * a20;
    a[4] = b10 * a01 + b11 * a11 + b12 * a21;
    a[5] = b10 * a02 + b11 * a12 + b12 * a22;
    a[6] = b20 * a00 + b21 * a10 + b22 * a20;
    a[7] = b20 * a01 + b21 * a11 + b22 * a21;
    a[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return a;
}
exports.multiply = multiply;


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cubicInOut = exports.cubicOut = exports.cubicIn = exports.quadraticInOut = exports.quadraticOut = exports.quadraticIn = exports.linear = void 0;
/**
 * Sigma.js Easings
 * =================
 *
 * Handy collection of easing functions.
 * @module
 */
var linear = function (k) { return k; };
exports.linear = linear;
var quadraticIn = function (k) { return k * k; };
exports.quadraticIn = quadraticIn;
var quadraticOut = function (k) { return k * (2 - k); };
exports.quadraticOut = quadraticOut;
var quadraticInOut = function (k) {
    if ((k *= 2) < 1)
        return 0.5 * k * k;
    return -0.5 * (--k * (k - 2) - 1);
};
exports.quadraticInOut = quadraticInOut;
var cubicIn = function (k) { return k * k * k; };
exports.cubicIn = cubicIn;
var cubicOut = function (k) { return --k * k * k + 1; };
exports.cubicOut = cubicOut;
var cubicInOut = function (k) {
    if ((k *= 2) < 1)
        return 0.5 * k * k * k;
    return 0.5 * ((k -= 2) * k * k + 2);
};
exports.cubicInOut = cubicInOut;
var easings = {
    linear: exports.linear,
    quadraticIn: exports.quadraticIn,
    quadraticOut: exports.quadraticOut,
    quadraticInOut: exports.quadraticInOut,
    cubicIn: exports.cubicIn,
    cubicOut: exports.cubicOut,
    cubicInOut: exports.cubicInOut,
};
exports.default = easings;


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var captor_1 = __importStar(__webpack_require__(21));
/**
 * Constants.
 */
var DRAG_TIMEOUT = 200;
var DRAGGED_EVENTS_TOLERANCE = 3;
var MOUSE_INERTIA_DURATION = 200;
var MOUSE_INERTIA_RATIO = 3;
var MOUSE_ZOOM_DURATION = 250;
var ZOOMING_RATIO = 1.7;
var DOUBLE_CLICK_TIMEOUT = 300;
var DOUBLE_CLICK_ZOOMING_RATIO = 2.2;
var DOUBLE_CLICK_ZOOMING_DURATION = 200;
/**
 * Mouse captor class.
 *
 * @constructor
 */
var MouseCaptor = /** @class */ (function (_super) {
    __extends(MouseCaptor, _super);
    function MouseCaptor(container, camera) {
        var _this = _super.call(this, container, camera) || this;
        // State
        _this.enabled = true;
        _this.draggedEvents = 0;
        _this.downStartTime = null;
        _this.lastMouseX = null;
        _this.lastMouseY = null;
        _this.isMouseDown = false;
        _this.isMoving = false;
        _this.movingTimeout = null;
        _this.startCameraState = null;
        _this.clicks = 0;
        _this.doubleClickTimeout = null;
        _this.currentWheelDirection = 0;
        // Binding methods
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleRightClick = _this.handleRightClick.bind(_this);
        _this.handleDown = _this.handleDown.bind(_this);
        _this.handleUp = _this.handleUp.bind(_this);
        _this.handleMove = _this.handleMove.bind(_this);
        _this.handleWheel = _this.handleWheel.bind(_this);
        _this.handleOut = _this.handleOut.bind(_this);
        // Binding events
        container.addEventListener("click", _this.handleClick, false);
        container.addEventListener("contextmenu", _this.handleRightClick, false);
        container.addEventListener("mousedown", _this.handleDown, false);
        container.addEventListener("mousemove", _this.handleMove, false);
        container.addEventListener("wheel", _this.handleWheel, false);
        container.addEventListener("mouseout", _this.handleOut, false);
        document.addEventListener("mouseup", _this.handleUp, false);
        return _this;
    }
    MouseCaptor.prototype.kill = function () {
        var container = this.container;
        container.removeEventListener("click", this.handleClick);
        container.removeEventListener("contextmenu", this.handleRightClick);
        container.removeEventListener("mousedown", this.handleDown);
        container.removeEventListener("mousemove", this.handleMove);
        container.removeEventListener("wheel", this.handleWheel);
        container.removeEventListener("mouseout", this.handleOut);
        document.removeEventListener("mouseup", this.handleUp);
    };
    MouseCaptor.prototype.handleClick = function (e) {
        var _this = this;
        if (!this.enabled)
            return;
        this.clicks++;
        if (this.clicks === 2) {
            this.clicks = 0;
            if (typeof this.doubleClickTimeout === "number") {
                clearTimeout(this.doubleClickTimeout);
                this.doubleClickTimeout = null;
            }
            return this.handleDoubleClick(e);
        }
        setTimeout(function () {
            _this.clicks = 0;
            _this.doubleClickTimeout = null;
        }, DOUBLE_CLICK_TIMEOUT);
        // NOTE: this is here to prevent click events on drag
        if (this.draggedEvents < DRAGGED_EVENTS_TOLERANCE)
            this.emit("click", captor_1.getMouseCoords(e));
    };
    MouseCaptor.prototype.handleRightClick = function (e) {
        if (!this.enabled)
            return;
        this.emit("rightClick", captor_1.getMouseCoords(e));
    };
    MouseCaptor.prototype.handleDoubleClick = function (e) {
        if (!this.enabled)
            return;
        var newRatio = this.camera.getState().ratio / DOUBLE_CLICK_ZOOMING_RATIO;
        this.camera.animate(this.camera.getViewportZoomedState({ x: captor_1.getX(e), y: captor_1.getY(e) }, {
            width: this.container.offsetWidth,
            height: this.container.offsetHeight,
        }, newRatio), {
            easing: "quadraticInOut",
            duration: DOUBLE_CLICK_ZOOMING_DURATION,
        });
        if (e.preventDefault)
            e.preventDefault();
        else
            e.returnValue = false;
        e.stopPropagation();
        return false;
    };
    MouseCaptor.prototype.handleDown = function (e) {
        if (!this.enabled)
            return;
        this.startCameraState = this.camera.getState();
        this.lastMouseX = captor_1.getX(e);
        this.lastMouseY = captor_1.getY(e);
        this.draggedEvents = 0;
        this.downStartTime = Date.now();
        // TODO: dispatch events
        switch (e.which) {
            default:
                // Left button pressed
                this.isMouseDown = true;
                this.emit("mousedown", captor_1.getMouseCoords(e));
        }
    };
    MouseCaptor.prototype.handleUp = function (e) {
        var _this = this;
        if (!this.enabled || !this.isMouseDown)
            return;
        this.isMouseDown = false;
        if (typeof this.movingTimeout === "number") {
            clearTimeout(this.movingTimeout);
            this.movingTimeout = null;
        }
        var x = captor_1.getX(e), y = captor_1.getY(e);
        var cameraState = this.camera.getState(), previousCameraState = this.camera.getPreviousState();
        if (this.isMoving) {
            this.camera.animate({
                x: cameraState.x + MOUSE_INERTIA_RATIO * (cameraState.x - previousCameraState.x),
                y: cameraState.y + MOUSE_INERTIA_RATIO * (cameraState.y - previousCameraState.y),
            }, {
                duration: MOUSE_INERTIA_DURATION,
                easing: "quadraticOut",
            });
        }
        else if (this.lastMouseX !== x || this.lastMouseY !== y) {
            this.camera.setState({
                x: cameraState.x,
                y: cameraState.y,
            });
        }
        this.isMoving = false;
        setTimeout(function () { return (_this.draggedEvents = 0); }, 0);
        this.emit("mouseup", captor_1.getMouseCoords(e));
    };
    MouseCaptor.prototype.handleMove = function (e) {
        var _this = this;
        if (!this.enabled)
            return;
        this.emit("mousemove", captor_1.getMouseCoords(e));
        if (this.isMouseDown) {
            // TODO: dispatch events
            this.isMoving = true;
            this.draggedEvents++;
            if (typeof this.movingTimeout === "number") {
                clearTimeout(this.movingTimeout);
            }
            this.movingTimeout = window.setTimeout(function () {
                _this.movingTimeout = null;
                _this.isMoving = false;
            }, DRAG_TIMEOUT);
            var dimensions = {
                width: this.container.offsetWidth,
                height: this.container.offsetHeight,
            };
            var eX = captor_1.getX(e), eY = captor_1.getY(e);
            var lastMouse = this.camera.viewportToFramedGraph(dimensions, {
                x: this.lastMouseX,
                y: this.lastMouseY,
            });
            var mouse = this.camera.viewportToFramedGraph(dimensions, { x: eX, y: eY });
            var offsetX = lastMouse.x - mouse.x, offsetY = lastMouse.y - mouse.y;
            var cameraState = this.camera.getState();
            var x = cameraState.x + offsetX, y = cameraState.y + offsetY;
            this.camera.setState({ x: x, y: y });
            this.lastMouseX = eX;
            this.lastMouseY = eY;
        }
        if (e.preventDefault)
            e.preventDefault();
        else
            e.returnValue = false;
        e.stopPropagation();
        return false;
    };
    MouseCaptor.prototype.handleWheel = function (e) {
        var _this = this;
        if (e.preventDefault)
            e.preventDefault();
        else
            e.returnValue = false;
        e.stopPropagation();
        if (!this.enabled)
            return false;
        var delta = captor_1.getWheelDelta(e);
        if (!delta)
            return false;
        var ratioDiff = delta > 0 ? 1 / ZOOMING_RATIO : ZOOMING_RATIO;
        var newRatio = this.camera.getState().ratio * ratioDiff;
        var wheelDirection = delta > 0 ? 1 : -1;
        var now = Date.now();
        // Cancel events that are too close too each other and in the same direction:
        if (this.currentWheelDirection === wheelDirection &&
            this.lastWheelTriggerTime &&
            now - this.lastWheelTriggerTime < MOUSE_ZOOM_DURATION / 5) {
            return false;
        }
        this.camera.animate(this.camera.getViewportZoomedState({ x: captor_1.getX(e), y: captor_1.getY(e) }, {
            width: this.container.offsetWidth,
            height: this.container.offsetHeight,
        }, newRatio), {
            easing: "quadraticOut",
            duration: MOUSE_ZOOM_DURATION,
        }, function () {
            _this.currentWheelDirection = 0;
        });
        this.currentWheelDirection = wheelDirection;
        this.lastWheelTriggerTime = now;
        return false;
    };
    MouseCaptor.prototype.handleOut = function () {
        // TODO: dispatch event
    };
    return MouseCaptor;
}(captor_1.default));
exports.default = MouseCaptor;


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getWheelDelta = exports.getTouchCoords = exports.getTouchesArray = exports.getMouseCoords = exports.getPosition = exports.getY = exports.getX = void 0;
/**
 * Sigma.js Captor Class
 * ======================
 * @module
 */
var events_1 = __webpack_require__(12);
/**
 * Captor utils functions
 * ======================
 */
/**
 * Extract the local X position from a mouse event or touch object.
 *
 * @param  {event}  e - A mouse event or touch object.
 * @return {number}     The local X value of the mouse.
 */
function getX(e) {
    if (typeof e.offsetX !== "undefined")
        return e.offsetX;
    if (typeof e.clientX !== "undefined")
        return e.clientX;
    throw new Error("Captor: could not extract x from event.");
}
exports.getX = getX;
/**
 * Extract the local Y position from a mouse event or touch object.
 *
 * @param  {event}  e - A mouse event or touch object.
 * @return {number}     The local Y value of the mouse.
 */
function getY(e) {
    if (typeof e.offsetY !== "undefined")
        return e.offsetY;
    if (typeof e.clientY !== "undefined")
        return e.clientY;
    throw new Error("Captor: could not extract y from event.");
}
exports.getY = getY;
/**
 * Extract the local X and Y coordinates from a mouse event or touch object.
 *
 * @param  {event}  e - A mouse event or touch object.
 * @return {number}     The local Y value of the mouse.
 */
function getPosition(e) {
    return {
        x: getX(e),
        y: getY(e),
    };
}
exports.getPosition = getPosition;
/**
 * Convert mouse coords to sigma coords.
 *
 * @param  {event}   e   - A mouse event or touch object.
 *
 * @return {object}
 */
function getMouseCoords(e) {
    return {
        x: getX(e),
        y: getY(e),
        clientX: e.clientX,
        clientY: e.clientY,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
        shiftKey: e.shiftKey,
        // TODO: this is not ideal... But I am wondering why we don't just pass the event through
        preventDefault: e.preventDefault.bind(e),
        original: e,
    };
}
exports.getMouseCoords = getMouseCoords;
var MAX_TOUCHES = 2;
function getTouchesArray(touches) {
    var arr = [];
    for (var i = 0, l = Math.min(touches.length, MAX_TOUCHES); i < l; i++)
        arr.push(touches[i]);
    return arr;
}
exports.getTouchesArray = getTouchesArray;
/**
 * Convert touch coords to sigma coords.
 */
function getTouchCoords(e) {
    return {
        touches: getTouchesArray(e.touches).map(getPosition),
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
        shiftKey: e.shiftKey,
        // TODO: same as for getMouseCoords
        preventDefault: e.preventDefault.bind(e),
        original: e,
    };
}
exports.getTouchCoords = getTouchCoords;
/**
 * Extract the wheel delta from a mouse event or touch object.
 *
 * @param  {event}  e - A mouse event or touch object.
 * @return {number}     The wheel delta of the mouse.
 */
function getWheelDelta(e) {
    // TODO: check those ratios again to ensure a clean Chrome/Firefox compat
    if (typeof e.deltaY !== "undefined")
        return (e.deltaY * -3) / 360;
    if (typeof e.detail !== "undefined")
        return e.detail / -9;
    throw new Error("Captor: could not extract delta from event.");
}
exports.getWheelDelta = getWheelDelta;
/**
 * Abstract class representing a captor like the user's mouse or touch controls.
 */
var Captor = /** @class */ (function (_super) {
    __extends(Captor, _super);
    function Captor(container, camera) {
        var _this = _super.call(this) || this;
        // Properties
        _this.container = container;
        _this.camera = camera;
        return _this;
    }
    return Captor;
}(events_1.EventEmitter));
exports.default = Captor;


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rectangleCollidesWithQuad = exports.squareCollidesWithQuad = exports.getCircumscribedAlignedRectangle = exports.isRectangleAligned = void 0;
/**
 * Sigma.js Quad Tree Class
 * =========================
 *
 * Class implementing the quad tree data structure used to solve hovers and
 * determine which elements are currently in the scope of the camera so that
 * we don't waste time rendering things the user cannot see anyway.
 * @module
 */
/* eslint no-nested-ternary: 0 */
/* eslint no-constant-condition: 0 */
var extend_1 = __importDefault(__webpack_require__(23));
// TODO: should not ask the quadtree when the camera has the whole graph in
// sight.
// TODO: a square can be represented as topleft + width, saying for the quad blocks (reduce mem)
// TODO: jsdoc
// TODO: be sure we can handle cases overcoming boundaries (because of size) or use a maxed size
// TODO: filtering unwanted labels beforehand through the filter function
// NOTE: this is basically a MX-CIF Quadtree at this point
// NOTE: need to explore R-Trees for edges
// NOTE: need to explore 2d segment tree for edges
// NOTE: probably can do faster using spatial hashing
/**
 * Constants.
 *
 * Note that since we are representing a static 4-ary tree, the indices of the
 * quadrants are the following:
 *   - TOP_LEFT:     4i + b
 *   - TOP_RIGHT:    4i + 2b
 *   - BOTTOM_LEFT:  4i + 3b
 *   - BOTTOM_RIGHT: 4i + 4b
 */
var BLOCKS = 4, MAX_LEVEL = 5;
var X_OFFSET = 0, Y_OFFSET = 1, WIDTH_OFFSET = 2, HEIGHT_OFFSET = 3;
var TOP_LEFT = 1, TOP_RIGHT = 2, BOTTOM_LEFT = 3, BOTTOM_RIGHT = 4;
/**
 * Geometry helpers.
 */
/**
 * Function returning whether the given rectangle is axis-aligned.
 *
 * @param  {Rectangle} rect
 * @return {boolean}
 */
function isRectangleAligned(rect) {
    return rect.x1 === rect.x2 || rect.y1 === rect.y2;
}
exports.isRectangleAligned = isRectangleAligned;
/**
 * Function returning the smallest rectangle that contains the given rectangle, and that is aligned with the axis.
 *
 * @param {Rectangle} rect
 * @return {Rectangle}
 */
function getCircumscribedAlignedRectangle(rect) {
    var width = Math.sqrt(Math.pow(rect.x2 - rect.x1, 2) + Math.pow(rect.y2 - rect.y1, 2));
    var heightVector = {
        x: ((rect.y1 - rect.y2) * rect.height) / width,
        y: ((rect.x2 - rect.x1) * rect.height) / width,
    };
    // Compute all corners:
    var tl = { x: rect.x1, y: rect.y1 };
    var tr = { x: rect.x2, y: rect.y2 };
    var bl = {
        x: rect.x1 + heightVector.x,
        y: rect.y1 + heightVector.y,
    };
    var br = {
        x: rect.x2 + heightVector.x,
        y: rect.y2 + heightVector.y,
    };
    var xL = Math.min(tl.x, tr.x, bl.x, br.x);
    var xR = Math.max(tl.x, tr.x, bl.x, br.x);
    var yT = Math.min(tl.y, tr.y, bl.y, br.y);
    var yB = Math.max(tl.y, tr.y, bl.y, br.y);
    return {
        x1: xL,
        y1: yT,
        x2: xR,
        y2: yT,
        height: yB - yT,
    };
}
exports.getCircumscribedAlignedRectangle = getCircumscribedAlignedRectangle;
/**
 *
 * @param x1
 * @param y1
 * @param w
 * @param qx
 * @param qy
 * @param qw
 * @param qh
 */
function squareCollidesWithQuad(x1, y1, w, qx, qy, qw, qh) {
    return x1 < qx + qw && x1 + w > qx && y1 < qy + qh && y1 + w > qy;
}
exports.squareCollidesWithQuad = squareCollidesWithQuad;
function rectangleCollidesWithQuad(x1, y1, w, h, qx, qy, qw, qh) {
    return x1 < qx + qw && x1 + w > qx && y1 < qy + qh && y1 + h > qy;
}
exports.rectangleCollidesWithQuad = rectangleCollidesWithQuad;
function pointIsInQuad(x, y, qx, qy, qw, qh) {
    var xmp = qx + qw / 2, ymp = qy + qh / 2, top = y < ymp, left = x < xmp;
    return top ? (left ? TOP_LEFT : TOP_RIGHT) : left ? BOTTOM_LEFT : BOTTOM_RIGHT;
}
/**
 * Helper functions that are not bound to the class so an external user
 * cannot mess with them.
 */
function buildQuadrants(maxLevel, data) {
    // [block, level]
    var stack = [0, 0];
    while (stack.length) {
        var level = stack.pop(), block = stack.pop();
        var topLeftBlock = 4 * block + BLOCKS, topRightBlock = 4 * block + 2 * BLOCKS, bottomLeftBlock = 4 * block + 3 * BLOCKS, bottomRightBlock = 4 * block + 4 * BLOCKS;
        var x = data[block + X_OFFSET], y = data[block + Y_OFFSET], width = data[block + WIDTH_OFFSET], height = data[block + HEIGHT_OFFSET], hw = width / 2, hh = height / 2;
        data[topLeftBlock + X_OFFSET] = x;
        data[topLeftBlock + Y_OFFSET] = y;
        data[topLeftBlock + WIDTH_OFFSET] = hw;
        data[topLeftBlock + HEIGHT_OFFSET] = hh;
        data[topRightBlock + X_OFFSET] = x + hw;
        data[topRightBlock + Y_OFFSET] = y;
        data[topRightBlock + WIDTH_OFFSET] = hw;
        data[topRightBlock + HEIGHT_OFFSET] = hh;
        data[bottomLeftBlock + X_OFFSET] = x;
        data[bottomLeftBlock + Y_OFFSET] = y + hh;
        data[bottomLeftBlock + WIDTH_OFFSET] = hw;
        data[bottomLeftBlock + HEIGHT_OFFSET] = hh;
        data[bottomRightBlock + X_OFFSET] = x + hw;
        data[bottomRightBlock + Y_OFFSET] = y + hh;
        data[bottomRightBlock + WIDTH_OFFSET] = hw;
        data[bottomRightBlock + HEIGHT_OFFSET] = hh;
        if (level < maxLevel - 1) {
            stack.push(bottomRightBlock, level + 1);
            stack.push(bottomLeftBlock, level + 1);
            stack.push(topRightBlock, level + 1);
            stack.push(topLeftBlock, level + 1);
        }
    }
}
function insertNode(maxLevel, data, containers, key, x, y, size) {
    var x1 = x - size, y1 = y - size, w = size * 2;
    var level = 0, block = 0;
    while (true) {
        // If we reached max level
        if (level >= maxLevel) {
            containers[block] = containers[block] || [];
            containers[block].push(key);
            return;
        }
        var topLeftBlock = 4 * block + BLOCKS, topRightBlock = 4 * block + 2 * BLOCKS, bottomLeftBlock = 4 * block + 3 * BLOCKS, bottomRightBlock = 4 * block + 4 * BLOCKS;
        var collidingWithTopLeft = squareCollidesWithQuad(x1, y1, w, data[topLeftBlock + X_OFFSET], data[topLeftBlock + Y_OFFSET], data[topLeftBlock + WIDTH_OFFSET], data[topLeftBlock + HEIGHT_OFFSET]);
        var collidingWithTopRight = squareCollidesWithQuad(x1, y1, w, data[topRightBlock + X_OFFSET], data[topRightBlock + Y_OFFSET], data[topRightBlock + WIDTH_OFFSET], data[topRightBlock + HEIGHT_OFFSET]);
        var collidingWithBottomLeft = squareCollidesWithQuad(x1, y1, w, data[bottomLeftBlock + X_OFFSET], data[bottomLeftBlock + Y_OFFSET], data[bottomLeftBlock + WIDTH_OFFSET], data[bottomLeftBlock + HEIGHT_OFFSET]);
        var collidingWithBottomRight = squareCollidesWithQuad(x1, y1, w, data[bottomRightBlock + X_OFFSET], data[bottomRightBlock + Y_OFFSET], data[bottomRightBlock + WIDTH_OFFSET], data[bottomRightBlock + HEIGHT_OFFSET]);
        var collisions = [
            collidingWithTopLeft,
            collidingWithTopRight,
            collidingWithBottomLeft,
            collidingWithBottomRight,
        ].reduce(function (acc, current) {
            if (current)
                return acc + 1;
            else
                return acc;
        }, 0);
        // If we don't have at least a collision, there is an issue
        if (collisions === 0)
            throw new Error("sigma/quadtree.insertNode: no collision (level: " + level + ", key: " + key + ", x: " + x + ", y: " + y + ", size: " + size + ").");
        // If we have 3 collisions, we have a geometry problem obviously
        if (collisions === 3)
            throw new Error("sigma/quadtree.insertNode: 3 impossible collisions (level: " + level + ", key: " + key + ", x: " + x + ", y: " + y + ", size: " + size + ").");
        // If we have more that one collision, we stop here and store the node
        // in the relevant containers
        if (collisions > 1) {
            containers[block] = containers[block] || [];
            containers[block].push(key);
            return;
        }
        else {
            level++;
        }
        // Else we recurse into the correct quads
        if (collidingWithTopLeft)
            block = topLeftBlock;
        if (collidingWithTopRight)
            block = topRightBlock;
        if (collidingWithBottomLeft)
            block = bottomLeftBlock;
        if (collidingWithBottomRight)
            block = bottomRightBlock;
    }
}
function getNodesInAxisAlignedRectangleArea(maxLevel, data, containers, x1, y1, w, h) {
    // [block, level]
    var stack = [0, 0];
    var collectedNodes = [];
    var container;
    while (stack.length) {
        var level = stack.pop(), block = stack.pop();
        // Collecting nodes
        container = containers[block];
        if (container)
            extend_1.default(collectedNodes, container);
        // If we reached max level
        if (level >= maxLevel)
            continue;
        var topLeftBlock = 4 * block + BLOCKS, topRightBlock = 4 * block + 2 * BLOCKS, bottomLeftBlock = 4 * block + 3 * BLOCKS, bottomRightBlock = 4 * block + 4 * BLOCKS;
        var collidingWithTopLeft = rectangleCollidesWithQuad(x1, y1, w, h, data[topLeftBlock + X_OFFSET], data[topLeftBlock + Y_OFFSET], data[topLeftBlock + WIDTH_OFFSET], data[topLeftBlock + HEIGHT_OFFSET]);
        var collidingWithTopRight = rectangleCollidesWithQuad(x1, y1, w, h, data[topRightBlock + X_OFFSET], data[topRightBlock + Y_OFFSET], data[topRightBlock + WIDTH_OFFSET], data[topRightBlock + HEIGHT_OFFSET]);
        var collidingWithBottomLeft = rectangleCollidesWithQuad(x1, y1, w, h, data[bottomLeftBlock + X_OFFSET], data[bottomLeftBlock + Y_OFFSET], data[bottomLeftBlock + WIDTH_OFFSET], data[bottomLeftBlock + HEIGHT_OFFSET]);
        var collidingWithBottomRight = rectangleCollidesWithQuad(x1, y1, w, h, data[bottomRightBlock + X_OFFSET], data[bottomRightBlock + Y_OFFSET], data[bottomRightBlock + WIDTH_OFFSET], data[bottomRightBlock + HEIGHT_OFFSET]);
        if (collidingWithTopLeft)
            stack.push(topLeftBlock, level + 1);
        if (collidingWithTopRight)
            stack.push(topRightBlock, level + 1);
        if (collidingWithBottomLeft)
            stack.push(bottomLeftBlock, level + 1);
        if (collidingWithBottomRight)
            stack.push(bottomRightBlock, level + 1);
    }
    return collectedNodes;
}
/**
 * QuadTree class.
 *
 * @constructor
 * @param {object} boundaries - The graph boundaries.
 */
var QuadTree = /** @class */ (function () {
    function QuadTree(params) {
        if (params === void 0) { params = {}; }
        this.containers = {};
        this.cache = null;
        this.lastRectangle = null;
        // Allocating the underlying byte array
        var L = Math.pow(4, MAX_LEVEL);
        this.data = new Float32Array(BLOCKS * ((4 * L - 1) / 3));
        if (params.boundaries)
            this.resize(params.boundaries);
        else
            this.resize({
                x: 0,
                y: 0,
                width: 1,
                height: 1,
            });
    }
    QuadTree.prototype.add = function (key, x, y, size) {
        insertNode(MAX_LEVEL, this.data, this.containers, key, x, y, size);
        return this;
    };
    QuadTree.prototype.resize = function (boundaries) {
        this.clear();
        // Building the quadrants
        this.data[X_OFFSET] = boundaries.x;
        this.data[Y_OFFSET] = boundaries.y;
        this.data[WIDTH_OFFSET] = boundaries.width;
        this.data[HEIGHT_OFFSET] = boundaries.height;
        buildQuadrants(MAX_LEVEL, this.data);
    };
    QuadTree.prototype.clear = function () {
        this.containers = {};
        return this;
    };
    QuadTree.prototype.point = function (x, y) {
        var nodes = [];
        var block = 0, level = 0;
        do {
            if (this.containers[block])
                nodes.push.apply(nodes, __spreadArray([], __read(this.containers[block])));
            var quad = pointIsInQuad(x, y, this.data[block + X_OFFSET], this.data[block + Y_OFFSET], this.data[block + WIDTH_OFFSET], this.data[block + HEIGHT_OFFSET]);
            block = 4 * block + quad * BLOCKS;
            level++;
        } while (level <= MAX_LEVEL);
        return nodes;
    };
    QuadTree.prototype.rectangle = function (x1, y1, x2, y2, height) {
        var lr = this.lastRectangle;
        if (lr && x1 === lr.x1 && x2 === lr.x2 && y1 === lr.y1 && y2 === lr.y2 && height === lr.height) {
            return this.cache;
        }
        this.lastRectangle = {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
            height: height,
        };
        // If the rectangle is shifted, we use the smallest aligned rectangle that contains the shifted one:
        if (!isRectangleAligned(this.lastRectangle))
            this.lastRectangle = getCircumscribedAlignedRectangle(this.lastRectangle);
        this.cache = getNodesInAxisAlignedRectangleArea(MAX_LEVEL, this.data, this.containers, x1, y1, Math.abs(x1 - x2) || Math.abs(y1 - y2), height);
        return this.cache;
    };
    return QuadTree;
}());
exports.default = QuadTree;


/***/ }),
/* 23 */
/***/ ((module) => {

/**
 * Extend function
 * ================
 *
 * Function used to push a bunch of values into an array at once.
 *
 * Its strategy is to mutate target array's length then setting the new indices
 * to be the values to add.
 *
 * A benchmark proved that it is faster than the following strategies:
 *   1) `array.push.apply(array, values)`.
 *   2) A loop of pushes.
 *   3) `array = array.concat(values)`, obviously.
 *
 * Intuitively, this is correct because when adding a lot of elements, the
 * chosen strategies does not need to handle the `arguments` object to
 * execute #.apply's variadicity and because the array know its final length
 * at the beginning, avoiding potential multiple reallocations of the underlying
 * contiguous array. Some engines may be able to optimize the loop of push
 * operations but empirically they don't seem to do so.
 */

/**
 * Extends the target array with the given values.
 *
 * @param  {array} array  - Target array.
 * @param  {array} values - Values to add.
 */
module.exports = function extend(array, values) {
  var l2 = values.length;

  if (l2 === 0)
    return;

  var l1 = array.length;

  array.length += l2;

  for (var i = 0; i < l2; i++)
    array[l1 + i] = values[i];
};


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.edgeLabelsToDisplayFromNodes = exports.labelsToDisplayFromGrid = void 0;
var camera_1 = __importDefault(__webpack_require__(14));
/**
 * Constants.
 */
// Dimensions of a normal cell
var DEFAULT_CELL = {
    width: 250,
    height: 175,
};
// Dimensions of an unzoomed cell. This one is usually larger than the normal
// one to account for the fact that labels will more likely collide.
var DEFAULT_UNZOOMED_CELL = {
    width: 400,
    height: 300,
};
/**
 * Helpers.
 */
function collision(x1, y1, w1, h1, x2, y2, w2, h2) {
    return x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2;
}
// TODO: cache camera position of selected nodes to avoid costly computations
// in anti-collision step
// TOOD: document a little bit more so future people can understand this mess
/**
 * Label grid heuristic selecting labels to display.
 *
 * @param  {object} params                 - Parameters:
 * @param  {object}   cache                - Cache storing nodes' data.
 * @param  {Camera}   camera               - The renderer's camera.
 * @param  {Set}      displayedLabels      - Currently displayed labels.
 * @param  {Array}    visibleNodes         - Nodes visible for this render.
 * @param  {Graph}    graph                - The rendered graph.
 * @return {Array}                         - The selected labels.
 */
function labelsToDisplayFromGrid(params) {
    var cache = params.cache, camera = params.camera, userCell = params.cell, dimensions = params.dimensions, displayedLabels = params.displayedLabels, _a = params.fontSize, fontSize = _a === void 0 ? 14 : _a, graph = params.graph, _b = params.renderedSizeThreshold, renderedSizeThreshold = _b === void 0 ? -Infinity : _b, visibleNodes = params.visibleNodes;
    var cameraState = camera.getState(), previousCameraState = camera.getPreviousState();
    var previousCamera = new camera_1.default();
    previousCamera.setState(previousCameraState);
    // TODO: should factorize. This same code is used quite a lot throughout the codebase
    // TODO: POW RATIO is currently default 0.5 and harcoded
    var sizeRatio = Math.pow(cameraState.ratio, 0.5);
    // State
    var zooming = cameraState.ratio < previousCameraState.ratio, panning = cameraState.x !== previousCameraState.x || cameraState.y !== previousCameraState.y, unzooming = cameraState.ratio > previousCameraState.ratio, unzoomedPanning = panning && !zooming && !unzooming && cameraState.ratio >= 1, zoomedPanning = panning && displayedLabels.size && !zooming && !unzooming;
    // Trick to discretize unzooming
    if (unzooming && Math.trunc(cameraState.ratio * 100) % 5 !== 0)
        return Array.from(displayedLabels);
    // If panning while unzoomed, we shouldn't change label selection
    if (unzoomedPanning && displayedLabels.size !== 0)
        return Array.from(displayedLabels);
    // When unzoomed & zooming
    if (zooming && cameraState.ratio >= 1)
        return Array.from(displayedLabels);
    // Adapting cell dimensions
    var cell = userCell ? userCell : DEFAULT_CELL;
    if (cameraState.ratio >= 1.3)
        cell = DEFAULT_UNZOOMED_CELL;
    var cwr = dimensions.width % cell.width;
    var cellWidth = cell.width + cwr / Math.floor(dimensions.width / cell.width);
    var chr = dimensions.height % cell.height;
    var cellHeight = cell.height + chr / Math.floor(dimensions.height / cell.height);
    var adjustedWidth = dimensions.width + cellWidth, adjustedHeight = dimensions.height + cellHeight, adjustedX = -cellWidth, adjustedY = -cellHeight;
    var panningWidth = dimensions.width + cellWidth / 2, panningHeight = dimensions.height + cellHeight / 2, panningX = -(cellWidth / 2), panningY = -(cellHeight / 2);
    var worthyLabels = [];
    var grid = {};
    var maxSize = -Infinity, biggestNode = null;
    for (var i = 0, l = visibleNodes.length; i < l; i++) {
        var node = visibleNodes[i], nodeData = cache[node];
        // We filter hidden nodes
        if (nodeData.hidden)
            continue;
        // We filter nodes having a rendered size less than a certain thresold
        if (nodeData.size / sizeRatio < renderedSizeThreshold)
            continue;
        // Finding our node's cell in the grid
        var pos = camera.framedGraphToViewport(dimensions, nodeData);
        // Node is not actually visible on screen
        // NOTE: can optimize margin on the right side (only if we know where the labels go)
        if (pos.x < adjustedX || pos.x > adjustedWidth || pos.y < adjustedY || pos.y > adjustedHeight)
            continue;
        // Keeping track of the maximum node size for certain cases
        if (nodeData.size > maxSize) {
            maxSize = nodeData.size;
            biggestNode = node;
        }
        // If panning when zoomed, we consider only displayed labels and newly
        // visible nodes
        if (zoomedPanning) {
            var ppos = previousCamera.framedGraphToViewport(dimensions, nodeData);
            // Was node visible earlier?
            if (ppos.x >= panningX && ppos.x <= panningWidth && ppos.y >= panningY && ppos.y <= panningHeight) {
                // Was the label displayed?
                if (!displayedLabels.has(node))
                    continue;
            }
        }
        var xKey = Math.floor(pos.x / cellWidth), yKey = Math.floor(pos.y / cellHeight);
        var key = xKey + "\u00A7" + yKey;
        if (typeof grid[key] === "undefined") {
            // This cell is not yet occupied
            grid[key] = node;
        }
        else {
            // We must solve a conflict in this cell
            var currentNode = grid[key], currentNodeData = cache[currentNode];
            // We prefer already displayed labels
            if (displayedLabels.size > 0) {
                var n1 = displayedLabels.has(node), n2 = displayedLabels.has(currentNode);
                if (!n1 && n2) {
                    continue;
                }
                if (n1 && !n2) {
                    grid[key] = node;
                    continue;
                }
                if ((zoomedPanning || zooming) && n1 && n2) {
                    worthyLabels.push(node);
                    continue;
                }
            }
            // In case of size & degree equality, we use the node's key so that the
            // process remains deterministic
            var won = false;
            if (nodeData.size > currentNodeData.size) {
                won = true;
            }
            else if (nodeData.size === currentNodeData.size) {
                var nodeDegree = graph.degree(node), currentNodeDegree = graph.degree(currentNode);
                if (nodeDegree > currentNodeDegree) {
                    won = true;
                }
                else if (nodeDegree === currentNodeDegree) {
                    if (node > currentNode)
                        won = true;
                }
            }
            if (won)
                grid[key] = node;
        }
    }
    // Compiling the labels
    var biggestNodeShown = worthyLabels.some(function (node) { return node === biggestNode; });
    for (var key in grid) {
        var node = grid[key];
        if (node === biggestNode)
            biggestNodeShown = true;
        worthyLabels.push(node);
    }
    // Always keeping biggest node shown on screen
    if (!biggestNodeShown && biggestNode)
        worthyLabels.push(biggestNode);
    // Basic anti-collision
    var collisions = new Set();
    for (var i = 0, l = worthyLabels.length; i < l; i++) {
        var n1 = worthyLabels[i], d1 = cache[n1], p1 = camera.framedGraphToViewport(dimensions, d1);
        if (collisions.has(n1))
            continue;
        for (var j = i + 1; j < l; j++) {
            var n2 = worthyLabels[j], d2 = cache[n2], p2 = camera.framedGraphToViewport(dimensions, d2);
            var c = collision(
            // First abstract bbox
            p1.x, p1.y, d1.label.length * 8, fontSize, 
            // Second abstract bbox
            p2.x, p2.y, d2.label.length * 8, fontSize);
            if (c) {
                // NOTE: add degree as tie-breaker here if required in the future
                // NOTE: add final stable tie-breaker using node key if required
                if (d1.size < d2.size)
                    collisions.add(n1);
                else
                    collisions.add(n2);
            }
        }
    }
    // console.log(collisions)
    return worthyLabels.filter(function (l) { return !collisions.has(l); });
}
exports.labelsToDisplayFromGrid = labelsToDisplayFromGrid;
/**
 * Label heuristic selecting edge labels to display, based on displayed node
 * labels
 *
 * @param  {object} params                 - Parameters:
 * @param  {object}   nodeDataCache        - Cache storing nodes data.
 * @param  {object}   edgeDataCache        - Cache storing edges data.
 * @param  {Set}      displayedNodeLabels  - Currently displayed node labels.
 * @param  {Set}      highlightedNodes     - Highlighted nodes.
 * @param  {Graph}    graph                - The rendered graph.
 * @param  {string}   hoveredNode          - Hovered node (optional)
 * @return {Array}                         - The selected labels.
 */
function edgeLabelsToDisplayFromNodes(params) {
    var nodeDataCache = params.nodeDataCache, edgeDataCache = params.edgeDataCache, graph = params.graph, hoveredNode = params.hoveredNode, highlightedNodes = params.highlightedNodes, displayedNodeLabels = params.displayedNodeLabels;
    var worthyEdges = new Set();
    var displayedNodeLabelsArray = Array.from(displayedNodeLabels);
    // Each edge connecting a highlighted node has its label displayed if the other extremity is not hidden:
    var highlightedNodesArray = Array.from(highlightedNodes);
    if (hoveredNode && !highlightedNodes.has(hoveredNode))
        highlightedNodesArray.push(hoveredNode);
    for (var i = 0; i < highlightedNodesArray.length; i++) {
        var key = highlightedNodesArray[i];
        var edges = graph.edges(key);
        for (var j = 0; j < edges.length; j++) {
            var edgeKey = edges[j];
            var extremities = graph.extremities(edgeKey), sourceData = nodeDataCache[extremities[0]], targetData = nodeDataCache[extremities[1]], edgeData = edgeDataCache[edgeKey];
            if (edgeData.hidden && sourceData.hidden && targetData.hidden) {
                worthyEdges.add(edgeKey);
            }
        }
    }
    // Each edge connecting two nodes with visible labels has its label displayed:
    for (var i = 0; i < displayedNodeLabelsArray.length; i++) {
        var key = displayedNodeLabelsArray[i];
        var edges = graph.outboundEdges(key);
        for (var j = 0; j < edges.length; j++)
            if (!edgeDataCache[edges[j]].hidden && displayedNodeLabels.has(graph.opposite(key, edges[j])))
                worthyEdges.add(edges[j]);
    }
    return Array.from(worthyEdges);
}
exports.edgeLabelsToDisplayFromNodes = edgeLabelsToDisplayFromNodes;


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * Sigma.js Settings
 * =================================
 *
 * The list of settings and some handy functions.
 * @module
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_SETTINGS = exports.validateSettings = void 0;
var label_1 = __importDefault(__webpack_require__(26));
var hover_1 = __importDefault(__webpack_require__(27));
var edge_label_1 = __importDefault(__webpack_require__(29));
var node_fast_1 = __importDefault(__webpack_require__(30));
var edge_1 = __importDefault(__webpack_require__(36));
var edge_arrow_1 = __importDefault(__webpack_require__(40));
function validateSettings(settings) {
    // Label grid cell
    if (settings.labelGrid &&
        settings.labelGrid.cell &&
        typeof settings.labelGrid.cell === "object" &&
        (!settings.labelGrid.cell.width || !settings.labelGrid.cell.height)) {
        throw new Error("Settings: invalid `labelGrid.cell`. Expecting {width, height}.");
    }
}
exports.validateSettings = validateSettings;
exports.DEFAULT_SETTINGS = {
    // Performance
    hideEdgesOnMove: false,
    hideLabelsOnMove: false,
    renderLabels: true,
    renderEdgeLabels: false,
    // Component rendering
    defaultNodeColor: "#999",
    defaultNodeType: "circle",
    defaultEdgeColor: "#ccc",
    defaultEdgeType: "line",
    labelFont: "Arial",
    labelSize: 14,
    labelWeight: "normal",
    edgeLabelFont: "Arial",
    edgeLabelSize: 14,
    edgeLabelWeight: "normal",
    // Labels
    labelGrid: {
        cell: null,
        renderedSizeThreshold: -Infinity,
    },
    // Reducers
    nodeReducer: null,
    edgeReducer: null,
    // Features
    zIndex: false,
    // Renderers
    labelRenderer: label_1.default,
    hoverRenderer: hover_1.default,
    edgeLabelRenderer: edge_label_1.default,
    // Program classes
    nodeProgramClasses: {
        circle: node_fast_1.default,
    },
    edgeProgramClasses: {
        arrow: edge_arrow_1.default,
        line: edge_1.default,
    },
};


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function drawLabel(context, data, settings) {
    var size = settings.labelSize, font = settings.labelFont, weight = settings.labelWeight;
    context.fillStyle = "#000";
    context.font = weight + " " + size + "px " + font;
    context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);
}
exports.default = drawLabel;


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var node_1 = __importDefault(__webpack_require__(28));
var label_1 = __importDefault(__webpack_require__(26));
function drawHover(context, data, settings) {
    var size = settings.labelSize, font = settings.labelFont, weight = settings.labelWeight;
    context.font = weight + " " + size + "px " + font;
    // Then we draw the label background
    context.beginPath();
    context.fillStyle = "#fff";
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 8;
    context.shadowColor = "#000";
    var textWidth = context.measureText(data.label).width;
    var x = Math.round(data.x - size / 2 - 2), y = Math.round(data.y - size / 2 - 2), w = Math.round(textWidth + size / 2 + data.size + 9), h = Math.round(size + 4), e = Math.round(size / 2 + 2);
    context.moveTo(x, y + e);
    context.moveTo(x, y + e);
    context.arcTo(x, y, x + e, y, e);
    context.lineTo(x + w, y);
    context.lineTo(x + w, y + h);
    context.lineTo(x + e, y + h);
    context.arcTo(x, y + h, x, y + h - e, e);
    context.lineTo(x, y + e);
    context.closePath();
    context.fill();
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 0;
    // Then we need to draw the node
    node_1.default(context, data);
    // And finally we draw the label
    label_1.default(context, data, settings);
}
exports.default = drawHover;


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var PI_TIMES_2 = Math.PI * 2;
function drawNode(context, data) {
    context.fillStyle = data.color;
    context.beginPath();
    context.arc(data.x, data.y, data.size, 0, PI_TIMES_2, true);
    context.closePath();
    context.fill();
}
exports.default = drawNode;


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function drawEdgeLabel(context, edgeData, sourceData, targetData, settings) {
    var size = settings.edgeLabelSize, font = settings.edgeLabelFont, weight = settings.edgeLabelWeight, label = edgeData.label;
    context.fillStyle = edgeData.color;
    context.font = weight + " " + size + "px " + font;
    var textWidth = context.measureText(label).width;
    var cx = (sourceData.x + targetData.x) / 2;
    var cy = (sourceData.y + targetData.y) / 2;
    var dx = targetData.x - sourceData.x;
    var dy = targetData.y - sourceData.y;
    var d = Math.sqrt(dx * dx + dy * dy);
    var angle;
    if (dx > 0) {
        if (dy > 0)
            angle = Math.acos(dx / d);
        else
            angle = Math.asin(dy / d);
    }
    else {
        if (dy > 0)
            angle = Math.acos(dx / d) + Math.PI;
        else
            angle = Math.asin(dx / d) + Math.PI / 2;
    }
    context.save();
    context.translate(cx, cy);
    context.rotate(angle);
    context.fillText(label, -textWidth / 2, edgeData.size / 2 + size);
    context.restore();
}
exports.default = drawEdgeLabel;


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(16);
var node_fast_vert_glsl_1 = __importDefault(__webpack_require__(31));
var node_fast_frag_glsl_1 = __importDefault(__webpack_require__(32));
var node_1 = __webpack_require__(33);
var POINTS = 1, ATTRIBUTES = 4;
var NodeProgramFast = /** @class */ (function (_super) {
    __extends(NodeProgramFast, _super);
    function NodeProgramFast(gl) {
        var _this = _super.call(this, gl, node_fast_vert_glsl_1.default, node_fast_frag_glsl_1.default, POINTS, ATTRIBUTES) || this;
        _this.bind();
        return _this;
    }
    NodeProgramFast.prototype.process = function (data, hidden, offset) {
        var array = this.array;
        var i = offset * POINTS * ATTRIBUTES;
        if (hidden) {
            array[i++] = 0;
            array[i++] = 0;
            array[i++] = 0;
            array[i++] = 0;
            return;
        }
        var color = utils_1.floatColor(data.color);
        array[i++] = data.x;
        array[i++] = data.y;
        array[i++] = data.size;
        array[i] = color;
    };
    NodeProgramFast.prototype.render = function (params) {
        var gl = this.gl;
        var program = this.program;
        gl.useProgram(program);
        gl.uniform1f(this.ratioLocation, 1 / Math.pow(params.ratio, params.nodesPowRatio));
        gl.uniform1f(this.scaleLocation, params.scalingRatio);
        gl.uniformMatrix3fv(this.matrixLocation, false, params.matrix);
        gl.drawArrays(gl.POINTS, 0, this.array.length / ATTRIBUTES);
    };
    return NodeProgramFast;
}(node_1.AbstractNodeProgram));
exports.default = NodeProgramFast;


/***/ }),
/* 31 */
/***/ ((module) => {

(()=>{"use strict";var o={d:(t,n)=>{for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};o.r(t),o.d(t,{default:()=>n});const n="attribute vec2 a_position;\nattribute float a_size;\nattribute vec4 a_color;\n\nuniform float u_ratio;\nuniform float u_scale;\nuniform mat3 u_matrix;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n\n  gl_Position = vec4(\n    (u_matrix * vec3(a_position, 1)).xy,\n    0,\n    1\n  );\n\n  // Multiply the point size twice:\n  //  - x SCALING_RATIO to correct the canvas scaling\n  //  - x 2 to correct the formulae\n  gl_PointSize = a_size * u_ratio * u_scale * 2.0;\n\n  v_border = (1.0 / u_ratio) * (0.5 / a_size);\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";module.exports=t})();

/***/ }),
/* 32 */
/***/ ((module) => {

(()=>{"use strict";var o={d:(e,n)=>{for(var r in n)o.o(n,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(o,e)=>Object.prototype.hasOwnProperty.call(o,e),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},e={};o.r(e),o.d(e,{default:()=>n});const n="precision mediump float;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float radius = 0.5;\n\nvoid main(void) {\n  vec4 color0 = vec4(0.0, 0.0, 0.0, 0.0);\n  vec2 m = gl_PointCoord - vec2(0.5, 0.5);\n  float dist = radius - length(m);\n\n  float t = 0.0;\n  if (dist > v_border)\n    t = 1.0;\n  else if (dist > 0.0)\n    t = dist / v_border;\n\n  gl_FragColor = mix(color0, v_color, t);\n}\n";module.exports=e})();

/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createNodeCompoundProgram = exports.AbstractNodeProgram = void 0;
/**
 * Sigma.js WebGL Abstract Node Program
 * =====================================
 *
 * @module
 */
var program_1 = __webpack_require__(34);
/**
 * Node Program class.
 *
 * @constructor
 */
var AbstractNodeProgram = /** @class */ (function (_super) {
    __extends(AbstractNodeProgram, _super);
    function AbstractNodeProgram(gl, vertexShaderSource, fragmentShaderSource, points, attributes) {
        var _this = _super.call(this, gl, vertexShaderSource, fragmentShaderSource, points, attributes) || this;
        // Locations
        _this.positionLocation = gl.getAttribLocation(_this.program, "a_position");
        _this.sizeLocation = gl.getAttribLocation(_this.program, "a_size");
        _this.colorLocation = gl.getAttribLocation(_this.program, "a_color");
        // Uniform Location
        var matrixLocation = gl.getUniformLocation(_this.program, "u_matrix");
        if (matrixLocation === null)
            throw new Error("AbstractNodeProgram: error while getting matrixLocation");
        _this.matrixLocation = matrixLocation;
        var ratioLocation = gl.getUniformLocation(_this.program, "u_ratio");
        if (ratioLocation === null)
            throw new Error("AbstractNodeProgram: error while getting ratioLocation");
        _this.ratioLocation = ratioLocation;
        var scaleLocation = gl.getUniformLocation(_this.program, "u_scale");
        if (scaleLocation === null)
            throw new Error("AbstractNodeProgram: error while getting scaleLocation");
        _this.scaleLocation = scaleLocation;
        return _this;
    }
    AbstractNodeProgram.prototype.bind = function () {
        var gl = this.gl;
        gl.enableVertexAttribArray(this.positionLocation);
        gl.enableVertexAttribArray(this.sizeLocation);
        gl.enableVertexAttribArray(this.colorLocation);
        gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, this.attributes * Float32Array.BYTES_PER_ELEMENT, 0);
        gl.vertexAttribPointer(this.sizeLocation, 1, gl.FLOAT, false, this.attributes * Float32Array.BYTES_PER_ELEMENT, 8);
        gl.vertexAttribPointer(this.colorLocation, 4, gl.UNSIGNED_BYTE, true, this.attributes * Float32Array.BYTES_PER_ELEMENT, 12);
    };
    return AbstractNodeProgram;
}(program_1.AbstractProgram));
exports.AbstractNodeProgram = AbstractNodeProgram;
/**
 * Helper function combining two or more programs into a single compound one.
 * Note that this is more a quick & easy way to combine program than a really
 * performant option. More performant programs can be written entirely.
 *
 * @param  {array}    programClasses - Program classes to combine.
 * @return {function}
 */
function createNodeCompoundProgram(programClasses) {
    return /** @class */ (function () {
        function NodeCompoundProgram(gl) {
            this.programs = programClasses.map(function (ProgramClass) { return new ProgramClass(gl); });
        }
        NodeCompoundProgram.prototype.bufferData = function () {
            this.programs.forEach(function (program) { return program.bufferData(); });
        };
        NodeCompoundProgram.prototype.allocate = function (capacity) {
            this.programs.forEach(function (program) { return program.allocate(capacity); });
        };
        NodeCompoundProgram.prototype.bind = function () {
            // nothing todo, it's already done in each program constructor
        };
        NodeCompoundProgram.prototype.render = function (params) {
            this.programs.forEach(function (program) { return program.render(params); });
        };
        NodeCompoundProgram.prototype.process = function (data, hidden, offset) {
            this.programs.forEach(function (program) { return program.process(data, hidden, offset); });
        };
        return NodeCompoundProgram;
    }());
}
exports.createNodeCompoundProgram = createNodeCompoundProgram;


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractProgram = void 0;
/**
 * Sigma.js WebGL Renderer Program
 * ================================
 *
 * Class representing a single WebGL program used by sigma's WebGL renderer.
 * @module
 */
var utils_1 = __webpack_require__(35);
/**
 * Abstract Program class.
 *
 * @constructor
 */
var AbstractProgram = /** @class */ (function () {
    function AbstractProgram(gl, vertexShaderSource, fragmentShaderSource, points, attributes) {
        this.array = new Float32Array();
        this.points = points;
        this.attributes = attributes;
        this.gl = gl;
        this.vertexShaderSource = vertexShaderSource;
        this.fragmentShaderSource = fragmentShaderSource;
        var buffer = gl.createBuffer();
        if (buffer === null)
            throw new Error("AbstractProgram: error while creating the buffer");
        this.buffer = buffer;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        this.vertexShader = utils_1.loadVertexShader(gl, this.vertexShaderSource);
        this.fragmentShader = utils_1.loadFragmentShader(gl, this.fragmentShaderSource);
        this.program = utils_1.loadProgram(gl, [this.vertexShader, this.fragmentShader]);
    }
    AbstractProgram.prototype.bufferData = function () {
        var gl = this.gl;
        gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW);
    };
    AbstractProgram.prototype.allocate = function (capacity) {
        this.array = new Float32Array(this.points * this.attributes * capacity);
    };
    return AbstractProgram;
}());
exports.AbstractProgram = AbstractProgram;


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Sigma.js Shader Utils
 * ======================
 *
 * Code used to load sigma's shaders.
 * @module
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadProgram = exports.loadFragmentShader = exports.loadVertexShader = void 0;
/**
 * Function used to load a shader.
 */
function loadShader(type, gl, source) {
    var glType = type === "VERTEX" ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER;
    // Creating the shader
    var shader = gl.createShader(glType);
    if (shader === null) {
        throw new Error("loadShader: error while creating the shader");
    }
    // Loading source
    gl.shaderSource(shader, source);
    // Compiling the shader
    gl.compileShader(shader);
    // Retrieving compilation status
    var successfullyCompiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    // Throwing if something went awry
    if (!successfullyCompiled) {
        var infoLog = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw new Error("loadShader: error while compiling the shader:\n" + infoLog + "\n" + source);
    }
    return shader;
}
function loadVertexShader(gl, source) {
    return loadShader("VERTEX", gl, source);
}
exports.loadVertexShader = loadVertexShader;
function loadFragmentShader(gl, source) {
    return loadShader("FRAGMENT", gl, source);
}
exports.loadFragmentShader = loadFragmentShader;
/**
 * Function used to load a program.
 */
function loadProgram(gl, shaders) {
    var program = gl.createProgram();
    if (program === null) {
        throw new Error("loadProgram: error while creating the program.");
    }
    var i, l;
    // Attaching the shaders
    for (i = 0, l = shaders.length; i < l; i++)
        gl.attachShader(program, shaders[i]);
    gl.linkProgram(program);
    // Checking status
    var successfullyLinked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!successfullyLinked) {
        gl.deleteProgram(program);
        throw new Error("loadProgram: error while linking the program.");
    }
    return program;
}
exports.loadProgram = loadProgram;


/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Sigma.js WebGL Renderer Edge Program
 * =====================================
 *
 * Program rendering edges as thick lines using four points translated
 * orthogonally from the source & target's centers by half thickness.
 *
 * Rendering two triangles by using only four points is made possible through
 * the use of indices.
 *
 * This method should be faster than the 6 points / 2 triangles approach and
 * should handle thickness better than with gl.LINES.
 *
 * This version of the shader balances geometry computation evenly between
 * the CPU & GPU (normals are computed on the CPU side).
 * @module
 */
var utils_1 = __webpack_require__(16);
var edge_vert_glsl_1 = __importDefault(__webpack_require__(37));
var edge_frag_glsl_1 = __importDefault(__webpack_require__(38));
var edge_1 = __webpack_require__(39);
var POINTS = 4, ATTRIBUTES = 6, STRIDE = POINTS * ATTRIBUTES;
var EdgeProgram = /** @class */ (function (_super) {
    __extends(EdgeProgram, _super);
    function EdgeProgram(gl) {
        var _this = _super.call(this, gl, edge_vert_glsl_1.default, edge_frag_glsl_1.default, POINTS, ATTRIBUTES) || this;
        // Initializing indices buffer
        var indicesBuffer = gl.createBuffer();
        if (indicesBuffer === null)
            throw new Error("EdgeProgram: error while getting resolutionLocation");
        _this.indicesBuffer = indicesBuffer;
        // Locations
        _this.positionLocation = gl.getAttribLocation(_this.program, "a_position");
        _this.colorLocation = gl.getAttribLocation(_this.program, "a_color");
        _this.normalLocation = gl.getAttribLocation(_this.program, "a_normal");
        _this.thicknessLocation = gl.getAttribLocation(_this.program, "a_thickness");
        // Uniform locations
        var scaleLocation = gl.getUniformLocation(_this.program, "u_scale");
        if (scaleLocation === null)
            throw new Error("EdgeProgram: error while getting scaleLocation");
        _this.scaleLocation = scaleLocation;
        var matrixLocation = gl.getUniformLocation(_this.program, "u_matrix");
        if (matrixLocation === null)
            throw new Error("EdgeProgram: error while getting matrixLocation");
        _this.matrixLocation = matrixLocation;
        var cameraRatioLocation = gl.getUniformLocation(_this.program, "u_cameraRatio");
        if (cameraRatioLocation === null)
            throw new Error("EdgeProgram: error while getting cameraRatioLocation");
        _this.cameraRatioLocation = cameraRatioLocation;
        var viewportRatioLocation = gl.getUniformLocation(_this.program, "u_viewportRatio");
        if (viewportRatioLocation === null)
            throw new Error("EdgeProgram: error while getting viewportRatioLocation");
        _this.viewportRatioLocation = viewportRatioLocation;
        var thicknessRatioLocation = gl.getUniformLocation(_this.program, "u_thicknessRatio");
        if (thicknessRatioLocation === null)
            throw new Error("EdgeProgram: error while getting thicknessRatioLocation");
        _this.thicknessRatioLocation = thicknessRatioLocation;
        // Enabling the OES_element_index_uint extension
        // NOTE: on older GPUs, this means that really large graphs won't
        // have all their edges rendered. But it seems that the
        // `OES_element_index_uint` is quite everywhere so we'll handle
        // the potential issue if it really arises.
        // NOTE: when using webgl2, the extension is enabled by default
        _this.canUse32BitsIndices = utils_1.canUse32BitsIndices(gl);
        _this.IndicesArray = _this.canUse32BitsIndices ? Uint32Array : Uint16Array;
        _this.indicesArray = new _this.IndicesArray();
        _this.indicesType = _this.canUse32BitsIndices ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT;
        _this.bind();
        return _this;
    }
    EdgeProgram.prototype.bind = function () {
        var gl = this.gl;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
        // Bindings
        gl.enableVertexAttribArray(this.positionLocation);
        gl.enableVertexAttribArray(this.normalLocation);
        gl.enableVertexAttribArray(this.thicknessLocation);
        gl.enableVertexAttribArray(this.colorLocation);
        gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 0);
        gl.vertexAttribPointer(this.normalLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 8);
        gl.vertexAttribPointer(this.thicknessLocation, 1, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 16);
        gl.vertexAttribPointer(this.colorLocation, 4, gl.UNSIGNED_BYTE, true, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 20);
    };
    EdgeProgram.prototype.computeIndices = function () {
        var l = this.array.length / ATTRIBUTES;
        var size = l + l / 2;
        var indices = new this.IndicesArray(size);
        for (var i = 0, c = 0; i < l; i += 4) {
            indices[c++] = i;
            indices[c++] = i + 1;
            indices[c++] = i + 2;
            indices[c++] = i + 2;
            indices[c++] = i + 1;
            indices[c++] = i + 3;
        }
        this.indicesArray = indices;
    };
    EdgeProgram.prototype.bufferData = function () {
        _super.prototype.bufferData.call(this);
        // Indices data
        var gl = this.gl;
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indicesArray, gl.STATIC_DRAW);
    };
    EdgeProgram.prototype.process = function (sourceData, targetData, data, hidden, offset) {
        if (hidden) {
            for (var i_1 = offset * STRIDE, l = i_1 + STRIDE; i_1 < l; i_1++)
                this.array[i_1] = 0;
            return;
        }
        var thickness = data.size || 1, x1 = sourceData.x, y1 = sourceData.y, x2 = targetData.x, y2 = targetData.y, color = utils_1.floatColor(data.color);
        // Computing normals
        var dx = x2 - x1, dy = y2 - y1;
        var len = dx * dx + dy * dy, n1 = 0, n2 = 0;
        if (len) {
            len = 1 / Math.sqrt(len);
            n1 = -dy * len;
            n2 = dx * len;
        }
        var i = POINTS * ATTRIBUTES * offset;
        var array = this.array;
        // First point
        array[i++] = x1;
        array[i++] = y1;
        array[i++] = n1;
        array[i++] = n2;
        array[i++] = thickness;
        array[i++] = color;
        // First point flipped
        array[i++] = x1;
        array[i++] = y1;
        array[i++] = -n1;
        array[i++] = -n2;
        array[i++] = thickness;
        array[i++] = color;
        // Second point
        array[i++] = x2;
        array[i++] = y2;
        array[i++] = n1;
        array[i++] = n2;
        array[i++] = thickness;
        array[i++] = color;
        // Second point flipped
        array[i++] = x2;
        array[i++] = y2;
        array[i++] = -n1;
        array[i++] = -n2;
        array[i++] = thickness;
        array[i] = color;
    };
    EdgeProgram.prototype.render = function (params) {
        var gl = this.gl;
        var program = this.program;
        gl.useProgram(program);
        // Binding uniforms
        gl.uniform1f(this.scaleLocation, params.scalingRatio);
        gl.uniformMatrix3fv(this.matrixLocation, false, params.matrix);
        gl.uniform1f(this.cameraRatioLocation, params.ratio);
        gl.uniform1f(this.viewportRatioLocation, 1 / Math.min(params.width, params.height));
        gl.uniform1f(this.thicknessRatioLocation, 1 / Math.pow(params.ratio, params.edgesPowRatio));
        // Drawing:
        gl.drawElements(gl.TRIANGLES, this.indicesArray.length, this.indicesType, 0);
    };
    return EdgeProgram;
}(edge_1.AbstractEdgeProgram));
exports.default = EdgeProgram;


/***/ }),
/* 37 */
/***/ ((module) => {

(()=>{"use strict";var n={d:(t,o)=>{for(var e in o)n.o(o,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})},o:(n,t)=>Object.prototype.hasOwnProperty.call(n,t),r:n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}},t={};n.r(t),n.d(t,{default:()=>o});const o="attribute vec2 a_position;\nattribute vec2 a_normal;\nattribute float a_thickness;\nattribute vec4 a_color;\n\nuniform mat3 u_matrix;\nuniform float u_scale;\nuniform float u_cameraRatio;\nuniform float u_viewportRatio;\nuniform float u_thicknessRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float minThickness = 0.8;\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n\n  // Computing thickness in screen space:\n  float thickness = a_thickness * u_thicknessRatio * u_scale * u_viewportRatio / 2.0;\n  thickness = max(thickness, minThickness * u_viewportRatio);\n\n  // Add normal vector to the position in screen space, but correct thickness first:\n  vec2 position = (u_matrix * vec3(a_position + a_normal * thickness * u_cameraRatio, 1)).xy;\n\n  gl_Position = vec4(position, 0, 1);\n\n  v_normal = a_normal;\n  v_thickness = thickness;\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";module.exports=t})();

/***/ }),
/* 38 */
/***/ ((module) => {

(()=>{"use strict";var e={d:(n,o)=>{for(var t in o)e.o(o,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:o[t]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{default:()=>o});const o="precision mediump float;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float feather = 0.001;\nconst vec4 color0 = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  float dist = length(v_normal) * v_thickness;\n\n  float t = smoothstep(\n    v_thickness - feather,\n    v_thickness,\n    dist\n  );\n\n  gl_FragColor = mix(v_color, color0, t);\n}\n";module.exports=n})();

/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createEdgeCompoundProgram = exports.AbstractEdgeProgram = void 0;
/**
 * Sigma.js WebGL Abstract Edge Program
 * =====================================
 *
 * @module
 */
var program_1 = __webpack_require__(34);
/**
 * Edge Program class.
 *
 * @constructor
 */
var AbstractEdgeProgram = /** @class */ (function (_super) {
    __extends(AbstractEdgeProgram, _super);
    function AbstractEdgeProgram(gl, vertexShaderSource, fragmentShaderSource, points, attributes) {
        return _super.call(this, gl, vertexShaderSource, fragmentShaderSource, points, attributes) || this;
    }
    return AbstractEdgeProgram;
}(program_1.AbstractProgram));
exports.AbstractEdgeProgram = AbstractEdgeProgram;
function createEdgeCompoundProgram(programClasses) {
    return /** @class */ (function () {
        function EdgeCompoundProgram(gl) {
            this.programs = programClasses.map(function (ProgramClass) { return new ProgramClass(gl); });
        }
        EdgeCompoundProgram.prototype.bufferData = function () {
            this.programs.forEach(function (program) { return program.bufferData(); });
        };
        EdgeCompoundProgram.prototype.allocate = function (capacity) {
            this.programs.forEach(function (program) { return program.allocate(capacity); });
        };
        EdgeCompoundProgram.prototype.bind = function () {
            // nothing todo, it's already done in each program constructor
        };
        EdgeCompoundProgram.prototype.computeIndices = function () {
            this.programs.forEach(function (program) { return program.computeIndices(); });
        };
        EdgeCompoundProgram.prototype.render = function (params) {
            this.programs.forEach(function (program) {
                program.bind();
                program.bufferData();
                program.render(params);
            });
        };
        EdgeCompoundProgram.prototype.process = function (sourceData, targetData, data, hidden, offset) {
            this.programs.forEach(function (program) { return program.process(sourceData, targetData, data, hidden, offset); });
        };
        return EdgeCompoundProgram;
    }());
}
exports.createEdgeCompoundProgram = createEdgeCompoundProgram;


/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Sigma.js WebGL Renderer Edge Arrow Program
 * ===========================================
 *
 * Compound program rendering edges as an arrow from the source to the target.
 * @module
 */
var edge_1 = __webpack_require__(39);
var edge_arrowHead_1 = __importDefault(__webpack_require__(41));
var edge_clamped_1 = __importDefault(__webpack_require__(44));
var program = edge_1.createEdgeCompoundProgram([edge_clamped_1.default, edge_arrowHead_1.default]);
exports.default = program;


/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(16);
var edge_arrowHead_vert_glsl_1 = __importDefault(__webpack_require__(42));
var edge_arrowHead_frag_glsl_1 = __importDefault(__webpack_require__(43));
var edge_1 = __webpack_require__(39);
var POINTS = 3, ATTRIBUTES = 10, STRIDE = POINTS * ATTRIBUTES;
var EdgeArrowHeadProgram = /** @class */ (function (_super) {
    __extends(EdgeArrowHeadProgram, _super);
    function EdgeArrowHeadProgram(gl) {
        var _this = _super.call(this, gl, edge_arrowHead_vert_glsl_1.default, edge_arrowHead_frag_glsl_1.default, POINTS, ATTRIBUTES) || this;
        // Locations
        _this.positionLocation = gl.getAttribLocation(_this.program, "a_position");
        _this.colorLocation = gl.getAttribLocation(_this.program, "a_color");
        _this.normalLocation = gl.getAttribLocation(_this.program, "a_normal");
        _this.thicknessLocation = gl.getAttribLocation(_this.program, "a_thickness");
        _this.radiusLocation = gl.getAttribLocation(_this.program, "a_radius");
        _this.barycentricLocation = gl.getAttribLocation(_this.program, "a_barycentric");
        // Uniform locations
        var scaleLocation = gl.getUniformLocation(_this.program, "u_scale");
        if (scaleLocation === null)
            throw new Error("EdgeArrowHeadProgram: error while getting scaleLocation");
        _this.scaleLocation = scaleLocation;
        var matrixLocation = gl.getUniformLocation(_this.program, "u_matrix");
        if (matrixLocation === null)
            throw new Error("EdgeArrowHeadProgram: error while getting matrixLocation");
        _this.matrixLocation = matrixLocation;
        var cameraRatioLocation = gl.getUniformLocation(_this.program, "u_cameraRatio");
        if (cameraRatioLocation === null)
            throw new Error("EdgeArrowHeadProgram: error while getting cameraRatioLocation");
        _this.cameraRatioLocation = cameraRatioLocation;
        var viewportRatioLocation = gl.getUniformLocation(_this.program, "u_viewportRatio");
        if (viewportRatioLocation === null)
            throw new Error("EdgeArrowHeadProgram: error while getting viewportRatioLocation");
        _this.viewportRatioLocation = viewportRatioLocation;
        var thicknessRatioLocation = gl.getUniformLocation(_this.program, "u_thicknessRatio");
        if (thicknessRatioLocation === null)
            throw new Error("EdgeArrowHeadProgram: error while getting thicknessRatioLocation");
        _this.thicknessRatioLocation = thicknessRatioLocation;
        _this.bind();
        return _this;
    }
    EdgeArrowHeadProgram.prototype.bind = function () {
        var gl = this.gl;
        // Bindings
        gl.enableVertexAttribArray(this.positionLocation);
        gl.enableVertexAttribArray(this.normalLocation);
        gl.enableVertexAttribArray(this.thicknessLocation);
        gl.enableVertexAttribArray(this.radiusLocation);
        gl.enableVertexAttribArray(this.colorLocation);
        gl.enableVertexAttribArray(this.barycentricLocation);
        gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 0);
        gl.vertexAttribPointer(this.normalLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 8);
        gl.vertexAttribPointer(this.thicknessLocation, 1, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 16);
        gl.vertexAttribPointer(this.radiusLocation, 1, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 20);
        gl.vertexAttribPointer(this.colorLocation, 4, gl.UNSIGNED_BYTE, true, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 24);
        // TODO: maybe we can optimize here by packing this in a bit mask
        gl.vertexAttribPointer(this.barycentricLocation, 3, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 28);
    };
    EdgeArrowHeadProgram.prototype.computeIndices = function () {
        // nothing to do
    };
    EdgeArrowHeadProgram.prototype.process = function (sourceData, targetData, data, hidden, offset) {
        if (hidden) {
            for (var i_1 = offset * STRIDE, l = i_1 + STRIDE; i_1 < l; i_1++)
                this.array[i_1] = 0;
            return;
        }
        var thickness = data.size || 1, radius = targetData.size || 1, x1 = sourceData.x, y1 = sourceData.y, x2 = targetData.x, y2 = targetData.y, color = utils_1.floatColor(data.color);
        // Computing normals
        var dx = x2 - x1, dy = y2 - y1;
        var len = dx * dx + dy * dy, n1 = 0, n2 = 0;
        if (len) {
            len = 1 / Math.sqrt(len);
            n1 = -dy * len;
            n2 = dx * len;
        }
        var i = POINTS * ATTRIBUTES * offset;
        var array = this.array;
        // First point
        array[i++] = x2;
        array[i++] = y2;
        array[i++] = -n1;
        array[i++] = -n2;
        array[i++] = thickness;
        array[i++] = radius;
        array[i++] = color;
        array[i++] = 1;
        array[i++] = 0;
        array[i++] = 0;
        // Second point
        array[i++] = x2;
        array[i++] = y2;
        array[i++] = -n1;
        array[i++] = -n2;
        array[i++] = thickness;
        array[i++] = radius;
        array[i++] = color;
        array[i++] = 0;
        array[i++] = 1;
        array[i++] = 0;
        // Third point
        array[i++] = x2;
        array[i++] = y2;
        array[i++] = -n1;
        array[i++] = -n2;
        array[i++] = thickness;
        array[i++] = radius;
        array[i++] = color;
        array[i++] = 0;
        array[i++] = 0;
        array[i] = 1;
    };
    EdgeArrowHeadProgram.prototype.render = function (params) {
        var gl = this.gl;
        var program = this.program;
        gl.useProgram(program);
        // Binding uniforms
        gl.uniform1f(this.scaleLocation, params.scalingRatio);
        gl.uniformMatrix3fv(this.matrixLocation, false, params.matrix);
        gl.uniform1f(this.cameraRatioLocation, params.ratio);
        gl.uniform1f(this.viewportRatioLocation, 1 / Math.min(params.width, params.height));
        gl.uniform1f(this.thicknessRatioLocation, 1 / Math.pow(params.ratio, params.edgesPowRatio));
        // Drawing:
        gl.drawArrays(gl.TRIANGLES, 0, this.array.length / ATTRIBUTES);
    };
    return EdgeArrowHeadProgram;
}(edge_1.AbstractEdgeProgram));
exports.default = EdgeArrowHeadProgram;


/***/ }),
/* 42 */
/***/ ((module) => {

(()=>{"use strict";var a={d:(n,t)=>{for(var o in t)a.o(t,o)&&!a.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},o:(a,n)=>Object.prototype.hasOwnProperty.call(a,n),r:a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}},n={};a.r(n),a.d(n,{default:()=>t});const t="attribute vec2 a_position;\nattribute vec2 a_normal;\nattribute float a_thickness;\nattribute float a_radius;\nattribute vec4 a_color;\nattribute vec3 a_barycentric;\n\nuniform mat3 u_matrix;\nuniform float u_scale;\nuniform float u_cameraRatio;\nuniform float u_viewportRatio;\nuniform float u_thicknessRatio;\n\nvarying vec4 v_color;\n\nconst float arrowHeadLengthThicknessRatio = 2.5;\nconst float arrowHeadWidthLengthRatio = 0.66;\nconst float minThickness = 0.8;\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n\n  // Computing thickness in screen space:\n  float thickness = a_thickness * u_thicknessRatio * u_scale * u_viewportRatio / 2.0;\n  thickness = max(thickness, minThickness * u_viewportRatio);\n\n  float nodeRadius = a_radius * u_thicknessRatio * u_viewportRatio * u_cameraRatio;\n  float arrowHeadLength = thickness * 2.0 * arrowHeadLengthThicknessRatio * u_cameraRatio;\n  float arrowHeadHalfWidth = arrowHeadWidthLengthRatio * arrowHeadLength / 2.0;\n\n  float da = a_barycentric.x;\n  float db = a_barycentric.y;\n  float dc = a_barycentric.z;\n\n  vec2 delta = vec2(\n      da * ((nodeRadius) * a_normal.y)\n    + db * ((nodeRadius + arrowHeadLength) * a_normal.y + arrowHeadHalfWidth * a_normal.x)\n    + dc * ((nodeRadius + arrowHeadLength) * a_normal.y - arrowHeadHalfWidth * a_normal.x),\n\n      da * (-(nodeRadius) * a_normal.x)\n    + db * (-(nodeRadius + arrowHeadLength) * a_normal.x + arrowHeadHalfWidth * a_normal.y)\n    + dc * (-(nodeRadius + arrowHeadLength) * a_normal.x - arrowHeadHalfWidth * a_normal.y)\n  );\n\n  vec2 position = (u_matrix * vec3(a_position + delta, 1)).xy;\n\n  gl_Position = vec4(position, 0, 1);\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";module.exports=n})();

/***/ }),
/* 43 */
/***/ ((module) => {

(()=>{"use strict";var e={d:(o,r)=>{for(var t in r)e.o(r,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:r[t]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{default:()=>r});const r="precision mediump float;\n\nvarying vec4 v_color;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n";module.exports=o})();

/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var edge_1 = __webpack_require__(39);
var utils_1 = __webpack_require__(16);
var edge_clamped_vert_glsl_1 = __importDefault(__webpack_require__(45));
var edge_frag_glsl_1 = __importDefault(__webpack_require__(38));
var POINTS = 4, ATTRIBUTES = 7, STRIDE = POINTS * ATTRIBUTES;
var EdgeClampedProgram = /** @class */ (function (_super) {
    __extends(EdgeClampedProgram, _super);
    function EdgeClampedProgram(gl) {
        var _this = _super.call(this, gl, edge_clamped_vert_glsl_1.default, edge_frag_glsl_1.default, POINTS, ATTRIBUTES) || this;
        // Initializing indices buffer
        var indicesBuffer = gl.createBuffer();
        if (indicesBuffer === null)
            throw new Error("EdgeClampedProgram: error while getting resolutionLocation");
        _this.indicesBuffer = indicesBuffer;
        // Locations:
        _this.positionLocation = gl.getAttribLocation(_this.program, "a_position");
        _this.colorLocation = gl.getAttribLocation(_this.program, "a_color");
        _this.normalLocation = gl.getAttribLocation(_this.program, "a_normal");
        _this.thicknessLocation = gl.getAttribLocation(_this.program, "a_thickness");
        _this.radiusLocation = gl.getAttribLocation(_this.program, "a_radius");
        // Uniform locations
        var scaleLocation = gl.getUniformLocation(_this.program, "u_scale");
        if (scaleLocation === null)
            throw new Error("EdgeClampedProgram: error while getting scaleLocation");
        _this.scaleLocation = scaleLocation;
        var matrixLocation = gl.getUniformLocation(_this.program, "u_matrix");
        if (matrixLocation === null)
            throw new Error("EdgeClampedProgram: error while getting matrixLocation");
        _this.matrixLocation = matrixLocation;
        var cameraRatioLocation = gl.getUniformLocation(_this.program, "u_cameraRatio");
        if (cameraRatioLocation === null)
            throw new Error("EdgeClampedProgram: error while getting cameraRatioLocation");
        _this.cameraRatioLocation = cameraRatioLocation;
        var viewportRatioLocation = gl.getUniformLocation(_this.program, "u_viewportRatio");
        if (viewportRatioLocation === null)
            throw new Error("EdgeClampedProgram: error while getting viewportRatioLocation");
        _this.viewportRatioLocation = viewportRatioLocation;
        var thicknessRatioLocation = gl.getUniformLocation(_this.program, "u_thicknessRatio");
        if (thicknessRatioLocation === null)
            throw new Error("EdgeClampedProgram: error while getting thicknessRatioLocation");
        _this.thicknessRatioLocation = thicknessRatioLocation;
        // Enabling the OES_element_index_uint extension
        // NOTE: on older GPUs, this means that really large graphs won't
        // have all their edges rendered. But it seems that the
        // `OES_element_index_uint` is quite everywhere so we'll handle
        // the potential issue if it really arises.
        // NOTE: when using webgl2, the extension is enabled by default
        _this.canUse32BitsIndices = utils_1.canUse32BitsIndices(gl);
        _this.IndicesArray = _this.canUse32BitsIndices ? Uint32Array : Uint16Array;
        _this.indicesArray = new _this.IndicesArray();
        _this.indicesType = _this.canUse32BitsIndices ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT;
        _this.bind();
        return _this;
    }
    EdgeClampedProgram.prototype.bind = function () {
        var gl = this.gl;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
        // Bindings
        gl.enableVertexAttribArray(this.positionLocation);
        gl.enableVertexAttribArray(this.normalLocation);
        gl.enableVertexAttribArray(this.thicknessLocation);
        gl.enableVertexAttribArray(this.colorLocation);
        gl.enableVertexAttribArray(this.radiusLocation);
        gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 0);
        gl.vertexAttribPointer(this.normalLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 8);
        gl.vertexAttribPointer(this.thicknessLocation, 1, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 16);
        gl.vertexAttribPointer(this.colorLocation, 4, gl.UNSIGNED_BYTE, true, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 20);
        gl.vertexAttribPointer(this.radiusLocation, 1, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 24);
    };
    EdgeClampedProgram.prototype.process = function (sourceData, targetData, data, hidden, offset) {
        if (hidden) {
            for (var i_1 = offset * STRIDE, l = i_1 + STRIDE; i_1 < l; i_1++)
                this.array[i_1] = 0;
            return;
        }
        var thickness = data.size || 1, x1 = sourceData.x, y1 = sourceData.y, x2 = targetData.x, y2 = targetData.y, radius = targetData.size || 1, color = utils_1.floatColor(data.color);
        // Computing normals
        var dx = x2 - x1, dy = y2 - y1;
        var len = dx * dx + dy * dy, n1 = 0, n2 = 0;
        if (len) {
            len = 1 / Math.sqrt(len);
            n1 = -dy * len;
            n2 = dx * len;
        }
        var i = POINTS * ATTRIBUTES * offset;
        var array = this.array;
        // First point
        array[i++] = x1;
        array[i++] = y1;
        array[i++] = n1;
        array[i++] = n2;
        array[i++] = thickness;
        array[i++] = color;
        array[i++] = 0;
        // First point flipped
        array[i++] = x1;
        array[i++] = y1;
        array[i++] = -n1;
        array[i++] = -n2;
        array[i++] = thickness;
        array[i++] = color;
        array[i++] = 0;
        // Second point
        array[i++] = x2;
        array[i++] = y2;
        array[i++] = n1;
        array[i++] = n2;
        array[i++] = thickness;
        array[i++] = color;
        array[i++] = radius;
        // Second point flipped
        array[i++] = x2;
        array[i++] = y2;
        array[i++] = -n1;
        array[i++] = -n2;
        array[i++] = thickness;
        array[i++] = color;
        array[i] = -radius;
    };
    EdgeClampedProgram.prototype.computeIndices = function () {
        var l = this.array.length / ATTRIBUTES;
        var size = l + l / 2;
        var indices = new this.IndicesArray(size);
        for (var i = 0, c = 0; i < l; i += 4) {
            indices[c++] = i;
            indices[c++] = i + 1;
            indices[c++] = i + 2;
            indices[c++] = i + 2;
            indices[c++] = i + 1;
            indices[c++] = i + 3;
        }
        this.indicesArray = indices;
    };
    EdgeClampedProgram.prototype.bufferData = function () {
        _super.prototype.bufferData.call(this);
        // Indices data
        var gl = this.gl;
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indicesArray, gl.STATIC_DRAW);
    };
    EdgeClampedProgram.prototype.render = function (params) {
        var gl = this.gl;
        var program = this.program;
        gl.useProgram(program);
        // Binding uniforms
        gl.uniform1f(this.scaleLocation, params.scalingRatio);
        gl.uniformMatrix3fv(this.matrixLocation, false, params.matrix);
        gl.uniform1f(this.cameraRatioLocation, params.ratio);
        gl.uniform1f(this.viewportRatioLocation, 1 / Math.min(params.width, params.height));
        gl.uniform1f(this.thicknessRatioLocation, 1 / Math.pow(params.ratio, params.edgesPowRatio));
        // Drawing:
        gl.drawElements(gl.TRIANGLES, this.indicesArray.length, this.indicesType, 0);
    };
    return EdgeClampedProgram;
}(edge_1.AbstractEdgeProgram));
exports.default = EdgeClampedProgram;


/***/ }),
/* 45 */
/***/ ((module) => {

(()=>{"use strict";var n={d:(t,o)=>{for(var e in o)n.o(o,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})},o:(n,t)=>Object.prototype.hasOwnProperty.call(n,t),r:n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}},t={};n.r(t),n.d(t,{default:()=>o});const o="attribute vec2 a_position;\nattribute vec2 a_normal;\nattribute float a_thickness;\nattribute vec4 a_color;\nattribute float a_radius;\n\nuniform mat3 u_matrix;\nuniform float u_scale;\nuniform float u_cameraRatio;\nuniform float u_viewportRatio;\nuniform float u_thicknessRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float arrowHeadLengthThicknessRatio = 2.5;\nconst float minThickness = 0.8;\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n\n  // Computing thickness in screen space:\n  float thickness = a_thickness * u_thicknessRatio * u_scale * u_viewportRatio / 2.0;\n  thickness = max(thickness, minThickness * u_viewportRatio);\n\n  float direction = sign(a_radius);\n  float nodeRadius = direction * a_radius * u_thicknessRatio * u_viewportRatio;\n  float arrowHeadLength = thickness * 2.0 * arrowHeadLengthThicknessRatio;\n\n  vec2 arrowHeadVector = vec2(-direction * a_normal.y, direction * a_normal.x);\n\n  // Add normal vector to the position in screen space, but correct thickness first:\n  vec2 position = a_position + a_normal * thickness * u_cameraRatio;\n  // Add vector that corrects the arrow head length:\n  position = position + arrowHeadVector * (arrowHeadLength + nodeRadius) * u_cameraRatio;\n  // Apply camera\n  position = (u_matrix * vec3(position, 1)).xy;\n\n  gl_Position = vec4(position, 0, 1);\n\n  v_normal = a_normal;\n  v_thickness = thickness;\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";module.exports=t})();

/***/ }),
/* 46 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var captor_1 = __importStar(__webpack_require__(21));
var camera_1 = __importDefault(__webpack_require__(14));
var DRAG_TIMEOUT = 200;
var TOUCH_INERTIA_RATIO = 3;
var TOUCH_INERTIA_DURATION = 200;
/**
 * Touch captor class.
 *
 * @constructor
 */
var TouchCaptor = /** @class */ (function (_super) {
    __extends(TouchCaptor, _super);
    function TouchCaptor(container, camera) {
        var _this = _super.call(this, container, camera) || this;
        _this.enabled = true;
        _this.isMoving = false;
        _this.touchMode = 0; // number of touches down
        // Binding methods:
        _this.handleStart = _this.handleStart.bind(_this);
        _this.handleLeave = _this.handleLeave.bind(_this);
        _this.handleMove = _this.handleMove.bind(_this);
        // Binding events
        container.addEventListener("touchstart", _this.handleStart, false);
        container.addEventListener("touchend", _this.handleLeave, false);
        container.addEventListener("touchcancel", _this.handleLeave, false);
        container.addEventListener("touchmove", _this.handleMove, false);
        return _this;
    }
    TouchCaptor.prototype.kill = function () {
        var container = this.container;
        container.removeEventListener("touchstart", this.handleStart);
        container.removeEventListener("touchend", this.handleLeave);
        container.removeEventListener("touchcancel", this.handleLeave);
        container.removeEventListener("touchmove", this.handleMove);
    };
    TouchCaptor.prototype.getDimensions = function () {
        return {
            width: this.container.offsetWidth,
            height: this.container.offsetHeight,
        };
    };
    TouchCaptor.prototype.dispatchRelatedMouseEvent = function (type, e, position, emitter) {
        var mousePosition = position || captor_1.getPosition(e.touches[0]);
        var mouseEvent = new MouseEvent(type, {
            clientX: mousePosition.x,
            clientY: mousePosition.y,
            altKey: e.altKey,
            ctrlKey: e.ctrlKey,
        });
        (emitter || this.container).dispatchEvent(mouseEvent);
    };
    TouchCaptor.prototype.handleStart = function (e) {
        if (!this.enabled)
            return;
        // Prevent default to avoid default browser behaviors...
        e.preventDefault();
        // ...but simulate mouse behavior anyway, to get the MouseCaptor working as well:
        if (e.touches.length === 1)
            this.dispatchRelatedMouseEvent("mousedown", e);
        var touches = captor_1.getTouchesArray(e.touches);
        this.isMoving = true;
        this.touchMode = touches.length;
        this.startCameraState = this.camera.getState();
        this.startTouchesPositions = touches.map(captor_1.getPosition);
        this.lastTouchesPositions = this.startTouchesPositions;
        // When there are two touches down, let's record distance and angle as well:
        if (this.touchMode === 2) {
            var _a = __read(this.startTouchesPositions, 2), _b = _a[0], x0 = _b.x, y0 = _b.y, _c = _a[1], x1 = _c.x, y1 = _c.y;
            this.startTouchesAngle = Math.atan2(y1 - y0, x1 - x0);
            this.startTouchesDistance = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
        }
        this.emit("touchdown", captor_1.getTouchCoords(e));
    };
    TouchCaptor.prototype.handleLeave = function (e) {
        if (!this.enabled)
            return;
        // Prevent default to avoid default browser behaviors...
        e.preventDefault();
        // ...but simulate mouse behavior anyway, to get the MouseCaptor working as well:
        if (e.touches.length === 0 && this.lastTouchesPositions && this.lastTouchesPositions.length) {
            this.dispatchRelatedMouseEvent("mouseup", e, this.lastTouchesPositions[0], document);
            this.dispatchRelatedMouseEvent("click", e, this.lastTouchesPositions[0]);
        }
        if (this.movingTimeout) {
            this.isMoving = false;
            clearTimeout(this.movingTimeout);
        }
        switch (this.touchMode) {
            case 2:
                if (e.touches.length === 1) {
                    this.handleStart(e);
                    e.preventDefault();
                    break;
                }
            /* falls through */
            case 1:
                // TODO
                // Dispatch event
                if (this.isMoving) {
                    var cameraState = this.camera.getState(), previousCameraState = this.camera.getPreviousState();
                    this.camera.animate({
                        x: cameraState.x + TOUCH_INERTIA_RATIO * (cameraState.x - previousCameraState.x),
                        y: cameraState.y + TOUCH_INERTIA_RATIO * (cameraState.y - previousCameraState.y),
                    }, {
                        duration: TOUCH_INERTIA_DURATION,
                        easing: "quadraticOut",
                    });
                }
                this.isMoving = false;
                this.touchMode = 0;
                break;
        }
        this.emit("touchup", captor_1.getTouchCoords(e));
    };
    TouchCaptor.prototype.handleMove = function (e) {
        var _a;
        var _this = this;
        if (!this.enabled)
            return;
        // Prevent default to avoid default browser behaviors...
        e.preventDefault();
        // ...but simulate mouse behavior anyway, to get the MouseCaptor working as well:
        if (e.touches.length === 1)
            this.dispatchRelatedMouseEvent("mousemove", e);
        var startCameraState = this.startCameraState;
        var touches = captor_1.getTouchesArray(e.touches);
        var touchesPositions = touches.map(captor_1.getPosition);
        this.lastTouchesPositions = touchesPositions;
        this.isMoving = true;
        if (this.movingTimeout)
            clearTimeout(this.movingTimeout);
        this.movingTimeout = window.setTimeout(function () {
            _this.isMoving = false;
        }, DRAG_TIMEOUT);
        switch (this.touchMode) {
            case 1: {
                var _b = this.camera.viewportToFramedGraph(this.getDimensions(), (this.startTouchesPositions || [])[0]), xStart = _b.x, yStart = _b.y;
                var _c = this.camera.viewportToFramedGraph(this.getDimensions(), touchesPositions[0]), x = _c.x, y = _c.y;
                this.camera.setState({
                    x: startCameraState.x + xStart - x,
                    y: startCameraState.y + yStart - y,
                });
                break;
            }
            case 2: {
                /**
                 * Here is the thinking here:
                 *
                 * 1. We can find the new angle and ratio, by comparing the vector from "touch one" to "touch two" at the start
                 *    of the d'n'd and now
                 *
                 * 2. We can use `Camera#viewportToGraph` inside formula to retrieve the new camera position, using the graph
                 *    position of a touch at the beginning of the d'n'd (using `startCamera.viewportToGraph`) and the viewport
                 *    position of this same touch now
                 */
                var newCameraState = {};
                var _d = touchesPositions[0], x0 = _d.x, y0 = _d.y;
                var _e = touchesPositions[1], x1 = _e.x, y1 = _e.y;
                var angleDiff = Math.atan2(y1 - y0, x1 - x0) - this.startTouchesAngle;
                var ratioDiff = Math.hypot(y1 - y0, x1 - x0) / this.startTouchesDistance;
                // 1.
                newCameraState.ratio = startCameraState.ratio / ratioDiff;
                newCameraState.angle = startCameraState.angle + angleDiff;
                // 2.
                var dimensions = this.getDimensions();
                var touchGraphPosition = camera_1.default.from(startCameraState).viewportToFramedGraph(dimensions, (this.startTouchesPositions || [])[0]);
                var smallestDimension = Math.min(dimensions.width, dimensions.height);
                var dx = smallestDimension / dimensions.width;
                var dy = smallestDimension / dimensions.height;
                var ratio = newCameraState.ratio / smallestDimension;
                // Align with center of the graph:
                var x = x0 - smallestDimension / 2 / dx;
                var y = y0 - smallestDimension / 2 / dy;
                // Rotate:
                _a = __read([
                    x * Math.cos(-newCameraState.angle) - y * Math.sin(-newCameraState.angle),
                    y * Math.cos(-newCameraState.angle) + x * Math.sin(-newCameraState.angle),
                ], 2), x = _a[0], y = _a[1];
                newCameraState.x = touchGraphPosition.x - x * ratio;
                newCameraState.y = touchGraphPosition.y + y * ratio;
                this.camera.setState(newCameraState);
                break;
            }
        }
        this.emit("touchmove", captor_1.getTouchCoords(e));
    };
    return TouchCaptor;
}(captor_1.default));
exports.default = TouchCaptor;


/***/ }),
/* 47 */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__47__;

/***/ }),
/* 48 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZoomControl = void 0;
const react_1 = __importDefault(__webpack_require__(2));
const hooks_1 = __webpack_require__(1);
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


/***/ }),
/* 49 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControlsContainer = void 0;
const react_1 = __importDefault(__webpack_require__(2));
const ControlsContainer = ({ children, position = "bottom-left" }) => {
    return react_1.default.createElement("div", { className: `react-sigma-controls ${position}` }, children);
};
exports.ControlsContainer = ControlsContainer;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = {};

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useSetSettings = exports.useLoadGraph = exports.useRegisterEvents = exports.useSigma = exports.ZoomControl = exports.SigmaContainer = exports.ForceAtlasControl = exports.ControlsContainer = void 0;
const hooks_1 = __webpack_require__(1);
Object.defineProperty(exports, "useSigma", ({ enumerable: true, get: function () { return hooks_1.useSigma; } }));
Object.defineProperty(exports, "useRegisterEvents", ({ enumerable: true, get: function () { return hooks_1.useRegisterEvents; } }));
Object.defineProperty(exports, "useLoadGraph", ({ enumerable: true, get: function () { return hooks_1.useLoadGraph; } }));
Object.defineProperty(exports, "useSetSettings", ({ enumerable: true, get: function () { return hooks_1.useSetSettings; } }));
const ForceAtlasControl_1 = __webpack_require__(4);
Object.defineProperty(exports, "ForceAtlasControl", ({ enumerable: true, get: function () { return ForceAtlasControl_1.ForceAtlasControl; } }));
const SigmaContainer_1 = __webpack_require__(10);
Object.defineProperty(exports, "SigmaContainer", ({ enumerable: true, get: function () { return SigmaContainer_1.SigmaContainer; } }));
const ZoomControl_1 = __webpack_require__(48);
Object.defineProperty(exports, "ZoomControl", ({ enumerable: true, get: function () { return ZoomControl_1.ZoomControl; } }));
const ControlsContainer_1 = __webpack_require__(49);
Object.defineProperty(exports, "ControlsContainer", ({ enumerable: true, get: function () { return ControlsContainer_1.ControlsContainer; } }));

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=react-sigma-v2.js.map