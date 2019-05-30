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

/***/ "./src/aModule.js":
/*!************************!*\
  !*** ./src/aModule.js ***!
  \************************/
/*! exports provided: aModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aModule", function() { return aModule; });
const aModule = () => {
  let test = document.getElementById('test');
  test.innerHTML = 'Hello from aModule';

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
/* harmony import */ var _aModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aModule */ "./src/aModule.js");
/* harmony import */ var _setDimensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setDimensions */ "./src/setDimensions.js");
/* harmony import */ var _todoFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoFactory */ "./src/todoFactory.js");
/* harmony import */ var _uniqueId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uniqueId */ "./src/uniqueId.js");





Object(_aModule__WEBPACK_IMPORTED_MODULE_0__["aModule"])();

let todos = [];

const todo1 = Object(_todoFactory__WEBPACK_IMPORTED_MODULE_2__["todoFactory"])(Object(_uniqueId__WEBPACK_IMPORTED_MODULE_3__["uniqueId"])(), 'do laundry', 'description here', 'high', 'regular stuff');
const todo2 = Object(_todoFactory__WEBPACK_IMPORTED_MODULE_2__["todoFactory"])(Object(_uniqueId__WEBPACK_IMPORTED_MODULE_3__["uniqueId"])(), 'wash car', 'description here', 'medium', 'regular stuff');
todo1.output();
todo2.output();

todo1.setTitle('NEW title');
todo1.output();

todos.push(Object(_todoFactory__WEBPACK_IMPORTED_MODULE_2__["todoFactory"])(Object(_uniqueId__WEBPACK_IMPORTED_MODULE_3__["uniqueId"])(), 'unNamed object', 'description here', 'medium', 'some category'));
console.log(todos[0].id);


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
   2. makes value of key dimension related vars available via namespace.
   3. (re)sets onscroll action (which hides / reveals navbar when content
      scrolled), since this involves dimensions proportional to above-mentioned
      dimensions.
   4. detects if device is mobile (by screen size) and adjusts dimensions
      accordingly, including readjusting dimensions if device orientation
      changes (portrait <-> landscape), using onresize action.
   5. TO ADD: Adds a fullscreen toggle icon to navabr in mobile view + related
      functionality. */

const setDimensions = (() => {
  let mobile = false;
  if (screen.width < 801) { mobile = true; }
  let rowH = 50;
  let navFontSize = '30px';

  if (mobile == true && screen.width < screen.height) {
    rowH = 100; // mobile-portrait
    navFontSize = '60px';
  };

  let body = document.getElementsByTagName('body')[0];
  let navbar = document.getElementById('navbar');
  let content = document.getElementById('content');
  let navText = document.getElementById('navText');

  const setCommonDimensions = () => {
    navbar.style.height = `${rowH}px`;
    navbar.style.lineHeight = `${rowH}px`;
    navText.style.fontSize = navFontSize;
    content.style.marginTop = `${rowH}px`;
  };

  const mobileRotate = () => {
    if (rowH == 100 && screen.width >= screen.height) {
      rowH = 50;
      navFontSize = '30px';
      setScroll();
      setCommonDimensions();
    } else if (rowH == 50 && screen.width < screen.height) {
      rowH = 100;
      navFontSize = '60px';
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
        content.style.marginTop = `${rowH}px`;
      } else {
        navbar.style.top = `-${rowH}px`;
        content.style.marginTop = '0px';
      }
      prevScrollpos = currentScrollPos;
    }
  };

  body.onresize = function(){ if (mobile == true) { mobileRotate(); } };

  setScroll();
  setCommonDimensions();

  return { mobile, rowH };
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

  const output = () => console.log(`todo: id: ${id}, title: ${title}, desc: ${description}, priority: ${priority}, category: ${category}`);

  const setTitle = newTitle => title = newTitle;
  const setDescription = newDescription => description = newDescription;
  const setPriority = newPriority => priority = newPriority;
  const setCategory = newCategory => category = newCategory;

  return {
    id, title, description, priority, category,
    setTitle, setDescription, setPriority, setCategory, output };
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
const uniqueId = (function() {
  let count = 0;
  return function() {
    ++count;
    return count;
  };
})();




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXREaW1lbnNpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pcXVlSWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWtCOzs7Ozs7Ozs7Ozs7O0FDZmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDWTtBQUNKO0FBQ047O0FBRXJDLHdEQUFPOztBQUVQOztBQUVBLGNBQWMsZ0VBQVcsQ0FBQywwREFBUTtBQUNsQyxjQUFjLGdFQUFXLENBQUMsMERBQVE7QUFDbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFdBQVcsZ0VBQVcsQ0FBQywwREFBUTtBQUMvQjs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsZUFBZTtBQUMxQztBQUNBOztBQUVBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsS0FBSztBQUNsQyxpQ0FBaUMsS0FBSztBQUN0QztBQUNBLGlDQUFpQyxLQUFLO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLEtBQUs7QUFDMUMsT0FBTztBQUNQLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLHNCQUFzQixnQkFBZ0IsRUFBRTs7QUFFckU7QUFDQTs7QUFFQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7QUN6RXhCO0FBQUE7QUFBQTs7QUFFQSxnREFBZ0QsR0FBRyxXQUFXLE1BQU0sVUFBVSxZQUFZLGNBQWMsU0FBUyxjQUFjLFNBQVM7O0FBRXhJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQjs7Ozs7Ozs7Ozs7OztBQ2R0QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFa0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgYU1vZHVsZSA9ICgpID0+IHtcbiAgbGV0IHRlc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdCcpO1xuICB0ZXN0LmlubmVySFRNTCA9ICdIZWxsbyBmcm9tIGFNb2R1bGUnO1xuXG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgNzA7IGkrKykge1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYS5pbm5lckhUTUwgPSBcInBsYWNlaG9sZGVyIGNvbnRlbnRcIjtcbiAgICBwYXJhLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhKTtcbiAgfVxuXG59O1xuXG5leHBvcnQgeyBhTW9kdWxlIH1cbiIsImltcG9ydCB7IGFNb2R1bGUgfSBmcm9tICcuL2FNb2R1bGUnXG5pbXBvcnQgeyBzZXREaW1lbnNpb25zIH0gZnJvbSAnLi9zZXREaW1lbnNpb25zJ1xuaW1wb3J0IHsgdG9kb0ZhY3RvcnkgfSBmcm9tICcuL3RvZG9GYWN0b3J5J1xuaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tICcuL3VuaXF1ZUlkJ1xuXG5hTW9kdWxlKCk7XG5cbmxldCB0b2RvcyA9IFtdO1xuXG5jb25zdCB0b2RvMSA9IHRvZG9GYWN0b3J5KHVuaXF1ZUlkKCksICdkbyBsYXVuZHJ5JywgJ2Rlc2NyaXB0aW9uIGhlcmUnLCAnaGlnaCcsICdyZWd1bGFyIHN0dWZmJyk7XG5jb25zdCB0b2RvMiA9IHRvZG9GYWN0b3J5KHVuaXF1ZUlkKCksICd3YXNoIGNhcicsICdkZXNjcmlwdGlvbiBoZXJlJywgJ21lZGl1bScsICdyZWd1bGFyIHN0dWZmJyk7XG50b2RvMS5vdXRwdXQoKTtcbnRvZG8yLm91dHB1dCgpO1xuXG50b2RvMS5zZXRUaXRsZSgnTkVXIHRpdGxlJyk7XG50b2RvMS5vdXRwdXQoKTtcblxudG9kb3MucHVzaCh0b2RvRmFjdG9yeSh1bmlxdWVJZCgpLCAndW5OYW1lZCBvYmplY3QnLCAnZGVzY3JpcHRpb24gaGVyZScsICdtZWRpdW0nLCAnc29tZSBjYXRlZ29yeScpKTtcbmNvbnNvbGUubG9nKHRvZG9zWzBdLmlkKTtcbiIsIi8qIHNldERpbWVuc2lvbnMgTW9kdWxlOiBBTiBJSUZFIHdpdGggdGhlIGZvbGxvd2luZyBkaW1lbnNpb24gcmVsYXRlZCByb2xlczpcbiAgIDEuIChyZSlzZXRzIGRpbWVuc2lvbnMgb2YgZWxlbWVudHMgLyBwcm9wZXJ0aWVzIGNvbW1vbiB0byBhbGwgdmlld3M7XG4gICAgICBlLmcuIG5hdmJhciwgcm93IGhlaWdodC5cbiAgIDIuIG1ha2VzIHZhbHVlIG9mIGtleSBkaW1lbnNpb24gcmVsYXRlZCB2YXJzIGF2YWlsYWJsZSB2aWEgbmFtZXNwYWNlLlxuICAgMy4gKHJlKXNldHMgb25zY3JvbGwgYWN0aW9uICh3aGljaCBoaWRlcyAvIHJldmVhbHMgbmF2YmFyIHdoZW4gY29udGVudFxuICAgICAgc2Nyb2xsZWQpLCBzaW5jZSB0aGlzIGludm9sdmVzIGRpbWVuc2lvbnMgcHJvcG9ydGlvbmFsIHRvIGFib3ZlLW1lbnRpb25lZFxuICAgICAgZGltZW5zaW9ucy5cbiAgIDQuIGRldGVjdHMgaWYgZGV2aWNlIGlzIG1vYmlsZSAoYnkgc2NyZWVuIHNpemUpIGFuZCBhZGp1c3RzIGRpbWVuc2lvbnNcbiAgICAgIGFjY29yZGluZ2x5LCBpbmNsdWRpbmcgcmVhZGp1c3RpbmcgZGltZW5zaW9ucyBpZiBkZXZpY2Ugb3JpZW50YXRpb25cbiAgICAgIGNoYW5nZXMgKHBvcnRyYWl0IDwtPiBsYW5kc2NhcGUpLCB1c2luZyBvbnJlc2l6ZSBhY3Rpb24uXG4gICA1LiBUTyBBREQ6IEFkZHMgYSBmdWxsc2NyZWVuIHRvZ2dsZSBpY29uIHRvIG5hdmFiciBpbiBtb2JpbGUgdmlldyArIHJlbGF0ZWRcbiAgICAgIGZ1bmN0aW9uYWxpdHkuICovXG5cbmNvbnN0IHNldERpbWVuc2lvbnMgPSAoKCkgPT4ge1xuICBsZXQgbW9iaWxlID0gZmFsc2U7XG4gIGlmIChzY3JlZW4ud2lkdGggPCA4MDEpIHsgbW9iaWxlID0gdHJ1ZTsgfVxuICBsZXQgcm93SCA9IDUwO1xuICBsZXQgbmF2Rm9udFNpemUgPSAnMzBweCc7XG5cbiAgaWYgKG1vYmlsZSA9PSB0cnVlICYmIHNjcmVlbi53aWR0aCA8IHNjcmVlbi5oZWlnaHQpIHtcbiAgICByb3dIID0gMTAwOyAvLyBtb2JpbGUtcG9ydHJhaXRcbiAgICBuYXZGb250U2l6ZSA9ICc2MHB4JztcbiAgfTtcblxuICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG4gIGxldCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJyk7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgbGV0IG5hdlRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2VGV4dCcpO1xuXG4gIGNvbnN0IHNldENvbW1vbkRpbWVuc2lvbnMgPSAoKSA9PiB7XG4gICAgbmF2YmFyLnN0eWxlLmhlaWdodCA9IGAke3Jvd0h9cHhgO1xuICAgIG5hdmJhci5zdHlsZS5saW5lSGVpZ2h0ID0gYCR7cm93SH1weGA7XG4gICAgbmF2VGV4dC5zdHlsZS5mb250U2l6ZSA9IG5hdkZvbnRTaXplO1xuICAgIGNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gYCR7cm93SH1weGA7XG4gIH07XG5cbiAgY29uc3QgbW9iaWxlUm90YXRlID0gKCkgPT4ge1xuICAgIGlmIChyb3dIID09IDEwMCAmJiBzY3JlZW4ud2lkdGggPj0gc2NyZWVuLmhlaWdodCkge1xuICAgICAgcm93SCA9IDUwO1xuICAgICAgbmF2Rm9udFNpemUgPSAnMzBweCc7XG4gICAgICBzZXRTY3JvbGwoKTtcbiAgICAgIHNldENvbW1vbkRpbWVuc2lvbnMoKTtcbiAgICB9IGVsc2UgaWYgKHJvd0ggPT0gNTAgJiYgc2NyZWVuLndpZHRoIDwgc2NyZWVuLmhlaWdodCkge1xuICAgICAgcm93SCA9IDEwMDtcbiAgICAgIG5hdkZvbnRTaXplID0gJzYwcHgnO1xuICAgICAgc2V0U2Nyb2xsKCk7XG4gICAgICBzZXRDb21tb25EaW1lbnNpb25zKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldFNjcm9sbCA9ICgpID0+IHtcbiAgICB2YXIgcHJldlNjcm9sbHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgaWYgKHByZXZTY3JvbGxwb3MgPiBjdXJyZW50U2Nyb2xsUG9zKSB7XG4gICAgICAgIG5hdmJhci5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgICAgY29udGVudC5zdHlsZS5tYXJnaW5Ub3AgPSBgJHtyb3dIfXB4YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdmJhci5zdHlsZS50b3AgPSBgLSR7cm93SH1weGA7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gJzBweCc7XG4gICAgICB9XG4gICAgICBwcmV2U2Nyb2xscG9zID0gY3VycmVudFNjcm9sbFBvcztcbiAgICB9XG4gIH07XG5cbiAgYm9keS5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCl7IGlmIChtb2JpbGUgPT0gdHJ1ZSkgeyBtb2JpbGVSb3RhdGUoKTsgfSB9O1xuXG4gIHNldFNjcm9sbCgpO1xuICBzZXRDb21tb25EaW1lbnNpb25zKCk7XG5cbiAgcmV0dXJuIHsgbW9iaWxlLCByb3dIIH07XG59KSgpO1xuXG5leHBvcnQgeyBzZXREaW1lbnNpb25zIH1cbiIsImNvbnN0IHRvZG9GYWN0b3J5ID0gKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjYXRlZ29yeSkgPT4ge1xuXG4gIGNvbnN0IG91dHB1dCA9ICgpID0+IGNvbnNvbGUubG9nKGB0b2RvOiBpZDogJHtpZH0sIHRpdGxlOiAke3RpdGxlfSwgZGVzYzogJHtkZXNjcmlwdGlvbn0sIHByaW9yaXR5OiAke3ByaW9yaXR5fSwgY2F0ZWdvcnk6ICR7Y2F0ZWdvcnl9YCk7XG5cbiAgY29uc3Qgc2V0VGl0bGUgPSBuZXdUaXRsZSA9PiB0aXRsZSA9IG5ld1RpdGxlO1xuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uID0+IGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIGNvbnN0IHNldFByaW9yaXR5ID0gbmV3UHJpb3JpdHkgPT4gcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgY29uc3Qgc2V0Q2F0ZWdvcnkgPSBuZXdDYXRlZ29yeSA9PiBjYXRlZ29yeSA9IG5ld0NhdGVnb3J5O1xuXG4gIHJldHVybiB7XG4gICAgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGNhdGVnb3J5LFxuICAgIHNldFRpdGxlLCBzZXREZXNjcmlwdGlvbiwgc2V0UHJpb3JpdHksIHNldENhdGVnb3J5LCBvdXRwdXQgfTtcbn07XG5cbmV4cG9ydCB7IHRvZG9GYWN0b3J5IH1cbiIsImNvbnN0IHVuaXF1ZUlkID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgY291bnQgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgKytjb3VudDtcbiAgICByZXR1cm4gY291bnQ7XG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyB1bmlxdWVJZCB9XG4iXSwic291cmNlUm9vdCI6IiJ9