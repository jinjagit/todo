import { dummyContent } from './dummyContent'
import { setScroll } from './setScroll'
import { todoFactory } from './todoFactory'
import { uniqueId } from './uniqueId'
import { todosIndex } from './todosIndex'

function addEvents() {
  let deletions = document.getElementsByClassName('completed');
  for (let i = 0; i < deletions.length; i++) {
    deletions[i].addEventListener("click", function() {
      let id = this.id.slice(7);
      todos.splice(todos.indexOf(todos.find(e => e.id == id)), 1);
      let todoDiv = document.getElementById(id);
      todoDiv.parentNode.removeChild(todoDiv);
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

dummyContent();
