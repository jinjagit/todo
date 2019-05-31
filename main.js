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
/* harmony import */ var _todoFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoFactory */ "./src/todoFactory.js");
/* harmony import */ var _uniqueId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uniqueId */ "./src/uniqueId.js");
/* harmony import */ var _todosIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todosIndex */ "./src/todosIndex.js");






function addEvents() {
  let deletions = document.getElementsByClassName('completed');
  for (let i = 0; i < deletions.length; i++) {
    deletions[i].addEventListener("click", function() {
      let id = this.id.slice(7);
      let checkBox = document.getElementById(this.id);
      checkBox.style.background = "url('../dist/img/tick.jpg')";
      checkBox.style.backgroundSize = 'contain';
      setTimeout(function() {
        todos.splice(todos.indexOf(todos.find(e => e.id == id)), 1);
        let todoDiv = document.getElementById(id);
        todoDiv.parentNode.removeChild(todoDiv);
      }, 300);
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
    Object(_todoFactory__WEBPACK_IMPORTED_MODULE_2__["todoFactory"])(Object(_uniqueId__WEBPACK_IMPORTED_MODULE_3__["uniqueId"])(), todosInput[i].title, todosInput[i].description,
    todosInput[i].priority, todosInput[i].project
  ));
}

logTodos();


// display todos on page and add event relevant listeners:

Object(_todosIndex__WEBPACK_IMPORTED_MODULE_4__["todosIndex"])(todos);
addEvents();



// add placeholder content, for testing of navbar hide/reveal on scroll

Object(_dummyContent__WEBPACK_IMPORTED_MODULE_0__["dummyContent"])();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R1bW15Q29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldFNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9kb0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZG9zSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXF1ZUlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBOztBQUVBOztBQUVBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRXVCOzs7Ozs7Ozs7Ozs7O0FDYnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2QztBQUNOO0FBQ0k7QUFDTjtBQUNJOztBQUV6QztBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCw4QkFBOEI7QUFDOUIsR0FBRztBQUNILDhCQUE4QjtBQUM5QixHQUFHO0FBQ0g7QUFDQTs7QUFFQSxlQUFlLHVCQUF1QjtBQUN0QztBQUNBLElBQUksZ0VBQVcsQ0FBQywwREFBUTtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBLDhEQUFVO0FBQ1Y7Ozs7QUFJQTs7QUFFQSxrRUFBWTs7Ozs7Ozs7Ozs7OztBQzdEWjtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7QUNsQnBCO0FBQUE7QUFBQTs7QUFFQSwwQ0FBMEMsR0FBRyxXQUFXLE1BQU0sVUFBVSxZQUFZLGNBQWMsU0FBUyxhQUFhLFFBQVE7O0FBRWhJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQjs7Ozs7Ozs7Ozs7OztBQ2R0QjtBQUFBO0FBQUE7QUFDQTs7QUFFQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0EsNkJBQTZCLFlBQVk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFCOzs7Ozs7Ozs7Ozs7O0FDbEJyQjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFa0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgZHVtbXlDb250ZW50ID0gKCkgPT4ge1xuXG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgNzA7IGkrKykge1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYS5pbm5lckhUTUwgPSBcInBsYWNlaG9sZGVyIGNvbnRlbnRcIjtcbiAgICBwYXJhLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhKTtcbiAgfVxuXG59O1xuXG5leHBvcnQgeyBkdW1teUNvbnRlbnQgfVxuIiwiaW1wb3J0IHsgZHVtbXlDb250ZW50IH0gZnJvbSAnLi9kdW1teUNvbnRlbnQnXG5pbXBvcnQgeyBzZXRTY3JvbGwgfSBmcm9tICcuL3NldFNjcm9sbCdcbmltcG9ydCB7IHRvZG9GYWN0b3J5IH0gZnJvbSAnLi90b2RvRmFjdG9yeSdcbmltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSAnLi91bmlxdWVJZCdcbmltcG9ydCB7IHRvZG9zSW5kZXggfSBmcm9tICcuL3RvZG9zSW5kZXgnXG5cbmZ1bmN0aW9uIGFkZEV2ZW50cygpIHtcbiAgbGV0IGRlbGV0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbXBsZXRlZCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbGV0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGRlbGV0aW9uc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgaWQgPSB0aGlzLmlkLnNsaWNlKDcpO1xuICAgICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICBjaGVja0JveC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ1cmwoJy4uL2Rpc3QvaW1nL3RpY2suanBnJylcIjtcbiAgICAgIGNoZWNrQm94LnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvbnRhaW4nO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdG9kb3Muc3BsaWNlKHRvZG9zLmluZGV4T2YodG9kb3MuZmluZChlID0+IGUuaWQgPT0gaWQpKSwgMSk7XG4gICAgICAgIGxldCB0b2RvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICB0b2RvRGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodG9kb0Rpdik7XG4gICAgICB9LCAzMDApO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvZ1RvZG9zKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgdG9kb3NbaV0ub3V0cHV0KCk7XG4gIH1cbn1cblxubGV0IHRvZG9zID0gW107XG5cbi8vIGNyZWF0ZSBzb21lIGV4YW1wbGUgdG9kb3MgYW5kIGxvZyB0aGVpciBwcm9wZXJ0aWVzIHRvIGNvbnNvbGU6XG5cbmxldCB0b2Rvc0lucHV0ID0gW1xuICB7IHRpdGxlOiAnZG8gbGF1bmRyeScsIGRlc2NyaXB0aW9uOiAncmVtZW1iZXIgamVhbnMnLCBwcmlvcml0eTogJ2hpZ2gnLFxuICAgIHByb2plY3Q6ICdyZWd1bGFyIHN0dWZmJyB9LFxuICB7IHRpdGxlOiAnd2FzaCBjYXInLCBkZXNjcmlwdGlvbjogJ25pbCcsIHByaW9yaXR5OiAnbG93JyxcbiAgICBwcm9qZWN0OiAncmVndWxhciBzdHVmZicgfSxcbiAgeyB0aXRsZTogJ2J1eSBiZWVyJywgZGVzY3JpcHRpb246ICdLcm9uZW5iZXJnJywgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgIHByb2plY3Q6ICdyZWd1bGFyIHN0dWZmJyB9XG5dO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zSW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgdG9kb3MucHVzaChcbiAgICB0b2RvRmFjdG9yeSh1bmlxdWVJZCgpLCB0b2Rvc0lucHV0W2ldLnRpdGxlLCB0b2Rvc0lucHV0W2ldLmRlc2NyaXB0aW9uLFxuICAgIHRvZG9zSW5wdXRbaV0ucHJpb3JpdHksIHRvZG9zSW5wdXRbaV0ucHJvamVjdFxuICApKTtcbn1cblxubG9nVG9kb3MoKTtcblxuXG4vLyBkaXNwbGF5IHRvZG9zIG9uIHBhZ2UgYW5kIGFkZCBldmVudCByZWxldmFudCBsaXN0ZW5lcnM6XG5cbnRvZG9zSW5kZXgodG9kb3MpO1xuYWRkRXZlbnRzKCk7XG5cblxuXG4vLyBhZGQgcGxhY2Vob2xkZXIgY29udGVudCwgZm9yIHRlc3Rpbmcgb2YgbmF2YmFyIGhpZGUvcmV2ZWFsIG9uIHNjcm9sbFxuXG5kdW1teUNvbnRlbnQoKTtcbiIsImNvbnN0IHNldFNjcm9sbCA9ICgoKSA9PiB7XG4gIGxldCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJyk7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICB2YXIgcHJldlNjcm9sbHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgaWYgKHByZXZTY3JvbGxwb3MgPiBjdXJyZW50U2Nyb2xsUG9zKSB7XG4gICAgICBuYXZiYXIuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgICBjb250ZW50LnN0eWxlLm1hcmdpblRvcCA9ICc1MHB4JztcbiAgICB9IGVsc2Uge1xuICAgICAgbmF2YmFyLnN0eWxlLnRvcCA9ICctNTBweCc7XG4gICAgICBjb250ZW50LnN0eWxlLm1hcmdpblRvcCA9ICcwcHgnO1xuICAgIH1cbiAgICBwcmV2U2Nyb2xscG9zID0gY3VycmVudFNjcm9sbFBvcztcbiAgfVxufSkoKTtcblxuZXhwb3J0IHsgc2V0U2Nyb2xsIH1cbiIsImNvbnN0IHRvZG9GYWN0b3J5ID0gKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0KSA9PiB7XG5cbiAgY29uc3Qgb3V0cHV0ID0gKCkgPT4gY29uc29sZS5sb2coYGlkOiAke2lkfSwgdGl0bGU6ICR7dGl0bGV9LCBkZXNjOiAke2Rlc2NyaXB0aW9ufSwgcHJpb3JpdHk6ICR7cHJpb3JpdHl9LCBwcm9qZWN0OiAke3Byb2plY3R9YCk7XG5cbiAgY29uc3Qgc2V0VGl0bGUgPSBuZXdUaXRsZSA9PiB0aXRsZSA9IG5ld1RpdGxlO1xuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uID0+IGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIGNvbnN0IHNldFByaW9yaXR5ID0gbmV3UHJpb3JpdHkgPT4gcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgY29uc3Qgc2V0UHJvamVjdCA9IG5ld1Byb2plY3QgPT4gcHJvamVjdCA9IG5ld1Byb2plY3Q7XG5cbiAgcmV0dXJuIHtcbiAgICBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCxcbiAgICBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldFByaW9yaXR5LCBzZXRQcm9qZWN0LCBvdXRwdXQgfTtcbn07XG5cbmV4cG9ydCB7IHRvZG9GYWN0b3J5IH1cbiIsImNvbnN0IHRvZG9zSW5kZXggPSAodG9kb3MpID0+IHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWluVG9kb0RpdicpO1xuICAgIGRpdi5pZCA9IGAke3RvZG9zW2ldLmlkfWA7XG4gICAgbGV0IGNvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbXBsZXRlZC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICBjb21wbGV0ZWQuaWQgPSBgZGVsZXRlXyR7dG9kb3NbaV0uaWR9YDtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IHRvZG9zW2ldLnRpdGxlO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVkKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICB9XG59O1xuXG5leHBvcnQgeyB0b2Rvc0luZGV4IH1cbiIsImNvbnN0IHVuaXF1ZUlkID0gKCgpID0+IHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgcmV0dXJuICgpID0+IHtcbiAgICArK2NvdW50O1xuICAgIHJldHVybiBjb3VudDtcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHVuaXF1ZUlkIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=