import { renderUtils } from './renderUtils'
import { todosController } from './todosController'

const todosRender = (() => {

  const index = (project) => {
    project = project.slice(8);
    let todos = todosController.index(project);
    renderUtils.clearContent();
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
        todosController.destroy(this.id);
        removeTodo(this.id);
      });
      let title = document.createElement('h2');
      title.innerHTML = renderUtils.fitString(todos[i].title, titleW);
      title.classList.add('title');
      content.appendChild(div);
      div.appendChild(checkbox);
      div.appendChild(title);
    }

    let addNew = document.createElement('div');
    addNew.id = 'addNew';
    addNew.addEventListener("click", function() {
      form(this.id);
      addNew.style.display = 'none';
    });
    let plusSign = document.createElement('p');
    plusSign.id = 'plusSign';
    plusSign.innerHTML = '+';
    addNew.appendChild(plusSign);
    content.appendChild(addNew);

    // set navbar navbar message
    let navMsg = document.getElementById('navMsg');
    navMsg.innerHTML = renderUtils.fitString(
      project, document.getElementById('msgDiv').offsetWidth - 12
    );

    // onResize: reformat text that would otherwise overflow
    document.body.onresize = function(){
      navMsg.innerHTML = renderUtils.fitString(
        project, document.getElementById('msgDiv').offsetWidth - 12
      );
      let titles = document.getElementsByClassName('title');
      for (let i = 0; i < titles.length; i++) {
        titles[i].innerHTML = renderUtils.fitString(
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
      label.id = `${id}label`;
      let input = document.createElement('input');
      if (id == 'description') { input = document.createElement('textarea'); }
      input.id = `${id}`;
      todoForm.appendChild(label);
      todoForm.appendChild(input);
    };

    const addSelection = (type) => {
      let options = ['high', 'medium', 'low'];
      if (type == 'projects') { options = todosController.projects(); }
      for (let i = 0; i < options.length; i++) {
        let option = document.createElement('option');
        option.value = options[i];
        option.innerHTML = options[i];
        if (options[i] == 'medium') { // or current project
          option.setAttribute('selected', true);
        }
        option.addEventListener("click", divColor);
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
      let title = document.getElementById('title').value;
      let description = document.getElementById('description').value;
      let priority = document.getElementById('priority').value;
      let project = document.getElementById('projects').value;
      console.log(`title: ${title}, description: ${description}, priority: ${priority}, project: ${project}`);
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
    done.type = 'button'; // prevents app reload
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
    priority.addEventListener("click", divColor);
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

export { todosRender }
