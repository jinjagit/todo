const todosIndex = (todos, fontSize, rowH) => {
  let content = document.getElementById('content');

  for(let i = 0; i < todos.length; i++) {
    let div = document.createElement('div');
    div.style.height = rowH;
    let para = document.createElement('p');
    para.style.fontSize = fontSize;
    para.innerHTML = todos[i].title;
    content.appendChild(div);
    div.appendChild(para);
  }

};

export { todosIndex }
