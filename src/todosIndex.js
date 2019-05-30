const todosIndex = (todos) => {
  let content = document.getElementById('content');

  for(let i = 0; i < todos.length; i++) {
    let div = document.createElement('div');
    div.classList.add('minTodoDiv');
    let title = document.createElement('h2');
    title.innerHTML = todos[i].title;
    content.appendChild(div);
    div.appendChild(title);
  }
};

export { todosIndex }
