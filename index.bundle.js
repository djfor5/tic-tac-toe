/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #000000ff;

  display: grid;
  justify-content: center;
}

h1 {
  color: white;
  text-align: center;
}

#gameboard {
  background-color: rgb(235, 235, 235);
  display: grid;
  grid-template-columns: repeat(3, min(27vh, 27vw));
  grid-template-rows: repeat(3, min(27vh, 27vw));
}

.tile {
  background-color: rgb(235, 235, 235);

  border: 0.25rem solid black;

  display: flex;
}

.r1 {
  border-top: none;
}

.r3 {
  border-bottom: none;
}

.c1 {
  border-left: none;
}

.c3 {
  border-right: none;
}

.playerA {
  background-color: rgba(255, 255, 0, 0.5);
}

.playerB {
  background-color: rgba(106, 106, 180, 0.5);
}

.winner {
  background-color: rgba(37, 248, 18, 0.85);
}

.tile p {
  font-size: min(7vw, 7vh);
  font-weight: bold;

  margin: auto;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,mJAAmJ;EACnJ,2BAA2B;;EAE3B,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,iDAAiD;EACjD,8CAA8C;AAChD;;AAEA;EACE,oCAAoC;;EAEpC,2BAA2B;;EAE3B,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,wBAAwB;EACxB,iBAAiB;;EAEjB,YAAY;AACd","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  background-color: #000000ff;\n\n  display: grid;\n  justify-content: center;\n}\n\nh1 {\n  color: white;\n  text-align: center;\n}\n\n#gameboard {\n  background-color: rgb(235, 235, 235);\n  display: grid;\n  grid-template-columns: repeat(3, min(27vh, 27vw));\n  grid-template-rows: repeat(3, min(27vh, 27vw));\n}\n\n.tile {\n  background-color: rgb(235, 235, 235);\n\n  border: 0.25rem solid black;\n\n  display: flex;\n}\n\n.r1 {\n  border-top: none;\n}\n\n.r3 {\n  border-bottom: none;\n}\n\n.c1 {\n  border-left: none;\n}\n\n.c3 {\n  border-right: none;\n}\n\n.playerA {\n  background-color: rgba(255, 255, 0, 0.5);\n}\n\n.playerB {\n  background-color: rgba(106, 106, 180, 0.5);\n}\n\n.winner {\n  background-color: rgba(37, 248, 18, 0.85);\n}\n\n.tile p {\n  font-size: min(7vw, 7vh);\n  font-weight: bold;\n\n  margin: auto;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

function render(arr) {
  const tiles = document.querySelectorAll(".tile p");
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].textContent = arr[i];
  }
}
const Gameboard = {
  gameboard: [null, null, null, null, null, null, null, null, null]
};
function Player(name, playerSymbol) {
  return {
    name,
    playerSymbol
  };
}
const player1 = Player("Player 1", "X");
const player2 = Player("Player 2", "O");
render(Gameboard.gameboard); // render initial blank board

const gameplay = (() => {
  let turnCount = 0;
  let currentPlayer;
  let playerToggle;
  let index1;
  let index2;
  let index3;
  let index;
  let isOngoing = true;
  const switchPlayer = (firstPlayer, secondPlayer) => {
    if (turnCount % 2 === 0) {
      turnCount++;
      currentPlayer = firstPlayer.playerSymbol;
      playerToggle = "A";
    } else if (turnCount % 2 !== 0) {
      turnCount++;
      currentPlayer = secondPlayer.playerSymbol;
      playerToggle = "B";
    }
    return {
      currentPlayer,
      playerToggle
    };
  };
  const checkForWinner = arr => {
    for (let r = 1; r <= 3; r++) {
      // rows numbered from 1 to 3 (left to right)
      for (let c = 1; c <= 3; c++) {
        // columns numbered from 1 to 3 (top to bottom)
        const isLastColumn = c === 3;
        const isLastRow = r === 3;
        const abc = arr[3 * r + c - 4] !== null; // clicked tile must not be null
        const bcd = arr[3 * r + c - 4] === arr[3 * r + (c - 1) - 4]; // compare adjacent columns
        const cde = arr[3 * r + c - 4] === arr[3 * r + (c - 2) - 4]; // compare columns, gap between

        const def = arr[3 * r + c - 4] === arr[3 * (r - 1) + c - 4]; // compare adjacent rows
        const efg = arr[3 * r + c - 4] === arr[3 * (r - 2) + c - 4]; // compare rows, gap between

        const fgh = arr[3 * r + c - 4] === arr[3 * (r - 1) + (c - 1) - 4]; // compare diagonal
        const ghi = arr[3 * r + c - 4] === arr[3 * (r - 2) + (c - 2) - 4]; // compare diagonal, gap

        const hij = arr[3 * r + (c - 2) - 4] === arr[3 * (r - 1) + (c - 1) - 4]; // compare diagonal
        const ijk = arr[3 * r + (c - 2) - 4] === arr[3 * (r - 2) + c - 4]; // compare diagonal, gap

        const jkl = arr[3 * r + (c - 2) - 4] !== null; // prevent glitch win clicking bottom right

        const rowAllSame = abc && bcd && cde;
        const columnAllSame = abc && def && efg;
        const topLeftToBottomRightAllSame = abc && fgh && ghi;
        const bottomLeftToTopRightAllSame = abc && hij && ijk && jkl;
        const rowWinner = isLastColumn && rowAllSame;
        const columnWinner = isLastRow && columnAllSame;
        const diagonalForwardWinner = isLastRow && isLastColumn && bottomLeftToTopRightAllSame;
        const diagonalBackwardWinner = isLastRow && isLastColumn && topLeftToBottomRightAllSame;
        if (rowWinner) {
          // check rows for winner
          isOngoing = false;
        } else if (columnWinner) {
          // check columns for winner
          isOngoing = false;
        } else if (diagonalForwardWinner) {
          // check diagonal for winner
          isOngoing = false;
        } else if (diagonalBackwardWinner) {
          // check diagonal for winner
          isOngoing = false;
        }
      }
    }
    return {
      isOngoing
    };
  };
  const updateWinnerIndex = arr => {
    for (let r = 1; r <= 3; r++) {
      // rows numbered from 1 to 3 (left to right)
      for (let c = 1; c <= 3; c++) {
        // columns numbered from 1 to 3 (top to bottom)
        const isLastColumn = c === 3;
        const isLastRow = r === 3;
        const abc = arr[3 * r + c - 4] !== null; // clicked tile must not be null
        const bcd = arr[3 * r + c - 4] === arr[3 * r + (c - 1) - 4]; // compare adjacent columns
        const cde = arr[3 * r + c - 4] === arr[3 * r + (c - 2) - 4]; // compare columns, gap between

        const def = arr[3 * r + c - 4] === arr[3 * (r - 1) + c - 4]; // compare adjacent rows
        const efg = arr[3 * r + c - 4] === arr[3 * (r - 2) + c - 4]; // compare rows, gap between

        const fgh = arr[3 * r + c - 4] === arr[3 * (r - 1) + (c - 1) - 4]; // compare diagonal
        const ghi = arr[3 * r + c - 4] === arr[3 * (r - 2) + (c - 2) - 4]; // compare diagonal, gap

        const hij = arr[3 * r + (c - 2) - 4] === arr[3 * (r - 1) + (c - 1) - 4]; // compare diagonal
        const ijk = arr[3 * r + (c - 2) - 4] === arr[3 * (r - 2) + c - 4]; // compare diagonal, gap

        const rowAllSame = abc && bcd && cde;
        const columnAllSame = abc && def && efg;
        const topLeftToBottomRightAllSame = abc && fgh && ghi;
        const bottomLeftToTopRightAllSame = abc && hij && ijk;
        const rowWinner = isLastColumn && rowAllSame;
        const columnWinner = isLastRow && columnAllSame;
        const diagonalForwardWinner = isLastRow && isLastColumn && bottomLeftToTopRightAllSame;
        const diagonalBackwardWinner = isLastRow && isLastColumn && topLeftToBottomRightAllSame;
        if (rowWinner) {
          // get index of winning row
          index1 = 3 * r + (c - 2) - 4;
          index2 = 3 * r + (c - 1) - 4;
          index3 = 3 * r + c - 4;
        } else if (columnWinner) {
          // get index of winning column
          index1 = 3 * (r - 2) + c - 4;
          index2 = 3 * (r - 1) + c - 4;
          index3 = 3 * r + c - 4;
        } else if (diagonalForwardWinner) {
          // get winner diagonal index (bottom left to top right)
          index1 = 3 * (r - 2) + c - 4;
          index2 = 3 * (r - 1) + (c - 1) - 4;
          index3 = 3 * r + (c - 2) - 4;
        } else if (diagonalBackwardWinner) {
          // get winner diagonal index (top left to bottom right)
          index1 = 3 * (r - 2) + (c - 2) - 4;
          index2 = 3 * (r - 1) + (c - 1) - 4;
          index3 = 3 * r + c - 4;
        }
      }
    }
    index = {
      index1,
      index2,
      index3
    };
    return {
      index
    };
  };
  return {
    switchPlayer,
    checkForWinner,
    updateWinnerIndex
  };
})();
const tiles = document.querySelectorAll(".tile");
tiles.forEach(tile => {
  tile.addEventListener("click", event => {
    let checkGameState = gameplay.checkForWinner(Gameboard.gameboard);
    if (!checkGameState.isOngoing) {
      console.log("Game over. Tile click invalid. Reset game to start over.");
      return; // prevent clicking on tile if game already won
    }

    const tileId = event.target.id;
    if (Gameboard.gameboard[tileId] !== null) return; // prevent clicking on tile non-null
    const playerSwitch = gameplay.switchPlayer(player1, player2);
    Gameboard.gameboard[tileId] = playerSwitch.currentPlayer;
    if (playerSwitch.playerToggle === "A") {
      tile.classList.add("playerA");
    } else if (playerSwitch.playerToggle === "B") {
      tile.classList.add("playerB");
    }
    render(Gameboard.gameboard);
    checkGameState = gameplay.checkForWinner(Gameboard.gameboard);
    if (!checkGameState.isOngoing) {
      const updateWinner = gameplay.updateWinnerIndex(Gameboard.gameboard);
      // tile1
      document.getElementById(`${updateWinner.index.index1}`).classList.add("winner");
      // tile2
      document.getElementById(`${updateWinner.index.index2}`).classList.add("winner");
      // tile3
      document.getElementById(`${updateWinner.index.index3}`).classList.add("winner");
    }
  });
});
})();

/******/ })()
;
//# sourceMappingURL=index.bundle.js.map