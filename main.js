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
    { title: 'investigate engine idle issue',
      description: 'engine idles unevenly and stalls when cold',
      priority: 'medium', project: 'car' },
    { title: 'buy new tyres',
      description: 'front tyres have low tread on outside edges',
      priority: 'medium', project: 'car' },
    { title: 'wash car', description: '', priority: 'low', project: 'car' }
  ];

  let projects = [
    'regular stuff',
    'write article',
    'car'
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
      if (todos[i].id == id) { return todos[i]; }
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
    let editTodo = editId == false ? null : getTodo(editId);

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
      let options = type == 'project' ? _model__WEBPACK_IMPORTED_MODULE_1__["model"].indexProjects() :
        ['high', 'medium', 'low'];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcFJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdHNSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlclV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy90b2Rvc1JlbmRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQWlEO0FBQ047O0FBRTNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQ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QUFFQSxVQUFVOztBQUVWLENBQUM7O0FBRXFCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHByb2plY3RzUmVuZGVyIH0gZnJvbSAnLi9wcm9qZWN0c1JlbmRlcidcbmltcG9ydCB7IHRvZG9zUmVuZGVyIH0gZnJvbSAnLi90b2Rvc1JlbmRlcidcblxuY29uc3QgYXBwUmVuZGVyID0gKCgpID0+IHtcbiAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICBsZXQgbmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhcicpO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIC8vIHNldCBuYXZiYXIgc2Nyb2xsIGJlaGF2aW91ciAoaGlkZSAvIHJldmVhbClcbiAgICB2YXIgcHJldlNjcm9sbHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgaWYgKHByZXZTY3JvbGxwb3MgPiBjdXJyZW50U2Nyb2xsUG9zKSB7XG4gICAgICAgIG5hdmJhci5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgICAgY29udGVudC5zdHlsZS5tYXJnaW5Ub3AgPSAnNTBweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYXZiYXIuc3R5bGUudG9wID0gJy01MHB4JztcbiAgICAgICAgY29udGVudC5zdHlsZS5tYXJnaW5Ub3AgPSAnMHB4JztcbiAgICAgIH1cbiAgICAgIHByZXZTY3JvbGxwb3MgPSBjdXJyZW50U2Nyb2xsUG9zO1xuICAgIH1cblxuICAgIC8vIGRpc2FibGU7IHJldHVybiBrZXkgc3VibWl0cyBmb3JtXG4gICAgLy8gZnJvbTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTYyOTgwNS9kaXNhYmxpbmctZW50ZXIta2V5LWZvci1mb3JtXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLmtleUlkZW50aWZpZXI9PSdVKzAwMEEnfHwgZS5rZXlJZGVudGlmaWVyPT0nRW50ZXInIHx8IGUua2V5Q29kZT09MTMpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lPT0nSU5QVVQnICYmIGUudGFyZ2V0LnR5cGU9PSd0ZXh0Jykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7fVxuICAgICAgICB9XG4gICAgICB9LCB0cnVlKTtcblxuICAgIC8vIHNldCBpbml0aWFsIG5hdkJ0biBpY29uICYgYWRkIGNsaWNrIGV2ZW50XG4gICAgbGV0IG5hdkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZCdG4nKTtcbiAgICBuYXZCdG4uY2xhc3NMaXN0LmFkZCgnZm9sZGVyc0ljb24nKTtcbiAgICBuYXZCdG4udGl0bGUgPSAndmlldyBwcm9qZWN0cyc7XG4gICAgbmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuYXZCdG5DbGljayk7XG5cbiAgICB0b2Rvc1JlbmRlci5pbmRleCgncHJvamVjdF9BbGwgdG8tZG8gaXRlbXMnKTtcbiAgfTtcblxuICAvLyBwcml2YXRlXG5cbiAgY29uc3QgbmF2QnRuQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKG5hdkJ0bi5jbGFzc0xpc3QudmFsdWUgPT0gJ2ZvbGRlcnNJY29uJykge1xuICAgICAgbmF2QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvbGRlcnNJY29uJyk7XG4gICAgICBuYXZCdG4uY2xhc3NMaXN0LmFkZCgnZXllSWNvbicpO1xuICAgICAgbmF2QnRuLnRpdGxlID0gJ3ZpZXcgYWxsIHRvZG8gaXRlbXMgZnJvbSBhbGwgcHJvamVjdHMnO1xuICAgICAgcHJvamVjdHNSZW5kZXIuaW5kZXgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmF2QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2V5ZUljb24nKTtcbiAgICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCdmb2xkZXJzSWNvbicpO1xuICAgICAgbmF2QnRuLnRpdGxlID0gJ3ZpZXcgcHJvamVjdHMnO1xuICAgICAgdG9kb3NSZW5kZXIuaW5kZXgoJ3Byb2plY3RfQWxsIHRvLWRvIGl0ZW1zJyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGluaXRpYWxpemUgfTtcblxufSkoKTtcblxuZXhwb3J0IHsgYXBwUmVuZGVyIH1cbiIsIi8vIERlZmF1bHQgZGF0YSB0byB1c2Ugd2hlbiBsb2NhbFN0b3JhZ2UgdW5hdmFpbGFibGUgLyBjb250YWlucyBubyBhcHAgZGF0YVxuY29uc3QgZXhhbXBsZURhdGEgPSAoKCkgPT4ge1xuICBsZXQgdG9kb3MgPSBbXG4gICAgeyB0aXRsZTogJ2RvIGxhdW5kcnknLCBkZXNjcmlwdGlvbjogJ3JlbWVtYmVyIGplYW5zJyxcbiAgICAgIHByaW9yaXR5OiAnaGlnaCcsIHByb2plY3Q6ICdyZWd1bGFyIHN0dWZmJyB9LFxuICAgIHsgdGl0bGU6ICdidXkgY29mZmVlJywgZGVzY3JpcHRpb246ICd3aG9sZSBiZWFucycsXG4gICAgICBwcmlvcml0eTogJ21lZGl1bScsIHByb2plY3Q6ICdyZWd1bGFyIHN0dWZmJyB9LFxuICAgIHsgdGl0bGU6ICdyZXNlYXJjaCBhcnJvdyBmdW5jdGlvbnMnLFxuICAgICAgZGVzY3JpcHRpb246ICdtYWtlIG5vdGVzIGFuZCBzYXZlIGxpbmtzJyxcbiAgICAgIHByaW9yaXR5OiAnaGlnaCcsIHByb2plY3Q6ICd3cml0ZSBhcnRpY2xlJyB9LFxuICAgIHsgdGl0bGU6ICd3cml0ZSBib2R5IG9mIGFydGljbGUnLCBkZXNjcmlwdGlvbjogJ2FjdHVhbGx5IHdyaXRlIHRoZSB0aGluZycsXG4gICAgICBwcmlvcml0eTogJ21lZGl1bScsIHByb2plY3Q6ICd3cml0ZSBhcnRpY2xlJyB9LFxuICAgIHsgdGl0bGU6ICdwcm9vZnJlYWQgYXJ0aWNsZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ2NoZWNrIGZvciBlcnJvcnMgYW5kIGJhZCBncmFtbWFyJyxcbiAgICAgIHByaW9yaXR5OiAnbG93JywgcHJvamVjdDogJ3dyaXRlIGFydGljbGUnIH0sXG4gICAgeyB0aXRsZTogJ3Jlc2VhcmNoIElJRkVzJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnd2hhdCBhcmUgdGhleSwgYW5kIHdoZW4gYXJlIHRoZXkgdXNlZD8nLFxuICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLCBwcm9qZWN0OiAnd3JpdGUgYXJ0aWNsZScgfSxcbiAgICB7IHRpdGxlOiAnaW52ZXN0aWdhdGUgZW5naW5lIGlkbGUgaXNzdWUnLFxuICAgICAgZGVzY3JpcHRpb246ICdlbmdpbmUgaWRsZXMgdW5ldmVubHkgYW5kIHN0YWxscyB3aGVuIGNvbGQnLFxuICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLCBwcm9qZWN0OiAnY2FyJyB9LFxuICAgIHsgdGl0bGU6ICdidXkgbmV3IHR5cmVzJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnZnJvbnQgdHlyZXMgaGF2ZSBsb3cgdHJlYWQgb24gb3V0c2lkZSBlZGdlcycsXG4gICAgICBwcmlvcml0eTogJ21lZGl1bScsIHByb2plY3Q6ICdjYXInIH0sXG4gICAgeyB0aXRsZTogJ3dhc2ggY2FyJywgZGVzY3JpcHRpb246ICcnLCBwcmlvcml0eTogJ2xvdycsIHByb2plY3Q6ICdjYXInIH1cbiAgXTtcblxuICBsZXQgcHJvamVjdHMgPSBbXG4gICAgJ3JlZ3VsYXIgc3R1ZmYnLFxuICAgICd3cml0ZSBhcnRpY2xlJyxcbiAgICAnY2FyJ1xuICBdO1xuXG4gIHJldHVybiB7dG9kb3MsIHByb2plY3RzfVxufSkoKTtcblxuZXhwb3J0IHsgZXhhbXBsZURhdGEgfVxuIiwiaW1wb3J0IHsgbW9kZWwgfSBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IHsgYXBwUmVuZGVyIH0gZnJvbSAnLi9hcHBSZW5kZXInXG5cbm1vZGVsLmluaXRpYWxpemUoKTtcbmFwcFJlbmRlci5pbml0aWFsaXplKCk7XG4iLCJpbXBvcnQgeyBleGFtcGxlRGF0YSB9IGZyb20gJy4vZXhhbXBsZURhdGEnXG5cbmNvbnN0IG1vZGVsID0gKCgpID0+IHtcbiAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JlID0gc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJyk7XG5cbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSB8fCAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHtcbiAgICAgICAgdXNlRXhhbXBsZURhdGEoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gICAgICAgIHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG4gICAgICAgIGlmICh0b2RvcyA9PT0gdW5kZWZpbmVkIHx8IHByb2plY3RzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB1c2VFeGFtcGxlRGF0YSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHsgdG9kb3NbaV0uaWQgPSB1bmlxdWVJZCgpOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdXNlRXhhbXBsZURhdGEoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQy5SLlUuRDpcblxuICBjb25zdCBpbmRleFRvZG9zID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBzb3J0QnlQcmlvcml0eSA9ICh1bnNvcnRlZCkgPT4ge1xuICAgICAgbGV0IHNvcnRlZCA9IFtdLCBoaWdoID0gW10sIG1lZGl1bSA9IFtdLCBsb3cgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5zb3J0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHVuc29ydGVkW2ldLnByaW9yaXR5ID09ICdoaWdoJykgeyBoaWdoLnB1c2godW5zb3J0ZWRbaV0pIH1cbiAgICAgICAgZWxzZSBpZiAodW5zb3J0ZWRbaV0ucHJpb3JpdHkgPT0gJ21lZGl1bScpIHsgbWVkaXVtLnB1c2godW5zb3J0ZWRbaV0pIH1cbiAgICAgICAgZWxzZSB7IGxvdy5wdXNoKHVuc29ydGVkW2ldKSB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc29ydGVkID0gaGlnaC5jb25jYXQobWVkaXVtLmNvbmNhdChsb3cpKTtcbiAgICB9O1xuXG4gICAgaWYgKHByb2plY3QgPT0gJ0FsbCB0by1kbyBpdGVtcycpIHtcbiAgICAgIHJldHVybiBzb3J0QnlQcmlvcml0eSh0b2Rvcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwcm9qZWN0VG9kb3MgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByb2plY3QgPT0gdG9kb3NbaV0ucHJvamVjdCkgeyBwcm9qZWN0VG9kb3MucHVzaCh0b2Rvc1tpXSk7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzb3J0QnlQcmlvcml0eShwcm9qZWN0VG9kb3MpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjcmVhdGVUb2RvID0gKGZvcm1EYXRhLCBwcm9qZWN0KSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IHZhbGlkYXRlVG9kbyhmb3JtRGF0YSk7XG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPT0gMCkge1xuICAgICAgaWYgKHByb2plY3QgPT0gJ0FsbCB0by1kbyBpdGVtcycgfHxcbiAgICAgIGNvbmZpcm0oYFJlYWxseSBzYXZlIHRvIG90aGVyIHByb2plY3Q6ICR7Zm9ybURhdGEucHJvamVjdH0/YCkgPT0gdHJ1ZSkge1xuICAgICAgICBpZiAocHJvamVjdCAhPSAnQWxsIHRvLWRvIGl0ZW1zJyAmJiBwcm9qZWN0ICE9IGZvcm1EYXRhLnByb2plY3QpIHtcbiAgICAgICAgICByZXN1bHQucHVzaCgnbW92ZWQgcHJvamVjdCcpO1xuICAgICAgICB9XG4gICAgICAgIHRvZG9zLnB1c2goXG4gICAgICAgICAgdG9kb0ZhY3RvcnkodW5pcXVlSWQoKSwgZm9ybURhdGEudGl0bGUsIGZvcm1EYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIGZvcm1EYXRhLnByaW9yaXR5LCBmb3JtRGF0YS5wcm9qZWN0XG4gICAgICAgICkpO1xuICAgICAgICBzYXZlVG9kb3NMb2NhbCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRvZG8gPSAoZm9ybURhdGEsIHRoaXNJZCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSB2YWxpZGF0ZVRvZG8oZm9ybURhdGEsIHRoaXNJZCk7XG5cbiAgICBpZiAocmVzdWx0WzBdID09ICdub3RoaW5nIHRvIHNhdmUnKSB7IHJlc3VsdFswXSA9ICdzYW1lIHByaW9yaXR5JzsgfVxuICAgIGVsc2UgaWYgKHJlc3VsdC5sZW5ndGggPT0gMCkgeyAvLyBzYXZlIGVkaXRcbiAgICAgIGxldCB0b2RvID0gZ2V0VG9kbyh0aGlzSWQpO1xuICAgICAgaWYgKHRvZG8ucHJpb3JpdHkgPT0gZm9ybURhdGEucHJpb3JpdHkpIHtcbiAgICAgICAgaWYgKHRvZG8udGl0bGUgIT0gZm9ybURhdGEudGl0bGUpIHsgcmVzdWx0WzBdID0gJ3NhbWUgcHJpb3JpdHkgbmV3IHRpdGxlJzsgfVxuICAgICAgICBlbHNlIHsgcmVzdWx0WzBdID0gJ3NhbWUgcHJpb3JpdHknOyB9XG4gICAgICB9XG4gICAgICBpZiAodG9kby5wcm9qZWN0ID09IGZvcm1EYXRhLnByb2plY3QgfHxcbiAgICAgIGNvbmZpcm0oYFJlYWxseSBzYXZlIHRvIG90aGVyIHByb2plY3Q6ICR7Zm9ybURhdGEucHJvamVjdH0/YCkgPT0gdHJ1ZSkge1xuICAgICAgICBpZiAodG9kby5wcm9qZWN0ICE9IGZvcm1EYXRhLnByb2plY3QpIHsgcmVzdWx0LnB1c2goJ21vdmVkIHByb2plY3QnKTsgfVxuICAgICAgICB0b2RvLnRpdGxlID0gZm9ybURhdGEudGl0bGU7XG4gICAgICAgIHRvZG8uZGVzY3JpcHRpb24gPSBmb3JtRGF0YS5kZXNjcmlwdGlvbjtcbiAgICAgICAgdG9kby5wcmlvcml0eSA9IGZvcm1EYXRhLnByaW9yaXR5O1xuICAgICAgICB0b2RvLnByb2plY3QgPSBmb3JtRGF0YS5wcm9qZWN0O1xuICAgICAgICBzYXZlVG9kb3NMb2NhbCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0VG9kbyA9IChpZCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0b2Rvc1tpXS5pZCA9PSBpZCkgeyByZXR1cm4gdG9kb3NbaV07IH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9IChpZCkgPT4ge1xuICAgIHRvZG9zLnNwbGljZSh0b2Rvcy5pbmRleE9mKHRvZG9zLmZpbmQoZSA9PiBlLmlkID09IGlkKSksIDEpO1xuICAgIHNhdmVUb2Rvc0xvY2FsKCk7XG4gIH07XG5cbiAgY29uc3QgaW5kZXhQcm9qZWN0cyA9ICgpID0+IHsgcmV0dXJuIHByb2plY3RzOyB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmV3UHJvamVjdCkgPT4ge1xuICAgIGxldCBlcnJvcnMgPSB2YWxpZGF0ZVByb2plY3QobmV3UHJvamVjdCk7XG4gICAgaWYgKGVycm9ycy5sZW5ndGggPT0gMCkge1xuICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgIHNhdmVQcm9qZWN0c0xvY2FsKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9ycztcbiAgfTtcblxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodG9kb3NbaV0ucHJvamVjdCA9PSBwcm9qZWN0KSB7XG4gICAgICAgIGRlbGV0ZVRvZG8odG9kb3NbaV0uaWQpO1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgfVxuICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKHByb2plY3RzLmZpbmQoZSA9PiBlID09IHByb2plY3QpKSwgMSk7XG4gICAgc2F2ZVByb2plY3RzTG9jYWwoKTtcbiAgICBzYXZlVG9kb3NMb2NhbCgpO1xuICB9O1xuXG4gIC8vIHByaXZhdGVcblxuICBsZXQgdG9kb3MgPSBbXTtcbiAgbGV0IHByb2plY3RzID0gW107XG4gIGxldCBsb2NhbFN0b3JlID0gZmFsc2U7XG5cbiAgY29uc3QgdW5pcXVlSWQgPSAoKCkgPT4ge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICsrY291bnQ7XG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBjb25zdCB0b2RvRmFjdG9yeSA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHNldFRpdGxlID0gbmV3VGl0bGUgPT4gdGl0bGUgPSBuZXdUaXRsZTtcbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uID0+IGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSBuZXdQcmlvcml0eSA9PiBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIGNvbnN0IHNldFByb2plY3QgPSBuZXdQcm9qZWN0ID0+IHByb2plY3QgPSBuZXdQcm9qZWN0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0LCBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sXG4gICAgICBzZXRQcmlvcml0eSwgc2V0UHJvamVjdFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgdmFsaWRhdGVUb2RvID0gKGRhdGEsIGVkaXRJZCA9IGZhbHNlKSA9PiB7XG4gICAgbGV0IGVycm9ycyA9IFtdO1xuICAgIGxldCBlZGl0VG9kbyA9IGVkaXRJZCA9PSBmYWxzZSA/IG51bGwgOiBnZXRUb2RvKGVkaXRJZCk7XG5cbiAgICBpZiAoKGVkaXRJZCA9PSBmYWxzZSAmJiAoZGF0YS50aXRsZSA9PSAnJyAmJiBkYXRhLmRlc2NyaXB0aW9uID09ICcnKSkgfHxcbiAgICAgICAgKGVkaXRJZCAhPSBmYWxzZSAmJiBlZGl0VG9kby50aXRsZSA9PSBkYXRhLnRpdGxlICYmXG4gICAgICAgICAgZWRpdFRvZG8uZGVzY3JpcHRpb24gPT0gZGF0YS5kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgIGVkaXRUb2RvLnByaW9yaXR5ID09IGRhdGEucHJpb3JpdHkgJiZcbiAgICAgICAgICBlZGl0VG9kby5wcm9qZWN0ID09IGRhdGEucHJvamVjdCkpIHtcbiAgICAgIGVycm9ycyA9IFsnbm90aGluZyB0byBzYXZlJ107XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkYXRhLnRpdGxlID09ICcnKSB7IGVycm9ycy5wdXNoKCd0aXRsZSBjYW5ub3QgYmUgYmxhbmsnKTsgfVxuICAgICAgZWxzZSBpZiAoZGF0YS50aXRsZS5sZW5ndGggPiA2NCkge1xuICAgICAgICBlcnJvcnMucHVzaCgndGl0bGUgY2Fubm90IGNvbnRhaW4gbW9yZSB0aGFuIDY0IGNoYXJhY3RlcnMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwcm9qZWN0VG9kb3MgPSBpbmRleFRvZG9zKGRhdGEucHJvamVjdCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdFRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHByb2plY3RUb2Rvc1tpXS50aXRsZS50b0xvd2VyQ2FzZSgpID09IGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAmJiAoZWRpdElkID09IGZhbHNlIHx8IHByb2plY3RUb2Rvc1tpXS5pZCAhPSBlZGl0SWQpKSB7XG4gICAgICAgICAgICBlcnJvcnMucHVzaChcbiAgICAgICAgICAgICAgJ3RpdGxlIGNhbm5vdCBtYXRjaCBleGlzdGluZyB0b2RvIGl0ZW0gdGl0bGUgaW4gc2FtZSBwcm9qZWN0J1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEuZGVzY3JpcHRpb24ubGVuZ3RoID4gMjU2KSB7XG4gICAgICAgIGVycm9ycy5wdXNoKCdkZXNjcmlwdGlvbiBjYW5ub3QgY29udGFpbiBtb3JlIHRoYW4gMjU2IGNoYXJhY3RlcnMnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzO1xuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRlUHJvamVjdCA9IChuZXdQcm9qZWN0KSA9PiB7XG4gICAgbGV0IGVycm9ycyA9IFtdO1xuICAgIGlmIChuZXdQcm9qZWN0ID09ICcnKSB7IGVycm9ycy5wdXNoKCdub3RoaW5nIHRvIHNhdmUnKTsgfVxuICAgIGVsc2UgaWYgKG5ld1Byb2plY3QubGVuZ3RoID4gNDYpIHtcbiAgICAgIGVycm9ycy5wdXNoKCd0aXRsZSBjYW5ub3QgY29udGFpbiBtb3JlIHRoYW4gNDYgY2hhcmFjdGVycycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChuZXdQcm9qZWN0LnRvTG93ZXJDYXNlKCkgPT0gcHJvamVjdHNbaV0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKCd0aXRsZSBjYW5ub3QgbWF0Y2ggZXhpc3RpbmcgcHJvamVjdCB0aXRsZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9ycztcbiAgfTtcblxuICBmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHsgLy8gZnJvbTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmdcbiAgICB2YXIgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgIHZhciB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICBlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXNlRXhhbXBsZURhdGEgPSAoKSA9PiB7XG4gICAgbGV0IHRvZG9zRXhhbXBsZXMgPSBleGFtcGxlRGF0YS50b2RvcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zRXhhbXBsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvZG9zLnB1c2goXG4gICAgICAgIHRvZG9GYWN0b3J5KHVuaXF1ZUlkKCksIHRvZG9zRXhhbXBsZXNbaV0udGl0bGUsIHRvZG9zRXhhbXBsZXNbaV0uZGVzY3JpcHRpb24sXG4gICAgICAgIHRvZG9zRXhhbXBsZXNbaV0ucHJpb3JpdHksIHRvZG9zRXhhbXBsZXNbaV0ucHJvamVjdFxuICAgICAgKSk7XG4gICAgfVxuXG4gICAgbGV0IHByb2plY3RzRXhhbXBsZXMgPSBleGFtcGxlRGF0YS5wcm9qZWN0cztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzRXhhbXBsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdHNFeGFtcGxlc1tpXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNhdmVUb2Rvc0xvY2FsID0gKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JlID09IHRydWUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2RvcycpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2F2ZVByb2plY3RzTG9jYWwgPSAoKSA9PiB7XG4gICAgaWYgKGxvY2FsU3RvcmUgPT0gdHJ1ZSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2plY3RzJyk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGluaXRpYWxpemUsIGluZGV4VG9kb3MsIGNyZWF0ZVRvZG8sIGVkaXRUb2RvLCBnZXRUb2RvLCBkZWxldGVUb2RvLFxuICAgIGluZGV4UHJvamVjdHMsIGNyZWF0ZVByb2plY3QsIGRlbGV0ZVByb2plY3RcbiAgfTtcblxufSkoKTtcblxuZXhwb3J0IHsgbW9kZWwgfVxuIiwiaW1wb3J0IHsgcmVuZGVyVXRpbHMgfSBmcm9tICcuL3JlbmRlclV0aWxzJ1xuaW1wb3J0IHsgbW9kZWwgfSBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IHsgdG9kb3NSZW5kZXIgfSBmcm9tICcuL3RvZG9zUmVuZGVyJ1xuXG5jb25zdCBwcm9qZWN0c1JlbmRlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICAgIHJlbmRlclV0aWxzLmNsZWFyQ29udGVudCgpO1xuICAgIGxldCBwcm9qZWN0cyA9IG1vZGVsLmluZGV4UHJvamVjdHMoKTtcbiAgICBsZXQgbmF2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdkJ0bicpO1xuICAgIGxldCB0aXRsZVcgPSBjb250ZW50Lm9mZnNldFdpZHRoIC0gNTY7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHsgLy8gYWRkIHByb2plY3QgZGl2c1xuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW1EaXYnKTtcbiAgICAgIGRpdi5pZCA9IGBwcm9qZWN0XyR7cHJvamVjdHNbaV19YDtcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIG5hdkJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdleWVJY29uJyk7XG4gICAgICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCdmb2xkZXJzSWNvbicpO1xuICAgICAgICBuYXZCdG4udGl0bGUgPSAndmlldyBwcm9qZWN0cyc7XG4gICAgICAgIHRvZG9zUmVuZGVyLmluZGV4KHRoaXMuaWQpO1xuICAgICAgfSk7XG4gICAgICBsZXQgZGVsZXRlYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkZWxldGVib3guY2xhc3NMaXN0LmFkZCgnZGVsZXRlYm94Jyk7XG4gICAgICBkZWxldGVib3guaWQgPSBgZGVsZXRlXyR7cHJvamVjdHNbaV19YDtcbiAgICAgIGRlbGV0ZWJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhgY2xpY2tlZDogJHt0aGlzLmlkfWApO1xuICAgICAgICByZW1vdmVQcm9qZWN0KHRoaXMuaWQpO1xuICAgICAgfSk7XG4gICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gcmVuZGVyVXRpbHMuZml0U3RyaW5nKHByb2plY3RzW2ldLCB0aXRsZVcpO1xuICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChkZWxldGVib3gpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgJ25ldyBwcm9qZWN0JyBidXR0b25cbiAgICBsZXQgYWRkTmV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkTmV3LmlkID0gJ2FkZE5ldyc7XG4gICAgYWRkTmV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGZvcm0oKTtcbiAgICAgIGFkZE5ldy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICAgIGxldCBwbHVzU2lnbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbHVzU2lnbi5pZCA9ICdwbHVzU2lnbic7XG4gICAgcGx1c1NpZ24uaW5uZXJIVE1MID0gJysnO1xuICAgIGFkZE5ldy5hcHBlbmRDaGlsZChwbHVzU2lnbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGROZXcpO1xuXG4gICAgLy8gc2V0IG5hdmJhciBtZXNzYWdlXG4gICAgbGV0IG5hdk1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZNc2cnKTtcbiAgICBuYXZNc2cuaW5uZXJIVE1MID0gJ1Byb2plY3RzJztcblxuICAgIC8vIG9uUmVzaXplOiByZWZvcm1hdCB0ZXh0IHRoYXQgd291bGQgb3RoZXJ3aXNlIG92ZXJmbG93XG4gICAgZG9jdW1lbnQuYm9keS5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCl7IG9uUmVzaXplKCk7IH07XG4gIH07XG5cbiAgLy8gcHJpdmF0ZVxuXG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBvblJlc2l6ZSA9ICgpID0+IHtcbiAgICBsZXQgcHJvamVjdHMgPSBtb2RlbC5pbmRleFByb2plY3RzKCk7XG4gICAgbGV0IHRpdGxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpdGxlJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRpdGxlc1tpXS5pbm5lckhUTUwgPSByZW5kZXJVdGlscy5maXRTdHJpbmcoXG4gICAgICAgIHByb2plY3RzW2ldLCBjb250ZW50Lm9mZnNldFdpZHRoIC0gNTZcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAodGhpc0lkKSA9PiB7XG4gICAgbGV0IGlkID0gdGhpc0lkLnNsaWNlKDcpO1xuICAgIGlmIChjb25maXJtKGBSZWFsbHkgZGVsZXRlIHByb2plY3Q6ICR7aWR9XFxuQU5EIGFueSB0b2RvIGl0ZW1zIGl0IGNvbnRhaW5zP2ApID09IHRydWUpIHtcbiAgICAgIG1vZGVsLmRlbGV0ZVByb2plY3QoaWQpO1xuICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdF8ke2lkfWApO1xuICAgICAgcHJvamVjdERpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByb2plY3REaXYpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcbiAgICAgIGxldCBwcm9qZWN0ID0gaW5wdXQudmFsdWU7XG4gICAgICBsZXQgZXJyb3JzID0gbW9kZWwuY3JlYXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgaW5kZXgoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyb3JzWzBdID09ICdub3RoaW5nIHRvIHNhdmUnKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZm9ybURpdik7XG4gICAgICAgIGFkZE5ldy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KGBTQVZFIEZBSUxFRCFcXG4qICR7ZXJyb3JzWzBdfWApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnZm9ybURpdicpO1xuICAgIGZvcm1EaXYuaWQgPSAncHJvamVjdEZvcm0nO1xuICAgIGxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGxhYmVsLmlubmVySFRNTCA9ICd0aXRsZTonO1xuICAgIGxhYmVsLmlkID0gJ3Byb2plY3RUaXRsZSc7XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5pZCA9ICdwcm9qZWN0VGl0bGUnO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBsZXQgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFByb2plY3QudHlwZSA9ICdidXR0b24nOyAvLyBwcmV2ZW50cyBhcHAgcmVsb2FkIG9uIGNsaWNrXG4gICAgYWRkUHJvamVjdC5pZCA9ICdhZGRQcm9qZWN0JztcbiAgICBhZGRQcm9qZWN0LmlubmVySFRNTCA9ICdkb25lJztcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXQpO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuXG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtRGl2KTtcblxuICAgIC8vIHNjcm9sbCBwYWdlIHRvIHNob3cgd2hvbGUgZm9ybSBpZiBmb3JtIG9wZW5zIHBhcnRseSBiZWxvdyB3aW5kb3dcbiAgICBsZXQgZGl2SCA9IDY4O1xuICAgIGxldCBzcGFjZSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIGZvcm1EaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGlmIChzcGFjZSA8IGRpdkgpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCB3aW5kb3cucGFnZVlPZmZzZXQgKyAoZGl2SCAtIHNwYWNlKSk7XG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKTtcbiAgICB9XG5cbiAgICBvblJlc2l6ZSgpO1xuICB9O1xuXG4gIHJldHVybiB7IGluZGV4IH07XG59KSgpO1xuXG5leHBvcnQgeyBwcm9qZWN0c1JlbmRlciB9XG4iLCIvLyBmdW5jdGlvbnMgY29tbW9uIHRvIHRvZG9zUmVuZGVyLmpzIGFuZCBwcm9qZWN0c1JlbmRlci5qc1xuY29uc3QgcmVuZGVyVXRpbHMgPSAoKCkgPT4ge1xuICBjb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZml0U3RyaW5nID0gKHN0cmluZywgd2lkdGgpID0+IHtcbiAgICBpZiAoc3RyaW5nLmxlbmd0aCAqIDEyID4gd2lkdGgpIHtcbiAgICAgIGxldCByZW1vdmUgPSAoTWF0aC5mbG9vcih3aWR0aCAvIDEyKSAtIDMpIC0gc3RyaW5nLmxlbmd0aDtcbiAgICAgIHN0cmluZyA9IHN0cmluZy5zbGljZSgwLCByZW1vdmUpLmNvbmNhdCgnLi4uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcblxuICByZXR1cm4geyBjbGVhckNvbnRlbnQsIGZpdFN0cmluZyB9O1xufSkoKTtcblxuZXhwb3J0IHsgcmVuZGVyVXRpbHMgfVxuIiwiaW1wb3J0IHsgcmVuZGVyVXRpbHMgfSBmcm9tICcuL3JlbmRlclV0aWxzJ1xuaW1wb3J0IHsgbW9kZWwgfSBmcm9tICcuL21vZGVsJ1xuXG5jb25zdCB0b2Rvc1JlbmRlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0ID0gcHJvamVjdC5zbGljZSg4KTtcbiAgICBsZXQgdG9kb3MgPSBtb2RlbC5pbmRleFRvZG9zKHByb2plY3QpO1xuICAgIHJlbmRlclV0aWxzLmNsZWFyQ29udGVudCgpO1xuXG4gICAgbGV0IHRpdGxlVyA9IGNvbnRlbnQub2Zmc2V0V2lkdGggLSA1NjtcbiAgICBsZXQgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnZm9ybURpdicpO1xuICAgIGZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnbWVkaXVtRm9ybScpO1xuICAgIGZvcm1EaXYuaWQgPSAnZm9ybURpdic7XG4gICAgZm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7IC8vIGFkZCB0b2RvIGl0ZW1zXG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaXRlbURpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7dG9kb3NbaV0ucHJpb3JpdHl9RGl2YCk7XG4gICAgICBkaXYuaWQgPSBgJHt0b2Rvc1tpXS5pZH1gO1xuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gW10uc2xpY2UuY2FsbChkaXYuY2hpbGRyZW4pO1xuICAgICAgICBpZiAoY2hpbGRyZW4uam9pbigpLmluY2x1ZGVzKCdbb2JqZWN0IEhUTUxGb3JtRWxlbWVudF0nKSA9PSBmYWxzZSkge1xuICAgICAgICAgIGZvcm0odGhpcy5pZCwgcHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgICAgY2hlY2tib3guaWQgPSBgZGVsZXRlXyR7dG9kb3NbaV0uaWR9YDtcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIG1vZGVsLmRlbGV0ZVRvZG8odGhpcy5pZC5zbGljZSg3KSk7XG4gICAgICAgIHJlbW92ZVRvZG8odGhpcy5pZCk7XG4gICAgICB9KTtcbiAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICB0aXRsZS5pbm5lckhUTUwgPSByZW5kZXJVdGlscy5maXRTdHJpbmcodG9kb3NbaV0udGl0bGUsIHRpdGxlVyk7XG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgdGl0bGUuaWQgPSBgdGl0bGVfJHt0b2Rvc1tpXS5pZH1gO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuXG4gICAgLy8gYWRkICduZXcgdG9kbyBpdGVtJyBidXR0b25cbiAgICBsZXQgYWRkTmV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkTmV3LmlkID0gJ2FkZE5ldyc7XG4gICAgYWRkTmV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGZvcm0odGhpcy5pZCwgcHJvamVjdCk7XG4gICAgICBhZGROZXcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbiAgICBsZXQgcGx1c1NpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGx1c1NpZ24uaWQgPSAncGx1c1NpZ24nO1xuICAgIHBsdXNTaWduLmlubmVySFRNTCA9ICcrJztcbiAgICBhZGROZXcuYXBwZW5kQ2hpbGQocGx1c1NpZ24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkTmV3KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm1EaXYpO1xuXG4gICAgLy8gc2V0IG5hdmJhciBuYXZiYXIgbWVzc2FnZVxuICAgIGxldCBuYXZNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2TXNnJyk7XG4gICAgbmF2TXNnLmlubmVySFRNTCA9IHJlbmRlclV0aWxzLmZpdFN0cmluZyhcbiAgICAgIHByb2plY3QsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtc2dEaXYnKS5vZmZzZXRXaWR0aCAtIDEyXG4gICAgKTtcblxuICAgIC8vIG9uUmVzaXplOiByZWZvcm1hdCB0ZXh0IHRoYXQgd291bGQgb3RoZXJ3aXNlIG92ZXJmbG93XG4gICAgZG9jdW1lbnQuYm9keS5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCl7IG9uUmVzaXplKHByb2plY3QpOyB9O1xuICB9O1xuXG4gIC8vIHByaXZhdGU6XG5cbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGNvbnN0IG9uUmVzaXplID0gKHByb2plY3QpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2TXNnJykuaW5uZXJIVE1MID0gcmVuZGVyVXRpbHMuZml0U3RyaW5nKFxuICAgICAgcHJvamVjdCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21zZ0RpdicpLm9mZnNldFdpZHRoIC0gMTJcbiAgICApO1xuICAgIGxldCB0b2RvcyA9IG1vZGVsLmluZGV4VG9kb3MocHJvamVjdCk7XG4gICAgbGV0IHRpdGxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpdGxlJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRpdGxlc1tpXS5pbm5lckhUTUwgPSByZW5kZXJVdGlscy5maXRTdHJpbmcoXG4gICAgICAgIHRvZG9zW2ldLnRpdGxlLCBjb250ZW50Lm9mZnNldFdpZHRoIC0gNTZcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAodGhpc0lkKSA9PiB7XG4gICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpc0lkKTtcbiAgICBjaGVja0JveC5pZCA9ICdkZWxldGVkJztcbiAgICBsZXQgaWQgPSB0aGlzSWQuc2xpY2UoNyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGxldCB0b2RvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgdG9kb0Rpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvZG9EaXYpO1xuICAgIH0sIDMwMCk7XG4gIH07XG5cbiAgY29uc3QgZm9ybSA9ICh0aGlzSWQsIHRoaXNQcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgYWRkSW5wdXQgPSAobmFtZSkgPT4ge1xuICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgIGxhYmVsLmlubmVySFRNTCA9IGAke25hbWV9OmA7XG4gICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgaWYgKG5hbWUgPT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoYCR7bmFtZX1gKTtcbiAgICAgIH1cbiAgICAgIGlucHV0LmlkID0gYCR7bmFtZX0ke3RoaXNJZH1gO1xuICAgICAgaWYgKHRoaXNJZCAhPSAnYWRkTmV3JykgeyBpbnB1dC52YWx1ZSA9IG1vZGVsLmdldFRvZG8odGhpc0lkKVtgJHtuYW1lfWBdOyB9XG5cbiAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkU2VsZWN0aW9uID0gKHR5cGUpID0+IHtcbiAgICAgIGxldCBvcHRpb25zID0gdHlwZSA9PSAncHJvamVjdCcgPyBtb2RlbC5pbmRleFByb2plY3RzKCkgOlxuICAgICAgICBbJ2hpZ2gnLCAnbWVkaXVtJywgJ2xvdyddO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25zW2ldO1xuICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gb3B0aW9uc1tpXTtcbiAgICAgICAgaWYgKHRoaXNJZCA9PSAnYWRkTmV3Jykge1xuICAgICAgICAgIGlmIChvcHRpb25zW2ldID09ICdtZWRpdW0nIHx8IG9wdGlvbnNbaV0gPT0gdGhpc1Byb2plY3QpIHtcbiAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICgob3B0aW9uc1tpXSA9PSBtb2RlbC5nZXRUb2RvKHRoaXNJZCkucHJpb3JpdHkpIHx8XG4gICAgICAgICAgICAgICAgICAgIChvcHRpb25zW2ldID09IG1vZGVsLmdldFRvZG8odGhpc0lkKS5wcm9qZWN0KSkge1xuICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT0gJ3Byb2plY3QnKSB7IHByb2plY3RzLmFwcGVuZENoaWxkKG9wdGlvbik7IH1cbiAgICAgICAgZWxzZSB7IHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7IH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZGl2Q29sb3IgPSAodGhpc0RpdikgPT4ge1xuICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdsb3dGb3JtJyk7XG4gICAgICB0aGlzRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bUZvcm0nKTtcbiAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaEZvcm0nKTtcbiAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LmFkZChgJHtwcmlvcml0eS52YWx1ZX1Gb3JtYCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGFsZXJ0RXJyb3JzID0gKGVycm9ycykgPT4ge1xuICAgICAgICBsZXQgbWVzc2FnZSA9ICdTQVZFIEZBSUxFRCEnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVycm9ycy5sZW5ndGg7IGkgKyspIHsgbWVzc2FnZSArPSBgXFxuKiAke2Vycm9yc1tpXX1gOyB9XG4gICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xuICAgICAgfTtcblxuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIHRpdGxlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGl0bGUke3RoaXNJZH1gKS52YWx1ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvbiR7dGhpc0lkfWApLnZhbHVlLFxuICAgICAgICBwcmlvcml0eTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByaW9yaXR5JHt0aGlzSWR9YCkudmFsdWUsXG4gICAgICAgIHByb2plY3Q6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0cyR7dGhpc0lkfWApLnZhbHVlXG4gICAgICB9XG4gICAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAgIGlmICh0aGlzSWQgPT0gJ2FkZE5ldycpIHsgLy8gc3VibWl0IG5ld1xuICAgICAgICByZXN1bHQgPSBtb2RlbC5jcmVhdGVUb2RvKGRhdGEsIHRoaXNQcm9qZWN0KTtcblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PSAwKSB7IGluZGV4KGBwcm9qZWN0XyR7dGhpc1Byb2plY3R9YCk7IH1cbiAgICAgICAgZWxzZSBpZiAocmVzdWx0WzBdID09ICdub3RoaW5nIHRvIHNhdmUnIHx8IHJlc3VsdFswXSA9PSAnbW92ZWQgcHJvamVjdCcpIHtcbiAgICAgICAgICBmb3JtRGl2LnJlbW92ZUNoaWxkKHRvZG9Gb3JtKTtcbiAgICAgICAgICBmb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgYWRkTmV3LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyB9XG4gICAgICAgIGVsc2UgeyBhbGVydEVycm9ycyhyZXN1bHQpOyB9XG4gICAgICB9IGVsc2UgeyAvLyBzdWJtaXQgZWRpdFxuICAgICAgICByZXN1bHQgPSBtb2RlbC5lZGl0VG9kbyhkYXRhLCB0aGlzSWQpO1xuICAgICAgICBsZXQgdG9kbyA9IG1vZGVsLmdldFRvZG8odGhpc0lkKTtcblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PSAwKSB7IGluZGV4KGBwcm9qZWN0XyR7dGhpc1Byb2plY3R9YCk7IH1cbiAgICAgICAgZWxzZSBpZiAodGhpc1Byb2plY3QgIT0gJ0FsbCB0by1kbyBpdGVtcycgJiZcbiAgICAgICAgICAgICAgICAgIChyZXN1bHRbMF0gPT0gJ21vdmVkIHByb2plY3QnIHx8XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFsxXSA9PSAnbW92ZWQgcHJvamVjdCcpKSB7XG4gICAgICAgICAgbGV0IHRvZG9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzSWQpO1xuICAgICAgICAgIHRvZG9EaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0b2RvRGl2KTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRbMF0gPT0gJ3NhbWUgcHJpb3JpdHkgbmV3IHRpdGxlJyB8fFxuICAgICAgICAgICAgICAgICAgcmVzdWx0WzBdID09ICdzYW1lIHByaW9yaXR5Jykge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgdGhpc0Rpdi5yZW1vdmVDaGlsZCh0b2RvRm9ybSk7IH0sIDEwKTtcbiAgICAgICAgICB0aGlzRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm1EaXYnKTtcbiAgICAgICAgICB0aGlzRGl2LmNsYXNzTGlzdC5yZW1vdmUoYCR7dG9kby5wcmlvcml0eX1Gb3JtYCk7XG4gICAgICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QuYWRkKCdpdGVtRGl2Jyk7XG4gICAgICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QuYWRkKGAke3RvZG8ucHJpb3JpdHl9RGl2YCk7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlbGV0ZV8ke3RoaXNJZH1gKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGl0bGVfJHt0aGlzSWR9YCkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgaWYgKHJlc3VsdFswXSA9PSAnc2FtZSBwcmlvcml0eSBuZXcgdGl0bGUnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGl0bGVfJHt0aGlzSWR9YCkuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIHJlbmRlclV0aWxzLmZpdFN0cmluZyh0b2RvLnRpdGxlLCBjb250ZW50Lm9mZnNldFdpZHRoIC0gNTYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHsgYWxlcnRFcnJvcnMocmVzdWx0KTsgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdG9kb0Zvcm0uaWQgPSBgZm9ybSR7dGhpc0lkfWA7XG4gICAgYWRkSW5wdXQoJ3RpdGxlJyk7XG4gICAgYWRkSW5wdXQoJ2Rlc2NyaXB0aW9uJyk7XG5cbiAgICBsZXQgbGFiZWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGFiZWxzRGl2LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbkRpdicpO1xuICAgIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBwcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5TGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9ICdwcmlvcml0eTonO1xuICAgIGxhYmVsc0Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICBsZXQgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBwcm9qZWN0TGFiZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdExhYmVsJyk7XG4gICAgcHJvamVjdExhYmVsLmlubmVySFRNTCA9ICdwcm9qZWN0Oic7XG4gICAgbGFiZWxzRGl2LmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gICAgbGV0IGRvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkb25lLnR5cGUgPSAnYnV0dG9uJzsgLy8gcHJldmVudHMgYXBwIHJlbG9hZCBvbiBjbGlja1xuICAgIGRvbmUuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgIGRvbmUuaW5uZXJIVE1MID0gJ2RvbmUnO1xuICAgIGxhYmVsc0Rpdi5hcHBlbmRDaGlsZChkb25lKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChsYWJlbHNEaXYpO1xuXG4gICAgbGV0IHNlbGVjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlbGVjdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdzZWxlY3Rpb25EaXYnKTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuICAgIHByaW9yaXR5LmlkID0gYHByaW9yaXR5JHt0aGlzSWR9YDtcbiAgICBhZGRTZWxlY3Rpb24oJ3ByaW9yaXR5Jyk7XG4gICAgc2VsZWN0aW9uRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICAgIHByb2plY3RzLmlkID0gYHByb2plY3RzJHt0aGlzSWR9YDtcbiAgICBhZGRTZWxlY3Rpb24oJ3Byb2plY3QnKTtcbiAgICBzZWxlY3Rpb25EaXYuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHNlbGVjdGlvbkRpdik7XG5cbiAgICBsZXQgdGhpc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtRGl2Jyk7XG4gICAgaWYgKHRoaXNJZCAhPSAnYWRkTmV3JykgeyAvLyBpbnNlcnQgJ2VkaXQnIGZvcm0gYXQgdG9kbyBpdGVtIHBvc2l0aW9uXG4gICAgICB0aGlzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpc0lkKTtcbiAgICAgIHRoaXNEaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBlZGl0KHRoaXMuaWQsIHByb2plY3QpOyB9KTtcbiAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LnJlbW92ZSgnaXRlbURpdicpO1xuICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKGAke21vZGVsLmdldFRvZG8odGhpc0lkKS5wcmlvcml0eX1EaXZgKTtcbiAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LmFkZCgnZm9ybURpdicpO1xuICAgICAgZGl2Q29sb3IodGhpc0Rpdik7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVsZXRlXyR7dGhpc0lkfWApLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGl0bGVfJHt0aGlzSWR9YCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBkb25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXQpO1xuICAgIHByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7IGRpdkNvbG9yKHRoaXNEaXYpOyB9KTtcbiAgICB0aGlzRGl2LmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgICB0aGlzRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgLy8gc2Nyb2xsIHBhZ2UgdG8gc2hvdyB3aG9sZSBmb3JtIGlmIGZvcm0gb3BlbnMgcGFydGx5IGJlbG93IHdpbmRvd1xuICAgIGxldCBkaXZIID0gMTQzO1xuICAgIGxldCBzcGFjZSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXNEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGlmIChzcGFjZSA8IGRpdkgpIHsgd2luZG93LnNjcm9sbFRvKDAsIHdpbmRvdy5wYWdlWU9mZnNldCArIChkaXZIIC0gc3BhY2UpKTsgfVxuXG4gICAgb25SZXNpemUodGhpc1Byb2plY3QpO1xuICB9O1xuXG4gIHJldHVybiB7IGluZGV4IH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IHRvZG9zUmVuZGVyIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=