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

  const validateTodo = (data, edit = false) => {
    let errors = [];
    if (data.title == '') { errors.push('title cannot be blank'); }
    else if (data.title.length > 64) {
      errors.push('title cannot contain more than 64 characters');
    }
    if (data.description.length > 256) {
      errors.push('description cannot contain more than 256 characters');
    }

    if (edit == false) {
      if (data.title == '' && data.description == '') {
        errors = ['nothing to save'];
      } else {
        let projectTodos = indexTodos(data.project);
        for (let i = 0; i < projectTodos.length; i++) {
          if (projectTodos[i].title.toLowerCase() == data.title.toLowerCase()) {
            errors.push(
              'title cannot match existing todo item title in same project'
            );
          }
        }
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
    todos, projects, indexTodos, createTodo, deleteTodo, createProject,
    deleteProject, initialize, logTodos
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
    project = project.slice(8);
    let todos = _model__WEBPACK_IMPORTED_MODULE_1__["model"].indexTodos(project);
    _renderUtils__WEBPACK_IMPORTED_MODULE_0__["renderUtils"].clearContent();

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
        if (options[i] == 'medium' || options[i] == thisProject) {
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

      if ((thisProject == data.project || thisProject == 'All to-do items') ||
          confirm(`Really save to other project: ${data.project}?`) == true) {
        let errors = _model__WEBPACK_IMPORTED_MODULE_1__["model"].createTodo(data);
        if (errors.length == 0 || errors[0] == 'nothing to save' ) {
          if (errors[0] == 'nothing to save') {
            if (thisId == 'addNew') { content.removeChild(formDiv); }
            addNew.style.display = 'block';
          } else {
            index(`project_${thisProject}`);
          }
        } else {
          let message = 'SAVE FAILED!';
          for (let i = 0; i < errors.length; i ++) {
            message += `\n* ${errors[i]}`;
          }
          alert(message);
        }
      }
    };

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
    labelsDiv.appendChild(priorityLabel);

    let projectLabel = document.createElement('h4');
    projectLabel.id = 'projectLabel';
    projectLabel.innerHTML = 'project:';
    labelsDiv.appendChild(projectLabel);

    let done = document.createElement('button');
    done.type = 'button'; // prevents app reload on click
    done.id = 'done';
    done.innerHTML = 'done';
    done.addEventListener("click", submit);
    labelsDiv.appendChild(done);

    todoForm.appendChild(labelsDiv);

    let selectionDiv = document.createElement('div');
    selectionDiv.classList.add('selectionDiv');
    let priority = document.createElement('select');
    priority.id = 'priority';
    addSelection('priority');
    priority.addEventListener("change", divColor);
    selectionDiv.appendChild(priority);

    let projects = document.createElement('select');
    projects.id = 'projects';
    addSelection('projects');
    selectionDiv.appendChild(projects);

    todoForm.appendChild(selectionDiv);

    formDiv.appendChild(todoForm);
    content.appendChild(formDiv);
  };

  return { index };

})();




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcFJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdHNSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlclV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy90b2Rvc1JlbmRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQWlEO0FBQ047O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUFjO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FB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cUJBQXFCLDRDQUFLO0FBQzFCO0FBQ0E7QUFDQSxxQ0FBcUMsOEJBQThCO0FBQ25FO0FBQ0EsV0FBVztBQUNYLDZCQUE2QixZQUFZO0FBQ3pDO0FBQ0EsU0FBUztBQUNUO0FBQ0EseUJBQXlCLG1CQUFtQjtBQUM1Qyw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUssT0FBTyx3Q0FBd0M7O0FBRXBEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFVBQVU7O0FBRVYsQ0FBQzs7QUFFcUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgcHJvamVjdHNSZW5kZXIgfSBmcm9tICcuL3Byb2plY3RzUmVuZGVyJ1xuaW1wb3J0IHsgdG9kb3NSZW5kZXIgfSBmcm9tICcuL3RvZG9zUmVuZGVyJ1xuXG5jb25zdCBhcHBSZW5kZXIgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IG5hdkJ0bkNsaWNrID0gKCkgPT4ge1xuICAgIGlmIChuYXZCdG4uY2xhc3NMaXN0LnZhbHVlID09ICdmb2xkZXJzSWNvbicpIHtcbiAgICAgIG5hdkJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdmb2xkZXJzSWNvbicpO1xuICAgICAgbmF2QnRuLmNsYXNzTGlzdC5hZGQoJ2V5ZUljb24nKTtcbiAgICAgIG5hdkJ0bi50aXRsZSA9ICd2aWV3IGFsbCB0b2RvIGl0ZW1zIGZyb20gYWxsIHByb2plY3RzJztcbiAgICAgIHByb2plY3RzUmVuZGVyLmluZGV4KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdkJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdleWVJY29uJyk7XG4gICAgICBuYXZCdG4uY2xhc3NMaXN0LmFkZCgnZm9sZGVyc0ljb24nKTtcbiAgICAgIG5hdkJ0bi50aXRsZSA9ICd2aWV3IHByb2plY3RzJztcbiAgICAgIHRvZG9zUmVuZGVyLmluZGV4KCdwcm9qZWN0X0FsbCB0by1kbyBpdGVtcycpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgIGxldCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJyk7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgLy8gc2V0IG5hdmJhciBzY3JvbGwgYmVoYXZpb3VyIChoaWRlIC8gcmV2ZWFsKVxuICAgIHZhciBwcmV2U2Nyb2xscG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICBpZiAocHJldlNjcm9sbHBvcyA+IGN1cnJlbnRTY3JvbGxQb3MpIHtcbiAgICAgICAgbmF2YmFyLnN0eWxlLnRvcCA9IFwiMFwiO1xuICAgICAgICBjb250ZW50LnN0eWxlLm1hcmdpblRvcCA9ICc1MHB4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdmJhci5zdHlsZS50b3AgPSAnLTUwcHgnO1xuICAgICAgICBjb250ZW50LnN0eWxlLm1hcmdpblRvcCA9ICcwcHgnO1xuICAgICAgfVxuICAgICAgcHJldlNjcm9sbHBvcyA9IGN1cnJlbnRTY3JvbGxQb3M7XG4gICAgfVxuXG4gICAgLy8gc2V0IGluaXRpYWwgbmF2QnRuIGljb24gJiBhZGQgY2xpY2sgZXZlbnRcbiAgICBsZXQgbmF2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdkJ0bicpO1xuICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCdmb2xkZXJzSWNvbicpO1xuICAgIG5hdkJ0bi50aXRsZSA9ICd2aWV3IHByb2plY3RzJztcbiAgICBuYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5hdkJ0bkNsaWNrKTtcblxuICAgIHRvZG9zUmVuZGVyLmluZGV4KCdwcm9qZWN0X0FsbCB0by1kbyBpdGVtcycpO1xuICB9O1xuXG4gIC8vIERFQlVHOiBjcmVhdGUgY29udGVudCB0YWxsZXIgdGhhbiBwYWdlIHRvIHRlc3Qgc2Nyb2xsIGVmZmVjdHNcbiAgY29uc3QgcGxhY2Vob2xkZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGxldCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcGFjZXIuc3R5bGUuaGVpZ2h0ID0gJzMwcHgnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc3BhY2VyKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA3MDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgcGFyYS5pbm5lckhUTUwgPSBcInBsYWNlaG9sZGVyIGNvbnRlbnRcIjtcbiAgICAgIHBhcmEuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgfVxuXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNpemUnKSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgaW5pdGlhbGl6ZSwgcGxhY2Vob2xkZXJDb250ZW50IH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7IGFwcFJlbmRlciB9XG4iLCIvLyBEZWZhdWx0IGRhdGEgdG8gdXNlIHdoZW4gbG9jYWxTdG9yYWdlIHVuYXZhaWxhYmxlIC8gY29udGFpbnMgbm8gYXBwIGRhdGFcbmNvbnN0IGV4YW1wbGVEYXRhID0gKCgpID0+IHtcbiAgbGV0IHRvZG9zID0gW1xuICAgIHsgdGl0bGU6ICdkbyBsYXVuZHJ5JywgZGVzY3JpcHRpb246ICdyZW1lbWJlciBqZWFucycsXG4gICAgICBwcmlvcml0eTogJ2hpZ2gnLCBwcm9qZWN0OiAncmVndWxhciBzdHVmZicgfSxcbiAgICB7IHRpdGxlOiAnd2FzaCBjYXInLCBkZXNjcmlwdGlvbjogJ25pbCcsXG4gICAgICBwcmlvcml0eTogJ2xvdycsIHByb2plY3Q6ICdyZWd1bGFyIHN0dWZmJyB9LFxuICAgIHsgdGl0bGU6ICdidXkgYmVlcicsIGRlc2NyaXB0aW9uOiAnS3JvbmVuYmVyZycsXG4gICAgICBwcmlvcml0eTogJ21lZGl1bScsIHByb2plY3Q6ICdyZWd1bGFyIHN0dWZmJyB9LFxuICAgIHsgdGl0bGU6ICdyZXNlYXJjaCBhcnJvdyBmdW5jdGlvbnMnLFxuICAgICAgZGVzY3JpcHRpb246ICdtYWtlIG5vdGVzIGFuZCBzYXZlIGxpbmtzJyxcbiAgICAgIHByaW9yaXR5OiAnaGlnaCcsIHByb2plY3Q6ICd3cml0ZSBhcnRpY2xlJyB9LFxuICAgIHsgdGl0bGU6ICd3cml0ZSBib2R5IG9mIGFydGljbGUnLCBkZXNjcmlwdGlvbjogJ2FjdHVhbGx5IHdyaXRlIHRoZSB0aGluZycsXG4gICAgICBwcmlvcml0eTogJ21lZGl1bScsIHByb2plY3Q6ICd3cml0ZSBhcnRpY2xlJyB9LFxuICAgIHsgdGl0bGU6ICdwcm9vZnJlYWQgYXJ0aWNsZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ2NoZWNrIGZvciBlcnJvcnMgYW5kIGJhZCBncmFtbWFyJyxcbiAgICAgIHByaW9yaXR5OiAnbG93JywgcHJvamVjdDogJ3dyaXRlIGFydGljbGUnIH0sXG4gICAgeyB0aXRsZTogJ3Jlc2VhcmNoIElJRkVzJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnd2hhdCBhcmUgdGhleSwgYW5kIHdoZW4gYXJlIHRoZXkgdXNlZD8nLFxuICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLCBwcm9qZWN0OiAnd3JpdGUgYXJ0aWNsZScgfSxcbiAgICB7IHRpdGxlOiAndG9kbyB3aXRoIGV4YW1wbGUgcmVhbGx5IGxvbmcgdGl0bGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdmb3IgdGVzdGluZyBsb25nIHN0cmluZ3MnLCBwcmlvcml0eTogJ21lZGl1bScsXG4gICAgICBwcm9qZWN0OiAncHJvamVjdCB3aXRoIHJlYWxseSBsb25nIHRpdGxlJyB9XG4gIF07XG5cbiAgbGV0IHByb2plY3RzID0gW1xuICAgICdyZWd1bGFyIHN0dWZmJyxcbiAgICAnd3JpdGUgYXJ0aWNsZScsXG4gICAgJ3Byb2plY3Qgd2l0aCByZWFsbHkgbG9uZyB0aXRsZSdcbiAgXTtcblxuICByZXR1cm4ge3RvZG9zLCBwcm9qZWN0c31cbn0pKCk7XG5cbmV4cG9ydCB7IGV4YW1wbGVEYXRhIH1cbiIsImltcG9ydCB7IG1vZGVsIH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7IGFwcFJlbmRlciB9IGZyb20gJy4vYXBwUmVuZGVyJ1xuXG5tb2RlbC5pbml0aWFsaXplKCk7XG5hcHBSZW5kZXIuaW5pdGlhbGl6ZSgpO1xuXG5cbi8vIGFkZCBwbGFjZWhvbGRlciBjb250ZW50LCBmb3IgdGVzdGluZyBvZiBuYXZiYXIgaGlkZS9yZXZlYWwgb24gc2Nyb2xsOlxuLy9hcHBSZW5kZXIucGxhY2Vob2xkZXJDb250ZW50KCk7XG4iLCJpbXBvcnQgeyBleGFtcGxlRGF0YSB9IGZyb20gJy4vZXhhbXBsZURhdGEnXG5cbmNvbnN0IG1vZGVsID0gKCgpID0+IHtcblxuICBsZXQgdG9kb3MgPSBbXTtcbiAgbGV0IHByb2plY3RzID0gW107XG5cbiAgY29uc3QgdW5pcXVlSWQgPSAoKCkgPT4ge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICsrY291bnQ7XG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBjb25zdCB0b2RvRmFjdG9yeSA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3Qgb3V0cHV0ID0gKCkgPT4gY29uc29sZS5sb2coYGlkOiAke2lkfSwgdGl0bGU6ICR7dGl0bGV9LCBkZXNjOiAke2Rlc2NyaXB0aW9ufSwgcHJpb3JpdHk6ICR7cHJpb3JpdHl9LCBwcm9qZWN0OiAke3Byb2plY3R9YCk7XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IG5ld1RpdGxlID0+IHRpdGxlID0gbmV3VGl0bGU7XG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbiA9PiBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gbmV3UHJpb3JpdHkgPT4gcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICBjb25zdCBzZXRQcm9qZWN0ID0gbmV3UHJvamVjdCA9PiBwcm9qZWN0ID0gbmV3UHJvamVjdDtcblxuICAgIHJldHVybiB7XG4gICAgICBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCwgc2V0VGl0bGUsIHNldERlc2NyaXB0aW9uLFxuICAgICAgc2V0UHJpb3JpdHksIHNldFByb2plY3QsIG91dHB1dFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAvLyBDaGFuZ2UgdGhpcyB0byBhIGNoZWNrIGZvciBsb2NhbCBzdG9yYWdlLCBldGMuXG4gICAgbGV0IHRvZG9zRXhhbXBsZXMgPSBleGFtcGxlRGF0YS50b2RvcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zRXhhbXBsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvZG9zLnB1c2goXG4gICAgICAgIHRvZG9GYWN0b3J5KHVuaXF1ZUlkKCksIHRvZG9zRXhhbXBsZXNbaV0udGl0bGUsIHRvZG9zRXhhbXBsZXNbaV0uZGVzY3JpcHRpb24sXG4gICAgICAgIHRvZG9zRXhhbXBsZXNbaV0ucHJpb3JpdHksIHRvZG9zRXhhbXBsZXNbaV0ucHJvamVjdFxuICAgICAgKSk7XG4gICAgfVxuXG4gICAgbGV0IHByb2plY3RzRXhhbXBsZXMgPSBleGFtcGxlRGF0YS5wcm9qZWN0cztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzRXhhbXBsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdHNFeGFtcGxlc1tpXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRlVG9kbyA9IChkYXRhLCBlZGl0ID0gZmFsc2UpID0+IHtcbiAgICBsZXQgZXJyb3JzID0gW107XG4gICAgaWYgKGRhdGEudGl0bGUgPT0gJycpIHsgZXJyb3JzLnB1c2goJ3RpdGxlIGNhbm5vdCBiZSBibGFuaycpOyB9XG4gICAgZWxzZSBpZiAoZGF0YS50aXRsZS5sZW5ndGggPiA2NCkge1xuICAgICAgZXJyb3JzLnB1c2goJ3RpdGxlIGNhbm5vdCBjb250YWluIG1vcmUgdGhhbiA2NCBjaGFyYWN0ZXJzJyk7XG4gICAgfVxuICAgIGlmIChkYXRhLmRlc2NyaXB0aW9uLmxlbmd0aCA+IDI1Nikge1xuICAgICAgZXJyb3JzLnB1c2goJ2Rlc2NyaXB0aW9uIGNhbm5vdCBjb250YWluIG1vcmUgdGhhbiAyNTYgY2hhcmFjdGVycycpO1xuICAgIH1cblxuICAgIGlmIChlZGl0ID09IGZhbHNlKSB7XG4gICAgICBpZiAoZGF0YS50aXRsZSA9PSAnJyAmJiBkYXRhLmRlc2NyaXB0aW9uID09ICcnKSB7XG4gICAgICAgIGVycm9ycyA9IFsnbm90aGluZyB0byBzYXZlJ107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcHJvamVjdFRvZG9zID0gaW5kZXhUb2RvcyhkYXRhLnByb2plY3QpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RUb2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChwcm9qZWN0VG9kb3NbaV0udGl0bGUudG9Mb3dlckNhc2UoKSA9PSBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKFxuICAgICAgICAgICAgICAndGl0bGUgY2Fubm90IG1hdGNoIGV4aXN0aW5nIHRvZG8gaXRlbSB0aXRsZSBpbiBzYW1lIHByb2plY3QnXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG4gIH07XG5cbiAgY29uc3QgdmFsaWRhdGVQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcbiAgICBsZXQgZXJyb3JzID0gW107XG4gICAgaWYgKG5ld1Byb2plY3QgPT0gJycpIHsgZXJyb3JzLnB1c2goJ25vdGhpbmcgdG8gc2F2ZScpOyB9XG4gICAgZWxzZSBpZiAobmV3UHJvamVjdC5sZW5ndGggPiA0Nikge1xuICAgICAgZXJyb3JzLnB1c2goJ3RpdGxlIGNhbm5vdCBjb250YWluIG1vcmUgdGhhbiA0NiBjaGFyYWN0ZXJzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG5ld1Byb2plY3QudG9Mb3dlckNhc2UoKSA9PSBwcm9qZWN0c1tpXS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goJ3RpdGxlIGNhbm5vdCBtYXRjaCBleGlzdGluZyBwcm9qZWN0IHRpdGxlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzO1xuICB9O1xuXG4gIC8vIERFQlVHOlxuICBjb25zdCBsb2dUb2RvcyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvZG9zW2ldLm91dHB1dCgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBDLlIuVS5EOlxuXG4gIGNvbnN0IGluZGV4VG9kb3MgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHNvcnRCeVByaW9yaXR5ID0gKHVuc29ydGVkKSA9PiB7XG4gICAgICBsZXQgc29ydGVkID0gW10sIGhpZ2ggPSBbXSwgbWVkaXVtID0gW10sIGxvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bnNvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodW5zb3J0ZWRbaV0ucHJpb3JpdHkgPT0gJ2hpZ2gnKSB7IGhpZ2gucHVzaCh1bnNvcnRlZFtpXSkgfVxuICAgICAgICBlbHNlIGlmICh1bnNvcnRlZFtpXS5wcmlvcml0eSA9PSAnbWVkaXVtJykgeyBtZWRpdW0ucHVzaCh1bnNvcnRlZFtpXSkgfVxuICAgICAgICBlbHNlIHsgbG93LnB1c2godW5zb3J0ZWRbaV0pIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzb3J0ZWQgPSBoaWdoLmNvbmNhdChtZWRpdW0uY29uY2F0KGxvdykpO1xuICAgIH07XG5cbiAgICBpZiAocHJvamVjdCA9PSAnQWxsIHRvLWRvIGl0ZW1zJykge1xuICAgICAgcmV0dXJuIHNvcnRCeVByaW9yaXR5KHRvZG9zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHByb2plY3RUb2RvcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdCA9PSB0b2Rvc1tpXS5wcm9qZWN0KSB7IHByb2plY3RUb2Rvcy5wdXNoKG1vZGVsLnRvZG9zW2ldKTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNvcnRCeVByaW9yaXR5KHByb2plY3RUb2Rvcyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSAoZm9ybURhdGEpID0+IHtcbiAgICBsZXQgZXJyb3JzID0gdmFsaWRhdGVUb2RvKGZvcm1EYXRhKTtcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0b2Rvcy5wdXNoKFxuICAgICAgICB0b2RvRmFjdG9yeSh1bmlxdWVJZCgpLCBmb3JtRGF0YS50aXRsZSwgZm9ybURhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgIGZvcm1EYXRhLnByaW9yaXR5LCBmb3JtRGF0YS5wcm9qZWN0XG4gICAgICApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAoaWQpID0+IHtcbiAgICB0b2Rvcy5zcGxpY2UodG9kb3MuaW5kZXhPZih0b2Rvcy5maW5kKGUgPT4gZS5pZCA9PSBpZCkpLCAxKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcbiAgICBsZXQgZXJyb3JzID0gdmFsaWRhdGVQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIGlmIChlcnJvcnMubGVuZ3RoID09IDApIHsgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTsgfVxuXG4gICAgcmV0dXJuIGVycm9ycztcbiAgfTtcblxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodG9kb3NbaV0ucHJvamVjdCA9PSBwcm9qZWN0KSB7XG4gICAgICAgIGRlbGV0ZVRvZG8odG9kb3NbaV0uaWQpO1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgfVxuICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKHByb2plY3RzLmZpbmQoZSA9PiBlID09IHByb2plY3QpKSwgMSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB0b2RvcywgcHJvamVjdHMsIGluZGV4VG9kb3MsIGNyZWF0ZVRvZG8sIGRlbGV0ZVRvZG8sIGNyZWF0ZVByb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdCwgaW5pdGlhbGl6ZSwgbG9nVG9kb3NcbiAgfTtcblxufSkoKTtcblxuZXhwb3J0IHsgbW9kZWwgfVxuIiwiaW1wb3J0IHsgcmVuZGVyVXRpbHMgfSBmcm9tICcuL3JlbmRlclV0aWxzJ1xuaW1wb3J0IHsgbW9kZWwgfSBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IHsgdG9kb3NSZW5kZXIgfSBmcm9tICcuL3RvZG9zUmVuZGVyJ1xuXG5jb25zdCBwcm9qZWN0c1JlbmRlciA9ICgoKSA9PiB7XG5cbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICAgIHJlbmRlclV0aWxzLmNsZWFyQ29udGVudCgpO1xuICAgIGxldCBwcm9qZWN0cyA9IG1vZGVsLnByb2plY3RzO1xuICAgIGxldCBuYXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2QnRuJyk7XG4gICAgbGV0IHRpdGxlVyA9IGNvbnRlbnQub2Zmc2V0V2lkdGggLSA1NjtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW1EaXYnKTtcbiAgICAgIGRpdi5pZCA9IGBwcm9qZWN0XyR7cHJvamVjdHNbaV19YDtcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIG5hdkJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdleWVJY29uJyk7XG4gICAgICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCdmb2xkZXJzSWNvbicpO1xuICAgICAgICBuYXZCdG4udGl0bGUgPSAndmlldyBwcm9qZWN0cyc7XG4gICAgICAgIHRvZG9zUmVuZGVyLmluZGV4KHRoaXMuaWQpO1xuICAgICAgfSk7XG4gICAgICBsZXQgZGVsZXRlYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkZWxldGVib3guY2xhc3NMaXN0LmFkZCgnZGVsZXRlYm94Jyk7XG4gICAgICBkZWxldGVib3guaWQgPSBgZGVsZXRlXyR7cHJvamVjdHNbaV19YDtcbiAgICAgIGRlbGV0ZWJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhgY2xpY2tlZDogJHt0aGlzLmlkfWApO1xuICAgICAgICByZW1vdmVQcm9qZWN0KHRoaXMuaWQpO1xuICAgICAgfSk7XG4gICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gcmVuZGVyVXRpbHMuZml0U3RyaW5nKHByb2plY3RzW2ldLCB0aXRsZVcpO1xuICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChkZWxldGVib3gpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB9XG5cbiAgICBsZXQgYWRkTmV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkTmV3LmlkID0gJ2FkZE5ldyc7XG4gICAgYWRkTmV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGZvcm0oKTtcbiAgICAgIGFkZE5ldy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICAgIGxldCBwbHVzU2lnbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbHVzU2lnbi5pZCA9ICdwbHVzU2lnbic7XG4gICAgcGx1c1NpZ24uaW5uZXJIVE1MID0gJysnO1xuICAgIGFkZE5ldy5hcHBlbmRDaGlsZChwbHVzU2lnbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGROZXcpO1xuXG4gICAgLy8gc2V0IG5hdmJhciBtZXNzYWdlXG4gICAgbGV0IG5hdk1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZNc2cnKTtcbiAgICBuYXZNc2cuaW5uZXJIVE1MID0gJ1Byb2plY3RzJztcblxuICAgIC8vIG9uUmVzaXplOiByZWZvcm1hdCB0ZXh0IHRoYXQgd291bGQgb3RoZXJ3aXNlIG92ZXJmbG93XG4gICAgZG9jdW1lbnQuYm9keS5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICBsZXQgdGl0bGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGl0bGUnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRpdGxlc1tpXS5pbm5lckhUTUwgPSByZW5kZXJVdGlscy5maXRTdHJpbmcoXG4gICAgICAgICAgcHJvamVjdHNbaV0sIGNvbnRlbnQub2Zmc2V0V2lkdGggLSA1NlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLy8gcHJpdmF0ZVxuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAodGhpc0lkKSA9PiB7XG4gICAgbGV0IGlkID0gdGhpc0lkLnNsaWNlKDcpO1xuICAgIGlmIChjb25maXJtKGBSZWFsbHkgZGVsZXRlIHByb2plY3Q6ICR7aWR9XFxuQU5EIGFueSB0b2RvIGl0ZW1zIGl0IGNvbnRhaW5zP2ApID09IHRydWUpIHtcbiAgICAgIG1vZGVsLmRlbGV0ZVByb2plY3QoaWQpO1xuICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdF8ke2lkfWApO1xuICAgICAgcHJvamVjdERpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByb2plY3REaXYpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcbiAgICAgIGxldCBwcm9qZWN0ID0gaW5wdXQudmFsdWU7XG4gICAgICBsZXQgZXJyb3JzID0gbW9kZWwuY3JlYXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgaW5kZXgoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyb3JzWzBdID09ICdub3RoaW5nIHRvIHNhdmUnKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZm9ybURpdik7XG4gICAgICAgIGFkZE5ldy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KGBTQVZFIEZBSUxFRCFcXG4qICR7ZXJyb3JzWzBdfWApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnZm9ybURpdicpO1xuICAgIGZvcm1EaXYuaWQgPSAncHJvamVjdEZvcm0nO1xuICAgIGxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGxhYmVsLmlubmVySFRNTCA9ICd0aXRsZTonO1xuICAgIGxhYmVsLmlkID0gJ3Byb2plY3RUaXRsZSc7XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5pZCA9ICdwcm9qZWN0VGl0bGUnO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBsZXQgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFByb2plY3QudHlwZSA9ICdidXR0b24nOyAvLyBwcmV2ZW50cyBhcHAgcmVsb2FkIG9uIGNsaWNrXG4gICAgYWRkUHJvamVjdC5pZCA9ICdhZGRQcm9qZWN0JztcbiAgICBhZGRQcm9qZWN0LmlubmVySFRNTCA9ICdkb25lJztcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXQpO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuXG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtRGl2KTtcbiAgfTtcblxuICByZXR1cm4geyBpbmRleCB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdHNSZW5kZXIgfVxuIiwiLy8gZnVuY3Rpb25zIGNvbW1vbiB0byB0b2Rvc1JlbmRlci5qcyBhbmQgcHJvamVjdHNSZW5kZXIuanNcbmNvbnN0IHJlbmRlclV0aWxzID0gKCgpID0+IHtcbiAgY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpdFN0cmluZyA9IChzdHJpbmcsIHdpZHRoKSA9PiB7XG4gICAgaWYgKHN0cmluZy5sZW5ndGggKiAxMiA+IHdpZHRoKSB7XG4gICAgICBsZXQgcmVtb3ZlID0gKE1hdGguZmxvb3Iod2lkdGggLyAxMikgLSAzKSAtIHN0cmluZy5sZW5ndGg7XG4gICAgICBzdHJpbmcgPSBzdHJpbmcuc2xpY2UoMCwgcmVtb3ZlKS5jb25jYXQoJy4uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG5cbiAgcmV0dXJuIHsgY2xlYXJDb250ZW50LCBmaXRTdHJpbmcgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHJlbmRlclV0aWxzIH1cbiIsImltcG9ydCB7IHJlbmRlclV0aWxzIH0gZnJvbSAnLi9yZW5kZXJVdGlscydcbmltcG9ydCB7IG1vZGVsIH0gZnJvbSAnLi9tb2RlbCdcblxuY29uc3QgdG9kb3NSZW5kZXIgPSAoKCkgPT4ge1xuXG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBpbmRleCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdCA9IHByb2plY3Quc2xpY2UoOCk7XG4gICAgbGV0IHRvZG9zID0gbW9kZWwuaW5kZXhUb2Rvcyhwcm9qZWN0KTtcbiAgICByZW5kZXJVdGlscy5jbGVhckNvbnRlbnQoKTtcblxuICAgIGxldCB0aXRsZVcgPSBjb250ZW50Lm9mZnNldFdpZHRoIC0gNTY7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdpdGVtRGl2Jyk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChgJHt0b2Rvc1tpXS5wcmlvcml0eX1EaXZgKTtcbiAgICAgIGRpdi5pZCA9IGAke3RvZG9zW2ldLmlkfWA7XG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgY2xpY2tlZCBkaXY6ICR7dGhpcy5pZH1gKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgICAgY2hlY2tib3guaWQgPSBgZGVsZXRlXyR7dG9kb3NbaV0uaWR9YDtcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIG1vZGVsLmRlbGV0ZVRvZG8odGhpcy5pZC5zbGljZSg3KSk7XG4gICAgICAgIHJlbW92ZVRvZG8odGhpcy5pZCk7XG4gICAgICB9KTtcbiAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICB0aXRsZS5pbm5lckhUTUwgPSByZW5kZXJVdGlscy5maXRTdHJpbmcodG9kb3NbaV0udGl0bGUsIHRpdGxlVyk7XG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgfVxuXG4gICAgbGV0IGFkZE5ldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZE5ldy5pZCA9ICdhZGROZXcnO1xuICAgIGFkZE5ldy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBmb3JtKHRoaXMuaWQsIHByb2plY3QpO1xuICAgICAgYWRkTmV3LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gICAgbGV0IHBsdXNTaWduID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBsdXNTaWduLmlkID0gJ3BsdXNTaWduJztcbiAgICBwbHVzU2lnbi5pbm5lckhUTUwgPSAnKyc7XG4gICAgYWRkTmV3LmFwcGVuZENoaWxkKHBsdXNTaWduKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZE5ldyk7XG5cbiAgICAvLyBzZXQgbmF2YmFyIG5hdmJhciBtZXNzYWdlXG4gICAgbGV0IG5hdk1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZNc2cnKTtcbiAgICBuYXZNc2cuaW5uZXJIVE1MID0gcmVuZGVyVXRpbHMuZml0U3RyaW5nKFxuICAgICAgcHJvamVjdCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21zZ0RpdicpLm9mZnNldFdpZHRoIC0gMTJcbiAgICApO1xuXG4gICAgLy8gb25SZXNpemU6IHJlZm9ybWF0IHRleHQgdGhhdCB3b3VsZCBvdGhlcndpc2Ugb3ZlcmZsb3dcbiAgICBkb2N1bWVudC5ib2R5Lm9ucmVzaXplID0gZnVuY3Rpb24oKXtcbiAgICAgIG5hdk1zZy5pbm5lckhUTUwgPSByZW5kZXJVdGlscy5maXRTdHJpbmcoXG4gICAgICAgIHByb2plY3QsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtc2dEaXYnKS5vZmZzZXRXaWR0aCAtIDEyXG4gICAgICApO1xuICAgICAgbGV0IHRpdGxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpdGxlJyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aXRsZXNbaV0uaW5uZXJIVE1MID0gcmVuZGVyVXRpbHMuZml0U3RyaW5nKFxuICAgICAgICAgIHRvZG9zW2ldLnRpdGxlLCBjb250ZW50Lm9mZnNldFdpZHRoIC0gNTZcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIHByaXZhdGU6XG5cbiAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0aGlzSWQpID0+IHtcbiAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzSWQpO1xuICAgIGNoZWNrQm94LmlkID0gJ2RlbGV0ZWQnO1xuICAgIGxldCBpZCA9IHRoaXNJZC5zbGljZSg3KTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHRvZG9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICB0b2RvRGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodG9kb0Rpdik7XG4gICAgfSwgMzAwKTtcbiAgfTtcblxuICAvLyA/IHdpbGwgdXNlIHBhcmVudCBlbGVsbWVudCBhcyBwYXJhbSwgbm90IGlkLCB0aGVuIGZpbmQgaWRzIG5lZWRlZFxuICBjb25zdCBmb3JtID0gKHRoaXNJZCwgdGhpc1Byb2plY3QpID0+IHtcbiAgICBjb25zdCBhZGRJbnB1dCA9IChpZCkgPT4ge1xuICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgIGxhYmVsLmlubmVySFRNTCA9IGAke2lkfTpgO1xuICAgICAgbGFiZWwuaWQgPSBgJHtpZH1sYWJlbGA7XG4gICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgaWYgKGlkID09ICdkZXNjcmlwdGlvbicpIHsgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpOyB9XG4gICAgICBpbnB1dC5pZCA9IGAke2lkfWA7XG4gICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFNlbGVjdGlvbiA9ICh0eXBlKSA9PiB7XG4gICAgICBsZXQgb3B0aW9ucyA9IFsnaGlnaCcsICdtZWRpdW0nLCAnbG93J107XG4gICAgICBpZiAodHlwZSA9PSAncHJvamVjdHMnKSB7IG9wdGlvbnMgPSBtb2RlbC5wcm9qZWN0czsgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uc1tpXTtcbiAgICAgICAgb3B0aW9uLmlubmVySFRNTCA9IG9wdGlvbnNbaV07XG4gICAgICAgIGlmIChvcHRpb25zW2ldID09ICdtZWRpdW0nIHx8IG9wdGlvbnNbaV0gPT0gdGhpc1Byb2plY3QpIHtcbiAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09ICdwcm9qZWN0cycpIHsgcHJvamVjdHMuYXBwZW5kQ2hpbGQob3B0aW9uKTsgfVxuICAgICAgICBlbHNlIHsgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTsgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBkaXZDb2xvciA9ICgpID0+IHtcbiAgICAgIGZvcm1EaXYuY2xhc3NMaXN0LnJlbW92ZSgnbG93Rm9ybScpO1xuICAgICAgZm9ybURpdi5jbGFzc0xpc3QucmVtb3ZlKCdtZWRpdW1Gb3JtJyk7XG4gICAgICBmb3JtRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hGb3JtJyk7XG4gICAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoYCR7cHJpb3JpdHkudmFsdWV9Rm9ybWApO1xuICAgIH07XG5cbiAgICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWUsXG4gICAgICAgIHByaW9yaXR5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZSxcbiAgICAgICAgcHJvamVjdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJykudmFsdWVcbiAgICAgIH1cblxuICAgICAgaWYgKCh0aGlzUHJvamVjdCA9PSBkYXRhLnByb2plY3QgfHwgdGhpc1Byb2plY3QgPT0gJ0FsbCB0by1kbyBpdGVtcycpIHx8XG4gICAgICAgICAgY29uZmlybShgUmVhbGx5IHNhdmUgdG8gb3RoZXIgcHJvamVjdDogJHtkYXRhLnByb2plY3R9P2ApID09IHRydWUpIHtcbiAgICAgICAgbGV0IGVycm9ycyA9IG1vZGVsLmNyZWF0ZVRvZG8oZGF0YSk7XG4gICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09IDAgfHwgZXJyb3JzWzBdID09ICdub3RoaW5nIHRvIHNhdmUnICkge1xuICAgICAgICAgIGlmIChlcnJvcnNbMF0gPT0gJ25vdGhpbmcgdG8gc2F2ZScpIHtcbiAgICAgICAgICAgIGlmICh0aGlzSWQgPT0gJ2FkZE5ldycpIHsgY29udGVudC5yZW1vdmVDaGlsZChmb3JtRGl2KTsgfVxuICAgICAgICAgICAgYWRkTmV3LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleChgcHJvamVjdF8ke3RoaXNQcm9qZWN0fWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgbWVzc2FnZSA9ICdTQVZFIEZBSUxFRCEnO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXJyb3JzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgbWVzc2FnZSArPSBgXFxuKiAke2Vycm9yc1tpXX1gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhbGVydChtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlmICh0aGlzSWQgPT0gJ2FkZE5ldycpIHtcbiAgICAgIGZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnZm9ybURpdicpO1xuICAgICAgZm9ybURpdi5jbGFzc0xpc3QuYWRkKCdtZWRpdW1Gb3JtJyk7XG5cbiAgICB9IGVsc2UgeyAvLyB1c2UgdGhpc0lkIHRvIGZpbmQgZWxlbWVudCBmb3IgZm9ybTsgY2xlYXIgaXQgZmlyc3RcblxuICAgIH1cblxuICAgIGxldCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBhZGRJbnB1dCgndGl0bGUnKTtcbiAgICBhZGRJbnB1dCgnZGVzY3JpcHRpb24nKTtcblxuICAgIGxldCBsYWJlbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsYWJlbHNEaXYuY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uRGl2Jyk7XG4gICAgbGV0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIHByaW9yaXR5TGFiZWwuaWQgPSAncHJpb3JpdHlMYWJlbCc7XG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lckhUTUwgPSAncHJpb3JpdHk6JztcbiAgICBsYWJlbHNEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgICBsZXQgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBwcm9qZWN0TGFiZWwuaWQgPSAncHJvamVjdExhYmVsJztcbiAgICBwcm9qZWN0TGFiZWwuaW5uZXJIVE1MID0gJ3Byb2plY3Q6JztcbiAgICBsYWJlbHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcblxuICAgIGxldCBkb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZG9uZS50eXBlID0gJ2J1dHRvbic7IC8vIHByZXZlbnRzIGFwcCByZWxvYWQgb24gY2xpY2tcbiAgICBkb25lLmlkID0gJ2RvbmUnO1xuICAgIGRvbmUuaW5uZXJIVE1MID0gJ2RvbmUnO1xuICAgIGRvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdCk7XG4gICAgbGFiZWxzRGl2LmFwcGVuZENoaWxkKGRvbmUpO1xuXG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQobGFiZWxzRGl2KTtcblxuICAgIGxldCBzZWxlY3Rpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWxlY3Rpb25EaXYuY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uRGl2Jyk7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHkuaWQgPSAncHJpb3JpdHknO1xuICAgIGFkZFNlbGVjdGlvbigncHJpb3JpdHknKTtcbiAgICBwcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGRpdkNvbG9yKTtcbiAgICBzZWxlY3Rpb25EaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgbGV0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJvamVjdHMuaWQgPSAncHJvamVjdHMnO1xuICAgIGFkZFNlbGVjdGlvbigncHJvamVjdHMnKTtcbiAgICBzZWxlY3Rpb25EaXYuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuXG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0aW9uRGl2KTtcblxuICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybURpdik7XG4gIH07XG5cbiAgcmV0dXJuIHsgaW5kZXggfTtcblxufSkoKTtcblxuZXhwb3J0IHsgdG9kb3NSZW5kZXIgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==