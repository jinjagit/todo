const todosIndex = (todos) => {
  let content = document.getElementById('content');

  for(let i = 0; i < todos.length; i++) {
    let div = document.createElement('div');
    div.classList.add('minTodoDiv');
    let completed = document.createElement('div');
    completed.classList.add('completed');

    let title = document.createElement('h2');
    title.innerHTML = todos[i].title;
    content.appendChild(div);
    div.appendChild(completed);
    div.appendChild(title);
  }
};

export { todosIndex }
