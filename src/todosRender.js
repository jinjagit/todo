import { todosController } from './todosController'

const todosRender = (() => {
  const fitString = (string, width) => {
    if (string.length * 12 > width) {
      let remove = (Math.floor(width / 12) - 3) - string.length;
      string = string.slice(0, remove).concat('...');
    }

    return string;
  };

  const index = (project) => {
    project = project.slice(8);
    let todos = todosController.index(project);
    //appRender.clearContent();
    let content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
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
      title.innerHTML = fitString(todos[i].title, titleW);
      title.classList.add('title');
      content.appendChild(div);
      div.appendChild(checkbox);
      div.appendChild(title);
    }

    let addNew = document.createElement('div');
    addNew.id = 'addNew';
    addNew.addEventListener("click", function() {
      addNew.style.display = 'none';
      form(this.id);
    });
    let plusSign = document.createElement('p');
    plusSign.id = 'plusSign';
    plusSign.innerHTML = '+';
    addNew.appendChild(plusSign);
    content.appendChild(addNew);

    // set navbar content & link to projects index
    let navMsg = document.getElementById('navMsg');
    navMsg.innerHTML = fitString(
      project, document.getElementById('msgDiv').offsetWidth - 12
    );

    document.body.onresize = function(){
      navMsg.innerHTML = fitString(
        project, document.getElementById('msgDiv').offsetWidth - 12
      );
      let titles = document.getElementsByClassName('title');
      for (let i = 0; i < titles.length; i++) {
        titles[i].innerHTML = fitString(
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
      let input = document.createElement('input');
      input.type = 'text';
      input.id = `${id}`;
      todoForm.appendChild(label);
      todoForm.appendChild(input);
    }

    let content = document.getElementById('content');
    let todoForm = document.createElement('form');
    addInput('title');
    addInput('description');

    if (thisId == 'addNew') {
      let formDiv = document.createElement('div');
      formDiv.classList.add('formDiv');
      formDiv.appendChild(todoForm);
      content.appendChild(formDiv);
    } else { // use thisId to find element for form; clear it first

    }
  }

  return { index };

})();

export { todosRender }
