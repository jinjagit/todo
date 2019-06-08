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

  const validateTodo = (data) => {
    let errors = [];
    if (data.title == '') { errors.push('title cannot be blank'); }
    else if (data.title.length > 64) {
      errors.push('title cannot contain more than 64 characters');
    }
    if (data.description.length > 256) {
      errors.push('description cannot contain more than 256 characters');
    }

    let projectTodos = indexTodos(data.project);
    for (let i = 0; i < projectTodos.length; i++) {
      if (projectTodos[i].title == data.title) {
        errors.push('title cannot match existing todo item title in same project')
      }
    }

    return errors;
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
    let errors = validateTodo(formData);
    if (errors.length == 0) {
      todos.push(
        todoFactory(uniqueId(), formData.title, formData.description,
        formData.priority, formData.project
      ));
    } else {
      console.log(`errors: ${errors}`);
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcFJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdHNSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlclV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy90b2Rvc1JlbmRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQWlEO0FBQ047O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUFjO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FB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QUFDOztBQUVxQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBwcm9qZWN0c1JlbmRlciB9IGZyb20gJy4vcHJvamVjdHNSZW5kZXInXG5pbXBvcnQgeyB0b2Rvc1JlbmRlciB9IGZyb20gJy4vdG9kb3NSZW5kZXInXG5cbmNvbnN0IGFwcFJlbmRlciA9ICgoKSA9PiB7XG5cbiAgY29uc3QgbmF2QnRuQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKG5hdkJ0bi5jbGFzc0xpc3QudmFsdWUgPT0gJ2ZvbGRlcnNJY29uJykge1xuICAgICAgbmF2QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvbGRlcnNJY29uJyk7XG4gICAgICBuYXZCdG4uY2xhc3NMaXN0LmFkZCgnZXllSWNvbicpO1xuICAgICAgbmF2QnRuLnRpdGxlID0gJ3ZpZXcgYWxsIHRvZG8gaXRlbXMgZnJvbSBhbGwgcHJvamVjdHMnO1xuICAgICAgcHJvamVjdHNSZW5kZXIuaW5kZXgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmF2QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2V5ZUljb24nKTtcbiAgICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCdmb2xkZXJzSWNvbicpO1xuICAgICAgbmF2QnRuLnRpdGxlID0gJ3ZpZXcgcHJvamVjdHMnO1xuICAgICAgdG9kb3NSZW5kZXIuaW5kZXgoJ3Byb2plY3RfQWxsIHRvLWRvIGl0ZW1zJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXInKTtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICAvLyBzZXQgbmF2YmFyIHNjcm9sbCBiZWhhdmlvdXIgKGhpZGUgLyByZXZlYWwpXG4gICAgdmFyIHByZXZTY3JvbGxwb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgIGlmIChwcmV2U2Nyb2xscG9zID4gY3VycmVudFNjcm9sbFBvcykge1xuICAgICAgICBuYXZiYXIuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gJzUwcHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmF2YmFyLnN0eWxlLnRvcCA9ICctNTBweCc7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gJzBweCc7XG4gICAgICB9XG4gICAgICBwcmV2U2Nyb2xscG9zID0gY3VycmVudFNjcm9sbFBvcztcbiAgICB9XG5cbiAgICAvLyBzZXQgaW5pdGlhbCBuYXZCdG4gaWNvbiAmIGFkZCBjbGljayBldmVudFxuICAgIGxldCBuYXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2QnRuJyk7XG4gICAgbmF2QnRuLmNsYXNzTGlzdC5hZGQoJ2ZvbGRlcnNJY29uJyk7XG4gICAgbmF2QnRuLnRpdGxlID0gJ3ZpZXcgcHJvamVjdHMnO1xuICAgIG5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2QnRuQ2xpY2spO1xuXG4gICAgdG9kb3NSZW5kZXIuaW5kZXgoJ3Byb2plY3RfQWxsIHRvLWRvIGl0ZW1zJyk7XG4gIH07XG5cblxuXG5cblxuXG4gIC8vIGRlY2xhcmUgZnVuY3Rpb25zIHRvIGNvbW1vbiB0byB0b2Rvc1JlbmRlciBhbmQgcHJvamVjdHNSZW5kZXIgbW9kdWxlczpcbiAgLypcbiAgY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcbiAgKi9cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLSBleHRyYXMgLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuICAvLyBERUJVRzogY3JlYXRlIGNvbnRlbnQgdGFsbGVyIHRoYW4gcGFnZSB0byB0ZXN0IHNjcm9sbCBlZmZlY3RzXG4gIGNvbnN0IHBsYWNlaG9sZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBsZXQgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3BhY2VyLnN0eWxlLmhlaWdodCA9ICczMHB4JztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNwYWNlcik7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNzA7IGkrKykge1xuICAgICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHBhcmEuaW5uZXJIVE1MID0gXCJwbGFjZWhvbGRlciBjb250ZW50XCI7XG4gICAgICBwYXJhLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIH1cblxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzaXplJykpO1xuICB9O1xuXG5cblxuXG4gIHJldHVybiB7IGluaXRpYWxpemUsIHBsYWNlaG9sZGVyQ29udGVudCB9O1xuXG59KSgpO1xuXG5leHBvcnQgeyBhcHBSZW5kZXIgfVxuIiwiLy8gRGVmYXVsdCBkYXRhIHRvIHVzZSB3aGVuIGxvY2FsU3RvcmFnZSB1bmF2YWlsYWJsZSAvIGNvbnRhaW5zIG5vIGFwcCBkYXRhXG5jb25zdCBleGFtcGxlRGF0YSA9ICgoKSA9PiB7XG4gIGxldCB0b2RvcyA9IFtcbiAgICB7IHRpdGxlOiAnZG8gbGF1bmRyeScsIGRlc2NyaXB0aW9uOiAncmVtZW1iZXIgamVhbnMnLFxuICAgICAgcHJpb3JpdHk6ICdoaWdoJywgcHJvamVjdDogJ3JlZ3VsYXIgc3R1ZmYnIH0sXG4gICAgeyB0aXRsZTogJ3dhc2ggY2FyJywgZGVzY3JpcHRpb246ICduaWwnLFxuICAgICAgcHJpb3JpdHk6ICdsb3cnLCBwcm9qZWN0OiAncmVndWxhciBzdHVmZicgfSxcbiAgICB7IHRpdGxlOiAnYnV5IGJlZXInLCBkZXNjcmlwdGlvbjogJ0tyb25lbmJlcmcnLFxuICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLCBwcm9qZWN0OiAncmVndWxhciBzdHVmZicgfSxcbiAgICB7IHRpdGxlOiAncmVzZWFyY2ggYXJyb3cgZnVuY3Rpb25zJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnbWFrZSBub3RlcyBhbmQgc2F2ZSBsaW5rcycsXG4gICAgICBwcmlvcml0eTogJ2hpZ2gnLCBwcm9qZWN0OiAnd3JpdGUgYXJ0aWNsZScgfSxcbiAgICB7IHRpdGxlOiAnd3JpdGUgYm9keSBvZiBhcnRpY2xlJywgZGVzY3JpcHRpb246ICdhY3R1YWxseSB3cml0ZSB0aGUgdGhpbmcnLFxuICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLCBwcm9qZWN0OiAnd3JpdGUgYXJ0aWNsZScgfSxcbiAgICB7IHRpdGxlOiAncHJvb2ZyZWFkIGFydGljbGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdjaGVjayBmb3IgZXJyb3JzIGFuZCBiYWQgZ3JhbW1hcicsXG4gICAgICBwcmlvcml0eTogJ2xvdycsIHByb2plY3Q6ICd3cml0ZSBhcnRpY2xlJyB9LFxuICAgIHsgdGl0bGU6ICdyZXNlYXJjaCBJSUZFcycsXG4gICAgICBkZXNjcmlwdGlvbjogJ3doYXQgYXJlIHRoZXksIGFuZCB3aGVuIGFyZSB0aGV5IHVzZWQ/JyxcbiAgICAgIHByaW9yaXR5OiAnbWVkaXVtJywgcHJvamVjdDogJ3dyaXRlIGFydGljbGUnIH0sXG4gICAgeyB0aXRsZTogJ3RvZG8gd2l0aCBleGFtcGxlIHJlYWxseSBsb25nIHRpdGxlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnZm9yIHRlc3RpbmcgbG9uZyBzdHJpbmdzJywgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgcHJvamVjdDogJ3Byb2plY3Qgd2l0aCByZWFsbHkgbG9uZyB0aXRsZScgfVxuICBdO1xuXG4gIGxldCBwcm9qZWN0cyA9IFtcbiAgICAncmVndWxhciBzdHVmZicsXG4gICAgJ3dyaXRlIGFydGljbGUnLFxuICAgICdwcm9qZWN0IHdpdGggcmVhbGx5IGxvbmcgdGl0bGUnXG4gIF07XG5cbiAgcmV0dXJuIHt0b2RvcywgcHJvamVjdHN9XG59KSgpO1xuXG5leHBvcnQgeyBleGFtcGxlRGF0YSB9XG4iLCJpbXBvcnQgeyBtb2RlbCB9IGZyb20gJy4vbW9kZWwnXG5pbXBvcnQgeyBhcHBSZW5kZXIgfSBmcm9tICcuL2FwcFJlbmRlcidcblxubW9kZWwuaW5pdGlhbGl6ZSgpO1xuYXBwUmVuZGVyLmluaXRpYWxpemUoKTtcblxuXG4vLyBhZGQgcGxhY2Vob2xkZXIgY29udGVudCwgZm9yIHRlc3Rpbmcgb2YgbmF2YmFyIGhpZGUvcmV2ZWFsIG9uIHNjcm9sbDpcbi8vYXBwUmVuZGVyLnBsYWNlaG9sZGVyQ29udGVudCgpO1xuIiwiaW1wb3J0IHsgZXhhbXBsZURhdGEgfSBmcm9tICcuL2V4YW1wbGVEYXRhJ1xuXG5jb25zdCBtb2RlbCA9ICgoKSA9PiB7XG5cbiAgbGV0IHRvZG9zID0gW107XG4gIGxldCBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IHVuaXF1ZUlkID0gKCgpID0+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICArK2NvdW50O1xuICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgdG9kb0ZhY3RvcnkgPSAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QpID0+IHtcblxuICAgIGNvbnN0IG91dHB1dCA9ICgpID0+IGNvbnNvbGUubG9nKGBpZDogJHtpZH0sIHRpdGxlOiAke3RpdGxlfSwgZGVzYzogJHtkZXNjcmlwdGlvbn0sIHByaW9yaXR5OiAke3ByaW9yaXR5fSwgcHJvamVjdDogJHtwcm9qZWN0fWApO1xuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSBuZXdUaXRsZSA9PiB0aXRsZSA9IG5ld1RpdGxlO1xuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb24gPT4gZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IG5ld1ByaW9yaXR5ID0+IHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgY29uc3Qgc2V0UHJvamVjdCA9IG5ld1Byb2plY3QgPT4gcHJvamVjdCA9IG5ld1Byb2plY3Q7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QsXG4gICAgICBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldFByaW9yaXR5LCBzZXRQcm9qZWN0LCBvdXRwdXRcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgLy8gQ2hhbmdlIHRoaXMgdG8gYSBjaGVjayBmb3IgbG9jYWwgc3RvcmFnZSwgZXRjLlxuICAgIGxldCB0b2Rvc0V4YW1wbGVzID0gZXhhbXBsZURhdGEudG9kb3M7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvc0V4YW1wbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b2Rvcy5wdXNoKFxuICAgICAgICB0b2RvRmFjdG9yeSh1bmlxdWVJZCgpLCB0b2Rvc0V4YW1wbGVzW2ldLnRpdGxlLCB0b2Rvc0V4YW1wbGVzW2ldLmRlc2NyaXB0aW9uLFxuICAgICAgICB0b2Rvc0V4YW1wbGVzW2ldLnByaW9yaXR5LCB0b2Rvc0V4YW1wbGVzW2ldLnByb2plY3RcbiAgICAgICkpO1xuICAgIH1cblxuICAgIGxldCBwcm9qZWN0c0V4YW1wbGVzID0gZXhhbXBsZURhdGEucHJvamVjdHM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0V4YW1wbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3RzRXhhbXBsZXNbaV0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB2YWxpZGF0ZVRvZG8gPSAoZGF0YSkgPT4ge1xuICAgIGxldCBlcnJvcnMgPSBbXTtcbiAgICBpZiAoZGF0YS50aXRsZSA9PSAnJykgeyBlcnJvcnMucHVzaCgndGl0bGUgY2Fubm90IGJlIGJsYW5rJyk7IH1cbiAgICBlbHNlIGlmIChkYXRhLnRpdGxlLmxlbmd0aCA+IDY0KSB7XG4gICAgICBlcnJvcnMucHVzaCgndGl0bGUgY2Fubm90IGNvbnRhaW4gbW9yZSB0aGFuIDY0IGNoYXJhY3RlcnMnKTtcbiAgICB9XG4gICAgaWYgKGRhdGEuZGVzY3JpcHRpb24ubGVuZ3RoID4gMjU2KSB7XG4gICAgICBlcnJvcnMucHVzaCgnZGVzY3JpcHRpb24gY2Fubm90IGNvbnRhaW4gbW9yZSB0aGFuIDI1NiBjaGFyYWN0ZXJzJyk7XG4gICAgfVxuXG4gICAgbGV0IHByb2plY3RUb2RvcyA9IGluZGV4VG9kb3MoZGF0YS5wcm9qZWN0KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RUb2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb2plY3RUb2Rvc1tpXS50aXRsZSA9PSBkYXRhLnRpdGxlKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKCd0aXRsZSBjYW5ub3QgbWF0Y2ggZXhpc3RpbmcgdG9kbyBpdGVtIHRpdGxlIGluIHNhbWUgcHJvamVjdCcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9ycztcbiAgfTtcblxuICAvLyBERUJVRzpcbiAgY29uc3QgbG9nVG9kb3MgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b2Rvc1tpXS5vdXRwdXQoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQy5SLlUuRDpcblxuICBjb25zdCBpbmRleFRvZG9zID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBzb3J0QnlQcmlvcml0eSA9ICh1bnNvcnRlZCkgPT4geyAvLyBjYW4gcHJvYmFibHkgbW92ZSBpbnNpZGUgaW5kZXgoKVxuICAgICAgbGV0IHNvcnRlZCA9IFtdLCBoaWdoID0gW10sIG1lZGl1bSA9IFtdLCBsb3cgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5zb3J0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHVuc29ydGVkW2ldLnByaW9yaXR5ID09ICdoaWdoJykgeyBoaWdoLnB1c2godW5zb3J0ZWRbaV0pIH1cbiAgICAgICAgZWxzZSBpZiAodW5zb3J0ZWRbaV0ucHJpb3JpdHkgPT0gJ21lZGl1bScpIHsgbWVkaXVtLnB1c2godW5zb3J0ZWRbaV0pIH1cbiAgICAgICAgZWxzZSB7IGxvdy5wdXNoKHVuc29ydGVkW2ldKSB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc29ydGVkID0gaGlnaC5jb25jYXQobWVkaXVtLmNvbmNhdChsb3cpKTtcbiAgICB9O1xuXG4gICAgaWYgKHByb2plY3QgPT0gJ0FsbCB0by1kbyBpdGVtcycpIHtcbiAgICAgIHJldHVybiBzb3J0QnlQcmlvcml0eSh0b2Rvcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwcm9qZWN0VG9kb3MgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByb2plY3QgPT0gdG9kb3NbaV0ucHJvamVjdCkgeyBwcm9qZWN0VG9kb3MucHVzaChtb2RlbC50b2Rvc1tpXSk7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzb3J0QnlQcmlvcml0eShwcm9qZWN0VG9kb3MpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjcmVhdGVUb2RvID0gKGZvcm1EYXRhKSA9PiB7XG4gICAgbGV0IGVycm9ycyA9IHZhbGlkYXRlVG9kbyhmb3JtRGF0YSk7XG4gICAgaWYgKGVycm9ycy5sZW5ndGggPT0gMCkge1xuICAgICAgdG9kb3MucHVzaChcbiAgICAgICAgdG9kb0ZhY3RvcnkodW5pcXVlSWQoKSwgZm9ybURhdGEudGl0bGUsIGZvcm1EYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICBmb3JtRGF0YS5wcmlvcml0eSwgZm9ybURhdGEucHJvamVjdFxuICAgICAgKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGBlcnJvcnM6ICR7ZXJyb3JzfWApO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9IChpZCkgPT4ge1xuICAgIHRvZG9zLnNwbGljZSh0b2Rvcy5pbmRleE9mKHRvZG9zLmZpbmQoZSA9PiBlLmlkID09IGlkKSksIDEpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0b2Rvc1tpXS5wcm9qZWN0ID09IHByb2plY3QpIHtcbiAgICAgICAgZGVsZXRlVG9kbyh0b2Rvc1tpXS5pZCk7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YocHJvamVjdHMuZmluZChlID0+IGUgPT0gcHJvamVjdCkpLCAxKTtcbiAgfTtcblxuICByZXR1cm4geyB0b2RvcywgcHJvamVjdHMsIGluZGV4VG9kb3MsIGNyZWF0ZVRvZG8sIGRlbGV0ZVRvZG8sIGRlbGV0ZVByb2plY3QsIGluaXRpYWxpemUsIGxvZ1RvZG9zIH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IG1vZGVsIH1cbiIsImltcG9ydCB7IHJlbmRlclV0aWxzIH0gZnJvbSAnLi9yZW5kZXJVdGlscydcbmltcG9ydCB7IG1vZGVsIH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7IHRvZG9zUmVuZGVyIH0gZnJvbSAnLi90b2Rvc1JlbmRlcidcblxuY29uc3QgcHJvamVjdHNSZW5kZXIgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICAgIHJlbmRlclV0aWxzLmNsZWFyQ29udGVudCgpO1xuICAgIGxldCBwcm9qZWN0cyA9IG1vZGVsLnByb2plY3RzO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBsZXQgbmF2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdkJ0bicpO1xuICAgIGxldCB0aXRsZVcgPSBjb250ZW50Lm9mZnNldFdpZHRoIC0gNTY7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdpdGVtRGl2Jyk7XG4gICAgICBkaXYuaWQgPSBgcHJvamVjdF8ke3Byb2plY3RzW2ldfWA7XG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBuYXZCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZXllSWNvbicpO1xuICAgICAgICBuYXZCdG4uY2xhc3NMaXN0LmFkZCgnZm9sZGVyc0ljb24nKTtcbiAgICAgICAgbmF2QnRuLnRpdGxlID0gJ3ZpZXcgcHJvamVjdHMnO1xuICAgICAgICB0b2Rvc1JlbmRlci5pbmRleCh0aGlzLmlkKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IGRlbGV0ZWJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGVsZXRlYm94LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZWJveCcpO1xuICAgICAgZGVsZXRlYm94LmlkID0gYGRlbGV0ZV8ke3Byb2plY3RzW2ldfWA7XG4gICAgICBkZWxldGVib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coYGNsaWNrZWQ6ICR7dGhpcy5pZH1gKTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdCh0aGlzLmlkKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IHJlbmRlclV0aWxzLmZpdFN0cmluZyhwcm9qZWN0c1tpXSwgdGl0bGVXKTtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoZGVsZXRlYm94KTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgfVxuXG4gICAgbGV0IGFkZE5ldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZE5ldy5pZCA9ICdhZGROZXcnO1xuICAgIGFkZE5ldy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBmb3JtKHRoaXMuaWQpO1xuICAgIH0pO1xuICAgIGxldCBwbHVzU2lnbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbHVzU2lnbi5pZCA9ICdwbHVzU2lnbic7XG4gICAgcGx1c1NpZ24uaW5uZXJIVE1MID0gJysnO1xuICAgIGFkZE5ldy5hcHBlbmRDaGlsZChwbHVzU2lnbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGROZXcpO1xuXG4gICAgLy8gc2V0IG5hdmJhciBtZXNzYWdlXG4gICAgbGV0IG5hdk1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZNc2cnKTtcbiAgICBuYXZNc2cuaW5uZXJIVE1MID0gJ1Byb2plY3RzJztcblxuICAgIC8vIG9uUmVzaXplOiByZWZvcm1hdCB0ZXh0IHRoYXQgd291bGQgb3RoZXJ3aXNlIG92ZXJmbG93XG4gICAgZG9jdW1lbnQuYm9keS5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICBsZXQgdGl0bGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGl0bGUnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRpdGxlc1tpXS5pbm5lckhUTUwgPSByZW5kZXJVdGlscy5maXRTdHJpbmcoXG4gICAgICAgICAgcHJvamVjdHNbaV0sIGNvbnRlbnQub2Zmc2V0V2lkdGggLSA1NlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLy8gcHJpdmF0ZVxuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAodGhpc0lkKSA9PiB7XG4gICAgbGV0IGlkID0gdGhpc0lkLnNsaWNlKDcpO1xuICAgIGlmIChjb25maXJtKGBSZWFsbHkgZGVsZXRlIHByb2plY3Q6ICR7aWR9XFxuYW5kIGFsbCB0b2RvIGl0ZW1zIGl0IGNvbnRhaW5zP2ApID09IHRydWUpIHtcbiAgICAgIG1vZGVsLmRlbGV0ZVByb2plY3QoaWQpO1xuICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdF8ke2lkfWApO1xuICAgICAgcHJvamVjdERpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByb2plY3REaXYpO1xuICAgIH1cbiAgfTtcblxuICAvLyA/IHdpbGwgdXNlIHBhcmVudCBlbGVsbWVudCBhcyBwYXJhbSwgbm90IGlkLCB0aGVuIGZpbmQgaWRzIG5lZWRlZFxuICBjb25zdCBmb3JtID0gKHRoaXNJZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRoaXNJZCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgaW5kZXggfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHByb2plY3RzUmVuZGVyIH1cbiIsIi8vIGZ1bmN0aW9ucyBjb21tb24gdG8gdG9kb3NSZW5kZXIuanMgYW5kIHByb2plY3RzUmVuZGVyLmpzXG5jb25zdCByZW5kZXJVdGlscyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmaXRTdHJpbmcgPSAoc3RyaW5nLCB3aWR0aCkgPT4ge1xuICAgIGlmIChzdHJpbmcubGVuZ3RoICogMTIgPiB3aWR0aCkge1xuICAgICAgbGV0IHJlbW92ZSA9IChNYXRoLmZsb29yKHdpZHRoIC8gMTIpIC0gMykgLSBzdHJpbmcubGVuZ3RoO1xuICAgICAgc3RyaW5nID0gc3RyaW5nLnNsaWNlKDAsIHJlbW92ZSkuY29uY2F0KCcuLi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xuXG4gIHJldHVybiB7IGNsZWFyQ29udGVudCwgZml0U3RyaW5nIH07XG59KSgpO1xuXG5leHBvcnQgeyByZW5kZXJVdGlscyB9XG4iLCJpbXBvcnQgeyByZW5kZXJVdGlscyB9IGZyb20gJy4vcmVuZGVyVXRpbHMnXG5pbXBvcnQgeyBtb2RlbCB9IGZyb20gJy4vbW9kZWwnXG5cbmNvbnN0IHRvZG9zUmVuZGVyID0gKCgpID0+IHtcblxuICBjb25zdCBpbmRleCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdCA9IHByb2plY3Quc2xpY2UoOCk7XG4gICAgbGV0IHRvZG9zID0gbW9kZWwuaW5kZXhUb2Rvcyhwcm9qZWN0KTtcbiAgICByZW5kZXJVdGlscy5jbGVhckNvbnRlbnQoKTtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgbGV0IHRpdGxlVyA9IGNvbnRlbnQub2Zmc2V0V2lkdGggLSA1NjtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW1EaXYnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGAke3RvZG9zW2ldLnByaW9yaXR5fURpdmApO1xuICAgICAgZGl2LmlkID0gYCR7dG9kb3NbaV0uaWR9YDtcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjbGlja2VkIGRpdjogJHt0aGlzLmlkfWApO1xuICAgICAgfSk7XG4gICAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICAgICBjaGVja2JveC5pZCA9IGBkZWxldGVfJHt0b2Rvc1tpXS5pZH1gO1xuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgbW9kZWwuZGVsZXRlVG9kbyh0aGlzLmlkLnNsaWNlKDcpKTtcbiAgICAgICAgcmVtb3ZlVG9kbyh0aGlzLmlkKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IHJlbmRlclV0aWxzLmZpdFN0cmluZyh0b2Rvc1tpXS50aXRsZSwgdGl0bGVXKTtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB9XG5cbiAgICBsZXQgYWRkTmV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkTmV3LmlkID0gJ2FkZE5ldyc7XG4gICAgYWRkTmV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGZvcm0odGhpcy5pZCwgcHJvamVjdCk7XG4gICAgICBhZGROZXcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbiAgICBsZXQgcGx1c1NpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGx1c1NpZ24uaWQgPSAncGx1c1NpZ24nO1xuICAgIHBsdXNTaWduLmlubmVySFRNTCA9ICcrJztcbiAgICBhZGROZXcuYXBwZW5kQ2hpbGQocGx1c1NpZ24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkTmV3KTtcblxuICAgIC8vIHNldCBuYXZiYXIgbmF2YmFyIG1lc3NhZ2VcbiAgICBsZXQgbmF2TXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdk1zZycpO1xuICAgIG5hdk1zZy5pbm5lckhUTUwgPSByZW5kZXJVdGlscy5maXRTdHJpbmcoXG4gICAgICBwcm9qZWN0LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXNnRGl2Jykub2Zmc2V0V2lkdGggLSAxMlxuICAgICk7XG5cbiAgICAvLyBvblJlc2l6ZTogcmVmb3JtYXQgdGV4dCB0aGF0IHdvdWxkIG90aGVyd2lzZSBvdmVyZmxvd1xuICAgIGRvY3VtZW50LmJvZHkub25yZXNpemUgPSBmdW5jdGlvbigpe1xuICAgICAgbmF2TXNnLmlubmVySFRNTCA9IHJlbmRlclV0aWxzLmZpdFN0cmluZyhcbiAgICAgICAgcHJvamVjdCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21zZ0RpdicpLm9mZnNldFdpZHRoIC0gMTJcbiAgICAgICk7XG4gICAgICBsZXQgdGl0bGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGl0bGUnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRpdGxlc1tpXS5pbm5lckhUTUwgPSByZW5kZXJVdGlscy5maXRTdHJpbmcoXG4gICAgICAgICAgdG9kb3NbaV0udGl0bGUsIGNvbnRlbnQub2Zmc2V0V2lkdGggLSA1NlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLy8gcHJpdmF0ZTpcblxuICBjb25zdCByZW1vdmVUb2RvID0gKHRoaXNJZCkgPT4ge1xuICAgIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXNJZCk7XG4gICAgY2hlY2tCb3guaWQgPSAnZGVsZXRlZCc7XG4gICAgbGV0IGlkID0gdGhpc0lkLnNsaWNlKDcpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgdG9kb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgIHRvZG9EaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0b2RvRGl2KTtcbiAgICB9LCAzMDApO1xuICB9O1xuXG4gIC8vID8gd2lsbCB1c2UgcGFyZW50IGVsZWxtZW50IGFzIHBhcmFtLCBub3QgaWQsIHRoZW4gZmluZCBpZHMgbmVlZGVkXG4gIGNvbnN0IGZvcm0gPSAodGhpc0lkLCB0aGlzUHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3QgYWRkSW5wdXQgPSAoaWQpID0+IHtcbiAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICBsYWJlbC5pbm5lckhUTUwgPSBgJHtpZH06YDtcbiAgICAgIGxhYmVsLmlkID0gYCR7aWR9bGFiZWxgO1xuICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlmIChpZCA9PSAnZGVzY3JpcHRpb24nKSB7IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTsgfVxuICAgICAgaW5wdXQuaWQgPSBgJHtpZH1gO1xuICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRTZWxlY3Rpb24gPSAodHlwZSkgPT4ge1xuICAgICAgbGV0IG9wdGlvbnMgPSBbJ2hpZ2gnLCAnbWVkaXVtJywgJ2xvdyddO1xuICAgICAgaWYgKHR5cGUgPT0gJ3Byb2plY3RzJykgeyBvcHRpb25zID0gbW9kZWwucHJvamVjdHM7IH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvbnNbaV07XG4gICAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSBvcHRpb25zW2ldO1xuICAgICAgICBpZiAob3B0aW9uc1tpXSA9PSAnbWVkaXVtJykgeyAvLyBvciBjdXJyZW50IHByb2plY3RcbiAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09ICdwcm9qZWN0cycpIHsgcHJvamVjdHMuYXBwZW5kQ2hpbGQob3B0aW9uKTsgfVxuICAgICAgICBlbHNlIHsgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTsgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBkaXZDb2xvciA9ICgpID0+IHtcbiAgICAgIGZvcm1EaXYuY2xhc3NMaXN0LnJlbW92ZSgnbG93Rm9ybScpO1xuICAgICAgZm9ybURpdi5jbGFzc0xpc3QucmVtb3ZlKCdtZWRpdW1Gb3JtJyk7XG4gICAgICBmb3JtRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hGb3JtJyk7XG4gICAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoYCR7cHJpb3JpdHkudmFsdWV9Rm9ybWApO1xuICAgIH07XG5cbiAgICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWUsXG4gICAgICAgIHByaW9yaXR5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZSxcbiAgICAgICAgcHJvamVjdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJykudmFsdWVcbiAgICAgIH1cbiAgICAgIGxldCBlcnJvcnMgPSBtb2RlbC5jcmVhdGVUb2RvKGRhdGEpO1xuICAgICAgaWYgKGVycm9ycyA9IFsndGVzdCddKSB7XG4gICAgICAgIHdoaWxlIChjb250ZW50LmZvcm1EaXYpIHtcbiAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZm9ybURpdik7XG4gICAgICAgIH1cbiAgICAgICAgaW5kZXgoYHByb2plY3RfJHt0aGlzUHJvamVjdH1gKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGxldCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYgKHRoaXNJZCA9PSAnYWRkTmV3Jykge1xuICAgICAgZm9ybURpdi5jbGFzc0xpc3QuYWRkKCdmb3JtRGl2Jyk7XG4gICAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ21lZGl1bUZvcm0nKTtcblxuICAgIH0gZWxzZSB7IC8vIHVzZSB0aGlzSWQgdG8gZmluZCBlbGVtZW50IGZvciBmb3JtOyBjbGVhciBpdCBmaXJzdFxuXG4gICAgfVxuXG4gICAgbGV0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGFkZElucHV0KCd0aXRsZScpO1xuICAgIGFkZElucHV0KCdkZXNjcmlwdGlvbicpO1xuXG4gICAgbGV0IGxhYmVsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxhYmVsc0Rpdi5jbGFzc0xpc3QuYWRkKCdzZWxlY3Rpb25EaXYnKTtcbiAgICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgcHJpb3JpdHlMYWJlbC5pZCA9ICdwcmlvcml0eUxhYmVsJztcbiAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9ICdwcmlvcml0eTonO1xuICAgIGxldCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIHByb2plY3RMYWJlbC5pZCA9ICdwcm9qZWN0TGFiZWwnO1xuICAgIHByb2plY3RMYWJlbC5pbm5lckhUTUwgPSAncHJvamVjdDonO1xuICAgIGxldCBkb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZG9uZS50eXBlID0gJ2J1dHRvbic7IC8vIHByZXZlbnRzIGFwcCByZWxvYWQgb24gY2xpY2tcbiAgICBkb25lLmlkID0gJ2RvbmUnO1xuICAgIGRvbmUuaW5uZXJIVE1MID0gJ2RvbmUnO1xuICAgIGRvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdCk7XG4gICAgbGFiZWxzRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIGxhYmVsc0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgIGxhYmVsc0Rpdi5hcHBlbmRDaGlsZChkb25lKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChsYWJlbHNEaXYpO1xuXG4gICAgbGV0IHNlbGVjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlbGVjdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdzZWxlY3Rpb25EaXYnKTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eS5pZCA9ICdwcmlvcml0eSc7XG4gICAgYWRkU2VsZWN0aW9uKCdwcmlvcml0eScpO1xuICAgIHByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZGl2Q29sb3IpO1xuICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByb2plY3RzLmlkID0gJ3Byb2plY3RzJztcbiAgICBhZGRTZWxlY3Rpb24oJ3Byb2plY3RzJyk7XG4gICAgc2VsZWN0aW9uRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBzZWxlY3Rpb25EaXYuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHNlbGVjdGlvbkRpdik7XG5cbiAgICBmb3JtRGl2LmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm1EaXYpO1xuICB9O1xuXG4gIHJldHVybiB7IGluZGV4IH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IHRvZG9zUmVuZGVyIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=