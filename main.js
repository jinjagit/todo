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

  const fitString = (string, width) => {
    if (string.length * 12 > width) {
      let remove = (Math.floor(width / 12) - 3) - string.length;
      string = string.slice(0, remove).concat('...');
    }

    return string;
  };

  // ----------- extras -----------------




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

  return { clearContent, fitString, placeholderContent };

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
  let todosExamples = [
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
      project: 'write article' },
    { title: 'todo with example really long title', description: 'for testing long strings', priority: 'medium',
      project: 'project with really long title' }
  ];

  for (let i = 0; i < todosExamples.length; i++) {
    todos.push(
      todoFactory(uniqueId(), todosExamples[i].title, todosExamples[i].description,
      todosExamples[i].priority, todosExamples[i].project
    ));
  }

  projects = ['regular stuff', 'write article', 'project with really long title'];

  // DEBUG:
  const logTodos = () => {
    console.log('----------');
    for (let i = 0; i < todos.length; i++) {
      todos[i].output();
    }
  };

  // C.R.U.D:

  const deleteTodo = (id) => {
    todos.splice(todos.indexOf(todos.find(e => e.id == id)), 1);
  };

  const deleteProject = (project) => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].project == project) {
        deleteTodo(todos[i].id);
        i--;
      }
    }
    projects.splice(projects.indexOf(projects.find(e => e == project)), 1);
  };

  return { todos, projects, deleteTodo, deleteProject, logTodos };

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

  const destroy = (project) => {
    _model__WEBPACK_IMPORTED_MODULE_0__["model"].deleteProject(project);
  };

  return { index, destroy };
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
    let titleW = content.offsetWidth - 56;

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
      title.innerHTML = _appRender__WEBPACK_IMPORTED_MODULE_0__["appRender"].fitString(projects[i], titleW);
      title.classList.add('title');
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

    // set navbar content & link to 'all todo items' index
    let projectsBtn = document.getElementById('projectsBtn');
    projectsBtn.classList.add('eyeIcon');
    projectsBtn.title = 'view all todo items from all projects';
    projectsBtn.addEventListener("click", function() {
      _todosController__WEBPACK_IMPORTED_MODULE_2__["todosController"].index('project_All to-do items');
    });
    let navMsg = document.getElementById('navMsg');
    navMsg.innerHTML = 'Projects';

    document.body.onresize = function(){
      let titles = document.getElementsByClassName('title');
      for (let i = 0; i < titles.length; i++) {
        titles[i].innerHTML = _appRender__WEBPACK_IMPORTED_MODULE_0__["appRender"].fitString(
          projects[i], content.offsetWidth - 56
        );
      }
    };
  };

  // private

  const removeProject = (thisId) => {
    let id = thisId.slice(7);
    if (confirm(`Really delete project: ${id}\nand all todo items it contains?`) == true) {
      _projectsController__WEBPACK_IMPORTED_MODULE_1__["projectsController"].destroy(id);
      let projectDiv = document.getElementById(`project_${id}`);
      projectDiv.parentNode.removeChild(projectDiv);
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
    _model__WEBPACK_IMPORTED_MODULE_0__["model"].deleteTodo(thisId.slice(7));
  };

  index('project_All to-do items'); // runs at app start

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
    let titleW = content.offsetWidth - 56;

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
      title.innerHTML = _appRender__WEBPACK_IMPORTED_MODULE_0__["appRender"].fitString(todos[i].title, titleW);
      title.classList.add('title');
      content.appendChild(div);
      div.appendChild(checkbox);
      div.appendChild(title);
    }

    let addNew = document.createElement('div');
    addNew.id = 'addNew';
    addNew.addEventListener("click", function() {
      addNew.style.display = 'none';
      form(this.id);
    });
    let plusSign = document.createElement('p');
    plusSign.id = 'plusSign';
    plusSign.innerHTML = '+';
    addNew.appendChild(plusSign);
    content.appendChild(addNew);

    // set navbar content & link to projects index
    let navMsg = document.getElementById('navMsg');
    navMsg.innerHTML = _appRender__WEBPACK_IMPORTED_MODULE_0__["appRender"].fitString(
      project, document.getElementById('msgDiv').offsetWidth - 12
    );
    let projectsBtn = document.getElementById('projectsBtn');
    projectsBtn.classList.remove('eyeIcon');
    projectsBtn.classList.add('foldersIcon');
    projectsBtn.title = 'view projects';
    projectsBtn.addEventListener("click", function() {
      _projectsController__WEBPACK_IMPORTED_MODULE_2__["projectsController"].index();
    });

    document.body.onresize = function(){
      navMsg.innerHTML = _appRender__WEBPACK_IMPORTED_MODULE_0__["appRender"].fitString(
        project, document.getElementById('msgDiv').offsetWidth - 12
      );
      let titles = document.getElementsByClassName('title');
      for (let i = 0; i < titles.length; i++) {
        titles[i].innerHTML = _appRender__WEBPACK_IMPORTED_MODULE_0__["appRender"].fitString(
          todos[i].title, content.offsetWidth - 56
        );
      }
    };
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
    const addInput = (id) => {
      let label = document.createElement('h4');
      label.innerHTML = `${id}:`;
      let input = document.createElement('input');
      input.type = 'text';
      input.id = `${id}`;
      todoForm.appendChild(label);
      todoForm.appendChild(input);
    }

    let content = document.getElementById('content');
    let todoForm = document.createElement('form');
    addInput('title');
    addInput('description');

    if (thisId == 'addNew') {
      let formDiv = document.createElement('div');
      formDiv.classList.add('formDiv');
      formDiv.appendChild(todoForm);
      content.appendChild(formDiv);
    } else { // use thisId to find element for form; clear it first

    }
  }

  return { index };

})();




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcFJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0c0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3RzUmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90b2Rvc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZG9zUmVuZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7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LG9CQUFvQixHQUFHO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxPQUFPLHdDQUF3Qzs7QUFFcEQ7QUFDQTs7QUFFQSxVQUFVOztBQUVWLENBQUM7O0FBRXFCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IGFwcFJlbmRlciA9ICgoKSA9PiB7XG5cbiAgLy8gc2V0IHN0eWxpbmcgLyBiZWhhdmlvdXJzIGNvbW1vbiB0byBhbGwgdmlld3M6XG4gIGxldCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJyk7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAvLyBzZXQgbmF2YmFyIHNjcm9sbCBiZWhhdmlvdXIgKGhpZGUgLyByZXZlYWwpOlxuICB2YXIgcHJldlNjcm9sbHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgaWYgKHByZXZTY3JvbGxwb3MgPiBjdXJyZW50U2Nyb2xsUG9zKSB7XG4gICAgICBuYXZiYXIuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgICBjb250ZW50LnN0eWxlLm1hcmdpblRvcCA9ICc1MHB4JztcbiAgICB9IGVsc2Uge1xuICAgICAgbmF2YmFyLnN0eWxlLnRvcCA9ICctNTBweCc7XG4gICAgICBjb250ZW50LnN0eWxlLm1hcmdpblRvcCA9ICcwcHgnO1xuICAgIH1cbiAgICBwcmV2U2Nyb2xscG9zID0gY3VycmVudFNjcm9sbFBvcztcbiAgfVxuXG4gIC8vIGRlY2xhcmUgZnVuY3Rpb25zIHRvIGNvbW1vbiB0byB0b2Rvc1JlbmRlciBhbmQgcHJvamVjdHNSZW5kZXIgbW9kdWxlczpcblxuICBjb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpdFN0cmluZyA9IChzdHJpbmcsIHdpZHRoKSA9PiB7XG4gICAgaWYgKHN0cmluZy5sZW5ndGggKiAxMiA+IHdpZHRoKSB7XG4gICAgICBsZXQgcmVtb3ZlID0gKE1hdGguZmxvb3Iod2lkdGggLyAxMikgLSAzKSAtIHN0cmluZy5sZW5ndGg7XG4gICAgICBzdHJpbmcgPSBzdHJpbmcuc2xpY2UoMCwgcmVtb3ZlKS5jb25jYXQoJy4uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0gZXh0cmFzIC0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cbiAgLy8gREVCVUc6IGNyZWF0ZSBjb250ZW50IHRhbGxlciB0aGFuIHBhZ2UgdG8gdGVzdCBzY3JvbGwgZWZmZWN0c1xuICBjb25zdCBwbGFjZWhvbGRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgbGV0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwYWNlci5zdHlsZS5oZWlnaHQgPSAnMzBweCc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzcGFjZXIpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDcwOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBwYXJhLmlubmVySFRNTCA9IFwicGxhY2Vob2xkZXIgY29udGVudFwiO1xuICAgICAgcGFyYS5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKTtcbiAgfTtcblxuICByZXR1cm4geyBjbGVhckNvbnRlbnQsIGZpdFN0cmluZywgcGxhY2Vob2xkZXJDb250ZW50IH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IGFwcFJlbmRlciB9XG4iLCIvL2ltcG9ydCB7IGFwcFJlbmRlciB9IGZyb20gJy4vYXBwUmVuZGVyJ1xuaW1wb3J0IHsgdG9kb3NDb250cm9sbGVyIH0gZnJvbSAnLi90b2Rvc0NvbnRyb2xsZXInXG5cbi8vIGFkZCBwbGFjZWhvbGRlciBjb250ZW50LCBmb3IgdGVzdGluZyBvZiBuYXZiYXIgaGlkZS9yZXZlYWwgb24gc2Nyb2xsOlxuLy9hcHBSZW5kZXIucGxhY2Vob2xkZXJDb250ZW50KCk7XG4iLCJjb25zdCBtb2RlbCA9ICgoKSA9PiB7XG5cbiAgbGV0IHRvZG9zID0gW107XG4gIGxldCBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IHVuaXF1ZUlkID0gKCgpID0+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICArK2NvdW50O1xuICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgdG9kb0ZhY3RvcnkgPSAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QpID0+IHtcblxuICAgIGNvbnN0IG91dHB1dCA9ICgpID0+IGNvbnNvbGUubG9nKGBpZDogJHtpZH0sIHRpdGxlOiAke3RpdGxlfSwgZGVzYzogJHtkZXNjcmlwdGlvbn0sIHByaW9yaXR5OiAke3ByaW9yaXR5fSwgcHJvamVjdDogJHtwcm9qZWN0fWApO1xuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSBuZXdUaXRsZSA9PiB0aXRsZSA9IG5ld1RpdGxlO1xuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb24gPT4gZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IG5ld1ByaW9yaXR5ID0+IHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgY29uc3Qgc2V0UHJvamVjdCA9IG5ld1Byb2plY3QgPT4gcHJvamVjdCA9IG5ld1Byb2plY3Q7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QsXG4gICAgICBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldFByaW9yaXR5LCBzZXRQcm9qZWN0LCBvdXRwdXQgfTtcbiAgfTtcblxuICAvLyBDaGFuZ2UgdGhpcyB0byBhIGNoZWNrIGZvciBsb2NhbCBzdG9yYWdlLCBldGMuXG4gIGxldCB0b2Rvc0V4YW1wbGVzID0gW1xuICAgIHsgdGl0bGU6ICdkbyBsYXVuZHJ5JywgZGVzY3JpcHRpb246ICdyZW1lbWJlciBqZWFucycsIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICBwcm9qZWN0OiAncmVndWxhciBzdHVmZicgfSxcbiAgICB7IHRpdGxlOiAnd2FzaCBjYXInLCBkZXNjcmlwdGlvbjogJ25pbCcsIHByaW9yaXR5OiAnbG93JyxcbiAgICAgIHByb2plY3Q6ICdyZWd1bGFyIHN0dWZmJyB9LFxuICAgIHsgdGl0bGU6ICdidXkgYmVlcicsIGRlc2NyaXB0aW9uOiAnS3JvbmVuYmVyZycsIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgIHByb2plY3Q6ICdyZWd1bGFyIHN0dWZmJyB9LFxuICAgIHsgdGl0bGU6ICdyZXNlYXJjaCBhcnJvdyBmdW5jdGlvbnMnLCBkZXNjcmlwdGlvbjogJ21ha2Ugbm90ZXMgYW5kIHNhdmUgbGlua3MnLCBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgcHJvamVjdDogJ3dyaXRlIGFydGljbGUnIH0sXG4gICAgeyB0aXRsZTogJ3dyaXRlIGJvZHkgb2YgYXJ0aWNsZScsIGRlc2NyaXB0aW9uOiAnYWN0dWFsbHkgd3JpdGUgdGhlIHRoaW5nJywgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgcHJvamVjdDogJ3dyaXRlIGFydGljbGUnIH0sXG4gICAgeyB0aXRsZTogJ3Byb29mcmVhZCBhcnRpY2xlJywgZGVzY3JpcHRpb246ICdjaGVjayBmb3IgZXJyb3JzIGFuZCBiYWQgZ3JhbW1hcicsIHByaW9yaXR5OiAnbG93JyxcbiAgICAgIHByb2plY3Q6ICd3cml0ZSBhcnRpY2xlJyB9LFxuICAgIHsgdGl0bGU6ICdyZXNlYXJjaCBJSUZFcycsIGRlc2NyaXB0aW9uOiAnd2hhdCBhcmUgdGhleSwgYW5kIHdoZW4gYXJlIHRoZXkgdXNlZD8nLCBwcmlvcml0eTogJ21lZGl1bScsXG4gICAgICBwcm9qZWN0OiAnd3JpdGUgYXJ0aWNsZScgfSxcbiAgICB7IHRpdGxlOiAndG9kbyB3aXRoIGV4YW1wbGUgcmVhbGx5IGxvbmcgdGl0bGUnLCBkZXNjcmlwdGlvbjogJ2ZvciB0ZXN0aW5nIGxvbmcgc3RyaW5ncycsIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgIHByb2plY3Q6ICdwcm9qZWN0IHdpdGggcmVhbGx5IGxvbmcgdGl0bGUnIH1cbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zRXhhbXBsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB0b2Rvcy5wdXNoKFxuICAgICAgdG9kb0ZhY3RvcnkodW5pcXVlSWQoKSwgdG9kb3NFeGFtcGxlc1tpXS50aXRsZSwgdG9kb3NFeGFtcGxlc1tpXS5kZXNjcmlwdGlvbixcbiAgICAgIHRvZG9zRXhhbXBsZXNbaV0ucHJpb3JpdHksIHRvZG9zRXhhbXBsZXNbaV0ucHJvamVjdFxuICAgICkpO1xuICB9XG5cbiAgcHJvamVjdHMgPSBbJ3JlZ3VsYXIgc3R1ZmYnLCAnd3JpdGUgYXJ0aWNsZScsICdwcm9qZWN0IHdpdGggcmVhbGx5IGxvbmcgdGl0bGUnXTtcblxuICAvLyBERUJVRzpcbiAgY29uc3QgbG9nVG9kb3MgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b2Rvc1tpXS5vdXRwdXQoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQy5SLlUuRDpcblxuICBjb25zdCBkZWxldGVUb2RvID0gKGlkKSA9PiB7XG4gICAgdG9kb3Muc3BsaWNlKHRvZG9zLmluZGV4T2YodG9kb3MuZmluZChlID0+IGUuaWQgPT0gaWQpKSwgMSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRvZG9zW2ldLnByb2plY3QgPT0gcHJvamVjdCkge1xuICAgICAgICBkZWxldGVUb2RvKHRvZG9zW2ldLmlkKTtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgIH1cbiAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihwcm9qZWN0cy5maW5kKGUgPT4gZSA9PSBwcm9qZWN0KSksIDEpO1xuICB9O1xuXG4gIHJldHVybiB7IHRvZG9zLCBwcm9qZWN0cywgZGVsZXRlVG9kbywgZGVsZXRlUHJvamVjdCwgbG9nVG9kb3MgfTtcblxufSkoKTtcblxuZXhwb3J0IHsgbW9kZWwgfVxuIiwiaW1wb3J0IHsgbW9kZWwgfSBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IHsgcHJvamVjdHNSZW5kZXIgfSBmcm9tICcuL3Byb2plY3RzUmVuZGVyJ1xuXG5jb25zdCBwcm9qZWN0c0NvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBpbmRleCA9ICgpID0+IHtcbiAgICBwcm9qZWN0c1JlbmRlci5pbmRleChtb2RlbC5wcm9qZWN0cyk7XG4gIH07XG5cbiAgY29uc3QgZGVzdHJveSA9IChwcm9qZWN0KSA9PiB7XG4gICAgbW9kZWwuZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcbiAgfTtcblxuICByZXR1cm4geyBpbmRleCwgZGVzdHJveSB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdHNDb250cm9sbGVyIH1cbiIsImltcG9ydCB7IGFwcFJlbmRlciB9IGZyb20gJy4vYXBwUmVuZGVyJ1xuaW1wb3J0IHsgcHJvamVjdHNDb250cm9sbGVyIH0gZnJvbSAnLi9wcm9qZWN0c0NvbnRyb2xsZXInXG5pbXBvcnQgeyB0b2Rvc0NvbnRyb2xsZXIgfSBmcm9tICcuL3RvZG9zQ29udHJvbGxlcidcblxuY29uc3QgcHJvamVjdHNSZW5kZXIgPSAoKCkgPT4ge1xuICBjb25zdCBpbmRleCA9IChwcm9qZWN0cykgPT4ge1xuICAgIGFwcFJlbmRlci5jbGVhckNvbnRlbnQoKTtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgbGV0IHRpdGxlVyA9IGNvbnRlbnQub2Zmc2V0V2lkdGggLSA1NjtcblxuICAgIC8qbGV0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwYWNlci5zdHlsZS5oZWlnaHQgPSAnN3B4JztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNwYWNlcik7Ki9cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW1EaXYnKTtcbiAgICAgIGRpdi5pZCA9IGBwcm9qZWN0XyR7cHJvamVjdHNbaV19YDtcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRvZG9zQ29udHJvbGxlci5pbmRleCh0aGlzLmlkKTtcbiAgICAgIH0pO1xuICAgICAgLy8gbmVlZCBkaWZmZXJlbnQgc3R5bGluZyBjbGFzcyBmb3IgZGVsZXRlYm94ICsgZXZlbnRsaXN0ZW5lclxuICAgICAgbGV0IGRlbGV0ZWJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGVsZXRlYm94LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZWJveCcpO1xuICAgICAgZGVsZXRlYm94LmlkID0gYGRlbGV0ZV8ke3Byb2plY3RzW2ldfWA7XG4gICAgICBkZWxldGVib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coYGNsaWNrZWQ6ICR7dGhpcy5pZH1gKTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdCh0aGlzLmlkKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IGFwcFJlbmRlci5maXRTdHJpbmcocHJvamVjdHNbaV0sIHRpdGxlVyk7XG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGRlbGV0ZWJveCk7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIH1cblxuICAgIGxldCBhZGROZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGROZXcuaWQgPSAnYWRkTmV3JztcbiAgICBhZGROZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgZm9ybSh0aGlzLmlkKTtcbiAgICB9KTtcbiAgICBsZXQgcGx1c1NpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGx1c1NpZ24uaWQgPSAncGx1c1NpZ24nO1xuICAgIHBsdXNTaWduLmlubmVySFRNTCA9ICcrJztcbiAgICBhZGROZXcuYXBwZW5kQ2hpbGQocGx1c1NpZ24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkTmV3KTtcblxuICAgIC8vIHNldCBuYXZiYXIgY29udGVudCAmIGxpbmsgdG8gJ2FsbCB0b2RvIGl0ZW1zJyBpbmRleFxuICAgIGxldCBwcm9qZWN0c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c0J0bicpO1xuICAgIHByb2plY3RzQnRuLmNsYXNzTGlzdC5hZGQoJ2V5ZUljb24nKTtcbiAgICBwcm9qZWN0c0J0bi50aXRsZSA9ICd2aWV3IGFsbCB0b2RvIGl0ZW1zIGZyb20gYWxsIHByb2plY3RzJztcbiAgICBwcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICB0b2Rvc0NvbnRyb2xsZXIuaW5kZXgoJ3Byb2plY3RfQWxsIHRvLWRvIGl0ZW1zJyk7XG4gICAgfSk7XG4gICAgbGV0IG5hdk1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZNc2cnKTtcbiAgICBuYXZNc2cuaW5uZXJIVE1MID0gJ1Byb2plY3RzJztcblxuICAgIGRvY3VtZW50LmJvZHkub25yZXNpemUgPSBmdW5jdGlvbigpe1xuICAgICAgbGV0IHRpdGxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpdGxlJyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aXRsZXNbaV0uaW5uZXJIVE1MID0gYXBwUmVuZGVyLmZpdFN0cmluZyhcbiAgICAgICAgICBwcm9qZWN0c1tpXSwgY29udGVudC5vZmZzZXRXaWR0aCAtIDU2XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBwcml2YXRlXG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9ICh0aGlzSWQpID0+IHtcbiAgICBsZXQgaWQgPSB0aGlzSWQuc2xpY2UoNyk7XG4gICAgaWYgKGNvbmZpcm0oYFJlYWxseSBkZWxldGUgcHJvamVjdDogJHtpZH1cXG5hbmQgYWxsIHRvZG8gaXRlbXMgaXQgY29udGFpbnM/YCkgPT0gdHJ1ZSkge1xuICAgICAgcHJvamVjdHNDb250cm9sbGVyLmRlc3Ryb3koaWQpO1xuICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdF8ke2lkfWApO1xuICAgICAgcHJvamVjdERpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByb2plY3REaXYpO1xuICAgIH1cbiAgfTtcblxuICAvLyA/IHdpbGwgdXNlIHBhcmVudCBlbGVsbWVudCBhcyBwYXJhbSwgbm90IGlkLCB0aGVuIGZpbmQgaWRzIG5lZWRlZFxuICBjb25zdCBmb3JtID0gKHRoaXNJZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRoaXNJZCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgaW5kZXggfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHByb2plY3RzUmVuZGVyIH1cbiIsImltcG9ydCB7IG1vZGVsIH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7IHRvZG9zUmVuZGVyIH0gZnJvbSAnLi90b2Rvc1JlbmRlcidcblxuY29uc3QgdG9kb3NDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3Qgc29ydEJ5UHJpb3JpdHkgPSAodG9kb3MpID0+IHtcbiAgICBsZXQgc29ydGVkID0gW10sIGhpZ2ggPSBbXSwgbWVkaXVtID0gW10sIGxvdyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0b2Rvc1tpXS5wcmlvcml0eSA9PSAnaGlnaCcpIHsgaGlnaC5wdXNoKHRvZG9zW2ldKSB9XG4gICAgICBlbHNlIGlmICh0b2Rvc1tpXS5wcmlvcml0eSA9PSAnbWVkaXVtJykgeyBtZWRpdW0ucHVzaCh0b2Rvc1tpXSkgfVxuICAgICAgZWxzZSB7IGxvdy5wdXNoKHRvZG9zW2ldKSB9XG4gICAgfVxuICAgIHJldHVybiBzb3J0ZWQgPSBoaWdoLmNvbmNhdChtZWRpdW0uY29uY2F0KGxvdykpO1xuICB9O1xuXG4gIGNvbnN0IGluZGV4ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0ID0gcHJvamVjdC5zbGljZSg4KTtcbiAgICBpZiAocHJvamVjdCA9PSAnQWxsIHRvLWRvIGl0ZW1zJykge1xuICAgICAgdG9kb3NSZW5kZXIuaW5kZXgoc29ydEJ5UHJpb3JpdHkobW9kZWwudG9kb3MpLCAnQWxsIHRvLWRvIGl0ZW1zJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b2RvcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2RlbC50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdCA9PSBtb2RlbC50b2Rvc1tpXS5wcm9qZWN0KSB7IHRvZG9zLnB1c2gobW9kZWwudG9kb3NbaV0pOyB9XG4gICAgICB9XG4gICAgICB0b2Rvc1JlbmRlci5pbmRleChzb3J0QnlQcmlvcml0eSh0b2RvcyksIHByb2plY3QpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZXN0cm95ID0gKHRoaXNJZCkgPT4ge1xuICAgIG1vZGVsLmRlbGV0ZVRvZG8odGhpc0lkLnNsaWNlKDcpKTtcbiAgfTtcblxuICBpbmRleCgncHJvamVjdF9BbGwgdG8tZG8gaXRlbXMnKTsgLy8gcnVucyBhdCBhcHAgc3RhcnRcblxuICByZXR1cm4geyBpbmRleCwgZGVzdHJveSB9O1xufSkoKTtcblxuZXhwb3J0IHsgdG9kb3NDb250cm9sbGVyIH1cbiIsImltcG9ydCB7IGFwcFJlbmRlciB9IGZyb20gJy4vYXBwUmVuZGVyJ1xuaW1wb3J0IHsgdG9kb3NDb250cm9sbGVyIH0gZnJvbSAnLi90b2Rvc0NvbnRyb2xsZXInXG5pbXBvcnQgeyBwcm9qZWN0c0NvbnRyb2xsZXIgfSBmcm9tICcuL3Byb2plY3RzQ29udHJvbGxlcidcblxuY29uc3QgdG9kb3NSZW5kZXIgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IGluZGV4ID0gKHRvZG9zLCBwcm9qZWN0KSA9PiB7XG4gICAgYXBwUmVuZGVyLmNsZWFyQ29udGVudCgpO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBsZXQgdGl0bGVXID0gY29udGVudC5vZmZzZXRXaWR0aCAtIDU2O1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaXRlbURpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7dG9kb3NbaV0ucHJpb3JpdHl9RGl2YCk7XG4gICAgICBkaXYuaWQgPSBgJHt0b2Rvc1tpXS5pZH1gO1xuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGNsaWNrZWQgZGl2OiAke3RoaXMuaWR9YCk7XG4gICAgICB9KTtcbiAgICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcbiAgICAgIGNoZWNrYm94LmlkID0gYGRlbGV0ZV8ke3RvZG9zW2ldLmlkfWA7XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0b2Rvc0NvbnRyb2xsZXIuZGVzdHJveSh0aGlzLmlkKTtcbiAgICAgICAgcmVtb3ZlVG9kbyh0aGlzLmlkKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IGFwcFJlbmRlci5maXRTdHJpbmcodG9kb3NbaV0udGl0bGUsIHRpdGxlVyk7XG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgfVxuXG4gICAgbGV0IGFkZE5ldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZE5ldy5pZCA9ICdhZGROZXcnO1xuICAgIGFkZE5ldy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBhZGROZXcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGZvcm0odGhpcy5pZCk7XG4gICAgfSk7XG4gICAgbGV0IHBsdXNTaWduID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBsdXNTaWduLmlkID0gJ3BsdXNTaWduJztcbiAgICBwbHVzU2lnbi5pbm5lckhUTUwgPSAnKyc7XG4gICAgYWRkTmV3LmFwcGVuZENoaWxkKHBsdXNTaWduKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZE5ldyk7XG5cbiAgICAvLyBzZXQgbmF2YmFyIGNvbnRlbnQgJiBsaW5rIHRvIHByb2plY3RzIGluZGV4XG4gICAgbGV0IG5hdk1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZNc2cnKTtcbiAgICBuYXZNc2cuaW5uZXJIVE1MID0gYXBwUmVuZGVyLmZpdFN0cmluZyhcbiAgICAgIHByb2plY3QsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtc2dEaXYnKS5vZmZzZXRXaWR0aCAtIDEyXG4gICAgKTtcbiAgICBsZXQgcHJvamVjdHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNCdG4nKTtcbiAgICBwcm9qZWN0c0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdleWVJY29uJyk7XG4gICAgcHJvamVjdHNCdG4uY2xhc3NMaXN0LmFkZCgnZm9sZGVyc0ljb24nKTtcbiAgICBwcm9qZWN0c0J0bi50aXRsZSA9ICd2aWV3IHByb2plY3RzJztcbiAgICBwcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBwcm9qZWN0c0NvbnRyb2xsZXIuaW5kZXgoKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmJvZHkub25yZXNpemUgPSBmdW5jdGlvbigpe1xuICAgICAgbmF2TXNnLmlubmVySFRNTCA9IGFwcFJlbmRlci5maXRTdHJpbmcoXG4gICAgICAgIHByb2plY3QsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtc2dEaXYnKS5vZmZzZXRXaWR0aCAtIDEyXG4gICAgICApO1xuICAgICAgbGV0IHRpdGxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpdGxlJyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aXRsZXNbaV0uaW5uZXJIVE1MID0gYXBwUmVuZGVyLmZpdFN0cmluZyhcbiAgICAgICAgICB0b2Rvc1tpXS50aXRsZSwgY29udGVudC5vZmZzZXRXaWR0aCAtIDU2XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBwcml2YXRlOlxuXG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAodGhpc0lkKSA9PiB7XG4gICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpc0lkKTtcbiAgICBjaGVja0JveC5pZCA9ICdkZWxldGVkJztcbiAgICBsZXQgaWQgPSB0aGlzSWQuc2xpY2UoNyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGxldCB0b2RvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgdG9kb0Rpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvZG9EaXYpO1xuICAgIH0sIDMwMCk7XG4gIH07XG5cbiAgLy8gPyB3aWxsIHVzZSBwYXJlbnQgZWxlbG1lbnQgYXMgcGFyYW0sIG5vdCBpZCwgdGhlbiBmaW5kIGlkcyBuZWVkZWRcbiAgY29uc3QgZm9ybSA9ICh0aGlzSWQpID0+IHtcbiAgICBjb25zdCBhZGRJbnB1dCA9IChpZCkgPT4ge1xuICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgIGxhYmVsLmlubmVySFRNTCA9IGAke2lkfTpgO1xuICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICBpbnB1dC5pZCA9IGAke2lkfWA7XG4gICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGxldCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBhZGRJbnB1dCgndGl0bGUnKTtcbiAgICBhZGRJbnB1dCgnZGVzY3JpcHRpb24nKTtcblxuICAgIGlmICh0aGlzSWQgPT0gJ2FkZE5ldycpIHtcbiAgICAgIGxldCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm1EaXYnKTtcbiAgICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtRGl2KTtcbiAgICB9IGVsc2UgeyAvLyB1c2UgdGhpc0lkIHRvIGZpbmQgZWxlbWVudCBmb3IgZm9ybTsgY2xlYXIgaXQgZmlyc3RcblxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGluZGV4IH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IHRvZG9zUmVuZGVyIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=