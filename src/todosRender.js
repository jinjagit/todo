import { todosController } from './todosController'

const todosRender = (() => {

  const index = (todos, project) => {
    let content = document.getElementById('content');
    let topDiv = document.createElement('div');
    topDiv.id = 'topDiv';
    let heading = document.createElement('h2');
    heading.innerHTML = `${project}:`;
    heading.id = 'heading';
    topDiv.appendChild(heading);
    content.appendChild(topDiv);

    for(let i = 0; i < todos.length; i++) {
      let div = document.createElement('div');
      div.classList.add('minTodoDiv');
      div.id = `${todos[i].id}`;
      let completed = document.createElement('div');
      completed.classList.add('completed');
      completed.id = `delete_${todos[i].id}`;
      completed.addEventListener("click", function() {
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
      console.log('clicked +');
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

  return { index };

})();

export { todosRender }
