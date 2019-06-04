import { model } from './model'
import { projectsRender } from './projectsRender'

const projectsController = (() => {
  const index = () => {
    projectsRender.index(model.projects);
  };

  const destroy = (project) => {
    model.deleteProject(project);
  };

  return { index, destroy };
})();

export { projectsController }
