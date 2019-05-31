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
/* harmony import */ var _setScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setScroll */ "./src/setScroll.js");
/* harmony import */ var _uniqueId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uniqueId */ "./src/uniqueId.js");
/* harmony import */ var _todoFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoFactory */ "./src/todoFactory.js");
/* harmony import */ var _todosIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todosIndex */ "./src/todosIndex.js");
/* harmony import */ var _todoDelete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todoDelete */ "./src/todoDelete.js");







function addEvents() {
  let deleteTodos = document.getElementsByClassName('completed');
  for (let i = 0; i < deleteTodos.length; i++) {
    deleteTodos[i].addEventListener("click", function() {
      todos = Object(_todoDelete__WEBPACK_IMPORTED_MODULE_5__["todoDelete"])(todos, this.id);
    });
  }
}

function logTodos() {
  for (let i = 0; i < todos.length; i++) {
    todos[i].output();
  }
}

let todos = [];

// create some example todos and log their properties to console:

let todosInput = [
  { title: 'do laundry', description: 'remember jeans', priority: 'high',
    project: 'regular stuff' },
  { title: 'wash car', description: 'nil', priority: 'low',
    project: 'regular stuff' },
  { title: 'buy beer', description: 'Kronenberg', priority: 'medium',
    project: 'regular stuff' }
];

for (let i = 0; i < todosInput.length; i++) {
  todos.push(
    Object(_todoFactory__WEBPACK_IMPORTED_MODULE_3__["todoFactory"])(Object(_uniqueId__WEBPACK_IMPORTED_MODULE_2__["uniqueId"])(), todosInput[i].title, todosInput[i].description,
    todosInput[i].priority, todosInput[i].project
  ));
}

logTodos();


// display todos on page and add event relevant listeners:

Object(_todosIndex__WEBPACK_IMPORTED_MODULE_4__["todosIndex"])(todos);
addEvents();



// add placeholder content, for testing of navbar hide/reveal on scroll

//dummyContent();


/***/ }),

/***/ "./src/setScroll.js":
/*!**************************!*\
  !*** ./src/setScroll.js ***!
  \**************************/
/*! exports provided: setScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScroll", function() { return setScroll; });
const setScroll = (() => {
  let navbar = document.getElementById('navbar');
  let content = document.getElementById('content');

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
      content.style.marginTop = '50px';
    } else {
      navbar.style.top = '-50px';
      content.style.marginTop = '0px';
    }
    prevScrollpos = currentScrollPos;
  }
})();




/***/ }),

/***/ "./src/todoDelete.js":
/*!***************************!*\
  !*** ./src/todoDelete.js ***!
  \***************************/
/*! exports provided: todoDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoDelete", function() { return todoDelete; });
const todoDelete = (todos, thisId) => {
  let id = thisId.slice(7);
  let checkBox = document.getElementById(thisId);
  checkBox.style.background = "url('../dist/img/tick.jpg')";
  checkBox.style.backgroundSize = 'contain';
  setTimeout(function() {
    todos.splice(todos.indexOf(todos.find(e => e.id == id)), 1);
    let todoDiv = document.getElementById(id);
    todoDiv.parentNode.removeChild(todoDiv);
  }, 300);
  return todos;
};




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
const todoFactory = (id, title, description, priority, project) => {

  const output = () => console.log(`id: ${id}, title: ${title}, desc: ${description}, priority: ${priority}, project: ${project}`);

  const setTitle = newTitle => title = newTitle;
  const setDescription = newDescription => description = newDescription;
  const setPriority = newPriority => priority = newPriority;
  const setProject = newProject => project = newProject;

  return {
    id, title, description, priority, project,
    setTitle, setDescription, setPriority, setProject, output };
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
const todosIndex = (todos) => {
  let content = document.getElementById('content');

  for(let i = 0; i < todos.length; i++) {
    let div = document.createElement('div');
    div.classList.add('minTodoDiv');
    div.id = `${todos[i].id}`;
    let completed = document.createElement('div');
    completed.classList.add('completed');
    completed.id = `delete_${todos[i].id}`;
    let title = document.createElement('h2');
    title.innerHTML = todos[i].title;
    content.appendChild(div);
    div.appendChild(completed);
    div.appendChild(title);
  }
  let newTodo = document.createElement('div');
  newTodo.id = 'newTodo';
  let plusSign = document.createElement('p');
  plusSign.id = 'plusSign';
  plusSign.innerHTML = '+';
  newTodo.appendChild(plusSign);
  content.appendChild(newTodo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R1bW15Q29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldFNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9kb0RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9kb0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZG9zSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXF1ZUlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBOztBQUVBOztBQUVBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRXVCOzs7Ozs7Ozs7Ozs7O0FDYnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZDO0FBQ047QUFDRjtBQUNNO0FBQ0Y7QUFDQTs7QUFFekM7QUFDQTtBQUNBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQSxjQUFjLDhEQUFVO0FBQ3hCLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsOEJBQThCO0FBQzlCLEdBQUc7QUFDSCw4QkFBOEI7QUFDOUIsR0FBRztBQUNIO0FBQ0E7O0FBRUEsZUFBZSx1QkFBdUI7QUFDdEM7QUFDQSxJQUFJLGdFQUFXLENBQUMsMERBQVE7QUFDeEI7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQSw4REFBVTtBQUNWOzs7O0FBSUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRW1COzs7Ozs7Ozs7Ozs7O0FDbEJwQjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRXFCOzs7Ozs7Ozs7Ozs7O0FDYnJCO0FBQUE7QUFBQTs7QUFFQSwwQ0FBMEMsR0FBRyxXQUFXLE1BQU0sVUFBVSxZQUFZLGNBQWMsU0FBUyxhQUFhLFFBQVE7O0FBRWhJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQjs7Ozs7Ozs7Ozs7OztBQ2R0QjtBQUFBO0FBQUE7QUFDQTs7QUFFQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0EsNkJBQTZCLFlBQVk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7QUN6QnJCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVrQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBkdW1teUNvbnRlbnQgPSAoKSA9PiB7XG5cbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCA3MDsgaSsrKSB7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhLmlubmVySFRNTCA9IFwicGxhY2Vob2xkZXIgY29udGVudFwiO1xuICAgIHBhcmEuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhcmEpO1xuICB9XG5cbn07XG5cbmV4cG9ydCB7IGR1bW15Q29udGVudCB9XG4iLCJpbXBvcnQgeyBkdW1teUNvbnRlbnQgfSBmcm9tICcuL2R1bW15Q29udGVudCdcbmltcG9ydCB7IHNldFNjcm9sbCB9IGZyb20gJy4vc2V0U2Nyb2xsJ1xuaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tICcuL3VuaXF1ZUlkJ1xuaW1wb3J0IHsgdG9kb0ZhY3RvcnkgfSBmcm9tICcuL3RvZG9GYWN0b3J5J1xuaW1wb3J0IHsgdG9kb3NJbmRleCB9IGZyb20gJy4vdG9kb3NJbmRleCdcbmltcG9ydCB7IHRvZG9EZWxldGUgfSBmcm9tICcuL3RvZG9EZWxldGUnXG5cbmZ1bmN0aW9uIGFkZEV2ZW50cygpIHtcbiAgbGV0IGRlbGV0ZVRvZG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29tcGxldGVkJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsZXRlVG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICBkZWxldGVUb2Rvc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICB0b2RvcyA9IHRvZG9EZWxldGUodG9kb3MsIHRoaXMuaWQpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvZ1RvZG9zKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgdG9kb3NbaV0ub3V0cHV0KCk7XG4gIH1cbn1cblxubGV0IHRvZG9zID0gW107XG5cbi8vIGNyZWF0ZSBzb21lIGV4YW1wbGUgdG9kb3MgYW5kIGxvZyB0aGVpciBwcm9wZXJ0aWVzIHRvIGNvbnNvbGU6XG5cbmxldCB0b2Rvc0lucHV0ID0gW1xuICB7IHRpdGxlOiAnZG8gbGF1bmRyeScsIGRlc2NyaXB0aW9uOiAncmVtZW1iZXIgamVhbnMnLCBwcmlvcml0eTogJ2hpZ2gnLFxuICAgIHByb2plY3Q6ICdyZWd1bGFyIHN0dWZmJyB9LFxuICB7IHRpdGxlOiAnd2FzaCBjYXInLCBkZXNjcmlwdGlvbjogJ25pbCcsIHByaW9yaXR5OiAnbG93JyxcbiAgICBwcm9qZWN0OiAncmVndWxhciBzdHVmZicgfSxcbiAgeyB0aXRsZTogJ2J1eSBiZWVyJywgZGVzY3JpcHRpb246ICdLcm9uZW5iZXJnJywgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgIHByb2plY3Q6ICdyZWd1bGFyIHN0dWZmJyB9XG5dO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zSW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgdG9kb3MucHVzaChcbiAgICB0b2RvRmFjdG9yeSh1bmlxdWVJZCgpLCB0b2Rvc0lucHV0W2ldLnRpdGxlLCB0b2Rvc0lucHV0W2ldLmRlc2NyaXB0aW9uLFxuICAgIHRvZG9zSW5wdXRbaV0ucHJpb3JpdHksIHRvZG9zSW5wdXRbaV0ucHJvamVjdFxuICApKTtcbn1cblxubG9nVG9kb3MoKTtcblxuXG4vLyBkaXNwbGF5IHRvZG9zIG9uIHBhZ2UgYW5kIGFkZCBldmVudCByZWxldmFudCBsaXN0ZW5lcnM6XG5cbnRvZG9zSW5kZXgodG9kb3MpO1xuYWRkRXZlbnRzKCk7XG5cblxuXG4vLyBhZGQgcGxhY2Vob2xkZXIgY29udGVudCwgZm9yIHRlc3Rpbmcgb2YgbmF2YmFyIGhpZGUvcmV2ZWFsIG9uIHNjcm9sbFxuXG4vL2R1bW15Q29udGVudCgpO1xuIiwiY29uc3Qgc2V0U2Nyb2xsID0gKCgpID0+IHtcbiAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXInKTtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIHZhciBwcmV2U2Nyb2xscG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBpZiAocHJldlNjcm9sbHBvcyA+IGN1cnJlbnRTY3JvbGxQb3MpIHtcbiAgICAgIG5hdmJhci5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gJzUwcHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXZiYXIuc3R5bGUudG9wID0gJy01MHB4JztcbiAgICAgIGNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gJzBweCc7XG4gICAgfVxuICAgIHByZXZTY3JvbGxwb3MgPSBjdXJyZW50U2Nyb2xsUG9zO1xuICB9XG59KSgpO1xuXG5leHBvcnQgeyBzZXRTY3JvbGwgfVxuIiwiY29uc3QgdG9kb0RlbGV0ZSA9ICh0b2RvcywgdGhpc0lkKSA9PiB7XG4gIGxldCBpZCA9IHRoaXNJZC5zbGljZSg3KTtcbiAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpc0lkKTtcbiAgY2hlY2tCb3guc3R5bGUuYmFja2dyb3VuZCA9IFwidXJsKCcuLi9kaXN0L2ltZy90aWNrLmpwZycpXCI7XG4gIGNoZWNrQm94LnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvbnRhaW4nO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIHRvZG9zLnNwbGljZSh0b2Rvcy5pbmRleE9mKHRvZG9zLmZpbmQoZSA9PiBlLmlkID09IGlkKSksIDEpO1xuICAgIGxldCB0b2RvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIHRvZG9EaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0b2RvRGl2KTtcbiAgfSwgMzAwKTtcbiAgcmV0dXJuIHRvZG9zO1xufTtcblxuZXhwb3J0IHsgdG9kb0RlbGV0ZSB9XG4iLCJjb25zdCB0b2RvRmFjdG9yeSA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCkgPT4ge1xuXG4gIGNvbnN0IG91dHB1dCA9ICgpID0+IGNvbnNvbGUubG9nKGBpZDogJHtpZH0sIHRpdGxlOiAke3RpdGxlfSwgZGVzYzogJHtkZXNjcmlwdGlvbn0sIHByaW9yaXR5OiAke3ByaW9yaXR5fSwgcHJvamVjdDogJHtwcm9qZWN0fWApO1xuXG4gIGNvbnN0IHNldFRpdGxlID0gbmV3VGl0bGUgPT4gdGl0bGUgPSBuZXdUaXRsZTtcbiAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbiA9PiBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICBjb25zdCBzZXRQcmlvcml0eSA9IG5ld1ByaW9yaXR5ID0+IHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gIGNvbnN0IHNldFByb2plY3QgPSBuZXdQcm9qZWN0ID0+IHByb2plY3QgPSBuZXdQcm9qZWN0O1xuXG4gIHJldHVybiB7XG4gICAgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QsXG4gICAgc2V0VGl0bGUsIHNldERlc2NyaXB0aW9uLCBzZXRQcmlvcml0eSwgc2V0UHJvamVjdCwgb3V0cHV0IH07XG59O1xuXG5leHBvcnQgeyB0b2RvRmFjdG9yeSB9XG4iLCJjb25zdCB0b2Rvc0luZGV4ID0gKHRvZG9zKSA9PiB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21pblRvZG9EaXYnKTtcbiAgICBkaXYuaWQgPSBgJHt0b2Rvc1tpXS5pZH1gO1xuICAgIGxldCBjb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb21wbGV0ZWQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgY29tcGxldGVkLmlkID0gYGRlbGV0ZV8ke3RvZG9zW2ldLmlkfWA7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSB0b2Rvc1tpXS50aXRsZTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlZCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgfVxuICBsZXQgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdUb2RvLmlkID0gJ25ld1RvZG8nO1xuICBsZXQgcGx1c1NpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBsdXNTaWduLmlkID0gJ3BsdXNTaWduJztcbiAgcGx1c1NpZ24uaW5uZXJIVE1MID0gJysnO1xuICBuZXdUb2RvLmFwcGVuZENoaWxkKHBsdXNTaWduKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbn07XG5cbmV4cG9ydCB7IHRvZG9zSW5kZXggfVxuIiwiY29uc3QgdW5pcXVlSWQgPSAoKCkgPT4ge1xuICBsZXQgY291bnQgPSAwO1xuICByZXR1cm4gKCkgPT4ge1xuICAgICsrY291bnQ7XG4gICAgcmV0dXJuIGNvdW50O1xuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgdW5pcXVlSWQgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==