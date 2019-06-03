import { model } from './model'
import { todosRender } from './todosRender'

const todosController = (() => {

  const sortByPriority = (todos) => {
    let sorted = [], high = [], medium = [], low = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].priority == 'high') { high.push(todos[i]) }
      else if (todos[i].priority == 'medium') { medium.push(todos[i]) }
      else { low.push(todos[i]) }
    }
    return sorted = high.concat(medium.concat(low));
  };

  const index = (project) => {
    project = project.slice(8);
    // Insert filter of todos by project name
    if (project == 'All projects & to-dos') {
      todosRender.index(sortByPriority(model.todos), 'All to-do items');
    } else {
      let todos = [];
      for (let i = 0; i < model.todos.length; i++) {
        if (project == model.todos[i].project) { todos.push(model.todos[i]); }
      }
      todosRender.index(sortByPriority(todos), project);
    }
  };

  const destroy = (thisId) => {
    let id = thisId.slice(7);
    model.deleteTodo(id);



    // DEBUG:
    setTimeout(function() {
      model.logTodos();
    }, 500);
  };

  return { index, destroy };

})();

export { todosController }
