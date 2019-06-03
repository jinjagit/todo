import { model } from './model'
import { projectsRender } from './projectsRender'

const projectsController = (() => {
  const index = () => {
    projectsRender.index(['All projects & to-dos'].concat(model.projects));
  };

  return { index };
})();

export { projectsController }
