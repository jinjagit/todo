import { dummyContent } from './dummyContent'
import { setScroll } from './setScroll'
import { uniqueId } from './uniqueId'
import { todoFactory } from './todoFactory'
import { todosIndex } from './todosIndex'
import { todoDelete } from './todoDelete'

function addEvents() {
  let deleteTodos = document.getElementsByClassName('completed');
  for (let i = 0; i < deleteTodos.length; i++) {
    deleteTodos[i].addEventListener("click", function() {
      todos = todoDelete(todos, this.id);
    });
  }
}

function logTodos() {
  for (let i = 0; i < todos.length; i++) {
    todos[i].output();
  }
}

let todos = [];

// create some example todos and log their properties to console:

let todosInput = [
  { title: 'do laundry', description: 'remember jeans', priority: 'high',
    project: 'regular stuff' },
  { title: 'wash car', description: 'nil', priority: 'low',
    project: 'regular stuff' },
  { title: 'buy beer', description: 'Kronenberg', priority: 'medium',
    project: 'regular stuff' }
];

for (let i = 0; i < todosInput.length; i++) {
  todos.push(
    todoFactory(uniqueId(), todosInput[i].title, todosInput[i].description,
    todosInput[i].priority, todosInput[i].project
  ));
}

logTodos();


// display todos on page and add event relevant listeners:

todosIndex(todos);
addEvents();



// add placeholder content, for testing of navbar hide/reveal on scroll

//dummyContent();
