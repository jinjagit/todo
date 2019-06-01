import { data } from './data'
import { todosRender } from './todosRender'

const todosController = (() => {

  const index = (project) => {
    // Insert filter of todos by project name
    
    todosRender.index(data.todos, project);

    data.logTodos(); // DEBUG
  };

  const destroy = (thisId) => {
    let id = thisId.slice(7);
    data.deleteTodo(id);

    // DEBUG:
    setTimeout(function() {
      data.logTodos();
    }, 500);
  };

  return { index, destroy };

})();

export { todosController }
