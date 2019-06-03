import { model } from './model'
import { projectsRender } from './projectsRender'

const projectsController = (() => {
  const index = () => {
    projectsRender.index(['All projects / to-do items'].concat(model.projects));
  };

  return { index };
})();

export { projectsController }
