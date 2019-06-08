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
/* harmony import */ var _projectsRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectsRender */ "./src/projectsRender.js");
/* harmony import */ var _todosRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todosRender */ "./src/todosRender.js");



const appRender = (() => {

  const navBtnClick = () => {
    if (navBtn.classList.value == 'foldersIcon') {
      navBtn.classList.remove('foldersIcon');
      navBtn.classList.add('eyeIcon');
      navBtn.title = 'view all todo items from all projects';
      _projectsRender__WEBPACK_IMPORTED_MODULE_0__["projectsRender"].index();
    } else {
      navBtn.classList.remove('eyeIcon');
      navBtn.classList.add('foldersIcon');
      navBtn.title = 'view projects';
      _todosRender__WEBPACK_IMPORTED_MODULE_1__["todosRender"].index('project_All to-do items');
    }
  };

  const initialize = () => {
    let navbar = document.getElementById('navbar');
    let content = document.getElementById('content');

    // set navbar scroll behaviour (hide / reveal)
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

    // set initial navBtn icon & add click event
    let navBtn = document.getElementById('navBtn');
    navBtn.classList.add('foldersIcon');
    navBtn.title = 'view projects';
    navBtn.addEventListener("click", navBtnClick);

    _todosRender__WEBPACK_IMPORTED_MODULE_1__["todosRender"].index('project_All to-do items');
  };






  // declare functions to common to todosRender and projectsRender modules:
  /*
  const clearContent = () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
  };
  */




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




  return { initialize, placeholderContent };

})();




/***/ }),

/***/ "./src/exampleData.js":
/*!****************************!*\
  !*** ./src/exampleData.js ***!
  \****************************/
/*! exports provided: exampleData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exampleData", function() { return exampleData; });
// Default data to use when localStorage unavailable / contains no app data
const exampleData = (() => {
  let todos = [
    { title: 'do laundry', description: 'remember jeans',
      priority: 'high', project: 'regular stuff' },
    { title: 'wash car', description: 'nil',
      priority: 'low', project: 'regular stuff' },
    { title: 'buy beer', description: 'Kronenberg',
      priority: 'medium', project: 'regular stuff' },
    { title: 'research arrow functions',
      description: 'make notes and save links',
      priority: 'high', project: 'write article' },
    { title: 'write body of article', description: 'actually write the thing',
      priority: 'medium', project: 'write article' },
    { title: 'proofread article',
      description: 'check for errors and bad grammar',
      priority: 'low', project: 'write article' },
    { title: 'research IIFEs',
      description: 'what are they, and when are they used?',
      priority: 'medium', project: 'write article' },
    { title: 'todo with example really long title',
      description: 'for testing long strings', priority: 'medium',
      project: 'project with really long title' }
  ];

  let projects = [
    'regular stuff',
    'write article',
    'project with really long title'
  ];

  return {todos, projects}
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
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _appRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appRender */ "./src/appRender.js");



_model__WEBPACK_IMPORTED_MODULE_0__["model"].initialize();
_appRender__WEBPACK_IMPORTED_MODULE_1__["appRender"].initialize();


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
/* harmony import */ var _exampleData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exampleData */ "./src/exampleData.js");


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
      setTitle, setDescription, setPriority, setProject, output
    };
  };

  const initialize = () => {
    // Change this to a check for local storage, etc.
    let todosExamples = _exampleData__WEBPACK_IMPORTED_MODULE_0__["exampleData"].todos;
    for (let i = 0; i < todosExamples.length; i++) {
      todos.push(
        todoFactory(uniqueId(), todosExamples[i].title, todosExamples[i].description,
        todosExamples[i].priority, todosExamples[i].project
      ));
    }

    let projectsExamples = _exampleData__WEBPACK_IMPORTED_MODULE_0__["exampleData"].projects;
    for (let i = 0; i < projectsExamples.length; i++) {
      projects.push(projectsExamples[i]);
    }
  };

  // DEBUG:
  const logTodos = () => {
    console.log('----------');
    for (let i = 0; i < todos.length; i++) {
      todos[i].output();
    }
  };

  // C.R.U.D:

  const indexTodos = (project) => {
    const sortByPriority = (unsorted) => { // can probably move inside index()
      let sorted = [], high = [], medium = [], low = [];
      for (let i = 0; i < unsorted.length; i++) {
        if (unsorted[i].priority == 'high') { high.push(unsorted[i]) }
        else if (unsorted[i].priority == 'medium') { medium.push(unsorted[i]) }
        else { low.push(unsorted[i]) }
      }
      return sorted = high.concat(medium.concat(low));
    };

    if (project == 'All to-do items') {
      return sortByPriority(todos);
    } else {
      let projectTodos = [];
      for (let i = 0; i < todos.length; i++) {
        if (project == todos[i].project) { projectTodos.push(model.todos[i]); }
      }
      return sortByPriority(projectTodos);
    }
  };

  const createTodo = (formData) => {
    let errors = ['test'];
    console.log(formData.title);
    return errors;
  };

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

  return { todos, projects, indexTodos, createTodo, deleteTodo, deleteProject, initialize, logTodos };

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
/* harmony import */ var _renderUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderUtils */ "./src/renderUtils.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _todosRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todosRender */ "./src/todosRender.js");




const projectsRender = (() => {

  const index = () => {
    _renderUtils__WEBPACK_IMPORTED_MODULE_0__["renderUtils"].clearContent();
    let projects = _model__WEBPACK_IMPORTED_MODULE_1__["model"].projects;
    let content = document.getElementById('content');
    let navBtn = document.getElementById('navBtn');
    let titleW = content.offsetWidth - 56;

    for(let i = 0; i < projects.length; i++) {
      let div = document.createElement('div');
      div.classList.add('itemDiv');
      div.id = `project_${projects[i]}`;
      div.addEventListener("click", function() {
        navBtn.classList.remove('eyeIcon');
        navBtn.classList.add('foldersIcon');
        navBtn.title = 'view projects';
        _todosRender__WEBPACK_IMPORTED_MODULE_2__["todosRender"].index(this.id);
      });
      let deletebox = document.createElement('div');
      deletebox.classList.add('deletebox');
      deletebox.id = `delete_${projects[i]}`;
      deletebox.addEventListener("click", function(e) {
        e.stopPropagation();
        console.log(`clicked: ${this.id}`);
        removeProject(this.id);
      });
      let title = document.createElement('h2');
      title.innerHTML = _renderUtils__WEBPACK_IMPORTED_MODULE_0__["renderUtils"].fitString(projects[i], titleW);
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

    // set navbar message
    let navMsg = document.getElementById('navMsg');
    navMsg.innerHTML = 'Projects';

    // onResize: reformat text that would otherwise overflow
    document.body.onresize = function(){
      let titles = document.getElementsByClassName('title');
      for (let i = 0; i < titles.length; i++) {
        titles[i].innerHTML = _renderUtils__WEBPACK_IMPORTED_MODULE_0__["renderUtils"].fitString(
          projects[i], content.offsetWidth - 56
        );
      }
    };
  };

  // private

  const removeProject = (thisId) => {
    let id = thisId.slice(7);
    if (confirm(`Really delete project: ${id}\nand all todo items it contains?`) == true) {
      _model__WEBPACK_IMPORTED_MODULE_1__["model"].deleteProject(id);
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

/***/ "./src/renderUtils.js":
/*!****************************!*\
  !*** ./src/renderUtils.js ***!
  \****************************/
/*! exports provided: renderUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderUtils", function() { return renderUtils; });
// functions common to todosRender.js and projectsRender.js
const renderUtils = (() => {
  const clearContent = () => {
    let content = document.getElementById('content');
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

  return { clearContent, fitString };
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
/* harmony import */ var _renderUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderUtils */ "./src/renderUtils.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/model.js");



const todosRender = (() => {

  const index = (project) => {
    project = project.slice(8);
    let todos = _model__WEBPACK_IMPORTED_MODULE_1__["model"].indexTodos(project);
    _renderUtils__WEBPACK_IMPORTED_MODULE_0__["renderUtils"].clearContent();
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
        _model__WEBPACK_IMPORTED_MODULE_1__["model"].deleteTodo(this.id.slice(7));
        removeTodo(this.id);
      });
      let title = document.createElement('h2');
      title.innerHTML = _renderUtils__WEBPACK_IMPORTED_MODULE_0__["renderUtils"].fitString(todos[i].title, titleW);
      title.classList.add('title');
      content.appendChild(div);
      div.appendChild(checkbox);
      div.appendChild(title);
    }

    let addNew = document.createElement('div');
    addNew.id = 'addNew';
    addNew.addEventListener("click", function() {
      form(this.id, project);
      addNew.style.display = 'none';
    });
    let plusSign = document.createElement('p');
    plusSign.id = 'plusSign';
    plusSign.innerHTML = '+';
    addNew.appendChild(plusSign);
    content.appendChild(addNew);

    // set navbar navbar message
    let navMsg = document.getElementById('navMsg');
    navMsg.innerHTML = _renderUtils__WEBPACK_IMPORTED_MODULE_0__["renderUtils"].fitString(
      project, document.getElementById('msgDiv').offsetWidth - 12
    );

    // onResize: reformat text that would otherwise overflow
    document.body.onresize = function(){
      navMsg.innerHTML = _renderUtils__WEBPACK_IMPORTED_MODULE_0__["renderUtils"].fitString(
        project, document.getElementById('msgDiv').offsetWidth - 12
      );
      let titles = document.getElementsByClassName('title');
      for (let i = 0; i < titles.length; i++) {
        titles[i].innerHTML = _renderUtils__WEBPACK_IMPORTED_MODULE_0__["renderUtils"].fitString(
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
  const form = (thisId, thisProject) => {

    const addInput = (id) => {
      let label = document.createElement('h4');
      label.innerHTML = `${id}:`;
      label.id = `${id}label`;
      let input = document.createElement('input');
      if (id == 'description') { input = document.createElement('textarea'); }
      input.id = `${id}`;
      todoForm.appendChild(label);
      todoForm.appendChild(input);
    };

    const addSelection = (type) => {
      let options = ['high', 'medium', 'low'];
      if (type == 'projects') { options = _model__WEBPACK_IMPORTED_MODULE_1__["model"].projects; }
      for (let i = 0; i < options.length; i++) {
        let option = document.createElement('option');
        option.value = options[i];
        option.innerHTML = options[i];
        if (options[i] == 'medium') { // or current project
          option.setAttribute('selected', true);
        }
        if (type == 'projects') { projects.appendChild(option); }
        else { priority.appendChild(option); }
      }
    };

    const divColor = () => {
      formDiv.classList.remove('lowForm');
      formDiv.classList.remove('mediumForm');
      formDiv.classList.remove('highForm');
      formDiv.classList.add(`${priority.value}Form`);
    };

    const submit = () => {
      let data = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        priority: document.getElementById('priority').value,
        project: document.getElementById('projects').value
      }
      let errors = _model__WEBPACK_IMPORTED_MODULE_1__["model"].createTodo(data);
      if (errors = ['test']) {
        while (content.formDiv) {
          content.removeChild(content.formDiv);
        }
        index(`project_${thisProject}`);
      }
    };

    let content = document.getElementById('content');
    let formDiv = document.createElement('div');
    if (thisId == 'addNew') {
      formDiv.classList.add('formDiv');
      formDiv.classList.add('mediumForm');

    } else { // use thisId to find element for form; clear it first

    }

    let todoForm = document.createElement('form');
    addInput('title');
    addInput('description');

    let labelsDiv = document.createElement('div');
    labelsDiv.classList.add('selectionDiv');
    let priorityLabel = document.createElement('h4');
    priorityLabel.id = 'priorityLabel';
    priorityLabel.innerHTML = 'priority:';
    let projectLabel = document.createElement('h4');
    projectLabel.id = 'projectLabel';
    projectLabel.innerHTML = 'project:';
    let done = document.createElement('button');
    done.type = 'button'; // prevents app reload on click
    done.id = 'done';
    done.innerHTML = 'done';
    done.addEventListener("click", submit);
    labelsDiv.appendChild(priorityLabel);
    labelsDiv.appendChild(projectLabel);
    labelsDiv.appendChild(done);
    todoForm.appendChild(labelsDiv);

    let selectionDiv = document.createElement('div');
    selectionDiv.classList.add('selectionDiv');
    let priority = document.createElement('select');
    priority.id = 'priority';
    addSelection('priority');
    priority.addEventListener("change", divColor);
    let projects = document.createElement('select');
    projects.id = 'projects';
    addSelection('projects');
    selectionDiv.appendChild(priority);
    selectionDiv.appendChild(projects);
    todoForm.appendChild(selectionDiv);

    formDiv.appendChild(todoForm);
    content.appendChild(formDiv);
  };

  return { index };

})();




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcFJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdHNSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlclV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy90b2Rvc1JlbmRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQWlEO0FBQ047O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUFjO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FB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OztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixHQUFHO0FBQzlCLG9CQUFvQixHQUFHO0FBQ3ZCO0FBQ0EsZ0NBQWdDLDRDQUE0QztBQUM1RSxvQkFBb0IsR0FBRztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixXQUFXLDRDQUFLLFVBQVU7QUFDekQscUJBQXFCLG9CQUFvQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBLGlDQUFpQyw4QkFBOEI7QUFDL0QsY0FBYyw4QkFBOEI7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixlQUFlO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRDQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFlBQVk7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUssT0FBTyx3Q0FBd0M7O0FBRXBEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVOztBQUVWLENBQUM7O0FBRXFCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHByb2plY3RzUmVuZGVyIH0gZnJvbSAnLi9wcm9qZWN0c1JlbmRlcidcbmltcG9ydCB7IHRvZG9zUmVuZGVyIH0gZnJvbSAnLi90b2Rvc1JlbmRlcidcblxuY29uc3QgYXBwUmVuZGVyID0gKCgpID0+IHtcblxuICBjb25zdCBuYXZCdG5DbGljayA9ICgpID0+IHtcbiAgICBpZiAobmF2QnRuLmNsYXNzTGlzdC52YWx1ZSA9PSAnZm9sZGVyc0ljb24nKSB7XG4gICAgICBuYXZCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZm9sZGVyc0ljb24nKTtcbiAgICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCdleWVJY29uJyk7XG4gICAgICBuYXZCdG4udGl0bGUgPSAndmlldyBhbGwgdG9kbyBpdGVtcyBmcm9tIGFsbCBwcm9qZWN0cyc7XG4gICAgICBwcm9qZWN0c1JlbmRlci5pbmRleCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXZCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZXllSWNvbicpO1xuICAgICAgbmF2QnRuLmNsYXNzTGlzdC5hZGQoJ2ZvbGRlcnNJY29uJyk7XG4gICAgICBuYXZCdG4udGl0bGUgPSAndmlldyBwcm9qZWN0cyc7XG4gICAgICB0b2Rvc1JlbmRlci5pbmRleCgncHJvamVjdF9BbGwgdG8tZG8gaXRlbXMnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICBsZXQgbmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhcicpO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIC8vIHNldCBuYXZiYXIgc2Nyb2xsIGJlaGF2aW91ciAoaGlkZSAvIHJldmVhbClcbiAgICB2YXIgcHJldlNjcm9sbHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgaWYgKHByZXZTY3JvbGxwb3MgPiBjdXJyZW50U2Nyb2xsUG9zKSB7XG4gICAgICAgIG5hdmJhci5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgICAgY29udGVudC5zdHlsZS5tYXJnaW5Ub3AgPSAnNTBweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYXZiYXIuc3R5bGUudG9wID0gJy01MHB4JztcbiAgICAgICAgY29udGVudC5zdHlsZS5tYXJnaW5Ub3AgPSAnMHB4JztcbiAgICAgIH1cbiAgICAgIHByZXZTY3JvbGxwb3MgPSBjdXJyZW50U2Nyb2xsUG9zO1xuICAgIH1cblxuICAgIC8vIHNldCBpbml0aWFsIG5hdkJ0biBpY29uICYgYWRkIGNsaWNrIGV2ZW50XG4gICAgbGV0IG5hdkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZCdG4nKTtcbiAgICBuYXZCdG4uY2xhc3NMaXN0LmFkZCgnZm9sZGVyc0ljb24nKTtcbiAgICBuYXZCdG4udGl0bGUgPSAndmlldyBwcm9qZWN0cyc7XG4gICAgbmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuYXZCdG5DbGljayk7XG5cbiAgICB0b2Rvc1JlbmRlci5pbmRleCgncHJvamVjdF9BbGwgdG8tZG8gaXRlbXMnKTtcbiAgfTtcblxuXG5cblxuXG5cbiAgLy8gZGVjbGFyZSBmdW5jdGlvbnMgdG8gY29tbW9uIHRvIHRvZG9zUmVuZGVyIGFuZCBwcm9qZWN0c1JlbmRlciBtb2R1bGVzOlxuICAvKlxuICBjb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuICAqL1xuXG5cblxuXG4gIC8vIC0tLS0tLS0tLS0tIGV4dHJhcyAtLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG4gIC8vIERFQlVHOiBjcmVhdGUgY29udGVudCB0YWxsZXIgdGhhbiBwYWdlIHRvIHRlc3Qgc2Nyb2xsIGVmZmVjdHNcbiAgY29uc3QgcGxhY2Vob2xkZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGxldCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcGFjZXIuc3R5bGUuaGVpZ2h0ID0gJzMwcHgnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc3BhY2VyKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA3MDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgcGFyYS5pbm5lckhUTUwgPSBcInBsYWNlaG9sZGVyIGNvbnRlbnRcIjtcbiAgICAgIHBhcmEuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgfVxuXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNpemUnKSk7XG4gIH07XG5cblxuXG5cbiAgcmV0dXJuIHsgaW5pdGlhbGl6ZSwgcGxhY2Vob2xkZXJDb250ZW50IH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IGFwcFJlbmRlciB9XG4iLCIvLyBEZWZhdWx0IGRhdGEgdG8gdXNlIHdoZW4gbG9jYWxTdG9yYWdlIHVuYXZhaWxhYmxlIC8gY29udGFpbnMgbm8gYXBwIGRhdGFcbmNvbnN0IGV4YW1wbGVEYXRhID0gKCgpID0+IHtcbiAgbGV0IHRvZG9zID0gW1xuICAgIHsgdGl0bGU6ICdkbyBsYXVuZHJ5JywgZGVzY3JpcHRpb246ICdyZW1lbWJlciBqZWFucycsXG4gICAgICBwcmlvcml0eTogJ2hpZ2gnLCBwcm9qZWN0OiAncmVndWxhciBzdHVmZicgfSxcbiAgICB7IHRpdGxlOiAnd2FzaCBjYXInLCBkZXNjcmlwdGlvbjogJ25pbCcsXG4gICAgICBwcmlvcml0eTogJ2xvdycsIHByb2plY3Q6ICdyZWd1bGFyIHN0dWZmJyB9LFxuICAgIHsgdGl0bGU6ICdidXkgYmVlcicsIGRlc2NyaXB0aW9uOiAnS3JvbmVuYmVyZycsXG4gICAgICBwcmlvcml0eTogJ21lZGl1bScsIHByb2plY3Q6ICdyZWd1bGFyIHN0dWZmJyB9LFxuICAgIHsgdGl0bGU6ICdyZXNlYXJjaCBhcnJvdyBmdW5jdGlvbnMnLFxuICAgICAgZGVzY3JpcHRpb246ICdtYWtlIG5vdGVzIGFuZCBzYXZlIGxpbmtzJyxcbiAgICAgIHByaW9yaXR5OiAnaGlnaCcsIHByb2plY3Q6ICd3cml0ZSBhcnRpY2xlJyB9LFxuICAgIHsgdGl0bGU6ICd3cml0ZSBib2R5IG9mIGFydGljbGUnLCBkZXNjcmlwdGlvbjogJ2FjdHVhbGx5IHdyaXRlIHRoZSB0aGluZycsXG4gICAgICBwcmlvcml0eTogJ21lZGl1bScsIHByb2plY3Q6ICd3cml0ZSBhcnRpY2xlJyB9LFxuICAgIHsgdGl0bGU6ICdwcm9vZnJlYWQgYXJ0aWNsZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ2NoZWNrIGZvciBlcnJvcnMgYW5kIGJhZCBncmFtbWFyJyxcbiAgICAgIHByaW9yaXR5OiAnbG93JywgcHJvamVjdDogJ3dyaXRlIGFydGljbGUnIH0sXG4gICAgeyB0aXRsZTogJ3Jlc2VhcmNoIElJRkVzJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnd2hhdCBhcmUgdGhleSwgYW5kIHdoZW4gYXJlIHRoZXkgdXNlZD8nLFxuICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLCBwcm9qZWN0OiAnd3JpdGUgYXJ0aWNsZScgfSxcbiAgICB7IHRpdGxlOiAndG9kbyB3aXRoIGV4YW1wbGUgcmVhbGx5IGxvbmcgdGl0bGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdmb3IgdGVzdGluZyBsb25nIHN0cmluZ3MnLCBwcmlvcml0eTogJ21lZGl1bScsXG4gICAgICBwcm9qZWN0OiAncHJvamVjdCB3aXRoIHJlYWxseSBsb25nIHRpdGxlJyB9XG4gIF07XG5cbiAgbGV0IHByb2plY3RzID0gW1xuICAgICdyZWd1bGFyIHN0dWZmJyxcbiAgICAnd3JpdGUgYXJ0aWNsZScsXG4gICAgJ3Byb2plY3Qgd2l0aCByZWFsbHkgbG9uZyB0aXRsZSdcbiAgXTtcblxuICByZXR1cm4ge3RvZG9zLCBwcm9qZWN0c31cbn0pKCk7XG5cbmV4cG9ydCB7IGV4YW1wbGVEYXRhIH1cbiIsImltcG9ydCB7IG1vZGVsIH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7IGFwcFJlbmRlciB9IGZyb20gJy4vYXBwUmVuZGVyJ1xuXG5tb2RlbC5pbml0aWFsaXplKCk7XG5hcHBSZW5kZXIuaW5pdGlhbGl6ZSgpO1xuXG5cbi8vIGFkZCBwbGFjZWhvbGRlciBjb250ZW50LCBmb3IgdGVzdGluZyBvZiBuYXZiYXIgaGlkZS9yZXZlYWwgb24gc2Nyb2xsOlxuLy9hcHBSZW5kZXIucGxhY2Vob2xkZXJDb250ZW50KCk7XG4iLCJpbXBvcnQgeyBleGFtcGxlRGF0YSB9IGZyb20gJy4vZXhhbXBsZURhdGEnXG5cbmNvbnN0IG1vZGVsID0gKCgpID0+IHtcblxuICBsZXQgdG9kb3MgPSBbXTtcbiAgbGV0IHByb2plY3RzID0gW107XG5cbiAgY29uc3QgdW5pcXVlSWQgPSAoKCkgPT4ge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICsrY291bnQ7XG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBjb25zdCB0b2RvRmFjdG9yeSA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3Qgb3V0cHV0ID0gKCkgPT4gY29uc29sZS5sb2coYGlkOiAke2lkfSwgdGl0bGU6ICR7dGl0bGV9LCBkZXNjOiAke2Rlc2NyaXB0aW9ufSwgcHJpb3JpdHk6ICR7cHJpb3JpdHl9LCBwcm9qZWN0OiAke3Byb2plY3R9YCk7XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IG5ld1RpdGxlID0+IHRpdGxlID0gbmV3VGl0bGU7XG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbiA9PiBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gbmV3UHJpb3JpdHkgPT4gcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICBjb25zdCBzZXRQcm9qZWN0ID0gbmV3UHJvamVjdCA9PiBwcm9qZWN0ID0gbmV3UHJvamVjdDtcblxuICAgIHJldHVybiB7XG4gICAgICBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCxcbiAgICAgIHNldFRpdGxlLCBzZXREZXNjcmlwdGlvbiwgc2V0UHJpb3JpdHksIHNldFByb2plY3QsIG91dHB1dFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAvLyBDaGFuZ2UgdGhpcyB0byBhIGNoZWNrIGZvciBsb2NhbCBzdG9yYWdlLCBldGMuXG4gICAgbGV0IHRvZG9zRXhhbXBsZXMgPSBleGFtcGxlRGF0YS50b2RvcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zRXhhbXBsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvZG9zLnB1c2goXG4gICAgICAgIHRvZG9GYWN0b3J5KHVuaXF1ZUlkKCksIHRvZG9zRXhhbXBsZXNbaV0udGl0bGUsIHRvZG9zRXhhbXBsZXNbaV0uZGVzY3JpcHRpb24sXG4gICAgICAgIHRvZG9zRXhhbXBsZXNbaV0ucHJpb3JpdHksIHRvZG9zRXhhbXBsZXNbaV0ucHJvamVjdFxuICAgICAgKSk7XG4gICAgfVxuXG4gICAgbGV0IHByb2plY3RzRXhhbXBsZXMgPSBleGFtcGxlRGF0YS5wcm9qZWN0cztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzRXhhbXBsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdHNFeGFtcGxlc1tpXSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIERFQlVHOlxuICBjb25zdCBsb2dUb2RvcyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvZG9zW2ldLm91dHB1dCgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBDLlIuVS5EOlxuXG4gIGNvbnN0IGluZGV4VG9kb3MgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHNvcnRCeVByaW9yaXR5ID0gKHVuc29ydGVkKSA9PiB7IC8vIGNhbiBwcm9iYWJseSBtb3ZlIGluc2lkZSBpbmRleCgpXG4gICAgICBsZXQgc29ydGVkID0gW10sIGhpZ2ggPSBbXSwgbWVkaXVtID0gW10sIGxvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bnNvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodW5zb3J0ZWRbaV0ucHJpb3JpdHkgPT0gJ2hpZ2gnKSB7IGhpZ2gucHVzaCh1bnNvcnRlZFtpXSkgfVxuICAgICAgICBlbHNlIGlmICh1bnNvcnRlZFtpXS5wcmlvcml0eSA9PSAnbWVkaXVtJykgeyBtZWRpdW0ucHVzaCh1bnNvcnRlZFtpXSkgfVxuICAgICAgICBlbHNlIHsgbG93LnB1c2godW5zb3J0ZWRbaV0pIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzb3J0ZWQgPSBoaWdoLmNvbmNhdChtZWRpdW0uY29uY2F0KGxvdykpO1xuICAgIH07XG5cbiAgICBpZiAocHJvamVjdCA9PSAnQWxsIHRvLWRvIGl0ZW1zJykge1xuICAgICAgcmV0dXJuIHNvcnRCeVByaW9yaXR5KHRvZG9zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHByb2plY3RUb2RvcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdCA9PSB0b2Rvc1tpXS5wcm9qZWN0KSB7IHByb2plY3RUb2Rvcy5wdXNoKG1vZGVsLnRvZG9zW2ldKTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNvcnRCeVByaW9yaXR5KHByb2plY3RUb2Rvcyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSAoZm9ybURhdGEpID0+IHtcbiAgICBsZXQgZXJyb3JzID0gWyd0ZXN0J107XG4gICAgY29uc29sZS5sb2coZm9ybURhdGEudGl0bGUpO1xuICAgIHJldHVybiBlcnJvcnM7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9IChpZCkgPT4ge1xuICAgIHRvZG9zLnNwbGljZSh0b2Rvcy5pbmRleE9mKHRvZG9zLmZpbmQoZSA9PiBlLmlkID09IGlkKSksIDEpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0b2Rvc1tpXS5wcm9qZWN0ID09IHByb2plY3QpIHtcbiAgICAgICAgZGVsZXRlVG9kbyh0b2Rvc1tpXS5pZCk7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YocHJvamVjdHMuZmluZChlID0+IGUgPT0gcHJvamVjdCkpLCAxKTtcbiAgfTtcblxuICByZXR1cm4geyB0b2RvcywgcHJvamVjdHMsIGluZGV4VG9kb3MsIGNyZWF0ZVRvZG8sIGRlbGV0ZVRvZG8sIGRlbGV0ZVByb2plY3QsIGluaXRpYWxpemUsIGxvZ1RvZG9zIH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IG1vZGVsIH1cbiIsImltcG9ydCB7IHJlbmRlclV0aWxzIH0gZnJvbSAnLi9yZW5kZXJVdGlscydcbmltcG9ydCB7IG1vZGVsIH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7IHRvZG9zUmVuZGVyIH0gZnJvbSAnLi90b2Rvc1JlbmRlcidcblxuY29uc3QgcHJvamVjdHNSZW5kZXIgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICAgIHJlbmRlclV0aWxzLmNsZWFyQ29udGVudCgpO1xuICAgIGxldCBwcm9qZWN0cyA9IG1vZGVsLnByb2plY3RzO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBsZXQgbmF2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdkJ0bicpO1xuICAgIGxldCB0aXRsZVcgPSBjb250ZW50Lm9mZnNldFdpZHRoIC0gNTY7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdpdGVtRGl2Jyk7XG4gICAgICBkaXYuaWQgPSBgcHJvamVjdF8ke3Byb2plY3RzW2ldfWA7XG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBuYXZCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZXllSWNvbicpO1xuICAgICAgICBuYXZCdG4uY2xhc3NMaXN0LmFkZCgnZm9sZGVyc0ljb24nKTtcbiAgICAgICAgbmF2QnRuLnRpdGxlID0gJ3ZpZXcgcHJvamVjdHMnO1xuICAgICAgICB0b2Rvc1JlbmRlci5pbmRleCh0aGlzLmlkKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IGRlbGV0ZWJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGVsZXRlYm94LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZWJveCcpO1xuICAgICAgZGVsZXRlYm94LmlkID0gYGRlbGV0ZV8ke3Byb2plY3RzW2ldfWA7XG4gICAgICBkZWxldGVib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coYGNsaWNrZWQ6ICR7dGhpcy5pZH1gKTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdCh0aGlzLmlkKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IHJlbmRlclV0aWxzLmZpdFN0cmluZyhwcm9qZWN0c1tpXSwgdGl0bGVXKTtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoZGVsZXRlYm94KTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgfVxuXG4gICAgbGV0IGFkZE5ldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZE5ldy5pZCA9ICdhZGROZXcnO1xuICAgIGFkZE5ldy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBmb3JtKHRoaXMuaWQpO1xuICAgIH0pO1xuICAgIGxldCBwbHVzU2lnbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbHVzU2lnbi5pZCA9ICdwbHVzU2lnbic7XG4gICAgcGx1c1NpZ24uaW5uZXJIVE1MID0gJysnO1xuICAgIGFkZE5ldy5hcHBlbmRDaGlsZChwbHVzU2lnbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGROZXcpO1xuXG4gICAgLy8gc2V0IG5hdmJhciBtZXNzYWdlXG4gICAgbGV0IG5hdk1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZNc2cnKTtcbiAgICBuYXZNc2cuaW5uZXJIVE1MID0gJ1Byb2plY3RzJztcblxuICAgIC8vIG9uUmVzaXplOiByZWZvcm1hdCB0ZXh0IHRoYXQgd291bGQgb3RoZXJ3aXNlIG92ZXJmbG93XG4gICAgZG9jdW1lbnQuYm9keS5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICBsZXQgdGl0bGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGl0bGUnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRpdGxlc1tpXS5pbm5lckhUTUwgPSByZW5kZXJVdGlscy5maXRTdHJpbmcoXG4gICAgICAgICAgcHJvamVjdHNbaV0sIGNvbnRlbnQub2Zmc2V0V2lkdGggLSA1NlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLy8gcHJpdmF0ZVxuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAodGhpc0lkKSA9PiB7XG4gICAgbGV0IGlkID0gdGhpc0lkLnNsaWNlKDcpO1xuICAgIGlmIChjb25maXJtKGBSZWFsbHkgZGVsZXRlIHByb2plY3Q6ICR7aWR9XFxuYW5kIGFsbCB0b2RvIGl0ZW1zIGl0IGNvbnRhaW5zP2ApID09IHRydWUpIHtcbiAgICAgIG1vZGVsLmRlbGV0ZVByb2plY3QoaWQpO1xuICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdF8ke2lkfWApO1xuICAgICAgcHJvamVjdERpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByb2plY3REaXYpO1xuICAgIH1cbiAgfTtcblxuICAvLyA/IHdpbGwgdXNlIHBhcmVudCBlbGVsbWVudCBhcyBwYXJhbSwgbm90IGlkLCB0aGVuIGZpbmQgaWRzIG5lZWRlZFxuICBjb25zdCBmb3JtID0gKHRoaXNJZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRoaXNJZCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgaW5kZXggfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHByb2plY3RzUmVuZGVyIH1cbiIsIi8vIGZ1bmN0aW9ucyBjb21tb24gdG8gdG9kb3NSZW5kZXIuanMgYW5kIHByb2plY3RzUmVuZGVyLmpzXG5jb25zdCByZW5kZXJVdGlscyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmaXRTdHJpbmcgPSAoc3RyaW5nLCB3aWR0aCkgPT4ge1xuICAgIGlmIChzdHJpbmcubGVuZ3RoICogMTIgPiB3aWR0aCkge1xuICAgICAgbGV0IHJlbW92ZSA9IChNYXRoLmZsb29yKHdpZHRoIC8gMTIpIC0gMykgLSBzdHJpbmcubGVuZ3RoO1xuICAgICAgc3RyaW5nID0gc3RyaW5nLnNsaWNlKDAsIHJlbW92ZSkuY29uY2F0KCcuLi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xuXG4gIHJldHVybiB7IGNsZWFyQ29udGVudCwgZml0U3RyaW5nIH07XG59KSgpO1xuXG5leHBvcnQgeyByZW5kZXJVdGlscyB9XG4iLCJpbXBvcnQgeyByZW5kZXJVdGlscyB9IGZyb20gJy4vcmVuZGVyVXRpbHMnXG5pbXBvcnQgeyBtb2RlbCB9IGZyb20gJy4vbW9kZWwnXG5cbmNvbnN0IHRvZG9zUmVuZGVyID0gKCgpID0+IHtcblxuICBjb25zdCBpbmRleCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdCA9IHByb2plY3Quc2xpY2UoOCk7XG4gICAgbGV0IHRvZG9zID0gbW9kZWwuaW5kZXhUb2Rvcyhwcm9qZWN0KTtcbiAgICByZW5kZXJVdGlscy5jbGVhckNvbnRlbnQoKTtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgbGV0IHRpdGxlVyA9IGNvbnRlbnQub2Zmc2V0V2lkdGggLSA1NjtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW1EaXYnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGAke3RvZG9zW2ldLnByaW9yaXR5fURpdmApO1xuICAgICAgZGl2LmlkID0gYCR7dG9kb3NbaV0uaWR9YDtcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjbGlja2VkIGRpdjogJHt0aGlzLmlkfWApO1xuICAgICAgfSk7XG4gICAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICAgICBjaGVja2JveC5pZCA9IGBkZWxldGVfJHt0b2Rvc1tpXS5pZH1gO1xuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgbW9kZWwuZGVsZXRlVG9kbyh0aGlzLmlkLnNsaWNlKDcpKTtcbiAgICAgICAgcmVtb3ZlVG9kbyh0aGlzLmlkKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IHJlbmRlclV0aWxzLmZpdFN0cmluZyh0b2Rvc1tpXS50aXRsZSwgdGl0bGVXKTtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB9XG5cbiAgICBsZXQgYWRkTmV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkTmV3LmlkID0gJ2FkZE5ldyc7XG4gICAgYWRkTmV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGZvcm0odGhpcy5pZCwgcHJvamVjdCk7XG4gICAgICBhZGROZXcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbiAgICBsZXQgcGx1c1NpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGx1c1NpZ24uaWQgPSAncGx1c1NpZ24nO1xuICAgIHBsdXNTaWduLmlubmVySFRNTCA9ICcrJztcbiAgICBhZGROZXcuYXBwZW5kQ2hpbGQocGx1c1NpZ24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkTmV3KTtcblxuICAgIC8vIHNldCBuYXZiYXIgbmF2YmFyIG1lc3NhZ2VcbiAgICBsZXQgbmF2TXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdk1zZycpO1xuICAgIG5hdk1zZy5pbm5lckhUTUwgPSByZW5kZXJVdGlscy5maXRTdHJpbmcoXG4gICAgICBwcm9qZWN0LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXNnRGl2Jykub2Zmc2V0V2lkdGggLSAxMlxuICAgICk7XG5cbiAgICAvLyBvblJlc2l6ZTogcmVmb3JtYXQgdGV4dCB0aGF0IHdvdWxkIG90aGVyd2lzZSBvdmVyZmxvd1xuICAgIGRvY3VtZW50LmJvZHkub25yZXNpemUgPSBmdW5jdGlvbigpe1xuICAgICAgbmF2TXNnLmlubmVySFRNTCA9IHJlbmRlclV0aWxzLmZpdFN0cmluZyhcbiAgICAgICAgcHJvamVjdCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21zZ0RpdicpLm9mZnNldFdpZHRoIC0gMTJcbiAgICAgICk7XG4gICAgICBsZXQgdGl0bGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGl0bGUnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRpdGxlc1tpXS5pbm5lckhUTUwgPSByZW5kZXJVdGlscy5maXRTdHJpbmcoXG4gICAgICAgICAgdG9kb3NbaV0udGl0bGUsIGNvbnRlbnQub2Zmc2V0V2lkdGggLSA1NlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLy8gcHJpdmF0ZTpcblxuICBjb25zdCByZW1vdmVUb2RvID0gKHRoaXNJZCkgPT4ge1xuICAgIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXNJZCk7XG4gICAgY2hlY2tCb3guaWQgPSAnZGVsZXRlZCc7XG4gICAgbGV0IGlkID0gdGhpc0lkLnNsaWNlKDcpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgdG9kb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgIHRvZG9EaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0b2RvRGl2KTtcbiAgICB9LCAzMDApO1xuICB9O1xuXG4gIC8vID8gd2lsbCB1c2UgcGFyZW50IGVsZWxtZW50IGFzIHBhcmFtLCBub3QgaWQsIHRoZW4gZmluZCBpZHMgbmVlZGVkXG4gIGNvbnN0IGZvcm0gPSAodGhpc0lkLCB0aGlzUHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3QgYWRkSW5wdXQgPSAoaWQpID0+IHtcbiAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICBsYWJlbC5pbm5lckhUTUwgPSBgJHtpZH06YDtcbiAgICAgIGxhYmVsLmlkID0gYCR7aWR9bGFiZWxgO1xuICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlmIChpZCA9PSAnZGVzY3JpcHRpb24nKSB7IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTsgfVxuICAgICAgaW5wdXQuaWQgPSBgJHtpZH1gO1xuICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRTZWxlY3Rpb24gPSAodHlwZSkgPT4ge1xuICAgICAgbGV0IG9wdGlvbnMgPSBbJ2hpZ2gnLCAnbWVkaXVtJywgJ2xvdyddO1xuICAgICAgaWYgKHR5cGUgPT0gJ3Byb2plY3RzJykgeyBvcHRpb25zID0gbW9kZWwucHJvamVjdHM7IH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvbnNbaV07XG4gICAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSBvcHRpb25zW2ldO1xuICAgICAgICBpZiAob3B0aW9uc1tpXSA9PSAnbWVkaXVtJykgeyAvLyBvciBjdXJyZW50IHByb2plY3RcbiAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09ICdwcm9qZWN0cycpIHsgcHJvamVjdHMuYXBwZW5kQ2hpbGQob3B0aW9uKTsgfVxuICAgICAgICBlbHNlIHsgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTsgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBkaXZDb2xvciA9ICgpID0+IHtcbiAgICAgIGZvcm1EaXYuY2xhc3NMaXN0LnJlbW92ZSgnbG93Rm9ybScpO1xuICAgICAgZm9ybURpdi5jbGFzc0xpc3QucmVtb3ZlKCdtZWRpdW1Gb3JtJyk7XG4gICAgICBmb3JtRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hGb3JtJyk7XG4gICAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoYCR7cHJpb3JpdHkudmFsdWV9Rm9ybWApO1xuICAgIH07XG5cbiAgICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWUsXG4gICAgICAgIHByaW9yaXR5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZSxcbiAgICAgICAgcHJvamVjdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJykudmFsdWVcbiAgICAgIH1cbiAgICAgIGxldCBlcnJvcnMgPSBtb2RlbC5jcmVhdGVUb2RvKGRhdGEpO1xuICAgICAgaWYgKGVycm9ycyA9IFsndGVzdCddKSB7XG4gICAgICAgIHdoaWxlIChjb250ZW50LmZvcm1EaXYpIHtcbiAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZm9ybURpdik7XG4gICAgICAgIH1cbiAgICAgICAgaW5kZXgoYHByb2plY3RfJHt0aGlzUHJvamVjdH1gKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGxldCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYgKHRoaXNJZCA9PSAnYWRkTmV3Jykge1xuICAgICAgZm9ybURpdi5jbGFzc0xpc3QuYWRkKCdmb3JtRGl2Jyk7XG4gICAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ21lZGl1bUZvcm0nKTtcblxuICAgIH0gZWxzZSB7IC8vIHVzZSB0aGlzSWQgdG8gZmluZCBlbGVtZW50IGZvciBmb3JtOyBjbGVhciBpdCBmaXJzdFxuXG4gICAgfVxuXG4gICAgbGV0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGFkZElucHV0KCd0aXRsZScpO1xuICAgIGFkZElucHV0KCdkZXNjcmlwdGlvbicpO1xuXG4gICAgbGV0IGxhYmVsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxhYmVsc0Rpdi5jbGFzc0xpc3QuYWRkKCdzZWxlY3Rpb25EaXYnKTtcbiAgICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgcHJpb3JpdHlMYWJlbC5pZCA9ICdwcmlvcml0eUxhYmVsJztcbiAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9ICdwcmlvcml0eTonO1xuICAgIGxldCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIHByb2plY3RMYWJlbC5pZCA9ICdwcm9qZWN0TGFiZWwnO1xuICAgIHByb2plY3RMYWJlbC5pbm5lckhUTUwgPSAncHJvamVjdDonO1xuICAgIGxldCBkb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZG9uZS50eXBlID0gJ2J1dHRvbic7IC8vIHByZXZlbnRzIGFwcCByZWxvYWQgb24gY2xpY2tcbiAgICBkb25lLmlkID0gJ2RvbmUnO1xuICAgIGRvbmUuaW5uZXJIVE1MID0gJ2RvbmUnO1xuICAgIGRvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdCk7XG4gICAgbGFiZWxzRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIGxhYmVsc0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgIGxhYmVsc0Rpdi5hcHBlbmRDaGlsZChkb25lKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChsYWJlbHNEaXYpO1xuXG4gICAgbGV0IHNlbGVjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlbGVjdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdzZWxlY3Rpb25EaXYnKTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eS5pZCA9ICdwcmlvcml0eSc7XG4gICAgYWRkU2VsZWN0aW9uKCdwcmlvcml0eScpO1xuICAgIHByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZGl2Q29sb3IpO1xuICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByb2plY3RzLmlkID0gJ3Byb2plY3RzJztcbiAgICBhZGRTZWxlY3Rpb24oJ3Byb2plY3RzJyk7XG4gICAgc2VsZWN0aW9uRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBzZWxlY3Rpb25EaXYuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHNlbGVjdGlvbkRpdik7XG5cbiAgICBmb3JtRGl2LmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm1EaXYpO1xuICB9O1xuXG4gIHJldHVybiB7IGluZGV4IH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IHRvZG9zUmVuZGVyIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=