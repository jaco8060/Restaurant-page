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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const homeDomController = (function () {
  const Home = () => {
    const content = document.getElementById("content");

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");
    const dumplingImg = document.createElement("img");
    dumplingImg.src = "img/dumpling.svg";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNEO0FBQ2dDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdERYO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK2VBQStlO0FBQy9lO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDtBQUM2Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFUjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDtBQUM2Qjs7Ozs7OztVQ2hGN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FvRDtBQUNOO0FBQ0g7QUFDdEI7QUFDckI7QUFDQTtBQUNBLHVEQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFpQjtBQUNyQixJQUFJO0FBQ0o7QUFDQSxJQUFJLG9EQUFpQjtBQUNyQixJQUFJO0FBQ0o7QUFDQSxJQUFJLDZEQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3REb20uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVEb20uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXHJcbi8qIGltcG9ydCBmb250cyAqL1xyXG46cm9vdHtcclxuICAgIC8qIGJ1dHRvbiBzZXR0aW5ncyAqL1xyXG4gICAgLS1idXR0b24td2lkdGg6IGF1dG87XHJcbiAgICAtLWJ1dHRvbi1oZWlnaHQ6M3JlbTtcclxuICAgIC0tYnV0dG9uLWNvbG9yOiByZ2IoMjI3LCAyMjcsIDIyNyk7XHJcbiAgICAtLWJ1dHRvbi1jb2xvci1zZWxlY3RlZDogcmdiKDUsIDI1NSwgMzQpO1xyXG4gICAgLS1idXR0b24tZm9udC1zaXplOiAycmVtO1xyXG4gICAgLyogbmF2IHNldHRpbmdzICovXHJcbiAgICAtLW5hdi1nYXA6IDJyZW07XHJcbiAgICAtLW1hcmdpbi10b3AtbmF2OiAxLjVyZW07XHJcblxyXG4gICAgLyogY29udGVudCAqL1xyXG4gICAgLS1jb250ZW50LXdpZHRoOjk1JTtcclxuICAgIC0tY29udGFpbmVyLXdpZHRoOiA0MHJlbTtcclxuICAgIC0tbWFyZ2luLXRvcC1jb250ZW50OjEuNXJlbTtcclxuICAgIC0tY29udGFpbmVyLXBhZGRpbmc6IDFyZW07XHJcbiAgICAtLWNvbnRhaW5lci1nYXA6MXJlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHdpZHRoOiB2YXIoLS1idXR0b24td2lkdGgpO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1idXR0b24taGVpZ2h0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWJ1dHRvbi1mb250LXNpemUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4jaG9tZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3Itc2VsZWN0ZWQpO1xyXG59XHJcbm5hdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IHZhcigtLW5hdi1nYXApO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiB2YXIoLS1tYXJnaW4tdG9wLW5hdikgMCAwIDA7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogdmFyKC0tbWFyZ2luLXRvcC1jb250ZW50KSAwIDAgMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGdhcDogdmFyKC0tY29udGFpbmVyLWdhcCk7XHJcbiAgICB3aWR0aDp2YXIoLS1jb250ZW50LXdpZHRoKSA7XHJcbiAgICBtYXJnaW46IDRyZW0gYXV0byAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyMTgsIDE1NCk7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbn1cclxuXHJcbi5jb250ZW50LWNoaWxke1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXItcGFkZGluZyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1jaGlsZC5tZW51e1xyXG5cclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG59XHJcbi5jb250ZW50LWNoaWxkLm1lbnUgaDJ7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4vKiByZW1vdmUgYnVsbGV0IHBvaW50cyAqL1xyXG4uaG91cnMgdWwge1xyXG4gICAgbWFyZ2luOiAwOyBcclxuICAgIHBhZGRpbmc6IDA7IFxyXG4gICAgbGlzdC1zdHlsZTogbm9uZTsgXHJcbiAgIH1cclxuXHJcbiAgIC50aXRsZS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgfVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgICBcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0EsaUJBQWlCO0FBRWpCO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLHdDQUF3QztJQUN4Qyx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix3QkFBd0I7O0lBRXhCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixxQ0FBcUM7SUFDckMsaUNBQWlDO0lBQ2pDLGtDQUFrQztJQUNsQyxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDhDQUE4QztBQUNsRDtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2QyxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7O0FBRXBCO0FBQ0E7O0lBRUksa0JBQWtCOztBQUV0QjtBQUNBLHlCQUF5QjtBQUN6QjtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0dBQ2pCOztHQUVBO0lBQ0MsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0dBQ1Y7O0FBRUg7SUFDSSxZQUFZO0lBQ1osYUFBYTs7QUFFakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLyogaW1wb3J0IGZvbnRzICovXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcclxcbjpyb290e1xcclxcbiAgICAvKiBidXR0b24gc2V0dGluZ3MgKi9cXHJcXG4gICAgLS1idXR0b24td2lkdGg6IGF1dG87XFxyXFxuICAgIC0tYnV0dG9uLWhlaWdodDozcmVtO1xcclxcbiAgICAtLWJ1dHRvbi1jb2xvcjogcmdiKDIyNywgMjI3LCAyMjcpO1xcclxcbiAgICAtLWJ1dHRvbi1jb2xvci1zZWxlY3RlZDogcmdiKDUsIDI1NSwgMzQpO1xcclxcbiAgICAtLWJ1dHRvbi1mb250LXNpemU6IDJyZW07XFxyXFxuICAgIC8qIG5hdiBzZXR0aW5ncyAqL1xcclxcbiAgICAtLW5hdi1nYXA6IDJyZW07XFxyXFxuICAgIC0tbWFyZ2luLXRvcC1uYXY6IDEuNXJlbTtcXHJcXG5cXHJcXG4gICAgLyogY29udGVudCAqL1xcclxcbiAgICAtLWNvbnRlbnQtd2lkdGg6OTUlO1xcclxcbiAgICAtLWNvbnRhaW5lci13aWR0aDogNDByZW07XFxyXFxuICAgIC0tbWFyZ2luLXRvcC1jb250ZW50OjEuNXJlbTtcXHJcXG4gICAgLS1jb250YWluZXItcGFkZGluZzogMXJlbTtcXHJcXG4gICAgLS1jb250YWluZXItZ2FwOjFyZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1idXR0b24td2lkdGgpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLWJ1dHRvbi1oZWlnaHQpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYnV0dG9uLWZvbnQtc2l6ZSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbiNob21lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLXNlbGVjdGVkKTtcXHJcXG59XFxyXFxubmF2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IHZhcigtLW5hdi1nYXApO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiB2YXIoLS1tYXJnaW4tdG9wLW5hdikgMCAwIDA7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiB2YXIoLS1tYXJnaW4tdG9wLWNvbnRlbnQpIDAgMCAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGdhcDogdmFyKC0tY29udGFpbmVyLWdhcCk7XFxyXFxuICAgIHdpZHRoOnZhcigtLWNvbnRlbnQtd2lkdGgpIDtcXHJcXG4gICAgbWFyZ2luOiA0cmVtIGF1dG8gMCBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyMTgsIDE1NCk7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWNoaWxke1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lci1wYWRkaW5nKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY2hpbGQubWVudXtcXHJcXG5cXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHJcXG59XFxyXFxuLmNvbnRlbnQtY2hpbGQubWVudSBoMntcXHJcXG5cXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG4vKiByZW1vdmUgYnVsbGV0IHBvaW50cyAqL1xcclxcbi5ob3VycyB1bCB7XFxyXFxuICAgIG1hcmdpbjogMDsgXFxyXFxuICAgIHBhZGRpbmc6IDA7IFxcclxcbiAgICBsaXN0LXN0eWxlOiBub25lOyBcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgLnRpdGxlLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgIH1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxuICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgIFxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmNvbnN0IGNvbnRhY3REb21Db250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBDb250YWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtY2hpbGRcIiwgXCJjb250YWN0XCIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgY29udGFjdEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcclxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRpbmcpO1xyXG5cclxuICAgIGNvbnN0IGFkZHJlc3NQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGFkZHJlc3NQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBcIjEyMyBEdW1wbGluZyBEcml2ZSwgVG9yb250bywgQ2FuYWRhXCI7XHJcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3NQYXJhZ3JhcGgpO1xyXG5cclxuICAgIGNvbnN0IHBob25lUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwaG9uZVBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwiUGhvbmU6ICgxMjMpIDQ1Ni03ODkwXCI7XHJcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lUGFyYWdyYXBoKTtcclxuXHJcbiAgICBjb25zdCBlbWFpbFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZW1haWxQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBcIkVtYWlsOiBpbmZvQGplcnJ5c2R1bXBsaW5ncy5jb21cIjtcclxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWxQYXJhZ3JhcGgpO1xyXG5cclxuICAgIGNvbnN0IGhvdXJzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIGhvdXJzSGVhZGluZy50ZXh0Q29udGVudCA9IFwiT3BlcmF0aW5nIEhvdXJzXCI7XHJcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzSGVhZGluZyk7XHJcblxyXG4gICAgY29uc3QgaG91cnNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5cclxuICAgIGNvbnN0IGRheXMgPSBbXHJcbiAgICAgIFwiU3VuZGF5OiA4YW0gLSA4cG1cIixcclxuICAgICAgXCJNb25kYXk6IDZhbSAtIDZwbVwiLFxyXG4gICAgICBcIlR1ZXNkYXk6IDZhbSAtIDZwbVwiLFxyXG4gICAgICBcIldlZG5lc2RheTogNmFtIC0gNnBtXCIsXHJcbiAgICAgIFwiVGh1cnNkYXk6IDZhbSAtIDEwcG1cIixcclxuICAgICAgXCJGcmlkYXk6IDZhbSAtIDEwcG1cIixcclxuICAgICAgXCJTYXR1cmRheTogOGFtIC0gMTBwbVwiLFxyXG4gICAgXTtcclxuXHJcbiAgICBkYXlzLmZvckVhY2goKGRheSkgPT4ge1xyXG4gICAgICBjb25zdCBob3Vyc0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGhvdXJzSXRlbS50ZXh0Q29udGVudCA9IGRheTtcclxuICAgICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzSXRlbSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzTGlzdCk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcclxuICB9O1xyXG4gIHJldHVybiB7IENvbnRhY3QgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IGNvbnRhY3REb21Db250cm9sbGVyIH07XHJcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5jb25zdCBob21lRG9tQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcblxyXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpdGxlLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGR1bXBsaW5nSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGR1bXBsaW5nSW1nLnNyYyA9IFwiaW1nL2R1bXBsaW5nLnN2Z1wiO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiSmVycnkncyBEdW1wbGluZ3NcIjtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1bXBsaW5nSW1nKTtcclxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWJvdXRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWNoaWxkXCIpO1xyXG4gICAgY29uc3QgYWJvdXRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGFib3V0UGFyYWdyYXBoLnRleHRDb250ZW50ID1cclxuICAgICAgXCIgSmVycnkncyBEdW1wbGluZ3MgaXMgYSBjdWxpbmFyeSBoYXZlbiB3aGVyZSB0cmFkaXRpb24gYW5kIHRhc3RlIGNvbnZlcmdlLCBvZmZlcmluZyBoYW5kY3JhZnRlZCBkdW1wbGluZ3MgbWFkZSB3aXRoIGZyZXNoLCBsb2NhbGx5LXNvdXJjZWQgaW5ncmVkaWVudHMuIE91ciBjb21taXRtZW50IHRvIHF1YWxpdHkgaXMgbWF0Y2hlZCBieSBleGNlcHRpb25hbCBjdXN0b21lciBzZXJ2aWNlIGFuZCBhIHdhcm0sIGludml0aW5nIGFtYmlhbmNlLiBMZWQgYnkgdGhlIHBhc3Npb25hdGUgQ2hlZiBKZXJyeSwgb3VyIHJlc3RhdXJhbnQgYmxlbmRzIGNvbWZvcnQgd2l0aCBlbGVnYW5jZSwgbWFraW5nIGl0IHBlcmZlY3QgZm9yIGNhc3VhbCBtZWFscyBvciBzcGVjaWFsIGV2ZW50cy4gRW1waGFzaXppbmcgc3VzdGFpbmFiaWxpdHkgYW5kIGN1bGluYXJ5IGV4Y2VsbGVuY2UsIEplcnJ5J3MgRHVtcGxpbmdzIGlzIG1vcmUgdGhhbiBqdXN0IGEgZGluaW5nIHNwb3Q7IGl0J3MgYW4gZXhwZXJpZW5jZSB0byBjaGVyaXNoLCBpbnZpdGluZyBndWVzdHMgdG8gZW5qb3kgYW5kIHJldHVybiBmb3IgaXRzIHVuaXF1ZSBmbGF2b3JzIGFuZCBoZWFydGZlbHQgaG9zcGl0YWxpdHkg8J+Nve+4j/Cfkqvwn6WCXCI7XHJcbiAgICBhYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXRQYXJhZ3JhcGgpO1xyXG5cclxuICAgIGNvbnN0IGhvdXJzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBob3Vyc1NlY3Rpb24uY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtY2hpbGRcIiwgXCJob3Vyc1wiKTtcclxuICAgIGNvbnN0IGhvdXJzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGhvdXJzSGVhZGluZy50ZXh0Q29udGVudCA9IFwiSG91cnNcIjtcclxuICAgIGNvbnN0IGhvdXJzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIGNvbnN0IGhvdXJzTGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgaG91cnNMaTEudGV4dENvbnRlbnQgPSBcIlN1bmRheTogOGFtIC0gOHBtXCI7XHJcbiAgICBjb25zdCBob3Vyc0xpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGhvdXJzTGkyLnRleHRDb250ZW50ID0gXCJNb25kYXk6IDZhbSAtIDZwbVwiO1xyXG4gICAgY29uc3QgaG91cnNMaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBob3Vyc0xpMy50ZXh0Q29udGVudCA9IFwiVHVlc2RheTogNmFtIC0gNnBtXCI7XHJcbiAgICBjb25zdCBob3Vyc0xpNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGhvdXJzTGk0LnRleHRDb250ZW50ID0gXCJXZWRuZXNkYXk6IDZhbSAtIDZwbVwiO1xyXG4gICAgY29uc3QgaG91cnNMaTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBob3Vyc0xpNS50ZXh0Q29udGVudCA9IFwiVGh1cnNkYXk6IDZhbSAtIDEwcG1cIjtcclxuICAgIGNvbnN0IGhvdXJzTGk2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgaG91cnNMaTYudGV4dENvbnRlbnQgPSBcIkZyaWRheTogNmFtIC0gMTBwbVwiO1xyXG4gICAgY29uc3QgaG91cnNMaTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBob3Vyc0xpNy50ZXh0Q29udGVudCA9IFwiU2F0dXJkYXk6IDhhbSAtIDEwcG1cIjtcclxuICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChob3Vyc0xpMSk7XHJcbiAgICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoaG91cnNMaTIpO1xyXG4gICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzTGkzKTtcclxuICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChob3Vyc0xpNCk7XHJcbiAgICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoaG91cnNMaTUpO1xyXG4gICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzTGk2KTtcclxuICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChob3Vyc0xpNyk7XHJcblxyXG4gICAgaG91cnNTZWN0aW9uLmFwcGVuZENoaWxkKGhvdXJzSGVhZGluZyk7XHJcbiAgICBob3Vyc1NlY3Rpb24uYXBwZW5kQ2hpbGQoaG91cnNMaXN0KTtcclxuXHJcbiAgICBjb25zdCBhZGRyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFkZHJlc3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtY2hpbGRcIik7XHJcbiAgICBjb25zdCBhZGRyZXNzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGFkZHJlc3NIZWFkaW5nLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xyXG4gICAgY29uc3QgYWRkcmVzc0FkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGFkZHJlc3NBZGRyZXNzLnRleHRDb250ZW50ID0gXCIxMjMgRHVtcGxpbmcgRHJpdmUsIFRvcm9udG8sIENhbmFkYVwiO1xyXG4gICAgYWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzSGVhZGluZyk7XHJcbiAgICBhZGRyZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3NBZGRyZXNzKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG91cnNTZWN0aW9uKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkcmVzc0NvbnRhaW5lcik7XHJcbiAgfTtcclxuICByZXR1cm4geyBIb21lIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBob21lRG9tQ29udHJvbGxlciB9O1xyXG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuY29uc3QgbWVudURvbUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZU1lbnVTZWN0aW9uID0gKHRpdGxlLCBpdGVtcykgPT4ge1xyXG4gICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1jaGlsZFwiLCBcIm1lbnVcIik7XHJcblxyXG4gICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcblxyXG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gaXRlbTtcclxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHNlY3Rpb247XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1lbnVTZWN0aW9ucyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlN0YXJ0ZXJzXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIFwiVHJhZGl0aW9uYWwgUG9yayBEdW1wbGluZ3MgLSBTdWNjdWxlbnQgcG9yayB3aXRoIGEgYmxlbmQgb2YgaGVyYnMgYW5kIHNwaWNlcywgd3JhcHBlZCBpbiBhIGRlbGljYXRlIGRvdWdoLlwiLFxyXG4gICAgICAgICAgXCJWZWdldGFyaWFuIFBhcmFkaXNlIER1bXBsaW5ncyAtIEEgbWl4IG9mIHNlYXNvbmFsIHZlZ2V0YWJsZXMsIHNlYXNvbmVkIHRvIHBlcmZlY3Rpb24uXCIsXHJcbiAgICAgICAgICBcIlNwaWN5IENoaWNrZW4gR3lvemEgLSBUZW5kZXIgY2hpY2tlbiB3aXRoIGEgZmllcnkga2ljaywgcGFuLXNlYXJlZCBmb3IgYSBjcmlzcHkgZWRnZS5cIixcclxuICAgICAgICAgIFwiUHJhd24gYW5kIEdpbmdlciBEdW1wbGluZ3MgLSBGcmVzaCBwcmF3bnMgYW5kIGdpbmdlciwgb2ZmZXJpbmcgYSByZWZyZXNoaW5nIHplc3QuXCIsXHJcbiAgICAgICAgICBcIlNvdXAgb2YgdGhlIERheSAtIENoZWYncyBzcGVjaWFsIHNlbGVjdGlvbiwgbWFkZSBmcm9tIGZyZXNoLCBsb2NhbCBpbmdyZWRpZW50cy5cIixcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTWFpbiBDb3Vyc2VzXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIFwiRHVtcGxpbmcgUGxhdHRlciAtIEEgc2FtcGxlciBvZiBvdXIgYmVzdC1zZWxsaW5nIGR1bXBsaW5ncywgcGVyZmVjdCBmb3Igc2hhcmluZy5cIixcclxuICAgICAgICAgIFwiQmVlZiBEdW1wbGluZyBTdGlyLUZyeSAtIEp1aWN5IGJlZWYgZHVtcGxpbmdzIHRvc3NlZCB3aXRoIHZlZ2V0YWJsZXMgaW4gYSBzYXZvcnkgc2F1Y2UuXCIsXHJcbiAgICAgICAgICBcIlNlYWZvb2QgRHVtcGxpbmcgTm9vZGxlIFNvdXAgLSBBIGNvbWZvcnRpbmcgYm93bCBvZiBub29kbGVzIHdpdGggYXNzb3J0ZWQgc2VhZm9vZCBkdW1wbGluZ3MuXCIsXHJcbiAgICAgICAgICBcIlZlZ2FuIER1bXBsaW5nIERlbGlnaHQgLSBBc3NvcnRtZW50IG9mIHZlZ2FuIGR1bXBsaW5ncywgc2VydmVkIHdpdGggYSBzaWRlIG9mIHNlYXNvbmFsIGdyZWVucy5cIixcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiU2lkZXNcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgXCJTdGVhbWVkIEphc21pbmUgUmljZVwiLFxyXG4gICAgICAgICAgXCJTZWFzb25hbCBTdGVhbWVkIFZlZ2V0YWJsZXNcIixcclxuICAgICAgICAgIFwiQ3Jpc3B5IFNwcmluZyBSb2xsc1wiLFxyXG4gICAgICAgICAgXCJTd2VldCBDaGlsaSBEaXBwaW5nIFNhdWNlXCIsXHJcbiAgICAgICAgICBcIlNveS1HaW5nZXIgRGlwcGluZyBTYXVjZVwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJEZXNzZXJ0c1wiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICBcIlN3ZWV0IFJlZCBCZWFuIER1bXBsaW5ncyAtIEEgZGVsaWdodGZ1bCBlbmQgdG8geW91ciBtZWFsLlwiLFxyXG4gICAgICAgICAgXCJHcmVlbiBUZWEgSWNlIENyZWFtIC0gUmVmcmVzaGluZyBhbmQgY3JlYW15LCB3aXRoIGEgc3VidGxlIGdyZWVuIHRlYSBmbGF2b3IuXCIsXHJcbiAgICAgICAgICBcIk1hbmdvIFB1ZGRpbmcgLSBTaWxreSBhbmQgc3dlZXQsIHRvcHBlZCB3aXRoIGZyZXNoIG1hbmdvIHNsaWNlcy5cIixcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQmV2ZXJhZ2VzXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIFwiU2VsZWN0aW9uIG9mIFRlYXMgLSBHcmVlbiwgYmxhY2ssIGphc21pbmUsIGFuZCBtb3JlLlwiLFxyXG4gICAgICAgICAgXCJDcmFmdCBCZWVycyAtIExvY2FsIGFuZCBpbXBvcnRlZCBvcHRpb25zLlwiLFxyXG4gICAgICAgICAgXCJIb3VzZSBXaW5lcyAtIFJlZCwgd2hpdGUsIGFuZCByb3PDqS5cIixcclxuICAgICAgICAgIFwiU29mdCBEcmlua3MgYW5kIEp1aWNlcyAtIFZhcmlvdXMgY2hvaWNlcyBhdmFpbGFibGUuXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgbWVudVNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgbWVudVNlY3Rpb24gPSBjcmVhdGVNZW51U2VjdGlvbihzZWN0aW9uLnRpdGxlLCBzZWN0aW9uLml0ZW1zKTtcclxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51U2VjdGlvbik7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiB7IE1lbnUgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IG1lbnVEb21Db250cm9sbGVyIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNvbnRhY3REb21Db250cm9sbGVyIH0gZnJvbSBcIi4vY29udGFjdERvbVwiO1xyXG5pbXBvcnQgeyBob21lRG9tQ29udHJvbGxlciB9IGZyb20gXCIuL2hvbWVEb21cIjtcclxuaW1wb3J0IHsgbWVudURvbUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmNvbnNvbGUubG9nKFwiV2VicGFjayBpbml0aWFsaXplZCFcIik7XHJcblxyXG5ob21lRG9tQ29udHJvbGxlci5Ib21lKCk7XHJcblxyXG4vLyBjb250YWN0RG9tQ29udHJvbGxlci5Db250YWN0KCk7XHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XHJcbmNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XHJcblxyXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YWJTd2l0Y2gpO1xyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YWJTd2l0Y2gpO1xyXG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YWJTd2l0Y2gpO1xyXG5cclxuZnVuY3Rpb24gdGFiU3dpdGNoKGUpIHtcclxuICAvL3Jlc2V0IGNvbG9yc1xyXG4gIGhvbWVCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1idXR0b24tY29sb3IpXCI7XHJcbiAgbWVudUJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWJ1dHRvbi1jb2xvcilcIjtcclxuICBjb250YWN0QnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tYnV0dG9uLWNvbG9yKVwiO1xyXG5cclxuICAvL2NvbG9yIGN1cnJlbnRseSBzZWxlY3RlZFxyXG4gIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tYnV0dG9uLWNvbG9yLXNlbGVjdGVkKVwiO1xyXG4gIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJIb21lXCIpIHtcclxuICAgIGNsZWFyVGFiKCk7XHJcbiAgICBob21lRG9tQ29udHJvbGxlci5Ib21lKCk7XHJcbiAgfSBlbHNlIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJNZW51XCIpIHtcclxuICAgIGNsZWFyVGFiKCk7XHJcbiAgICBtZW51RG9tQ29udHJvbGxlci5NZW51KCk7XHJcbiAgfSBlbHNlIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJDb250YWN0XCIpIHtcclxuICAgIGNsZWFyVGFiKCk7XHJcbiAgICBjb250YWN0RG9tQ29udHJvbGxlci5Db250YWN0KCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclRhYigpIHtcclxuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9