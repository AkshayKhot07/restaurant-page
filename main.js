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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nfunction createContact() {\r\n  const somePara = document.createElement(\"p\");\r\n  somePara.textContent =\r\n    \"Contact Contact Contact Contact sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?\";\r\n\r\n  return somePara;\r\n}\r\n\r\nfunction loadContact() {\r\n  const main = document.getElementById(\"main\");\r\n  main.textContent = \"\";\r\n  main.appendChild(createContact());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst menuItems = [\r\n  {\r\n    name: \"Chicken Malai Seekh Biryani\",\r\n    text: \"Tendour Seekh kebabs served with fluffy malai rice and raita\",\r\n    img: \"images/menu-item-1.jpg\",\r\n  },\r\n  {\r\n    name: \"Chicken Tikka Biryani\",\r\n    text: \"Delicious chicken tikka mixed with basmati rice and raita\",\r\n    img: \"images/menu-item-2.jpg\",\r\n  },\r\n  {\r\n    name: \"Chicken Dum Biryani\",\r\n    text: \"Slow cooked biryani with tender chicken pieces served with raita\",\r\n    img: \"images/menu-item-3.jpg\",\r\n  },\r\n  {\r\n    name: \"Chicken Egg Biryani\",\r\n    text: \"Egglicious biryani for our eggitarinas\",\r\n    img: \"images/menu-item-4.jpg\",\r\n  },\r\n  {\r\n    name: \"Chicken Kolkata Biryani\",\r\n    text: \"Peppery chicken biryani served with raita\",\r\n    img: \"images/menu-item-5.jpg\",\r\n  },\r\n  {\r\n    name: \"Chicken Tandoori Biryani\",\r\n    text: \"Our speical chicken tandoori biryani served with raita\",\r\n    img: \"images/menu-item-6.jpg\",\r\n  },\r\n];\r\n\r\nfunction createMenu() {\r\n  const menuContainer = document.createElement(\"div\");\r\n  menuContainer.classList.add(\"menuContainer\");\r\n  menuContainer.setAttribute(\"id\", \"menuContainer\");\r\n\r\n  let menuList = document.createElement(\"div\");\r\n  menuList.classList.add(\"menuList\");\r\n  menuList.setAttribute(\"id\", \"menuList\");\r\n\r\n  //Menu Item\r\n  menuItems.forEach((obj) => {\r\n    let menuItem = `\r\n        <div class=\"menuItem\">\r\n         <img src=${obj.img} class=\"itemImage\"/>\r\n         <h4 class=\"itemName\">${obj.name}</h4>\r\n         <i class=\"itemDesp\">${obj.text}</i>\r\n         </div>\r\n         `;\r\n\r\n    menuList.innerHTML += menuItem;\r\n  });\r\n\r\n  menuContainer.appendChild(menuList);\r\n\r\n  return menuContainer;\r\n}\r\n\r\nfunction loadMenu() {\r\n  const main = document.getElementById(\"main\");\r\n  main.textContent = \"\";\r\n  main.appendChild(createMenu());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createHeader() {\r\n  const header = document.createElement(\"header\");\r\n  header.classList.add(\"header\");\r\n  const restName = document.createElement(\"h1\");\r\n  const btnsDiv = document.createElement(\"div\");\r\n  btnsDiv.classList.add(\"headerBtnsDiv\");\r\n\r\n  restName.textContent = \"Zaikedaar Biryani\";\r\n  header.appendChild(restName);\r\n  header.appendChild(btnsDiv);\r\n\r\n  const homeButton = document.createElement(\"button\");\r\n  homeButton.textContent = \"Home\";\r\n  homeButton.classList.add(\"homeBtn\");\r\n  homeButton.classList.add(\"headerbtn\");\r\n  homeButton.classList.add(\"active\");\r\n\r\n  const menuButton = document.createElement(\"button\");\r\n  menuButton.textContent = \"Menu\";\r\n  menuButton.classList.add(\"menuBtn\");\r\n  menuButton.classList.add(\"headerbtn\");\r\n\r\n  const contactButton = document.createElement(\"button\");\r\n  contactButton.textContent = \"Contact\";\r\n  contactButton.classList.add(\"contactBtn\");\r\n  contactButton.classList.add(\"headerbtn\");\r\n\r\n  btnsDiv.appendChild(homeButton);\r\n  btnsDiv.appendChild(menuButton);\r\n  btnsDiv.appendChild(contactButton);\r\n\r\n  return header;\r\n}\r\n\r\nfunction createMain() {\r\n  const main = document.createElement(\"main\");\r\n  main.classList.add(\"main\");\r\n  main.setAttribute(\"id\", \"main\");\r\n\r\n  return main;\r\n}\r\n\r\nfunction createFooter() {\r\n  const footer = document.createElement(\"footer\");\r\n  footer.classList.add(\"footer\");\r\n  footer.setAttribute(\"id\", \"footer\");\r\n\r\n  const footerText = document.createElement(\"p\");\r\n  footerText.textContent = \"Copyright ©️ Zaikedaar Biryani, Made with Love 💖\";\r\n\r\n  footer.appendChild(footerText);\r\n\r\n  return footer;\r\n}\r\n\r\nfunction loadSelectedPage() {\r\n  let selectedPage;\r\n\r\n  const homeBtn = document.querySelector(\".homeBtn\");\r\n  const menuBtn = document.querySelector(\".menuBtn\");\r\n  const contactBtn = document.querySelector(\".contactBtn\");\r\n\r\n  const headerBtns = Array.from(document.querySelectorAll(\".headerbtn\"));\r\n  headerBtns.forEach((button) => {\r\n    button.addEventListener(\"click\", function (e) {\r\n      if (e.target.classList.contains(\"homeBtn\")) {\r\n        selectedPage = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        homeBtn.classList.add(\"active\");\r\n        menuBtn.classList.remove(\"active\");\r\n        contactBtn.classList.remove(\"active\");\r\n      } else if (e.target.classList.contains(\"menuBtn\")) {\r\n        selectedPage = (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n        menuBtn.classList.add(\"active\");\r\n        homeBtn.classList.remove(\"active\");\r\n        contactBtn.classList.remove(\"active\");\r\n      } else if (e.target.classList.contains(\"contactBtn\")) {\r\n        selectedPage = (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n        contactBtn.classList.add(\"active\");\r\n        homeBtn.classList.remove(\"active\");\r\n        menuBtn.classList.remove(\"active\");\r\n      }\r\n    });\r\n\r\n    return selectedPage;\r\n  });\r\n}\r\n\r\nfunction initializeWebsite() {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  content.appendChild(createHeader());\r\n  content.appendChild(createMain());\r\n  content.appendChild(createFooter());\r\n\r\n  (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  loadSelectedPage();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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