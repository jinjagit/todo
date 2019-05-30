import { aModule } from './aModule'
import { setDimensions } from './setDimensions'
import { todoFactory } from './todoFactory'
import { uniqueId } from './uniqueId'

aModule();

let todos = [];

const todo1 = todoFactory(uniqueId(), 'do laundry', 'description here', 'high', 'regular stuff');
const todo2 = todoFactory(uniqueId(), 'wash car', 'description here', 'medium', 'regular stuff');
todo1.output();
todo2.output();

todo1.setTitle('NEW title');
todo1.output();

todos.push(todoFactory(uniqueId(), 'unNamed object', 'description here', 'medium', 'some category'));
console.log(todos[0].id);
