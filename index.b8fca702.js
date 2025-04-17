// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8bDoD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3cYfC":[function(require,module,exports) {
"use strict";
const CLASSNAME = Object.freeze({
    Start: "start",
    Restart: "restart",
    Hidden: "hidden",
    ActionButton: "button"
});
const LABEL = Object.freeze({
    Start: "Start",
    Restart: "Restart"
});
const Game = require("789b00406e138236");
// initialize the game with parameters:
/**
 * const game = new Game({
      startTilesAmount: 5,
      initialState: [
        [0, 0, 0, 0],
        [0, 4, 0, 0],
        [0, 0, 9, 0],
        [0, 0, 0, 2],
      ],
      forcePowerOfTwo: true,
});
 */ const game = new Game();
const gameContainer = document.querySelector(".container");
const actionButton = gameContainer.querySelector(".controls button");
const scoreInfo = gameContainer.querySelector(".controls .info");
const scoreNumberField = gameContainer.querySelector(".controls .game-score");
const gameGrid = gameContainer.querySelector(".game-field tbody");
const messageStart = gameContainer.querySelector(".message-start");
const messageWin = gameContainer.querySelector(".message-win");
const messageLose = gameContainer.querySelector(".message-lose");
function renderGame() {
    updateScoreDisplay();
    updateGameBoard();
    updateGameStatusMessage();
}
function updateScoreDisplay() {
    scoreNumberField.textContent = game.getScore();
}
function updateGameStatusMessage() {
    const gameStatus = game.getStatus();
    const isGameIdle = gameStatus === Game.STATUS.Idle;
    messageStart.classList.add(CLASSNAME.Hidden);
    messageWin.classList.add(CLASSNAME.Hidden);
    messageLose.classList.add(CLASSNAME.Hidden);
    actionButton.classList.remove(CLASSNAME.Restart, CLASSNAME.Start);
    actionButton.classList.add(isGameIdle ? CLASSNAME.Start : CLASSNAME.Restart);
    actionButton.textContent = isGameIdle ? LABEL.Start : LABEL.Restart;
    switch(gameStatus){
        case Game.STATUS.Idle:
            messageStart.classList.remove(CLASSNAME.Hidden);
            break;
        case Game.STATUS.Won:
            messageWin.classList.remove(CLASSNAME.Hidden);
            break;
        case Game.STATUS.Lost:
            messageLose.classList.remove(CLASSNAME.Hidden);
            break;
    }
}
function updateGameBoard() {
    const grid = game.getState();
    const numRows = gameGrid.rows.length;
    const numCols = gameGrid.rows[0].cells.length;
    for(let rowIndex = 0; rowIndex < numRows; rowIndex++)for(let colIndex = 0; colIndex < numCols; colIndex++){
        const cell = gameGrid.rows[rowIndex].cells[colIndex];
        const value = grid[rowIndex][colIndex];
        cell.textContent = value || "";
        cell.className = `field-cell ${value ? `field-cell--${value}` : ""}`;
    }
}
document.addEventListener("keydown", (ev)=>{
    const gameStatus = game.getStatus();
    const validKeyPressed = Game.MOVE_KEYS.includes(ev.key);
    if (!validKeyPressed) return;
    ev.preventDefault();
    if (gameStatus === Game.STATUS.Playing) {
        game.move(ev.key);
        renderGame();
    }
});
actionButton.addEventListener("click", ()=>{
    if (game.getStatus() === Game.STATUS.Idle) game.start();
    else game.restart();
    renderGame();
});
scoreInfo.addEventListener("click", ()=>{
    // eslint-disable-next-line no-console
    console.log(game.getState());
});
renderGame();

},{"789b00406e138236":"eIbh2"}],"eIbh2":[function(require,module,exports) {
"use strict";
class Game {
    /**
   * Default number of starting tiles.
   * @readonly
   * @const
   * @type {number}
   */ static START_TILES_QUANTITY_DEFAULT = 2;
    /**
   * The default board configuration (a 4x4 grid of zeros).
   * @readonly
   * @const
   * @type {number[][]}
   */ static DEFAULT_BOARD = [
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ]
    ];
    /**
   * List of keys that represent movement directions.
   * @readonly
   * @const
   * @type {Array<string>}
   */ static MOVE_KEYS = Object.freeze([
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown"
    ]);
    /**
   * Enum for the status of the game.
   * - `Idle`: The game has not started and is idling.
   * - `Playing`: The game has started and is in progress.
   * - `Lost`: The game has finished and the player lost.
   * - `Won`: The game has finished and the player won.
   *
   * @readonly
   * @enum {string}
   */ static STATUS = Object.freeze({
        Idle: "Idle",
        Playing: "Playing",
        Lost: "Lost",
        Won: "Won"
    });
    /**
   * Represents current {@link Game.STATUS|status} of the game
   * @type {keyof typeof Game.STATUS}
   * @private
   * @default Game.STATUS.Idle
   */ _status = Game.STATUS.Idle;
    /**
   * Represents current score of the game
   * @type {number}
   * @private
   */ _score = 0;
    /**
   * Represents the current state (grid) of the game.
   *
   * The grid is stored as a 2D array where each element represents a tile.
   * Empty tiles are represented by `0`, while others contain powers of two.
   *
   * @type {number[][]}
   * @private
   */ _state;
    /**
   * Creates a new game instance.
   *
   * This constructor initializes the game with a given board state and the
   * number of tiles to be placed at the start. It also allows for sanitizing
   * the state (if necessary) to ensure that only valid values are used on the
   * board.
   *
   * @param {Object} options - The configuration options for the game instance.
   * @param {number[][]} [options.initialState=null] - The initial state of
   *   the board.
   *
   * If provided, the board will be initialized with the passed array, which
   * must adhere to the 2D grid format. The values in the grid must either be
   * `0` (empty space) or a power of 2 (e.g., 2, 4, 8, etc.). If no
   * `initialState` is provided, the game will use the
   * {@link DEFAULT_BOARD|default grid}.
   *   @default
   *   [
   *     [0, 0, 0, 0],
   *     [0, 0, 0, 0],
   *     [0, 0, 0, 0],
   *     [0, 0, 0, 0]
   *   ]
   *
   * @param {number} [options.startTilesAmount=2] - The initial number of
   *   random tiles to be placed on the board at the start of the game. This
   *   is the number of tiles with values `2` or `4` that will be randomly
   *   placed on the grid when the game begins. The tiles are placed randomly
   *   in empty spots (values of `0`). If not provided,
   * {@link START_TILES_QUANTITY_DEFAULT|default value} will be used.
   *   @default 2
   *
   * @param {boolean} [options.forcePowerOfTwo=false] - Flag to determine
   *   whether the grid values should be sanitized to ensure they are all
   *   powers of two.
   *   - If `true`, all values that are not powers of 2 will be adjusted to
   *     the nearest lower power of 2 or set to `0`.
   *   - If `false`, invalid values will be set to `0`.
   *   @default false
   */ constructor({ initialState = null, startTilesAmount = Game.START_TILES_QUANTITY_DEFAULT, forcePowerOfTwo = false } = {}){
        const init = Game.sanitizeState(initialState || structuredClone(Game.DEFAULT_BOARD), forcePowerOfTwo);
        this._state = init;
        this.initialState = structuredClone(init);
        this.startTilesAmount = startTilesAmount;
    }
    /**
   * Starts the game, setting:
   * - the {@link Game._status|status} to {@link Game.STATUS.Playing|`playing`}
   *
   * Places new tiles on the board. The number of tiles placed at the start is
   * determined by the `startTilesAmount` property.
   */ start() {
        this._status = Game.STATUS.Playing;
        for(let i = 0; i < this.startTilesAmount; i++)this.placeNewTile();
    }
    /**
   * Restarts the game, resetting:
   * - the {@link Game._score|score} to `0`,
   * - the {@link Game._state|state} to {@link DEFAULT_BOARD|default}
   * - the {@link Game._status|status} to {@link Game.STATUS.Idle|`Idle`}
   */ restart() {
        this._status = Game.STATUS.Idle;
        this._state = structuredClone(this.initialState);
        this._score = 0;
        this.start();
    }
    // #region get (something)
    /**
   * Utility getter, used to get current board size (n*n)
   * @returns {number}
   */ get size() {
        return this._state.length;
    }
    /**
   * Returns {@link Game._score|current score} of the game
   * @returns {number}
   */ getScore() {
        return this._score;
    }
    /**
   * Returns {@link Game._state|current state} (grid) of the game
   * @returns {number[][]}
   */ getState() {
        return this._state;
    }
    /**
   * Returns {@link Game._status|current status} of the game
   * @returns {string}
   */ getStatus() {
        return this._status;
    }
    // #endregion
    // #region move handlers
    move(key) {
        const prevState = JSON.stringify(this._state);
        switch(key){
            case "ArrowUp":
                this.moveUp();
                break;
            case "ArrowRight":
                this.moveRight();
                break;
            case "ArrowDown":
                this.moveDown();
                break;
            case "ArrowLeft":
                this.moveLeft();
                break;
        }
        const newState = JSON.stringify(this._state);
        if (prevState !== newState) this.placeNewTile();
        this.updateGameStatus();
    }
    handleMove() {
        for(let col = 0; col < this.size; col++){
            const numbers = [];
            for(let row = 0; row < this.size; row++)if (this._state[row][col] !== 0) numbers.push(this._state[row][col]);
            const merged = [];
            let i = 0;
            while(i < numbers.length)if (i + 1 < numbers.length && numbers[i] === numbers[i + 1]) {
                const stackedNumber = numbers[i] * 2;
                merged.push(stackedNumber);
                this._score += stackedNumber;
                i += 2;
            } else {
                merged.push(numbers[i]);
                i++;
            }
            while(merged.length < this.size)merged.push(0);
            for(let row = 0; row < this.size; row++)this._state[row][col] = merged[row];
        }
    }
    /**
   * Handles the `ArrowUp` keypress
   */ moveUp() {
        this.handleMove();
    }
    /**
   * Handles the `ArrowUp` keypress, rotating the grid 180°,
   * applying the handler and rotating the grid back
   */ moveDown() {
        this.reverseGrid();
        this.handleMove();
        this.reverseGrid();
    }
    /**
   * Handles the `ArrowLeft` keypress
   * and performing the same action as {@link Game.moveDown|moveDown()}, by
   * rotating the matrix by 90° clockwise
   */ moveLeft() {
        this.rotateClockwise();
        this.handleMove();
        this.rotateCounterClockwise();
    }
    /**
   * Handles the `ArrowRight` keypress
   * and performing the same action as {@link Game.moveDown|moveDown()}, by
   * rotating the matrix by 90° counterclockwise
   */ moveRight() {
        this.rotateCounterClockwise();
        this.handleMove();
        this.rotateClockwise();
    }
    /**
   * Reverses the order of rows in the grid.
   *
   * Used as a helper method in grid rotation.
   */ reverseGrid() {
        this._state.reverse();
    }
    /**
   * Transposes the grid by swapping rows and columns.
   *
   * This method is used for rotating the grid by converting rows into columns.
   */ transpose() {
        for(let i = 0; i < this.size; i++)for(let j = i + 1; j < this.size; j++)[this._state[i][j], this._state[j][i]] = [
            this._state[j][i],
            this._state[i][j]
        ];
    }
    /**
   * Rotates the grid 90° clockwise.
   *
   * This is done by {@link Game.transpose|transposing}
   * the grid and then {@link Game.reverseGrid|reversing} each row.
   */ rotateClockwise() {
        this.transpose();
        this._state.forEach((row)=>row.reverse());
    }
    /**
   * Rotates the grid 90° counterclockwise.
   *
   * This is done by {@link Game.transpose|transposing}
   * the grid and then {@link Game.reverseGrid|reversing} each row.
   */ rotateCounterClockwise() {
        this._state.forEach((row)=>row.reverse());
        this.transpose();
    }
    // #endregion
    /**
   * Updates the game status based on the current game state.
   *
   * - If no move is possible, the {@link Game._status|game status}
   *  is set to `Lost`.
   * - If the board contains the number 2048, the game status is set to `Won`.
   *
   * @returns {void}
   */ updateGameStatus() {
        if (!this.checkMovePossibility()) {
            this._status = Game.STATUS.Lost;
            return;
        }
        const hasWon = this._state.some((row)=>row.includes(2048));
        if (hasWon) this._status = Game.STATUS.Won;
    }
    // #region utility
    /**
   * Sanitizes the game state by ensuring that all values are either 0 or
   * a power of two. Optionally, forces values to the nearest lower power
   * of two.
   *
   * - If `forcePowerOfTwo` is `true`, each value will be replaced with the
   * nearest lower power of two.
   * - If `forcePowerOfTwo` is `false`, only values that are already powers
   * of two are kept, and others are set to 0.
   *
   * @param {number[][]} state - The 2D array representing the initial state
   * of the game board passed as parameter to a constructor.
   * @param {boolean} [forcePowerOfTwo=false] - Whether to force each value
   * to be the nearest lower power of two. Defaults to `false`.
   * @returns {number[][]} A sanitized 2D array with all values being either
   * 0 or a power of two.
   */ static sanitizeState(state, forcePowerOfTwo = false) {
        const isPowerOfTwo = (n)=>n > 0 && (n & n - 1) === 0;
        const getNearestLowerPowerOfTwo = (n)=>{
            if (n <= 0) return 0;
            return Math.pow(2, Math.floor(Math.log2(n)));
        };
        const sanitizeValue = (val)=>{
            if (forcePowerOfTwo) return getNearestLowerPowerOfTwo(val);
            return isPowerOfTwo(val) ? val : 0;
        };
        return state.map((row)=>row.map(sanitizeValue));
    }
    /**
   * Returns a random value, either 2 or 4, with a 90% chance of getting 2.
   *
   * @returns {number} 2 or 4, depending on the random chance.
   */ getTwoOrFour() {
        return Math.random() < 0.9 ? 2 : 4;
    }
    /**
   * Places a new tile (either 2 or 4) in a random empty cell on the game board.
   * The tile is placed in a cell where the current value is 0.
   * If there are no empty cells, no tile is placed.
   */ placeNewTile() {
        const emptyCells = [];
        for(let row = 0; row < this.size; row++){
            for(let col = 0; col < this.size; col++)if (this._state[row][col] === 0) emptyCells.push({
                row,
                col
            });
        }
        if (emptyCells.length > 0) {
            const randomCellIndex = Math.floor(Math.random() * emptyCells.length);
            const { row, col } = emptyCells[randomCellIndex];
            this._state[row][col] = this.getTwoOrFour();
        }
    }
    /**
   * Checks whether a move is possible in the current game state.
   *
   * A move is possible if:
   * - There is at least one empty cell (value of 0).
   * - Or if there are two adjacent cells (horizontally or vertically)
   * with the same value.
   *
   * @returns {boolean} `true` if a move is possible, otherwise `false`.
   */ checkMovePossibility() {
        for(let row = 0; row < this.size; row++)for(let col = 0; col < this.size; col++){
            const cell = this._state[row][col];
            if (!cell) return true;
            if (col < this.size - 1 && this._state[row][col + 1] === cell) return true;
            if (row < this.size - 1 && this._state[row + 1][col] === cell) return true;
        }
        return false;
    }
}
module.exports = Game;

},{}]},["8bDoD","3cYfC"], "3cYfC", "parcelRequire7b01")

//# sourceMappingURL=index.b8fca702.js.map
