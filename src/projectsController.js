import { model } from './model'
import { projectsRender } from './projectsRender'

const projectsController = (() => {
  const index = () => {
    projectsRender.index(model.projects); // sort alphabetically + add 'all'
  };

  return { index };
})();

export { projectsController }
