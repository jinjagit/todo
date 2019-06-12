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
    { title: 'wash car', description: '',
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
  const initialize = () => {
    localStore = storageAvailable('localStorage');

    // DEBUG reset
/*
    useExampleData();
    localStorage.clear();
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('projects', JSON.stringify(projects));
*/

    if (storageAvailable('localStorage')) {
      if(!localStorage.getItem('todos') || !localStorage.getItem('projects')) {
        useExampleData();
        localStorage.setItem('todos', JSON.stringify(todos));
        localStorage.setItem('projects', JSON.stringify(projects));
      } else {
        projects = JSON.parse(localStorage.getItem('projects'));
        todos = JSON.parse(localStorage.getItem('todos'));
        for (let i = 0; i < todos.length; i++) { todos[i].id = uniqueId(); }
        if (todos === undefined || projects === undefined) {
          useExampleData();
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

      if ((thisId == 'addNew' && thisProject == 'All to-do items') ||
          _model__WEBPACK_IMPORTED_MODULE_1__["model"].getTodo(thisId).project == data.project ||
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
          thisDiv.classList.remove(`${_model__WEBPACK_IMPORTED_MODULE_1__["model"].getTodo(thisId).priority}Form`);
          thisDiv.classList.add('itemDiv');
          thisDiv.classList.add(`${_model__WEBPACK_IMPORTED_MODULE_1__["model"].getTodo(thisId).priority}Div`);
          document.getElementById(`delete_${thisId}`).style.display = 'block';
          document.getElementById(`title_${thisId}`).style.display = 'block';
          if (errors[0] == 'same priority new title') {
            document.getElementById(`title_${thisId}`).innerHTML =
            _renderUtils__WEBPACK_IMPORTED_MODULE_0__["renderUtils"].fitString(_model__WEBPACK_IMPORTED_MODULE_1__["model"].getTodo(thisId).title, content.offsetWidth - 56);
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
  };

  return { index };

})();




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcFJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdHNSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlclV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy90b2Rvc1JlbmRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQWlEO0FBQ047O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUFjO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZ0NBQWdDLCtCQUErQixFQUFFO0FBQ2pFO0FBQ0Esc0NBQXNDLDRDQUFLLDBCQUEwQjtBQUNyRTtBQUNBLG1DQUFtQyw0Q0FBSywwQkFBMEI7QUFDbEUsNENBQTRDLE9BQU87QUFDbkQsMkNBQTJDLE9BQU87QUFDbEQ7QUFDQSw2Q0FBNkMsT0FBTztBQUNwRCxZQUFZLHdEQUFXLFdBQVcsNENBQUs7QUFDdkM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDLFNBQVM7QUFDVDtBQUNBLHlCQUF5QixtQkFBbUI7QUFDNUMsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLGtDQUFrQyw0Q0FBSywwQkFBMEI7QUFDakU7QUFDQTtBQUNBLHdDQUF3QyxPQUFPO0FBQy9DLHVDQUF1QyxPQUFPO0FBQzlDOztBQUVBO0FBQ0Esb0RBQW9ELG1CQUFtQixFQUFFO0FBQ3pFO0FBQ0E7QUFDQTs7QUFFQSxVQUFVOztBQUVWLENBQUM7O0FBRXFCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHByb2plY3RzUmVuZGVyIH0gZnJvbSAnLi9wcm9qZWN0c1JlbmRlcidcbmltcG9ydCB7IHRvZG9zUmVuZGVyIH0gZnJvbSAnLi90b2Rvc1JlbmRlcidcblxuY29uc3QgYXBwUmVuZGVyID0gKCgpID0+IHtcblxuICBjb25zdCBuYXZCdG5DbGljayA9ICgpID0+IHtcbiAgICBpZiAobmF2QnRuLmNsYXNzTGlzdC52YWx1ZSA9PSAnZm9sZGVyc0ljb24nKSB7XG4gICAgICBuYXZCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZm9sZGVyc0ljb24nKTtcbiAgICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCdleWVJY29uJyk7XG4gICAgICBuYXZCdG4udGl0bGUgPSAndmlldyBhbGwgdG9kbyBpdGVtcyBmcm9tIGFsbCBwcm9qZWN0cyc7XG4gICAgICBwcm9qZWN0c1JlbmRlci5pbmRleCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXZCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZXllSWNvbicpO1xuICAgICAgbmF2QnRuLmNsYXNzTGlzdC5hZGQoJ2ZvbGRlcnNJY29uJyk7XG4gICAgICBuYXZCdG4udGl0bGUgPSAndmlldyBwcm9qZWN0cyc7XG4gICAgICB0b2Rvc1JlbmRlci5pbmRleCgncHJvamVjdF9BbGwgdG8tZG8gaXRlbXMnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICBsZXQgbmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhcicpO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIC8vIHNldCBuYXZiYXIgc2Nyb2xsIGJlaGF2aW91ciAoaGlkZSAvIHJldmVhbClcbiAgICB2YXIgcHJldlNjcm9sbHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgaWYgKHByZXZTY3JvbGxwb3MgPiBjdXJyZW50U2Nyb2xsUG9zKSB7XG4gICAgICAgIG5hdmJhci5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgICAgY29udGVudC5zdHlsZS5tYXJnaW5Ub3AgPSAnNTBweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYXZiYXIuc3R5bGUudG9wID0gJy01MHB4JztcbiAgICAgICAgY29udGVudC5zdHlsZS5tYXJnaW5Ub3AgPSAnMHB4JztcbiAgICAgIH1cbiAgICAgIHByZXZTY3JvbGxwb3MgPSBjdXJyZW50U2Nyb2xsUG9zO1xuICAgIH1cblxuICAgIC8vIGRpc2FibGU7IHJldHVybiBrZXkgc3VibWl0cyBmb3JtXG4gICAgLy8gZnJvbTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTYyOTgwNS9kaXNhYmxpbmctZW50ZXIta2V5LWZvci1mb3JtXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLmtleUlkZW50aWZpZXI9PSdVKzAwMEEnfHwgZS5rZXlJZGVudGlmaWVyPT0nRW50ZXInIHx8IGUua2V5Q29kZT09MTMpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lPT0nSU5QVVQnICYmIGUudGFyZ2V0LnR5cGU9PSd0ZXh0Jykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7fVxuICAgICAgICB9XG4gICAgICB9LCB0cnVlKTtcblxuICAgIC8vIHNldCBpbml0aWFsIG5hdkJ0biBpY29uICYgYWRkIGNsaWNrIGV2ZW50XG4gICAgbGV0IG5hdkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZCdG4nKTtcbiAgICBuYXZCdG4uY2xhc3NMaXN0LmFkZCgnZm9sZGVyc0ljb24nKTtcbiAgICBuYXZCdG4udGl0bGUgPSAndmlldyBwcm9qZWN0cyc7XG4gICAgbmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuYXZCdG5DbGljayk7XG5cbiAgICB0b2Rvc1JlbmRlci5pbmRleCgncHJvamVjdF9BbGwgdG8tZG8gaXRlbXMnKTtcbiAgfTtcblxuICAvLyBERUJVRzogY3JlYXRlIGNvbnRlbnQgdGFsbGVyIHRoYW4gcGFnZSB0byB0ZXN0IHNjcm9sbCBlZmZlY3RzXG4gIGNvbnN0IHBsYWNlaG9sZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBsZXQgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3BhY2VyLnN0eWxlLmhlaWdodCA9ICczMHB4JztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNwYWNlcik7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNzA7IGkrKykge1xuICAgICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHBhcmEuaW5uZXJIVE1MID0gXCJwbGFjZWhvbGRlciBjb250ZW50XCI7XG4gICAgICBwYXJhLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIH1cblxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzaXplJykpO1xuICB9O1xuXG4gIHJldHVybiB7IGluaXRpYWxpemUsIHBsYWNlaG9sZGVyQ29udGVudCB9O1xuXG59KSgpO1xuXG5leHBvcnQgeyBhcHBSZW5kZXIgfVxuIiwiLy8gRGVmYXVsdCBkYXRhIHRvIHVzZSB3aGVuIGxvY2FsU3RvcmFnZSB1bmF2YWlsYWJsZSAvIGNvbnRhaW5zIG5vIGFwcCBkYXRhXG5jb25zdCBleGFtcGxlRGF0YSA9ICgoKSA9PiB7XG4gIGxldCB0b2RvcyA9IFtcbiAgICB7IHRpdGxlOiAnZG8gbGF1bmRyeScsIGRlc2NyaXB0aW9uOiAncmVtZW1iZXIgamVhbnMnLFxuICAgICAgcHJpb3JpdHk6ICdoaWdoJywgcHJvamVjdDogJ3JlZ3VsYXIgc3R1ZmYnIH0sXG4gICAgeyB0aXRsZTogJ3dhc2ggY2FyJywgZGVzY3JpcHRpb246ICcnLFxuICAgICAgcHJpb3JpdHk6ICdsb3cnLCBwcm9qZWN0OiAncmVndWxhciBzdHVmZicgfSxcbiAgICB7IHRpdGxlOiAnYnV5IGJlZXInLCBkZXNjcmlwdGlvbjogJ0tyb25lbmJlcmcnLFxuICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLCBwcm9qZWN0OiAncmVndWxhciBzdHVmZicgfSxcbiAgICB7IHRpdGxlOiAncmVzZWFyY2ggYXJyb3cgZnVuY3Rpb25zJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnbWFrZSBub3RlcyBhbmQgc2F2ZSBsaW5rcycsXG4gICAgICBwcmlvcml0eTogJ2hpZ2gnLCBwcm9qZWN0OiAnd3JpdGUgYXJ0aWNsZScgfSxcbiAgICB7IHRpdGxlOiAnd3JpdGUgYm9keSBvZiBhcnRpY2xlJywgZGVzY3JpcHRpb246ICdhY3R1YWxseSB3cml0ZSB0aGUgdGhpbmcnLFxuICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLCBwcm9qZWN0OiAnd3JpdGUgYXJ0aWNsZScgfSxcbiAgICB7IHRpdGxlOiAncHJvb2ZyZWFkIGFydGljbGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdjaGVjayBmb3IgZXJyb3JzIGFuZCBiYWQgZ3JhbW1hcicsXG4gICAgICBwcmlvcml0eTogJ2xvdycsIHByb2plY3Q6ICd3cml0ZSBhcnRpY2xlJyB9LFxuICAgIHsgdGl0bGU6ICdyZXNlYXJjaCBJSUZFcycsXG4gICAgICBkZXNjcmlwdGlvbjogJ3doYXQgYXJlIHRoZXksIGFuZCB3aGVuIGFyZSB0aGV5IHVzZWQ/JyxcbiAgICAgIHByaW9yaXR5OiAnbWVkaXVtJywgcHJvamVjdDogJ3dyaXRlIGFydGljbGUnIH0sXG4gICAgeyB0aXRsZTogJ3RvZG8gd2l0aCBleGFtcGxlIHJlYWxseSBsb25nIHRpdGxlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnZm9yIHRlc3RpbmcgbG9uZyBzdHJpbmdzJywgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgcHJvamVjdDogJ3Byb2plY3Qgd2l0aCByZWFsbHkgbG9uZyB0aXRsZScgfVxuICBdO1xuXG4gIGxldCBwcm9qZWN0cyA9IFtcbiAgICAncmVndWxhciBzdHVmZicsXG4gICAgJ3dyaXRlIGFydGljbGUnLFxuICAgICdwcm9qZWN0IHdpdGggcmVhbGx5IGxvbmcgdGl0bGUnXG4gIF07XG5cbiAgcmV0dXJuIHt0b2RvcywgcHJvamVjdHN9XG59KSgpO1xuXG5leHBvcnQgeyBleGFtcGxlRGF0YSB9XG4iLCJpbXBvcnQgeyBtb2RlbCB9IGZyb20gJy4vbW9kZWwnXG5pbXBvcnQgeyBhcHBSZW5kZXIgfSBmcm9tICcuL2FwcFJlbmRlcidcblxubW9kZWwuaW5pdGlhbGl6ZSgpO1xuYXBwUmVuZGVyLmluaXRpYWxpemUoKTtcblxuXG4vLyBhZGQgcGxhY2Vob2xkZXIgY29udGVudCwgZm9yIHRlc3Rpbmcgb2YgbmF2YmFyIGhpZGUvcmV2ZWFsIG9uIHNjcm9sbDpcbi8vYXBwUmVuZGVyLnBsYWNlaG9sZGVyQ29udGVudCgpO1xuIiwiaW1wb3J0IHsgZXhhbXBsZURhdGEgfSBmcm9tICcuL2V4YW1wbGVEYXRhJ1xuXG5jb25zdCBtb2RlbCA9ICgoKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yZSA9IHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpO1xuXG4gICAgLy8gREVCVUcgcmVzZXRcbi8qXG4gICAgdXNlRXhhbXBsZURhdGEoKTtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4qL1xuXG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgICBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykgfHwgIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB7XG4gICAgICAgIHVzZUV4YW1wbGVEYXRhKCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAgICAgICB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7IHRvZG9zW2ldLmlkID0gdW5pcXVlSWQoKTsgfVxuICAgICAgICBpZiAodG9kb3MgPT09IHVuZGVmaW5lZCB8fCBwcm9qZWN0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdXNlRXhhbXBsZURhdGEoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB1c2VFeGFtcGxlRGF0YSgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBDLlIuVS5EOlxuXG4gIGNvbnN0IGluZGV4VG9kb3MgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHNvcnRCeVByaW9yaXR5ID0gKHVuc29ydGVkKSA9PiB7XG4gICAgICBsZXQgc29ydGVkID0gW10sIGhpZ2ggPSBbXSwgbWVkaXVtID0gW10sIGxvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bnNvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodW5zb3J0ZWRbaV0ucHJpb3JpdHkgPT0gJ2hpZ2gnKSB7IGhpZ2gucHVzaCh1bnNvcnRlZFtpXSkgfVxuICAgICAgICBlbHNlIGlmICh1bnNvcnRlZFtpXS5wcmlvcml0eSA9PSAnbWVkaXVtJykgeyBtZWRpdW0ucHVzaCh1bnNvcnRlZFtpXSkgfVxuICAgICAgICBlbHNlIHsgbG93LnB1c2godW5zb3J0ZWRbaV0pIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzb3J0ZWQgPSBoaWdoLmNvbmNhdChtZWRpdW0uY29uY2F0KGxvdykpO1xuICAgIH07XG5cbiAgICBpZiAocHJvamVjdCA9PSAnQWxsIHRvLWRvIGl0ZW1zJykge1xuICAgICAgcmV0dXJuIHNvcnRCeVByaW9yaXR5KHRvZG9zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHByb2plY3RUb2RvcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdCA9PSB0b2Rvc1tpXS5wcm9qZWN0KSB7IHByb2plY3RUb2Rvcy5wdXNoKHRvZG9zW2ldKTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNvcnRCeVByaW9yaXR5KHByb2plY3RUb2Rvcyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSAoZm9ybURhdGEpID0+IHtcbiAgICBsZXQgZXJyb3JzID0gdmFsaWRhdGVUb2RvKGZvcm1EYXRhKTtcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0b2Rvcy5wdXNoKFxuICAgICAgICB0b2RvRmFjdG9yeSh1bmlxdWVJZCgpLCBmb3JtRGF0YS50aXRsZSwgZm9ybURhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgIGZvcm1EYXRhLnByaW9yaXR5LCBmb3JtRGF0YS5wcm9qZWN0XG4gICAgICApKTtcbiAgICAgIHNhdmVUb2Rvc0xvY2FsKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9ycztcbiAgfTtcblxuICBjb25zdCBlZGl0VG9kbyA9IChmb3JtRGF0YSwgdGhpc0lkKSA9PiB7XG4gICAgbGV0IGVycm9ycyA9IHZhbGlkYXRlVG9kbyhmb3JtRGF0YSwgdGhpc0lkKTtcblxuICAgIGlmIChlcnJvcnMubGVuZ3RoID09IDAgfHwgZXJyb3JzWzBdID09ICdub3RoaW5nIHRvIHNhdmUnKSB7XG4gICAgICBsZXQgdG9kbyA9IGdldFRvZG8odGhpc0lkKTtcbiAgICAgIGlmICh0b2RvLnByaW9yaXR5ID09IGZvcm1EYXRhLnByaW9yaXR5IHx8IGVycm9yc1swXSA9PSAnbm90aGluZyB0byBzYXZlJykge1xuICAgICAgICBlcnJvcnNbMF0gPSAnc2FtZSBwcmlvcml0eSc7XG4gICAgICAgIGlmICh0b2RvLnRpdGxlICE9IGZvcm1EYXRhLnRpdGxlKSB7XG4gICAgICAgICAgZXJyb3JzWzBdID0gJ3NhbWUgcHJpb3JpdHkgbmV3IHRpdGxlJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdG9kby50aXRsZSA9IGZvcm1EYXRhLnRpdGxlO1xuICAgICAgdG9kby5kZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmRlc2NyaXB0aW9uO1xuICAgICAgdG9kby5wcmlvcml0eSA9IGZvcm1EYXRhLnByaW9yaXR5O1xuICAgICAgdG9kby5wcm9qZWN0ID0gZm9ybURhdGEucHJvamVjdDtcbiAgICAgIHNhdmVUb2Rvc0xvY2FsKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9ycztcbiAgfTtcblxuICBjb25zdCBnZXRUb2RvID0gKGlkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRvZG9zW2ldLmlkID09IGlkKSB7IHJldHVybiB0b2Rvc1tpXTt9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAoaWQpID0+IHtcbiAgICB0b2Rvcy5zcGxpY2UodG9kb3MuaW5kZXhPZih0b2Rvcy5maW5kKGUgPT4gZS5pZCA9PSBpZCkpLCAxKTtcbiAgICBzYXZlVG9kb3NMb2NhbCgpO1xuICB9O1xuXG4gIGNvbnN0IGluZGV4UHJvamVjdHMgPSAoKSA9PiB7IHJldHVybiBwcm9qZWN0czsgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcbiAgICBsZXQgZXJyb3JzID0gdmFsaWRhdGVQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIGlmIChlcnJvcnMubGVuZ3RoID09IDApIHtcbiAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICBzYXZlUHJvamVjdHNMb2NhbCgpO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRvZG9zW2ldLnByb2plY3QgPT0gcHJvamVjdCkge1xuICAgICAgICBkZWxldGVUb2RvKHRvZG9zW2ldLmlkKTtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgIH1cbiAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihwcm9qZWN0cy5maW5kKGUgPT4gZSA9PSBwcm9qZWN0KSksIDEpO1xuICAgIHNhdmVQcm9qZWN0c0xvY2FsKCk7XG4gICAgc2F2ZVRvZG9zTG9jYWwoKTtcbiAgfTtcblxuICAvLyBwcml2YXRlXG5cbiAgbGV0IHRvZG9zID0gW107XG4gIGxldCBwcm9qZWN0cyA9IFtdO1xuICBsZXQgbG9jYWxTdG9yZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHVuaXF1ZUlkID0gKCgpID0+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICArK2NvdW50O1xuICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgdG9kb0ZhY3RvcnkgPSAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QpID0+IHtcblxuICAgIGNvbnN0IG91dHB1dCA9ICgpID0+IGNvbnNvbGUubG9nKGBpZDogJHtpZH0sIHRpdGxlOiAke3RpdGxlfSwgZGVzYzogJHtkZXNjcmlwdGlvbn0sIHByaW9yaXR5OiAke3ByaW9yaXR5fSwgcHJvamVjdDogJHtwcm9qZWN0fWApO1xuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSBuZXdUaXRsZSA9PiB0aXRsZSA9IG5ld1RpdGxlO1xuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb24gPT4gZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IG5ld1ByaW9yaXR5ID0+IHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgY29uc3Qgc2V0UHJvamVjdCA9IG5ld1Byb2plY3QgPT4gcHJvamVjdCA9IG5ld1Byb2plY3Q7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QsIHNldFRpdGxlLCBzZXREZXNjcmlwdGlvbixcbiAgICAgIHNldFByaW9yaXR5LCBzZXRQcm9qZWN0LCBvdXRwdXRcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRlVG9kbyA9IChkYXRhLCBlZGl0SWQgPSBmYWxzZSkgPT4ge1xuICAgIGxldCBlcnJvcnMgPSBbXTtcbiAgICBsZXQgZWRpdFRvZG8gPSBudWxsO1xuXG4gICAgaWYgKGVkaXRJZCAhPSBmYWxzZSkgeyBlZGl0VG9kbyA9IGdldFRvZG8oZWRpdElkKTsgfVxuXG4gICAgaWYgKChlZGl0SWQgPT0gZmFsc2UgJiYgKGRhdGEudGl0bGUgPT0gJycgJiYgZGF0YS5kZXNjcmlwdGlvbiA9PSAnJykpIHx8XG4gICAgICAgIChlZGl0SWQgIT0gZmFsc2UgJiYgZWRpdFRvZG8udGl0bGUgPT0gZGF0YS50aXRsZSAmJlxuICAgICAgICAgIGVkaXRUb2RvLmRlc2NyaXB0aW9uID09IGRhdGEuZGVzY3JpcHRpb24gJiZcbiAgICAgICAgICBlZGl0VG9kby5wcmlvcml0eSA9PSBkYXRhLnByaW9yaXR5ICYmXG4gICAgICAgICAgZWRpdFRvZG8ucHJvamVjdCA9PSBkYXRhLnByb2plY3QpKSB7XG4gICAgICBlcnJvcnMgPSBbJ25vdGhpbmcgdG8gc2F2ZSddO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGF0YS50aXRsZSA9PSAnJykgeyBlcnJvcnMucHVzaCgndGl0bGUgY2Fubm90IGJlIGJsYW5rJyk7IH1cbiAgICAgIGVsc2UgaWYgKGRhdGEudGl0bGUubGVuZ3RoID4gNjQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goJ3RpdGxlIGNhbm5vdCBjb250YWluIG1vcmUgdGhhbiA2NCBjaGFyYWN0ZXJzJyk7XG4gICAgICB9IGVsc2UgaWYgKGVkaXRJZCA9PSBmYWxzZSkge1xuICAgICAgICBsZXQgcHJvamVjdFRvZG9zID0gaW5kZXhUb2RvcyhkYXRhLnByb2plY3QpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RUb2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChwcm9qZWN0VG9kb3NbaV0udGl0bGUudG9Mb3dlckNhc2UoKSA9PSBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKFxuICAgICAgICAgICAgICAndGl0bGUgY2Fubm90IG1hdGNoIGV4aXN0aW5nIHRvZG8gaXRlbSB0aXRsZSBpbiBzYW1lIHByb2plY3QnXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5kZXNjcmlwdGlvbi5sZW5ndGggPiAyNTYpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goJ2Rlc2NyaXB0aW9uIGNhbm5vdCBjb250YWluIG1vcmUgdGhhbiAyNTYgY2hhcmFjdGVycycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG4gIH07XG5cbiAgY29uc3QgdmFsaWRhdGVQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcbiAgICBsZXQgZXJyb3JzID0gW107XG4gICAgaWYgKG5ld1Byb2plY3QgPT0gJycpIHsgZXJyb3JzLnB1c2goJ25vdGhpbmcgdG8gc2F2ZScpOyB9XG4gICAgZWxzZSBpZiAobmV3UHJvamVjdC5sZW5ndGggPiA0Nikge1xuICAgICAgZXJyb3JzLnB1c2goJ3RpdGxlIGNhbm5vdCBjb250YWluIG1vcmUgdGhhbiA0NiBjaGFyYWN0ZXJzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG5ld1Byb2plY3QudG9Mb3dlckNhc2UoKSA9PSBwcm9qZWN0c1tpXS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goJ3RpdGxlIGNhbm5vdCBtYXRjaCBleGlzdGluZyBwcm9qZWN0IHRpdGxlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkgeyAvLyBmcm9tOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZ1xuICAgIHZhciBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgdmFyIHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1c2VFeGFtcGxlRGF0YSA9ICgpID0+IHtcbiAgICBsZXQgdG9kb3NFeGFtcGxlcyA9IGV4YW1wbGVEYXRhLnRvZG9zO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3NFeGFtcGxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdG9kb3MucHVzaChcbiAgICAgICAgdG9kb0ZhY3RvcnkodW5pcXVlSWQoKSwgdG9kb3NFeGFtcGxlc1tpXS50aXRsZSwgdG9kb3NFeGFtcGxlc1tpXS5kZXNjcmlwdGlvbixcbiAgICAgICAgdG9kb3NFeGFtcGxlc1tpXS5wcmlvcml0eSwgdG9kb3NFeGFtcGxlc1tpXS5wcm9qZWN0XG4gICAgICApKTtcbiAgICB9XG5cbiAgICBsZXQgcHJvamVjdHNFeGFtcGxlcyA9IGV4YW1wbGVEYXRhLnByb2plY3RzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNFeGFtcGxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0c0V4YW1wbGVzW2ldKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2F2ZVRvZG9zTG9jYWwgPSAoKSA9PiB7XG4gICAgaWYgKGxvY2FsU3RvcmUgPT0gdHJ1ZSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RvZG9zJyk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzYXZlUHJvamVjdHNMb2NhbCA9ICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yZSA9PSB0cnVlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvamVjdHMnKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdGlhbGl6ZSwgaW5kZXhUb2RvcywgY3JlYXRlVG9kbywgZWRpdFRvZG8sIGdldFRvZG8sIGRlbGV0ZVRvZG8sXG4gICAgaW5kZXhQcm9qZWN0cywgY3JlYXRlUHJvamVjdCwgZGVsZXRlUHJvamVjdFxuICB9O1xuXG59KSgpO1xuXG5leHBvcnQgeyBtb2RlbCB9XG4iLCJpbXBvcnQgeyByZW5kZXJVdGlscyB9IGZyb20gJy4vcmVuZGVyVXRpbHMnXG5pbXBvcnQgeyBtb2RlbCB9IGZyb20gJy4vbW9kZWwnXG5pbXBvcnQgeyB0b2Rvc1JlbmRlciB9IGZyb20gJy4vdG9kb3NSZW5kZXInXG5cbmNvbnN0IHByb2plY3RzUmVuZGVyID0gKCgpID0+IHtcblxuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gICAgcmVuZGVyVXRpbHMuY2xlYXJDb250ZW50KCk7XG4gICAgbGV0IHByb2plY3RzID0gbW9kZWwuaW5kZXhQcm9qZWN0cygpO1xuICAgIGxldCBuYXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2QnRuJyk7XG4gICAgbGV0IHRpdGxlVyA9IGNvbnRlbnQub2Zmc2V0V2lkdGggLSA1NjtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW1EaXYnKTtcbiAgICAgIGRpdi5pZCA9IGBwcm9qZWN0XyR7cHJvamVjdHNbaV19YDtcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIG5hdkJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdleWVJY29uJyk7XG4gICAgICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCdmb2xkZXJzSWNvbicpO1xuICAgICAgICBuYXZCdG4udGl0bGUgPSAndmlldyBwcm9qZWN0cyc7XG4gICAgICAgIHRvZG9zUmVuZGVyLmluZGV4KHRoaXMuaWQpO1xuICAgICAgfSk7XG4gICAgICBsZXQgZGVsZXRlYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkZWxldGVib3guY2xhc3NMaXN0LmFkZCgnZGVsZXRlYm94Jyk7XG4gICAgICBkZWxldGVib3guaWQgPSBgZGVsZXRlXyR7cHJvamVjdHNbaV19YDtcbiAgICAgIGRlbGV0ZWJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhgY2xpY2tlZDogJHt0aGlzLmlkfWApO1xuICAgICAgICByZW1vdmVQcm9qZWN0KHRoaXMuaWQpO1xuICAgICAgfSk7XG4gICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gcmVuZGVyVXRpbHMuZml0U3RyaW5nKHByb2plY3RzW2ldLCB0aXRsZVcpO1xuICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChkZWxldGVib3gpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB9XG5cbiAgICBsZXQgYWRkTmV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkTmV3LmlkID0gJ2FkZE5ldyc7XG4gICAgYWRkTmV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGZvcm0oKTtcbiAgICAgIGFkZE5ldy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICAgIGxldCBwbHVzU2lnbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbHVzU2lnbi5pZCA9ICdwbHVzU2lnbic7XG4gICAgcGx1c1NpZ24uaW5uZXJIVE1MID0gJysnO1xuICAgIGFkZE5ldy5hcHBlbmRDaGlsZChwbHVzU2lnbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGROZXcpO1xuXG4gICAgLy8gc2V0IG5hdmJhciBtZXNzYWdlXG4gICAgbGV0IG5hdk1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZNc2cnKTtcbiAgICBuYXZNc2cuaW5uZXJIVE1MID0gJ1Byb2plY3RzJztcblxuICAgIC8vIG9uUmVzaXplOiByZWZvcm1hdCB0ZXh0IHRoYXQgd291bGQgb3RoZXJ3aXNlIG92ZXJmbG93XG4gICAgZG9jdW1lbnQuYm9keS5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICBsZXQgdGl0bGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGl0bGUnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRpdGxlc1tpXS5pbm5lckhUTUwgPSByZW5kZXJVdGlscy5maXRTdHJpbmcoXG4gICAgICAgICAgcHJvamVjdHNbaV0sIGNvbnRlbnQub2Zmc2V0V2lkdGggLSA1NlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLy8gcHJpdmF0ZVxuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAodGhpc0lkKSA9PiB7XG4gICAgbGV0IGlkID0gdGhpc0lkLnNsaWNlKDcpO1xuICAgIGlmIChjb25maXJtKGBSZWFsbHkgZGVsZXRlIHByb2plY3Q6ICR7aWR9XFxuQU5EIGFueSB0b2RvIGl0ZW1zIGl0IGNvbnRhaW5zP2ApID09IHRydWUpIHtcbiAgICAgIG1vZGVsLmRlbGV0ZVByb2plY3QoaWQpO1xuICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdF8ke2lkfWApO1xuICAgICAgcHJvamVjdERpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByb2plY3REaXYpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcbiAgICAgIGxldCBwcm9qZWN0ID0gaW5wdXQudmFsdWU7XG4gICAgICBsZXQgZXJyb3JzID0gbW9kZWwuY3JlYXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgaW5kZXgoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyb3JzWzBdID09ICdub3RoaW5nIHRvIHNhdmUnKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZm9ybURpdik7XG4gICAgICAgIGFkZE5ldy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KGBTQVZFIEZBSUxFRCFcXG4qICR7ZXJyb3JzWzBdfWApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnZm9ybURpdicpO1xuICAgIGZvcm1EaXYuaWQgPSAncHJvamVjdEZvcm0nO1xuICAgIGxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGxhYmVsLmlubmVySFRNTCA9ICd0aXRsZTonO1xuICAgIGxhYmVsLmlkID0gJ3Byb2plY3RUaXRsZSc7XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5pZCA9ICdwcm9qZWN0VGl0bGUnO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBsZXQgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFByb2plY3QudHlwZSA9ICdidXR0b24nOyAvLyBwcmV2ZW50cyBhcHAgcmVsb2FkIG9uIGNsaWNrXG4gICAgYWRkUHJvamVjdC5pZCA9ICdhZGRQcm9qZWN0JztcbiAgICBhZGRQcm9qZWN0LmlubmVySFRNTCA9ICdkb25lJztcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXQpO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuXG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtRGl2KTtcbiAgfTtcblxuICByZXR1cm4geyBpbmRleCB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdHNSZW5kZXIgfVxuIiwiLy8gZnVuY3Rpb25zIGNvbW1vbiB0byB0b2Rvc1JlbmRlci5qcyBhbmQgcHJvamVjdHNSZW5kZXIuanNcbmNvbnN0IHJlbmRlclV0aWxzID0gKCgpID0+IHtcbiAgY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpdFN0cmluZyA9IChzdHJpbmcsIHdpZHRoKSA9PiB7XG4gICAgaWYgKHN0cmluZy5sZW5ndGggKiAxMiA+IHdpZHRoKSB7XG4gICAgICBsZXQgcmVtb3ZlID0gKE1hdGguZmxvb3Iod2lkdGggLyAxMikgLSAzKSAtIHN0cmluZy5sZW5ndGg7XG4gICAgICBzdHJpbmcgPSBzdHJpbmcuc2xpY2UoMCwgcmVtb3ZlKS5jb25jYXQoJy4uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG5cbiAgcmV0dXJuIHsgY2xlYXJDb250ZW50LCBmaXRTdHJpbmcgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHJlbmRlclV0aWxzIH1cbiIsImltcG9ydCB7IHJlbmRlclV0aWxzIH0gZnJvbSAnLi9yZW5kZXJVdGlscydcbmltcG9ydCB7IG1vZGVsIH0gZnJvbSAnLi9tb2RlbCdcblxuY29uc3QgdG9kb3NSZW5kZXIgPSAoKCkgPT4ge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29uc3QgaW5kZXggPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QgPSBwcm9qZWN0LnNsaWNlKDgpO1xuICAgIGxldCB0b2RvcyA9IG1vZGVsLmluZGV4VG9kb3MocHJvamVjdCk7XG4gICAgcmVuZGVyVXRpbHMuY2xlYXJDb250ZW50KCk7XG5cbiAgICBsZXQgdGl0bGVXID0gY29udGVudC5vZmZzZXRXaWR0aCAtIDU2OyAvLyByZWNhbGN1bGF0ZVxuICAgIGxldCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybURpdi5jbGFzc0xpc3QuYWRkKCdmb3JtRGl2Jyk7XG4gICAgZm9ybURpdi5jbGFzc0xpc3QuYWRkKCdtZWRpdW1Gb3JtJyk7XG4gICAgZm9ybURpdi5pZCA9ICdmb3JtRGl2JztcbiAgICBmb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHsgLy8gYWRkIHRvZG8gaXRlbXNcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdpdGVtRGl2Jyk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChgJHt0b2Rvc1tpXS5wcmlvcml0eX1EaXZgKTtcbiAgICAgIGRpdi5pZCA9IGAke3RvZG9zW2ldLmlkfWA7XG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgY2hpbGRyZW4gPSBbXS5zbGljZS5jYWxsKGRpdi5jaGlsZHJlbik7XG4gICAgICAgIGlmIChjaGlsZHJlbi5qb2luKCkuaW5jbHVkZXMoJ1tvYmplY3QgSFRNTEZvcm1FbGVtZW50XScpID09IGZhbHNlKSB7XG4gICAgICAgICAgZm9ybSh0aGlzLmlkLCBwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICAgICBjaGVja2JveC5pZCA9IGBkZWxldGVfJHt0b2Rvc1tpXS5pZH1gO1xuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgbW9kZWwuZGVsZXRlVG9kbyh0aGlzLmlkLnNsaWNlKDcpKTtcbiAgICAgICAgcmVtb3ZlVG9kbyh0aGlzLmlkKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IHJlbmRlclV0aWxzLmZpdFN0cmluZyh0b2Rvc1tpXS50aXRsZSwgdGl0bGVXKTtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICB0aXRsZS5pZCA9IGB0aXRsZV8ke3RvZG9zW2ldLmlkfWA7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG5cbiAgICBsZXQgYWRkTmV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkTmV3LmlkID0gJ2FkZE5ldyc7XG4gICAgYWRkTmV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGZvcm0odGhpcy5pZCwgcHJvamVjdCk7XG4gICAgICBhZGROZXcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbiAgICBsZXQgcGx1c1NpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGx1c1NpZ24uaWQgPSAncGx1c1NpZ24nO1xuICAgIHBsdXNTaWduLmlubmVySFRNTCA9ICcrJztcbiAgICBhZGROZXcuYXBwZW5kQ2hpbGQocGx1c1NpZ24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkTmV3KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm1EaXYpO1xuXG4gICAgLy8gc2V0IG5hdmJhciBuYXZiYXIgbWVzc2FnZVxuICAgIGxldCBuYXZNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2TXNnJyk7XG4gICAgbmF2TXNnLmlubmVySFRNTCA9IHJlbmRlclV0aWxzLmZpdFN0cmluZyhcbiAgICAgIHByb2plY3QsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtc2dEaXYnKS5vZmZzZXRXaWR0aCAtIDEyXG4gICAgKTtcblxuICAgIC8vIG9uUmVzaXplOiByZWZvcm1hdCB0ZXh0IHRoYXQgd291bGQgb3RoZXJ3aXNlIG92ZXJmbG93XG4gICAgZG9jdW1lbnQuYm9keS5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICBuYXZNc2cuaW5uZXJIVE1MID0gcmVuZGVyVXRpbHMuZml0U3RyaW5nKFxuICAgICAgICBwcm9qZWN0LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXNnRGl2Jykub2Zmc2V0V2lkdGggLSAxMlxuICAgICAgKTtcbiAgICAgIGxldCB0aXRsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aXRsZScpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGl0bGVzW2ldLmlubmVySFRNTCA9IHJlbmRlclV0aWxzLmZpdFN0cmluZyhcbiAgICAgICAgICB0b2Rvc1tpXS50aXRsZSwgY29udGVudC5vZmZzZXRXaWR0aCAtIDU2XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBwcml2YXRlOlxuXG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAodGhpc0lkKSA9PiB7XG4gICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpc0lkKTtcbiAgICBjaGVja0JveC5pZCA9ICdkZWxldGVkJztcbiAgICBsZXQgaWQgPSB0aGlzSWQuc2xpY2UoNyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGxldCB0b2RvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgdG9kb0Rpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvZG9EaXYpO1xuICAgIH0sIDMwMCk7XG4gIH07XG5cbiAgY29uc3QgZm9ybSA9ICh0aGlzSWQsIHRoaXNQcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgYWRkSW5wdXQgPSAobmFtZSkgPT4ge1xuICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgIGxhYmVsLmlubmVySFRNTCA9IGAke25hbWV9OmA7XG4gICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgaWYgKG5hbWUgPT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoYCR7bmFtZX1gKTtcbiAgICAgIH1cbiAgICAgIGlucHV0LmlkID0gYCR7bmFtZX0ke3RoaXNJZH1gO1xuICAgICAgaWYgKHRoaXNJZCAhPSAnYWRkTmV3JykgeyBpbnB1dC52YWx1ZSA9IG1vZGVsLmdldFRvZG8odGhpc0lkKVtgJHtuYW1lfWBdOyB9XG5cbiAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkU2VsZWN0aW9uID0gKHR5cGUpID0+IHtcbiAgICAgIGxldCBvcHRpb25zID0gWydoaWdoJywgJ21lZGl1bScsICdsb3cnXTtcbiAgICAgIGlmICh0eXBlID09ICdwcm9qZWN0JykgeyBvcHRpb25zID0gbW9kZWwuaW5kZXhQcm9qZWN0cygpOyB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25zW2ldO1xuICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gb3B0aW9uc1tpXTtcbiAgICAgICAgaWYgKHRoaXNJZCA9PSAnYWRkTmV3Jykge1xuICAgICAgICAgIGlmIChvcHRpb25zW2ldID09ICdtZWRpdW0nIHx8IG9wdGlvbnNbaV0gPT0gdGhpc1Byb2plY3QpIHtcbiAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICgob3B0aW9uc1tpXSA9PSBtb2RlbC5nZXRUb2RvKHRoaXNJZCkucHJpb3JpdHkpIHx8XG4gICAgICAgICAgICAgICAgICAgIChvcHRpb25zW2ldID09IG1vZGVsLmdldFRvZG8odGhpc0lkKS5wcm9qZWN0KSkge1xuICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT0gJ3Byb2plY3QnKSB7IHByb2plY3RzLmFwcGVuZENoaWxkKG9wdGlvbik7IH1cbiAgICAgICAgZWxzZSB7IHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7IH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZGl2Q29sb3IgPSAodGhpc0RpdikgPT4ge1xuICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdsb3dGb3JtJyk7XG4gICAgICB0aGlzRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bUZvcm0nKTtcbiAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaEZvcm0nKTtcbiAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LmFkZChgJHtwcmlvcml0eS52YWx1ZX1Gb3JtYCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcbiAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICB0aXRsZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRpdGxlJHt0aGlzSWR9YCkudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb24ke3RoaXNJZH1gKS52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcmlvcml0eSR7dGhpc0lkfWApLnZhbHVlLFxuICAgICAgICBwcm9qZWN0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdHMke3RoaXNJZH1gKS52YWx1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoKHRoaXNJZCA9PSAnYWRkTmV3JyAmJiB0aGlzUHJvamVjdCA9PSAnQWxsIHRvLWRvIGl0ZW1zJykgfHxcbiAgICAgICAgICBtb2RlbC5nZXRUb2RvKHRoaXNJZCkucHJvamVjdCA9PSBkYXRhLnByb2plY3QgfHxcbiAgICAgICAgICBjb25maXJtKGBSZWFsbHkgc2F2ZSB0byBvdGhlciBwcm9qZWN0OiAke2RhdGEucHJvamVjdH0/YCkgPT0gdHJ1ZSkge1xuICAgICAgICBsZXQgZXJyb3JzID0gW107XG4gICAgICAgIGlmICh0aGlzSWQgPT0gJ2FkZE5ldycpIHsgZXJyb3JzID0gbW9kZWwuY3JlYXRlVG9kbyhkYXRhKTsgfVxuICAgICAgICBlbHNlIHsgZXJyb3JzID0gbW9kZWwuZWRpdFRvZG8oZGF0YSwgdGhpc0lkKTsgfVxuXG4gICAgICAgIGlmIChlcnJvcnNbMF0gPT0gJ25vdGhpbmcgdG8gc2F2ZScpIHtcbiAgICAgICAgICBmb3JtRGl2LnJlbW92ZUNoaWxkKHRvZG9Gb3JtKTtcbiAgICAgICAgICBmb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgYWRkTmV3LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9IGVsc2UgaWYgKChlcnJvcnNbMF0gPT0gJ3NhbWUgcHJpb3JpdHknIHx8XG4gICAgICAgICAgICBlcnJvcnNbMF0gPT0gJ3NhbWUgcHJpb3JpdHkgbmV3IHRpdGxlJykgJiZcbiAgICAgICAgICAgICh0aGlzUHJvamVjdCA9PSBkYXRhLnByb2plY3QgfHwgdGhpc1Byb2plY3QgPT0gJ0FsbCB0by1kbyBpdGVtcycpKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyB0aGlzRGl2LnJlbW92ZUNoaWxkKHRvZG9Gb3JtKTsgfSwgMTApO1xuICAgICAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybURpdicpO1xuICAgICAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LnJlbW92ZShgJHttb2RlbC5nZXRUb2RvKHRoaXNJZCkucHJpb3JpdHl9Rm9ybWApO1xuICAgICAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LmFkZCgnaXRlbURpdicpO1xuICAgICAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LmFkZChgJHttb2RlbC5nZXRUb2RvKHRoaXNJZCkucHJpb3JpdHl9RGl2YCk7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlbGV0ZV8ke3RoaXNJZH1gKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGl0bGVfJHt0aGlzSWR9YCkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgaWYgKGVycm9yc1swXSA9PSAnc2FtZSBwcmlvcml0eSBuZXcgdGl0bGUnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGl0bGVfJHt0aGlzSWR9YCkuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIHJlbmRlclV0aWxzLmZpdFN0cmluZyhtb2RlbC5nZXRUb2RvKHRoaXNJZCkudGl0bGUsIGNvbnRlbnQub2Zmc2V0V2lkdGggLSA1Nik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKChlcnJvcnMubGVuZ3RoID09IDApIHx8ICgoZXJyb3JzWzBdID09ICdzYW1lIHByaW9yaXR5JyB8fFxuICAgICAgICAgICAgZXJyb3JzWzBdID09ICdzYW1lIHByaW9yaXR5IG5ldyB0aXRsZScpICYmXG4gICAgICAgICAgICAodGhpc1Byb2plY3QgIT0gZGF0YS5wcm9qZWN0ICYmIHRoaXNQcm9qZWN0ICE9ICdBbGwgdG8tZG8gaXRlbXMnKSkpIHtcbiAgICAgICAgICBpbmRleChgcHJvamVjdF8ke3RoaXNQcm9qZWN0fWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBtZXNzYWdlID0gJ1NBVkUgRkFJTEVEISc7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlcnJvcnMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICBtZXNzYWdlICs9IGBcXG4qICR7ZXJyb3JzW2ldfWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxldCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0b2RvRm9ybS5pZCA9IGBmb3JtJHt0aGlzSWR9YDtcbiAgICBhZGRJbnB1dCgndGl0bGUnKTtcbiAgICBhZGRJbnB1dCgnZGVzY3JpcHRpb24nKTtcblxuICAgIGxldCBsYWJlbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsYWJlbHNEaXYuY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uRGl2Jyk7XG4gICAgbGV0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHlMYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwuaW5uZXJIVE1MID0gJ3ByaW9yaXR5Oic7XG4gICAgbGFiZWxzRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIGxldCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIHByb2plY3RMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGFiZWwnKTtcbiAgICBwcm9qZWN0TGFiZWwuaW5uZXJIVE1MID0gJ3Byb2plY3Q6JztcbiAgICBsYWJlbHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgICBsZXQgZG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRvbmUudHlwZSA9ICdidXR0b24nOyAvLyBwcmV2ZW50cyBhcHAgcmVsb2FkIG9uIGNsaWNrXG4gICAgZG9uZS5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgZG9uZS5pbm5lckhUTUwgPSAnZG9uZSc7XG4gICAgbGFiZWxzRGl2LmFwcGVuZENoaWxkKGRvbmUpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGxhYmVsc0Rpdik7XG5cbiAgICBsZXQgc2VsZWN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VsZWN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbkRpdicpO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG4gICAgcHJpb3JpdHkuaWQgPSBgcHJpb3JpdHkke3RoaXNJZH1gO1xuICAgIGFkZFNlbGVjdGlvbigncHJpb3JpdHknKTtcbiAgICBzZWxlY3Rpb25EaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzJyk7XG4gICAgcHJvamVjdHMuaWQgPSBgcHJvamVjdHMke3RoaXNJZH1gO1xuICAgIGFkZFNlbGVjdGlvbigncHJvamVjdCcpO1xuICAgIHNlbGVjdGlvbkRpdi5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0aW9uRGl2KTtcblxuICAgIGxldCB0aGlzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1EaXYnKTtcbiAgICBpZiAodGhpc0lkICE9ICdhZGROZXcnKSB7IC8vIGluc2VydCAnZWRpdCcgZm9ybSBhdCB0b2RvIGl0ZW0gcG9zaXRpb25cbiAgICAgIHRoaXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzSWQpO1xuICAgICAgdGhpc0Rpdi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGVkaXQodGhpcy5pZCwgcHJvamVjdCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LnJlbW92ZSgnaXRlbURpdicpO1xuICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKGAke21vZGVsLmdldFRvZG8odGhpc0lkKS5wcmlvcml0eX1EaXZgKTtcbiAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LmFkZCgnZm9ybURpdicpO1xuICAgICAgZGl2Q29sb3IodGhpc0Rpdik7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVsZXRlXyR7dGhpc0lkfWApLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGl0bGVfJHt0aGlzSWR9YCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBkb25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXQpO1xuICAgIHByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7IGRpdkNvbG9yKHRoaXNEaXYpOyB9KTtcbiAgICB0aGlzRGl2LmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgICB0aGlzRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9O1xuXG4gIHJldHVybiB7IGluZGV4IH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IHRvZG9zUmVuZGVyIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=