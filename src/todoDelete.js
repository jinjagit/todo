const todoDelete = (todos, thisId) => {
  let id = thisId.slice(7);
  let checkBox = document.getElementById(thisId);
  checkBox.id = 'deleted';
  setTimeout(function() {
    todos.splice(todos.indexOf(todos.find(e => e.id == id)), 1);
    let todoDiv = document.getElementById(id);
    todoDiv.parentNode.removeChild(todoDiv);
  }, 300);
  return todos;
};

export { todoDelete }
