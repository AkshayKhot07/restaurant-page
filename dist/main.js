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

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nfunction homepageContent() {\r\n  const homeMainContainer = document.createElement(\"div\");\r\n  homeMainContainer.classList.add(\"home-main-container\");\r\n  homeMainContainer.setAttribute(\"id\", \"home-main-container\");\r\n\r\n  const homeImgDiv = document.createElement(\"div\");\r\n  homeImgDiv.classList.add(\"home-image\");\r\n  homeImgDiv.setAttribute(\"id\", \"home-image\");\r\n\r\n  const homeImgEl = document.createElement(\"img\");\r\n  homeImgEl.src = `images/homecover.png`;\r\n  homeImgDiv.appendChild(homeImgEl);\r\n\r\n  const homeContentDiv = document.createElement(\"div\");\r\n  homeContentDiv.classList.add(\"home-content\");\r\n  homeContentDiv.setAttribute(\"id\", \"home-content\");\r\n\r\n  const homeContentP = document.createElement(\"p\");\r\n  var newline = \"\\r\\n\";\r\n  var nbsp = \"\\u00a0\";\r\n  homeContentP.textContent =\r\n    \"Wide range of biryanis to choose from, which tantalizes your taste buds and satisfies you in all possible ways 😻\" +\r\n    newline +\r\n    \"Tender seekh kebabs, lamp chops that just melts in your mouth and smoothly slides in your tummy 🍖\" +\r\n    newline +\r\n    \"Multicolor fluffy long grained rice which awakens your senses and makes you feel all alive 🍚\" +\r\n    newline +\r\n    \"A true haven for meat lovers 🤸‍♂️💝\";\r\n  homeContentDiv.appendChild(homeContentP);\r\n\r\n  homeMainContainer.appendChild(homeImgDiv);\r\n  homeMainContainer.appendChild(homeContentDiv);\r\n\r\n  return homeMainContainer;\r\n}\r\n\r\nfunction loadhomepage() {\r\n  const main = document.getElementById(\"main\");\r\n  main.textContent = \"\";\r\n  main.appendChild(homepageContent());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadhomepage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ \"./src/website.js\");\n\r\n\r\n(0,_website_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n\r\n\r\n\r\n\r\nfunction createHeader() {\r\n  const header = document.createElement(\"header\");\r\n  const restName = document.createElement(\"h1\");\r\n  const btnsDiv = document.createElement(\"div\");\r\n  btnsDiv.classList.add(\"headerBtnsDiv\");\r\n\r\n  restName.textContent = \"Zaikedaar Biryani\";\r\n  header.appendChild(restName);\r\n  header.appendChild(btnsDiv);\r\n\r\n  const homeButton = document.createElement(\"button\");\r\n  homeButton.textContent = \"Home\";\r\n  homeButton.classList.add(\"homeBtn\");\r\n  homeButton.classList.add(\"navSelector\");\r\n\r\n  const menuButton = document.createElement(\"button\");\r\n  menuButton.textContent = \"Menu\";\r\n  menuButton.classList.add(\"menuBtn\");\r\n\r\n  const contactButton = document.createElement(\"button\");\r\n  contactButton.textContent = \"Contact\";\r\n  contactButton.classList.add(\"contactBtn\");\r\n\r\n  btnsDiv.appendChild(homeButton);\r\n  btnsDiv.appendChild(menuButton);\r\n  btnsDiv.appendChild(contactButton);\r\n\r\n  return header;\r\n}\r\n\r\nfunction createMain() {\r\n  const main = document.createElement(\"main\");\r\n  main.classList.add(\"main\");\r\n  main.setAttribute(\"id\", \"main\");\r\n\r\n  return main;\r\n}\r\n\r\nfunction createFooter() {\r\n  const footer = document.createElement(\"footer\");\r\n  footer.classList.add(\"footer\");\r\n  footer.setAttribute(\"id\", \"footer\");\r\n\r\n  const footerText = document.createElement(\"p\");\r\n  footerText.textContent = \"Copyright ©️ Zaikedaar Biryani, Made with Love 💖\";\r\n\r\n  footer.appendChild(footerText);\r\n\r\n  return footer;\r\n}\r\n\r\nfunction initializeWebsite() {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  content.appendChild(createHeader());\r\n  content.appendChild(createMain());\r\n  content.appendChild(createFooter());\r\n\r\n  (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;