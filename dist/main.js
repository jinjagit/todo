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



_todosController__WEBPACK_IMPORTED_MODULE_0__["todosController"].index('project_All projects & to-dos');

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
      { title: 'research arrow functions', description: 'make notes and save links', priority: 'high',
        project: 'write article' },
      { title: 'write body of article', description: 'actually write the thing', priority: 'medium',
        project: 'write article' },
      { title: 'proofread article', description: 'check for errors and bad grammar', priority: 'low',
        project: 'write article' },
      { title: 'research IIFEs', description: 'what are they, and when are they used?', priority: 'medium',
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
    _projectsRender__WEBPACK_IMPORTED_MODULE_1__["projectsRender"].index(['All projects & to-dos'].concat(_model__WEBPACK_IMPORTED_MODULE_0__["model"].projects));
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
/* harmony import */ var _todosController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todosController */ "./src/todosController.js");




const projectsRender = (() => {
  const index = (projects) => {
    _appRender__WEBPACK_IMPORTED_MODULE_0__["appRender"].clearContent();
    let content = document.getElementById('content');

    let spacer = document.createElement('div');
    spacer.style.height = '7px';
    content.appendChild(spacer);

    for(let i = 0; i < projects.length; i++) {
      let div = document.createElement('div');
      div.classList.add('itemDiv');
      div.id = `project_${projects[i]}`;
      div.addEventListener("click", function() {
        _todosController__WEBPACK_IMPORTED_MODULE_2__["todosController"].index(this.id);
      });
      // need different styling class for deletebox + eventlistener
      let deletebox = document.createElement('div');
      deletebox.classList.add('deletebox');

      let title = document.createElement('h2');
      title.innerHTML = projects[i];
      content.appendChild(div);
      div.appendChild(deletebox);
      div.appendChild(title);
      if (projects[i] == 'All projects & to-dos') {
        let line = document.createElement('hr');
        content.appendChild(line);
      }
    }

    // set navbar content & remove link to projects index
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
    project = project.slice(8);
    // Insert filter of todos by project name
    if (project == 'All projects & to-dos') {
      _todosRender__WEBPACK_IMPORTED_MODULE_1__["todosRender"].index(sortByPriority(_model__WEBPACK_IMPORTED_MODULE_0__["model"].todos), 'All to-do items');
    } else {
      let todos = [];
      for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_0__["model"].todos.length; i++) {
        if (project == _model__WEBPACK_IMPORTED_MODULE_0__["model"].todos[i].project) { todos.push(_model__WEBPACK_IMPORTED_MODULE_0__["model"].todos[i]); }
      }
      _todosRender__WEBPACK_IMPORTED_MODULE_1__["todosRender"].index(sortByPriority(todos), project);
    }
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

    // set navbar content & add link to projects index
    let msgDiv = document.getElementById('msgDiv');
    msgDiv.style.width = 'calc(100% - 34px)';
    let navMsg = document.getElementById('navMsg');
    navMsg.innerHTML = project;
    let projectsBtn = document.getElementById('projectsBtn');
    projectsBtn.style.display = 'block';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcFJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0c0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3RzUmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90b2Rvc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZG9zUmVuZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7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QWtCO0FBQ3BDO0FBQ0E7QUFDQSwyQkFBMkIsa0JBQWtCO0FBQzdDLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0Esb0NBQW9DLFFBQVE7QUFDNUMsT0FBTztBQUNQO0FBQ0E7QUFDQSw4QkFBOEIsWUFBWTtBQUMxQztBQUNBO0FBQ0EsUUFBUSxnRUFBZTtBQUN2QjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzRUFBa0I7QUFDeEIsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7O0FBRVYsQ0FBQzs7QUFFcUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgYXBwUmVuZGVyID0gKCgpID0+IHtcblxuICAvLyBzZXQgc3R5bGluZyAvIGJlaGF2aW91cnMgY29tbW9uIHRvIGFsbCB2aWV3czpcbiAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXInKTtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIC8vIHNldCBuYXZiYXIgc2Nyb2xsIGJlaGF2aW91ciAoaGlkZSAvIHJldmVhbCk6XG4gIHZhciBwcmV2U2Nyb2xscG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBpZiAocHJldlNjcm9sbHBvcyA+IGN1cnJlbnRTY3JvbGxQb3MpIHtcbiAgICAgIG5hdmJhci5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gJzUwcHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXZiYXIuc3R5bGUudG9wID0gJy01MHB4JztcbiAgICAgIGNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gJzBweCc7XG4gICAgfVxuICAgIHByZXZTY3JvbGxwb3MgPSBjdXJyZW50U2Nyb2xsUG9zO1xuICB9XG5cbiAgLy8gZGVjbGFyZSBmdW5jdGlvbnMgdG8gY29tbW9uIHRvIHRvZG9zUmVuZGVyIGFuZCBwcm9qZWN0c1JlbmRlciBtb2R1bGVzOlxuXG4gIGNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0gZXh0cmFzIC0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgKCgpID0+IHsgLy8gUmVzaXplOiBVTlVTRURcbiAgICBsZXQgbmF2RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdkRpdicpO1xuXG4gICAgICAvL2xldCB0aXRsZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZURpdicpO1xuXG4gICAgY29uc3QgcmVzaXplID0gKCkgPT4geyAvLyBzZXQgbmF2YmFyIHRpdGxlRGl2IHdpZHRoOlxuICAgICAgaWYgKG5hdkRpdi5vZmZzZXRXaWR0aCA8PSA2NTIpIHtcbiAgICAgICAgLy90aXRsZURpdi5zdHlsZS53aWR0aCA9IGAkeyhuYXZEaXYub2Zmc2V0V2lkdGggLSAxNzMpfXB4YDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9yZXNpemUoKTtcbiAgICAvL2RvY3VtZW50LmJvZHkub25yZXNpemUgPSBmdW5jdGlvbigpeyByZXNpemUoKTsgfTtcbiAgfSkoKTtcblxuICAvLyBERUJVRzogY3JlYXRlIGNvbnRlbnQgdGFsbGVyIHRoYW4gcGFnZSB0byB0ZXN0IHNjcm9sbCBlZmZlY3RzXG4gIGNvbnN0IHBsYWNlaG9sZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBsZXQgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3BhY2VyLnN0eWxlLmhlaWdodCA9ICczMHB4JztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNwYWNlcik7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNzA7IGkrKykge1xuICAgICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHBhcmEuaW5uZXJIVE1MID0gXCJwbGFjZWhvbGRlciBjb250ZW50XCI7XG4gICAgICBwYXJhLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIH1cblxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzaXplJykpO1xuICB9O1xuXG4gIHJldHVybiB7IGNsZWFyQ29udGVudCwgcGxhY2Vob2xkZXJDb250ZW50IH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IGFwcFJlbmRlciB9XG4iLCIvL2ltcG9ydCB7IGFwcFJlbmRlciB9IGZyb20gJy4vYXBwUmVuZGVyJ1xuaW1wb3J0IHsgdG9kb3NDb250cm9sbGVyIH0gZnJvbSAnLi90b2Rvc0NvbnRyb2xsZXInXG5cblxudG9kb3NDb250cm9sbGVyLmluZGV4KCdwcm9qZWN0X0FsbCBwcm9qZWN0cyAmIHRvLWRvcycpO1xuXG4vLyBhZGQgcGxhY2Vob2xkZXIgY29udGVudCwgZm9yIHRlc3Rpbmcgb2YgbmF2YmFyIGhpZGUvcmV2ZWFsIG9uIHNjcm9sbDpcbi8vYXBwUmVuZGVyLnBsYWNlaG9sZGVyQ29udGVudCgpO1xuIiwiY29uc3QgbW9kZWwgPSAoKCkgPT4ge1xuXG4gIGxldCB0b2RvcyA9IFtdO1xuICBsZXQgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdCB1bmlxdWVJZCA9ICgoKSA9PiB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgKytjb3VudDtcbiAgICAgIHJldHVybiBjb3VudDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHRvZG9GYWN0b3J5ID0gKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0KSA9PiB7XG5cbiAgICBjb25zdCBvdXRwdXQgPSAoKSA9PiBjb25zb2xlLmxvZyhgaWQ6ICR7aWR9LCB0aXRsZTogJHt0aXRsZX0sIGRlc2M6ICR7ZGVzY3JpcHRpb259LCBwcmlvcml0eTogJHtwcmlvcml0eX0sIHByb2plY3Q6ICR7cHJvamVjdH1gKTtcblxuICAgIGNvbnN0IHNldFRpdGxlID0gbmV3VGl0bGUgPT4gdGl0bGUgPSBuZXdUaXRsZTtcbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uID0+IGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSBuZXdQcmlvcml0eSA9PiBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIGNvbnN0IHNldFByb2plY3QgPSBuZXdQcm9qZWN0ID0+IHByb2plY3QgPSBuZXdQcm9qZWN0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0LFxuICAgICAgc2V0VGl0bGUsIHNldERlc2NyaXB0aW9uLCBzZXRQcmlvcml0eSwgc2V0UHJvamVjdCwgb3V0cHV0IH07XG4gIH07XG5cbiAgLy8gQ2hhbmdlIHRoaXMgdG8gYSBjaGVjayBmb3IgbG9jYWwgc3RvcmFnZSwgZXRjLlxuICBjb25zdCBjcmVhdGVFeGFtcGxlcyA9ICgoKSA9PiB7XG4gICAgbGV0IHRvZG9zSW5wdXQgPSBbXG4gICAgICB7IHRpdGxlOiAnZG8gbGF1bmRyeScsIGRlc2NyaXB0aW9uOiAncmVtZW1iZXIgamVhbnMnLCBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICBwcm9qZWN0OiAncmVndWxhciBzdHVmZicgfSxcbiAgICAgIHsgdGl0bGU6ICd3YXNoIGNhcicsIGRlc2NyaXB0aW9uOiAnbmlsJywgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICBwcm9qZWN0OiAncmVndWxhciBzdHVmZicgfSxcbiAgICAgIHsgdGl0bGU6ICdidXkgYmVlcicsIGRlc2NyaXB0aW9uOiAnS3JvbmVuYmVyZycsIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgICAgcHJvamVjdDogJ3JlZ3VsYXIgc3R1ZmYnIH0sXG4gICAgICB7IHRpdGxlOiAncmVzZWFyY2ggYXJyb3cgZnVuY3Rpb25zJywgZGVzY3JpcHRpb246ICdtYWtlIG5vdGVzIGFuZCBzYXZlIGxpbmtzJywgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgcHJvamVjdDogJ3dyaXRlIGFydGljbGUnIH0sXG4gICAgICB7IHRpdGxlOiAnd3JpdGUgYm9keSBvZiBhcnRpY2xlJywgZGVzY3JpcHRpb246ICdhY3R1YWxseSB3cml0ZSB0aGUgdGhpbmcnLCBwcmlvcml0eTogJ21lZGl1bScsXG4gICAgICAgIHByb2plY3Q6ICd3cml0ZSBhcnRpY2xlJyB9LFxuICAgICAgeyB0aXRsZTogJ3Byb29mcmVhZCBhcnRpY2xlJywgZGVzY3JpcHRpb246ICdjaGVjayBmb3IgZXJyb3JzIGFuZCBiYWQgZ3JhbW1hcicsIHByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgcHJvamVjdDogJ3dyaXRlIGFydGljbGUnIH0sXG4gICAgICB7IHRpdGxlOiAncmVzZWFyY2ggSUlGRXMnLCBkZXNjcmlwdGlvbjogJ3doYXQgYXJlIHRoZXksIGFuZCB3aGVuIGFyZSB0aGV5IHVzZWQ/JywgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgICBwcm9qZWN0OiAnd3JpdGUgYXJ0aWNsZScgfVxuICAgIF07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zSW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvZG9zLnB1c2goXG4gICAgICAgIHRvZG9GYWN0b3J5KHVuaXF1ZUlkKCksIHRvZG9zSW5wdXRbaV0udGl0bGUsIHRvZG9zSW5wdXRbaV0uZGVzY3JpcHRpb24sXG4gICAgICAgIHRvZG9zSW5wdXRbaV0ucHJpb3JpdHksIHRvZG9zSW5wdXRbaV0ucHJvamVjdFxuICAgICAgKSk7XG4gICAgfVxuXG4gICAgcHJvamVjdHMgPSBbJ3JlZ3VsYXIgc3R1ZmYnLCAnd3JpdGUgYXJ0aWNsZSddO1xuICB9KSgpO1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAoaWQpID0+IHtcbiAgICB0b2Rvcy5zcGxpY2UodG9kb3MuaW5kZXhPZih0b2Rvcy5maW5kKGUgPT4gZS5pZCA9PSBpZCkpLCAxKTtcbiAgfTtcblxuICBjb25zdCBsb2dUb2RvcyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvZG9zW2ldLm91dHB1dCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyB0b2RvcywgcHJvamVjdHMsIGNyZWF0ZUV4YW1wbGVzLCBkZWxldGVUb2RvLCBsb2dUb2RvcyB9O1xuXG59KSgpO1xuXG5leHBvcnQgeyBtb2RlbCB9XG4iLCJpbXBvcnQgeyBtb2RlbCB9IGZyb20gJy4vbW9kZWwnXG5pbXBvcnQgeyBwcm9qZWN0c1JlbmRlciB9IGZyb20gJy4vcHJvamVjdHNSZW5kZXInXG5cbmNvbnN0IHByb2plY3RzQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICAgIHByb2plY3RzUmVuZGVyLmluZGV4KFsnQWxsIHByb2plY3RzICYgdG8tZG9zJ10uY29uY2F0KG1vZGVsLnByb2plY3RzKSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgaW5kZXggfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHByb2plY3RzQ29udHJvbGxlciB9XG4iLCJpbXBvcnQgeyBhcHBSZW5kZXIgfSBmcm9tICcuL2FwcFJlbmRlcidcbmltcG9ydCB7IHByb2plY3RzQ29udHJvbGxlciB9IGZyb20gJy4vcHJvamVjdHNDb250cm9sbGVyJ1xuaW1wb3J0IHsgdG9kb3NDb250cm9sbGVyIH0gZnJvbSAnLi90b2Rvc0NvbnRyb2xsZXInXG5cbmNvbnN0IHByb2plY3RzUmVuZGVyID0gKCgpID0+IHtcbiAgY29uc3QgaW5kZXggPSAocHJvamVjdHMpID0+IHtcbiAgICBhcHBSZW5kZXIuY2xlYXJDb250ZW50KCk7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgbGV0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwYWNlci5zdHlsZS5oZWlnaHQgPSAnN3B4JztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNwYWNlcik7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdpdGVtRGl2Jyk7XG4gICAgICBkaXYuaWQgPSBgcHJvamVjdF8ke3Byb2plY3RzW2ldfWA7XG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB0b2Rvc0NvbnRyb2xsZXIuaW5kZXgodGhpcy5pZCk7XG4gICAgICB9KTtcbiAgICAgIC8vIG5lZWQgZGlmZmVyZW50IHN0eWxpbmcgY2xhc3MgZm9yIGRlbGV0ZWJveCArIGV2ZW50bGlzdGVuZXJcbiAgICAgIGxldCBkZWxldGVib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRlbGV0ZWJveC5jbGFzc0xpc3QuYWRkKCdkZWxldGVib3gnKTtcblxuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IHByb2plY3RzW2ldO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGRlbGV0ZWJveCk7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgaWYgKHByb2plY3RzW2ldID09ICdBbGwgcHJvamVjdHMgJiB0by1kb3MnKSB7XG4gICAgICAgIGxldCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzZXQgbmF2YmFyIGNvbnRlbnQgJiByZW1vdmUgbGluayB0byBwcm9qZWN0cyBpbmRleFxuICAgIGxldCBtc2dEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXNnRGl2Jyk7XG4gICAgbXNnRGl2LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGxldCBwcm9qZWN0c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c0J0bicpO1xuICAgIHByb2plY3RzQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbGV0IG5hdk1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZNc2cnKTtcbiAgICBuYXZNc2cuaW5uZXJIVE1MID0gJ1Byb2plY3RzJztcbiAgfTtcblxuICByZXR1cm4geyBpbmRleCB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdHNSZW5kZXIgfVxuIiwiaW1wb3J0IHsgbW9kZWwgfSBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IHsgdG9kb3NSZW5kZXIgfSBmcm9tICcuL3RvZG9zUmVuZGVyJ1xuXG5jb25zdCB0b2Rvc0NvbnRyb2xsZXIgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IHNvcnRCeVByaW9yaXR5ID0gKHRvZG9zKSA9PiB7XG4gICAgbGV0IHNvcnRlZCA9IFtdLCBoaWdoID0gW10sIG1lZGl1bSA9IFtdLCBsb3cgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodG9kb3NbaV0ucHJpb3JpdHkgPT0gJ2hpZ2gnKSB7IGhpZ2gucHVzaCh0b2Rvc1tpXSkgfVxuICAgICAgZWxzZSBpZiAodG9kb3NbaV0ucHJpb3JpdHkgPT0gJ21lZGl1bScpIHsgbWVkaXVtLnB1c2godG9kb3NbaV0pIH1cbiAgICAgIGVsc2UgeyBsb3cucHVzaCh0b2Rvc1tpXSkgfVxuICAgIH1cbiAgICByZXR1cm4gc29ydGVkID0gaGlnaC5jb25jYXQobWVkaXVtLmNvbmNhdChsb3cpKTtcbiAgfTtcblxuICBjb25zdCBpbmRleCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdCA9IHByb2plY3Quc2xpY2UoOCk7XG4gICAgLy8gSW5zZXJ0IGZpbHRlciBvZiB0b2RvcyBieSBwcm9qZWN0IG5hbWVcbiAgICBpZiAocHJvamVjdCA9PSAnQWxsIHByb2plY3RzICYgdG8tZG9zJykge1xuICAgICAgdG9kb3NSZW5kZXIuaW5kZXgoc29ydEJ5UHJpb3JpdHkobW9kZWwudG9kb3MpLCAnQWxsIHRvLWRvIGl0ZW1zJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b2RvcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2RlbC50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdCA9PSBtb2RlbC50b2Rvc1tpXS5wcm9qZWN0KSB7IHRvZG9zLnB1c2gobW9kZWwudG9kb3NbaV0pOyB9XG4gICAgICB9XG4gICAgICB0b2Rvc1JlbmRlci5pbmRleChzb3J0QnlQcmlvcml0eSh0b2RvcyksIHByb2plY3QpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZXN0cm95ID0gKHRoaXNJZCkgPT4ge1xuICAgIGxldCBpZCA9IHRoaXNJZC5zbGljZSg3KTtcbiAgICBtb2RlbC5kZWxldGVUb2RvKGlkKTtcblxuXG5cbiAgICAvLyBERUJVRzpcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgbW9kZWwubG9nVG9kb3MoKTtcbiAgICB9LCA1MDApO1xuICB9O1xuXG4gIHJldHVybiB7IGluZGV4LCBkZXN0cm95IH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IHRvZG9zQ29udHJvbGxlciB9XG4iLCJpbXBvcnQgeyBhcHBSZW5kZXIgfSBmcm9tICcuL2FwcFJlbmRlcidcbmltcG9ydCB7IHRvZG9zQ29udHJvbGxlciB9IGZyb20gJy4vdG9kb3NDb250cm9sbGVyJ1xuaW1wb3J0IHsgcHJvamVjdHNDb250cm9sbGVyIH0gZnJvbSAnLi9wcm9qZWN0c0NvbnRyb2xsZXInXG5cbmNvbnN0IHRvZG9zUmVuZGVyID0gKCgpID0+IHtcblxuICBjb25zdCBpbmRleCA9ICh0b2RvcywgcHJvamVjdCkgPT4ge1xuICAgIGFwcFJlbmRlci5jbGVhckNvbnRlbnQoKTtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdpdGVtRGl2Jyk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChgJHt0b2Rvc1tpXS5wcmlvcml0eX1EaXZgKTtcbiAgICAgIGRpdi5pZCA9IGAke3RvZG9zW2ldLmlkfWA7XG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgY2xpY2tlZCBkaXY6ICR7dGhpcy5pZH1gKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgICAgY2hlY2tib3guaWQgPSBgZGVsZXRlXyR7dG9kb3NbaV0uaWR9YDtcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRvZG9zQ29udHJvbGxlci5kZXN0cm95KHRoaXMuaWQpO1xuICAgICAgICByZW1vdmVUb2RvKHRoaXMuaWQpO1xuICAgICAgfSk7XG4gICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gdG9kb3NbaV0udGl0bGU7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB9XG5cbiAgICBsZXQgYWRkTmV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkTmV3LmlkID0gJ2FkZE5ldyc7XG4gICAgYWRkTmV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGZvcm0odGhpcy5pZCk7XG4gICAgfSk7XG4gICAgbGV0IHBsdXNTaWduID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBsdXNTaWduLmlkID0gJ3BsdXNTaWduJztcbiAgICBwbHVzU2lnbi5pbm5lckhUTUwgPSAnKyc7XG4gICAgYWRkTmV3LmFwcGVuZENoaWxkKHBsdXNTaWduKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZE5ldyk7XG5cbiAgICAvLyBzZXQgbmF2YmFyIGNvbnRlbnQgJiBhZGQgbGluayB0byBwcm9qZWN0cyBpbmRleFxuICAgIGxldCBtc2dEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXNnRGl2Jyk7XG4gICAgbXNnRGl2LnN0eWxlLndpZHRoID0gJ2NhbGMoMTAwJSAtIDM0cHgpJztcbiAgICBsZXQgbmF2TXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdk1zZycpO1xuICAgIG5hdk1zZy5pbm5lckhUTUwgPSBwcm9qZWN0O1xuICAgIGxldCBwcm9qZWN0c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c0J0bicpO1xuICAgIHByb2plY3RzQnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHByb2plY3RzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIHByb2plY3RzQ29udHJvbGxlci5pbmRleCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIHByaXZhdGU6XG5cbiAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0aGlzSWQpID0+IHtcbiAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzSWQpO1xuICAgIGNoZWNrQm94LmlkID0gJ2RlbGV0ZWQnO1xuICAgIGxldCBpZCA9IHRoaXNJZC5zbGljZSg3KTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHRvZG9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICB0b2RvRGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodG9kb0Rpdik7XG4gICAgfSwgMzAwKTtcbiAgfTtcblxuICAvLyA/IHdpbGwgdXNlIHBhcmVudCBlbGVsbWVudCBhcyBwYXJhbSwgbm90IGlkLCB0aGVuIGZpbmQgaWRzIG5lZWRlZFxuICBjb25zdCBmb3JtID0gKHRoaXNJZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRoaXNJZCk7XG4gIH1cblxuICByZXR1cm4geyBpbmRleCB9O1xuXG59KSgpO1xuXG5leHBvcnQgeyB0b2Rvc1JlbmRlciB9XG4iXSwic291cmNlUm9vdCI6IiJ9