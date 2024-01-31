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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
/* import fonts */
:root{
    /* button settings */
    --button-width: auto;
    --button-height:3rem;
    --button-color: rgb(227, 227, 227);
    --button-color-selected: rgb(5, 255, 34);
    --button-font-size: 2rem;
    /* nav settings */
    --nav-gap: 2rem;
    --margin-top-nav: 1.5rem;

    /* content */
    --content-width:95%;
    --container-width: 40rem;
    --margin-top-content:1.5rem;
    --container-padding: 1rem;
    --container-gap:1rem;
}

button {
    width: var(--button-width);
    height: var(--button-height);
    background-color: var(--button-color);
    font-family: 'Roboto', sans-serif;
    font-size: var(--button-font-size);
    border-radius: 10px;
}
#home {
    background-color: var(--button-color-selected);
}
nav{
    display: flex;
    gap: var(--nav-gap);
    align-items: center;
    justify-content: center;
    margin: var(--margin-top-nav) 0 0 0;
}

#content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: var(--margin-top-content) 0 0 0;
    font-family: 'Roboto', sans-serif;
    gap: var(--container-gap);
    width:var(--content-width) ;
    margin: 4rem auto 0 auto;
    background-color: rgb(247, 218, 154);
    padding: 2rem;
    border-radius: 10px;

}

.content-child{
    width: auto;
    text-align: center;
    background-color: bisque;
    padding: var(--container-padding);
    border-radius: 10px;
}

.content-child.menu{

    text-align: left;

}
.content-child.menu h2{

    text-align: center;

}
/* remove bullet points */
.hours ul {
    margin: 0; 
    padding: 0; 
    list-style: none; 
   }

   .title-container{
    display: flex;
    align-items: center;
    gap: 1rem;
   }

img {
    width: 10rem;
    height: 10rem;
    
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA,iBAAiB;AAEjB;IACI,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;IACpB,kCAAkC;IAClC,wCAAwC;IACxC,wBAAwB;IACxB,iBAAiB;IACjB,eAAe;IACf,wBAAwB;;IAExB,YAAY;IACZ,mBAAmB;IACnB,wBAAwB;IACxB,2BAA2B;IAC3B,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,0BAA0B;IAC1B,4BAA4B;IAC5B,qCAAqC;IACrC,iCAAiC;IACjC,kCAAkC;IAClC,mBAAmB;AACvB;AACA;IACI,8CAA8C;AAClD;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uCAAuC;IACvC,iCAAiC;IACjC,yBAAyB;IACzB,2BAA2B;IAC3B,wBAAwB;IACxB,oCAAoC;IACpC,aAAa;IACb,mBAAmB;;AAEvB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,wBAAwB;IACxB,iCAAiC;IACjC,mBAAmB;AACvB;;AAEA;;IAEI,gBAAgB;;AAEpB;AACA;;IAEI,kBAAkB;;AAEtB;AACA,yBAAyB;AACzB;IACI,SAAS;IACT,UAAU;IACV,gBAAgB;GACjB;;GAEA;IACC,aAAa;IACb,mBAAmB;IACnB,SAAS;GACV;;AAEH;IACI,YAAY;IACZ,aAAa;;AAEjB","sourcesContent":["\r\n/* import fonts */\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n:root{\r\n    /* button settings */\r\n    --button-width: auto;\r\n    --button-height:3rem;\r\n    --button-color: rgb(227, 227, 227);\r\n    --button-color-selected: rgb(5, 255, 34);\r\n    --button-font-size: 2rem;\r\n    /* nav settings */\r\n    --nav-gap: 2rem;\r\n    --margin-top-nav: 1.5rem;\r\n\r\n    /* content */\r\n    --content-width:95%;\r\n    --container-width: 40rem;\r\n    --margin-top-content:1.5rem;\r\n    --container-padding: 1rem;\r\n    --container-gap:1rem;\r\n}\r\n\r\nbutton {\r\n    width: var(--button-width);\r\n    height: var(--button-height);\r\n    background-color: var(--button-color);\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: var(--button-font-size);\r\n    border-radius: 10px;\r\n}\r\n#home {\r\n    background-color: var(--button-color-selected);\r\n}\r\nnav{\r\n    display: flex;\r\n    gap: var(--nav-gap);\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: var(--margin-top-nav) 0 0 0;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: var(--margin-top-content) 0 0 0;\r\n    font-family: 'Roboto', sans-serif;\r\n    gap: var(--container-gap);\r\n    width:var(--content-width) ;\r\n    margin: 4rem auto 0 auto;\r\n    background-color: rgb(247, 218, 154);\r\n    padding: 2rem;\r\n    border-radius: 10px;\r\n\r\n}\r\n\r\n.content-child{\r\n    width: auto;\r\n    text-align: center;\r\n    background-color: bisque;\r\n    padding: var(--container-padding);\r\n    border-radius: 10px;\r\n}\r\n\r\n.content-child.menu{\r\n\r\n    text-align: left;\r\n\r\n}\r\n.content-child.menu h2{\r\n\r\n    text-align: center;\r\n\r\n}\r\n/* remove bullet points */\r\n.hours ul {\r\n    margin: 0; \r\n    padding: 0; \r\n    list-style: none; \r\n   }\r\n\r\n   .title-container{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n   }\r\n\r\nimg {\r\n    width: 10rem;\r\n    height: 10rem;\r\n    \r\n}"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/contactDom.js":
/*!***************************!*\
  !*** ./src/contactDom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactDomController: () => (/* binding */ contactDomController)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const contactDomController = (function () {
  const Contact = () => {
    const content = document.getElementById("content");

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("content-child", "contact");

    const contactHeading = document.createElement("h2");
    contactHeading.textContent = "Contact Us";
    contactContainer.appendChild(contactHeading);

    const addressParagraph = document.createElement("p");
    addressParagraph.textContent = "123 Dumpling Drive, Toronto, Canada";
    contactContainer.appendChild(addressParagraph);

    const phoneParagraph = document.createElement("p");
    phoneParagraph.textContent = "Phone: (123) 456-7890";
    contactContainer.appendChild(phoneParagraph);

    const emailParagraph = document.createElement("p");
    emailParagraph.textContent = "Email: info@jerrysdumplings.com";
    contactContainer.appendChild(emailParagraph);

    const hoursHeading = document.createElement("h3");
    hoursHeading.textContent = "Operating Hours";
    contactContainer.appendChild(hoursHeading);

    const hoursList = document.createElement("ul");

    const days = [
      "Sunday: 8am - 8pm",
      "Monday: 6am - 6pm",
      "Tuesday: 6am - 6pm",
      "Wednesday: 6am - 6pm",
      "Thursday: 6am - 10pm",
      "Friday: 6am - 10pm",
      "Saturday: 8am - 10pm",
    ];

    days.forEach((day) => {
      const hoursItem = document.createElement("li");
      hoursItem.textContent = day;
      hoursList.appendChild(hoursItem);
    });

    contactContainer.appendChild(hoursList);

    content.appendChild(contactContainer);
  };
  return { Contact };
})();




/***/ }),

/***/ "./src/homeDom.js":
/*!************************!*\
  !*** ./src/homeDom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeDomController: () => (/* binding */ homeDomController)
/* harmony export */ });
/* harmony import */ var _img_dumpling_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/dumpling.svg */ "./src/img/dumpling.svg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const homeDomController = (function () {
  const Home = () => {
    const content = document.getElementById("content");

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");
    const dumplingImg = document.createElement("img");
    dumplingImg.src = _img_dumpling_svg__WEBPACK_IMPORTED_MODULE_0__;
    const title = document.createElement("h1");
    title.textContent = "Jerry's Dumplings";
    title.classList.add("title");
    titleContainer.appendChild(dumplingImg);
    titleContainer.appendChild(title);

    const aboutSection = document.createElement("div");
    aboutSection.classList.add("content-child");
    const aboutParagraph = document.createElement("p");
    aboutParagraph.textContent =
      " Jerry's Dumplings is a culinary haven where tradition and taste converge, offering handcrafted dumplings made with fresh, locally-sourced ingredients. Our commitment to quality is matched by exceptional customer service and a warm, inviting ambiance. Led by the passionate Chef Jerry, our restaurant blends comfort with elegance, making it perfect for casual meals or special events. Emphasizing sustainability and culinary excellence, Jerry's Dumplings is more than just a dining spot; it's an experience to cherish, inviting guests to enjoy and return for its unique flavors and heartfelt hospitality 🍽️💫🥂";
    aboutSection.appendChild(aboutParagraph);

    const hoursSection = document.createElement("div");
    hoursSection.classList.add("content-child", "hours");
    const hoursHeading = document.createElement("h2");
    hoursHeading.textContent = "Hours";
    const hoursList = document.createElement("ul");
    const hoursLi1 = document.createElement("li");
    hoursLi1.textContent = "Sunday: 8am - 8pm";
    const hoursLi2 = document.createElement("li");
    hoursLi2.textContent = "Monday: 6am - 6pm";
    const hoursLi3 = document.createElement("li");
    hoursLi3.textContent = "Tuesday: 6am - 6pm";
    const hoursLi4 = document.createElement("li");
    hoursLi4.textContent = "Wednesday: 6am - 6pm";
    const hoursLi5 = document.createElement("li");
    hoursLi5.textContent = "Thursday: 6am - 10pm";
    const hoursLi6 = document.createElement("li");
    hoursLi6.textContent = "Friday: 6am - 10pm";
    const hoursLi7 = document.createElement("li");
    hoursLi7.textContent = "Saturday: 8am - 10pm";
    hoursList.appendChild(hoursLi1);
    hoursList.appendChild(hoursLi2);
    hoursList.appendChild(hoursLi3);
    hoursList.appendChild(hoursLi4);
    hoursList.appendChild(hoursLi5);
    hoursList.appendChild(hoursLi6);
    hoursList.appendChild(hoursLi7);

    hoursSection.appendChild(hoursHeading);
    hoursSection.appendChild(hoursList);

    const addressContainer = document.createElement("div");
    addressContainer.classList.add("content-child");
    const addressHeading = document.createElement("h2");
    addressHeading.textContent = "Location";
    const addressAddress = document.createElement("p");
    addressAddress.textContent = "123 Dumpling Drive, Toronto, Canada";
    addressContainer.appendChild(addressHeading);
    addressContainer.appendChild(addressAddress);

    content.appendChild(titleContainer);
    content.appendChild(aboutSection);
    content.appendChild(hoursSection);
    content.appendChild(addressContainer);
  };
  return { Home };
})();




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuDomController: () => (/* binding */ menuDomController)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const menuDomController = (function () {
  const Menu = () => {
    const content = document.getElementById("content");

    const createMenuSection = (title, items) => {
      const section = document.createElement("div");
      section.classList.add("content-child", "menu");

      const heading = document.createElement("h2");
      heading.textContent = title;
      section.appendChild(heading);

      items.forEach((item) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = item;
        section.appendChild(paragraph);
      });

      return section;
    };

    const menuSections = [
      {
        title: "Starters",
        items: [
          "Traditional Pork Dumplings - Succulent pork with a blend of herbs and spices, wrapped in a delicate dough.",
          "Vegetarian Paradise Dumplings - A mix of seasonal vegetables, seasoned to perfection.",
          "Spicy Chicken Gyoza - Tender chicken with a fiery kick, pan-seared for a crispy edge.",
          "Prawn and Ginger Dumplings - Fresh prawns and ginger, offering a refreshing zest.",
          "Soup of the Day - Chef's special selection, made from fresh, local ingredients.",
        ],
      },
      {
        title: "Main Courses",
        items: [
          "Dumpling Platter - A sampler of our best-selling dumplings, perfect for sharing.",
          "Beef Dumpling Stir-Fry - Juicy beef dumplings tossed with vegetables in a savory sauce.",
          "Seafood Dumpling Noodle Soup - A comforting bowl of noodles with assorted seafood dumplings.",
          "Vegan Dumpling Delight - Assortment of vegan dumplings, served with a side of seasonal greens.",
        ],
      },
      {
        title: "Sides",
        items: [
          "Steamed Jasmine Rice",
          "Seasonal Steamed Vegetables",
          "Crispy Spring Rolls",
          "Sweet Chili Dipping Sauce",
          "Soy-Ginger Dipping Sauce",
        ],
      },
      {
        title: "Desserts",
        items: [
          "Sweet Red Bean Dumplings - A delightful end to your meal.",
          "Green Tea Ice Cream - Refreshing and creamy, with a subtle green tea flavor.",
          "Mango Pudding - Silky and sweet, topped with fresh mango slices.",
        ],
      },
      {
        title: "Beverages",
        items: [
          "Selection of Teas - Green, black, jasmine, and more.",
          "Craft Beers - Local and imported options.",
          "House Wines - Red, white, and rosé.",
          "Soft Drinks and Juices - Various choices available.",
        ],
      },
    ];

    menuSections.forEach((section) => {
      const menuSection = createMenuSection(section.title, section.items);
      content.appendChild(menuSection);
    });
  };
  return { Menu };
})();




/***/ }),

/***/ "./src/img/dumpling.svg":
/*!******************************!*\
  !*** ./src/img/dumpling.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/dumpling.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactDom */ "./src/contactDom.js");
/* harmony import */ var _homeDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeDom */ "./src/homeDom.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




console.log("Webpack initialized!");

_homeDom__WEBPACK_IMPORTED_MODULE_1__.homeDomController.Home();

// contactDomController.Contact();
const content = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

homeBtn.addEventListener("click", tabSwitch);
menuBtn.addEventListener("click", tabSwitch);
contactBtn.addEventListener("click", tabSwitch);

function tabSwitch(e) {
  //reset colors
  homeBtn.style.backgroundColor = "var(--button-color)";
  menuBtn.style.backgroundColor = "var(--button-color)";
  contactBtn.style.backgroundColor = "var(--button-color)";

  //color currently selected
  e.target.style.backgroundColor = "var(--button-color-selected)";
  if (e.target.textContent === "Home") {
    clearTab();
    _homeDom__WEBPACK_IMPORTED_MODULE_1__.homeDomController.Home();
  } else if (e.target.textContent === "Menu") {
    clearTab();
    _menu__WEBPACK_IMPORTED_MODULE_2__.menuDomController.Menu();
  } else if (e.target.textContent === "Contact") {
    clearTab();
    _contactDom__WEBPACK_IMPORTED_MODULE_0__.contactDomController.Contact();
  }
}

function clearTab() {
  content.innerHTML = "";
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FvRDtBQUNOO0FBQ0g7QUFDdEI7QUFDckI7QUFDQTtBQUNBLHVEQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFpQjtBQUNyQixJQUFJO0FBQ0o7QUFDQSxJQUFJLG9EQUFpQjtBQUNyQixJQUFJO0FBQ0o7QUFDQSxJQUFJLDZEQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3REb20uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVEb20uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxyXG4vKiBpbXBvcnQgZm9udHMgKi9cclxuOnJvb3R7XHJcbiAgICAvKiBidXR0b24gc2V0dGluZ3MgKi9cclxuICAgIC0tYnV0dG9uLXdpZHRoOiBhdXRvO1xyXG4gICAgLS1idXR0b24taGVpZ2h0OjNyZW07XHJcbiAgICAtLWJ1dHRvbi1jb2xvcjogcmdiKDIyNywgMjI3LCAyMjcpO1xyXG4gICAgLS1idXR0b24tY29sb3Itc2VsZWN0ZWQ6IHJnYig1LCAyNTUsIDM0KTtcclxuICAgIC0tYnV0dG9uLWZvbnQtc2l6ZTogMnJlbTtcclxuICAgIC8qIG5hdiBzZXR0aW5ncyAqL1xyXG4gICAgLS1uYXYtZ2FwOiAycmVtO1xyXG4gICAgLS1tYXJnaW4tdG9wLW5hdjogMS41cmVtO1xyXG5cclxuICAgIC8qIGNvbnRlbnQgKi9cclxuICAgIC0tY29udGVudC13aWR0aDo5NSU7XHJcbiAgICAtLWNvbnRhaW5lci13aWR0aDogNDByZW07XHJcbiAgICAtLW1hcmdpbi10b3AtY29udGVudDoxLjVyZW07XHJcbiAgICAtLWNvbnRhaW5lci1wYWRkaW5nOiAxcmVtO1xyXG4gICAgLS1jb250YWluZXItZ2FwOjFyZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogdmFyKC0tYnV0dG9uLXdpZHRoKTtcclxuICAgIGhlaWdodDogdmFyKC0tYnV0dG9uLWhlaWdodCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1idXR0b24tZm9udC1zaXplKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuI2hvbWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLXNlbGVjdGVkKTtcclxufVxyXG5uYXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiB2YXIoLS1uYXYtZ2FwKTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogdmFyKC0tbWFyZ2luLXRvcC1uYXYpIDAgMCAwO1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IHZhcigtLW1hcmdpbi10b3AtY29udGVudCkgMCAwIDA7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBnYXA6IHZhcigtLWNvbnRhaW5lci1nYXApO1xyXG4gICAgd2lkdGg6dmFyKC0tY29udGVudC13aWR0aCkgO1xyXG4gICAgbWFyZ2luOiA0cmVtIGF1dG8gMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjE4LCAxNTQpO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG59XHJcblxyXG4uY29udGVudC1jaGlsZHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG4gICAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyLXBhZGRpbmcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtY2hpbGQubWVudXtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxufVxyXG4uY29udGVudC1jaGlsZC5tZW51IGgye1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuLyogcmVtb3ZlIGJ1bGxldCBwb2ludHMgKi9cclxuLmhvdXJzIHVsIHtcclxuICAgIG1hcmdpbjogMDsgXHJcbiAgICBwYWRkaW5nOiAwOyBcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7IFxyXG4gICB9XHJcblxyXG4gICAudGl0bGUtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgIH1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gICAgXHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBLGlCQUFpQjtBQUVqQjtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGtDQUFrQztJQUNsQyx3Q0FBd0M7SUFDeEMsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysd0JBQXdCOztJQUV4QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIscUNBQXFDO0lBQ3JDLGlDQUFpQztJQUNqQyxrQ0FBa0M7SUFDbEMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSw4Q0FBOEM7QUFDbEQ7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGlDQUFpQztJQUNqQyxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksZ0JBQWdCOztBQUVwQjtBQUNBOztJQUVJLGtCQUFrQjs7QUFFdEI7QUFDQSx5QkFBeUI7QUFDekI7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtHQUNqQjs7R0FFQTtJQUNDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztHQUNWOztBQUVIO0lBQ0ksWUFBWTtJQUNaLGFBQWE7O0FBRWpCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbi8qIGltcG9ydCBmb250cyAqL1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcXHJcXG46cm9vdHtcXHJcXG4gICAgLyogYnV0dG9uIHNldHRpbmdzICovXFxyXFxuICAgIC0tYnV0dG9uLXdpZHRoOiBhdXRvO1xcclxcbiAgICAtLWJ1dHRvbi1oZWlnaHQ6M3JlbTtcXHJcXG4gICAgLS1idXR0b24tY29sb3I6IHJnYigyMjcsIDIyNywgMjI3KTtcXHJcXG4gICAgLS1idXR0b24tY29sb3Itc2VsZWN0ZWQ6IHJnYig1LCAyNTUsIDM0KTtcXHJcXG4gICAgLS1idXR0b24tZm9udC1zaXplOiAycmVtO1xcclxcbiAgICAvKiBuYXYgc2V0dGluZ3MgKi9cXHJcXG4gICAgLS1uYXYtZ2FwOiAycmVtO1xcclxcbiAgICAtLW1hcmdpbi10b3AtbmF2OiAxLjVyZW07XFxyXFxuXFxyXFxuICAgIC8qIGNvbnRlbnQgKi9cXHJcXG4gICAgLS1jb250ZW50LXdpZHRoOjk1JTtcXHJcXG4gICAgLS1jb250YWluZXItd2lkdGg6IDQwcmVtO1xcclxcbiAgICAtLW1hcmdpbi10b3AtY29udGVudDoxLjVyZW07XFxyXFxuICAgIC0tY29udGFpbmVyLXBhZGRpbmc6IDFyZW07XFxyXFxuICAgIC0tY29udGFpbmVyLWdhcDoxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICB3aWR0aDogdmFyKC0tYnV0dG9uLXdpZHRoKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1idXR0b24taGVpZ2h0KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWJ1dHRvbi1mb250LXNpemUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG4jaG9tZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvci1zZWxlY3RlZCk7XFxyXFxufVxcclxcbm5hdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiB2YXIoLS1uYXYtZ2FwKTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogdmFyKC0tbWFyZ2luLXRvcC1uYXYpIDAgMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogdmFyKC0tbWFyZ2luLXRvcC1jb250ZW50KSAwIDAgMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBnYXA6IHZhcigtLWNvbnRhaW5lci1nYXApO1xcclxcbiAgICB3aWR0aDp2YXIoLS1jb250ZW50LXdpZHRoKSA7XFxyXFxuICAgIG1hcmdpbjogNHJlbSBhdXRvIDAgYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjE4LCAxNTQpO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1jaGlsZHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXItcGFkZGluZyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWNoaWxkLm1lbnV7XFxyXFxuXFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFxyXFxufVxcclxcbi5jb250ZW50LWNoaWxkLm1lbnUgaDJ7XFxyXFxuXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuLyogcmVtb3ZlIGJ1bGxldCBwb2ludHMgKi9cXHJcXG4uaG91cnMgdWwge1xcclxcbiAgICBtYXJnaW46IDA7IFxcclxcbiAgICBwYWRkaW5nOiAwOyBcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTsgXFxyXFxuICAgfVxcclxcblxcclxcbiAgIC50aXRsZS1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICB9XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgICBcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5jb25zdCBjb250YWN0RG9tQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcblxyXG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWNoaWxkXCIsIFwiY29udGFjdFwiKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGNvbnRhY3RIZWFkaW5nLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XHJcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkaW5nKTtcclxuXHJcbiAgICBjb25zdCBhZGRyZXNzUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBhZGRyZXNzUGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCIxMjMgRHVtcGxpbmcgRHJpdmUsIFRvcm9udG8sIENhbmFkYVwiO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzUGFyYWdyYXBoKTtcclxuXHJcbiAgICBjb25zdCBwaG9uZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGhvbmVQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBcIlBob25lOiAoMTIzKSA0NTYtNzg5MFwiO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZVBhcmFncmFwaCk7XHJcblxyXG4gICAgY29uc3QgZW1haWxQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGVtYWlsUGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCJFbWFpbDogaW5mb0BqZXJyeXNkdW1wbGluZ3MuY29tXCI7XHJcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsUGFyYWdyYXBoKTtcclxuXHJcbiAgICBjb25zdCBob3Vyc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBob3Vyc0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIk9wZXJhdGluZyBIb3Vyc1wiO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc0hlYWRpbmcpO1xyXG5cclxuICAgIGNvbnN0IGhvdXJzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHJcbiAgICBjb25zdCBkYXlzID0gW1xyXG4gICAgICBcIlN1bmRheTogOGFtIC0gOHBtXCIsXHJcbiAgICAgIFwiTW9uZGF5OiA2YW0gLSA2cG1cIixcclxuICAgICAgXCJUdWVzZGF5OiA2YW0gLSA2cG1cIixcclxuICAgICAgXCJXZWRuZXNkYXk6IDZhbSAtIDZwbVwiLFxyXG4gICAgICBcIlRodXJzZGF5OiA2YW0gLSAxMHBtXCIsXHJcbiAgICAgIFwiRnJpZGF5OiA2YW0gLSAxMHBtXCIsXHJcbiAgICAgIFwiU2F0dXJkYXk6IDhhbSAtIDEwcG1cIixcclxuICAgIF07XHJcblxyXG4gICAgZGF5cy5mb3JFYWNoKChkYXkpID0+IHtcclxuICAgICAgY29uc3QgaG91cnNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBob3Vyc0l0ZW0udGV4dENvbnRlbnQgPSBkYXk7XHJcbiAgICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChob3Vyc0l0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc0xpc3QpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XHJcbiAgfTtcclxuICByZXR1cm4geyBDb250YWN0IH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBjb250YWN0RG9tQ29udHJvbGxlciB9O1xyXG4iLCJpbXBvcnQgZHVtcGxpbmcgZnJvbSBcIi4vaW1nL2R1bXBsaW5nLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5jb25zdCBob21lRG9tQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcblxyXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpdGxlLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGR1bXBsaW5nSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGR1bXBsaW5nSW1nLnNyYyA9IGR1bXBsaW5nO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiSmVycnkncyBEdW1wbGluZ3NcIjtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1bXBsaW5nSW1nKTtcclxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWJvdXRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWNoaWxkXCIpO1xyXG4gICAgY29uc3QgYWJvdXRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGFib3V0UGFyYWdyYXBoLnRleHRDb250ZW50ID1cclxuICAgICAgXCIgSmVycnkncyBEdW1wbGluZ3MgaXMgYSBjdWxpbmFyeSBoYXZlbiB3aGVyZSB0cmFkaXRpb24gYW5kIHRhc3RlIGNvbnZlcmdlLCBvZmZlcmluZyBoYW5kY3JhZnRlZCBkdW1wbGluZ3MgbWFkZSB3aXRoIGZyZXNoLCBsb2NhbGx5LXNvdXJjZWQgaW5ncmVkaWVudHMuIE91ciBjb21taXRtZW50IHRvIHF1YWxpdHkgaXMgbWF0Y2hlZCBieSBleGNlcHRpb25hbCBjdXN0b21lciBzZXJ2aWNlIGFuZCBhIHdhcm0sIGludml0aW5nIGFtYmlhbmNlLiBMZWQgYnkgdGhlIHBhc3Npb25hdGUgQ2hlZiBKZXJyeSwgb3VyIHJlc3RhdXJhbnQgYmxlbmRzIGNvbWZvcnQgd2l0aCBlbGVnYW5jZSwgbWFraW5nIGl0IHBlcmZlY3QgZm9yIGNhc3VhbCBtZWFscyBvciBzcGVjaWFsIGV2ZW50cy4gRW1waGFzaXppbmcgc3VzdGFpbmFiaWxpdHkgYW5kIGN1bGluYXJ5IGV4Y2VsbGVuY2UsIEplcnJ5J3MgRHVtcGxpbmdzIGlzIG1vcmUgdGhhbiBqdXN0IGEgZGluaW5nIHNwb3Q7IGl0J3MgYW4gZXhwZXJpZW5jZSB0byBjaGVyaXNoLCBpbnZpdGluZyBndWVzdHMgdG8gZW5qb3kgYW5kIHJldHVybiBmb3IgaXRzIHVuaXF1ZSBmbGF2b3JzIGFuZCBoZWFydGZlbHQgaG9zcGl0YWxpdHkg8J+Nve+4j/Cfkqvwn6WCXCI7XHJcbiAgICBhYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXRQYXJhZ3JhcGgpO1xyXG5cclxuICAgIGNvbnN0IGhvdXJzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBob3Vyc1NlY3Rpb24uY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtY2hpbGRcIiwgXCJob3Vyc1wiKTtcclxuICAgIGNvbnN0IGhvdXJzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGhvdXJzSGVhZGluZy50ZXh0Q29udGVudCA9IFwiSG91cnNcIjtcclxuICAgIGNvbnN0IGhvdXJzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIGNvbnN0IGhvdXJzTGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgaG91cnNMaTEudGV4dENvbnRlbnQgPSBcIlN1bmRheTogOGFtIC0gOHBtXCI7XHJcbiAgICBjb25zdCBob3Vyc0xpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGhvdXJzTGkyLnRleHRDb250ZW50ID0gXCJNb25kYXk6IDZhbSAtIDZwbVwiO1xyXG4gICAgY29uc3QgaG91cnNMaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBob3Vyc0xpMy50ZXh0Q29udGVudCA9IFwiVHVlc2RheTogNmFtIC0gNnBtXCI7XHJcbiAgICBjb25zdCBob3Vyc0xpNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGhvdXJzTGk0LnRleHRDb250ZW50ID0gXCJXZWRuZXNkYXk6IDZhbSAtIDZwbVwiO1xyXG4gICAgY29uc3QgaG91cnNMaTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBob3Vyc0xpNS50ZXh0Q29udGVudCA9IFwiVGh1cnNkYXk6IDZhbSAtIDEwcG1cIjtcclxuICAgIGNvbnN0IGhvdXJzTGk2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgaG91cnNMaTYudGV4dENvbnRlbnQgPSBcIkZyaWRheTogNmFtIC0gMTBwbVwiO1xyXG4gICAgY29uc3QgaG91cnNMaTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBob3Vyc0xpNy50ZXh0Q29udGVudCA9IFwiU2F0dXJkYXk6IDhhbSAtIDEwcG1cIjtcclxuICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChob3Vyc0xpMSk7XHJcbiAgICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoaG91cnNMaTIpO1xyXG4gICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzTGkzKTtcclxuICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChob3Vyc0xpNCk7XHJcbiAgICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoaG91cnNMaTUpO1xyXG4gICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzTGk2KTtcclxuICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChob3Vyc0xpNyk7XHJcblxyXG4gICAgaG91cnNTZWN0aW9uLmFwcGVuZENoaWxkKGhvdXJzSGVhZGluZyk7XHJcbiAgICBob3Vyc1NlY3Rpb24uYXBwZW5kQ2hpbGQoaG91cnNMaXN0KTtcclxuXHJcbiAgICBjb25zdCBhZGRyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZHJlc3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtY2hpbGRcIik7XHJcbiAgICBjb25zdCBhZGRyZXNzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGFkZHJlc3NIZWFkaW5nLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xyXG4gICAgY29uc3QgYWRkcmVzc0FkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGFkZHJlc3NBZGRyZXNzLnRleHRDb250ZW50ID0gXCIxMjMgRHVtcGxpbmcgRHJpdmUsIFRvcm9udG8sIENhbmFkYVwiO1xyXG4gICAgYWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzSGVhZGluZyk7XHJcbiAgICBhZGRyZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3NBZGRyZXNzKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG91cnNTZWN0aW9uKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkcmVzc0NvbnRhaW5lcik7XHJcbiAgfTtcclxuICByZXR1cm4geyBIb21lIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBob21lRG9tQ29udHJvbGxlciB9O1xyXG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuY29uc3QgbWVudURvbUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZU1lbnVTZWN0aW9uID0gKHRpdGxlLCBpdGVtcykgPT4ge1xyXG4gICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1jaGlsZFwiLCBcIm1lbnVcIik7XHJcblxyXG4gICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcblxyXG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gaXRlbTtcclxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHNlY3Rpb247XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1lbnVTZWN0aW9ucyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlN0YXJ0ZXJzXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIFwiVHJhZGl0aW9uYWwgUG9yayBEdW1wbGluZ3MgLSBTdWNjdWxlbnQgcG9yayB3aXRoIGEgYmxlbmQgb2YgaGVyYnMgYW5kIHNwaWNlcywgd3JhcHBlZCBpbiBhIGRlbGljYXRlIGRvdWdoLlwiLFxyXG4gICAgICAgICAgXCJWZWdldGFyaWFuIFBhcmFkaXNlIER1bXBsaW5ncyAtIEEgbWl4IG9mIHNlYXNvbmFsIHZlZ2V0YWJsZXMsIHNlYXNvbmVkIHRvIHBlcmZlY3Rpb24uXCIsXHJcbiAgICAgICAgICBcIlNwaWN5IENoaWNrZW4gR3lvemEgLSBUZW5kZXIgY2hpY2tlbiB3aXRoIGEgZmllcnkga2ljaywgcGFuLXNlYXJlZCBmb3IgYSBjcmlzcHkgZWRnZS5cIixcclxuICAgICAgICAgIFwiUHJhd24gYW5kIEdpbmdlciBEdW1wbGluZ3MgLSBGcmVzaCBwcmF3bnMgYW5kIGdpbmdlciwgb2ZmZXJpbmcgYSByZWZyZXNoaW5nIHplc3QuXCIsXHJcbiAgICAgICAgICBcIlNvdXAgb2YgdGhlIERheSAtIENoZWYncyBzcGVjaWFsIHNlbGVjdGlvbiwgbWFkZSBmcm9tIGZyZXNoLCBsb2NhbCBpbmdyZWRpZW50cy5cIixcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTWFpbiBDb3Vyc2VzXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIFwiRHVtcGxpbmcgUGxhdHRlciAtIEEgc2FtcGxlciBvZiBvdXIgYmVzdC1zZWxsaW5nIGR1bXBsaW5ncywgcGVyZmVjdCBmb3Igc2hhcmluZy5cIixcclxuICAgICAgICAgIFwiQmVlZiBEdW1wbGluZyBTdGlyLUZyeSAtIEp1aWN5IGJlZWYgZHVtcGxpbmdzIHRvc3NlZCB3aXRoIHZlZ2V0YWJsZXMgaW4gYSBzYXZvcnkgc2F1Y2UuXCIsXHJcbiAgICAgICAgICBcIlNlYWZvb2QgRHVtcGxpbmcgTm9vZGxlIFNvdXAgLSBBIGNvbWZvcnRpbmcgYm93bCBvZiBub29kbGVzIHdpdGggYXNzb3J0ZWQgc2VhZm9vZCBkdW1wbGluZ3MuXCIsXHJcbiAgICAgICAgICBcIlZlZ2FuIER1bXBsaW5nIERlbGlnaHQgLSBBc3NvcnRtZW50IG9mIHZlZ2FuIGR1bXBsaW5ncywgc2VydmVkIHdpdGggYSBzaWRlIG9mIHNlYXNvbmFsIGdyZWVucy5cIixcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiU2lkZXNcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgXCJTdGVhbWVkIEphc21pbmUgUmljZVwiLFxyXG4gICAgICAgICAgXCJTZWFzb25hbCBTdGVhbWVkIFZlZ2V0YWJsZXNcIixcclxuICAgICAgICAgIFwiQ3Jpc3B5IFNwcmluZyBSb2xsc1wiLFxyXG4gICAgICAgICAgXCJTd2VldCBDaGlsaSBEaXBwaW5nIFNhdWNlXCIsXHJcbiAgICAgICAgICBcIlNveS1HaW5nZXIgRGlwcGluZyBTYXVjZVwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJEZXNzZXJ0c1wiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICBcIlN3ZWV0IFJlZCBCZWFuIER1bXBsaW5ncyAtIEEgZGVsaWdodGZ1bCBlbmQgdG8geW91ciBtZWFsLlwiLFxyXG4gICAgICAgICAgXCJHcmVlbiBUZWEgSWNlIENyZWFtIC0gUmVmcmVzaGluZyBhbmQgY3JlYW15LCB3aXRoIGEgc3VidGxlIGdyZWVuIHRlYSBmbGF2b3IuXCIsXHJcbiAgICAgICAgICBcIk1hbmdvIFB1ZGRpbmcgLSBTaWxreSBhbmQgc3dlZXQsIHRvcHBlZCB3aXRoIGZyZXNoIG1hbmdvIHNsaWNlcy5cIixcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQmV2ZXJhZ2VzXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIFwiU2VsZWN0aW9uIG9mIFRlYXMgLSBHcmVlbiwgYmxhY2ssIGphc21pbmUsIGFuZCBtb3JlLlwiLFxyXG4gICAgICAgICAgXCJDcmFmdCBCZWVycyAtIExvY2FsIGFuZCBpbXBvcnRlZCBvcHRpb25zLlwiLFxyXG4gICAgICAgICAgXCJIb3VzZSBXaW5lcyAtIFJlZCwgd2hpdGUsIGFuZCByb3PDqS5cIixcclxuICAgICAgICAgIFwiU29mdCBEcmlua3MgYW5kIEp1aWNlcyAtIFZhcmlvdXMgY2hvaWNlcyBhdmFpbGFibGUuXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgbWVudVNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgbWVudVNlY3Rpb24gPSBjcmVhdGVNZW51U2VjdGlvbihzZWN0aW9uLnRpdGxlLCBzZWN0aW9uLml0ZW1zKTtcclxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51U2VjdGlvbik7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiB7IE1lbnUgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IG1lbnVEb21Db250cm9sbGVyIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgY29udGFjdERvbUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250YWN0RG9tXCI7XHJcbmltcG9ydCB7IGhvbWVEb21Db250cm9sbGVyIH0gZnJvbSBcIi4vaG9tZURvbVwiO1xyXG5pbXBvcnQgeyBtZW51RG9tQ29udHJvbGxlciB9IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuY29uc29sZS5sb2coXCJXZWJwYWNrIGluaXRpYWxpemVkIVwiKTtcclxuXHJcbmhvbWVEb21Db250cm9sbGVyLkhvbWUoKTtcclxuXHJcbi8vIGNvbnRhY3REb21Db250cm9sbGVyLkNvbnRhY3QoKTtcclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcclxuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcclxuXHJcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhYlN3aXRjaCk7XHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhYlN3aXRjaCk7XHJcbmNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhYlN3aXRjaCk7XHJcblxyXG5mdW5jdGlvbiB0YWJTd2l0Y2goZSkge1xyXG4gIC8vcmVzZXQgY29sb3JzXHJcbiAgaG9tZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWJ1dHRvbi1jb2xvcilcIjtcclxuICBtZW51QnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tYnV0dG9uLWNvbG9yKVwiO1xyXG4gIGNvbnRhY3RCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1idXR0b24tY29sb3IpXCI7XHJcblxyXG4gIC8vY29sb3IgY3VycmVudGx5IHNlbGVjdGVkXHJcbiAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1idXR0b24tY29sb3Itc2VsZWN0ZWQpXCI7XHJcbiAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcIkhvbWVcIikge1xyXG4gICAgY2xlYXJUYWIoKTtcclxuICAgIGhvbWVEb21Db250cm9sbGVyLkhvbWUoKTtcclxuICB9IGVsc2UgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcIk1lbnVcIikge1xyXG4gICAgY2xlYXJUYWIoKTtcclxuICAgIG1lbnVEb21Db250cm9sbGVyLk1lbnUoKTtcclxuICB9IGVsc2UgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcIkNvbnRhY3RcIikge1xyXG4gICAgY2xlYXJUYWIoKTtcclxuICAgIGNvbnRhY3REb21Db250cm9sbGVyLkNvbnRhY3QoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyVGFiKCkge1xyXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=