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
      id, title, description, priority, project, setTitle, setDescription,
      setPriority, setProject, output
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

  const validateTodo = (data, editId = false) => {
    let errors = [];

    if ((editId == false && (data.title == '' && data.description == '')) ||
        (editId != false && todos[editId].title == data.title &&
          todos[editId].description == data.description &&
          todos[editId].priority == data.priority &&
          todos[editId].project == data.project)) {
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

  // DEBUG:
  const logTodos = () => {
    console.log('----------');
    for (let i = 0; i < todos.length; i++) {
      todos[i].output();
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
    }

    return errors;
  };

  const editTodo = (formData, thisId) => {
    let errors = ['unmoved']
    return errors;
  };

  const getTodo = (id) => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == id) { return todos[i];}
    }
  };

  const deleteTodo = (id) => {
    todos.splice(todos.indexOf(todos.find(e => e.id == id)), 1);
  };

  const createProject = (newProject) => {
    let errors = validateProject(newProject);
    if (errors.length == 0) { projects.push(newProject); }

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
  };

  return {
    todos, projects, indexTodos, createTodo, editTodo, getTodo, deleteTodo,
    createProject, deleteProject, initialize, logTodos
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
    let projects = _model__WEBPACK_IMPORTED_MODULE_1__["model"].projects;
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
    const edit = (thisId, project) => {
      form(thisId, project);
    };

    project = project.slice(8);
    let todos = _model__WEBPACK_IMPORTED_MODULE_1__["model"].indexTodos(project);
    _renderUtils__WEBPACK_IMPORTED_MODULE_0__["renderUtils"].clearContent();

    let titleW = content.offsetWidth - 56;

    let formDiv = document.createElement('div');
    formDiv.classList.add('formDiv');
    formDiv.classList.add('mediumForm');
    formDiv.id = 'formDiv';
    formDiv.style.display = 'none';

    for(let i = 0; i < todos.length; i++) {
      let div = document.createElement('div');
      div.classList.add('itemDiv');
      div.classList.add(`${todos[i].priority}Div`);
      div.id = `${todos[i].id}`;
      div.addEventListener("click", function() {
        let children = [].slice.call(div.children);
        if (children.join().includes('[object HTMLFormElement]') == false) {
          edit(this.id, project);
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

  // ? will use parent elelment as param, not id, then find ids needed
  const form = (thisId, thisProject) => {
    const addInput = (id) => {
      let label = document.createElement('h4');
      label.innerHTML = `${id}:`;
      let input = document.createElement('input');
      if (id == 'description') {
        input = document.createElement('textarea');
        input.classList.add(`${id}`);
      }
      input.id = `${id}${thisId}`;
      if (thisId != 'addNew') {
        input.value = _model__WEBPACK_IMPORTED_MODULE_1__["model"].getTodo(thisId)[`${id}`];
      }

      todoForm.appendChild(label);
      todoForm.appendChild(input);
    };

    const addSelection = (type) => {
      let options = ['high', 'medium', 'low'];
      if (type == 'project') { options = _model__WEBPACK_IMPORTED_MODULE_1__["model"].projects; }
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

      console.log(data);

      if ((thisProject == data.project || thisProject == 'All to-do items') ||
          confirm(`Really save to other project: ${data.project}?`) == true) {
        let errors = [];

        if (thisId == 'addNew') { errors = _model__WEBPACK_IMPORTED_MODULE_1__["model"].createTodo(data); }
        else {

          errors = _model__WEBPACK_IMPORTED_MODULE_1__["model"].editTodo(data, thisId);
        }

        if (errors[0] == 'nothing to save') {
          formDiv.removeChild(todoForm);
          formDiv.style.display = 'none';
          addNew.style.display = 'block';
        } else if (errors[0] == 'unmoved') {
          setTimeout(function(){ thisDiv.removeChild(todoForm); }, 10);
          thisDiv.classList.remove('formDiv');
          thisDiv.classList.remove(`${_model__WEBPACK_IMPORTED_MODULE_1__["model"].getTodo(thisId).priority}Form`);
          thisDiv.classList.add('itemDiv');
          thisDiv.classList.add(`${_model__WEBPACK_IMPORTED_MODULE_1__["model"].getTodo(thisId).priority}Div`);
          document.getElementById(`delete_${thisId}`).style.display = 'block';
          document.getElementById(`title_${thisId}`).style.display = 'block';
        } else if (errors.length == 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcFJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdHNSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlclV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy90b2Rvc1JlbmRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQWlEO0FBQ047O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUFjO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FB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O0FBQ0EsT0FBTztBQUNQO0FBQ0Esa0NBQWtDLDRDQUFLLDBCQUEwQjtBQUNqRTtBQUNBO0FBQ0Esd0NBQXdDLE9BQU87QUFDL0MsdUNBQXVDLE9BQU87QUFDOUM7O0FBRUE7QUFDQSxvREFBb0QsbUJBQW1CLEVBQUU7QUFDekU7QUFDQTtBQUNBOztBQUVBLFVBQVU7O0FBRVYsQ0FBQzs7QUFFcUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgcHJvamVjdHNSZW5kZXIgfSBmcm9tICcuL3Byb2plY3RzUmVuZGVyJ1xuaW1wb3J0IHsgdG9kb3NSZW5kZXIgfSBmcm9tICcuL3RvZG9zUmVuZGVyJ1xuXG5jb25zdCBhcHBSZW5kZXIgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IG5hdkJ0bkNsaWNrID0gKCkgPT4ge1xuICAgIGlmIChuYXZCdG4uY2xhc3NMaXN0LnZhbHVlID09ICdmb2xkZXJzSWNvbicpIHtcbiAgICAgIG5hdkJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdmb2xkZXJzSWNvbicpO1xuICAgICAgbmF2QnRuLmNsYXNzTGlzdC5hZGQoJ2V5ZUljb24nKTtcbiAgICAgIG5hdkJ0bi50aXRsZSA9ICd2aWV3IGFsbCB0b2RvIGl0ZW1zIGZyb20gYWxsIHByb2plY3RzJztcbiAgICAgIHByb2plY3RzUmVuZGVyLmluZGV4KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdkJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdleWVJY29uJyk7XG4gICAgICBuYXZCdG4uY2xhc3NMaXN0LmFkZCgnZm9sZGVyc0ljb24nKTtcbiAgICAgIG5hdkJ0bi50aXRsZSA9ICd2aWV3IHByb2plY3RzJztcbiAgICAgIHRvZG9zUmVuZGVyLmluZGV4KCdwcm9qZWN0X0FsbCB0by1kbyBpdGVtcycpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgIGxldCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJyk7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgLy8gc2V0IG5hdmJhciBzY3JvbGwgYmVoYXZpb3VyIChoaWRlIC8gcmV2ZWFsKVxuICAgIHZhciBwcmV2U2Nyb2xscG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICBpZiAocHJldlNjcm9sbHBvcyA+IGN1cnJlbnRTY3JvbGxQb3MpIHtcbiAgICAgICAgbmF2YmFyLnN0eWxlLnRvcCA9IFwiMFwiO1xuICAgICAgICBjb250ZW50LnN0eWxlLm1hcmdpblRvcCA9ICc1MHB4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdmJhci5zdHlsZS50b3AgPSAnLTUwcHgnO1xuICAgICAgICBjb250ZW50LnN0eWxlLm1hcmdpblRvcCA9ICcwcHgnO1xuICAgICAgfVxuICAgICAgcHJldlNjcm9sbHBvcyA9IGN1cnJlbnRTY3JvbGxQb3M7XG4gICAgfVxuXG4gICAgLy8gc2V0IGluaXRpYWwgbmF2QnRuIGljb24gJiBhZGQgY2xpY2sgZXZlbnRcbiAgICBsZXQgbmF2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdkJ0bicpO1xuICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCdmb2xkZXJzSWNvbicpO1xuICAgIG5hdkJ0bi50aXRsZSA9ICd2aWV3IHByb2plY3RzJztcbiAgICBuYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5hdkJ0bkNsaWNrKTtcblxuICAgIHRvZG9zUmVuZGVyLmluZGV4KCdwcm9qZWN0X0FsbCB0by1kbyBpdGVtcycpO1xuICB9O1xuXG4gIC8vIERFQlVHOiBjcmVhdGUgY29udGVudCB0YWxsZXIgdGhhbiBwYWdlIHRvIHRlc3Qgc2Nyb2xsIGVmZmVjdHNcbiAgY29uc3QgcGxhY2Vob2xkZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGxldCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcGFjZXIuc3R5bGUuaGVpZ2h0ID0gJzMwcHgnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc3BhY2VyKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA3MDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgcGFyYS5pbm5lckhUTUwgPSBcInBsYWNlaG9sZGVyIGNvbnRlbnRcIjtcbiAgICAgIHBhcmEuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgfVxuXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNpemUnKSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgaW5pdGlhbGl6ZSwgcGxhY2Vob2xkZXJDb250ZW50IH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IGFwcFJlbmRlciB9XG4iLCIvLyBEZWZhdWx0IGRhdGEgdG8gdXNlIHdoZW4gbG9jYWxTdG9yYWdlIHVuYXZhaWxhYmxlIC8gY29udGFpbnMgbm8gYXBwIGRhdGFcbmNvbnN0IGV4YW1wbGVEYXRhID0gKCgpID0+IHtcbiAgbGV0IHRvZG9zID0gW1xuICAgIHsgdGl0bGU6ICdkbyBsYXVuZHJ5JywgZGVzY3JpcHRpb246ICdyZW1lbWJlciBqZWFucycsXG4gICAgICBwcmlvcml0eTogJ2hpZ2gnLCBwcm9qZWN0OiAncmVndWxhciBzdHVmZicgfSxcbiAgICB7IHRpdGxlOiAnd2FzaCBjYXInLCBkZXNjcmlwdGlvbjogJycsXG4gICAgICBwcmlvcml0eTogJ2xvdycsIHByb2plY3Q6ICdyZWd1bGFyIHN0dWZmJyB9LFxuICAgIHsgdGl0bGU6ICdidXkgYmVlcicsIGRlc2NyaXB0aW9uOiAnS3JvbmVuYmVyZycsXG4gICAgICBwcmlvcml0eTogJ21lZGl1bScsIHByb2plY3Q6ICdyZWd1bGFyIHN0dWZmJyB9LFxuICAgIHsgdGl0bGU6ICdyZXNlYXJjaCBhcnJvdyBmdW5jdGlvbnMnLFxuICAgICAgZGVzY3JpcHRpb246ICdtYWtlIG5vdGVzIGFuZCBzYXZlIGxpbmtzJyxcbiAgICAgIHByaW9yaXR5OiAnaGlnaCcsIHByb2plY3Q6ICd3cml0ZSBhcnRpY2xlJyB9LFxuICAgIHsgdGl0bGU6ICd3cml0ZSBib2R5IG9mIGFydGljbGUnLCBkZXNjcmlwdGlvbjogJ2FjdHVhbGx5IHdyaXRlIHRoZSB0aGluZycsXG4gICAgICBwcmlvcml0eTogJ21lZGl1bScsIHByb2plY3Q6ICd3cml0ZSBhcnRpY2xlJyB9LFxuICAgIHsgdGl0bGU6ICdwcm9vZnJlYWQgYXJ0aWNsZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ2NoZWNrIGZvciBlcnJvcnMgYW5kIGJhZCBncmFtbWFyJyxcbiAgICAgIHByaW9yaXR5OiAnbG93JywgcHJvamVjdDogJ3dyaXRlIGFydGljbGUnIH0sXG4gICAgeyB0aXRsZTogJ3Jlc2VhcmNoIElJRkVzJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnd2hhdCBhcmUgdGhleSwgYW5kIHdoZW4gYXJlIHRoZXkgdXNlZD8nLFxuICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLCBwcm9qZWN0OiAnd3JpdGUgYXJ0aWNsZScgfSxcbiAgICB7IHRpdGxlOiAndG9kbyB3aXRoIGV4YW1wbGUgcmVhbGx5IGxvbmcgdGl0bGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdmb3IgdGVzdGluZyBsb25nIHN0cmluZ3MnLCBwcmlvcml0eTogJ21lZGl1bScsXG4gICAgICBwcm9qZWN0OiAncHJvamVjdCB3aXRoIHJlYWxseSBsb25nIHRpdGxlJyB9XG4gIF07XG5cbiAgbGV0IHByb2plY3RzID0gW1xuICAgICdyZWd1bGFyIHN0dWZmJyxcbiAgICAnd3JpdGUgYXJ0aWNsZScsXG4gICAgJ3Byb2plY3Qgd2l0aCByZWFsbHkgbG9uZyB0aXRsZSdcbiAgXTtcblxuICByZXR1cm4ge3RvZG9zLCBwcm9qZWN0c31cbn0pKCk7XG5cbmV4cG9ydCB7IGV4YW1wbGVEYXRhIH1cbiIsImltcG9ydCB7IG1vZGVsIH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7IGFwcFJlbmRlciB9IGZyb20gJy4vYXBwUmVuZGVyJ1xuXG5tb2RlbC5pbml0aWFsaXplKCk7XG5hcHBSZW5kZXIuaW5pdGlhbGl6ZSgpO1xuXG5cbi8vIGFkZCBwbGFjZWhvbGRlciBjb250ZW50LCBmb3IgdGVzdGluZyBvZiBuYXZiYXIgaGlkZS9yZXZlYWwgb24gc2Nyb2xsOlxuLy9hcHBSZW5kZXIucGxhY2Vob2xkZXJDb250ZW50KCk7XG4iLCJpbXBvcnQgeyBleGFtcGxlRGF0YSB9IGZyb20gJy4vZXhhbXBsZURhdGEnXG5cbmNvbnN0IG1vZGVsID0gKCgpID0+IHtcblxuICBsZXQgdG9kb3MgPSBbXTtcbiAgbGV0IHByb2plY3RzID0gW107XG5cbiAgY29uc3QgdW5pcXVlSWQgPSAoKCkgPT4ge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICsrY291bnQ7XG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBjb25zdCB0b2RvRmFjdG9yeSA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3Qgb3V0cHV0ID0gKCkgPT4gY29uc29sZS5sb2coYGlkOiAke2lkfSwgdGl0bGU6ICR7dGl0bGV9LCBkZXNjOiAke2Rlc2NyaXB0aW9ufSwgcHJpb3JpdHk6ICR7cHJpb3JpdHl9LCBwcm9qZWN0OiAke3Byb2plY3R9YCk7XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IG5ld1RpdGxlID0+IHRpdGxlID0gbmV3VGl0bGU7XG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbiA9PiBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gbmV3UHJpb3JpdHkgPT4gcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICBjb25zdCBzZXRQcm9qZWN0ID0gbmV3UHJvamVjdCA9PiBwcm9qZWN0ID0gbmV3UHJvamVjdDtcblxuICAgIHJldHVybiB7XG4gICAgICBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCwgc2V0VGl0bGUsIHNldERlc2NyaXB0aW9uLFxuICAgICAgc2V0UHJpb3JpdHksIHNldFByb2plY3QsIG91dHB1dFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAvLyBDaGFuZ2UgdGhpcyB0byBhIGNoZWNrIGZvciBsb2NhbCBzdG9yYWdlLCBldGMuXG4gICAgbGV0IHRvZG9zRXhhbXBsZXMgPSBleGFtcGxlRGF0YS50b2RvcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zRXhhbXBsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvZG9zLnB1c2goXG4gICAgICAgIHRvZG9GYWN0b3J5KHVuaXF1ZUlkKCksIHRvZG9zRXhhbXBsZXNbaV0udGl0bGUsIHRvZG9zRXhhbXBsZXNbaV0uZGVzY3JpcHRpb24sXG4gICAgICAgIHRvZG9zRXhhbXBsZXNbaV0ucHJpb3JpdHksIHRvZG9zRXhhbXBsZXNbaV0ucHJvamVjdFxuICAgICAgKSk7XG4gICAgfVxuXG4gICAgbGV0IHByb2plY3RzRXhhbXBsZXMgPSBleGFtcGxlRGF0YS5wcm9qZWN0cztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzRXhhbXBsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdHNFeGFtcGxlc1tpXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRlVG9kbyA9IChkYXRhLCBlZGl0SWQgPSBmYWxzZSkgPT4ge1xuICAgIGxldCBlcnJvcnMgPSBbXTtcblxuICAgIGlmICgoZWRpdElkID09IGZhbHNlICYmIChkYXRhLnRpdGxlID09ICcnICYmIGRhdGEuZGVzY3JpcHRpb24gPT0gJycpKSB8fFxuICAgICAgICAoZWRpdElkICE9IGZhbHNlICYmIHRvZG9zW2VkaXRJZF0udGl0bGUgPT0gZGF0YS50aXRsZSAmJlxuICAgICAgICAgIHRvZG9zW2VkaXRJZF0uZGVzY3JpcHRpb24gPT0gZGF0YS5kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgIHRvZG9zW2VkaXRJZF0ucHJpb3JpdHkgPT0gZGF0YS5wcmlvcml0eSAmJlxuICAgICAgICAgIHRvZG9zW2VkaXRJZF0ucHJvamVjdCA9PSBkYXRhLnByb2plY3QpKSB7XG4gICAgICBlcnJvcnMgPSBbJ25vdGhpbmcgdG8gc2F2ZSddO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGF0YS50aXRsZSA9PSAnJykgeyBlcnJvcnMucHVzaCgndGl0bGUgY2Fubm90IGJlIGJsYW5rJyk7IH1cbiAgICAgIGVsc2UgaWYgKGRhdGEudGl0bGUubGVuZ3RoID4gNjQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goJ3RpdGxlIGNhbm5vdCBjb250YWluIG1vcmUgdGhhbiA2NCBjaGFyYWN0ZXJzJyk7XG4gICAgICB9IGVsc2UgaWYgKGVkaXRJZCA9PSBmYWxzZSkge1xuICAgICAgICBsZXQgcHJvamVjdFRvZG9zID0gaW5kZXhUb2RvcyhkYXRhLnByb2plY3QpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RUb2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChwcm9qZWN0VG9kb3NbaV0udGl0bGUudG9Mb3dlckNhc2UoKSA9PSBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKFxuICAgICAgICAgICAgICAndGl0bGUgY2Fubm90IG1hdGNoIGV4aXN0aW5nIHRvZG8gaXRlbSB0aXRsZSBpbiBzYW1lIHByb2plY3QnXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5kZXNjcmlwdGlvbi5sZW5ndGggPiAyNTYpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goJ2Rlc2NyaXB0aW9uIGNhbm5vdCBjb250YWluIG1vcmUgdGhhbiAyNTYgY2hhcmFjdGVycycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG4gIH07XG5cbiAgY29uc3QgdmFsaWRhdGVQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcbiAgICBsZXQgZXJyb3JzID0gW107XG4gICAgaWYgKG5ld1Byb2plY3QgPT0gJycpIHsgZXJyb3JzLnB1c2goJ25vdGhpbmcgdG8gc2F2ZScpOyB9XG4gICAgZWxzZSBpZiAobmV3UHJvamVjdC5sZW5ndGggPiA0Nikge1xuICAgICAgZXJyb3JzLnB1c2goJ3RpdGxlIGNhbm5vdCBjb250YWluIG1vcmUgdGhhbiA0NiBjaGFyYWN0ZXJzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG5ld1Byb2plY3QudG9Mb3dlckNhc2UoKSA9PSBwcm9qZWN0c1tpXS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goJ3RpdGxlIGNhbm5vdCBtYXRjaCBleGlzdGluZyBwcm9qZWN0IHRpdGxlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzO1xuICB9O1xuXG4gIC8vIERFQlVHOlxuICBjb25zdCBsb2dUb2RvcyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvZG9zW2ldLm91dHB1dCgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBDLlIuVS5EOlxuXG4gIGNvbnN0IGluZGV4VG9kb3MgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHNvcnRCeVByaW9yaXR5ID0gKHVuc29ydGVkKSA9PiB7XG4gICAgICBsZXQgc29ydGVkID0gW10sIGhpZ2ggPSBbXSwgbWVkaXVtID0gW10sIGxvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bnNvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodW5zb3J0ZWRbaV0ucHJpb3JpdHkgPT0gJ2hpZ2gnKSB7IGhpZ2gucHVzaCh1bnNvcnRlZFtpXSkgfVxuICAgICAgICBlbHNlIGlmICh1bnNvcnRlZFtpXS5wcmlvcml0eSA9PSAnbWVkaXVtJykgeyBtZWRpdW0ucHVzaCh1bnNvcnRlZFtpXSkgfVxuICAgICAgICBlbHNlIHsgbG93LnB1c2godW5zb3J0ZWRbaV0pIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzb3J0ZWQgPSBoaWdoLmNvbmNhdChtZWRpdW0uY29uY2F0KGxvdykpO1xuICAgIH07XG5cbiAgICBpZiAocHJvamVjdCA9PSAnQWxsIHRvLWRvIGl0ZW1zJykge1xuICAgICAgcmV0dXJuIHNvcnRCeVByaW9yaXR5KHRvZG9zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHByb2plY3RUb2RvcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdCA9PSB0b2Rvc1tpXS5wcm9qZWN0KSB7IHByb2plY3RUb2Rvcy5wdXNoKG1vZGVsLnRvZG9zW2ldKTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNvcnRCeVByaW9yaXR5KHByb2plY3RUb2Rvcyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSAoZm9ybURhdGEpID0+IHtcbiAgICBsZXQgZXJyb3JzID0gdmFsaWRhdGVUb2RvKGZvcm1EYXRhKTtcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0b2Rvcy5wdXNoKFxuICAgICAgICB0b2RvRmFjdG9yeSh1bmlxdWVJZCgpLCBmb3JtRGF0YS50aXRsZSwgZm9ybURhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgIGZvcm1EYXRhLnByaW9yaXR5LCBmb3JtRGF0YS5wcm9qZWN0XG4gICAgICApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRUb2RvID0gKGZvcm1EYXRhLCB0aGlzSWQpID0+IHtcbiAgICBsZXQgZXJyb3JzID0gWyd1bm1vdmVkJ11cbiAgICByZXR1cm4gZXJyb3JzO1xuICB9O1xuXG4gIGNvbnN0IGdldFRvZG8gPSAoaWQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodG9kb3NbaV0uaWQgPT0gaWQpIHsgcmV0dXJuIHRvZG9zW2ldO31cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9IChpZCkgPT4ge1xuICAgIHRvZG9zLnNwbGljZSh0b2Rvcy5pbmRleE9mKHRvZG9zLmZpbmQoZSA9PiBlLmlkID09IGlkKSksIDEpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmV3UHJvamVjdCkgPT4ge1xuICAgIGxldCBlcnJvcnMgPSB2YWxpZGF0ZVByb2plY3QobmV3UHJvamVjdCk7XG4gICAgaWYgKGVycm9ycy5sZW5ndGggPT0gMCkgeyBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpOyB9XG5cbiAgICByZXR1cm4gZXJyb3JzO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0b2Rvc1tpXS5wcm9qZWN0ID09IHByb2plY3QpIHtcbiAgICAgICAgZGVsZXRlVG9kbyh0b2Rvc1tpXS5pZCk7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YocHJvamVjdHMuZmluZChlID0+IGUgPT0gcHJvamVjdCkpLCAxKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHRvZG9zLCBwcm9qZWN0cywgaW5kZXhUb2RvcywgY3JlYXRlVG9kbywgZWRpdFRvZG8sIGdldFRvZG8sIGRlbGV0ZVRvZG8sXG4gICAgY3JlYXRlUHJvamVjdCwgZGVsZXRlUHJvamVjdCwgaW5pdGlhbGl6ZSwgbG9nVG9kb3NcbiAgfTtcblxufSkoKTtcblxuZXhwb3J0IHsgbW9kZWwgfVxuIiwiaW1wb3J0IHsgcmVuZGVyVXRpbHMgfSBmcm9tICcuL3JlbmRlclV0aWxzJ1xuaW1wb3J0IHsgbW9kZWwgfSBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IHsgdG9kb3NSZW5kZXIgfSBmcm9tICcuL3RvZG9zUmVuZGVyJ1xuXG5jb25zdCBwcm9qZWN0c1JlbmRlciA9ICgoKSA9PiB7XG5cbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICAgIHJlbmRlclV0aWxzLmNsZWFyQ29udGVudCgpO1xuICAgIGxldCBwcm9qZWN0cyA9IG1vZGVsLnByb2plY3RzO1xuICAgIGxldCBuYXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2QnRuJyk7XG4gICAgbGV0IHRpdGxlVyA9IGNvbnRlbnQub2Zmc2V0V2lkdGggLSA1NjtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW1EaXYnKTtcbiAgICAgIGRpdi5pZCA9IGBwcm9qZWN0XyR7cHJvamVjdHNbaV19YDtcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIG5hdkJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdleWVJY29uJyk7XG4gICAgICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCdmb2xkZXJzSWNvbicpO1xuICAgICAgICBuYXZCdG4udGl0bGUgPSAndmlldyBwcm9qZWN0cyc7XG4gICAgICAgIHRvZG9zUmVuZGVyLmluZGV4KHRoaXMuaWQpO1xuICAgICAgfSk7XG4gICAgICBsZXQgZGVsZXRlYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkZWxldGVib3guY2xhc3NMaXN0LmFkZCgnZGVsZXRlYm94Jyk7XG4gICAgICBkZWxldGVib3guaWQgPSBgZGVsZXRlXyR7cHJvamVjdHNbaV19YDtcbiAgICAgIGRlbGV0ZWJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhgY2xpY2tlZDogJHt0aGlzLmlkfWApO1xuICAgICAgICByZW1vdmVQcm9qZWN0KHRoaXMuaWQpO1xuICAgICAgfSk7XG4gICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gcmVuZGVyVXRpbHMuZml0U3RyaW5nKHByb2plY3RzW2ldLCB0aXRsZVcpO1xuICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChkZWxldGVib3gpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB9XG5cbiAgICBsZXQgYWRkTmV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkTmV3LmlkID0gJ2FkZE5ldyc7XG4gICAgYWRkTmV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGZvcm0oKTtcbiAgICAgIGFkZE5ldy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICAgIGxldCBwbHVzU2lnbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbHVzU2lnbi5pZCA9ICdwbHVzU2lnbic7XG4gICAgcGx1c1NpZ24uaW5uZXJIVE1MID0gJysnO1xuICAgIGFkZE5ldy5hcHBlbmRDaGlsZChwbHVzU2lnbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGROZXcpO1xuXG4gICAgLy8gc2V0IG5hdmJhciBtZXNzYWdlXG4gICAgbGV0IG5hdk1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZNc2cnKTtcbiAgICBuYXZNc2cuaW5uZXJIVE1MID0gJ1Byb2plY3RzJztcblxuICAgIC8vIG9uUmVzaXplOiByZWZvcm1hdCB0ZXh0IHRoYXQgd291bGQgb3RoZXJ3aXNlIG92ZXJmbG93XG4gICAgZG9jdW1lbnQuYm9keS5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICBsZXQgdGl0bGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGl0bGUnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRpdGxlc1tpXS5pbm5lckhUTUwgPSByZW5kZXJVdGlscy5maXRTdHJpbmcoXG4gICAgICAgICAgcHJvamVjdHNbaV0sIGNvbnRlbnQub2Zmc2V0V2lkdGggLSA1NlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLy8gcHJpdmF0ZVxuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAodGhpc0lkKSA9PiB7XG4gICAgbGV0IGlkID0gdGhpc0lkLnNsaWNlKDcpO1xuICAgIGlmIChjb25maXJtKGBSZWFsbHkgZGVsZXRlIHByb2plY3Q6ICR7aWR9XFxuQU5EIGFueSB0b2RvIGl0ZW1zIGl0IGNvbnRhaW5zP2ApID09IHRydWUpIHtcbiAgICAgIG1vZGVsLmRlbGV0ZVByb2plY3QoaWQpO1xuICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdF8ke2lkfWApO1xuICAgICAgcHJvamVjdERpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByb2plY3REaXYpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcbiAgICAgIGxldCBwcm9qZWN0ID0gaW5wdXQudmFsdWU7XG4gICAgICBsZXQgZXJyb3JzID0gbW9kZWwuY3JlYXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgaW5kZXgoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyb3JzWzBdID09ICdub3RoaW5nIHRvIHNhdmUnKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZm9ybURpdik7XG4gICAgICAgIGFkZE5ldy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KGBTQVZFIEZBSUxFRCFcXG4qICR7ZXJyb3JzWzBdfWApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnZm9ybURpdicpO1xuICAgIGZvcm1EaXYuaWQgPSAncHJvamVjdEZvcm0nO1xuICAgIGxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGxhYmVsLmlubmVySFRNTCA9ICd0aXRsZTonO1xuICAgIGxhYmVsLmlkID0gJ3Byb2plY3RUaXRsZSc7XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5pZCA9ICdwcm9qZWN0VGl0bGUnO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBsZXQgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFByb2plY3QudHlwZSA9ICdidXR0b24nOyAvLyBwcmV2ZW50cyBhcHAgcmVsb2FkIG9uIGNsaWNrXG4gICAgYWRkUHJvamVjdC5pZCA9ICdhZGRQcm9qZWN0JztcbiAgICBhZGRQcm9qZWN0LmlubmVySFRNTCA9ICdkb25lJztcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXQpO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuXG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtRGl2KTtcbiAgfTtcblxuICByZXR1cm4geyBpbmRleCB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdHNSZW5kZXIgfVxuIiwiLy8gZnVuY3Rpb25zIGNvbW1vbiB0byB0b2Rvc1JlbmRlci5qcyBhbmQgcHJvamVjdHNSZW5kZXIuanNcbmNvbnN0IHJlbmRlclV0aWxzID0gKCgpID0+IHtcbiAgY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpdFN0cmluZyA9IChzdHJpbmcsIHdpZHRoKSA9PiB7XG4gICAgaWYgKHN0cmluZy5sZW5ndGggKiAxMiA+IHdpZHRoKSB7XG4gICAgICBsZXQgcmVtb3ZlID0gKE1hdGguZmxvb3Iod2lkdGggLyAxMikgLSAzKSAtIHN0cmluZy5sZW5ndGg7XG4gICAgICBzdHJpbmcgPSBzdHJpbmcuc2xpY2UoMCwgcmVtb3ZlKS5jb25jYXQoJy4uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG5cbiAgcmV0dXJuIHsgY2xlYXJDb250ZW50LCBmaXRTdHJpbmcgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHJlbmRlclV0aWxzIH1cbiIsImltcG9ydCB7IHJlbmRlclV0aWxzIH0gZnJvbSAnLi9yZW5kZXJVdGlscydcbmltcG9ydCB7IG1vZGVsIH0gZnJvbSAnLi9tb2RlbCdcblxuY29uc3QgdG9kb3NSZW5kZXIgPSAoKCkgPT4ge1xuXG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBpbmRleCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgZWRpdCA9ICh0aGlzSWQsIHByb2plY3QpID0+IHtcbiAgICAgIGZvcm0odGhpc0lkLCBwcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgcHJvamVjdCA9IHByb2plY3Quc2xpY2UoOCk7XG4gICAgbGV0IHRvZG9zID0gbW9kZWwuaW5kZXhUb2Rvcyhwcm9qZWN0KTtcbiAgICByZW5kZXJVdGlscy5jbGVhckNvbnRlbnQoKTtcblxuICAgIGxldCB0aXRsZVcgPSBjb250ZW50Lm9mZnNldFdpZHRoIC0gNTY7XG5cbiAgICBsZXQgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnZm9ybURpdicpO1xuICAgIGZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnbWVkaXVtRm9ybScpO1xuICAgIGZvcm1EaXYuaWQgPSAnZm9ybURpdic7XG4gICAgZm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaXRlbURpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7dG9kb3NbaV0ucHJpb3JpdHl9RGl2YCk7XG4gICAgICBkaXYuaWQgPSBgJHt0b2Rvc1tpXS5pZH1gO1xuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gW10uc2xpY2UuY2FsbChkaXYuY2hpbGRyZW4pO1xuICAgICAgICBpZiAoY2hpbGRyZW4uam9pbigpLmluY2x1ZGVzKCdbb2JqZWN0IEhUTUxGb3JtRWxlbWVudF0nKSA9PSBmYWxzZSkge1xuICAgICAgICAgIGVkaXQodGhpcy5pZCwgcHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgICAgY2hlY2tib3guaWQgPSBgZGVsZXRlXyR7dG9kb3NbaV0uaWR9YDtcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIG1vZGVsLmRlbGV0ZVRvZG8odGhpcy5pZC5zbGljZSg3KSk7XG4gICAgICAgIHJlbW92ZVRvZG8odGhpcy5pZCk7XG4gICAgICB9KTtcbiAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICB0aXRsZS5pbm5lckhUTUwgPSByZW5kZXJVdGlscy5maXRTdHJpbmcodG9kb3NbaV0udGl0bGUsIHRpdGxlVyk7XG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgdGl0bGUuaWQgPSBgdGl0bGVfJHt0b2Rvc1tpXS5pZH1gO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuXG4gICAgbGV0IGFkZE5ldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZE5ldy5pZCA9ICdhZGROZXcnO1xuICAgIGFkZE5ldy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBmb3JtKHRoaXMuaWQsIHByb2plY3QpO1xuICAgICAgYWRkTmV3LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gICAgbGV0IHBsdXNTaWduID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBsdXNTaWduLmlkID0gJ3BsdXNTaWduJztcbiAgICBwbHVzU2lnbi5pbm5lckhUTUwgPSAnKyc7XG4gICAgYWRkTmV3LmFwcGVuZENoaWxkKHBsdXNTaWduKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZE5ldyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm1EaXYpO1xuXG4gICAgLy8gc2V0IG5hdmJhciBuYXZiYXIgbWVzc2FnZVxuICAgIGxldCBuYXZNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2TXNnJyk7XG4gICAgbmF2TXNnLmlubmVySFRNTCA9IHJlbmRlclV0aWxzLmZpdFN0cmluZyhcbiAgICAgIHByb2plY3QsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtc2dEaXYnKS5vZmZzZXRXaWR0aCAtIDEyXG4gICAgKTtcblxuICAgIC8vIG9uUmVzaXplOiByZWZvcm1hdCB0ZXh0IHRoYXQgd291bGQgb3RoZXJ3aXNlIG92ZXJmbG93XG4gICAgZG9jdW1lbnQuYm9keS5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICBuYXZNc2cuaW5uZXJIVE1MID0gcmVuZGVyVXRpbHMuZml0U3RyaW5nKFxuICAgICAgICBwcm9qZWN0LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXNnRGl2Jykub2Zmc2V0V2lkdGggLSAxMlxuICAgICAgKTtcbiAgICAgIGxldCB0aXRsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aXRsZScpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGl0bGVzW2ldLmlubmVySFRNTCA9IHJlbmRlclV0aWxzLmZpdFN0cmluZyhcbiAgICAgICAgICB0b2Rvc1tpXS50aXRsZSwgY29udGVudC5vZmZzZXRXaWR0aCAtIDU2XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBwcml2YXRlOlxuXG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAodGhpc0lkKSA9PiB7XG4gICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpc0lkKTtcbiAgICBjaGVja0JveC5pZCA9ICdkZWxldGVkJztcbiAgICBsZXQgaWQgPSB0aGlzSWQuc2xpY2UoNyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGxldCB0b2RvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgdG9kb0Rpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvZG9EaXYpO1xuICAgIH0sIDMwMCk7XG4gIH07XG5cbiAgLy8gPyB3aWxsIHVzZSBwYXJlbnQgZWxlbG1lbnQgYXMgcGFyYW0sIG5vdCBpZCwgdGhlbiBmaW5kIGlkcyBuZWVkZWRcbiAgY29uc3QgZm9ybSA9ICh0aGlzSWQsIHRoaXNQcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgYWRkSW5wdXQgPSAoaWQpID0+IHtcbiAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICBsYWJlbC5pbm5lckhUTUwgPSBgJHtpZH06YDtcbiAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBpZiAoaWQgPT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoYCR7aWR9YCk7XG4gICAgICB9XG4gICAgICBpbnB1dC5pZCA9IGAke2lkfSR7dGhpc0lkfWA7XG4gICAgICBpZiAodGhpc0lkICE9ICdhZGROZXcnKSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gbW9kZWwuZ2V0VG9kbyh0aGlzSWQpW2Ake2lkfWBdO1xuICAgICAgfVxuXG4gICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFNlbGVjdGlvbiA9ICh0eXBlKSA9PiB7XG4gICAgICBsZXQgb3B0aW9ucyA9IFsnaGlnaCcsICdtZWRpdW0nLCAnbG93J107XG4gICAgICBpZiAodHlwZSA9PSAncHJvamVjdCcpIHsgb3B0aW9ucyA9IG1vZGVsLnByb2plY3RzOyB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25zW2ldO1xuICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gb3B0aW9uc1tpXTtcbiAgICAgICAgaWYgKHRoaXNJZCA9PSAnYWRkTmV3Jykge1xuICAgICAgICAgIGlmIChvcHRpb25zW2ldID09ICdtZWRpdW0nIHx8IG9wdGlvbnNbaV0gPT0gdGhpc1Byb2plY3QpIHtcbiAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICgob3B0aW9uc1tpXSA9PSBtb2RlbC5nZXRUb2RvKHRoaXNJZCkucHJpb3JpdHkpIHx8XG4gICAgICAgICAgICAgICAgICAgIChvcHRpb25zW2ldID09IG1vZGVsLmdldFRvZG8odGhpc0lkKS5wcm9qZWN0KSkge1xuICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT0gJ3Byb2plY3QnKSB7IHByb2plY3RzLmFwcGVuZENoaWxkKG9wdGlvbik7IH1cbiAgICAgICAgZWxzZSB7IHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7IH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZGl2Q29sb3IgPSAodGhpc0RpdikgPT4ge1xuICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdsb3dGb3JtJyk7XG4gICAgICB0aGlzRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bUZvcm0nKTtcbiAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaEZvcm0nKTtcbiAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LmFkZChgJHtwcmlvcml0eS52YWx1ZX1Gb3JtYCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcbiAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICB0aXRsZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRpdGxlJHt0aGlzSWR9YCkudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb24ke3RoaXNJZH1gKS52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcmlvcml0eSR7dGhpc0lkfWApLnZhbHVlLFxuICAgICAgICBwcm9qZWN0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdHMke3RoaXNJZH1gKS52YWx1ZVxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgaWYgKCh0aGlzUHJvamVjdCA9PSBkYXRhLnByb2plY3QgfHwgdGhpc1Byb2plY3QgPT0gJ0FsbCB0by1kbyBpdGVtcycpIHx8XG4gICAgICAgICAgY29uZmlybShgUmVhbGx5IHNhdmUgdG8gb3RoZXIgcHJvamVjdDogJHtkYXRhLnByb2plY3R9P2ApID09IHRydWUpIHtcbiAgICAgICAgbGV0IGVycm9ycyA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzSWQgPT0gJ2FkZE5ldycpIHsgZXJyb3JzID0gbW9kZWwuY3JlYXRlVG9kbyhkYXRhKTsgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgIGVycm9ycyA9IG1vZGVsLmVkaXRUb2RvKGRhdGEsIHRoaXNJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3JzWzBdID09ICdub3RoaW5nIHRvIHNhdmUnKSB7XG4gICAgICAgICAgZm9ybURpdi5yZW1vdmVDaGlsZCh0b2RvRm9ybSk7XG4gICAgICAgICAgZm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIGFkZE5ldy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSBlbHNlIGlmIChlcnJvcnNbMF0gPT0gJ3VubW92ZWQnKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyB0aGlzRGl2LnJlbW92ZUNoaWxkKHRvZG9Gb3JtKTsgfSwgMTApO1xuICAgICAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybURpdicpO1xuICAgICAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LnJlbW92ZShgJHttb2RlbC5nZXRUb2RvKHRoaXNJZCkucHJpb3JpdHl9Rm9ybWApO1xuICAgICAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LmFkZCgnaXRlbURpdicpO1xuICAgICAgICAgIHRoaXNEaXYuY2xhc3NMaXN0LmFkZChgJHttb2RlbC5nZXRUb2RvKHRoaXNJZCkucHJpb3JpdHl9RGl2YCk7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlbGV0ZV8ke3RoaXNJZH1gKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGl0bGVfJHt0aGlzSWR9YCkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0gZWxzZSBpZiAoZXJyb3JzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgaW5kZXgoYHByb2plY3RfJHt0aGlzUHJvamVjdH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgbWVzc2FnZSA9ICdTQVZFIEZBSUxFRCEnO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXJyb3JzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgbWVzc2FnZSArPSBgXFxuKiAke2Vycm9yc1tpXX1gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhbGVydChtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdG9kb0Zvcm0uaWQgPSBgZm9ybSR7dGhpc0lkfWA7XG4gICAgYWRkSW5wdXQoJ3RpdGxlJyk7XG4gICAgYWRkSW5wdXQoJ2Rlc2NyaXB0aW9uJyk7XG5cbiAgICBsZXQgbGFiZWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGFiZWxzRGl2LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbkRpdicpO1xuICAgIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBwcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5TGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9ICdwcmlvcml0eTonO1xuICAgIGxhYmVsc0Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuICAgIGxldCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIHByb2plY3RMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGFiZWwnKTtcbiAgICBwcm9qZWN0TGFiZWwuaW5uZXJIVE1MID0gJ3Byb2plY3Q6JztcbiAgICBsYWJlbHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcblxuICAgIGxldCBkb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZG9uZS50eXBlID0gJ2J1dHRvbic7IC8vIHByZXZlbnRzIGFwcCByZWxvYWQgb24gY2xpY2tcbiAgICBkb25lLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICBkb25lLmlubmVySFRNTCA9ICdkb25lJztcblxuICAgIGxhYmVsc0Rpdi5hcHBlbmRDaGlsZChkb25lKTtcblxuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGxhYmVsc0Rpdik7XG5cbiAgICBsZXQgc2VsZWN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VsZWN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbkRpdicpO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG4gICAgcHJpb3JpdHkuaWQgPSBgcHJpb3JpdHkke3RoaXNJZH1gO1xuICAgIGFkZFNlbGVjdGlvbigncHJpb3JpdHknKTtcblxuICAgIHNlbGVjdGlvbkRpdi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICAgIHByb2plY3RzLmlkID0gYHByb2plY3RzJHt0aGlzSWR9YDtcbiAgICBhZGRTZWxlY3Rpb24oJ3Byb2plY3QnKTtcbiAgICBzZWxlY3Rpb25EaXYuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuXG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0aW9uRGl2KTtcblxuICAgIGxldCB0aGlzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1EaXYnKTtcblxuICAgIGlmICh0aGlzSWQgIT0gJ2FkZE5ldycpIHsgLy8gaW5zZXJ0ICdlZGl0JyBmb3JtIGF0IHRvZG8gaXRlbSBwb3NpdGlvblxuICAgICAgdGhpc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXNJZCk7XG4gICAgICB0aGlzRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZWRpdCh0aGlzLmlkLCBwcm9qZWN0KTtcbiAgICAgIH0pO1xuICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdpdGVtRGl2Jyk7XG4gICAgICB0aGlzRGl2LmNsYXNzTGlzdC5yZW1vdmUoYCR7bW9kZWwuZ2V0VG9kbyh0aGlzSWQpLnByaW9yaXR5fURpdmApO1xuICAgICAgdGhpc0Rpdi5jbGFzc0xpc3QuYWRkKCdmb3JtRGl2Jyk7XG4gICAgICBkaXZDb2xvcih0aGlzRGl2KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZWxldGVfJHt0aGlzSWR9YCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0aXRsZV8ke3RoaXNJZH1gKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGRvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdCk7XG4gICAgcHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHsgZGl2Q29sb3IodGhpc0Rpdik7IH0pO1xuICAgIHRoaXNEaXYuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICAgIHRoaXNEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH07XG5cbiAgcmV0dXJuIHsgaW5kZXggfTtcblxufSkoKTtcblxuZXhwb3J0IHsgdG9kb3NSZW5kZXIgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==