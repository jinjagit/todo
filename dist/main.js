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
    _projectsRender__WEBPACK_IMPORTED_MODULE_1__["projectsRender"].index(_model__WEBPACK_IMPORTED_MODULE_0__["model"].projects);
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

    /*let spacer = document.createElement('div');
    spacer.style.height = '7px';
    content.appendChild(spacer);*/

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
      deletebox.id = `delete_${projects[i]}`;
      deletebox.addEventListener("click", function(e) {
        e.stopPropagation();
        console.log(`clicked: ${this.id}`);
        removeProject(this.id);
      });
      let title = document.createElement('h2');
      title.innerHTML = projects[i];
      content.appendChild(div);
      div.appendChild(deletebox);
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

    // set navbar content & remove link to projects index
    let projectsBtn = document.getElementById('projectsBtn');
    projectsBtn.classList.add('eyeIcon');
    projectsBtn.title = 'view all todo items from all projects';
    projectsBtn.addEventListener("click", function() {
      _todosController__WEBPACK_IMPORTED_MODULE_2__["todosController"].index('project_All to-do items');
    });
    let navMsg = document.getElementById('navMsg');
    navMsg.innerHTML = 'Projects';
  };

  // private

  const removeProject = (thisId) => {
    let id = thisId.slice(7);
    if (confirm(`Really delete project: ${id}?`) == true) {
      console.log('delete confirmed!');
      //projectsController.destroy(this.id);
    }
  };

  // ? will use parent elelment as param, not id, then find ids needed
  const form = (thisId) => {
    console.log(thisId);
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
    if (project == 'All to-do items') {
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

  index('project_All to-do items');

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
    let navMsg = document.getElementById('navMsg');
    navMsg.innerHTML = project;
    let projectsBtn = document.getElementById('projectsBtn');
    projectsBtn.classList.remove('eyeIcon');
    projectsBtn.classList.add('foldersIcon');
    projectsBtn.title = 'view projects';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcFJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0c0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3RzUmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90b2Rvc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZG9zUmVuZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7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Q0EsSUFBSSw0Q0FBSztBQUNUO0FBQ0E7QUFDQSxNQUFNLDRDQUFLO0FBQ1gsS0FBSztBQUNMOztBQUVBOztBQUVBLFVBQVU7O0FBRVYsQ0FBQzs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7QUM1QzFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDWTtBQUNNOztBQUV6RDs7QUFFQTtBQUNBLElBQUksb0RBQVM7QUFDYjs7QUFFQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQSwyQkFBMkIsa0JBQWtCO0FBQzdDLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0Esb0NBQW9DLFFBQVE7QUFDNUMsT0FBTztBQUNQO0FBQ0E7QUFDQSw4QkFBOEIsWUFBWTtBQUMxQztBQUNBO0FBQ0EsUUFBUSxnRUFBZTtBQUN2QjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzRUFBa0I7QUFDeEIsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7O0FBRVYsQ0FBQzs7QUFFcUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgYXBwUmVuZGVyID0gKCgpID0+IHtcblxuICAvLyBzZXQgc3R5bGluZyAvIGJlaGF2aW91cnMgY29tbW9uIHRvIGFsbCB2aWV3czpcbiAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXInKTtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIC8vIHNldCBuYXZiYXIgc2Nyb2xsIGJlaGF2aW91ciAoaGlkZSAvIHJldmVhbCk6XG4gIHZhciBwcmV2U2Nyb2xscG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBpZiAocHJldlNjcm9sbHBvcyA+IGN1cnJlbnRTY3JvbGxQb3MpIHtcbiAgICAgIG5hdmJhci5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gJzUwcHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXZiYXIuc3R5bGUudG9wID0gJy01MHB4JztcbiAgICAgIGNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gJzBweCc7XG4gICAgfVxuICAgIHByZXZTY3JvbGxwb3MgPSBjdXJyZW50U2Nyb2xsUG9zO1xuICB9XG5cbiAgLy8gZGVjbGFyZSBmdW5jdGlvbnMgdG8gY29tbW9uIHRvIHRvZG9zUmVuZGVyIGFuZCBwcm9qZWN0c1JlbmRlciBtb2R1bGVzOlxuXG4gIGNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0gZXh0cmFzIC0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgKCgpID0+IHsgLy8gUmVzaXplOiBVTlVTRURcbiAgICBsZXQgbmF2RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdkRpdicpO1xuXG4gICAgICAvL2xldCB0aXRsZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZURpdicpO1xuXG4gICAgY29uc3QgcmVzaXplID0gKCkgPT4geyAvLyBzZXQgbmF2YmFyIHRpdGxlRGl2IHdpZHRoOlxuICAgICAgaWYgKG5hdkRpdi5vZmZzZXRXaWR0aCA8PSA2NTIpIHtcbiAgICAgICAgLy90aXRsZURpdi5zdHlsZS53aWR0aCA9IGAkeyhuYXZEaXYub2Zmc2V0V2lkdGggLSAxNzMpfXB4YDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9yZXNpemUoKTtcbiAgICAvL2RvY3VtZW50LmJvZHkub25yZXNpemUgPSBmdW5jdGlvbigpeyByZXNpemUoKTsgfTtcbiAgfSkoKTtcblxuICAvLyBERUJVRzogY3JlYXRlIGNvbnRlbnQgdGFsbGVyIHRoYW4gcGFnZSB0byB0ZXN0IHNjcm9sbCBlZmZlY3RzXG4gIGNvbnN0IHBsYWNlaG9sZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBsZXQgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3BhY2VyLnN0eWxlLmhlaWdodCA9ICczMHB4JztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNwYWNlcik7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNzA7IGkrKykge1xuICAgICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHBhcmEuaW5uZXJIVE1MID0gXCJwbGFjZWhvbGRlciBjb250ZW50XCI7XG4gICAgICBwYXJhLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIH1cblxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzaXplJykpO1xuICB9O1xuXG4gIHJldHVybiB7IGNsZWFyQ29udGVudCwgcGxhY2Vob2xkZXJDb250ZW50IH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IGFwcFJlbmRlciB9XG4iLCIvL2ltcG9ydCB7IGFwcFJlbmRlciB9IGZyb20gJy4vYXBwUmVuZGVyJ1xuaW1wb3J0IHsgdG9kb3NDb250cm9sbGVyIH0gZnJvbSAnLi90b2Rvc0NvbnRyb2xsZXInXG5cbi8vIGFkZCBwbGFjZWhvbGRlciBjb250ZW50LCBmb3IgdGVzdGluZyBvZiBuYXZiYXIgaGlkZS9yZXZlYWwgb24gc2Nyb2xsOlxuLy9hcHBSZW5kZXIucGxhY2Vob2xkZXJDb250ZW50KCk7XG4iLCJjb25zdCBtb2RlbCA9ICgoKSA9PiB7XG5cbiAgbGV0IHRvZG9zID0gW107XG4gIGxldCBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IHVuaXF1ZUlkID0gKCgpID0+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICArK2NvdW50O1xuICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgdG9kb0ZhY3RvcnkgPSAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QpID0+IHtcblxuICAgIGNvbnN0IG91dHB1dCA9ICgpID0+IGNvbnNvbGUubG9nKGBpZDogJHtpZH0sIHRpdGxlOiAke3RpdGxlfSwgZGVzYzogJHtkZXNjcmlwdGlvbn0sIHByaW9yaXR5OiAke3ByaW9yaXR5fSwgcHJvamVjdDogJHtwcm9qZWN0fWApO1xuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSBuZXdUaXRsZSA9PiB0aXRsZSA9IG5ld1RpdGxlO1xuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb24gPT4gZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IG5ld1ByaW9yaXR5ID0+IHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgY29uc3Qgc2V0UHJvamVjdCA9IG5ld1Byb2plY3QgPT4gcHJvamVjdCA9IG5ld1Byb2plY3Q7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QsXG4gICAgICBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldFByaW9yaXR5LCBzZXRQcm9qZWN0LCBvdXRwdXQgfTtcbiAgfTtcblxuICAvLyBDaGFuZ2UgdGhpcyB0byBhIGNoZWNrIGZvciBsb2NhbCBzdG9yYWdlLCBldGMuXG4gIGNvbnN0IGNyZWF0ZUV4YW1wbGVzID0gKCgpID0+IHtcbiAgICBsZXQgdG9kb3NJbnB1dCA9IFtcbiAgICAgIHsgdGl0bGU6ICdkbyBsYXVuZHJ5JywgZGVzY3JpcHRpb246ICdyZW1lbWJlciBqZWFucycsIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgIHByb2plY3Q6ICdyZWd1bGFyIHN0dWZmJyB9LFxuICAgICAgeyB0aXRsZTogJ3dhc2ggY2FyJywgZGVzY3JpcHRpb246ICduaWwnLCBwcmlvcml0eTogJ2xvdycsXG4gICAgICAgIHByb2plY3Q6ICdyZWd1bGFyIHN0dWZmJyB9LFxuICAgICAgeyB0aXRsZTogJ2J1eSBiZWVyJywgZGVzY3JpcHRpb246ICdLcm9uZW5iZXJnJywgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgICBwcm9qZWN0OiAncmVndWxhciBzdHVmZicgfSxcbiAgICAgIHsgdGl0bGU6ICdyZXNlYXJjaCBhcnJvdyBmdW5jdGlvbnMnLCBkZXNjcmlwdGlvbjogJ21ha2Ugbm90ZXMgYW5kIHNhdmUgbGlua3MnLCBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICBwcm9qZWN0OiAnd3JpdGUgYXJ0aWNsZScgfSxcbiAgICAgIHsgdGl0bGU6ICd3cml0ZSBib2R5IG9mIGFydGljbGUnLCBkZXNjcmlwdGlvbjogJ2FjdHVhbGx5IHdyaXRlIHRoZSB0aGluZycsIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgICAgcHJvamVjdDogJ3dyaXRlIGFydGljbGUnIH0sXG4gICAgICB7IHRpdGxlOiAncHJvb2ZyZWFkIGFydGljbGUnLCBkZXNjcmlwdGlvbjogJ2NoZWNrIGZvciBlcnJvcnMgYW5kIGJhZCBncmFtbWFyJywgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICBwcm9qZWN0OiAnd3JpdGUgYXJ0aWNsZScgfSxcbiAgICAgIHsgdGl0bGU6ICdyZXNlYXJjaCBJSUZFcycsIGRlc2NyaXB0aW9uOiAnd2hhdCBhcmUgdGhleSwgYW5kIHdoZW4gYXJlIHRoZXkgdXNlZD8nLCBwcmlvcml0eTogJ21lZGl1bScsXG4gICAgICAgIHByb2plY3Q6ICd3cml0ZSBhcnRpY2xlJyB9XG4gICAgXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3NJbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgdG9kb3MucHVzaChcbiAgICAgICAgdG9kb0ZhY3RvcnkodW5pcXVlSWQoKSwgdG9kb3NJbnB1dFtpXS50aXRsZSwgdG9kb3NJbnB1dFtpXS5kZXNjcmlwdGlvbixcbiAgICAgICAgdG9kb3NJbnB1dFtpXS5wcmlvcml0eSwgdG9kb3NJbnB1dFtpXS5wcm9qZWN0XG4gICAgICApKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0cyA9IFsncmVndWxhciBzdHVmZicsICd3cml0ZSBhcnRpY2xlJ107XG4gIH0pKCk7XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9IChpZCkgPT4ge1xuICAgIHRvZG9zLnNwbGljZSh0b2Rvcy5pbmRleE9mKHRvZG9zLmZpbmQoZSA9PiBlLmlkID09IGlkKSksIDEpO1xuICB9O1xuXG4gIGNvbnN0IGxvZ1RvZG9zID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgdG9kb3NbaV0ub3V0cHV0KCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHRvZG9zLCBwcm9qZWN0cywgY3JlYXRlRXhhbXBsZXMsIGRlbGV0ZVRvZG8sIGxvZ1RvZG9zIH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IG1vZGVsIH1cbiIsImltcG9ydCB7IG1vZGVsIH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7IHByb2plY3RzUmVuZGVyIH0gZnJvbSAnLi9wcm9qZWN0c1JlbmRlcidcblxuY29uc3QgcHJvamVjdHNDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gICAgcHJvamVjdHNSZW5kZXIuaW5kZXgobW9kZWwucHJvamVjdHMpO1xuICB9O1xuXG4gIHJldHVybiB7IGluZGV4IH07XG59KSgpO1xuXG5leHBvcnQgeyBwcm9qZWN0c0NvbnRyb2xsZXIgfVxuIiwiaW1wb3J0IHsgYXBwUmVuZGVyIH0gZnJvbSAnLi9hcHBSZW5kZXInXG5pbXBvcnQgeyBwcm9qZWN0c0NvbnRyb2xsZXIgfSBmcm9tICcuL3Byb2plY3RzQ29udHJvbGxlcidcbmltcG9ydCB7IHRvZG9zQ29udHJvbGxlciB9IGZyb20gJy4vdG9kb3NDb250cm9sbGVyJ1xuXG5jb25zdCBwcm9qZWN0c1JlbmRlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gKHByb2plY3RzKSA9PiB7XG4gICAgYXBwUmVuZGVyLmNsZWFyQ29udGVudCgpO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIC8qbGV0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwYWNlci5zdHlsZS5oZWlnaHQgPSAnN3B4JztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNwYWNlcik7Ki9cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW1EaXYnKTtcbiAgICAgIGRpdi5pZCA9IGBwcm9qZWN0XyR7cHJvamVjdHNbaV19YDtcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRvZG9zQ29udHJvbGxlci5pbmRleCh0aGlzLmlkKTtcbiAgICAgIH0pO1xuICAgICAgLy8gbmVlZCBkaWZmZXJlbnQgc3R5bGluZyBjbGFzcyBmb3IgZGVsZXRlYm94ICsgZXZlbnRsaXN0ZW5lclxuICAgICAgbGV0IGRlbGV0ZWJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGVsZXRlYm94LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZWJveCcpO1xuICAgICAgZGVsZXRlYm94LmlkID0gYGRlbGV0ZV8ke3Byb2plY3RzW2ldfWA7XG4gICAgICBkZWxldGVib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coYGNsaWNrZWQ6ICR7dGhpcy5pZH1gKTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdCh0aGlzLmlkKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IHByb2plY3RzW2ldO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGRlbGV0ZWJveCk7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIH1cblxuICAgIGxldCBhZGROZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGROZXcuaWQgPSAnYWRkTmV3JztcbiAgICBhZGROZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgZm9ybSh0aGlzLmlkKTtcbiAgICB9KTtcbiAgICBsZXQgcGx1c1NpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGx1c1NpZ24uaWQgPSAncGx1c1NpZ24nO1xuICAgIHBsdXNTaWduLmlubmVySFRNTCA9ICcrJztcbiAgICBhZGROZXcuYXBwZW5kQ2hpbGQocGx1c1NpZ24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkTmV3KTtcblxuICAgIC8vIHNldCBuYXZiYXIgY29udGVudCAmIHJlbW92ZSBsaW5rIHRvIHByb2plY3RzIGluZGV4XG4gICAgbGV0IHByb2plY3RzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzQnRuJyk7XG4gICAgcHJvamVjdHNCdG4uY2xhc3NMaXN0LmFkZCgnZXllSWNvbicpO1xuICAgIHByb2plY3RzQnRuLnRpdGxlID0gJ3ZpZXcgYWxsIHRvZG8gaXRlbXMgZnJvbSBhbGwgcHJvamVjdHMnO1xuICAgIHByb2plY3RzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIHRvZG9zQ29udHJvbGxlci5pbmRleCgncHJvamVjdF9BbGwgdG8tZG8gaXRlbXMnKTtcbiAgICB9KTtcbiAgICBsZXQgbmF2TXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdk1zZycpO1xuICAgIG5hdk1zZy5pbm5lckhUTUwgPSAnUHJvamVjdHMnO1xuICB9O1xuXG4gIC8vIHByaXZhdGVcblxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHRoaXNJZCkgPT4ge1xuICAgIGxldCBpZCA9IHRoaXNJZC5zbGljZSg3KTtcbiAgICBpZiAoY29uZmlybShgUmVhbGx5IGRlbGV0ZSBwcm9qZWN0OiAke2lkfT9gKSA9PSB0cnVlKSB7XG4gICAgICBjb25zb2xlLmxvZygnZGVsZXRlIGNvbmZpcm1lZCEnKTtcbiAgICAgIC8vcHJvamVjdHNDb250cm9sbGVyLmRlc3Ryb3kodGhpcy5pZCk7XG4gICAgfVxuICB9O1xuXG4gIC8vID8gd2lsbCB1c2UgcGFyZW50IGVsZWxtZW50IGFzIHBhcmFtLCBub3QgaWQsIHRoZW4gZmluZCBpZHMgbmVlZGVkXG4gIGNvbnN0IGZvcm0gPSAodGhpc0lkKSA9PiB7XG4gICAgY29uc29sZS5sb2codGhpc0lkKTtcbiAgfTtcblxuICByZXR1cm4geyBpbmRleCB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdHNSZW5kZXIgfVxuIiwiaW1wb3J0IHsgbW9kZWwgfSBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IHsgdG9kb3NSZW5kZXIgfSBmcm9tICcuL3RvZG9zUmVuZGVyJ1xuXG5jb25zdCB0b2Rvc0NvbnRyb2xsZXIgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IHNvcnRCeVByaW9yaXR5ID0gKHRvZG9zKSA9PiB7XG4gICAgbGV0IHNvcnRlZCA9IFtdLCBoaWdoID0gW10sIG1lZGl1bSA9IFtdLCBsb3cgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodG9kb3NbaV0ucHJpb3JpdHkgPT0gJ2hpZ2gnKSB7IGhpZ2gucHVzaCh0b2Rvc1tpXSkgfVxuICAgICAgZWxzZSBpZiAodG9kb3NbaV0ucHJpb3JpdHkgPT0gJ21lZGl1bScpIHsgbWVkaXVtLnB1c2godG9kb3NbaV0pIH1cbiAgICAgIGVsc2UgeyBsb3cucHVzaCh0b2Rvc1tpXSkgfVxuICAgIH1cbiAgICByZXR1cm4gc29ydGVkID0gaGlnaC5jb25jYXQobWVkaXVtLmNvbmNhdChsb3cpKTtcbiAgfTtcblxuICBjb25zdCBpbmRleCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdCA9IHByb2plY3Quc2xpY2UoOCk7XG4gICAgLy8gSW5zZXJ0IGZpbHRlciBvZiB0b2RvcyBieSBwcm9qZWN0IG5hbWVcbiAgICBpZiAocHJvamVjdCA9PSAnQWxsIHRvLWRvIGl0ZW1zJykge1xuICAgICAgdG9kb3NSZW5kZXIuaW5kZXgoc29ydEJ5UHJpb3JpdHkobW9kZWwudG9kb3MpLCAnQWxsIHRvLWRvIGl0ZW1zJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b2RvcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2RlbC50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdCA9PSBtb2RlbC50b2Rvc1tpXS5wcm9qZWN0KSB7IHRvZG9zLnB1c2gobW9kZWwudG9kb3NbaV0pOyB9XG4gICAgICB9XG4gICAgICB0b2Rvc1JlbmRlci5pbmRleChzb3J0QnlQcmlvcml0eSh0b2RvcyksIHByb2plY3QpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZXN0cm95ID0gKHRoaXNJZCkgPT4ge1xuICAgIGxldCBpZCA9IHRoaXNJZC5zbGljZSg3KTtcbiAgICBtb2RlbC5kZWxldGVUb2RvKGlkKTtcbiAgICAvLyBERUJVRzpcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgbW9kZWwubG9nVG9kb3MoKTtcbiAgICB9LCA1MDApO1xuICB9O1xuXG4gIGluZGV4KCdwcm9qZWN0X0FsbCB0by1kbyBpdGVtcycpO1xuXG4gIHJldHVybiB7IGluZGV4LCBkZXN0cm95IH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IHRvZG9zQ29udHJvbGxlciB9XG4iLCJpbXBvcnQgeyBhcHBSZW5kZXIgfSBmcm9tICcuL2FwcFJlbmRlcidcbmltcG9ydCB7IHRvZG9zQ29udHJvbGxlciB9IGZyb20gJy4vdG9kb3NDb250cm9sbGVyJ1xuaW1wb3J0IHsgcHJvamVjdHNDb250cm9sbGVyIH0gZnJvbSAnLi9wcm9qZWN0c0NvbnRyb2xsZXInXG5cbmNvbnN0IHRvZG9zUmVuZGVyID0gKCgpID0+IHtcblxuICBjb25zdCBpbmRleCA9ICh0b2RvcywgcHJvamVjdCkgPT4ge1xuICAgIGFwcFJlbmRlci5jbGVhckNvbnRlbnQoKTtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdpdGVtRGl2Jyk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChgJHt0b2Rvc1tpXS5wcmlvcml0eX1EaXZgKTtcbiAgICAgIGRpdi5pZCA9IGAke3RvZG9zW2ldLmlkfWA7XG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgY2xpY2tlZCBkaXY6ICR7dGhpcy5pZH1gKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgICAgY2hlY2tib3guaWQgPSBgZGVsZXRlXyR7dG9kb3NbaV0uaWR9YDtcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRvZG9zQ29udHJvbGxlci5kZXN0cm95KHRoaXMuaWQpO1xuICAgICAgICByZW1vdmVUb2RvKHRoaXMuaWQpO1xuICAgICAgfSk7XG4gICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gdG9kb3NbaV0udGl0bGU7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB9XG5cbiAgICBsZXQgYWRkTmV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkTmV3LmlkID0gJ2FkZE5ldyc7XG4gICAgYWRkTmV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGZvcm0odGhpcy5pZCk7XG4gICAgfSk7XG4gICAgbGV0IHBsdXNTaWduID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBsdXNTaWduLmlkID0gJ3BsdXNTaWduJztcbiAgICBwbHVzU2lnbi5pbm5lckhUTUwgPSAnKyc7XG4gICAgYWRkTmV3LmFwcGVuZENoaWxkKHBsdXNTaWduKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZE5ldyk7XG5cbiAgICAvLyBzZXQgbmF2YmFyIGNvbnRlbnQgJiBhZGQgbGluayB0byBwcm9qZWN0cyBpbmRleFxuICAgIGxldCBuYXZNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2TXNnJyk7XG4gICAgbmF2TXNnLmlubmVySFRNTCA9IHByb2plY3Q7XG4gICAgbGV0IHByb2plY3RzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzQnRuJyk7XG4gICAgcHJvamVjdHNCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZXllSWNvbicpO1xuICAgIHByb2plY3RzQnRuLmNsYXNzTGlzdC5hZGQoJ2ZvbGRlcnNJY29uJyk7XG4gICAgcHJvamVjdHNCdG4udGl0bGUgPSAndmlldyBwcm9qZWN0cyc7XG4gICAgcHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgcHJvamVjdHNDb250cm9sbGVyLmluZGV4KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gcHJpdmF0ZTpcblxuICBjb25zdCByZW1vdmVUb2RvID0gKHRoaXNJZCkgPT4ge1xuICAgIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXNJZCk7XG4gICAgY2hlY2tCb3guaWQgPSAnZGVsZXRlZCc7XG4gICAgbGV0IGlkID0gdGhpc0lkLnNsaWNlKDcpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgdG9kb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgIHRvZG9EaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0b2RvRGl2KTtcbiAgICB9LCAzMDApO1xuICB9O1xuXG4gIC8vID8gd2lsbCB1c2UgcGFyZW50IGVsZWxtZW50IGFzIHBhcmFtLCBub3QgaWQsIHRoZW4gZmluZCBpZHMgbmVlZGVkXG4gIGNvbnN0IGZvcm0gPSAodGhpc0lkKSA9PiB7XG4gICAgY29uc29sZS5sb2codGhpc0lkKTtcbiAgfVxuXG4gIHJldHVybiB7IGluZGV4IH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IHRvZG9zUmVuZGVyIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=