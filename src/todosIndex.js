const todosIndex = (todos, project) => {
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
    let title = document.createElement('h2');
    title.innerHTML = todos[i].title;
    content.appendChild(div);
    div.appendChild(completed);
    div.appendChild(title);
  }

  let newTodo = document.createElement('div');
  newTodo.id = 'newTodo';
  let plusSign = document.createElement('p');
  plusSign.id = 'plusSign';
  plusSign.innerHTML = '+';
  newTodo.appendChild(plusSign);
  content.appendChild(newTodo);
};

export { todosIndex }
