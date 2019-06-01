import { todoModel } from './todoModel'
import { todosRender } from './todosRender'

const todosController = (() => {

  const index = (project) => {
    // Insert filter of todos by project name

    todosRender.index(todoModel.todos, project);

    todoModel.logTodos(); // DEBUG
  };

  const destroy = (thisId) => {
    let id = thisId.slice(7);
    todoModel.deleteTodo(id);

    // DEBUG:
    setTimeout(function() {
      todoModel.logTodos();
    }, 500);
  };

  return { index, destroy };

})();

export { todosController }
