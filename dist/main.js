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

  // private

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
  const index = () => {
    _renderUtils__WEBPACK_IMPORTED_MODULE_0__["renderUtils"].clearContent();
    let projects = _model__WEBPACK_IMPORTED_MODULE_1__["model"].indexProjects();
    let navBtn = document.getElementById('navBtn');
    let titleW = content.offsetWidth - 56;

    for(let i = 0; i < projects.length; i++) { // add project divs
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

    // add 'new project' button
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
    document.body.onresize = function(){ onResize(); };
  };

  // private

  let content = document.getElementById('content');

  const onResize = () => {
    let projects = _model__WEBPACK_IMPORTED_MODULE_1__["model"].indexProjects();
    let titles = document.getElementsByClassName('title');
    for (let i = 0; i < titles.length; i++) {
      titles[i].innerHTML = _renderUtils__WEBPACK_IMPORTED_MODULE_0__["renderUtils"].fitString(
        projects[i], content.offsetWidth - 56
      );
    }
  };

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

    // scroll page to show whole form if form opens partly below window
    let divH = 68;
    let space = window.innerHeight - formDiv.getBoundingClientRect().top;
    if (space < divH) {
      window.scrollTo(0, window.pageYOffset + (divH - space));
      window.dispatchEvent(new Event('resize'));
    }

    onResize();
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

    // add 'new todo item' button
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
    document.body.onresize = function(){ onResize(project); };
  };

  // private:

  let content = document.getElementById('content');

  const onResize = (project) => {
    document.getElementById('navMsg').innerHTML = _renderUtils__WEBPACK_IMPORTED_MODULE_0__["renderUtils"].fitString(
      project, document.getElementById('msgDiv').offsetWidth - 12
    );
    let todos = _model__WEBPACK_IMPORTED_MODULE_1__["model"].indexTodos(project);
    let titles = document.getElementsByClassName('title');
    for (let i = 0; i < titles.length; i++) {
      titles[i].innerHTML = _renderUtils__WEBPACK_IMPORTED_MODULE_0__["renderUtils"].fitString(
        todos[i].title, content.offsetWidth - 56
      );
    }
  };

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
              console.log(`remove div: ${thisDiv}`);
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
    if (space < divH) {
      window.scrollTo(0, window.pageYOffset + (divH - space));
    }

    onResize(thisProject);
  };

  return { index };

})();




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcFJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdHNSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlclV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy90b2Rvc1JlbmRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQWlEO0FBQ047O0FBRTNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQ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LDRDQUFLLHdCQUF3Qjs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGdDQUFnQywrQkFBK0IsRUFBRTtBQUNqRTtBQUNBLHNDQUFzQyxjQUFjO0FBQ3BEO0FBQ0EsbUNBQW1DLGNBQWM7QUFDakQsNENBQTRDLE9BQU87QUFDbkQsMkNBQTJDLE9BQU87QUFDbEQ7QUFDQSw2Q0FBNkMsT0FBTztBQUNwRCxZQUFZLHdEQUFXO0FBQ3ZCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx5Q0FBeUMsUUFBUTtBQUNqRCwyQkFBMkIsWUFBWTtBQUN2QyxTQUFTO0FBQ1Q7QUFDQSx5QkFBeUIsbUJBQW1CO0FBQzVDLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsT0FBTztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsT0FBTztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxrQ0FBa0MsNENBQUssMEJBQTBCO0FBQ2pFO0FBQ0E7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQyx1Q0FBdUMsT0FBTztBQUM5Qzs7QUFFQTtBQUNBLG9EQUFvRCxtQkFBbUIsRUFBRTtBQUN6RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFVBQVU7O0FBRVYsQ0FBQzs7QUFFcUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgcHJvamVjdHNSZW5kZXIgfSBmcm9tICcuL3Byb2plY3RzUmVuZGVyJ1xuaW1wb3J0IHsgdG9kb3NSZW5kZXIgfSBmcm9tICcuL3RvZG9zUmVuZGVyJ1xuXG5jb25zdCBhcHBSZW5kZXIgPSAoKCkgPT4ge1xuICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgIGxldCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJyk7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgLy8gc2V0IG5hdmJhciBzY3JvbGwgYmVoYXZpb3VyIChoaWRlIC8gcmV2ZWFsKVxuICAgIHZhciBwcmV2U2Nyb2xscG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICBpZiAocHJldlNjcm9sbHBvcyA+IGN1cnJlbnRTY3JvbGxQb3MpIHtcbiAgICAgICAgbmF2YmFyLnN0eWxlLnRvcCA9IFwiMFwiO1xuICAgICAgICBjb250ZW50LnN0eWxlLm1hcmdpblRvcCA9ICc1MHB4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdmJhci5zdHlsZS50b3AgPSAnLTUwcHgnO1xuICAgICAgICBjb250ZW50LnN0eWxlLm1hcmdpblRvcCA9ICcwcHgnO1xuICAgICAgfVxuICAgICAgcHJldlNjcm9sbHBvcyA9IGN1cnJlbnRTY3JvbGxQb3M7XG4gICAgfVxuXG4gICAgLy8gZGlzYWJsZTsgcmV0dXJuIGtleSBzdWJtaXRzIGZvcm1cbiAgICAvLyBmcm9tOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NjI5ODA1L2Rpc2FibGluZy1lbnRlci1rZXktZm9yLWZvcm1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUua2V5SWRlbnRpZmllcj09J1UrMDAwQSd8fCBlLmtleUlkZW50aWZpZXI9PSdFbnRlcicgfHwgZS5rZXlDb2RlPT0xMykge1xuICAgICAgICBpZiAoZS50YXJnZXQubm9kZU5hbWU9PSdJTlBVVCcgJiYgZS50YXJnZXQudHlwZT09J3RleHQnKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTt9XG4gICAgICAgIH1cbiAgICAgIH0sIHRydWUpO1xuXG4gICAgLy8gc2V0IGluaXRpYWwgbmF2QnRuIGljb24gJiBhZGQgY2xpY2sgZXZlbnRcbiAgICBsZXQgbmF2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdkJ0bicpO1xuICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCdmb2xkZXJzSWNvbicpO1xuICAgIG5hdkJ0bi50aXRsZSA9ICd2aWV3IHByb2plY3RzJztcbiAgICBuYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5hdkJ0bkNsaWNrKTtcblxuICAgIHRvZG9zUmVuZGVyLmluZGV4KCdwcm9qZWN0X0FsbCB0by1kbyBpdGVtcycpO1xuICB9O1xuXG4gIC8vIHByaXZhdGVcblxuICBjb25zdCBuYXZCdG5DbGljayA9ICgpID0+IHtcbiAgICBpZiAobmF2QnRuLmNsYXNzTGlzdC52YWx1ZSA9PSAnZm9sZGVyc0ljb24nKSB7XG4gICAgICBuYXZCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZm9sZGVyc0ljb24nKTtcbiAgICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCdleWVJY29uJyk7XG4gICAgICBuYXZCdG4udGl0bGUgPSAndmlldyBhbGwgdG9kbyBpdGVtcyBmcm9tIGFsbCBwcm9qZWN0cyc7XG4gICAgICBwcm9qZWN0c1JlbmRlci5pbmRleCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXZCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZXllSWNvbicpO1xuICAgICAgbmF2QnRuLmNsYXNzTGlzdC5hZGQoJ2ZvbGRlcnNJY29uJyk7XG4gICAgICBuYXZCdG4udGl0bGUgPSAndmlldyBwcm9qZWN0cyc7XG4gICAgICB0b2Rvc1JlbmRlci5pbmRleCgncHJvamVjdF9BbGwgdG8tZG8gaXRlbXMnKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgaW5pdGlhbGl6ZSB9O1xuXG59KSgpO1xuXG5leHBvcnQgeyBhcHBSZW5kZXIgfVxuIiwiLy8gRGVmYXVsdCBkYXRhIHRvIHVzZSB3aGVuIGxvY2FsU3RvcmFnZSB1bmF2YWlsYWJsZSAvIGNvbnRhaW5zIG5vIGFwcCBkYXRhXG5jb25zdCBleGFtcGxlRGF0YSA9ICgoKSA9PiB7XG4gIGxldCB0b2RvcyA9IFtcbiAgICB7IHRpdGxlOiAnZG8gbGF1bmRyeScsIGRlc2NyaXB0aW9uOiAncmVtZW1iZXIgamVhbnMnLFxuICAgICAgcHJpb3JpdHk6ICdoaWdoJywgcHJvamVjdDogJ3JlZ3VsYXIgc3R1ZmYnIH0sXG4gICAgeyB0aXRsZTogJ3dhc2ggY2FyJywgZGVzY3JpcHRpb246ICcnLFxuICAgICAgcHJpb3JpdHk6ICdsb3cnLCBwcm9qZWN0OiAncmVndWxhciBzdHVmZicgfSxcbiAgICB7IHRpdGxlOiAnYnV5IGNvZmZlZScsIGRlc2NyaXB0aW9uOiAnd2hvbGUgYmVhbnMnLFxuICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLCBwcm9qZWN0OiAncmVndWxhciBzdHVmZicgfSxcbiAgICB7IHRpdGxlOiAncmVzZWFyY2ggYXJyb3cgZnVuY3Rpb25zJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnbWFrZSBub3RlcyBhbmQgc2F2ZSBsaW5rcycsXG4gICAgICBwcmlvcml0eTogJ2hpZ2gnLCBwcm9qZWN0OiAnd3JpdGUgYXJ0aWNsZScgfSxcbiAgICB7IHRpdGxlOiAnd3JpdGUgYm9keSBvZiBhcnRpY2xlJywgZGVzY3JpcHRpb246ICdhY3R1YWxseSB3cml0ZSB0aGUgdGhpbmcnLFxuICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLCBwcm9qZWN0OiAnd3JpdGUgYXJ0aWNsZScgfSxcbiAgICB7IHRpdGxlOiAncHJvb2ZyZWFkIGFydGljbGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdjaGVjayBmb3IgZXJyb3JzIGFuZCBiYWQgZ3JhbW1hcicsXG4gICAgICBwcmlvcml0eTogJ2xvdycsIHByb2plY3Q6ICd3cml0ZSBhcnRpY2xlJyB9LFxuICAgIHsgdGl0bGU6ICdyZXNlYXJjaCBJSUZFcycsXG4gICAgICBkZXNjcmlwdGlvbjogJ3doYXQgYXJlIHRoZXksIGFuZCB3aGVuIGFyZSB0aGV5IHVzZWQ/JyxcbiAgICAgIHByaW9yaXR5OiAnbWVkaXVtJywgcHJvamVjdDogJ3dyaXRlIGFydGljbGUnIH0sXG4gICAgeyB0aXRsZTogJ3RvZG8gd2l0aCBleGFtcGxlIHJlYWxseSBsb25nIHRpdGxlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnZm9yIHRlc3RpbmcgbG9uZyBzdHJpbmdzJywgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgcHJvamVjdDogJ3Byb2plY3Qgd2l0aCByZWFsbHkgbG9uZyB0aXRsZScgfVxuICBdO1xuXG4gIGxldCBwcm9qZWN0cyA9IFtcbiAgICAncmVndWxhciBzdHVmZicsXG4gICAgJ3dyaXRlIGFydGljbGUnLFxuICAgICdwcm9qZWN0IHdpdGggcmVhbGx5IGxvbmcgdGl0bGUnXG4gIF07XG5cbiAgcmV0dXJuIHt0b2RvcywgcHJvamVjdHN9XG59KSgpO1xuXG5leHBvcnQgeyBleGFtcGxlRGF0YSB9XG4iLCJpbXBvcnQgeyBtb2RlbCB9IGZyb20gJy4vbW9kZWwnXG5pbXBvcnQgeyBhcHBSZW5kZXIgfSBmcm9tICcuL2FwcFJlbmRlcidcblxubW9kZWwuaW5pdGlhbGl6ZSgpO1xuYXBwUmVuZGVyLmluaXRpYWxpemUoKTtcbiIsImltcG9ydCB7IGV4YW1wbGVEYXRhIH0gZnJvbSAnLi9leGFtcGxlRGF0YSdcblxuY29uc3QgbW9kZWwgPSAoKCkgPT4ge1xuICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmUgPSBzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKTtcblxuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpIHx8ICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkge1xuICAgICAgICB1c2VFeGFtcGxlRGF0YSgpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICAgICAgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcbiAgICAgICAgaWYgKHRvZG9zID09PSB1bmRlZmluZWQgfHwgcHJvamVjdHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHVzZUV4YW1wbGVEYXRhKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykgeyB0b2Rvc1tpXS5pZCA9IHVuaXF1ZUlkKCk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB1c2VFeGFtcGxlRGF0YSgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBDLlIuVS5EOlxuXG4gIGNvbnN0IGluZGV4VG9kb3MgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHNvcnRCeVByaW9yaXR5ID0gKHVuc29ydGVkKSA9PiB7XG4gICAgICBsZXQgc29ydGVkID0gW10sIGhpZ2ggPSBbXSwgbWVkaXVtID0gW10sIGxvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bnNvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodW5zb3J0ZWRbaV0ucHJpb3JpdHkgPT0gJ2hpZ2gnKSB7IGhpZ2gucHVzaCh1bnNvcnRlZFtpXSkgfVxuICAgICAgICBlbHNlIGlmICh1bnNvcnRlZFtpXS5wcmlvcml0eSA9PSAnbWVkaXVtJykgeyBtZWRpdW0ucHVzaCh1bnNvcnRlZFtpXSkgfVxuICAgICAgICBlbHNlIHsgbG93LnB1c2godW5zb3J0ZWRbaV0pIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzb3J0ZWQgPSBoaWdoLmNvbmNhdChtZWRpdW0uY29uY2F0KGxvdykpO1xuICAgIH07XG5cbiAgICBpZiAocHJvamVjdCA9PSAnQWxsIHRvLWRvIGl0ZW1zJykge1xuICAgICAgcmV0dXJuIHNvcnRCeVByaW9yaXR5KHRvZG9zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHByb2plY3RUb2RvcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdCA9PSB0b2Rvc1tpXS5wcm9qZWN0KSB7IHByb2plY3RUb2Rvcy5wdXNoKHRvZG9zW2ldKTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNvcnRCeVByaW9yaXR5KHByb2plY3RUb2Rvcyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSAoZm9ybURhdGEpID0+IHtcbiAgICBsZXQgZXJyb3JzID0gdmFsaWRhdGVUb2RvKGZvcm1EYXRhKTtcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0b2Rvcy5wdXNoKFxuICAgICAgICB0b2RvRmFjdG9yeSh1bmlxdWVJZCgpLCBmb3JtRGF0YS50aXRsZSwgZm9ybURhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgIGZvcm1EYXRhLnByaW9yaXR5LCBmb3JtRGF0YS5wcm9qZWN0XG4gICAgICApKTtcbiAgICAgIHNhdmVUb2Rvc0xvY2FsKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9ycztcbiAgfTtcblxuICBjb25zdCBlZGl0VG9kbyA9IChmb3JtRGF0YSwgdGhpc0lkKSA9PiB7XG4gICAgbGV0IGVycm9ycyA9IHZhbGlkYXRlVG9kbyhmb3JtRGF0YSwgdGhpc0lkKTtcblxuICAgIGlmIChlcnJvcnMubGVuZ3RoID09IDAgfHwgZXJyb3JzWzBdID09ICdub3RoaW5nIHRvIHNhdmUnKSB7XG4gICAgICBsZXQgdG9kbyA9IGdldFRvZG8odGhpc0lkKTtcbiAgICAgIGlmICh0b2RvLnByaW9yaXR5ID09IGZvcm1EYXRhLnByaW9yaXR5IHx8IGVycm9yc1swXSA9PSAnbm90aGluZyB0byBzYXZlJykge1xuICAgICAgICBlcnJvcnNbMF0gPSAnc2FtZSBwcmlvcml0eSc7XG4gICAgICAgIGlmICh0b2RvLnRpdGxlICE9IGZvcm1EYXRhLnRpdGxlKSB7XG4gICAgICAgICAgZXJyb3JzWzBdID0gJ3NhbWUgcHJpb3JpdHkgbmV3IHRpdGxlJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdG9kby50aXRsZSA9IGZvcm1EYXRhLnRpdGxlO1xuICAgICAgdG9kby5kZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmRlc2NyaXB0aW9uO1xuICAgICAgdG9kby5wcmlvcml0eSA9IGZvcm1EYXRhLnByaW9yaXR5O1xuICAgICAgdG9kby5wcm9qZWN0ID0gZm9ybURhdGEucHJvamVjdDtcbiAgICAgIHNhdmVUb2Rvc0xvY2FsKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9ycztcbiAgfTtcblxuICBjb25zdCBnZXRUb2RvID0gKGlkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRvZG9zW2ldLmlkID09IGlkKSB7IHJldHVybiB0b2Rvc1tpXTt9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAoaWQpID0+IHtcbiAgICB0b2Rvcy5zcGxpY2UodG9kb3MuaW5kZXhPZih0b2Rvcy5maW5kKGUgPT4gZS5pZCA9PSBpZCkpLCAxKTtcbiAgICBzYXZlVG9kb3NMb2NhbCgpO1xuICB9O1xuXG4gIGNvbnN0IGluZGV4UHJvamVjdHMgPSAoKSA9PiB7IHJldHVybiBwcm9qZWN0czsgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcbiAgICBsZXQgZXJyb3JzID0gdmFsaWRhdGVQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIGlmIChlcnJvcnMubGVuZ3RoID09IDApIHtcbiAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICBzYXZlUHJvamVjdHNMb2NhbCgpO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRvZG9zW2ldLnByb2plY3QgPT0gcHJvamVjdCkge1xuICAgICAgICBkZWxldGVUb2RvKHRvZG9zW2ldLmlkKTtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgIH1cbiAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihwcm9qZWN0cy5maW5kKGUgPT4gZSA9PSBwcm9qZWN0KSksIDEpO1xuICAgIHNhdmVQcm9qZWN0c0xvY2FsKCk7XG4gICAgc2F2ZVRvZG9zTG9jYWwoKTtcbiAgfTtcblxuICAvLyBwcml2YXRlXG5cbiAgbGV0IHRvZG9zID0gW107XG4gIGxldCBwcm9qZWN0cyA9IFtdO1xuICBsZXQgbG9jYWxTdG9yZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHVuaXF1ZUlkID0gKCgpID0+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICArK2NvdW50O1xuICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgdG9kb0ZhY3RvcnkgPSAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QpID0+IHtcblxuICAgIGNvbnN0IG91dHB1dCA9ICgpID0+IGNvbnNvbGUubG9nKGBpZDogJHtpZH0sIHRpdGxlOiAke3RpdGxlfSwgZGVzYzogJHtkZXNjcmlwdGlvbn0sIHByaW9yaXR5OiAke3ByaW9yaXR5fSwgcHJvamVjdDogJHtwcm9qZWN0fWApO1xuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSBuZXdUaXRsZSA9PiB0aXRsZSA9IG5ld1RpdGxlO1xuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb24gPT4gZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IG5ld1ByaW9yaXR5ID0+IHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgY29uc3Qgc2V0UHJvamVjdCA9IG5ld1Byb2plY3QgPT4gcHJvamVjdCA9IG5ld1Byb2plY3Q7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QsIHNldFRpdGxlLCBzZXREZXNjcmlwdGlvbixcbiAgICAgIHNldFByaW9yaXR5LCBzZXRQcm9qZWN0LCBvdXRwdXRcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRlVG9kbyA9IChkYXRhLCBlZGl0SWQgPSBmYWxzZSkgPT4ge1xuICAgIGxldCBlcnJvcnMgPSBbXTtcbiAgICBsZXQgZWRpdFRvZG8gPSBudWxsO1xuXG4gICAgaWYgKGVkaXRJZCAhPSBmYWxzZSkgeyBlZGl0VG9kbyA9IGdldFRvZG8oZWRpdElkKTsgfVxuXG4gICAgaWYgKChlZGl0SWQgPT0gZmFsc2UgJiYgKGRhdGEudGl0bGUgPT0gJycgJiYgZGF0YS5kZXNjcmlwdGlvbiA9PSAnJykpIHx8XG4gICAgICAgIChlZGl0SWQgIT0gZmFsc2UgJiYgZWRpdFRvZG8udGl0bGUgPT0gZGF0YS50aXRsZSAmJlxuICAgICAgICAgIGVkaXRUb2RvLmRlc2NyaXB0aW9uID09IGRhdGEuZGVzY3JpcHRpb24gJiZcbiAgICAgICAgICBlZGl0VG9kby5wcmlvcml0eSA9PSBkYXRhLnByaW9yaXR5ICYmXG4gICAgICAgICAgZWRpdFRvZG8ucHJvamVjdCA9PSBkYXRhLnByb2plY3QpKSB7XG4gICAgICBlcnJvcnMgPSBbJ25vdGhpbmcgdG8gc2F2ZSddO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGF0YS50aXRsZSA9PSAnJykgeyBlcnJvcnMucHVzaCgndGl0bGUgY2Fubm90IGJlIGJsYW5rJyk7IH1cbiAgICAgIGVsc2UgaWYgKGRhdGEudGl0bGUubGVuZ3RoID4gNjQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goJ3RpdGxlIGNhbm5vdCBjb250YWluIG1vcmUgdGhhbiA2NCBjaGFyYWN0ZXJzJyk7XG4gICAgICB9IGVsc2UgaWYgKGVkaXRJZCA9PSBmYWxzZSkge1xuICAgICAgICBsZXQgcHJvamVjdFRvZG9zID0gaW5kZXhUb2RvcyhkYXRhLnByb2plY3QpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RUb2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChwcm9qZWN0VG9kb3NbaV0udGl0bGUudG9Mb3dlckNhc2UoKSA9PSBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKFxuICAgICAgICAgICAgICAndGl0bGUgY2Fubm90IG1hdGNoIGV4aXN0aW5nIHRvZG8gaXRlbSB0aXRsZSBpbiBzYW1lIHByb2plY3QnXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5kZXNjcmlwdGlvbi5sZW5ndGggPiAyNTYpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goJ2Rlc2NyaXB0aW9uIGNhbm5vdCBjb250YWluIG1vcmUgdGhhbiAyNTYgY2hhcmFjdGVycycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG4gIH07XG5cbiAgY29uc3QgdmFsaWRhdGVQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcbiAgICBsZXQgZXJyb3JzID0gW107XG4gICAgaWYgKG5ld1Byb2plY3QgPT0gJycpIHsgZXJyb3JzLnB1c2goJ25vdGhpbmcgdG8gc2F2ZScpOyB9XG4gICAgZWxzZSBpZiAobmV3UHJvamVjdC5sZW5ndGggPiA0Nikge1xuICAgICAgZXJyb3JzLnB1c2goJ3RpdGxlIGNhbm5vdCBjb250YWluIG1vcmUgdGhhbiA0NiBjaGFyYWN0ZXJzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG5ld1Byb2plY3QudG9Mb3dlckNhc2UoKSA9PSBwcm9qZWN0c1tpXS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goJ3RpdGxlIGNhbm5vdCBtYXRjaCBleGlzdGluZyBwcm9qZWN0IHRpdGxlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkgeyAvLyBmcm9tOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZ1xuICAgIHZhciBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgdmFyIHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1c2VFeGFtcGxlRGF0YSA9ICgpID0+IHtcbiAgICBsZXQgdG9kb3NFeGFtcGxlcyA9IGV4YW1wbGVEYXRhLnRvZG9zO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3NFeGFtcGxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdG9kb3MucHVzaChcbiAgICAgICAgdG9kb0ZhY3RvcnkodW5pcXVlSWQoKSwgdG9kb3NFeGFtcGxlc1tpXS50aXRsZSwgdG9kb3NFeGFtcGxlc1tpXS5kZXNjcmlwdGlvbixcbiAgICAgICAgdG9kb3NFeGFtcGxlc1tpXS5wcmlvcml0eSwgdG9kb3NFeGFtcGxlc1tpXS5wcm9qZWN0XG4gICAgICApKTtcbiAgICB9XG5cbiAgICBsZXQgcHJvamVjdHNFeGFtcGxlcyA9IGV4YW1wbGVEYXRhLnByb2plY3RzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNFeGFtcGxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0c0V4YW1wbGVzW2ldKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2F2ZVRvZG9zTG9jYWwgPSAoKSA9PiB7XG4gICAgaWYgKGxvY2FsU3RvcmUgPT0gdHJ1ZSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RvZG9zJyk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzYXZlUHJvamVjdHNMb2NhbCA9ICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yZSA9PSB0cnVlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvamVjdHMnKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdGlhbGl6ZSwgaW5kZXhUb2RvcywgY3JlYXRlVG9kbywgZWRpdFRvZG8sIGdldFRvZG8sIGRlbGV0ZVRvZG8sXG4gICAgaW5kZXhQcm9qZWN0cywgY3JlYXRlUHJvamVjdCwgZGVsZXRlUHJvamVjdFxuICB9O1xuXG59KSgpO1xuXG5leHBvcnQgeyBtb2RlbCB9XG4iLCJpbXBvcnQgeyByZW5kZXJVdGlscyB9IGZyb20gJy4vcmVuZGVyVXRpbHMnXG5pbXBvcnQgeyBtb2RlbCB9IGZyb20gJy4vbW9kZWwnXG5pbXBvcnQgeyB0b2Rvc1JlbmRlciB9IGZyb20gJy4vdG9kb3NSZW5kZXInXG5cbmNvbnN0IHByb2plY3RzUmVuZGVyID0gKCgpID0+IHtcbiAgY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gICAgcmVuZGVyVXRpbHMuY2xlYXJDb250ZW50KCk7XG4gICAgbGV0IHByb2plY3RzID0gbW9kZWwuaW5kZXhQcm9qZWN0cygpO1xuICAgIGxldCBuYXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2QnRuJyk7XG4gICAgbGV0IHRpdGxlVyA9IGNvbnRlbnQub2Zmc2V0V2lkdGggLSA1NjtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykgeyAvLyBhZGQgcHJvamVjdCBkaXZzXG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaXRlbURpdicpO1xuICAgICAgZGl2LmlkID0gYHByb2plY3RfJHtwcm9qZWN0c1tpXX1gO1xuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbmF2QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2V5ZUljb24nKTtcbiAgICAgICAgbmF2QnRuLmNsYXNzTGlzdC5hZGQoJ2ZvbGRlcnNJY29uJyk7XG4gICAgICAgIG5hdkJ0bi50aXRsZSA9ICd2aWV3IHByb2plY3RzJztcbiAgICAgICAgdG9kb3NSZW5kZXIuaW5kZXgodGhpcy5pZCk7XG4gICAgICB9KTtcbiAgICAgIGxldCBkZWxldGVib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRlbGV0ZWJveC5jbGFzc0xpc3QuYWRkKCdkZWxldGVib3gnKTtcbiAgICAgIGRlbGV0ZWJveC5pZCA9IGBkZWxldGVfJHtwcm9qZWN0c1tpXX1gO1xuICAgICAgZGVsZXRlYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjbGlja2VkOiAke3RoaXMuaWR9YCk7XG4gICAgICAgIHJlbW92ZVByb2plY3QodGhpcy5pZCk7XG4gICAgICB9KTtcbiAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICB0aXRsZS5pbm5lckhUTUwgPSByZW5kZXJVdGlscy5maXRTdHJpbmcocHJvamVjdHNbaV0sIHRpdGxlVyk7XG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGRlbGV0ZWJveCk7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIH1cblxuICAgIC8vIGFkZCAnbmV3IHByb2plY3QnIGJ1dHRvblxuICAgIGxldCBhZGROZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGROZXcuaWQgPSAnYWRkTmV3JztcbiAgICBhZGROZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgZm9ybSgpO1xuICAgICAgYWRkTmV3LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gICAgbGV0IHBsdXNTaWduID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBsdXNTaWduLmlkID0gJ3BsdXNTaWduJztcbiAgICBwbHVzU2lnbi5pbm5lckhUTUwgPSAnKyc7XG4gICAgYWRkTmV3LmFwcGVuZENoaWxkKHBsdXNTaWduKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZE5ldyk7XG5cbiAgICAvLyBzZXQgbmF2YmFyIG1lc3NhZ2VcbiAgICBsZXQgbmF2TXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdk1zZycpO1xuICAgIG5hdk1zZy5pbm5lckhUTUwgPSAnUHJvamVjdHMnO1xuXG4gICAgLy8gb25SZXNpemU6IHJlZm9ybWF0IHRleHQgdGhhdCB3b3VsZCBvdGhlcndpc2Ugb3ZlcmZsb3dcbiAgICBkb2N1bWVudC5ib2R5Lm9ucmVzaXplID0gZnVuY3Rpb24oKXsgb25SZXNpemUoKTsgfTtcbiAgfTtcblxuICAvLyBwcml2YXRlXG5cbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGNvbnN0IG9uUmVzaXplID0gKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0cyA9IG1vZGVsLmluZGV4UHJvamVjdHMoKTtcbiAgICBsZXQgdGl0bGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGl0bGUnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGl0bGVzW2ldLmlubmVySFRNTCA9IHJlbmRlclV0aWxzLmZpdFN0cmluZyhcbiAgICAgICAgcHJvamVjdHNbaV0sIGNvbnRlbnQub2Zmc2V0V2lkdGggLSA1NlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9ICh0aGlzSWQpID0+IHtcbiAgICBsZXQgaWQgPSB0aGlzSWQuc2xpY2UoNyk7XG4gICAgaWYgKGNvbmZpcm0oYFJlYWxseSBkZWxldGUgcHJvamVjdDogJHtpZH1cXG5BTkQgYW55IHRvZG8gaXRlbXMgaXQgY29udGFpbnM/YCkgPT0gdHJ1ZSkge1xuICAgICAgbW9kZWwuZGVsZXRlUHJvamVjdChpZCk7XG4gICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0XyR7aWR9YCk7XG4gICAgICBwcm9qZWN0RGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocHJvamVjdERpdik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3Qgc3VibWl0ID0gKCkgPT4ge1xuICAgICAgbGV0IHByb2plY3QgPSBpbnB1dC52YWx1ZTtcbiAgICAgIGxldCBlcnJvcnMgPSBtb2RlbC5jcmVhdGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgaWYgKGVycm9ycy5sZW5ndGggPT0gMCkge1xuICAgICAgICBpbmRleCgpO1xuICAgICAgfSBlbHNlIGlmIChlcnJvcnNbMF0gPT0gJ25vdGhpbmcgdG8gc2F2ZScpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChmb3JtRGl2KTtcbiAgICAgICAgYWRkTmV3LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoYFNBVkUgRkFJTEVEIVxcbiogJHtlcnJvcnNbMF19YCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxldCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybURpdi5jbGFzc0xpc3QuYWRkKCdmb3JtRGl2Jyk7XG4gICAgZm9ybURpdi5pZCA9ICdwcm9qZWN0Rm9ybSc7XG4gICAgbGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgbGFiZWwuaW5uZXJIVE1MID0gJ3RpdGxlOic7XG4gICAgbGFiZWwuaWQgPSAncHJvamVjdFRpdGxlJztcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LmlkID0gJ3Byb2plY3RUaXRsZSc7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGxldCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkUHJvamVjdC50eXBlID0gJ2J1dHRvbic7IC8vIHByZXZlbnRzIGFwcCByZWxvYWQgb24gY2xpY2tcbiAgICBhZGRQcm9qZWN0LmlkID0gJ2FkZFByb2plY3QnO1xuICAgIGFkZFByb2plY3QuaW5uZXJIVE1MID0gJ2RvbmUnO1xuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdCk7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgICBmb3JtRGl2LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm1EaXYpO1xuXG4gICAgLy8gc2Nyb2xsIHBhZ2UgdG8gc2hvdyB3aG9sZSBmb3JtIGlmIGZvcm0gb3BlbnMgcGFydGx5IGJlbG93IHdpbmRvd1xuICAgIGxldCBkaXZIID0gNjg7XG4gICAgbGV0IHNwYWNlID0gd2luZG93LmlubmVySGVpZ2h0IC0gZm9ybURpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgaWYgKHNwYWNlIDwgZGl2SCkge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHdpbmRvdy5wYWdlWU9mZnNldCArIChkaXZIIC0gc3BhY2UpKTtcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzaXplJykpO1xuICAgIH1cblxuICAgIG9uUmVzaXplKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgaW5kZXggfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHByb2plY3RzUmVuZGVyIH1cbiIsIi8vIGZ1bmN0aW9ucyBjb21tb24gdG8gdG9kb3NSZW5kZXIuanMgYW5kIHByb2plY3RzUmVuZGVyLmpzXG5jb25zdCByZW5kZXJVdGlscyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmaXRTdHJpbmcgPSAoc3RyaW5nLCB3aWR0aCkgPT4ge1xuICAgIGlmIChzdHJpbmcubGVuZ3RoICogMTIgPiB3aWR0aCkge1xuICAgICAgbGV0IHJlbW92ZSA9IChNYXRoLmZsb29yKHdpZHRoIC8gMTIpIC0gMykgLSBzdHJpbmcubGVuZ3RoO1xuICAgICAgc3RyaW5nID0gc3RyaW5nLnNsaWNlKDAsIHJlbW92ZSkuY29uY2F0KCcuLi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xuXG4gIHJldHVybiB7IGNsZWFyQ29udGVudCwgZml0U3RyaW5nIH07XG59KSgpO1xuXG5leHBvcnQgeyByZW5kZXJVdGlscyB9XG4iLCJpbXBvcnQgeyByZW5kZXJVdGlscyB9IGZyb20gJy4vcmVuZGVyVXRpbHMnXG5pbXBvcnQgeyBtb2RlbCB9IGZyb20gJy4vbW9kZWwnXG5cbmNvbnN0IHRvZG9zUmVuZGVyID0gKCgpID0+IHtcbiAgY29uc3QgaW5kZXggPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QgPSBwcm9qZWN0LnNsaWNlKDgpO1xuICAgIGxldCB0b2RvcyA9IG1vZGVsLmluZGV4VG9kb3MocHJvamVjdCk7XG4gICAgcmVuZGVyVXRpbHMuY2xlYXJDb250ZW50KCk7XG5cbiAgICBsZXQgdGl0bGVXID0gY29udGVudC5vZmZzZXRXaWR0aCAtIDU2OyAvLyByZWNhbGN1bGF0ZVxuICAgIGxldCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybURpdi5jbGFzc0xpc3QuYWRkKCdmb3JtRGl2Jyk7XG4gICAgZm9ybURpdi5jbGFzc0xpc3QuYWRkKCdtZWRpdW1Gb3JtJyk7XG4gICAgZm9ybURpdi5pZCA9ICdmb3JtRGl2JztcbiAgICBmb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHsgLy8gYWRkIHRvZG8gaXRlbXNcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdpdGVtRGl2Jyk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChgJHt0b2Rvc1tpXS5wcmlvcml0eX1EaXZgKTtcbiAgICAgIGRpdi5pZCA9IGAke3RvZG9zW2ldLmlkfWA7XG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgY2hpbGRyZW4gPSBbXS5zbGljZS5jYWxsKGRpdi5jaGlsZHJlbik7XG4gICAgICAgIGlmIChjaGlsZHJlbi5qb2luKCkuaW5jbHVkZXMoJ1tvYmplY3QgSFRNTEZvcm1FbGVtZW50XScpID09IGZhbHNlKSB7XG4gICAgICAgICAgZm9ybSh0aGlzLmlkLCBwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICAgICBjaGVja2JveC5pZCA9IGBkZWxldGVfJHt0b2Rvc1tpXS5pZH1gO1xuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgbW9kZWwuZGVsZXRlVG9kbyh0aGlzLmlkLnNsaWNlKDcpKTtcbiAgICAgICAgcmVtb3ZlVG9kbyh0aGlzLmlkKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IHJlbmRlclV0aWxzLmZpdFN0cmluZyh0b2Rvc1tpXS50aXRsZSwgdGl0bGVXKTtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICB0aXRsZS5pZCA9IGB0aXRsZV8ke3RvZG9zW2ldLmlkfWA7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG5cbiAgICAvLyBhZGQgJ25ldyB0b2RvIGl0ZW0nIGJ1dHRvblxuICAgIGxldCBhZGROZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGROZXcuaWQgPSAnYWRkTmV3JztcbiAgICBhZGROZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgZm9ybSh0aGlzLmlkLCBwcm9qZWN0KTtcbiAgICAgIGFkZE5ldy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICAgIGxldCBwbHVzU2lnbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbHVzU2lnbi5pZCA9ICdwbHVzU2lnbic7XG4gICAgcGx1c1NpZ24uaW5uZXJIVE1MID0gJysnO1xuICAgIGFkZE5ldy5hcHBlbmRDaGlsZChwbHVzU2lnbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGROZXcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybURpdik7XG5cbiAgICAvLyBzZXQgbmF2YmFyIG5hdmJhciBtZXNzYWdlXG4gICAgbGV0IG5hdk1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZNc2cnKTtcbiAgICBuYXZNc2cuaW5uZXJIVE1MID0gcmVuZGVyVXRpbHMuZml0U3RyaW5nKFxuICAgICAgcHJvamVjdCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21zZ0RpdicpLm9mZnNldFdpZHRoIC0gMTJcbiAgICApO1xuXG4gICAgLy8gb25SZXNpemU6IHJlZm9ybWF0IHRleHQgdGhhdCB3b3VsZCBvdGhlcndpc2Ugb3ZlcmZsb3dcbiAgICBkb2N1bWVudC5ib2R5Lm9ucmVzaXplID0gZnVuY3Rpb24oKXsgb25SZXNpemUocHJvamVjdCk7IH07XG4gIH07XG5cbiAgLy8gcHJpdmF0ZTpcblxuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29uc3Qgb25SZXNpemUgPSAocHJvamVjdCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZNc2cnKS5pbm5lckhUTUwgPSByZW5kZXJVdGlscy5maXRTdHJpbmcoXG4gICAgICBwcm9qZWN0LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXNnRGl2Jykub2Zmc2V0V2lkdGggLSAxMlxuICAgICk7XG4gICAgbGV0IHRvZG9zID0gbW9kZWwuaW5kZXhUb2Rvcyhwcm9qZWN0KTtcbiAgICBsZXQgdGl0bGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGl0bGUnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGl0bGVzW2ldLmlubmVySFRNTCA9IHJlbmRlclV0aWxzLmZpdFN0cmluZyhcbiAgICAgICAgdG9kb3NbaV0udGl0bGUsIGNvbnRlbnQub2Zmc2V0V2lkdGggLSA1NlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0aGlzSWQpID0+IHtcbiAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzSWQpO1xuICAgIGNoZWNrQm94LmlkID0gJ2RlbGV0ZWQnO1xuICAgIGxldCBpZCA9IHRoaXNJZC5zbGljZSg3KTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHRvZG9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICB0b2RvRGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodG9kb0Rpdik7XG4gICAgfSwgMzAwKTtcbiAgfTtcblxuICBjb25zdCBmb3JtID0gKHRoaXNJZCwgdGhpc1Byb2plY3QpID0+IHtcbiAgICBjb25zdCBhZGRJbnB1dCA9IChuYW1lKSA9PiB7XG4gICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgbGFiZWwuaW5uZXJIVE1MID0gYCR7bmFtZX06YDtcbiAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBpZiAobmFtZSA9PSAnZGVzY3JpcHRpb24nKSB7XG4gICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChgJHtuYW1lfWApO1xuICAgICAgfVxuICAgICAgaW5wdXQuaWQgPSBgJHtuYW1lfSR7dGhpc0lkfWA7XG4gICAgICBpZiAodGhpc0lkICE9ICdhZGROZXcnKSB7IGlucHV0LnZhbHVlID0gbW9kZWwuZ2V0VG9kbyh0aGlzSWQpW2Ake25hbWV9YF07IH1cblxuICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRTZWxlY3Rpb24gPSAodHlwZSkgPT4ge1xuICAgICAgbGV0IG9wdGlvbnMgPSBbJ2hpZ2gnLCAnbWVkaXVtJywgJ2xvdyddO1xuICAgICAgaWYgKHR5cGUgPT0gJ3Byb2plY3QnKSB7IG9wdGlvbnMgPSBtb2RlbC5pbmRleFByb2plY3RzKCk7IH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvbnNbaV07XG4gICAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSBvcHRpb25zW2ldO1xuICAgICAgICBpZiAodGhpc0lkID09ICdhZGROZXcnKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnNbaV0gPT0gJ21lZGl1bScgfHwgb3B0aW9uc1tpXSA9PSB0aGlzUHJvamVjdCkge1xuICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKChvcHRpb25zW2ldID09IG1vZGVsLmdldFRvZG8odGhpc0lkKS5wcmlvcml0eSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKG9wdGlvbnNbaV0gPT0gbW9kZWwuZ2V0VG9kbyh0aGlzSWQpLnByb2plY3QpKSB7XG4gICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PSAncHJvamVjdCcpIHsgcHJvamVjdHMuYXBwZW5kQ2hpbGQob3B0aW9uKTsgfVxuICAgICAgICBlbHNlIHsgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTsgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBkaXZDb2xvciA9ICh0aGlzRGl2KSA9PiB7XG4gICAgICB0aGlzRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2xvd0Zvcm0nKTtcbiAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtRm9ybScpO1xuICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWdoRm9ybScpO1xuICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QuYWRkKGAke3ByaW9yaXR5LnZhbHVlfUZvcm1gKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3VibWl0ID0gKCkgPT4ge1xuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIHRpdGxlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGl0bGUke3RoaXNJZH1gKS52YWx1ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvbiR7dGhpc0lkfWApLnZhbHVlLFxuICAgICAgICBwcmlvcml0eTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByaW9yaXR5JHt0aGlzSWR9YCkudmFsdWUsXG4gICAgICAgIHByb2plY3Q6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0cyR7dGhpc0lkfWApLnZhbHVlXG4gICAgICB9XG4gICAgICBsZXQgdG9kbyA9IG1vZGVsLmdldFRvZG8odGhpc0lkKTtcblxuICAgICAgaWYgKCh0aGlzSWQgPT0gJ2FkZE5ldycgJiYgdGhpc1Byb2plY3QgPT0gJ0FsbCB0by1kbyBpdGVtcycpIHx8XG4gICAgICAgICAgdG9kby5wcm9qZWN0ID09IGRhdGEucHJvamVjdCB8fFxuICAgICAgICAgIGNvbmZpcm0oYFJlYWxseSBzYXZlIHRvIG90aGVyIHByb2plY3Q6ICR7ZGF0YS5wcm9qZWN0fT9gKSA9PSB0cnVlKSB7XG4gICAgICAgIGxldCBlcnJvcnMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXNJZCA9PSAnYWRkTmV3JykgeyBlcnJvcnMgPSBtb2RlbC5jcmVhdGVUb2RvKGRhdGEpOyB9XG4gICAgICAgIGVsc2UgeyBlcnJvcnMgPSBtb2RlbC5lZGl0VG9kbyhkYXRhLCB0aGlzSWQpOyB9XG5cbiAgICAgICAgaWYgKGVycm9yc1swXSA9PSAnbm90aGluZyB0byBzYXZlJykge1xuICAgICAgICAgIGZvcm1EaXYucmVtb3ZlQ2hpbGQodG9kb0Zvcm0pO1xuICAgICAgICAgIGZvcm1EaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICBhZGROZXcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0gZWxzZSBpZiAoKGVycm9yc1swXSA9PSAnc2FtZSBwcmlvcml0eScgfHxcbiAgICAgICAgICAgIGVycm9yc1swXSA9PSAnc2FtZSBwcmlvcml0eSBuZXcgdGl0bGUnKSAmJlxuICAgICAgICAgICAgKHRoaXNQcm9qZWN0ID09IGRhdGEucHJvamVjdCB8fCB0aGlzUHJvamVjdCA9PSAnQWxsIHRvLWRvIGl0ZW1zJykpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IHRoaXNEaXYucmVtb3ZlQ2hpbGQodG9kb0Zvcm0pOyB9LCAxMCk7XG4gICAgICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtRGl2Jyk7XG4gICAgICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKGAke3RvZG8ucHJpb3JpdHl9Rm9ybWApO1xuICAgICAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LmFkZCgnaXRlbURpdicpO1xuICAgICAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LmFkZChgJHt0b2RvLnByaW9yaXR5fURpdmApO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZWxldGVfJHt0aGlzSWR9YCkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRpdGxlXyR7dGhpc0lkfWApLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIGlmIChlcnJvcnNbMF0gPT0gJ3NhbWUgcHJpb3JpdHkgbmV3IHRpdGxlJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRpdGxlXyR7dGhpc0lkfWApLmlubmVySFRNTCA9XG4gICAgICAgICAgICByZW5kZXJVdGlscy5maXRTdHJpbmcodG9kby50aXRsZSwgY29udGVudC5vZmZzZXRXaWR0aCAtIDU2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoKGVycm9ycy5sZW5ndGggPT0gMCkgfHwgKChlcnJvcnNbMF0gPT0gJ3NhbWUgcHJpb3JpdHknIHx8XG4gICAgICAgICAgICBlcnJvcnNbMF0gPT0gJ3NhbWUgcHJpb3JpdHkgbmV3IHRpdGxlJykgJiZcbiAgICAgICAgICAgICh0aGlzUHJvamVjdCAhPSBkYXRhLnByb2plY3QgJiYgdGhpc1Byb2plY3QgIT0gJ0FsbCB0by1kbyBpdGVtcycpKSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVtb3ZlIGRpdjogJHt0aGlzRGl2fWApO1xuICAgICAgICAgIGluZGV4KGBwcm9qZWN0XyR7dGhpc1Byb2plY3R9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSAnU0FWRSBGQUlMRUQhJztcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVycm9ycy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gYFxcbiogJHtlcnJvcnNbaV19YDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWxlcnQobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRvZG9Gb3JtLmlkID0gYGZvcm0ke3RoaXNJZH1gO1xuICAgIGFkZElucHV0KCd0aXRsZScpO1xuICAgIGFkZElucHV0KCdkZXNjcmlwdGlvbicpO1xuXG4gICAgbGV0IGxhYmVsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxhYmVsc0Rpdi5jbGFzc0xpc3QuYWRkKCdzZWxlY3Rpb25EaXYnKTtcbiAgICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eUxhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lckhUTUwgPSAncHJpb3JpdHk6JztcbiAgICBsYWJlbHNEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgbGV0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgcHJvamVjdExhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMYWJlbCcpO1xuICAgIHByb2plY3RMYWJlbC5pbm5lckhUTUwgPSAncHJvamVjdDonO1xuICAgIGxhYmVsc0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgIGxldCBkb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZG9uZS50eXBlID0gJ2J1dHRvbic7IC8vIHByZXZlbnRzIGFwcCByZWxvYWQgb24gY2xpY2tcbiAgICBkb25lLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICBkb25lLmlubmVySFRNTCA9ICdkb25lJztcbiAgICBsYWJlbHNEaXYuYXBwZW5kQ2hpbGQoZG9uZSk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQobGFiZWxzRGl2KTtcblxuICAgIGxldCBzZWxlY3Rpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWxlY3Rpb25EaXYuY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uRGl2Jyk7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICBwcmlvcml0eS5pZCA9IGBwcmlvcml0eSR7dGhpc0lkfWA7XG4gICAgYWRkU2VsZWN0aW9uKCdwcmlvcml0eScpO1xuICAgIHNlbGVjdGlvbkRpdi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgbGV0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcbiAgICBwcm9qZWN0cy5pZCA9IGBwcm9qZWN0cyR7dGhpc0lkfWA7XG4gICAgYWRkU2VsZWN0aW9uKCdwcm9qZWN0Jyk7XG4gICAgc2VsZWN0aW9uRGl2LmFwcGVuZENoaWxkKHByb2plY3RzKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChzZWxlY3Rpb25EaXYpO1xuXG4gICAgbGV0IHRoaXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybURpdicpO1xuICAgIGlmICh0aGlzSWQgIT0gJ2FkZE5ldycpIHsgLy8gaW5zZXJ0ICdlZGl0JyBmb3JtIGF0IHRvZG8gaXRlbSBwb3NpdGlvblxuICAgICAgdGhpc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXNJZCk7XG4gICAgICB0aGlzRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZWRpdCh0aGlzLmlkLCBwcm9qZWN0KTtcbiAgICAgIH0pO1xuICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdpdGVtRGl2Jyk7XG4gICAgICB0aGlzRGl2LmNsYXNzTGlzdC5yZW1vdmUoYCR7bW9kZWwuZ2V0VG9kbyh0aGlzSWQpLnByaW9yaXR5fURpdmApO1xuICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QuYWRkKCdmb3JtRGl2Jyk7XG4gICAgICBkaXZDb2xvcih0aGlzRGl2KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZWxldGVfJHt0aGlzSWR9YCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0aXRsZV8ke3RoaXNJZH1gKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGRvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdCk7XG4gICAgcHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHsgZGl2Q29sb3IodGhpc0Rpdik7IH0pO1xuICAgIHRoaXNEaXYuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICAgIHRoaXNEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAvLyBzY3JvbGwgcGFnZSB0byBzaG93IHdob2xlIGZvcm0gaWYgZm9ybSBvcGVucyBwYXJ0bHkgYmVsb3cgd2luZG93XG4gICAgbGV0IGRpdkggPSAxNDM7XG4gICAgbGV0IHNwYWNlID0gd2luZG93LmlubmVySGVpZ2h0IC0gdGhpc0Rpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgaWYgKHNwYWNlIDwgZGl2SCkge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHdpbmRvdy5wYWdlWU9mZnNldCArIChkaXZIIC0gc3BhY2UpKTtcbiAgICB9XG5cbiAgICBvblJlc2l6ZSh0aGlzUHJvamVjdCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgaW5kZXggfTtcblxufSkoKTtcblxuZXhwb3J0IHsgdG9kb3NSZW5kZXIgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==