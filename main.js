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

/***/ "./src/appRender.js":
/*!**************************!*\
  !*** ./src/appRender.js ***!
  \**************************/
/*! exports provided: appRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRender", function() { return appRender; });
const appRender = (() => {

  // set styling / behaviours common to all views:
  let navbar = document.getElementById('navbar');
  let content = document.getElementById('content');

  // set navbar scroll behaviour (hide / reveal):
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

  // declare functions to common to todosRender and projectsRender modules:

  const clearContent = () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
  };

  // ----------- extras -----------------

  (() => { // Resize: UNUSED
    let navDiv = document.getElementById('navDiv');

      //let titleDiv = document.getElementById('titleDiv');

    const resize = () => { // set navbar titleDiv width:
      if (navDiv.offsetWidth <= 652) {
        //titleDiv.style.width = `${(navDiv.offsetWidth - 173)}px`;
      }
    };

    //resize();
    //document.body.onresize = function(){ resize(); };
  })();

  // DEBUG: create content taller than page to test scroll effects
  const placeholderContent = () => {
    let content = document.getElementById('content');

    let spacer = document.createElement('div');
    spacer.style.height = '30px';
    content.appendChild(spacer);

    for(let i = 0; i < 70; i++) {
      const para = document.createElement('p');
      para.innerHTML = "placeholder content";
      para.style.textAlign = "center";
      content.appendChild(para);
    }

    window.dispatchEvent(new Event('resize'));
  };

  return { clearContent, placeholderContent };

})();




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todosController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todosController */ "./src/todosController.js");
//import { appRender } from './appRender'



_todosController__WEBPACK_IMPORTED_MODULE_0__["todosController"].index('All to-do items');

// add placeholder content, for testing of navbar hide/reveal on scroll:
//appRender.placeholderContent();


/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! exports provided: model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "model", function() { return model; });
const model = (() => {

  let todos = [];
  let projects = [];

  const uniqueId = (() => {
    let count = 0;
    return () => {
      ++count;
      return count;
    };
  })();

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

  // Change this to a check for local storage, etc.
  const createExamples = (() => {
    let todosInput = [
      { title: 'do laundry', description: 'remember jeans', priority: 'high',
        project: 'regular stuff' },
      { title: 'wash car', description: 'nil', priority: 'low',
        project: 'regular stuff' },
      { title: 'buy beer', description: 'Kronenberg', priority: 'medium',
        project: 'regular stuff' },
      { title: 'research functions', description: 'make notes and save links', priority: 'high',
        project: 'write article' },
      { title: 'write body of article', description: 'actually write the thing', priority: 'medium',
        project: 'write article' },
      { title: 'proof read article', description: 'check for errors and bad grammar', priority: 'low',
        project: 'write article' }
    ];

    for (let i = 0; i < todosInput.length; i++) {
      todos.push(
        todoFactory(uniqueId(), todosInput[i].title, todosInput[i].description,
        todosInput[i].priority, todosInput[i].project
      ));
    }

    projects = ['regular stuff', 'write article'];
  })();

  const deleteTodo = (id) => {
    todos.splice(todos.indexOf(todos.find(e => e.id == id)), 1);
  };

  const logTodos = () => {
    console.log('----------');
    for (let i = 0; i < todos.length; i++) {
      todos[i].output();
    }
  };

  return { todos, projects, createExamples, deleteTodo, logTodos };

})();




/***/ }),

/***/ "./src/projectsController.js":
/*!***********************************!*\
  !*** ./src/projectsController.js ***!
  \***********************************/
/*! exports provided: projectsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsController", function() { return projectsController; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _projectsRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectsRender */ "./src/projectsRender.js");



const projectsController = (() => {
  const index = () => {
    _projectsRender__WEBPACK_IMPORTED_MODULE_1__["projectsRender"].index(_model__WEBPACK_IMPORTED_MODULE_0__["model"].projects); // sort alphabetically + add 'all'
  };

  return { index };
})();




/***/ }),

/***/ "./src/projectsRender.js":
/*!*******************************!*\
  !*** ./src/projectsRender.js ***!
  \*******************************/
/*! exports provided: projectsRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsRender", function() { return projectsRender; });
/* harmony import */ var _appRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appRender */ "./src/appRender.js");
/* harmony import */ var _projectsController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectsController */ "./src/projectsController.js");



const projectsRender = (() => {
  const index = (projects) => {
    _appRender__WEBPACK_IMPORTED_MODULE_0__["appRender"].clearContent();
    let content = document.getElementById('content');

    for(let i = 0; i < projects.length; i++) {
      let div = document.createElement('div');
      div.classList.add('itemDiv');
      div.id = `project_${projects[i]}`;
      div.addEventListener("click", function() {
        console.log(`clicked div: ${this.id}`);
      });
      let checkbox = document.createElement('div');
      checkbox.classList.add('checkbox');

      let title = document.createElement('h2');
      title.innerHTML = projects[i];
      content.appendChild(div);
      div.appendChild(checkbox);
      div.appendChild(title);
    }


    // set navbar content & link to projects index
    let msgDiv = document.getElementById('msgDiv');
    msgDiv.style.width = '100%';
    let projectsBtn = document.getElementById('projectsBtn');
    projectsBtn.style.display = 'none';
    let navMsg = document.getElementById('navMsg');
    navMsg.innerHTML = 'Projects';
  };

  return { index };
})();




/***/ }),

/***/ "./src/todosController.js":
/*!********************************!*\
  !*** ./src/todosController.js ***!
  \********************************/
/*! exports provided: todosController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todosController", function() { return todosController; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _todosRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todosRender */ "./src/todosRender.js");



const todosController = (() => {

  const sortByPriority = (todos) => {
    let sorted = [], high = [], medium = [], low = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].priority == 'high') { high.push(todos[i]) }
      else if (todos[i].priority == 'medium') { medium.push(todos[i]) }
      else { low.push(todos[i]) }
    }
    return sorted = high.concat(medium.concat(low));
  };

  const index = (project) => {
    // Insert filter of todos by project name

    _todosRender__WEBPACK_IMPORTED_MODULE_1__["todosRender"].index(sortByPriority(_model__WEBPACK_IMPORTED_MODULE_0__["model"].todos), project);

    //model.logTodos(); // DEBUG
  };

  const destroy = (thisId) => {
    let id = thisId.slice(7);
    _model__WEBPACK_IMPORTED_MODULE_0__["model"].deleteTodo(id);



    // DEBUG:
    setTimeout(function() {
      _model__WEBPACK_IMPORTED_MODULE_0__["model"].logTodos();
    }, 500);
  };

  return { index, destroy };

})();




/***/ }),

/***/ "./src/todosRender.js":
/*!****************************!*\
  !*** ./src/todosRender.js ***!
  \****************************/
/*! exports provided: todosRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todosRender", function() { return todosRender; });
/* harmony import */ var _appRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appRender */ "./src/appRender.js");
/* harmony import */ var _todosController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todosController */ "./src/todosController.js");
/* harmony import */ var _projectsController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectsController */ "./src/projectsController.js");




const todosRender = (() => {

  const index = (todos, project) => {
    _appRender__WEBPACK_IMPORTED_MODULE_0__["appRender"].clearContent();
    let content = document.getElementById('content');

    for(let i = 0; i < todos.length; i++) {
      let div = document.createElement('div');
      div.classList.add('itemDiv');
      div.classList.add(`${todos[i].priority}Div`);
      div.id = `${todos[i].id}`;
      div.addEventListener("click", function() {
        console.log(`clicked div: ${this.id}`);
      });
      let checkbox = document.createElement('div');
      checkbox.classList.add('checkbox');
      checkbox.id = `delete_${todos[i].id}`;
      checkbox.addEventListener("click", function(e) {
        e.stopPropagation();
        _todosController__WEBPACK_IMPORTED_MODULE_1__["todosController"].destroy(this.id);
        removeTodo(this.id);
      });
      let title = document.createElement('h2');
      title.innerHTML = todos[i].title;
      content.appendChild(div);
      div.appendChild(checkbox);
      div.appendChild(title);
    }

    let addNew = document.createElement('div');
    addNew.id = 'addNew';
    addNew.addEventListener("click", function() {
      form(this.id);
    });
    let plusSign = document.createElement('p');
    plusSign.id = 'plusSign';
    plusSign.innerHTML = '+';
    addNew.appendChild(plusSign);
    content.appendChild(addNew);

    // set navbar content & link to projects index
    let navMsg = document.getElementById('navMsg');
    navMsg.innerHTML = project;
    let projectsBtn = document.getElementById('projectsBtn');
    projectsBtn.addEventListener("click", function() {
      _projectsController__WEBPACK_IMPORTED_MODULE_2__["projectsController"].index();
    });
  };

  // private:

  const removeTodo = (thisId) => {
    let checkBox = document.getElementById(thisId);
    checkBox.id = 'deleted';
    let id = thisId.slice(7);
    setTimeout(function() {
      let todoDiv = document.getElementById(id);
      todoDiv.parentNode.removeChild(todoDiv);
    }, 300);
  };

  // ? will use parent elelment as param, not id, then find ids needed
  const form = (thisId) => {
    console.log(thisId);
  }

  return { index };

})();




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcFJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0c0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3RzUmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90b2Rvc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZG9zUmVuZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzRUFBa0I7QUFDeEIsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7O0FBRVYsQ0FBQzs7QUFFcUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgYXBwUmVuZGVyID0gKCgpID0+IHtcblxuICAvLyBzZXQgc3R5bGluZyAvIGJlaGF2aW91cnMgY29tbW9uIHRvIGFsbCB2aWV3czpcbiAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXInKTtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIC8vIHNldCBuYXZiYXIgc2Nyb2xsIGJlaGF2aW91ciAoaGlkZSAvIHJldmVhbCk6XG4gIHZhciBwcmV2U2Nyb2xscG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBpZiAocHJldlNjcm9sbHBvcyA+IGN1cnJlbnRTY3JvbGxQb3MpIHtcbiAgICAgIG5hdmJhci5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gJzUwcHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXZiYXIuc3R5bGUudG9wID0gJy01MHB4JztcbiAgICAgIGNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gJzBweCc7XG4gICAgfVxuICAgIHByZXZTY3JvbGxwb3MgPSBjdXJyZW50U2Nyb2xsUG9zO1xuICB9XG5cbiAgLy8gZGVjbGFyZSBmdW5jdGlvbnMgdG8gY29tbW9uIHRvIHRvZG9zUmVuZGVyIGFuZCBwcm9qZWN0c1JlbmRlciBtb2R1bGVzOlxuXG4gIGNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0gZXh0cmFzIC0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgKCgpID0+IHsgLy8gUmVzaXplOiBVTlVTRURcbiAgICBsZXQgbmF2RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdkRpdicpO1xuXG4gICAgICAvL2xldCB0aXRsZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZURpdicpO1xuXG4gICAgY29uc3QgcmVzaXplID0gKCkgPT4geyAvLyBzZXQgbmF2YmFyIHRpdGxlRGl2IHdpZHRoOlxuICAgICAgaWYgKG5hdkRpdi5vZmZzZXRXaWR0aCA8PSA2NTIpIHtcbiAgICAgICAgLy90aXRsZURpdi5zdHlsZS53aWR0aCA9IGAkeyhuYXZEaXYub2Zmc2V0V2lkdGggLSAxNzMpfXB4YDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9yZXNpemUoKTtcbiAgICAvL2RvY3VtZW50LmJvZHkub25yZXNpemUgPSBmdW5jdGlvbigpeyByZXNpemUoKTsgfTtcbiAgfSkoKTtcblxuICAvLyBERUJVRzogY3JlYXRlIGNvbnRlbnQgdGFsbGVyIHRoYW4gcGFnZSB0byB0ZXN0IHNjcm9sbCBlZmZlY3RzXG4gIGNvbnN0IHBsYWNlaG9sZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBsZXQgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3BhY2VyLnN0eWxlLmhlaWdodCA9ICczMHB4JztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNwYWNlcik7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNzA7IGkrKykge1xuICAgICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHBhcmEuaW5uZXJIVE1MID0gXCJwbGFjZWhvbGRlciBjb250ZW50XCI7XG4gICAgICBwYXJhLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIH1cblxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzaXplJykpO1xuICB9O1xuXG4gIHJldHVybiB7IGNsZWFyQ29udGVudCwgcGxhY2Vob2xkZXJDb250ZW50IH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IGFwcFJlbmRlciB9XG4iLCIvL2ltcG9ydCB7IGFwcFJlbmRlciB9IGZyb20gJy4vYXBwUmVuZGVyJ1xuaW1wb3J0IHsgdG9kb3NDb250cm9sbGVyIH0gZnJvbSAnLi90b2Rvc0NvbnRyb2xsZXInXG5cblxudG9kb3NDb250cm9sbGVyLmluZGV4KCdBbGwgdG8tZG8gaXRlbXMnKTtcblxuLy8gYWRkIHBsYWNlaG9sZGVyIGNvbnRlbnQsIGZvciB0ZXN0aW5nIG9mIG5hdmJhciBoaWRlL3JldmVhbCBvbiBzY3JvbGw6XG4vL2FwcFJlbmRlci5wbGFjZWhvbGRlckNvbnRlbnQoKTtcbiIsImNvbnN0IG1vZGVsID0gKCgpID0+IHtcblxuICBsZXQgdG9kb3MgPSBbXTtcbiAgbGV0IHByb2plY3RzID0gW107XG5cbiAgY29uc3QgdW5pcXVlSWQgPSAoKCkgPT4ge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICsrY291bnQ7XG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBjb25zdCB0b2RvRmFjdG9yeSA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3Qgb3V0cHV0ID0gKCkgPT4gY29uc29sZS5sb2coYGlkOiAke2lkfSwgdGl0bGU6ICR7dGl0bGV9LCBkZXNjOiAke2Rlc2NyaXB0aW9ufSwgcHJpb3JpdHk6ICR7cHJpb3JpdHl9LCBwcm9qZWN0OiAke3Byb2plY3R9YCk7XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IG5ld1RpdGxlID0+IHRpdGxlID0gbmV3VGl0bGU7XG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbiA9PiBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gbmV3UHJpb3JpdHkgPT4gcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICBjb25zdCBzZXRQcm9qZWN0ID0gbmV3UHJvamVjdCA9PiBwcm9qZWN0ID0gbmV3UHJvamVjdDtcblxuICAgIHJldHVybiB7XG4gICAgICBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCxcbiAgICAgIHNldFRpdGxlLCBzZXREZXNjcmlwdGlvbiwgc2V0UHJpb3JpdHksIHNldFByb2plY3QsIG91dHB1dCB9O1xuICB9O1xuXG4gIC8vIENoYW5nZSB0aGlzIHRvIGEgY2hlY2sgZm9yIGxvY2FsIHN0b3JhZ2UsIGV0Yy5cbiAgY29uc3QgY3JlYXRlRXhhbXBsZXMgPSAoKCkgPT4ge1xuICAgIGxldCB0b2Rvc0lucHV0ID0gW1xuICAgICAgeyB0aXRsZTogJ2RvIGxhdW5kcnknLCBkZXNjcmlwdGlvbjogJ3JlbWVtYmVyIGplYW5zJywgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgcHJvamVjdDogJ3JlZ3VsYXIgc3R1ZmYnIH0sXG4gICAgICB7IHRpdGxlOiAnd2FzaCBjYXInLCBkZXNjcmlwdGlvbjogJ25pbCcsIHByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgcHJvamVjdDogJ3JlZ3VsYXIgc3R1ZmYnIH0sXG4gICAgICB7IHRpdGxlOiAnYnV5IGJlZXInLCBkZXNjcmlwdGlvbjogJ0tyb25lbmJlcmcnLCBwcmlvcml0eTogJ21lZGl1bScsXG4gICAgICAgIHByb2plY3Q6ICdyZWd1bGFyIHN0dWZmJyB9LFxuICAgICAgeyB0aXRsZTogJ3Jlc2VhcmNoIGZ1bmN0aW9ucycsIGRlc2NyaXB0aW9uOiAnbWFrZSBub3RlcyBhbmQgc2F2ZSBsaW5rcycsIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgIHByb2plY3Q6ICd3cml0ZSBhcnRpY2xlJyB9LFxuICAgICAgeyB0aXRsZTogJ3dyaXRlIGJvZHkgb2YgYXJ0aWNsZScsIGRlc2NyaXB0aW9uOiAnYWN0dWFsbHkgd3JpdGUgdGhlIHRoaW5nJywgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgICBwcm9qZWN0OiAnd3JpdGUgYXJ0aWNsZScgfSxcbiAgICAgIHsgdGl0bGU6ICdwcm9vZiByZWFkIGFydGljbGUnLCBkZXNjcmlwdGlvbjogJ2NoZWNrIGZvciBlcnJvcnMgYW5kIGJhZCBncmFtbWFyJywgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICBwcm9qZWN0OiAnd3JpdGUgYXJ0aWNsZScgfVxuICAgIF07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zSW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvZG9zLnB1c2goXG4gICAgICAgIHRvZG9GYWN0b3J5KHVuaXF1ZUlkKCksIHRvZG9zSW5wdXRbaV0udGl0bGUsIHRvZG9zSW5wdXRbaV0uZGVzY3JpcHRpb24sXG4gICAgICAgIHRvZG9zSW5wdXRbaV0ucHJpb3JpdHksIHRvZG9zSW5wdXRbaV0ucHJvamVjdFxuICAgICAgKSk7XG4gICAgfVxuXG4gICAgcHJvamVjdHMgPSBbJ3JlZ3VsYXIgc3R1ZmYnLCAnd3JpdGUgYXJ0aWNsZSddO1xuICB9KSgpO1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAoaWQpID0+IHtcbiAgICB0b2Rvcy5zcGxpY2UodG9kb3MuaW5kZXhPZih0b2Rvcy5maW5kKGUgPT4gZS5pZCA9PSBpZCkpLCAxKTtcbiAgfTtcblxuICBjb25zdCBsb2dUb2RvcyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvZG9zW2ldLm91dHB1dCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyB0b2RvcywgcHJvamVjdHMsIGNyZWF0ZUV4YW1wbGVzLCBkZWxldGVUb2RvLCBsb2dUb2RvcyB9O1xuXG59KSgpO1xuXG5leHBvcnQgeyBtb2RlbCB9XG4iLCJpbXBvcnQgeyBtb2RlbCB9IGZyb20gJy4vbW9kZWwnXG5pbXBvcnQgeyBwcm9qZWN0c1JlbmRlciB9IGZyb20gJy4vcHJvamVjdHNSZW5kZXInXG5cbmNvbnN0IHByb2plY3RzQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICAgIHByb2plY3RzUmVuZGVyLmluZGV4KG1vZGVsLnByb2plY3RzKTsgLy8gc29ydCBhbHBoYWJldGljYWxseSArIGFkZCAnYWxsJ1xuICB9O1xuXG4gIHJldHVybiB7IGluZGV4IH07XG59KSgpO1xuXG5leHBvcnQgeyBwcm9qZWN0c0NvbnRyb2xsZXIgfVxuIiwiaW1wb3J0IHsgYXBwUmVuZGVyIH0gZnJvbSAnLi9hcHBSZW5kZXInXG5pbXBvcnQgeyBwcm9qZWN0c0NvbnRyb2xsZXIgfSBmcm9tICcuL3Byb2plY3RzQ29udHJvbGxlcidcblxuY29uc3QgcHJvamVjdHNSZW5kZXIgPSAoKCkgPT4ge1xuICBjb25zdCBpbmRleCA9IChwcm9qZWN0cykgPT4ge1xuICAgIGFwcFJlbmRlci5jbGVhckNvbnRlbnQoKTtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdpdGVtRGl2Jyk7XG4gICAgICBkaXYuaWQgPSBgcHJvamVjdF8ke3Byb2plY3RzW2ldfWA7XG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgY2xpY2tlZCBkaXY6ICR7dGhpcy5pZH1gKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuXG4gICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdHNbaV07XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB9XG5cblxuICAgIC8vIHNldCBuYXZiYXIgY29udGVudCAmIGxpbmsgdG8gcHJvamVjdHMgaW5kZXhcbiAgICBsZXQgbXNnRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21zZ0RpdicpO1xuICAgIG1zZ0Rpdi5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBsZXQgcHJvamVjdHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNCdG4nKTtcbiAgICBwcm9qZWN0c0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGxldCBuYXZNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2TXNnJyk7XG4gICAgbmF2TXNnLmlubmVySFRNTCA9ICdQcm9qZWN0cyc7XG4gIH07XG5cbiAgcmV0dXJuIHsgaW5kZXggfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHByb2plY3RzUmVuZGVyIH1cbiIsImltcG9ydCB7IG1vZGVsIH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7IHRvZG9zUmVuZGVyIH0gZnJvbSAnLi90b2Rvc1JlbmRlcidcblxuY29uc3QgdG9kb3NDb250cm9sbGVyID0gKCgpID0+IHtcblxuICBjb25zdCBzb3J0QnlQcmlvcml0eSA9ICh0b2RvcykgPT4ge1xuICAgIGxldCBzb3J0ZWQgPSBbXSwgaGlnaCA9IFtdLCBtZWRpdW0gPSBbXSwgbG93ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRvZG9zW2ldLnByaW9yaXR5ID09ICdoaWdoJykgeyBoaWdoLnB1c2godG9kb3NbaV0pIH1cbiAgICAgIGVsc2UgaWYgKHRvZG9zW2ldLnByaW9yaXR5ID09ICdtZWRpdW0nKSB7IG1lZGl1bS5wdXNoKHRvZG9zW2ldKSB9XG4gICAgICBlbHNlIHsgbG93LnB1c2godG9kb3NbaV0pIH1cbiAgICB9XG4gICAgcmV0dXJuIHNvcnRlZCA9IGhpZ2guY29uY2F0KG1lZGl1bS5jb25jYXQobG93KSk7XG4gIH07XG5cbiAgY29uc3QgaW5kZXggPSAocHJvamVjdCkgPT4ge1xuICAgIC8vIEluc2VydCBmaWx0ZXIgb2YgdG9kb3MgYnkgcHJvamVjdCBuYW1lXG5cbiAgICB0b2Rvc1JlbmRlci5pbmRleChzb3J0QnlQcmlvcml0eShtb2RlbC50b2RvcyksIHByb2plY3QpO1xuXG4gICAgLy9tb2RlbC5sb2dUb2RvcygpOyAvLyBERUJVR1xuICB9O1xuXG4gIGNvbnN0IGRlc3Ryb3kgPSAodGhpc0lkKSA9PiB7XG4gICAgbGV0IGlkID0gdGhpc0lkLnNsaWNlKDcpO1xuICAgIG1vZGVsLmRlbGV0ZVRvZG8oaWQpO1xuXG5cblxuICAgIC8vIERFQlVHOlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBtb2RlbC5sb2dUb2RvcygpO1xuICAgIH0sIDUwMCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgaW5kZXgsIGRlc3Ryb3kgfTtcblxufSkoKTtcblxuZXhwb3J0IHsgdG9kb3NDb250cm9sbGVyIH1cbiIsImltcG9ydCB7IGFwcFJlbmRlciB9IGZyb20gJy4vYXBwUmVuZGVyJ1xuaW1wb3J0IHsgdG9kb3NDb250cm9sbGVyIH0gZnJvbSAnLi90b2Rvc0NvbnRyb2xsZXInXG5pbXBvcnQgeyBwcm9qZWN0c0NvbnRyb2xsZXIgfSBmcm9tICcuL3Byb2plY3RzQ29udHJvbGxlcidcblxuY29uc3QgdG9kb3NSZW5kZXIgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IGluZGV4ID0gKHRvZG9zLCBwcm9qZWN0KSA9PiB7XG4gICAgYXBwUmVuZGVyLmNsZWFyQ29udGVudCgpO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW1EaXYnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGAke3RvZG9zW2ldLnByaW9yaXR5fURpdmApO1xuICAgICAgZGl2LmlkID0gYCR7dG9kb3NbaV0uaWR9YDtcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjbGlja2VkIGRpdjogJHt0aGlzLmlkfWApO1xuICAgICAgfSk7XG4gICAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICAgICBjaGVja2JveC5pZCA9IGBkZWxldGVfJHt0b2Rvc1tpXS5pZH1gO1xuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdG9kb3NDb250cm9sbGVyLmRlc3Ryb3kodGhpcy5pZCk7XG4gICAgICAgIHJlbW92ZVRvZG8odGhpcy5pZCk7XG4gICAgICB9KTtcbiAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICB0aXRsZS5pbm5lckhUTUwgPSB0b2Rvc1tpXS50aXRsZTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIH1cblxuICAgIGxldCBhZGROZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGROZXcuaWQgPSAnYWRkTmV3JztcbiAgICBhZGROZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgZm9ybSh0aGlzLmlkKTtcbiAgICB9KTtcbiAgICBsZXQgcGx1c1NpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGx1c1NpZ24uaWQgPSAncGx1c1NpZ24nO1xuICAgIHBsdXNTaWduLmlubmVySFRNTCA9ICcrJztcbiAgICBhZGROZXcuYXBwZW5kQ2hpbGQocGx1c1NpZ24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkTmV3KTtcblxuICAgIC8vIHNldCBuYXZiYXIgY29udGVudCAmIGxpbmsgdG8gcHJvamVjdHMgaW5kZXhcbiAgICBsZXQgbmF2TXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdk1zZycpO1xuICAgIG5hdk1zZy5pbm5lckhUTUwgPSBwcm9qZWN0O1xuICAgIGxldCBwcm9qZWN0c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c0J0bicpO1xuICAgIHByb2plY3RzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIHByb2plY3RzQ29udHJvbGxlci5pbmRleCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIHByaXZhdGU6XG5cbiAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0aGlzSWQpID0+IHtcbiAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzSWQpO1xuICAgIGNoZWNrQm94LmlkID0gJ2RlbGV0ZWQnO1xuICAgIGxldCBpZCA9IHRoaXNJZC5zbGljZSg3KTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHRvZG9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICB0b2RvRGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodG9kb0Rpdik7XG4gICAgfSwgMzAwKTtcbiAgfTtcblxuICAvLyA/IHdpbGwgdXNlIHBhcmVudCBlbGVsbWVudCBhcyBwYXJhbSwgbm90IGlkLCB0aGVuIGZpbmQgaWRzIG5lZWRlZFxuICBjb25zdCBmb3JtID0gKHRoaXNJZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRoaXNJZCk7XG4gIH1cblxuICByZXR1cm4geyBpbmRleCB9O1xuXG59KSgpO1xuXG5leHBvcnQgeyB0b2Rvc1JlbmRlciB9XG4iXSwic291cmNlUm9vdCI6IiJ9