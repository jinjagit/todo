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
  document.getElementById('plusSign').addEventListener("click", function() {
    console.log('clicked +');
  });
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

Object(_todosIndex__WEBPACK_IMPORTED_MODULE_4__["todosIndex"])(todos, 'All todo items');
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
  checkBox.style.background = "url('../img/tick.jpg')";
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
const todosIndex = (todos, project) => {
  let content = document.getElementById('content');
  let topDiv = document.createElement('div');
  topDiv.id = 'topDiv';
  let heading = document.createElement('h2');
  heading.innerHTML = `${project}:`;
  heading.id = 'heading';
  topDiv.appendChild(heading);
  content.appendChild(topDiv);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R1bW15Q29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldFNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9kb0RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9kb0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZG9zSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXF1ZUlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBOztBQUVBOztBQUVBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRXVCOzs7Ozs7Ozs7Ozs7O0FDYnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZDO0FBQ047QUFDRjtBQUNNO0FBQ0Y7QUFDQTs7QUFFekM7QUFDQTtBQUNBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQSxjQUFjLDhEQUFVO0FBQ3hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCw4QkFBOEI7QUFDOUIsR0FBRztBQUNILDhCQUE4QjtBQUM5QixHQUFHO0FBQ0g7QUFDQTs7QUFFQSxlQUFlLHVCQUF1QjtBQUN0QztBQUNBLElBQUksZ0VBQVcsQ0FBQywwREFBUTtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBLDhEQUFVO0FBQ1Y7Ozs7QUFJQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7QUNsQnBCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7QUNickI7QUFBQTtBQUFBOztBQUVBLDBDQUEwQyxHQUFHLFdBQVcsTUFBTSxVQUFVLFlBQVksY0FBYyxTQUFTLGFBQWEsUUFBUTs7QUFFaEk7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRXNCOzs7Ozs7Ozs7Ozs7O0FDZHRCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBLGdCQUFnQixZQUFZO0FBQzVCO0FBQ0E7QUFDQSw2QkFBNkIsWUFBWTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7QUNqQ3JCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVrQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBkdW1teUNvbnRlbnQgPSAoKSA9PiB7XG5cbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCA3MDsgaSsrKSB7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhLmlubmVySFRNTCA9IFwicGxhY2Vob2xkZXIgY29udGVudFwiO1xuICAgIHBhcmEuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhcmEpO1xuICB9XG5cbn07XG5cbmV4cG9ydCB7IGR1bW15Q29udGVudCB9XG4iLCJpbXBvcnQgeyBkdW1teUNvbnRlbnQgfSBmcm9tICcuL2R1bW15Q29udGVudCdcbmltcG9ydCB7IHNldFNjcm9sbCB9IGZyb20gJy4vc2V0U2Nyb2xsJ1xuaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tICcuL3VuaXF1ZUlkJ1xuaW1wb3J0IHsgdG9kb0ZhY3RvcnkgfSBmcm9tICcuL3RvZG9GYWN0b3J5J1xuaW1wb3J0IHsgdG9kb3NJbmRleCB9IGZyb20gJy4vdG9kb3NJbmRleCdcbmltcG9ydCB7IHRvZG9EZWxldGUgfSBmcm9tICcuL3RvZG9EZWxldGUnXG5cbmZ1bmN0aW9uIGFkZEV2ZW50cygpIHtcbiAgbGV0IGRlbGV0ZVRvZG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29tcGxldGVkJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsZXRlVG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICBkZWxldGVUb2Rvc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICB0b2RvcyA9IHRvZG9EZWxldGUodG9kb3MsIHRoaXMuaWQpO1xuICAgIH0pO1xuICB9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbHVzU2lnbicpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCArJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2dUb2RvcygpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgIHRvZG9zW2ldLm91dHB1dCgpO1xuICB9XG59XG5cbmxldCB0b2RvcyA9IFtdO1xuXG4vLyBjcmVhdGUgc29tZSBleGFtcGxlIHRvZG9zIGFuZCBsb2cgdGhlaXIgcHJvcGVydGllcyB0byBjb25zb2xlOlxuXG5sZXQgdG9kb3NJbnB1dCA9IFtcbiAgeyB0aXRsZTogJ2RvIGxhdW5kcnknLCBkZXNjcmlwdGlvbjogJ3JlbWVtYmVyIGplYW5zJywgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICBwcm9qZWN0OiAncmVndWxhciBzdHVmZicgfSxcbiAgeyB0aXRsZTogJ3dhc2ggY2FyJywgZGVzY3JpcHRpb246ICduaWwnLCBwcmlvcml0eTogJ2xvdycsXG4gICAgcHJvamVjdDogJ3JlZ3VsYXIgc3R1ZmYnIH0sXG4gIHsgdGl0bGU6ICdidXkgYmVlcicsIGRlc2NyaXB0aW9uOiAnS3JvbmVuYmVyZycsIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICBwcm9qZWN0OiAncmVndWxhciBzdHVmZicgfVxuXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvc0lucHV0Lmxlbmd0aDsgaSsrKSB7XG4gIHRvZG9zLnB1c2goXG4gICAgdG9kb0ZhY3RvcnkodW5pcXVlSWQoKSwgdG9kb3NJbnB1dFtpXS50aXRsZSwgdG9kb3NJbnB1dFtpXS5kZXNjcmlwdGlvbixcbiAgICB0b2Rvc0lucHV0W2ldLnByaW9yaXR5LCB0b2Rvc0lucHV0W2ldLnByb2plY3RcbiAgKSk7XG59XG5cbmxvZ1RvZG9zKCk7XG5cblxuLy8gZGlzcGxheSB0b2RvcyBvbiBwYWdlIGFuZCBhZGQgZXZlbnQgcmVsZXZhbnQgbGlzdGVuZXJzOlxuXG50b2Rvc0luZGV4KHRvZG9zLCAnQWxsIHRvZG8gaXRlbXMnKTtcbmFkZEV2ZW50cygpO1xuXG5cblxuLy8gYWRkIHBsYWNlaG9sZGVyIGNvbnRlbnQsIGZvciB0ZXN0aW5nIG9mIG5hdmJhciBoaWRlL3JldmVhbCBvbiBzY3JvbGxcblxuLy9kdW1teUNvbnRlbnQoKTtcbiIsImNvbnN0IHNldFNjcm9sbCA9ICgoKSA9PiB7XG4gIGxldCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJyk7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICB2YXIgcHJldlNjcm9sbHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgaWYgKHByZXZTY3JvbGxwb3MgPiBjdXJyZW50U2Nyb2xsUG9zKSB7XG4gICAgICBuYXZiYXIuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgICBjb250ZW50LnN0eWxlLm1hcmdpblRvcCA9ICc1MHB4JztcbiAgICB9IGVsc2Uge1xuICAgICAgbmF2YmFyLnN0eWxlLnRvcCA9ICctNTBweCc7XG4gICAgICBjb250ZW50LnN0eWxlLm1hcmdpblRvcCA9ICcwcHgnO1xuICAgIH1cbiAgICBwcmV2U2Nyb2xscG9zID0gY3VycmVudFNjcm9sbFBvcztcbiAgfVxufSkoKTtcblxuZXhwb3J0IHsgc2V0U2Nyb2xsIH1cbiIsImNvbnN0IHRvZG9EZWxldGUgPSAodG9kb3MsIHRoaXNJZCkgPT4ge1xuICBsZXQgaWQgPSB0aGlzSWQuc2xpY2UoNyk7XG4gIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXNJZCk7XG4gIGNoZWNrQm94LnN0eWxlLmJhY2tncm91bmQgPSBcInVybCgnLi4vaW1nL3RpY2suanBnJylcIjtcbiAgY2hlY2tCb3guc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY29udGFpbic7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgdG9kb3Muc3BsaWNlKHRvZG9zLmluZGV4T2YodG9kb3MuZmluZChlID0+IGUuaWQgPT0gaWQpKSwgMSk7XG4gICAgbGV0IHRvZG9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgdG9kb0Rpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvZG9EaXYpO1xuICB9LCAzMDApO1xuICByZXR1cm4gdG9kb3M7XG59O1xuXG5leHBvcnQgeyB0b2RvRGVsZXRlIH1cbiIsImNvbnN0IHRvZG9GYWN0b3J5ID0gKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0KSA9PiB7XG5cbiAgY29uc3Qgb3V0cHV0ID0gKCkgPT4gY29uc29sZS5sb2coYGlkOiAke2lkfSwgdGl0bGU6ICR7dGl0bGV9LCBkZXNjOiAke2Rlc2NyaXB0aW9ufSwgcHJpb3JpdHk6ICR7cHJpb3JpdHl9LCBwcm9qZWN0OiAke3Byb2plY3R9YCk7XG5cbiAgY29uc3Qgc2V0VGl0bGUgPSBuZXdUaXRsZSA9PiB0aXRsZSA9IG5ld1RpdGxlO1xuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uID0+IGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIGNvbnN0IHNldFByaW9yaXR5ID0gbmV3UHJpb3JpdHkgPT4gcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgY29uc3Qgc2V0UHJvamVjdCA9IG5ld1Byb2plY3QgPT4gcHJvamVjdCA9IG5ld1Byb2plY3Q7XG5cbiAgcmV0dXJuIHtcbiAgICBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCxcbiAgICBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldFByaW9yaXR5LCBzZXRQcm9qZWN0LCBvdXRwdXQgfTtcbn07XG5cbmV4cG9ydCB7IHRvZG9GYWN0b3J5IH1cbiIsImNvbnN0IHRvZG9zSW5kZXggPSAodG9kb3MsIHByb2plY3QpID0+IHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBsZXQgdG9wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvcERpdi5pZCA9ICd0b3BEaXYnO1xuICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGhlYWRpbmcuaW5uZXJIVE1MID0gYCR7cHJvamVjdH06YDtcbiAgaGVhZGluZy5pZCA9ICdoZWFkaW5nJztcbiAgdG9wRGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRvcERpdik7XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtaW5Ub2RvRGl2Jyk7XG4gICAgZGl2LmlkID0gYCR7dG9kb3NbaV0uaWR9YDtcbiAgICBsZXQgY29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29tcGxldGVkLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgIGNvbXBsZXRlZC5pZCA9IGBkZWxldGVfJHt0b2Rvc1tpXS5pZH1gO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gdG9kb3NbaV0udGl0bGU7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjb21wbGV0ZWQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIH1cblxuICBsZXQgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdUb2RvLmlkID0gJ25ld1RvZG8nO1xuICBsZXQgcGx1c1NpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBsdXNTaWduLmlkID0gJ3BsdXNTaWduJztcbiAgcGx1c1NpZ24uaW5uZXJIVE1MID0gJysnO1xuICBuZXdUb2RvLmFwcGVuZENoaWxkKHBsdXNTaWduKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbn07XG5cbmV4cG9ydCB7IHRvZG9zSW5kZXggfVxuIiwiY29uc3QgdW5pcXVlSWQgPSAoKCkgPT4ge1xuICBsZXQgY291bnQgPSAwO1xuICByZXR1cm4gKCkgPT4ge1xuICAgICsrY291bnQ7XG4gICAgcmV0dXJuIGNvdW50O1xuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgdW5pcXVlSWQgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==