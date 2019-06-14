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

  const createTodo = (formData, project) => {
    let result = validateTodo(formData);
    if (result.length == 0) {
      if (project == 'All to-do items' ||
      confirm(`Really save to other project: ${formData.project}?`) == true) {
        if (project != 'All to-do items' && project != formData.project) {
          result.push('moved project');
        }
        todos.push(
          todoFactory(uniqueId(), formData.title, formData.description,
          formData.priority, formData.project
        ));
        saveTodosLocal();
      }
    }

    return result;
  };

  const editTodo = (formData, thisId) => {
    let result = validateTodo(formData, thisId);

    if (result[0] == 'nothing to save') { result[0] = 'same priority'; }
    else if (result.length == 0) { // save edit
      let todo = getTodo(thisId);
      if (todo.priority == formData.priority) {
        if (todo.title != formData.title) { result[0] = 'same priority new title'; }
        else { result[0] = 'same priority'; }
      }
      if (todo.project == formData.project ||
      confirm(`Really save to other project: ${formData.project}?`) == true) {
        if (todo.project != formData.project) { result.push('moved project'); }
        todo.title = formData.title;
        todo.description = formData.description;
        todo.priority = formData.priority;
        todo.project = formData.project;
        saveTodosLocal();
      }
    }

    return result;
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
    const setTitle = newTitle => title = newTitle;
    const setDescription = newDescription => description = newDescription;
    const setPriority = newPriority => priority = newPriority;
    const setProject = newProject => project = newProject;

    return {
      id, title, description, priority, project, setTitle, setDescription,
      setPriority, setProject
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
      } else {
        let projectTodos = indexTodos(data.project);
        for (let i = 0; i < projectTodos.length; i++) {
          if (projectTodos[i].title.toLowerCase() == data.title.toLowerCase()
              && (editId == false || projectTodos[i].id != editId)) {
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

    let titleW = content.offsetWidth - 56;
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
      const alertErrors = (errors) => {
        let message = 'SAVE FAILED!';
        for (let i = 0; i < errors.length; i ++) { message += `\n* ${errors[i]}`; }
        alert(message);
      };

      let data = {
        title: document.getElementById(`title${thisId}`).value,
        description: document.getElementById(`description${thisId}`).value,
        priority: document.getElementById(`priority${thisId}`).value,
        project: document.getElementById(`projects${thisId}`).value
      }
      let result = [];

      if (thisId == 'addNew') { // submit new
        result = _model__WEBPACK_IMPORTED_MODULE_1__["model"].createTodo(data, thisProject);

        if (result.length == 0) { index(`project_${thisProject}`); }
        else if (result[0] == 'nothing to save' || result[0] == 'moved project') {
          formDiv.removeChild(todoForm);
          formDiv.style.display = 'none';
          addNew.style.display = 'block'; }
        else { alertErrors(result); }
      } else { // submit edit
        result = _model__WEBPACK_IMPORTED_MODULE_1__["model"].editTodo(data, thisId);
        let todo = _model__WEBPACK_IMPORTED_MODULE_1__["model"].getTodo(thisId);

        if (result.length == 0) { index(`project_${thisProject}`); }
        else if (thisProject != 'All to-do items' &&
                  (result[0] == 'moved project' ||
                    result[1] == 'moved project')) {
          let todoDiv = document.getElementById(thisId);
          todoDiv.parentNode.removeChild(todoDiv);
        } else if (result[0] == 'same priority new title' ||
                  result[0] == 'same priority') {
          setTimeout(function(){ thisDiv.removeChild(todoForm); }, 10);
          thisDiv.classList.remove('formDiv');
          thisDiv.classList.remove(`${todo.priority}Form`);
          thisDiv.classList.add('itemDiv');
          thisDiv.classList.add(`${todo.priority}Div`);
          document.getElementById(`delete_${thisId}`).style.display = 'block';
          document.getElementById(`title_${thisId}`).style.display = 'block';
          if (result[0] == 'same priority new title') {
            document.getElementById(`title_${thisId}`).innerHTML =
            _renderUtils__WEBPACK_IMPORTED_MODULE_0__["renderUtils"].fitString(todo.title, content.offsetWidth - 56);
          }
        } else { alertErrors(result); }
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
      thisDiv.removeEventListener("click", function() { edit(this.id, project); });
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

    onResize(thisProject);
  };

  return { index };

})();




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcFJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdHNSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlclV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy90b2Rvc1JlbmRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQWlEO0FBQ047O0FBRTNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQ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OztBQUVBLFVBQVU7O0FBRVYsQ0FBQzs7QUFFcUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgcHJvamVjdHNSZW5kZXIgfSBmcm9tICcuL3Byb2plY3RzUmVuZGVyJ1xuaW1wb3J0IHsgdG9kb3NSZW5kZXIgfSBmcm9tICcuL3RvZG9zUmVuZGVyJ1xuXG5jb25zdCBhcHBSZW5kZXIgPSAoKCkgPT4ge1xuICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgIGxldCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJyk7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgLy8gc2V0IG5hdmJhciBzY3JvbGwgYmVoYXZpb3VyIChoaWRlIC8gcmV2ZWFsKVxuICAgIHZhciBwcmV2U2Nyb2xscG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICBpZiAocHJldlNjcm9sbHBvcyA+IGN1cnJlbnRTY3JvbGxQb3MpIHtcbiAgICAgICAgbmF2YmFyLnN0eWxlLnRvcCA9IFwiMFwiO1xuICAgICAgICBjb250ZW50LnN0eWxlLm1hcmdpblRvcCA9ICc1MHB4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdmJhci5zdHlsZS50b3AgPSAnLTUwcHgnO1xuICAgICAgICBjb250ZW50LnN0eWxlLm1hcmdpblRvcCA9ICcwcHgnO1xuICAgICAgfVxuICAgICAgcHJldlNjcm9sbHBvcyA9IGN1cnJlbnRTY3JvbGxQb3M7XG4gICAgfVxuXG4gICAgLy8gZGlzYWJsZTsgcmV0dXJuIGtleSBzdWJtaXRzIGZvcm1cbiAgICAvLyBmcm9tOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NjI5ODA1L2Rpc2FibGluZy1lbnRlci1rZXktZm9yLWZvcm1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUua2V5SWRlbnRpZmllcj09J1UrMDAwQSd8fCBlLmtleUlkZW50aWZpZXI9PSdFbnRlcicgfHwgZS5rZXlDb2RlPT0xMykge1xuICAgICAgICBpZiAoZS50YXJnZXQubm9kZU5hbWU9PSdJTlBVVCcgJiYgZS50YXJnZXQudHlwZT09J3RleHQnKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTt9XG4gICAgICAgIH1cbiAgICAgIH0sIHRydWUpO1xuXG4gICAgLy8gc2V0IGluaXRpYWwgbmF2QnRuIGljb24gJiBhZGQgY2xpY2sgZXZlbnRcbiAgICBsZXQgbmF2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdkJ0bicpO1xuICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCdmb2xkZXJzSWNvbicpO1xuICAgIG5hdkJ0bi50aXRsZSA9ICd2aWV3IHByb2plY3RzJztcbiAgICBuYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5hdkJ0bkNsaWNrKTtcblxuICAgIHRvZG9zUmVuZGVyLmluZGV4KCdwcm9qZWN0X0FsbCB0by1kbyBpdGVtcycpO1xuICB9O1xuXG4gIC8vIHByaXZhdGVcblxuICBjb25zdCBuYXZCdG5DbGljayA9ICgpID0+IHtcbiAgICBpZiAobmF2QnRuLmNsYXNzTGlzdC52YWx1ZSA9PSAnZm9sZGVyc0ljb24nKSB7XG4gICAgICBuYXZCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZm9sZGVyc0ljb24nKTtcbiAgICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCdleWVJY29uJyk7XG4gICAgICBuYXZCdG4udGl0bGUgPSAndmlldyBhbGwgdG9kbyBpdGVtcyBmcm9tIGFsbCBwcm9qZWN0cyc7XG4gICAgICBwcm9qZWN0c1JlbmRlci5pbmRleCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXZCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZXllSWNvbicpO1xuICAgICAgbmF2QnRuLmNsYXNzTGlzdC5hZGQoJ2ZvbGRlcnNJY29uJyk7XG4gICAgICBuYXZCdG4udGl0bGUgPSAndmlldyBwcm9qZWN0cyc7XG4gICAgICB0b2Rvc1JlbmRlci5pbmRleCgncHJvamVjdF9BbGwgdG8tZG8gaXRlbXMnKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgaW5pdGlhbGl6ZSB9O1xuXG59KSgpO1xuXG5leHBvcnQgeyBhcHBSZW5kZXIgfVxuIiwiLy8gRGVmYXVsdCBkYXRhIHRvIHVzZSB3aGVuIGxvY2FsU3RvcmFnZSB1bmF2YWlsYWJsZSAvIGNvbnRhaW5zIG5vIGFwcCBkYXRhXG5jb25zdCBleGFtcGxlRGF0YSA9ICgoKSA9PiB7XG4gIGxldCB0b2RvcyA9IFtcbiAgICB7IHRpdGxlOiAnZG8gbGF1bmRyeScsIGRlc2NyaXB0aW9uOiAncmVtZW1iZXIgamVhbnMnLFxuICAgICAgcHJpb3JpdHk6ICdoaWdoJywgcHJvamVjdDogJ3JlZ3VsYXIgc3R1ZmYnIH0sXG4gICAgeyB0aXRsZTogJ3dhc2ggY2FyJywgZGVzY3JpcHRpb246ICcnLFxuICAgICAgcHJpb3JpdHk6ICdsb3cnLCBwcm9qZWN0OiAncmVndWxhciBzdHVmZicgfSxcbiAgICB7IHRpdGxlOiAnYnV5IGNvZmZlZScsIGRlc2NyaXB0aW9uOiAnd2hvbGUgYmVhbnMnLFxuICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLCBwcm9qZWN0OiAncmVndWxhciBzdHVmZicgfSxcbiAgICB7IHRpdGxlOiAncmVzZWFyY2ggYXJyb3cgZnVuY3Rpb25zJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnbWFrZSBub3RlcyBhbmQgc2F2ZSBsaW5rcycsXG4gICAgICBwcmlvcml0eTogJ2hpZ2gnLCBwcm9qZWN0OiAnd3JpdGUgYXJ0aWNsZScgfSxcbiAgICB7IHRpdGxlOiAnd3JpdGUgYm9keSBvZiBhcnRpY2xlJywgZGVzY3JpcHRpb246ICdhY3R1YWxseSB3cml0ZSB0aGUgdGhpbmcnLFxuICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLCBwcm9qZWN0OiAnd3JpdGUgYXJ0aWNsZScgfSxcbiAgICB7IHRpdGxlOiAncHJvb2ZyZWFkIGFydGljbGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdjaGVjayBmb3IgZXJyb3JzIGFuZCBiYWQgZ3JhbW1hcicsXG4gICAgICBwcmlvcml0eTogJ2xvdycsIHByb2plY3Q6ICd3cml0ZSBhcnRpY2xlJyB9LFxuICAgIHsgdGl0bGU6ICdyZXNlYXJjaCBJSUZFcycsXG4gICAgICBkZXNjcmlwdGlvbjogJ3doYXQgYXJlIHRoZXksIGFuZCB3aGVuIGFyZSB0aGV5IHVzZWQ/JyxcbiAgICAgIHByaW9yaXR5OiAnbWVkaXVtJywgcHJvamVjdDogJ3dyaXRlIGFydGljbGUnIH0sXG4gICAgeyB0aXRsZTogJ3RvZG8gd2l0aCBleGFtcGxlIHJlYWxseSBsb25nIHRpdGxlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnZm9yIHRlc3RpbmcgbG9uZyBzdHJpbmdzJywgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgcHJvamVjdDogJ3Byb2plY3Qgd2l0aCByZWFsbHkgbG9uZyB0aXRsZScgfVxuICBdO1xuXG4gIGxldCBwcm9qZWN0cyA9IFtcbiAgICAncmVndWxhciBzdHVmZicsXG4gICAgJ3dyaXRlIGFydGljbGUnLFxuICAgICdwcm9qZWN0IHdpdGggcmVhbGx5IGxvbmcgdGl0bGUnXG4gIF07XG5cbiAgcmV0dXJuIHt0b2RvcywgcHJvamVjdHN9XG59KSgpO1xuXG5leHBvcnQgeyBleGFtcGxlRGF0YSB9XG4iLCJpbXBvcnQgeyBtb2RlbCB9IGZyb20gJy4vbW9kZWwnXG5pbXBvcnQgeyBhcHBSZW5kZXIgfSBmcm9tICcuL2FwcFJlbmRlcidcblxubW9kZWwuaW5pdGlhbGl6ZSgpO1xuYXBwUmVuZGVyLmluaXRpYWxpemUoKTtcbiIsImltcG9ydCB7IGV4YW1wbGVEYXRhIH0gZnJvbSAnLi9leGFtcGxlRGF0YSdcblxuY29uc3QgbW9kZWwgPSAoKCkgPT4ge1xuICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmUgPSBzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKTtcblxuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpIHx8ICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkge1xuICAgICAgICB1c2VFeGFtcGxlRGF0YSgpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICAgICAgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcbiAgICAgICAgaWYgKHRvZG9zID09PSB1bmRlZmluZWQgfHwgcHJvamVjdHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHVzZUV4YW1wbGVEYXRhKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykgeyB0b2Rvc1tpXS5pZCA9IHVuaXF1ZUlkKCk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB1c2VFeGFtcGxlRGF0YSgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBDLlIuVS5EOlxuXG4gIGNvbnN0IGluZGV4VG9kb3MgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHNvcnRCeVByaW9yaXR5ID0gKHVuc29ydGVkKSA9PiB7XG4gICAgICBsZXQgc29ydGVkID0gW10sIGhpZ2ggPSBbXSwgbWVkaXVtID0gW10sIGxvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bnNvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodW5zb3J0ZWRbaV0ucHJpb3JpdHkgPT0gJ2hpZ2gnKSB7IGhpZ2gucHVzaCh1bnNvcnRlZFtpXSkgfVxuICAgICAgICBlbHNlIGlmICh1bnNvcnRlZFtpXS5wcmlvcml0eSA9PSAnbWVkaXVtJykgeyBtZWRpdW0ucHVzaCh1bnNvcnRlZFtpXSkgfVxuICAgICAgICBlbHNlIHsgbG93LnB1c2godW5zb3J0ZWRbaV0pIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzb3J0ZWQgPSBoaWdoLmNvbmNhdChtZWRpdW0uY29uY2F0KGxvdykpO1xuICAgIH07XG5cbiAgICBpZiAocHJvamVjdCA9PSAnQWxsIHRvLWRvIGl0ZW1zJykge1xuICAgICAgcmV0dXJuIHNvcnRCeVByaW9yaXR5KHRvZG9zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHByb2plY3RUb2RvcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdCA9PSB0b2Rvc1tpXS5wcm9qZWN0KSB7IHByb2plY3RUb2Rvcy5wdXNoKHRvZG9zW2ldKTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNvcnRCeVByaW9yaXR5KHByb2plY3RUb2Rvcyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSAoZm9ybURhdGEsIHByb2plY3QpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gdmFsaWRhdGVUb2RvKGZvcm1EYXRhKTtcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICBpZiAocHJvamVjdCA9PSAnQWxsIHRvLWRvIGl0ZW1zJyB8fFxuICAgICAgY29uZmlybShgUmVhbGx5IHNhdmUgdG8gb3RoZXIgcHJvamVjdDogJHtmb3JtRGF0YS5wcm9qZWN0fT9gKSA9PSB0cnVlKSB7XG4gICAgICAgIGlmIChwcm9qZWN0ICE9ICdBbGwgdG8tZG8gaXRlbXMnICYmIHByb2plY3QgIT0gZm9ybURhdGEucHJvamVjdCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKCdtb3ZlZCBwcm9qZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdG9kb3MucHVzaChcbiAgICAgICAgICB0b2RvRmFjdG9yeSh1bmlxdWVJZCgpLCBmb3JtRGF0YS50aXRsZSwgZm9ybURhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgICAgZm9ybURhdGEucHJpb3JpdHksIGZvcm1EYXRhLnByb2plY3RcbiAgICAgICAgKSk7XG4gICAgICAgIHNhdmVUb2Rvc0xvY2FsKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCBlZGl0VG9kbyA9IChmb3JtRGF0YSwgdGhpc0lkKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IHZhbGlkYXRlVG9kbyhmb3JtRGF0YSwgdGhpc0lkKTtcblxuICAgIGlmIChyZXN1bHRbMF0gPT0gJ25vdGhpbmcgdG8gc2F2ZScpIHsgcmVzdWx0WzBdID0gJ3NhbWUgcHJpb3JpdHknOyB9XG4gICAgZWxzZSBpZiAocmVzdWx0Lmxlbmd0aCA9PSAwKSB7IC8vIHNhdmUgZWRpdFxuICAgICAgbGV0IHRvZG8gPSBnZXRUb2RvKHRoaXNJZCk7XG4gICAgICBpZiAodG9kby5wcmlvcml0eSA9PSBmb3JtRGF0YS5wcmlvcml0eSkge1xuICAgICAgICBpZiAodG9kby50aXRsZSAhPSBmb3JtRGF0YS50aXRsZSkgeyByZXN1bHRbMF0gPSAnc2FtZSBwcmlvcml0eSBuZXcgdGl0bGUnOyB9XG4gICAgICAgIGVsc2UgeyByZXN1bHRbMF0gPSAnc2FtZSBwcmlvcml0eSc7IH1cbiAgICAgIH1cbiAgICAgIGlmICh0b2RvLnByb2plY3QgPT0gZm9ybURhdGEucHJvamVjdCB8fFxuICAgICAgY29uZmlybShgUmVhbGx5IHNhdmUgdG8gb3RoZXIgcHJvamVjdDogJHtmb3JtRGF0YS5wcm9qZWN0fT9gKSA9PSB0cnVlKSB7XG4gICAgICAgIGlmICh0b2RvLnByb2plY3QgIT0gZm9ybURhdGEucHJvamVjdCkgeyByZXN1bHQucHVzaCgnbW92ZWQgcHJvamVjdCcpOyB9XG4gICAgICAgIHRvZG8udGl0bGUgPSBmb3JtRGF0YS50aXRsZTtcbiAgICAgICAgdG9kby5kZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmRlc2NyaXB0aW9uO1xuICAgICAgICB0b2RvLnByaW9yaXR5ID0gZm9ybURhdGEucHJpb3JpdHk7XG4gICAgICAgIHRvZG8ucHJvamVjdCA9IGZvcm1EYXRhLnByb2plY3Q7XG4gICAgICAgIHNhdmVUb2Rvc0xvY2FsKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCBnZXRUb2RvID0gKGlkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRvZG9zW2ldLmlkID09IGlkKSB7IHJldHVybiB0b2Rvc1tpXTt9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAoaWQpID0+IHtcbiAgICB0b2Rvcy5zcGxpY2UodG9kb3MuaW5kZXhPZih0b2Rvcy5maW5kKGUgPT4gZS5pZCA9PSBpZCkpLCAxKTtcbiAgICBzYXZlVG9kb3NMb2NhbCgpO1xuICB9O1xuXG4gIGNvbnN0IGluZGV4UHJvamVjdHMgPSAoKSA9PiB7IHJldHVybiBwcm9qZWN0czsgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcbiAgICBsZXQgZXJyb3JzID0gdmFsaWRhdGVQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIGlmIChlcnJvcnMubGVuZ3RoID09IDApIHtcbiAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICBzYXZlUHJvamVjdHNMb2NhbCgpO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRvZG9zW2ldLnByb2plY3QgPT0gcHJvamVjdCkge1xuICAgICAgICBkZWxldGVUb2RvKHRvZG9zW2ldLmlkKTtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgIH1cbiAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihwcm9qZWN0cy5maW5kKGUgPT4gZSA9PSBwcm9qZWN0KSksIDEpO1xuICAgIHNhdmVQcm9qZWN0c0xvY2FsKCk7XG4gICAgc2F2ZVRvZG9zTG9jYWwoKTtcbiAgfTtcblxuICAvLyBwcml2YXRlXG5cbiAgbGV0IHRvZG9zID0gW107XG4gIGxldCBwcm9qZWN0cyA9IFtdO1xuICBsZXQgbG9jYWxTdG9yZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHVuaXF1ZUlkID0gKCgpID0+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICArK2NvdW50O1xuICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgdG9kb0ZhY3RvcnkgPSAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QpID0+IHtcbiAgICBjb25zdCBzZXRUaXRsZSA9IG5ld1RpdGxlID0+IHRpdGxlID0gbmV3VGl0bGU7XG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbiA9PiBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gbmV3UHJpb3JpdHkgPT4gcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICBjb25zdCBzZXRQcm9qZWN0ID0gbmV3UHJvamVjdCA9PiBwcm9qZWN0ID0gbmV3UHJvamVjdDtcblxuICAgIHJldHVybiB7XG4gICAgICBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCwgc2V0VGl0bGUsIHNldERlc2NyaXB0aW9uLFxuICAgICAgc2V0UHJpb3JpdHksIHNldFByb2plY3RcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRlVG9kbyA9IChkYXRhLCBlZGl0SWQgPSBmYWxzZSkgPT4ge1xuICAgIGxldCBlcnJvcnMgPSBbXTtcbiAgICBsZXQgZWRpdFRvZG8gPSBudWxsO1xuXG4gICAgaWYgKGVkaXRJZCAhPSBmYWxzZSkgeyBlZGl0VG9kbyA9IGdldFRvZG8oZWRpdElkKTsgfVxuXG4gICAgaWYgKChlZGl0SWQgPT0gZmFsc2UgJiYgKGRhdGEudGl0bGUgPT0gJycgJiYgZGF0YS5kZXNjcmlwdGlvbiA9PSAnJykpIHx8XG4gICAgICAgIChlZGl0SWQgIT0gZmFsc2UgJiYgZWRpdFRvZG8udGl0bGUgPT0gZGF0YS50aXRsZSAmJlxuICAgICAgICAgIGVkaXRUb2RvLmRlc2NyaXB0aW9uID09IGRhdGEuZGVzY3JpcHRpb24gJiZcbiAgICAgICAgICBlZGl0VG9kby5wcmlvcml0eSA9PSBkYXRhLnByaW9yaXR5ICYmXG4gICAgICAgICAgZWRpdFRvZG8ucHJvamVjdCA9PSBkYXRhLnByb2plY3QpKSB7XG4gICAgICBlcnJvcnMgPSBbJ25vdGhpbmcgdG8gc2F2ZSddO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGF0YS50aXRsZSA9PSAnJykgeyBlcnJvcnMucHVzaCgndGl0bGUgY2Fubm90IGJlIGJsYW5rJyk7IH1cbiAgICAgIGVsc2UgaWYgKGRhdGEudGl0bGUubGVuZ3RoID4gNjQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goJ3RpdGxlIGNhbm5vdCBjb250YWluIG1vcmUgdGhhbiA2NCBjaGFyYWN0ZXJzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcHJvamVjdFRvZG9zID0gaW5kZXhUb2RvcyhkYXRhLnByb2plY3QpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RUb2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChwcm9qZWN0VG9kb3NbaV0udGl0bGUudG9Mb3dlckNhc2UoKSA9PSBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgJiYgKGVkaXRJZCA9PSBmYWxzZSB8fCBwcm9qZWN0VG9kb3NbaV0uaWQgIT0gZWRpdElkKSkge1xuICAgICAgICAgICAgZXJyb3JzLnB1c2goXG4gICAgICAgICAgICAgICd0aXRsZSBjYW5ub3QgbWF0Y2ggZXhpc3RpbmcgdG9kbyBpdGVtIHRpdGxlIGluIHNhbWUgcHJvamVjdCdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLmRlc2NyaXB0aW9uLmxlbmd0aCA+IDI1Nikge1xuICAgICAgICBlcnJvcnMucHVzaCgnZGVzY3JpcHRpb24gY2Fubm90IGNvbnRhaW4gbW9yZSB0aGFuIDI1NiBjaGFyYWN0ZXJzJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9ycztcbiAgfTtcblxuICBjb25zdCB2YWxpZGF0ZVByb2plY3QgPSAobmV3UHJvamVjdCkgPT4ge1xuICAgIGxldCBlcnJvcnMgPSBbXTtcbiAgICBpZiAobmV3UHJvamVjdCA9PSAnJykgeyBlcnJvcnMucHVzaCgnbm90aGluZyB0byBzYXZlJyk7IH1cbiAgICBlbHNlIGlmIChuZXdQcm9qZWN0Lmxlbmd0aCA+IDQ2KSB7XG4gICAgICBlcnJvcnMucHVzaCgndGl0bGUgY2Fubm90IGNvbnRhaW4gbW9yZSB0aGFuIDQ2IGNoYXJhY3RlcnMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobmV3UHJvamVjdC50b0xvd2VyQ2FzZSgpID09IHByb2plY3RzW2ldLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCgndGl0bGUgY2Fubm90IG1hdGNoIGV4aXN0aW5nIHByb2plY3QgdGl0bGUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG4gIH07XG5cbiAgZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7IC8vIGZyb206IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnXG4gICAgdmFyIHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICB2YXIgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaChlKSB7XG4gICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVzZUV4YW1wbGVEYXRhID0gKCkgPT4ge1xuICAgIGxldCB0b2Rvc0V4YW1wbGVzID0gZXhhbXBsZURhdGEudG9kb3M7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvc0V4YW1wbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b2Rvcy5wdXNoKFxuICAgICAgICB0b2RvRmFjdG9yeSh1bmlxdWVJZCgpLCB0b2Rvc0V4YW1wbGVzW2ldLnRpdGxlLCB0b2Rvc0V4YW1wbGVzW2ldLmRlc2NyaXB0aW9uLFxuICAgICAgICB0b2Rvc0V4YW1wbGVzW2ldLnByaW9yaXR5LCB0b2Rvc0V4YW1wbGVzW2ldLnByb2plY3RcbiAgICAgICkpO1xuICAgIH1cblxuICAgIGxldCBwcm9qZWN0c0V4YW1wbGVzID0gZXhhbXBsZURhdGEucHJvamVjdHM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0V4YW1wbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3RzRXhhbXBsZXNbaV0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzYXZlVG9kb3NMb2NhbCA9ICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yZSA9PSB0cnVlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9kb3MnKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNhdmVQcm9qZWN0c0xvY2FsID0gKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JlID09IHRydWUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9qZWN0cycpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0aWFsaXplLCBpbmRleFRvZG9zLCBjcmVhdGVUb2RvLCBlZGl0VG9kbywgZ2V0VG9kbywgZGVsZXRlVG9kbyxcbiAgICBpbmRleFByb2plY3RzLCBjcmVhdGVQcm9qZWN0LCBkZWxldGVQcm9qZWN0XG4gIH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IG1vZGVsIH1cbiIsImltcG9ydCB7IHJlbmRlclV0aWxzIH0gZnJvbSAnLi9yZW5kZXJVdGlscydcbmltcG9ydCB7IG1vZGVsIH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7IHRvZG9zUmVuZGVyIH0gZnJvbSAnLi90b2Rvc1JlbmRlcidcblxuY29uc3QgcHJvamVjdHNSZW5kZXIgPSAoKCkgPT4ge1xuICBjb25zdCBpbmRleCA9ICgpID0+IHtcbiAgICByZW5kZXJVdGlscy5jbGVhckNvbnRlbnQoKTtcbiAgICBsZXQgcHJvamVjdHMgPSBtb2RlbC5pbmRleFByb2plY3RzKCk7XG4gICAgbGV0IG5hdkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZCdG4nKTtcbiAgICBsZXQgdGl0bGVXID0gY29udGVudC5vZmZzZXRXaWR0aCAtIDU2O1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7IC8vIGFkZCBwcm9qZWN0IGRpdnNcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdpdGVtRGl2Jyk7XG4gICAgICBkaXYuaWQgPSBgcHJvamVjdF8ke3Byb2plY3RzW2ldfWA7XG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBuYXZCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZXllSWNvbicpO1xuICAgICAgICBuYXZCdG4uY2xhc3NMaXN0LmFkZCgnZm9sZGVyc0ljb24nKTtcbiAgICAgICAgbmF2QnRuLnRpdGxlID0gJ3ZpZXcgcHJvamVjdHMnO1xuICAgICAgICB0b2Rvc1JlbmRlci5pbmRleCh0aGlzLmlkKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IGRlbGV0ZWJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGVsZXRlYm94LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZWJveCcpO1xuICAgICAgZGVsZXRlYm94LmlkID0gYGRlbGV0ZV8ke3Byb2plY3RzW2ldfWA7XG4gICAgICBkZWxldGVib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coYGNsaWNrZWQ6ICR7dGhpcy5pZH1gKTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdCh0aGlzLmlkKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IHJlbmRlclV0aWxzLmZpdFN0cmluZyhwcm9qZWN0c1tpXSwgdGl0bGVXKTtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoZGVsZXRlYm94KTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgfVxuXG4gICAgLy8gYWRkICduZXcgcHJvamVjdCcgYnV0dG9uXG4gICAgbGV0IGFkZE5ldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZE5ldy5pZCA9ICdhZGROZXcnO1xuICAgIGFkZE5ldy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBmb3JtKCk7XG4gICAgICBhZGROZXcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbiAgICBsZXQgcGx1c1NpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGx1c1NpZ24uaWQgPSAncGx1c1NpZ24nO1xuICAgIHBsdXNTaWduLmlubmVySFRNTCA9ICcrJztcbiAgICBhZGROZXcuYXBwZW5kQ2hpbGQocGx1c1NpZ24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkTmV3KTtcblxuICAgIC8vIHNldCBuYXZiYXIgbWVzc2FnZVxuICAgIGxldCBuYXZNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2TXNnJyk7XG4gICAgbmF2TXNnLmlubmVySFRNTCA9ICdQcm9qZWN0cyc7XG5cbiAgICAvLyBvblJlc2l6ZTogcmVmb3JtYXQgdGV4dCB0aGF0IHdvdWxkIG90aGVyd2lzZSBvdmVyZmxvd1xuICAgIGRvY3VtZW50LmJvZHkub25yZXNpemUgPSBmdW5jdGlvbigpeyBvblJlc2l6ZSgpOyB9O1xuICB9O1xuXG4gIC8vIHByaXZhdGVcblxuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29uc3Qgb25SZXNpemUgPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3RzID0gbW9kZWwuaW5kZXhQcm9qZWN0cygpO1xuICAgIGxldCB0aXRsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aXRsZScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aXRsZXNbaV0uaW5uZXJIVE1MID0gcmVuZGVyVXRpbHMuZml0U3RyaW5nKFxuICAgICAgICBwcm9qZWN0c1tpXSwgY29udGVudC5vZmZzZXRXaWR0aCAtIDU2XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHRoaXNJZCkgPT4ge1xuICAgIGxldCBpZCA9IHRoaXNJZC5zbGljZSg3KTtcbiAgICBpZiAoY29uZmlybShgUmVhbGx5IGRlbGV0ZSBwcm9qZWN0OiAke2lkfVxcbkFORCBhbnkgdG9kbyBpdGVtcyBpdCBjb250YWlucz9gKSA9PSB0cnVlKSB7XG4gICAgICBtb2RlbC5kZWxldGVQcm9qZWN0KGlkKTtcbiAgICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByb2plY3RfJHtpZH1gKTtcbiAgICAgIHByb2plY3REaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwcm9qZWN0RGl2KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XG4gICAgICBsZXQgcHJvamVjdCA9IGlucHV0LnZhbHVlO1xuICAgICAgbGV0IGVycm9ycyA9IG1vZGVsLmNyZWF0ZVByb2plY3QocHJvamVjdCk7XG4gICAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGluZGV4KCk7XG4gICAgICB9IGVsc2UgaWYgKGVycm9yc1swXSA9PSAnbm90aGluZyB0byBzYXZlJykge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGZvcm1EaXYpO1xuICAgICAgICBhZGROZXcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChgU0FWRSBGQUlMRUQhXFxuKiAke2Vycm9yc1swXX1gKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm1EaXYnKTtcbiAgICBmb3JtRGl2LmlkID0gJ3Byb2plY3RGb3JtJztcbiAgICBsZXQgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBsYWJlbC5pbm5lckhUTUwgPSAndGl0bGU6JztcbiAgICBsYWJlbC5pZCA9ICdwcm9qZWN0VGl0bGUnO1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuaWQgPSAncHJvamVjdFRpdGxlJztcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgbGV0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0LnR5cGUgPSAnYnV0dG9uJzsgLy8gcHJldmVudHMgYXBwIHJlbG9hZCBvbiBjbGlja1xuICAgIGFkZFByb2plY3QuaWQgPSAnYWRkUHJvamVjdCc7XG4gICAgYWRkUHJvamVjdC5pbm5lckhUTUwgPSAnZG9uZSc7XG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0KTtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcblxuICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybURpdik7XG5cbiAgICAvLyBzY3JvbGwgcGFnZSB0byBzaG93IHdob2xlIGZvcm0gaWYgZm9ybSBvcGVucyBwYXJ0bHkgYmVsb3cgd2luZG93XG4gICAgbGV0IGRpdkggPSA2ODtcbiAgICBsZXQgc3BhY2UgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBmb3JtRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICBpZiAoc3BhY2UgPCBkaXZIKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgd2luZG93LnBhZ2VZT2Zmc2V0ICsgKGRpdkggLSBzcGFjZSkpO1xuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNpemUnKSk7XG4gICAgfVxuXG4gICAgb25SZXNpemUoKTtcbiAgfTtcblxuICByZXR1cm4geyBpbmRleCB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdHNSZW5kZXIgfVxuIiwiLy8gZnVuY3Rpb25zIGNvbW1vbiB0byB0b2Rvc1JlbmRlci5qcyBhbmQgcHJvamVjdHNSZW5kZXIuanNcbmNvbnN0IHJlbmRlclV0aWxzID0gKCgpID0+IHtcbiAgY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpdFN0cmluZyA9IChzdHJpbmcsIHdpZHRoKSA9PiB7XG4gICAgaWYgKHN0cmluZy5sZW5ndGggKiAxMiA+IHdpZHRoKSB7XG4gICAgICBsZXQgcmVtb3ZlID0gKE1hdGguZmxvb3Iod2lkdGggLyAxMikgLSAzKSAtIHN0cmluZy5sZW5ndGg7XG4gICAgICBzdHJpbmcgPSBzdHJpbmcuc2xpY2UoMCwgcmVtb3ZlKS5jb25jYXQoJy4uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG5cbiAgcmV0dXJuIHsgY2xlYXJDb250ZW50LCBmaXRTdHJpbmcgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHJlbmRlclV0aWxzIH1cbiIsImltcG9ydCB7IHJlbmRlclV0aWxzIH0gZnJvbSAnLi9yZW5kZXJVdGlscydcbmltcG9ydCB7IG1vZGVsIH0gZnJvbSAnLi9tb2RlbCdcblxuY29uc3QgdG9kb3NSZW5kZXIgPSAoKCkgPT4ge1xuICBjb25zdCBpbmRleCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdCA9IHByb2plY3Quc2xpY2UoOCk7XG4gICAgbGV0IHRvZG9zID0gbW9kZWwuaW5kZXhUb2Rvcyhwcm9qZWN0KTtcbiAgICByZW5kZXJVdGlscy5jbGVhckNvbnRlbnQoKTtcblxuICAgIGxldCB0aXRsZVcgPSBjb250ZW50Lm9mZnNldFdpZHRoIC0gNTY7XG4gICAgbGV0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm1EaXYnKTtcbiAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ21lZGl1bUZvcm0nKTtcbiAgICBmb3JtRGl2LmlkID0gJ2Zvcm1EaXYnO1xuICAgIGZvcm1EaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykgeyAvLyBhZGQgdG9kbyBpdGVtc1xuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW1EaXYnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGAke3RvZG9zW2ldLnByaW9yaXR5fURpdmApO1xuICAgICAgZGl2LmlkID0gYCR7dG9kb3NbaV0uaWR9YDtcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwoZGl2LmNoaWxkcmVuKTtcbiAgICAgICAgaWYgKGNoaWxkcmVuLmpvaW4oKS5pbmNsdWRlcygnW29iamVjdCBIVE1MRm9ybUVsZW1lbnRdJykgPT0gZmFsc2UpIHtcbiAgICAgICAgICBmb3JtKHRoaXMuaWQsIHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcbiAgICAgIGNoZWNrYm94LmlkID0gYGRlbGV0ZV8ke3RvZG9zW2ldLmlkfWA7XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBtb2RlbC5kZWxldGVUb2RvKHRoaXMuaWQuc2xpY2UoNykpO1xuICAgICAgICByZW1vdmVUb2RvKHRoaXMuaWQpO1xuICAgICAgfSk7XG4gICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gcmVuZGVyVXRpbHMuZml0U3RyaW5nKHRvZG9zW2ldLnRpdGxlLCB0aXRsZVcpO1xuICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgIHRpdGxlLmlkID0gYHRpdGxlXyR7dG9kb3NbaV0uaWR9YDtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cblxuICAgIC8vIGFkZCAnbmV3IHRvZG8gaXRlbScgYnV0dG9uXG4gICAgbGV0IGFkZE5ldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZE5ldy5pZCA9ICdhZGROZXcnO1xuICAgIGFkZE5ldy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBmb3JtKHRoaXMuaWQsIHByb2plY3QpO1xuICAgICAgYWRkTmV3LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gICAgbGV0IHBsdXNTaWduID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBsdXNTaWduLmlkID0gJ3BsdXNTaWduJztcbiAgICBwbHVzU2lnbi5pbm5lckhUTUwgPSAnKyc7XG4gICAgYWRkTmV3LmFwcGVuZENoaWxkKHBsdXNTaWduKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZE5ldyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtRGl2KTtcblxuICAgIC8vIHNldCBuYXZiYXIgbmF2YmFyIG1lc3NhZ2VcbiAgICBsZXQgbmF2TXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdk1zZycpO1xuICAgIG5hdk1zZy5pbm5lckhUTUwgPSByZW5kZXJVdGlscy5maXRTdHJpbmcoXG4gICAgICBwcm9qZWN0LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXNnRGl2Jykub2Zmc2V0V2lkdGggLSAxMlxuICAgICk7XG5cbiAgICAvLyBvblJlc2l6ZTogcmVmb3JtYXQgdGV4dCB0aGF0IHdvdWxkIG90aGVyd2lzZSBvdmVyZmxvd1xuICAgIGRvY3VtZW50LmJvZHkub25yZXNpemUgPSBmdW5jdGlvbigpeyBvblJlc2l6ZShwcm9qZWN0KTsgfTtcbiAgfTtcblxuICAvLyBwcml2YXRlOlxuXG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBvblJlc2l6ZSA9IChwcm9qZWN0KSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdk1zZycpLmlubmVySFRNTCA9IHJlbmRlclV0aWxzLmZpdFN0cmluZyhcbiAgICAgIHByb2plY3QsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtc2dEaXYnKS5vZmZzZXRXaWR0aCAtIDEyXG4gICAgKTtcbiAgICBsZXQgdG9kb3MgPSBtb2RlbC5pbmRleFRvZG9zKHByb2plY3QpO1xuICAgIGxldCB0aXRsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aXRsZScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aXRsZXNbaV0uaW5uZXJIVE1MID0gcmVuZGVyVXRpbHMuZml0U3RyaW5nKFxuICAgICAgICB0b2Rvc1tpXS50aXRsZSwgY29udGVudC5vZmZzZXRXaWR0aCAtIDU2XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW1vdmVUb2RvID0gKHRoaXNJZCkgPT4ge1xuICAgIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXNJZCk7XG4gICAgY2hlY2tCb3guaWQgPSAnZGVsZXRlZCc7XG4gICAgbGV0IGlkID0gdGhpc0lkLnNsaWNlKDcpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgdG9kb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgIHRvZG9EaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0b2RvRGl2KTtcbiAgICB9LCAzMDApO1xuICB9O1xuXG4gIGNvbnN0IGZvcm0gPSAodGhpc0lkLCB0aGlzUHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGFkZElucHV0ID0gKG5hbWUpID0+IHtcbiAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICBsYWJlbC5pbm5lckhUTUwgPSBgJHtuYW1lfTpgO1xuICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlmIChuYW1lID09ICdkZXNjcmlwdGlvbicpIHtcbiAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKGAke25hbWV9YCk7XG4gICAgICB9XG4gICAgICBpbnB1dC5pZCA9IGAke25hbWV9JHt0aGlzSWR9YDtcbiAgICAgIGlmICh0aGlzSWQgIT0gJ2FkZE5ldycpIHsgaW5wdXQudmFsdWUgPSBtb2RlbC5nZXRUb2RvKHRoaXNJZClbYCR7bmFtZX1gXTsgfVxuXG4gICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFNlbGVjdGlvbiA9ICh0eXBlKSA9PiB7XG4gICAgICBsZXQgb3B0aW9ucyA9IFsnaGlnaCcsICdtZWRpdW0nLCAnbG93J107XG4gICAgICBpZiAodHlwZSA9PSAncHJvamVjdCcpIHsgb3B0aW9ucyA9IG1vZGVsLmluZGV4UHJvamVjdHMoKTsgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uc1tpXTtcbiAgICAgICAgb3B0aW9uLmlubmVySFRNTCA9IG9wdGlvbnNbaV07XG4gICAgICAgIGlmICh0aGlzSWQgPT0gJ2FkZE5ldycpIHtcbiAgICAgICAgICBpZiAob3B0aW9uc1tpXSA9PSAnbWVkaXVtJyB8fCBvcHRpb25zW2ldID09IHRoaXNQcm9qZWN0KSB7XG4gICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoKG9wdGlvbnNbaV0gPT0gbW9kZWwuZ2V0VG9kbyh0aGlzSWQpLnByaW9yaXR5KSB8fFxuICAgICAgICAgICAgICAgICAgICAob3B0aW9uc1tpXSA9PSBtb2RlbC5nZXRUb2RvKHRoaXNJZCkucHJvamVjdCkpIHtcbiAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09ICdwcm9qZWN0JykgeyBwcm9qZWN0cy5hcHBlbmRDaGlsZChvcHRpb24pOyB9XG4gICAgICAgIGVsc2UgeyBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pOyB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGRpdkNvbG9yID0gKHRoaXNEaXYpID0+IHtcbiAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LnJlbW92ZSgnbG93Rm9ybScpO1xuICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdtZWRpdW1Gb3JtJyk7XG4gICAgICB0aGlzRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hGb3JtJyk7XG4gICAgICB0aGlzRGl2LmNsYXNzTGlzdC5hZGQoYCR7cHJpb3JpdHkudmFsdWV9Rm9ybWApO1xuICAgIH07XG5cbiAgICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBhbGVydEVycm9ycyA9IChlcnJvcnMpID0+IHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSAnU0FWRSBGQUlMRUQhJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlcnJvcnMubGVuZ3RoOyBpICsrKSB7IG1lc3NhZ2UgKz0gYFxcbiogJHtlcnJvcnNbaV19YDsgfVxuICAgICAgICBhbGVydChtZXNzYWdlKTtcbiAgICAgIH07XG5cbiAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICB0aXRsZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRpdGxlJHt0aGlzSWR9YCkudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb24ke3RoaXNJZH1gKS52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcmlvcml0eSR7dGhpc0lkfWApLnZhbHVlLFxuICAgICAgICBwcm9qZWN0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdHMke3RoaXNJZH1gKS52YWx1ZVxuICAgICAgfVxuICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgICBpZiAodGhpc0lkID09ICdhZGROZXcnKSB7IC8vIHN1Ym1pdCBuZXdcbiAgICAgICAgcmVzdWx0ID0gbW9kZWwuY3JlYXRlVG9kbyhkYXRhLCB0aGlzUHJvamVjdCk7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT0gMCkgeyBpbmRleChgcHJvamVjdF8ke3RoaXNQcm9qZWN0fWApOyB9XG4gICAgICAgIGVsc2UgaWYgKHJlc3VsdFswXSA9PSAnbm90aGluZyB0byBzYXZlJyB8fCByZXN1bHRbMF0gPT0gJ21vdmVkIHByb2plY3QnKSB7XG4gICAgICAgICAgZm9ybURpdi5yZW1vdmVDaGlsZCh0b2RvRm9ybSk7XG4gICAgICAgICAgZm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIGFkZE5ldy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgfVxuICAgICAgICBlbHNlIHsgYWxlcnRFcnJvcnMocmVzdWx0KTsgfVxuICAgICAgfSBlbHNlIHsgLy8gc3VibWl0IGVkaXRcbiAgICAgICAgcmVzdWx0ID0gbW9kZWwuZWRpdFRvZG8oZGF0YSwgdGhpc0lkKTtcbiAgICAgICAgbGV0IHRvZG8gPSBtb2RlbC5nZXRUb2RvKHRoaXNJZCk7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT0gMCkgeyBpbmRleChgcHJvamVjdF8ke3RoaXNQcm9qZWN0fWApOyB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXNQcm9qZWN0ICE9ICdBbGwgdG8tZG8gaXRlbXMnICYmXG4gICAgICAgICAgICAgICAgICAocmVzdWx0WzBdID09ICdtb3ZlZCBwcm9qZWN0JyB8fFxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbMV0gPT0gJ21vdmVkIHByb2plY3QnKSkge1xuICAgICAgICAgIGxldCB0b2RvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpc0lkKTtcbiAgICAgICAgICB0b2RvRGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodG9kb0Rpdik7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0WzBdID09ICdzYW1lIHByaW9yaXR5IG5ldyB0aXRsZScgfHxcbiAgICAgICAgICAgICAgICAgIHJlc3VsdFswXSA9PSAnc2FtZSBwcmlvcml0eScpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IHRoaXNEaXYucmVtb3ZlQ2hpbGQodG9kb0Zvcm0pOyB9LCAxMCk7XG4gICAgICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtRGl2Jyk7XG4gICAgICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKGAke3RvZG8ucHJpb3JpdHl9Rm9ybWApO1xuICAgICAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LmFkZCgnaXRlbURpdicpO1xuICAgICAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LmFkZChgJHt0b2RvLnByaW9yaXR5fURpdmApO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZWxldGVfJHt0aGlzSWR9YCkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRpdGxlXyR7dGhpc0lkfWApLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIGlmIChyZXN1bHRbMF0gPT0gJ3NhbWUgcHJpb3JpdHkgbmV3IHRpdGxlJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRpdGxlXyR7dGhpc0lkfWApLmlubmVySFRNTCA9XG4gICAgICAgICAgICByZW5kZXJVdGlscy5maXRTdHJpbmcodG9kby50aXRsZSwgY29udGVudC5vZmZzZXRXaWR0aCAtIDU2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7IGFsZXJ0RXJyb3JzKHJlc3VsdCk7IH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRvZG9Gb3JtLmlkID0gYGZvcm0ke3RoaXNJZH1gO1xuICAgIGFkZElucHV0KCd0aXRsZScpO1xuICAgIGFkZElucHV0KCdkZXNjcmlwdGlvbicpO1xuXG4gICAgbGV0IGxhYmVsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxhYmVsc0Rpdi5jbGFzc0xpc3QuYWRkKCdzZWxlY3Rpb25EaXYnKTtcbiAgICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eUxhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lckhUTUwgPSAncHJpb3JpdHk6JztcbiAgICBsYWJlbHNEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgbGV0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgcHJvamVjdExhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMYWJlbCcpO1xuICAgIHByb2plY3RMYWJlbC5pbm5lckhUTUwgPSAncHJvamVjdDonO1xuICAgIGxhYmVsc0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgIGxldCBkb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZG9uZS50eXBlID0gJ2J1dHRvbic7IC8vIHByZXZlbnRzIGFwcCByZWxvYWQgb24gY2xpY2tcbiAgICBkb25lLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICBkb25lLmlubmVySFRNTCA9ICdkb25lJztcbiAgICBsYWJlbHNEaXYuYXBwZW5kQ2hpbGQoZG9uZSk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQobGFiZWxzRGl2KTtcblxuICAgIGxldCBzZWxlY3Rpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWxlY3Rpb25EaXYuY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uRGl2Jyk7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICBwcmlvcml0eS5pZCA9IGBwcmlvcml0eSR7dGhpc0lkfWA7XG4gICAgYWRkU2VsZWN0aW9uKCdwcmlvcml0eScpO1xuICAgIHNlbGVjdGlvbkRpdi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgbGV0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcbiAgICBwcm9qZWN0cy5pZCA9IGBwcm9qZWN0cyR7dGhpc0lkfWA7XG4gICAgYWRkU2VsZWN0aW9uKCdwcm9qZWN0Jyk7XG4gICAgc2VsZWN0aW9uRGl2LmFwcGVuZENoaWxkKHByb2plY3RzKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChzZWxlY3Rpb25EaXYpO1xuXG4gICAgbGV0IHRoaXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybURpdicpO1xuICAgIGlmICh0aGlzSWQgIT0gJ2FkZE5ldycpIHsgLy8gaW5zZXJ0ICdlZGl0JyBmb3JtIGF0IHRvZG8gaXRlbSBwb3NpdGlvblxuICAgICAgdGhpc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXNJZCk7XG4gICAgICB0aGlzRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgZWRpdCh0aGlzLmlkLCBwcm9qZWN0KTsgfSk7XG4gICAgICB0aGlzRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2l0ZW1EaXYnKTtcbiAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LnJlbW92ZShgJHttb2RlbC5nZXRUb2RvKHRoaXNJZCkucHJpb3JpdHl9RGl2YCk7XG4gICAgICB0aGlzRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm1EaXYnKTtcbiAgICAgIGRpdkNvbG9yKHRoaXNEaXYpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlbGV0ZV8ke3RoaXNJZH1gKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRpdGxlXyR7dGhpc0lkfWApLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgZG9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0KTtcbiAgICBwcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkgeyBkaXZDb2xvcih0aGlzRGl2KTsgfSk7XG4gICAgdGhpc0Rpdi5hcHBlbmRDaGlsZCh0b2RvRm9ybSk7XG4gICAgdGhpc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgIC8vIHNjcm9sbCBwYWdlIHRvIHNob3cgd2hvbGUgZm9ybSBpZiBmb3JtIG9wZW5zIHBhcnRseSBiZWxvdyB3aW5kb3dcbiAgICBsZXQgZGl2SCA9IDE0MztcbiAgICBsZXQgc3BhY2UgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICBpZiAoc3BhY2UgPCBkaXZIKSB7IHdpbmRvdy5zY3JvbGxUbygwLCB3aW5kb3cucGFnZVlPZmZzZXQgKyAoZGl2SCAtIHNwYWNlKSk7IH1cblxuICAgIG9uUmVzaXplKHRoaXNQcm9qZWN0KTtcbiAgfTtcblxuICByZXR1cm4geyBpbmRleCB9O1xuXG59KSgpO1xuXG5leHBvcnQgeyB0b2Rvc1JlbmRlciB9XG4iXSwic291cmNlUm9vdCI6IiJ9