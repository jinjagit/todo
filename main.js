/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dummyContent.js":
/*!*****************************!*\
  !*** ./src/dummyContent.js ***!
  \*****************************/
/*! exports provided: dummyContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyContent", function() { return dummyContent; });
const dummyContent = () => {

  let content = document.getElementById('content');

  for(let i = 0; i < 70; i++) {
    const para = document.createElement('p');
    para.innerHTML = "placeholder content";
    para.style.textAlign = "center";
    content.appendChild(para);
  }

};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dummyContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dummyContent */ "./src/dummyContent.js");
/* harmony import */ var _setDimensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setDimensions */ "./src/setDimensions.js");
/* harmony import */ var _todoFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoFactory */ "./src/todoFactory.js");
/* harmony import */ var _uniqueId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uniqueId */ "./src/uniqueId.js");
/* harmony import */ var _todosIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todosIndex */ "./src/todosIndex.js");






//dummyContent();

let todos = [];

// create some example todos and output their properties:

let todosInput = [
  { title: 'do laundry', description: 'remember jeans', priority: 'high',
    category: 'regular stuff' },
  { title: 'wash car', description: 'nil', priority: 'low',
    category: 'regular stuff' },
  { title: 'buy beer', description: 'Kronenberg', priority: 'medium',
    category: 'regular stuff' }
];

for (let i = 0; i < todosInput.length; i++) {
  todos.push(
    Object(_todoFactory__WEBPACK_IMPORTED_MODULE_2__["todoFactory"])(Object(_uniqueId__WEBPACK_IMPORTED_MODULE_3__["uniqueId"])(), todosInput[i].title, todosInput[i].description,
    todosInput[i].priority, todosInput[i].category
  ));
}

for (let i = 0; i < todosInput.length; i++) {
  todos[i].output();
}

// display todos on page:

Object(_todosIndex__WEBPACK_IMPORTED_MODULE_4__["todosIndex"])(todos, _setDimensions__WEBPACK_IMPORTED_MODULE_1__["setDimensions"].fontSize, _setDimensions__WEBPACK_IMPORTED_MODULE_1__["setDimensions"].rowH);


/***/ }),

/***/ "./src/setDimensions.js":
/*!******************************!*\
  !*** ./src/setDimensions.js ***!
  \******************************/
/*! exports provided: setDimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDimensions", function() { return setDimensions; });
/* setDimensions Module: AN IIFE with the following dimension related roles:
   1. (re)sets dimensions of elements / properties common to all views;
      e.g. navbar, row height.
   2. makes values of key dimension related vars available via namespace.
   3. (re)sets onscroll action (which hides / reveals navbar when content
      scrolled), since this involves dimensions proportional to above-mentioned
      dimensions.
   4. detects if device is mobile (by screen size) and adjusts dimensions
      accordingly, including readjusting dimensions if device orientation
      changes (portrait <-> landscape), using onresize action.
   5. TO ADD: Adds a fullscreen toggle icon to navbar in mobile view + related
      functionality. */

const setDimensions = (() => {
  let mobile = false;
  if (screen.width < 801) { mobile = true; }
  let rowH = '50px';
  let fontSize = '30px';

  if (mobile == true && screen.width < screen.height) {
    rowH = '50px'; // mobile-portrait
    fontSize = '30px';
  };

  let body = document.getElementsByTagName('body')[0];
  let navbar = document.getElementById('navbar');
  let content = document.getElementById('content');
  let navText = document.getElementById('navText');

  const setCommonDimensions = () => {
    navbar.style.height = rowH;
    navbar.style.lineHeight = rowH;
    navText.style.fontSize = fontSize;
    content.style.marginTop = rowH;
  };

  const mobileRotate = () => {
    if (rowH == '100px' && screen.width >= screen.height) {
      rowH = '50px';
      fontSize = '30px';
      setScroll();
      setCommonDimensions();
    } else if (rowH == '50px' && screen.width < screen.height) {
      rowH = '50px';
      fontSize = '30px';
      setScroll();
      setCommonDimensions();
    }
  };

  const setScroll = () => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
        content.style.marginTop = rowH;
      } else {
        navbar.style.top = rowH;
        content.style.marginTop = '0px';
      }
      prevScrollpos = currentScrollPos;
    }
  };

  body.onresize = function(){ if (mobile == true) { mobileRotate(); } };

  setScroll();
  setCommonDimensions();

  return { mobile, rowH, fontSize };
})();




/***/ }),

/***/ "./src/todoFactory.js":
/*!****************************!*\
  !*** ./src/todoFactory.js ***!
  \****************************/
/*! exports provided: todoFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoFactory", function() { return todoFactory; });
const todoFactory = (id, title, description, priority, category) => {

  const output = () => console.log(`id: ${id}, title: ${title}, desc: ${description}, priority: ${priority}, category: ${category}`);

  const setTitle = newTitle => title = newTitle;
  const setDescription = newDescription => description = newDescription;
  const setPriority = newPriority => priority = newPriority;
  const setCategory = newCategory => category = newCategory;

  return {
    id, title, description, priority, category,
    setTitle, setDescription, setPriority, setCategory, output };
};




/***/ }),

/***/ "./src/todosIndex.js":
/*!***************************!*\
  !*** ./src/todosIndex.js ***!
  \***************************/
/*! exports provided: todosIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todosIndex", function() { return todosIndex; });
const todosIndex = (todos, fontSize, rowH) => {
  let content = document.getElementById('content');

  for(let i = 0; i < todos.length; i++) {
    let div = document.createElement('div');
    div.style.height = rowH;
    let para = document.createElement('p');
    para.style.fontSize = fontSize;
    para.innerHTML = todos[i].title;
    content.appendChild(div);
    div.appendChild(para);
  }

};




/***/ }),

/***/ "./src/uniqueId.js":
/*!*************************!*\
  !*** ./src/uniqueId.js ***!
  \*************************/
/*! exports provided: uniqueId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return uniqueId; });
const uniqueId = (() => {
  let count = 0;
  return () => {
    ++count;
    return count;
  };
})();




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R1bW15Q29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldERpbWVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZG9GYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy90b2Rvc0luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91bmlxdWVJZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTs7QUFFQTs7QUFFQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUV1Qjs7Ozs7Ozs7Ozs7OztBQ2J2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkM7QUFDRTtBQUNKO0FBQ047QUFDSTs7QUFFekM7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsK0JBQStCO0FBQy9CLEdBQUc7QUFDSCwrQkFBK0I7QUFDL0IsR0FBRztBQUNIO0FBQ0E7O0FBRUEsZUFBZSx1QkFBdUI7QUFDdEM7QUFDQSxJQUFJLGdFQUFXLENBQUMsMERBQVE7QUFDeEI7QUFDQTtBQUNBOztBQUVBLGVBQWUsdUJBQXVCO0FBQ3RDO0FBQ0E7O0FBRUE7O0FBRUEsOERBQVUsUUFBUSw0REFBYSxXQUFXLDREQUFhOzs7Ozs7Ozs7Ozs7O0FDbEN2RDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsZUFBZTtBQUMxQztBQUNBOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixzQkFBc0IsZ0JBQWdCLEVBQUU7O0FBRXJFO0FBQ0E7O0FBRUEsVUFBVTtBQUNWLENBQUM7O0FBRXVCOzs7Ozs7Ozs7Ozs7O0FDekV4QjtBQUFBO0FBQUE7O0FBRUEsMENBQTBDLEdBQUcsV0FBVyxNQUFNLFVBQVUsWUFBWSxjQUFjLFNBQVMsY0FBYyxTQUFTOztBQUVsSTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0I7Ozs7Ozs7Ozs7Ozs7QUNkdEI7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVxQjs7Ozs7Ozs7Ozs7OztBQ2ZyQjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFa0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgZHVtbXlDb250ZW50ID0gKCkgPT4ge1xuXG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgNzA7IGkrKykge1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYS5pbm5lckhUTUwgPSBcInBsYWNlaG9sZGVyIGNvbnRlbnRcIjtcbiAgICBwYXJhLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhKTtcbiAgfVxuXG59O1xuXG5leHBvcnQgeyBkdW1teUNvbnRlbnQgfVxuIiwiaW1wb3J0IHsgZHVtbXlDb250ZW50IH0gZnJvbSAnLi9kdW1teUNvbnRlbnQnXG5pbXBvcnQgeyBzZXREaW1lbnNpb25zIH0gZnJvbSAnLi9zZXREaW1lbnNpb25zJ1xuaW1wb3J0IHsgdG9kb0ZhY3RvcnkgfSBmcm9tICcuL3RvZG9GYWN0b3J5J1xuaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tICcuL3VuaXF1ZUlkJ1xuaW1wb3J0IHsgdG9kb3NJbmRleCB9IGZyb20gJy4vdG9kb3NJbmRleCdcblxuLy9kdW1teUNvbnRlbnQoKTtcblxubGV0IHRvZG9zID0gW107XG5cbi8vIGNyZWF0ZSBzb21lIGV4YW1wbGUgdG9kb3MgYW5kIG91dHB1dCB0aGVpciBwcm9wZXJ0aWVzOlxuXG5sZXQgdG9kb3NJbnB1dCA9IFtcbiAgeyB0aXRsZTogJ2RvIGxhdW5kcnknLCBkZXNjcmlwdGlvbjogJ3JlbWVtYmVyIGplYW5zJywgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICBjYXRlZ29yeTogJ3JlZ3VsYXIgc3R1ZmYnIH0sXG4gIHsgdGl0bGU6ICd3YXNoIGNhcicsIGRlc2NyaXB0aW9uOiAnbmlsJywgcHJpb3JpdHk6ICdsb3cnLFxuICAgIGNhdGVnb3J5OiAncmVndWxhciBzdHVmZicgfSxcbiAgeyB0aXRsZTogJ2J1eSBiZWVyJywgZGVzY3JpcHRpb246ICdLcm9uZW5iZXJnJywgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgIGNhdGVnb3J5OiAncmVndWxhciBzdHVmZicgfVxuXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvc0lucHV0Lmxlbmd0aDsgaSsrKSB7XG4gIHRvZG9zLnB1c2goXG4gICAgdG9kb0ZhY3RvcnkodW5pcXVlSWQoKSwgdG9kb3NJbnB1dFtpXS50aXRsZSwgdG9kb3NJbnB1dFtpXS5kZXNjcmlwdGlvbixcbiAgICB0b2Rvc0lucHV0W2ldLnByaW9yaXR5LCB0b2Rvc0lucHV0W2ldLmNhdGVnb3J5XG4gICkpO1xufVxuXG5mb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zSW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgdG9kb3NbaV0ub3V0cHV0KCk7XG59XG5cbi8vIGRpc3BsYXkgdG9kb3Mgb24gcGFnZTpcblxudG9kb3NJbmRleCh0b2Rvcywgc2V0RGltZW5zaW9ucy5mb250U2l6ZSwgc2V0RGltZW5zaW9ucy5yb3dIKTtcbiIsIi8qIHNldERpbWVuc2lvbnMgTW9kdWxlOiBBTiBJSUZFIHdpdGggdGhlIGZvbGxvd2luZyBkaW1lbnNpb24gcmVsYXRlZCByb2xlczpcbiAgIDEuIChyZSlzZXRzIGRpbWVuc2lvbnMgb2YgZWxlbWVudHMgLyBwcm9wZXJ0aWVzIGNvbW1vbiB0byBhbGwgdmlld3M7XG4gICAgICBlLmcuIG5hdmJhciwgcm93IGhlaWdodC5cbiAgIDIuIG1ha2VzIHZhbHVlcyBvZiBrZXkgZGltZW5zaW9uIHJlbGF0ZWQgdmFycyBhdmFpbGFibGUgdmlhIG5hbWVzcGFjZS5cbiAgIDMuIChyZSlzZXRzIG9uc2Nyb2xsIGFjdGlvbiAod2hpY2ggaGlkZXMgLyByZXZlYWxzIG5hdmJhciB3aGVuIGNvbnRlbnRcbiAgICAgIHNjcm9sbGVkKSwgc2luY2UgdGhpcyBpbnZvbHZlcyBkaW1lbnNpb25zIHByb3BvcnRpb25hbCB0byBhYm92ZS1tZW50aW9uZWRcbiAgICAgIGRpbWVuc2lvbnMuXG4gICA0LiBkZXRlY3RzIGlmIGRldmljZSBpcyBtb2JpbGUgKGJ5IHNjcmVlbiBzaXplKSBhbmQgYWRqdXN0cyBkaW1lbnNpb25zXG4gICAgICBhY2NvcmRpbmdseSwgaW5jbHVkaW5nIHJlYWRqdXN0aW5nIGRpbWVuc2lvbnMgaWYgZGV2aWNlIG9yaWVudGF0aW9uXG4gICAgICBjaGFuZ2VzIChwb3J0cmFpdCA8LT4gbGFuZHNjYXBlKSwgdXNpbmcgb25yZXNpemUgYWN0aW9uLlxuICAgNS4gVE8gQUREOiBBZGRzIGEgZnVsbHNjcmVlbiB0b2dnbGUgaWNvbiB0byBuYXZiYXIgaW4gbW9iaWxlIHZpZXcgKyByZWxhdGVkXG4gICAgICBmdW5jdGlvbmFsaXR5LiAqL1xuXG5jb25zdCBzZXREaW1lbnNpb25zID0gKCgpID0+IHtcbiAgbGV0IG1vYmlsZSA9IGZhbHNlO1xuICBpZiAoc2NyZWVuLndpZHRoIDwgODAxKSB7IG1vYmlsZSA9IHRydWU7IH1cbiAgbGV0IHJvd0ggPSAnNTBweCc7XG4gIGxldCBmb250U2l6ZSA9ICczMHB4JztcblxuICBpZiAobW9iaWxlID09IHRydWUgJiYgc2NyZWVuLndpZHRoIDwgc2NyZWVuLmhlaWdodCkge1xuICAgIHJvd0ggPSAnNTBweCc7IC8vIG1vYmlsZS1wb3J0cmFpdFxuICAgIGZvbnRTaXplID0gJzMwcHgnO1xuICB9O1xuXG4gIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXInKTtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBsZXQgbmF2VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZUZXh0Jyk7XG5cbiAgY29uc3Qgc2V0Q29tbW9uRGltZW5zaW9ucyA9ICgpID0+IHtcbiAgICBuYXZiYXIuc3R5bGUuaGVpZ2h0ID0gcm93SDtcbiAgICBuYXZiYXIuc3R5bGUubGluZUhlaWdodCA9IHJvd0g7XG4gICAgbmF2VGV4dC5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgIGNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gcm93SDtcbiAgfTtcblxuICBjb25zdCBtb2JpbGVSb3RhdGUgPSAoKSA9PiB7XG4gICAgaWYgKHJvd0ggPT0gJzEwMHB4JyAmJiBzY3JlZW4ud2lkdGggPj0gc2NyZWVuLmhlaWdodCkge1xuICAgICAgcm93SCA9ICc1MHB4JztcbiAgICAgIGZvbnRTaXplID0gJzMwcHgnO1xuICAgICAgc2V0U2Nyb2xsKCk7XG4gICAgICBzZXRDb21tb25EaW1lbnNpb25zKCk7XG4gICAgfSBlbHNlIGlmIChyb3dIID09ICc1MHB4JyAmJiBzY3JlZW4ud2lkdGggPCBzY3JlZW4uaGVpZ2h0KSB7XG4gICAgICByb3dIID0gJzUwcHgnO1xuICAgICAgZm9udFNpemUgPSAnMzBweCc7XG4gICAgICBzZXRTY3JvbGwoKTtcbiAgICAgIHNldENvbW1vbkRpbWVuc2lvbnMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0U2Nyb2xsID0gKCkgPT4ge1xuICAgIHZhciBwcmV2U2Nyb2xscG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICBpZiAocHJldlNjcm9sbHBvcyA+IGN1cnJlbnRTY3JvbGxQb3MpIHtcbiAgICAgICAgbmF2YmFyLnN0eWxlLnRvcCA9IFwiMFwiO1xuICAgICAgICBjb250ZW50LnN0eWxlLm1hcmdpblRvcCA9IHJvd0g7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYXZiYXIuc3R5bGUudG9wID0gcm93SDtcbiAgICAgICAgY29udGVudC5zdHlsZS5tYXJnaW5Ub3AgPSAnMHB4JztcbiAgICAgIH1cbiAgICAgIHByZXZTY3JvbGxwb3MgPSBjdXJyZW50U2Nyb2xsUG9zO1xuICAgIH1cbiAgfTtcblxuICBib2R5Lm9ucmVzaXplID0gZnVuY3Rpb24oKXsgaWYgKG1vYmlsZSA9PSB0cnVlKSB7IG1vYmlsZVJvdGF0ZSgpOyB9IH07XG5cbiAgc2V0U2Nyb2xsKCk7XG4gIHNldENvbW1vbkRpbWVuc2lvbnMoKTtcblxuICByZXR1cm4geyBtb2JpbGUsIHJvd0gsIGZvbnRTaXplIH07XG59KSgpO1xuXG5leHBvcnQgeyBzZXREaW1lbnNpb25zIH1cbiIsImNvbnN0IHRvZG9GYWN0b3J5ID0gKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjYXRlZ29yeSkgPT4ge1xuXG4gIGNvbnN0IG91dHB1dCA9ICgpID0+IGNvbnNvbGUubG9nKGBpZDogJHtpZH0sIHRpdGxlOiAke3RpdGxlfSwgZGVzYzogJHtkZXNjcmlwdGlvbn0sIHByaW9yaXR5OiAke3ByaW9yaXR5fSwgY2F0ZWdvcnk6ICR7Y2F0ZWdvcnl9YCk7XG5cbiAgY29uc3Qgc2V0VGl0bGUgPSBuZXdUaXRsZSA9PiB0aXRsZSA9IG5ld1RpdGxlO1xuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uID0+IGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIGNvbnN0IHNldFByaW9yaXR5ID0gbmV3UHJpb3JpdHkgPT4gcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgY29uc3Qgc2V0Q2F0ZWdvcnkgPSBuZXdDYXRlZ29yeSA9PiBjYXRlZ29yeSA9IG5ld0NhdGVnb3J5O1xuXG4gIHJldHVybiB7XG4gICAgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGNhdGVnb3J5LFxuICAgIHNldFRpdGxlLCBzZXREZXNjcmlwdGlvbiwgc2V0UHJpb3JpdHksIHNldENhdGVnb3J5LCBvdXRwdXQgfTtcbn07XG5cbmV4cG9ydCB7IHRvZG9GYWN0b3J5IH1cbiIsImNvbnN0IHRvZG9zSW5kZXggPSAodG9kb3MsIGZvbnRTaXplLCByb3dIKSA9PiB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnN0eWxlLmhlaWdodCA9IHJvd0g7XG4gICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYS5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgIHBhcmEuaW5uZXJIVE1MID0gdG9kb3NbaV0udGl0bGU7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwYXJhKTtcbiAgfVxuXG59O1xuXG5leHBvcnQgeyB0b2Rvc0luZGV4IH1cbiIsImNvbnN0IHVuaXF1ZUlkID0gKCgpID0+IHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgcmV0dXJuICgpID0+IHtcbiAgICArK2NvdW50O1xuICAgIHJldHVybiBjb3VudDtcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHVuaXF1ZUlkIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=