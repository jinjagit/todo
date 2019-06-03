const model = (() => {

  let todos = [];
  let projects = [];

  const uniqueId = (() => {
    let count = 0;
    return () => {
      ++count;
      return count;
    };
  })();

  const todoFactory = (id, title, description, priority, project) => {

    const output = () => console.log(`id: ${id}, title: ${title}, desc: ${description}, priority: ${priority}, project: ${project}`);

    const setTitle = newTitle => title = newTitle;
    const setDescription = newDescription => description = newDescription;
    const setPriority = newPriority => priority = newPriority;
    const setProject = newProject => project = newProject;

    return {
      id, title, description, priority, project,
      setTitle, setDescription, setPriority, setProject, output };
  };

  // Change this to a check for local storage, etc.
  const createExamples = (() => {
    let todosInput = [
      { title: 'do laundry', description: 'remember jeans', priority: 'high',
        project: 'regular stuff' },
      { title: 'wash car', description: 'nil', priority: 'low',
        project: 'regular stuff' },
      { title: 'buy beer', description: 'Kronenberg', priority: 'medium',
        project: 'regular stuff' },
      { title: 'research arrow functions', description: 'make notes and save links', priority: 'high',
        project: 'write article' },
      { title: 'write body of article', description: 'actually write the thing', priority: 'medium',
        project: 'write article' },
      { title: 'proofread article', description: 'check for errors and bad grammar', priority: 'low',
        project: 'write article' },
      { title: 'research IIFEs', description: 'what are they, and when are they used?', priority: 'medium',
        project: 'write article' }
    ];

    for (let i = 0; i < todosInput.length; i++) {
      todos.push(
        todoFactory(uniqueId(), todosInput[i].title, todosInput[i].description,
        todosInput[i].priority, todosInput[i].project
      ));
    }

    projects = ['regular stuff', 'write article'];
  })();

  const deleteTodo = (id) => {
    todos.splice(todos.indexOf(todos.find(e => e.id == id)), 1);
  };

  const logTodos = () => {
    console.log('----------');
    for (let i = 0; i < todos.length; i++) {
      todos[i].output();
    }
  };

  return { todos, projects, createExamples, deleteTodo, logTodos };

})();

export { model }
