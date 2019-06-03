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
    // Insert filter of todos by project name

    todosRender.index(sortByPriority(model.todos), project);

    //model.logTodos(); // DEBUG
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
