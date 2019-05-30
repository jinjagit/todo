import { dummyContent } from './dummyContent'
import { setDimensions } from './setDimensions'
import { todoFactory } from './todoFactory'
import { uniqueId } from './uniqueId'
import { todosIndex } from './todosIndex'

//dummyContent();

let todos = [];

// create some example todos and output their properties:

let todosInput = [
  { title: 'do laundry', description: 'remember jeans', priority: 'high',
    category: 'regular stuff' },
  { title: 'wash car', description: 'nil', priority: 'low',
    category: 'regular stuff' },
  { title: 'buy beer', description: 'Kronenberg', priority: 'medium',
    category: 'regular stuff' }
];

for (let i = 0; i < todosInput.length; i++) {
  todos.push(
    todoFactory(uniqueId(), todosInput[i].title, todosInput[i].description,
    todosInput[i].priority, todosInput[i].category
  ));
}

for (let i = 0; i < todosInput.length; i++) {
  todos[i].output();
}

// display todos on page:

todosIndex(todos, setDimensions.fontSize, setDimensions.rowH);
