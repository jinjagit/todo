import { appRender } from './appRender'
import { todosController } from './todosController'


todosController.index('All todo items');

// add placeholder content, for testing of navbar hide/reveal on scroll:
appRender.placeholderContent();
