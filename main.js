/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nbody {\n  min-height: 100vh;\n  line-height: 1.5;\n  background-color: #edf0e9;\n  font-family: Caveat, \"Open Sans\", \"Helvetica Neue\";\n}\n\nimg,\npicture,\nsvg,\nvideo,\ncanvas {\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\nheader {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border: 2px solid black;\n  border-radius: 50px;\n  padding: 10px 40px;\n  margin: 30px 50px;\n  font-size: 1.5rem;\n  .poke-logo {\n    width: 60px;\n    height: 60px;\n  }\n}\n\n.button-selected {\n  text-decoration: underline;\n  font-weight: bold;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n\n.menu {\n  display: flex;\n  gap: 20px;\n  button {\n    border: none;\n    background-color: #edf0e9;\n    color: black;\n  }\n  button:hover {\n    text-decoration: underline;\n  }\n}\n\n.social-media {\n  display: flex;\n  gap: 15px;\n  li {\n    padding: 0;\n    transition: transform 0.2s;\n  }\n  li:hover {\n    transform: scale(1.5);\n  }\n  img {\n    width: 30px;\n    vertical-align: middle;\n  }\n}\n\n.home-page {\n  font-size: 2rem;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 30px;\n  padding: 20px;\n  h1,\n  p {\n    max-width: 800px;\n    text-align: center;\n  }\n  .button-order {\n    color: black;\n    padding: 10px 20px;\n    border-radius: 50px;\n    background-color: #68eda6;\n    transition: box-shadow 0.2s;\n    cursor: pointer;\n  }\n  .button-order:hover {\n    background-color: #409467;\n    box-shadow: 5px 5px 0px black;\n  }\n}\n\n.menu-page {\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  .separator {\n    width: 500px;\n    margin: 0 auto;\n    margin-bottom: 30px;\n  }\n  .steps {\n    display: grid;\n    justify-items: center;\n    width: 100%;\n    gap: 20px;\n    .section-steps {\n      width: 100%;\n      text-align: center;\n    }\n    .steps-titles {\n      background-color: black;\n      color: white;\n      margin-bottom: 10px;\n    }\n    .group-size {\n      display: flex;\n      align-items: center;\n      justify-content: space-around;\n    }\n\n    .sizes-in {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    .small {\n      width: 100px;\n    }\n    .regular {\n      width: 120px;\n    }\n    .large {\n      width: 160px;\n    }\n  }\n}\n\n.about-page {\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 20px;\n  gap: 20px;\n  p {\n    max-width: 800px;\n  }\n  img {\n    max-width: 400px;\n  }\n  .location {\n    width: 400px;\n    height: 400px;\n  }\n}\n\n@media (max-width: 560px) {\n  header {\n    margin: 10px 20px;\n    padding: 10px 20px;\n    .poke-logo {\n      max-width: 2.5rem;\n      height: 2.5rem;\n    }\n  }\n  .social-media {\n    img {\n      width: 1.5rem;\n      height: 1.5rem;\n    }\n  }\n  .home-page,\n  .menu-page,\n  .about-page {\n    font-size: 1.5rem;\n  }\n  .menu {\n    gap: 0.5rem;\n  }\n\n  .about-page {\n    .location {\n      width: 300px;\n      height: 300px;\n    }\n  }\n  .menu-page {\n    .steps {\n      .small {\n        width: 4rem;\n      }\n      .regular {\n        width: 5rem;\n      }\n      .large {\n        width: 6rem;\n      }\n    }\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://path-javascript-restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://path-javascript-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://path-javascript-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://path-javascript-restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://path-javascript-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://path-javascript-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://path-javascript-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://path-javascript-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://path-javascript-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://path-javascript-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about-page.js":
/*!***************************!*\
  !*** ./src/about-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayAbout: () => (/* binding */ displayAbout)\n/* harmony export */ });\n/* harmony import */ var _images_camping_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/camping.png */ \"./src/images/camping.png\");\n\nconst displayAbout = () => {\n  const body = document.querySelector(\"body\");\n  const initialMain = document.createElement(\"main\");\n  initialMain.classList = \"about-page\";\n  body.appendChild(initialMain);\n\n  const sectionWelcome = document.createElement(\"section\");\n  const welcomeTitle = document.createElement(\"h2\");\n  welcomeTitle.textContent = \"WELCOME TO BEAST POKE BOWL!\";\n  const welcomeSubtitle = document.createElement(\"p\");\n  welcomeSubtitle.textContent =\n    \"We're a Passionate Blend of Fresh Ingredients, Vibrant Flavors, and the Rich Heritage of Hawaiian Poke Bowls, Bringing a Taste of Paradise to Every Bite!\";\n  const campImg = document.createElement(\"img\");\n  campImg.src = _images_camping_png__WEBPACK_IMPORTED_MODULE_0__;\n\n  const sectionContact = document.createElement(\"section\");\n  const titleContact = document.createElement(\"h2\");\n  titleContact.textContent = \"Contact us!\";\n  const subtitleContact = document.createElement(\"p\");\n  subtitleContact.textContent = \"+34 123 456 789\";\n  sectionContact.appendChild(titleContact);\n  sectionContact.appendChild(subtitleContact);\n\n  const sectionLocation = document.createElement(\"section\");\n  const titleWhere = document.createElement(\"h2\");\n  sectionLocation.appendChild(titleWhere);\n  titleWhere.textContent = \"Location\";\n  const mapFrame = document.createElement(\"iframe\");\n  mapFrame.src =\n    \"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22476.31892241763!2d-68.68467153441874!3d45.236874824999084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1736106504646!5m2!1ses!2ses\";\n  mapFrame.classList = \"location\";\n  mapFrame.style = \"border: 2px solid black\";\n  mapFrame.loading = \"lazy\";\n  sectionLocation.appendChild(mapFrame);\n\n  sectionWelcome.appendChild(welcomeTitle);\n  sectionWelcome.appendChild(welcomeSubtitle);\n  initialMain.appendChild(sectionWelcome);\n  initialMain.appendChild(sectionContact);\n  initialMain.appendChild(sectionLocation);\n  initialMain.appendChild(campImg);\n};\n\n\n//# sourceURL=webpack://path-javascript-restaurant-page/./src/about-page.js?");

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayHomePage: () => (/* binding */ displayHomePage)\n/* harmony export */ });\n/* harmony import */ var _images_poke_test_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/poke-test.png */ \"./src/images/poke-test.png\");\n\n\nconst displayHomePage = () => {\n  const body = document.querySelector(\"body\");\n  const initialMain = document.createElement(\"main\");\n  initialMain.classList = \"home-page\";\n  body.appendChild(initialMain);\n\n  const titleHome = document.createElement(\"h1\");\n  const hawaiiHome = document.createElement(\"span\");\n  titleHome.textContent = \"TASTE THE ESSENCE OF \";\n  hawaiiHome.classList = \"hawaii-title\";\n  hawaiiHome.textContent = \"HAWAII 🌴\";\n  titleHome.appendChild(hawaiiHome);\n  initialMain.appendChild(titleHome);\n\n  const subtitleHome = document.createElement(\"p\");\n  subtitleHome.innerHTML =\n    \"Did you know? <strong>Poke bowls originated in Hawaii</strong> as a simple fisherman’s snack, combining <strong>raw fish 🐟</strong> with <strong>seaweed 🌿</strong> and <strong>sea salt 🧂</strong>.\";\n  initialMain.append(subtitleHome);\n\n  const buttonOrder = document.createElement(\"button\");\n  buttonOrder.textContent = \"Order now\";\n  buttonOrder.classList = \"button-order\";\n  initialMain.appendChild(buttonOrder);\n\n  const pokeBowl = document.createElement(\"div\");\n  pokeBowl.classList = \"pokebowl\";\n  const imgPoke = document.createElement(\"img\");\n  imgPoke.src = _images_poke_test_png__WEBPACK_IMPORTED_MODULE_0__;\n  pokeBowl.appendChild(imgPoke);\n  initialMain.appendChild(pokeBowl);\n};\n\n\n//# sourceURL=webpack://path-javascript-restaurant-page/./src/home-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page */ \"./src/home-page.js\");\n/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-page */ \"./src/menu-page.js\");\n/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-page */ \"./src/about-page.js\");\n\n\n\n\n\nfunction ScreenController() {\n  const homeButton = document.querySelector(\".home-button\");\n  const menuButton = document.querySelector(\".menu-button\");\n  const aboutButton = document.querySelector(\".about-button\");\n\n  const removeCurrentMain = () => {\n    if (document.querySelector(\"main\")) {\n      const main = document.querySelector(\"main\");\n      main.remove();\n    }\n  };\n\n  const markButtonAsSelected = (event) => {\n    const buttonSelected = document.querySelector(\".button-selected\");\n    buttonSelected.classList = \"\";\n    event.target.classList = \"button-selected\";\n  };\n\n  const homeButtonSelected = () => {\n    const homeButton = document.querySelector(\".home-button\");\n    homeButton.classList = \"button-selected\";\n  };\n\n  homeButton.addEventListener(\"click\", (event) => {\n    removeCurrentMain();\n    markButtonAsSelected(event);\n    (0,_home_page__WEBPACK_IMPORTED_MODULE_1__.displayHomePage)();\n  });\n\n  menuButton.addEventListener(\"click\", (event) => {\n    removeCurrentMain();\n    markButtonAsSelected(event);\n    (0,_menu_page__WEBPACK_IMPORTED_MODULE_2__.displayMenu)();\n  });\n\n  aboutButton.addEventListener(\"click\", (event) => {\n    removeCurrentMain();\n    markButtonAsSelected(event);\n    (0,_about_page__WEBPACK_IMPORTED_MODULE_3__.displayAbout)();\n  });\n\n  homeButtonSelected();\n  (0,_home_page__WEBPACK_IMPORTED_MODULE_1__.displayHomePage)();\n}\n\nScreenController();\n\n\n//# sourceURL=webpack://path-javascript-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayMenu: () => (/* binding */ displayMenu)\n/* harmony export */ });\n/* harmony import */ var _images_bowl_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/bowl.png */ \"./src/images/bowl.png\");\n\n\nconst displayMenu = () => {\n  const body = document.querySelector(\"body\");\n  const initialMain = document.createElement(\"main\");\n  initialMain.classList = \"menu-page\";\n  body.appendChild(initialMain);\n\n  const titleMenu = document.createElement(\"h2\");\n  titleMenu.textContent = \"BUILD YOUR BOWL\";\n  initialMain.appendChild(titleMenu);\n\n  const separatorSVG = document.createElementNS(\n    \"http://www.w3.org/2000/svg\",\n    \"svg\"\n  );\n\n  separatorSVG.setAttribute(\"xmlns\", \"http://www.w3.org/2000/svg\");\n  separatorSVG.setAttribute(\"viewBox\", \"0 0 1280 100\");\n  separatorSVG.classList = \"separator\";\n  separatorSVG.innerHTML =\n    '<g transform=\"translate(280,0)\" fill=\"none\" stroke=\"black\" stroke-width=\"10\"><path d=\"M20 58c27-13.33333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.66666667 80.5 20\"></path><path opacity=\"0.3\" transform=\"translate(0,20)\" d=\"M20 58c27-13.33333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.66666667 80.5 20\"></path></g>';\n\n  initialMain.appendChild(separatorSVG);\n\n  const stepsDiv = document.createElement(\"div\");\n  stepsDiv.classList = \"steps\";\n  initialMain.appendChild(stepsDiv);\n\n  const sizeSection = document.createElement(\"section\");\n  sizeSection.classList = \"section-steps\";\n  stepsDiv.appendChild(sizeSection);\n\n  const sizeTitle = document.createElement(\"h4\");\n  sizeTitle.textContent = \"CHOOSE SIZE\";\n  sizeTitle.classList = \"steps-titles\";\n\n  const groupSizesDiv = document.createElement(\"div\");\n  groupSizesDiv.classList = \"group-size\";\n\n  const smallDiv = document.createElement(\"div\");\n  smallDiv.classList = \"sizes-in\";\n  const smallParagraph = document.createElement(\"p\");\n  smallParagraph.textContent = \"Small\";\n  const smallImg = document.createElement(\"img\");\n  const smallPrice = document.createElement(\"p\");\n  smallImg.src = _images_bowl_png__WEBPACK_IMPORTED_MODULE_0__;\n  smallImg.classList = \"small\";\n  smallPrice.textContent = \"$7.00\";\n  smallDiv.appendChild(smallParagraph);\n  smallDiv.appendChild(smallImg);\n  smallDiv.appendChild(smallPrice);\n\n  const regularDiv = document.createElement(\"div\");\n  regularDiv.classList = \"sizes-in\";\n  const regularParagraph = document.createElement(\"p\");\n  regularParagraph.textContent = \"Regular\";\n  const regularImg = document.createElement(\"img\");\n  const regularPrice = document.createElement(\"p\");\n  regularImg.src = _images_bowl_png__WEBPACK_IMPORTED_MODULE_0__;\n  regularImg.classList = \"regular\";\n  regularPrice.textContent = \"$9.90\";\n  regularDiv.appendChild(regularParagraph);\n  regularDiv.appendChild(regularImg);\n  regularDiv.appendChild(regularPrice);\n\n  const largeDiv = document.createElement(\"div\");\n  largeDiv.classList = \"sizes-in\";\n  const largeParagraph = document.createElement(\"p\");\n  largeParagraph.textContent = \"Large\";\n  const largeImg = document.createElement(\"img\");\n  largeImg.src = _images_bowl_png__WEBPACK_IMPORTED_MODULE_0__;\n  largeImg.classList = \"large\";\n  const largePrice = document.createElement(\"p\");\n  largePrice.textContent = \"$12.95\";\n  largeDiv.appendChild(largeParagraph);\n  largeDiv.appendChild(largeImg);\n  largeDiv.appendChild(largePrice);\n\n  groupSizesDiv.appendChild(smallDiv);\n  groupSizesDiv.appendChild(regularDiv);\n  groupSizesDiv.appendChild(largeDiv);\n\n  sizeSection.appendChild(sizeTitle);\n  sizeSection.appendChild(groupSizesDiv);\n\n  const section1 = document.createElement(\"section\");\n  section1.classList = \"section-steps\";\n  const step1Title = document.createElement(\"h4\");\n  step1Title.textContent = \"STEP-1 (Base)\";\n  step1Title.classList = \"steps-titles\";\n\n  const step1TypesDiv = document.createElement(\"div\");\n  const step1Rice1 = document.createElement(\"p\");\n  step1Rice1.innerHTML = \"White <strong>Rice</strong> 🍚\";\n  const step1Rice2 = document.createElement(\"p\");\n  step1Rice2.innerHTML = \"Brown <strong>Rice</strong> 🍚\";\n  const step1Greens = document.createElement(\"p\");\n  step1Greens.innerHTML = \"Mixed <strong>Greens</strong> 🥦\";\n  section1.appendChild(step1Title);\n  step1TypesDiv.appendChild(step1Rice1);\n  step1TypesDiv.appendChild(step1Rice2);\n  step1TypesDiv.appendChild(step1Greens);\n  section1.appendChild(step1TypesDiv);\n  stepsDiv.appendChild(section1);\n\n  const section2 = document.createElement(\"section\");\n  section2.classList = \"section-steps\";\n  const step2Title = document.createElement(\"h4\");\n  step2Title.textContent = \"STEP-2 (Protein)\";\n  step2Title.classList = \"steps-titles\";\n\n  const step2TypesDiv = document.createElement(\"div\");\n  step2TypesDiv.classList = \"group-size\";\n  const step2Salmon = document.createElement(\"p\");\n  step2Salmon.textContent = \"Salmon 🍣\";\n  const step2Tuna = document.createElement(\"p\");\n  step2Tuna.textContent = \"Tuna 🐟\";\n  const step2Tofu = document.createElement(\"p\");\n  step2Tofu.textContent = \"Tofu 🧈\";\n  const step2Chicken = document.createElement(\"p\");\n  step2Chicken.textContent = \"Chicken 🐔\";\n  step2TypesDiv.appendChild(step2Salmon);\n  step2TypesDiv.appendChild(step2Tuna);\n  step2TypesDiv.appendChild(step2Tofu);\n  step2TypesDiv.appendChild(step2Chicken);\n  section2.appendChild(step2Title);\n  section2.appendChild(step2TypesDiv);\n  stepsDiv.appendChild(section2);\n\n  const section3 = document.createElement(\"section\");\n  section3.classList = \"section-steps\";\n  const step3Title = document.createElement(\"h4\");\n  step3Title.textContent = \"STEP-3 (Mix)\";\n  step3Title.classList = \"steps-titles\";\n\n  const step3TypesDiv = document.createElement(\"div\");\n  const step3Onion = document.createElement(\"p\");\n  step3Onion.textContent = \"Onion 🧅\";\n  const step3Cucumber = document.createElement(\"p\");\n  step3Cucumber.textContent = \"Cucumber 🥒\";\n  const step3Avocado = document.createElement(\"p\");\n  step3Avocado.textContent = \"Avocado 🥑\";\n  const step3Cilantro = document.createElement(\"p\");\n  step3Cilantro.textContent = \"Cilantro 🌿\";\n  step3TypesDiv.appendChild(step3Onion);\n  step3TypesDiv.appendChild(step3Cucumber);\n  step3TypesDiv.appendChild(step3Avocado);\n  step3TypesDiv.appendChild(step3Cilantro);\n  section3.appendChild(step3Title);\n  section3.appendChild(step3TypesDiv);\n  stepsDiv.appendChild(section3);\n\n  const section4 = document.createElement(\"section\");\n  section4.classList = \"section-steps\";\n  const step4Title = document.createElement(\"h4\");\n  step4Title.textContent = \"STEP-4 (Sauce)\";\n  step4Title.classList = \"steps-titles\";\n\n  const step4TypesDiv = document.createElement(\"div\");\n  step4TypesDiv.classList = \"group-size\";\n  const step4AliOli = document.createElement(\"p\");\n  step4AliOli.textContent = \"Spicy AliOli\";\n  const step4Samuray = document.createElement(\"p\");\n  step4Samuray.textContent = \"Samuray\";\n  const step4Volcano = document.createElement(\"p\");\n  step4Volcano.textContent = \"Volcano\";\n  const step4Wasabi = document.createElement(\"p\");\n  step4Wasabi.textContent = \"Wasabi\";\n  step4TypesDiv.appendChild(step4AliOli);\n  step4TypesDiv.appendChild(step4Samuray);\n  step4TypesDiv.appendChild(step4Volcano);\n  step4TypesDiv.appendChild(step4Wasabi);\n  section4.appendChild(step4Title);\n  section4.appendChild(step4TypesDiv);\n  stepsDiv.appendChild(section4);\n\n  const section5 = document.createElement(\"section\");\n  section5.classList = \"section-steps\";\n  const step5Title = document.createElement(\"h4\");\n  step5Title.textContent = \"STEP-5 (Toppings)\";\n  step5Title.classList = \"steps-titles\";\n\n  const step5TypesDiv = document.createElement(\"div\");\n  const step5Sesame = document.createElement(\"p\");\n  step5Sesame.textContent = \"Sesame seeds\";\n  const step5Green = document.createElement(\"p\");\n  step5Green.textContent = \"Green Onion\";\n  const step5Ginger = document.createElement(\"p\");\n  step5Ginger.textContent = \"Ginger\";\n\n  step5TypesDiv.appendChild(step5Sesame);\n  step5TypesDiv.appendChild(step5Green);\n  step5TypesDiv.appendChild(step5Ginger);\n  section5.appendChild(step5Title);\n  section5.appendChild(step5TypesDiv);\n  stepsDiv.appendChild(section5);\n};\n\n\n//# sourceURL=webpack://path-javascript-restaurant-page/./src/menu-page.js?");

/***/ }),

/***/ "./src/images/bowl.png":
/*!*****************************!*\
  !*** ./src/images/bowl.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e7861d37b65646adfbea.png\";\n\n//# sourceURL=webpack://path-javascript-restaurant-page/./src/images/bowl.png?");

/***/ }),

/***/ "./src/images/camping.png":
/*!********************************!*\
  !*** ./src/images/camping.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5ab8d6ed4b3d3f9c30fc.png\";\n\n//# sourceURL=webpack://path-javascript-restaurant-page/./src/images/camping.png?");

/***/ }),

/***/ "./src/images/poke-test.png":
/*!**********************************!*\
  !*** ./src/images/poke-test.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4eb581311960037b9f76.png\";\n\n//# sourceURL=webpack://path-javascript-restaurant-page/./src/images/poke-test.png?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;