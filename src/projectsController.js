import { model } from './model'

const projectsController = (() => {
  const index = () => {
    return model.projects;
  };

  const destroy = (project) => {
    model.deleteProject(project);
  };

  return { index, destroy };
})();

export { projectsController }
