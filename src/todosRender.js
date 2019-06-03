import { todosController } from './todosController'

const todosRender = (() => {

  const index = (todos, project) => {
    let navMsg = document.getElementById('navMsg');
    navMsg.innerHTML = project;

    let content = document.getElementById('content');

    for(let i = 0; i < todos.length; i++) {
      let div = document.createElement('div');
      div.classList.add('minTodoDiv');
      div.classList.add(`${todos[i].priority}Div`);
      div.id = `${todos[i].id}`;
      div.addEventListener("click", function() {
        console.log(`clicked div: ${this.id}`);
      });
      let completed = document.createElement('div');
      completed.classList.add('completed');
      completed.id = `delete_${todos[i].id}`;
      completed.addEventListener("click", function(e) {
        e.stopPropagation();
        todosController.destroy(this.id);
        removeTodo(this.id);
      });
      let title = document.createElement('h2');
      title.innerHTML = todos[i].title;
      content.appendChild(div);
      div.appendChild(completed);
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
    console.log(thisId);
  }

  return { index };

})();

export { todosRender }
