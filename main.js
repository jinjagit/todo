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

    // disable; return key submits form
    // from: https://stackoverflow.com/questions/5629805/disabling-enter-key-for-form
    window.addEventListener('keydown',function(e) {
      if (e.keyIdentifier=='U+000A'|| e.keyIdentifier=='Enter' || e.keyCode==13) {
        if (e.target.nodeName=='INPUT' && e.target.type=='text') {
          e.preventDefault();
          return false;}
        }
      }, true);

    // set initial navBtn icon & add click event
    let navBtn = document.getElementById('navBtn');
    navBtn.classList.add('foldersIcon');
    navBtn.title = 'view projects';
    navBtn.addEventListener("click", navBtnClick);

    _todosRender__WEBPACK_IMPORTED_MODULE_1__["todosRender"].index('project_All to-do items');
  };

  return { initialize };

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
    { title: 'wash car', description: '',
      priority: 'low', project: 'regular stuff' },
    { title: 'buy coffee', description: 'whole beans',
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
  const initialize = () => {
    localStore = storageAvailable('localStorage');

    if (storageAvailable('localStorage')) {
      if(!localStorage.getItem('todos') || !localStorage.getItem('projects')) {
        useExampleData();
        localStorage.setItem('todos', JSON.stringify(todos));
        localStorage.setItem('projects', JSON.stringify(projects));
      } else {
        projects = JSON.parse(localStorage.getItem('projects'));
        todos = JSON.parse(localStorage.getItem('todos'));
        if (todos === undefined || projects === undefined) {
          useExampleData();
        } else {
          for (let i = 0; i < todos.length; i++) { todos[i].id = uniqueId(); }
        }
      }
    } else {
      useExampleData();
    }
  };

  // C.R.U.D:

  const indexTodos = (project) => {
    const sortByPriority = (unsorted) => {
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
        if (project == todos[i].project) { projectTodos.push(todos[i]); }
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
      saveTodosLocal();
    }

    return errors;
  };

  const editTodo = (formData, thisId) => {
    let errors = validateTodo(formData, thisId);

    if (errors.length == 0 || errors[0] == 'nothing to save') {
      let todo = getTodo(thisId);
      if (todo.priority == formData.priority || errors[0] == 'nothing to save') {
        errors[0] = 'same priority';
        if (todo.title != formData.title) {
          errors[0] = 'same priority new title';
        }
      }
      todo.title = formData.title;
      todo.description = formData.description;
      todo.priority = formData.priority;
      todo.project = formData.project;
      saveTodosLocal();
    }

    return errors;
  };

  const getTodo = (id) => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == id) { return todos[i];}
    }
  };

  const deleteTodo = (id) => {
    todos.splice(todos.indexOf(todos.find(e => e.id == id)), 1);
    saveTodosLocal();
  };

  const indexProjects = () => { return projects; };

  const createProject = (newProject) => {
    let errors = validateProject(newProject);
    if (errors.length == 0) {
      projects.push(newProject);
      saveProjectsLocal();
    }

    return errors;
  };

  const deleteProject = (project) => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].project == project) {
        deleteTodo(todos[i].id);
        i--;
      }
    }
    projects.splice(projects.indexOf(projects.find(e => e == project)), 1);
    saveProjectsLocal();
    saveTodosLocal();
  };

  // private

  let todos = [];
  let projects = [];
  let localStore = false;

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
      id, title, description, priority, project, setTitle, setDescription,
      setPriority, setProject, output
    };
  };

  const validateTodo = (data, editId = false) => {
    let errors = [];
    let editTodo = null;

    if (editId != false) { editTodo = getTodo(editId); }

    if ((editId == false && (data.title == '' && data.description == '')) ||
        (editId != false && editTodo.title == data.title &&
          editTodo.description == data.description &&
          editTodo.priority == data.priority &&
          editTodo.project == data.project)) {
      errors = ['nothing to save'];
    } else {
      if (data.title == '') { errors.push('title cannot be blank'); }
      else if (data.title.length > 64) {
        errors.push('title cannot contain more than 64 characters');
      } else if (editId == false) {
        let projectTodos = indexTodos(data.project);
        for (let i = 0; i < projectTodos.length; i++) {
          if (projectTodos[i].title.toLowerCase() == data.title.toLowerCase()) {
            errors.push(
              'title cannot match existing todo item title in same project'
            );
          }
        }
      }

      if (data.description.length > 256) {
        errors.push('description cannot contain more than 256 characters');
      }
    }

    return errors;
  };

  const validateProject = (newProject) => {
    let errors = [];
    if (newProject == '') { errors.push('nothing to save'); }
    else if (newProject.length > 46) {
      errors.push('title cannot contain more than 46 characters');
    } else {
      for (let i = 0; i < projects.length; i++) {
        if (newProject.toLowerCase() == projects[i].toLowerCase()) {
          errors.push('title cannot match existing project title');
        }
      }
    }

    return errors;
  };

  function storageAvailable(type) { // from: https://developer.mozilla.org
    var storage;
    try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch(e) {
      return e instanceof DOMException && (
        // everything except Firefox
        e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        (storage && storage.length !== 0);
    }
  };

  const useExampleData = () => {
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

  const saveTodosLocal = () => {
    if (localStore == true) {
      localStorage.removeItem('todos');
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  };

  const saveProjectsLocal = () => {
    if (localStore == true) {
      localStorage.removeItem('projects');
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  };

  return {
    initialize, indexTodos, createTodo, editTodo, getTodo, deleteTodo,
    indexProjects, createProject, deleteProject
  };

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

  let content = document.getElementById('content');

  const index = () => {
    _renderUtils__WEBPACK_IMPORTED_MODULE_0__["renderUtils"].clearContent();
    let projects = _model__WEBPACK_IMPORTED_MODULE_1__["model"].indexProjects();
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
      form();
      addNew.style.display = 'none';
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
    if (confirm(`Really delete project: ${id}\nAND any todo items it contains?`) == true) {
      _model__WEBPACK_IMPORTED_MODULE_1__["model"].deleteProject(id);
      let projectDiv = document.getElementById(`project_${id}`);
      projectDiv.parentNode.removeChild(projectDiv);
    }
  };

  const form = () => {
    const submit = () => {
      let project = input.value;
      let errors = _model__WEBPACK_IMPORTED_MODULE_1__["model"].createProject(project);
      if (errors.length == 0) {
        index();
      } else if (errors[0] == 'nothing to save') {
        content.removeChild(formDiv);
        addNew.style.display = 'block';
      } else {
        alert(`SAVE FAILED!\n* ${errors[0]}`);
      }
    };

    let formDiv = document.createElement('div');
    formDiv.classList.add('formDiv');
    formDiv.id = 'projectForm';
    let projectForm = document.createElement('form');
    let label = document.createElement('h4');
    label.innerHTML = 'title:';
    label.id = 'projectTitle';
    let input = document.createElement('input');
    input.id = 'projectTitle';
    projectForm.appendChild(label);
    projectForm.appendChild(input);

    let addProject = document.createElement('button');
    addProject.type = 'button'; // prevents app reload on click
    addProject.id = 'addProject';
    addProject.innerHTML = 'done';
    addProject.addEventListener("click", submit);
    projectForm.appendChild(addProject);

    formDiv.appendChild(projectForm);
    content.appendChild(formDiv);
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
  let content = document.getElementById('content');

  const index = (project) => {
    project = project.slice(8);
    let todos = _model__WEBPACK_IMPORTED_MODULE_1__["model"].indexTodos(project);
    _renderUtils__WEBPACK_IMPORTED_MODULE_0__["renderUtils"].clearContent();

    let titleW = content.offsetWidth - 56; // recalculate
    let formDiv = document.createElement('div');
    formDiv.classList.add('formDiv');
    formDiv.classList.add('mediumForm');
    formDiv.id = 'formDiv';
    formDiv.style.display = 'none';

    for(let i = 0; i < todos.length; i++) { // add todo items
      let div = document.createElement('div');
      div.classList.add('itemDiv');
      div.classList.add(`${todos[i].priority}Div`);
      div.id = `${todos[i].id}`;
      div.addEventListener("click", function() {
        let children = [].slice.call(div.children);
        if (children.join().includes('[object HTMLFormElement]') == false) {
          form(this.id, project);
        }
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
      title.id = `title_${todos[i].id}`;
      div.appendChild(checkbox);
      div.appendChild(title);
      content.appendChild(div);
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
    content.appendChild(formDiv);

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

  const form = (thisId, thisProject) => {
    const addInput = (name) => {
      let label = document.createElement('h4');
      label.innerHTML = `${name}:`;
      let input = document.createElement('input');
      if (name == 'description') {
        input = document.createElement('textarea');
        input.classList.add(`${name}`);
      }
      input.id = `${name}${thisId}`;
      if (thisId != 'addNew') { input.value = _model__WEBPACK_IMPORTED_MODULE_1__["model"].getTodo(thisId)[`${name}`]; }

      todoForm.appendChild(label);
      todoForm.appendChild(input);
    };

    const addSelection = (type) => {
      let options = ['high', 'medium', 'low'];
      if (type == 'project') { options = _model__WEBPACK_IMPORTED_MODULE_1__["model"].indexProjects(); }
      for (let i = 0; i < options.length; i++) {
        let option = document.createElement('option');
        option.value = options[i];
        option.innerHTML = options[i];
        if (thisId == 'addNew') {
          if (options[i] == 'medium' || options[i] == thisProject) {
          option.setAttribute('selected', true);
          }
        } else if ((options[i] == _model__WEBPACK_IMPORTED_MODULE_1__["model"].getTodo(thisId).priority) ||
                    (options[i] == _model__WEBPACK_IMPORTED_MODULE_1__["model"].getTodo(thisId).project)) {
          option.setAttribute('selected', true);
        }
        if (type == 'project') { projects.appendChild(option); }
        else { priority.appendChild(option); }
      }
    };

    const divColor = (thisDiv) => {
      thisDiv.classList.remove('lowForm');
      thisDiv.classList.remove('mediumForm');
      thisDiv.classList.remove('highForm');
      thisDiv.classList.add(`${priority.value}Form`);
    };

    const submit = () => {
      let data = {
        title: document.getElementById(`title${thisId}`).value,
        description: document.getElementById(`description${thisId}`).value,
        priority: document.getElementById(`priority${thisId}`).value,
        project: document.getElementById(`projects${thisId}`).value
      }
      let todo = _model__WEBPACK_IMPORTED_MODULE_1__["model"].getTodo(thisId);

      if ((thisId == 'addNew' && thisProject == 'All to-do items') ||
          todo.project == data.project ||
          confirm(`Really save to other project: ${data.project}?`) == true) {
        let errors = [];
        if (thisId == 'addNew') { errors = _model__WEBPACK_IMPORTED_MODULE_1__["model"].createTodo(data); }
        else { errors = _model__WEBPACK_IMPORTED_MODULE_1__["model"].editTodo(data, thisId); }

        if (errors[0] == 'nothing to save') {
          formDiv.removeChild(todoForm);
          formDiv.style.display = 'none';
          addNew.style.display = 'block';
        } else if ((errors[0] == 'same priority' ||
            errors[0] == 'same priority new title') &&
            (thisProject == data.project || thisProject == 'All to-do items')) {
          setTimeout(function(){ thisDiv.removeChild(todoForm); }, 10);
          thisDiv.classList.remove('formDiv');
          thisDiv.classList.remove(`${todo.priority}Form`);
          thisDiv.classList.add('itemDiv');
          thisDiv.classList.add(`${todo.priority}Div`);
          document.getElementById(`delete_${thisId}`).style.display = 'block';
          document.getElementById(`title_${thisId}`).style.display = 'block';
          if (errors[0] == 'same priority new title') {
            document.getElementById(`title_${thisId}`).innerHTML =
            _renderUtils__WEBPACK_IMPORTED_MODULE_0__["renderUtils"].fitString(todo.title, content.offsetWidth - 56);
          }
        } else if ((errors.length == 0) || ((errors[0] == 'same priority' ||
            errors[0] == 'same priority new title') &&
            (thisProject != data.project && thisProject != 'All to-do items'))) {
          index(`project_${thisProject}`);
        } else {
          let message = 'SAVE FAILED!';
          for (let i = 0; i < errors.length; i ++) {
            message += `\n* ${errors[i]}`;
          }
          alert(message);
        }
      }
    };

    let todoForm = document.createElement('form');
    todoForm.id = `form${thisId}`;
    addInput('title');
    addInput('description');

    let labelsDiv = document.createElement('div');
    labelsDiv.classList.add('selectionDiv');
    let priorityLabel = document.createElement('h4');
    priorityLabel.classList.add('priorityLabel');
    priorityLabel.innerHTML = 'priority:';
    labelsDiv.appendChild(priorityLabel);
    let projectLabel = document.createElement('h4');
    projectLabel.classList.add('projectLabel');
    projectLabel.innerHTML = 'project:';
    labelsDiv.appendChild(projectLabel);
    let done = document.createElement('button');
    done.type = 'button'; // prevents app reload on click
    done.classList.add('done');
    done.innerHTML = 'done';
    labelsDiv.appendChild(done);
    todoForm.appendChild(labelsDiv);

    let selectionDiv = document.createElement('div');
    selectionDiv.classList.add('selectionDiv');
    let priority = document.createElement('select');
    priority.classList.add('priority');
    priority.id = `priority${thisId}`;
    addSelection('priority');
    selectionDiv.appendChild(priority);
    let projects = document.createElement('select');
    projects.classList.add('projects');
    projects.id = `projects${thisId}`;
    addSelection('project');
    selectionDiv.appendChild(projects);
    todoForm.appendChild(selectionDiv);

    let thisDiv = document.getElementById('formDiv');
    if (thisId != 'addNew') { // insert 'edit' form at todo item position
      thisDiv = document.getElementById(thisId);
      thisDiv.removeEventListener("click", function() {
        edit(this.id, project);
      });
      thisDiv.classList.remove('itemDiv');
      thisDiv.classList.remove(`${_model__WEBPACK_IMPORTED_MODULE_1__["model"].getTodo(thisId).priority}Div`);
      thisDiv.classList.add('formDiv');
      divColor(thisDiv);
      document.getElementById(`delete_${thisId}`).style.display = 'none';
      document.getElementById(`title_${thisId}`).style.display = 'none';
    }

    done.addEventListener("click", submit);
    priority.addEventListener("change", function() { divColor(thisDiv); });
    thisDiv.appendChild(todoForm);
    thisDiv.style.display = 'block';

    // scroll page to show whole form if form opens partly below window
    let divH = 143;
    let space = window.innerHeight - thisDiv.getBoundingClientRect().top;
    if (space < divH) { window.scrollTo(0, window.pageYOffset + (divH - space)); }
  };

  return { index };

})();




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcFJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdHNSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlclV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy90b2Rvc1JlbmRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQWlEO0FBQ047O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUFjO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FB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T0FBTztBQUNuRCwyQ0FBMkMsT0FBTztBQUNsRDtBQUNBLDZDQUE2QyxPQUFPO0FBQ3BELFlBQVksd0RBQVc7QUFDdkI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDLFNBQVM7QUFDVDtBQUNBLHlCQUF5QixtQkFBbUI7QUFDNUMsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLGtDQUFrQyw0Q0FBSywwQkFBMEI7QUFDakU7QUFDQTtBQUNBLHdDQUF3QyxPQUFPO0FBQy9DLHVDQUF1QyxPQUFPO0FBQzlDOztBQUVBO0FBQ0Esb0RBQW9ELG1CQUFtQixFQUFFO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlEQUF5RDtBQUNoRjs7QUFFQSxVQUFVOztBQUVWLENBQUM7O0FBRXFCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHByb2plY3RzUmVuZGVyIH0gZnJvbSAnLi9wcm9qZWN0c1JlbmRlcidcbmltcG9ydCB7IHRvZG9zUmVuZGVyIH0gZnJvbSAnLi90b2Rvc1JlbmRlcidcblxuY29uc3QgYXBwUmVuZGVyID0gKCgpID0+IHtcblxuICBjb25zdCBuYXZCdG5DbGljayA9ICgpID0+IHtcbiAgICBpZiAobmF2QnRuLmNsYXNzTGlzdC52YWx1ZSA9PSAnZm9sZGVyc0ljb24nKSB7XG4gICAgICBuYXZCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZm9sZGVyc0ljb24nKTtcbiAgICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCdleWVJY29uJyk7XG4gICAgICBuYXZCdG4udGl0bGUgPSAndmlldyBhbGwgdG9kbyBpdGVtcyBmcm9tIGFsbCBwcm9qZWN0cyc7XG4gICAgICBwcm9qZWN0c1JlbmRlci5pbmRleCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXZCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZXllSWNvbicpO1xuICAgICAgbmF2QnRuLmNsYXNzTGlzdC5hZGQoJ2ZvbGRlcnNJY29uJyk7XG4gICAgICBuYXZCdG4udGl0bGUgPSAndmlldyBwcm9qZWN0cyc7XG4gICAgICB0b2Rvc1JlbmRlci5pbmRleCgncHJvamVjdF9BbGwgdG8tZG8gaXRlbXMnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICBsZXQgbmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhcicpO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIC8vIHNldCBuYXZiYXIgc2Nyb2xsIGJlaGF2aW91ciAoaGlkZSAvIHJldmVhbClcbiAgICB2YXIgcHJldlNjcm9sbHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgaWYgKHByZXZTY3JvbGxwb3MgPiBjdXJyZW50U2Nyb2xsUG9zKSB7XG4gICAgICAgIG5hdmJhci5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgICAgY29udGVudC5zdHlsZS5tYXJnaW5Ub3AgPSAnNTBweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYXZiYXIuc3R5bGUudG9wID0gJy01MHB4JztcbiAgICAgICAgY29udGVudC5zdHlsZS5tYXJnaW5Ub3AgPSAnMHB4JztcbiAgICAgIH1cbiAgICAgIHByZXZTY3JvbGxwb3MgPSBjdXJyZW50U2Nyb2xsUG9zO1xuICAgIH1cblxuICAgIC8vIGRpc2FibGU7IHJldHVybiBrZXkgc3VibWl0cyBmb3JtXG4gICAgLy8gZnJvbTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTYyOTgwNS9kaXNhYmxpbmctZW50ZXIta2V5LWZvci1mb3JtXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLmtleUlkZW50aWZpZXI9PSdVKzAwMEEnfHwgZS5rZXlJZGVudGlmaWVyPT0nRW50ZXInIHx8IGUua2V5Q29kZT09MTMpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lPT0nSU5QVVQnICYmIGUudGFyZ2V0LnR5cGU9PSd0ZXh0Jykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7fVxuICAgICAgICB9XG4gICAgICB9LCB0cnVlKTtcblxuICAgIC8vIHNldCBpbml0aWFsIG5hdkJ0biBpY29uICYgYWRkIGNsaWNrIGV2ZW50XG4gICAgbGV0IG5hdkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZCdG4nKTtcbiAgICBuYXZCdG4uY2xhc3NMaXN0LmFkZCgnZm9sZGVyc0ljb24nKTtcbiAgICBuYXZCdG4udGl0bGUgPSAndmlldyBwcm9qZWN0cyc7XG4gICAgbmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuYXZCdG5DbGljayk7XG5cbiAgICB0b2Rvc1JlbmRlci5pbmRleCgncHJvamVjdF9BbGwgdG8tZG8gaXRlbXMnKTtcbiAgfTtcblxuICByZXR1cm4geyBpbml0aWFsaXplIH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IGFwcFJlbmRlciB9XG4iLCIvLyBEZWZhdWx0IGRhdGEgdG8gdXNlIHdoZW4gbG9jYWxTdG9yYWdlIHVuYXZhaWxhYmxlIC8gY29udGFpbnMgbm8gYXBwIGRhdGFcbmNvbnN0IGV4YW1wbGVEYXRhID0gKCgpID0+IHtcbiAgbGV0IHRvZG9zID0gW1xuICAgIHsgdGl0bGU6ICdkbyBsYXVuZHJ5JywgZGVzY3JpcHRpb246ICdyZW1lbWJlciBqZWFucycsXG4gICAgICBwcmlvcml0eTogJ2hpZ2gnLCBwcm9qZWN0OiAncmVndWxhciBzdHVmZicgfSxcbiAgICB7IHRpdGxlOiAnd2FzaCBjYXInLCBkZXNjcmlwdGlvbjogJycsXG4gICAgICBwcmlvcml0eTogJ2xvdycsIHByb2plY3Q6ICdyZWd1bGFyIHN0dWZmJyB9LFxuICAgIHsgdGl0bGU6ICdidXkgY29mZmVlJywgZGVzY3JpcHRpb246ICd3aG9sZSBiZWFucycsXG4gICAgICBwcmlvcml0eTogJ21lZGl1bScsIHByb2plY3Q6ICdyZWd1bGFyIHN0dWZmJyB9LFxuICAgIHsgdGl0bGU6ICdyZXNlYXJjaCBhcnJvdyBmdW5jdGlvbnMnLFxuICAgICAgZGVzY3JpcHRpb246ICdtYWtlIG5vdGVzIGFuZCBzYXZlIGxpbmtzJyxcbiAgICAgIHByaW9yaXR5OiAnaGlnaCcsIHByb2plY3Q6ICd3cml0ZSBhcnRpY2xlJyB9LFxuICAgIHsgdGl0bGU6ICd3cml0ZSBib2R5IG9mIGFydGljbGUnLCBkZXNjcmlwdGlvbjogJ2FjdHVhbGx5IHdyaXRlIHRoZSB0aGluZycsXG4gICAgICBwcmlvcml0eTogJ21lZGl1bScsIHByb2plY3Q6ICd3cml0ZSBhcnRpY2xlJyB9LFxuICAgIHsgdGl0bGU6ICdwcm9vZnJlYWQgYXJ0aWNsZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ2NoZWNrIGZvciBlcnJvcnMgYW5kIGJhZCBncmFtbWFyJyxcbiAgICAgIHByaW9yaXR5OiAnbG93JywgcHJvamVjdDogJ3dyaXRlIGFydGljbGUnIH0sXG4gICAgeyB0aXRsZTogJ3Jlc2VhcmNoIElJRkVzJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnd2hhdCBhcmUgdGhleSwgYW5kIHdoZW4gYXJlIHRoZXkgdXNlZD8nLFxuICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLCBwcm9qZWN0OiAnd3JpdGUgYXJ0aWNsZScgfSxcbiAgICB7IHRpdGxlOiAndG9kbyB3aXRoIGV4YW1wbGUgcmVhbGx5IGxvbmcgdGl0bGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdmb3IgdGVzdGluZyBsb25nIHN0cmluZ3MnLCBwcmlvcml0eTogJ21lZGl1bScsXG4gICAgICBwcm9qZWN0OiAncHJvamVjdCB3aXRoIHJlYWxseSBsb25nIHRpdGxlJyB9XG4gIF07XG5cbiAgbGV0IHByb2plY3RzID0gW1xuICAgICdyZWd1bGFyIHN0dWZmJyxcbiAgICAnd3JpdGUgYXJ0aWNsZScsXG4gICAgJ3Byb2plY3Qgd2l0aCByZWFsbHkgbG9uZyB0aXRsZSdcbiAgXTtcblxuICByZXR1cm4ge3RvZG9zLCBwcm9qZWN0c31cbn0pKCk7XG5cbmV4cG9ydCB7IGV4YW1wbGVEYXRhIH1cbiIsImltcG9ydCB7IG1vZGVsIH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7IGFwcFJlbmRlciB9IGZyb20gJy4vYXBwUmVuZGVyJ1xuXG5tb2RlbC5pbml0aWFsaXplKCk7XG5hcHBSZW5kZXIuaW5pdGlhbGl6ZSgpO1xuIiwiaW1wb3J0IHsgZXhhbXBsZURhdGEgfSBmcm9tICcuL2V4YW1wbGVEYXRhJ1xuXG5jb25zdCBtb2RlbCA9ICgoKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yZSA9IHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpO1xuXG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgICBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykgfHwgIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB7XG4gICAgICAgIHVzZUV4YW1wbGVEYXRhKCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAgICAgICB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuICAgICAgICBpZiAodG9kb3MgPT09IHVuZGVmaW5lZCB8fCBwcm9qZWN0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdXNlRXhhbXBsZURhdGEoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7IHRvZG9zW2ldLmlkID0gdW5pcXVlSWQoKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHVzZUV4YW1wbGVEYXRhKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEMuUi5VLkQ6XG5cbiAgY29uc3QgaW5kZXhUb2RvcyA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3Qgc29ydEJ5UHJpb3JpdHkgPSAodW5zb3J0ZWQpID0+IHtcbiAgICAgIGxldCBzb3J0ZWQgPSBbXSwgaGlnaCA9IFtdLCBtZWRpdW0gPSBbXSwgbG93ID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuc29ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh1bnNvcnRlZFtpXS5wcmlvcml0eSA9PSAnaGlnaCcpIHsgaGlnaC5wdXNoKHVuc29ydGVkW2ldKSB9XG4gICAgICAgIGVsc2UgaWYgKHVuc29ydGVkW2ldLnByaW9yaXR5ID09ICdtZWRpdW0nKSB7IG1lZGl1bS5wdXNoKHVuc29ydGVkW2ldKSB9XG4gICAgICAgIGVsc2UgeyBsb3cucHVzaCh1bnNvcnRlZFtpXSkgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNvcnRlZCA9IGhpZ2guY29uY2F0KG1lZGl1bS5jb25jYXQobG93KSk7XG4gICAgfTtcblxuICAgIGlmIChwcm9qZWN0ID09ICdBbGwgdG8tZG8gaXRlbXMnKSB7XG4gICAgICByZXR1cm4gc29ydEJ5UHJpb3JpdHkodG9kb3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcHJvamVjdFRvZG9zID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0ID09IHRvZG9zW2ldLnByb2plY3QpIHsgcHJvamVjdFRvZG9zLnB1c2godG9kb3NbaV0pOyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc29ydEJ5UHJpb3JpdHkocHJvamVjdFRvZG9zKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVG9kbyA9IChmb3JtRGF0YSkgPT4ge1xuICAgIGxldCBlcnJvcnMgPSB2YWxpZGF0ZVRvZG8oZm9ybURhdGEpO1xuICAgIGlmIChlcnJvcnMubGVuZ3RoID09IDApIHtcbiAgICAgIHRvZG9zLnB1c2goXG4gICAgICAgIHRvZG9GYWN0b3J5KHVuaXF1ZUlkKCksIGZvcm1EYXRhLnRpdGxlLCBmb3JtRGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgZm9ybURhdGEucHJpb3JpdHksIGZvcm1EYXRhLnByb2plY3RcbiAgICAgICkpO1xuICAgICAgc2F2ZVRvZG9zTG9jYWwoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRUb2RvID0gKGZvcm1EYXRhLCB0aGlzSWQpID0+IHtcbiAgICBsZXQgZXJyb3JzID0gdmFsaWRhdGVUb2RvKGZvcm1EYXRhLCB0aGlzSWQpO1xuXG4gICAgaWYgKGVycm9ycy5sZW5ndGggPT0gMCB8fCBlcnJvcnNbMF0gPT0gJ25vdGhpbmcgdG8gc2F2ZScpIHtcbiAgICAgIGxldCB0b2RvID0gZ2V0VG9kbyh0aGlzSWQpO1xuICAgICAgaWYgKHRvZG8ucHJpb3JpdHkgPT0gZm9ybURhdGEucHJpb3JpdHkgfHwgZXJyb3JzWzBdID09ICdub3RoaW5nIHRvIHNhdmUnKSB7XG4gICAgICAgIGVycm9yc1swXSA9ICdzYW1lIHByaW9yaXR5JztcbiAgICAgICAgaWYgKHRvZG8udGl0bGUgIT0gZm9ybURhdGEudGl0bGUpIHtcbiAgICAgICAgICBlcnJvcnNbMF0gPSAnc2FtZSBwcmlvcml0eSBuZXcgdGl0bGUnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0b2RvLnRpdGxlID0gZm9ybURhdGEudGl0bGU7XG4gICAgICB0b2RvLmRlc2NyaXB0aW9uID0gZm9ybURhdGEuZGVzY3JpcHRpb247XG4gICAgICB0b2RvLnByaW9yaXR5ID0gZm9ybURhdGEucHJpb3JpdHk7XG4gICAgICB0b2RvLnByb2plY3QgPSBmb3JtRGF0YS5wcm9qZWN0O1xuICAgICAgc2F2ZVRvZG9zTG9jYWwoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzO1xuICB9O1xuXG4gIGNvbnN0IGdldFRvZG8gPSAoaWQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodG9kb3NbaV0uaWQgPT0gaWQpIHsgcmV0dXJuIHRvZG9zW2ldO31cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9IChpZCkgPT4ge1xuICAgIHRvZG9zLnNwbGljZSh0b2Rvcy5pbmRleE9mKHRvZG9zLmZpbmQoZSA9PiBlLmlkID09IGlkKSksIDEpO1xuICAgIHNhdmVUb2Rvc0xvY2FsKCk7XG4gIH07XG5cbiAgY29uc3QgaW5kZXhQcm9qZWN0cyA9ICgpID0+IHsgcmV0dXJuIHByb2plY3RzOyB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmV3UHJvamVjdCkgPT4ge1xuICAgIGxldCBlcnJvcnMgPSB2YWxpZGF0ZVByb2plY3QobmV3UHJvamVjdCk7XG4gICAgaWYgKGVycm9ycy5sZW5ndGggPT0gMCkge1xuICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgIHNhdmVQcm9qZWN0c0xvY2FsKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9ycztcbiAgfTtcblxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodG9kb3NbaV0ucHJvamVjdCA9PSBwcm9qZWN0KSB7XG4gICAgICAgIGRlbGV0ZVRvZG8odG9kb3NbaV0uaWQpO1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgfVxuICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKHByb2plY3RzLmZpbmQoZSA9PiBlID09IHByb2plY3QpKSwgMSk7XG4gICAgc2F2ZVByb2plY3RzTG9jYWwoKTtcbiAgICBzYXZlVG9kb3NMb2NhbCgpO1xuICB9O1xuXG4gIC8vIHByaXZhdGVcblxuICBsZXQgdG9kb3MgPSBbXTtcbiAgbGV0IHByb2plY3RzID0gW107XG4gIGxldCBsb2NhbFN0b3JlID0gZmFsc2U7XG5cbiAgY29uc3QgdW5pcXVlSWQgPSAoKCkgPT4ge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICsrY291bnQ7XG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBjb25zdCB0b2RvRmFjdG9yeSA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3Qgb3V0cHV0ID0gKCkgPT4gY29uc29sZS5sb2coYGlkOiAke2lkfSwgdGl0bGU6ICR7dGl0bGV9LCBkZXNjOiAke2Rlc2NyaXB0aW9ufSwgcHJpb3JpdHk6ICR7cHJpb3JpdHl9LCBwcm9qZWN0OiAke3Byb2plY3R9YCk7XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IG5ld1RpdGxlID0+IHRpdGxlID0gbmV3VGl0bGU7XG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbiA9PiBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gbmV3UHJpb3JpdHkgPT4gcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICBjb25zdCBzZXRQcm9qZWN0ID0gbmV3UHJvamVjdCA9PiBwcm9qZWN0ID0gbmV3UHJvamVjdDtcblxuICAgIHJldHVybiB7XG4gICAgICBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCwgc2V0VGl0bGUsIHNldERlc2NyaXB0aW9uLFxuICAgICAgc2V0UHJpb3JpdHksIHNldFByb2plY3QsIG91dHB1dFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgdmFsaWRhdGVUb2RvID0gKGRhdGEsIGVkaXRJZCA9IGZhbHNlKSA9PiB7XG4gICAgbGV0IGVycm9ycyA9IFtdO1xuICAgIGxldCBlZGl0VG9kbyA9IG51bGw7XG5cbiAgICBpZiAoZWRpdElkICE9IGZhbHNlKSB7IGVkaXRUb2RvID0gZ2V0VG9kbyhlZGl0SWQpOyB9XG5cbiAgICBpZiAoKGVkaXRJZCA9PSBmYWxzZSAmJiAoZGF0YS50aXRsZSA9PSAnJyAmJiBkYXRhLmRlc2NyaXB0aW9uID09ICcnKSkgfHxcbiAgICAgICAgKGVkaXRJZCAhPSBmYWxzZSAmJiBlZGl0VG9kby50aXRsZSA9PSBkYXRhLnRpdGxlICYmXG4gICAgICAgICAgZWRpdFRvZG8uZGVzY3JpcHRpb24gPT0gZGF0YS5kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgIGVkaXRUb2RvLnByaW9yaXR5ID09IGRhdGEucHJpb3JpdHkgJiZcbiAgICAgICAgICBlZGl0VG9kby5wcm9qZWN0ID09IGRhdGEucHJvamVjdCkpIHtcbiAgICAgIGVycm9ycyA9IFsnbm90aGluZyB0byBzYXZlJ107XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkYXRhLnRpdGxlID09ICcnKSB7IGVycm9ycy5wdXNoKCd0aXRsZSBjYW5ub3QgYmUgYmxhbmsnKTsgfVxuICAgICAgZWxzZSBpZiAoZGF0YS50aXRsZS5sZW5ndGggPiA2NCkge1xuICAgICAgICBlcnJvcnMucHVzaCgndGl0bGUgY2Fubm90IGNvbnRhaW4gbW9yZSB0aGFuIDY0IGNoYXJhY3RlcnMnKTtcbiAgICAgIH0gZWxzZSBpZiAoZWRpdElkID09IGZhbHNlKSB7XG4gICAgICAgIGxldCBwcm9qZWN0VG9kb3MgPSBpbmRleFRvZG9zKGRhdGEucHJvamVjdCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdFRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHByb2plY3RUb2Rvc1tpXS50aXRsZS50b0xvd2VyQ2FzZSgpID09IGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgZXJyb3JzLnB1c2goXG4gICAgICAgICAgICAgICd0aXRsZSBjYW5ub3QgbWF0Y2ggZXhpc3RpbmcgdG9kbyBpdGVtIHRpdGxlIGluIHNhbWUgcHJvamVjdCdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLmRlc2NyaXB0aW9uLmxlbmd0aCA+IDI1Nikge1xuICAgICAgICBlcnJvcnMucHVzaCgnZGVzY3JpcHRpb24gY2Fubm90IGNvbnRhaW4gbW9yZSB0aGFuIDI1NiBjaGFyYWN0ZXJzJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9ycztcbiAgfTtcblxuICBjb25zdCB2YWxpZGF0ZVByb2plY3QgPSAobmV3UHJvamVjdCkgPT4ge1xuICAgIGxldCBlcnJvcnMgPSBbXTtcbiAgICBpZiAobmV3UHJvamVjdCA9PSAnJykgeyBlcnJvcnMucHVzaCgnbm90aGluZyB0byBzYXZlJyk7IH1cbiAgICBlbHNlIGlmIChuZXdQcm9qZWN0Lmxlbmd0aCA+IDQ2KSB7XG4gICAgICBlcnJvcnMucHVzaCgndGl0bGUgY2Fubm90IGNvbnRhaW4gbW9yZSB0aGFuIDQ2IGNoYXJhY3RlcnMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobmV3UHJvamVjdC50b0xvd2VyQ2FzZSgpID09IHByb2plY3RzW2ldLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCgndGl0bGUgY2Fubm90IG1hdGNoIGV4aXN0aW5nIHByb2plY3QgdGl0bGUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG4gIH07XG5cbiAgZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7IC8vIGZyb206IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnXG4gICAgdmFyIHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICB2YXIgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaChlKSB7XG4gICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVzZUV4YW1wbGVEYXRhID0gKCkgPT4ge1xuICAgIGxldCB0b2Rvc0V4YW1wbGVzID0gZXhhbXBsZURhdGEudG9kb3M7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvc0V4YW1wbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b2Rvcy5wdXNoKFxuICAgICAgICB0b2RvRmFjdG9yeSh1bmlxdWVJZCgpLCB0b2Rvc0V4YW1wbGVzW2ldLnRpdGxlLCB0b2Rvc0V4YW1wbGVzW2ldLmRlc2NyaXB0aW9uLFxuICAgICAgICB0b2Rvc0V4YW1wbGVzW2ldLnByaW9yaXR5LCB0b2Rvc0V4YW1wbGVzW2ldLnByb2plY3RcbiAgICAgICkpO1xuICAgIH1cblxuICAgIGxldCBwcm9qZWN0c0V4YW1wbGVzID0gZXhhbXBsZURhdGEucHJvamVjdHM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0V4YW1wbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3RzRXhhbXBsZXNbaV0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzYXZlVG9kb3NMb2NhbCA9ICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yZSA9PSB0cnVlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9kb3MnKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNhdmVQcm9qZWN0c0xvY2FsID0gKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JlID09IHRydWUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9qZWN0cycpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0aWFsaXplLCBpbmRleFRvZG9zLCBjcmVhdGVUb2RvLCBlZGl0VG9kbywgZ2V0VG9kbywgZGVsZXRlVG9kbyxcbiAgICBpbmRleFByb2plY3RzLCBjcmVhdGVQcm9qZWN0LCBkZWxldGVQcm9qZWN0XG4gIH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IG1vZGVsIH1cbiIsImltcG9ydCB7IHJlbmRlclV0aWxzIH0gZnJvbSAnLi9yZW5kZXJVdGlscydcbmltcG9ydCB7IG1vZGVsIH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7IHRvZG9zUmVuZGVyIH0gZnJvbSAnLi90b2Rvc1JlbmRlcidcblxuY29uc3QgcHJvamVjdHNSZW5kZXIgPSAoKCkgPT4ge1xuXG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBpbmRleCA9ICgpID0+IHtcbiAgICByZW5kZXJVdGlscy5jbGVhckNvbnRlbnQoKTtcbiAgICBsZXQgcHJvamVjdHMgPSBtb2RlbC5pbmRleFByb2plY3RzKCk7XG4gICAgbGV0IG5hdkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZCdG4nKTtcbiAgICBsZXQgdGl0bGVXID0gY29udGVudC5vZmZzZXRXaWR0aCAtIDU2O1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaXRlbURpdicpO1xuICAgICAgZGl2LmlkID0gYHByb2plY3RfJHtwcm9qZWN0c1tpXX1gO1xuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbmF2QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2V5ZUljb24nKTtcbiAgICAgICAgbmF2QnRuLmNsYXNzTGlzdC5hZGQoJ2ZvbGRlcnNJY29uJyk7XG4gICAgICAgIG5hdkJ0bi50aXRsZSA9ICd2aWV3IHByb2plY3RzJztcbiAgICAgICAgdG9kb3NSZW5kZXIuaW5kZXgodGhpcy5pZCk7XG4gICAgICB9KTtcbiAgICAgIGxldCBkZWxldGVib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRlbGV0ZWJveC5jbGFzc0xpc3QuYWRkKCdkZWxldGVib3gnKTtcbiAgICAgIGRlbGV0ZWJveC5pZCA9IGBkZWxldGVfJHtwcm9qZWN0c1tpXX1gO1xuICAgICAgZGVsZXRlYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjbGlja2VkOiAke3RoaXMuaWR9YCk7XG4gICAgICAgIHJlbW92ZVByb2plY3QodGhpcy5pZCk7XG4gICAgICB9KTtcbiAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICB0aXRsZS5pbm5lckhUTUwgPSByZW5kZXJVdGlscy5maXRTdHJpbmcocHJvamVjdHNbaV0sIHRpdGxlVyk7XG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGRlbGV0ZWJveCk7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIH1cblxuICAgIGxldCBhZGROZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGROZXcuaWQgPSAnYWRkTmV3JztcbiAgICBhZGROZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgZm9ybSgpO1xuICAgICAgYWRkTmV3LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gICAgbGV0IHBsdXNTaWduID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBsdXNTaWduLmlkID0gJ3BsdXNTaWduJztcbiAgICBwbHVzU2lnbi5pbm5lckhUTUwgPSAnKyc7XG4gICAgYWRkTmV3LmFwcGVuZENoaWxkKHBsdXNTaWduKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZE5ldyk7XG5cbiAgICAvLyBzZXQgbmF2YmFyIG1lc3NhZ2VcbiAgICBsZXQgbmF2TXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdk1zZycpO1xuICAgIG5hdk1zZy5pbm5lckhUTUwgPSAnUHJvamVjdHMnO1xuXG4gICAgLy8gb25SZXNpemU6IHJlZm9ybWF0IHRleHQgdGhhdCB3b3VsZCBvdGhlcndpc2Ugb3ZlcmZsb3dcbiAgICBkb2N1bWVudC5ib2R5Lm9ucmVzaXplID0gZnVuY3Rpb24oKXtcbiAgICAgIGxldCB0aXRsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aXRsZScpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGl0bGVzW2ldLmlubmVySFRNTCA9IHJlbmRlclV0aWxzLmZpdFN0cmluZyhcbiAgICAgICAgICBwcm9qZWN0c1tpXSwgY29udGVudC5vZmZzZXRXaWR0aCAtIDU2XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBwcml2YXRlXG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9ICh0aGlzSWQpID0+IHtcbiAgICBsZXQgaWQgPSB0aGlzSWQuc2xpY2UoNyk7XG4gICAgaWYgKGNvbmZpcm0oYFJlYWxseSBkZWxldGUgcHJvamVjdDogJHtpZH1cXG5BTkQgYW55IHRvZG8gaXRlbXMgaXQgY29udGFpbnM/YCkgPT0gdHJ1ZSkge1xuICAgICAgbW9kZWwuZGVsZXRlUHJvamVjdChpZCk7XG4gICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0XyR7aWR9YCk7XG4gICAgICBwcm9qZWN0RGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocHJvamVjdERpdik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3Qgc3VibWl0ID0gKCkgPT4ge1xuICAgICAgbGV0IHByb2plY3QgPSBpbnB1dC52YWx1ZTtcbiAgICAgIGxldCBlcnJvcnMgPSBtb2RlbC5jcmVhdGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgaWYgKGVycm9ycy5sZW5ndGggPT0gMCkge1xuICAgICAgICBpbmRleCgpO1xuICAgICAgfSBlbHNlIGlmIChlcnJvcnNbMF0gPT0gJ25vdGhpbmcgdG8gc2F2ZScpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChmb3JtRGl2KTtcbiAgICAgICAgYWRkTmV3LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoYFNBVkUgRkFJTEVEIVxcbiogJHtlcnJvcnNbMF19YCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxldCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybURpdi5jbGFzc0xpc3QuYWRkKCdmb3JtRGl2Jyk7XG4gICAgZm9ybURpdi5pZCA9ICdwcm9qZWN0Rm9ybSc7XG4gICAgbGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgbGFiZWwuaW5uZXJIVE1MID0gJ3RpdGxlOic7XG4gICAgbGFiZWwuaWQgPSAncHJvamVjdFRpdGxlJztcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LmlkID0gJ3Byb2plY3RUaXRsZSc7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGxldCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkUHJvamVjdC50eXBlID0gJ2J1dHRvbic7IC8vIHByZXZlbnRzIGFwcCByZWxvYWQgb24gY2xpY2tcbiAgICBhZGRQcm9qZWN0LmlkID0gJ2FkZFByb2plY3QnO1xuICAgIGFkZFByb2plY3QuaW5uZXJIVE1MID0gJ2RvbmUnO1xuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdCk7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgICBmb3JtRGl2LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm1EaXYpO1xuICB9O1xuXG4gIHJldHVybiB7IGluZGV4IH07XG59KSgpO1xuXG5leHBvcnQgeyBwcm9qZWN0c1JlbmRlciB9XG4iLCIvLyBmdW5jdGlvbnMgY29tbW9uIHRvIHRvZG9zUmVuZGVyLmpzIGFuZCBwcm9qZWN0c1JlbmRlci5qc1xuY29uc3QgcmVuZGVyVXRpbHMgPSAoKCkgPT4ge1xuICBjb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZml0U3RyaW5nID0gKHN0cmluZywgd2lkdGgpID0+IHtcbiAgICBpZiAoc3RyaW5nLmxlbmd0aCAqIDEyID4gd2lkdGgpIHtcbiAgICAgIGxldCByZW1vdmUgPSAoTWF0aC5mbG9vcih3aWR0aCAvIDEyKSAtIDMpIC0gc3RyaW5nLmxlbmd0aDtcbiAgICAgIHN0cmluZyA9IHN0cmluZy5zbGljZSgwLCByZW1vdmUpLmNvbmNhdCgnLi4uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcblxuICByZXR1cm4geyBjbGVhckNvbnRlbnQsIGZpdFN0cmluZyB9O1xufSkoKTtcblxuZXhwb3J0IHsgcmVuZGVyVXRpbHMgfVxuIiwiaW1wb3J0IHsgcmVuZGVyVXRpbHMgfSBmcm9tICcuL3JlbmRlclV0aWxzJ1xuaW1wb3J0IHsgbW9kZWwgfSBmcm9tICcuL21vZGVsJ1xuXG5jb25zdCB0b2Rvc1JlbmRlciA9ICgoKSA9PiB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBpbmRleCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdCA9IHByb2plY3Quc2xpY2UoOCk7XG4gICAgbGV0IHRvZG9zID0gbW9kZWwuaW5kZXhUb2Rvcyhwcm9qZWN0KTtcbiAgICByZW5kZXJVdGlscy5jbGVhckNvbnRlbnQoKTtcblxuICAgIGxldCB0aXRsZVcgPSBjb250ZW50Lm9mZnNldFdpZHRoIC0gNTY7IC8vIHJlY2FsY3VsYXRlXG4gICAgbGV0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm1EaXYnKTtcbiAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ21lZGl1bUZvcm0nKTtcbiAgICBmb3JtRGl2LmlkID0gJ2Zvcm1EaXYnO1xuICAgIGZvcm1EaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykgeyAvLyBhZGQgdG9kbyBpdGVtc1xuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW1EaXYnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGAke3RvZG9zW2ldLnByaW9yaXR5fURpdmApO1xuICAgICAgZGl2LmlkID0gYCR7dG9kb3NbaV0uaWR9YDtcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwoZGl2LmNoaWxkcmVuKTtcbiAgICAgICAgaWYgKGNoaWxkcmVuLmpvaW4oKS5pbmNsdWRlcygnW29iamVjdCBIVE1MRm9ybUVsZW1lbnRdJykgPT0gZmFsc2UpIHtcbiAgICAgICAgICBmb3JtKHRoaXMuaWQsIHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcbiAgICAgIGNoZWNrYm94LmlkID0gYGRlbGV0ZV8ke3RvZG9zW2ldLmlkfWA7XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBtb2RlbC5kZWxldGVUb2RvKHRoaXMuaWQuc2xpY2UoNykpO1xuICAgICAgICByZW1vdmVUb2RvKHRoaXMuaWQpO1xuICAgICAgfSk7XG4gICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gcmVuZGVyVXRpbHMuZml0U3RyaW5nKHRvZG9zW2ldLnRpdGxlLCB0aXRsZVcpO1xuICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgIHRpdGxlLmlkID0gYHRpdGxlXyR7dG9kb3NbaV0uaWR9YDtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cblxuICAgIGxldCBhZGROZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGROZXcuaWQgPSAnYWRkTmV3JztcbiAgICBhZGROZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgZm9ybSh0aGlzLmlkLCBwcm9qZWN0KTtcbiAgICAgIGFkZE5ldy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICAgIGxldCBwbHVzU2lnbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbHVzU2lnbi5pZCA9ICdwbHVzU2lnbic7XG4gICAgcGx1c1NpZ24uaW5uZXJIVE1MID0gJysnO1xuICAgIGFkZE5ldy5hcHBlbmRDaGlsZChwbHVzU2lnbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGROZXcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybURpdik7XG5cbiAgICAvLyBzZXQgbmF2YmFyIG5hdmJhciBtZXNzYWdlXG4gICAgbGV0IG5hdk1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZNc2cnKTtcbiAgICBuYXZNc2cuaW5uZXJIVE1MID0gcmVuZGVyVXRpbHMuZml0U3RyaW5nKFxuICAgICAgcHJvamVjdCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21zZ0RpdicpLm9mZnNldFdpZHRoIC0gMTJcbiAgICApO1xuXG4gICAgLy8gb25SZXNpemU6IHJlZm9ybWF0IHRleHQgdGhhdCB3b3VsZCBvdGhlcndpc2Ugb3ZlcmZsb3dcbiAgICBkb2N1bWVudC5ib2R5Lm9ucmVzaXplID0gZnVuY3Rpb24oKXtcbiAgICAgIG5hdk1zZy5pbm5lckhUTUwgPSByZW5kZXJVdGlscy5maXRTdHJpbmcoXG4gICAgICAgIHByb2plY3QsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtc2dEaXYnKS5vZmZzZXRXaWR0aCAtIDEyXG4gICAgICApO1xuICAgICAgbGV0IHRpdGxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpdGxlJyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aXRsZXNbaV0uaW5uZXJIVE1MID0gcmVuZGVyVXRpbHMuZml0U3RyaW5nKFxuICAgICAgICAgIHRvZG9zW2ldLnRpdGxlLCBjb250ZW50Lm9mZnNldFdpZHRoIC0gNTZcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIHByaXZhdGU6XG5cbiAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0aGlzSWQpID0+IHtcbiAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzSWQpO1xuICAgIGNoZWNrQm94LmlkID0gJ2RlbGV0ZWQnO1xuICAgIGxldCBpZCA9IHRoaXNJZC5zbGljZSg3KTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHRvZG9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICB0b2RvRGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodG9kb0Rpdik7XG4gICAgfSwgMzAwKTtcbiAgfTtcblxuICBjb25zdCBmb3JtID0gKHRoaXNJZCwgdGhpc1Byb2plY3QpID0+IHtcbiAgICBjb25zdCBhZGRJbnB1dCA9IChuYW1lKSA9PiB7XG4gICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgbGFiZWwuaW5uZXJIVE1MID0gYCR7bmFtZX06YDtcbiAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBpZiAobmFtZSA9PSAnZGVzY3JpcHRpb24nKSB7XG4gICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChgJHtuYW1lfWApO1xuICAgICAgfVxuICAgICAgaW5wdXQuaWQgPSBgJHtuYW1lfSR7dGhpc0lkfWA7XG4gICAgICBpZiAodGhpc0lkICE9ICdhZGROZXcnKSB7IGlucHV0LnZhbHVlID0gbW9kZWwuZ2V0VG9kbyh0aGlzSWQpW2Ake25hbWV9YF07IH1cblxuICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRTZWxlY3Rpb24gPSAodHlwZSkgPT4ge1xuICAgICAgbGV0IG9wdGlvbnMgPSBbJ2hpZ2gnLCAnbWVkaXVtJywgJ2xvdyddO1xuICAgICAgaWYgKHR5cGUgPT0gJ3Byb2plY3QnKSB7IG9wdGlvbnMgPSBtb2RlbC5pbmRleFByb2plY3RzKCk7IH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvbnNbaV07XG4gICAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSBvcHRpb25zW2ldO1xuICAgICAgICBpZiAodGhpc0lkID09ICdhZGROZXcnKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnNbaV0gPT0gJ21lZGl1bScgfHwgb3B0aW9uc1tpXSA9PSB0aGlzUHJvamVjdCkge1xuICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKChvcHRpb25zW2ldID09IG1vZGVsLmdldFRvZG8odGhpc0lkKS5wcmlvcml0eSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKG9wdGlvbnNbaV0gPT0gbW9kZWwuZ2V0VG9kbyh0aGlzSWQpLnByb2plY3QpKSB7XG4gICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PSAncHJvamVjdCcpIHsgcHJvamVjdHMuYXBwZW5kQ2hpbGQob3B0aW9uKTsgfVxuICAgICAgICBlbHNlIHsgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTsgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBkaXZDb2xvciA9ICh0aGlzRGl2KSA9PiB7XG4gICAgICB0aGlzRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2xvd0Zvcm0nKTtcbiAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtRm9ybScpO1xuICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWdoRm9ybScpO1xuICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QuYWRkKGAke3ByaW9yaXR5LnZhbHVlfUZvcm1gKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3VibWl0ID0gKCkgPT4ge1xuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIHRpdGxlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGl0bGUke3RoaXNJZH1gKS52YWx1ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvbiR7dGhpc0lkfWApLnZhbHVlLFxuICAgICAgICBwcmlvcml0eTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByaW9yaXR5JHt0aGlzSWR9YCkudmFsdWUsXG4gICAgICAgIHByb2plY3Q6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0cyR7dGhpc0lkfWApLnZhbHVlXG4gICAgICB9XG4gICAgICBsZXQgdG9kbyA9IG1vZGVsLmdldFRvZG8odGhpc0lkKTtcblxuICAgICAgaWYgKCh0aGlzSWQgPT0gJ2FkZE5ldycgJiYgdGhpc1Byb2plY3QgPT0gJ0FsbCB0by1kbyBpdGVtcycpIHx8XG4gICAgICAgICAgdG9kby5wcm9qZWN0ID09IGRhdGEucHJvamVjdCB8fFxuICAgICAgICAgIGNvbmZpcm0oYFJlYWxseSBzYXZlIHRvIG90aGVyIHByb2plY3Q6ICR7ZGF0YS5wcm9qZWN0fT9gKSA9PSB0cnVlKSB7XG4gICAgICAgIGxldCBlcnJvcnMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXNJZCA9PSAnYWRkTmV3JykgeyBlcnJvcnMgPSBtb2RlbC5jcmVhdGVUb2RvKGRhdGEpOyB9XG4gICAgICAgIGVsc2UgeyBlcnJvcnMgPSBtb2RlbC5lZGl0VG9kbyhkYXRhLCB0aGlzSWQpOyB9XG5cbiAgICAgICAgaWYgKGVycm9yc1swXSA9PSAnbm90aGluZyB0byBzYXZlJykge1xuICAgICAgICAgIGZvcm1EaXYucmVtb3ZlQ2hpbGQodG9kb0Zvcm0pO1xuICAgICAgICAgIGZvcm1EaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICBhZGROZXcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0gZWxzZSBpZiAoKGVycm9yc1swXSA9PSAnc2FtZSBwcmlvcml0eScgfHxcbiAgICAgICAgICAgIGVycm9yc1swXSA9PSAnc2FtZSBwcmlvcml0eSBuZXcgdGl0bGUnKSAmJlxuICAgICAgICAgICAgKHRoaXNQcm9qZWN0ID09IGRhdGEucHJvamVjdCB8fCB0aGlzUHJvamVjdCA9PSAnQWxsIHRvLWRvIGl0ZW1zJykpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IHRoaXNEaXYucmVtb3ZlQ2hpbGQodG9kb0Zvcm0pOyB9LCAxMCk7XG4gICAgICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtRGl2Jyk7XG4gICAgICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKGAke3RvZG8ucHJpb3JpdHl9Rm9ybWApO1xuICAgICAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LmFkZCgnaXRlbURpdicpO1xuICAgICAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LmFkZChgJHt0b2RvLnByaW9yaXR5fURpdmApO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZWxldGVfJHt0aGlzSWR9YCkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRpdGxlXyR7dGhpc0lkfWApLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIGlmIChlcnJvcnNbMF0gPT0gJ3NhbWUgcHJpb3JpdHkgbmV3IHRpdGxlJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRpdGxlXyR7dGhpc0lkfWApLmlubmVySFRNTCA9XG4gICAgICAgICAgICByZW5kZXJVdGlscy5maXRTdHJpbmcodG9kby50aXRsZSwgY29udGVudC5vZmZzZXRXaWR0aCAtIDU2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoKGVycm9ycy5sZW5ndGggPT0gMCkgfHwgKChlcnJvcnNbMF0gPT0gJ3NhbWUgcHJpb3JpdHknIHx8XG4gICAgICAgICAgICBlcnJvcnNbMF0gPT0gJ3NhbWUgcHJpb3JpdHkgbmV3IHRpdGxlJykgJiZcbiAgICAgICAgICAgICh0aGlzUHJvamVjdCAhPSBkYXRhLnByb2plY3QgJiYgdGhpc1Byb2plY3QgIT0gJ0FsbCB0by1kbyBpdGVtcycpKSkge1xuICAgICAgICAgIGluZGV4KGBwcm9qZWN0XyR7dGhpc1Byb2plY3R9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSAnU0FWRSBGQUlMRUQhJztcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVycm9ycy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gYFxcbiogJHtlcnJvcnNbaV19YDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWxlcnQobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRvZG9Gb3JtLmlkID0gYGZvcm0ke3RoaXNJZH1gO1xuICAgIGFkZElucHV0KCd0aXRsZScpO1xuICAgIGFkZElucHV0KCdkZXNjcmlwdGlvbicpO1xuXG4gICAgbGV0IGxhYmVsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxhYmVsc0Rpdi5jbGFzc0xpc3QuYWRkKCdzZWxlY3Rpb25EaXYnKTtcbiAgICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eUxhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lckhUTUwgPSAncHJpb3JpdHk6JztcbiAgICBsYWJlbHNEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgbGV0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgcHJvamVjdExhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMYWJlbCcpO1xuICAgIHByb2plY3RMYWJlbC5pbm5lckhUTUwgPSAncHJvamVjdDonO1xuICAgIGxhYmVsc0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgIGxldCBkb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZG9uZS50eXBlID0gJ2J1dHRvbic7IC8vIHByZXZlbnRzIGFwcCByZWxvYWQgb24gY2xpY2tcbiAgICBkb25lLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICBkb25lLmlubmVySFRNTCA9ICdkb25lJztcbiAgICBsYWJlbHNEaXYuYXBwZW5kQ2hpbGQoZG9uZSk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQobGFiZWxzRGl2KTtcblxuICAgIGxldCBzZWxlY3Rpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWxlY3Rpb25EaXYuY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uRGl2Jyk7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICBwcmlvcml0eS5pZCA9IGBwcmlvcml0eSR7dGhpc0lkfWA7XG4gICAgYWRkU2VsZWN0aW9uKCdwcmlvcml0eScpO1xuICAgIHNlbGVjdGlvbkRpdi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgbGV0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcbiAgICBwcm9qZWN0cy5pZCA9IGBwcm9qZWN0cyR7dGhpc0lkfWA7XG4gICAgYWRkU2VsZWN0aW9uKCdwcm9qZWN0Jyk7XG4gICAgc2VsZWN0aW9uRGl2LmFwcGVuZENoaWxkKHByb2plY3RzKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChzZWxlY3Rpb25EaXYpO1xuXG4gICAgbGV0IHRoaXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybURpdicpO1xuICAgIGlmICh0aGlzSWQgIT0gJ2FkZE5ldycpIHsgLy8gaW5zZXJ0ICdlZGl0JyBmb3JtIGF0IHRvZG8gaXRlbSBwb3NpdGlvblxuICAgICAgdGhpc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXNJZCk7XG4gICAgICB0aGlzRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZWRpdCh0aGlzLmlkLCBwcm9qZWN0KTtcbiAgICAgIH0pO1xuICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdpdGVtRGl2Jyk7XG4gICAgICB0aGlzRGl2LmNsYXNzTGlzdC5yZW1vdmUoYCR7bW9kZWwuZ2V0VG9kbyh0aGlzSWQpLnByaW9yaXR5fURpdmApO1xuICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QuYWRkKCdmb3JtRGl2Jyk7XG4gICAgICBkaXZDb2xvcih0aGlzRGl2KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZWxldGVfJHt0aGlzSWR9YCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0aXRsZV8ke3RoaXNJZH1gKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGRvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdCk7XG4gICAgcHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHsgZGl2Q29sb3IodGhpc0Rpdik7IH0pO1xuICAgIHRoaXNEaXYuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICAgIHRoaXNEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAvLyBzY3JvbGwgcGFnZSB0byBzaG93IHdob2xlIGZvcm0gaWYgZm9ybSBvcGVucyBwYXJ0bHkgYmVsb3cgd2luZG93XG4gICAgbGV0IGRpdkggPSAxNDM7XG4gICAgbGV0IHNwYWNlID0gd2luZG93LmlubmVySGVpZ2h0IC0gdGhpc0Rpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgaWYgKHNwYWNlIDwgZGl2SCkgeyB3aW5kb3cuc2Nyb2xsVG8oMCwgd2luZG93LnBhZ2VZT2Zmc2V0ICsgKGRpdkggLSBzcGFjZSkpOyB9XG4gIH07XG5cbiAgcmV0dXJuIHsgaW5kZXggfTtcblxufSkoKTtcblxuZXhwb3J0IHsgdG9kb3NSZW5kZXIgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==