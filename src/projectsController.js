import { model } from './model'
import { projectsRender } from './projectsRender'

const projectsController = (() => {
  const index = () => {
    projectsRender.index(model.projects);
  };

  return { index };
})();

export { projectsController }
