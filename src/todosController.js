import { model } from './model'

const todosController = (() => {
  const sortByPriority = (todos) => { // can probably move inside index()
    let sorted = [], high = [], medium = [], low = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].priority == 'high') { high.push(todos[i]) }
      else if (todos[i].priority == 'medium') { medium.push(todos[i]) }
      else { low.push(todos[i]) }
    }
    return sorted = high.concat(medium.concat(low));
  };

  const index = (project) => {
    if (project == 'All to-do items') {
      return sortByPriority(model.todos);
    } else {
      let todos = [];
      for (let i = 0; i < model.todos.length; i++) {
        if (project == model.todos[i].project) { todos.push(model.todos[i]); }
      }
      return sortByPriority(todos);
    }
  };

  const destroy = (thisId) => {
    model.deleteTodo(thisId.slice(7));
  };

  //index('project_All to-do items'); // runs at app start

  return { index, destroy };
})();

export { todosController }
