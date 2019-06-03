import { appRender } from './appRender'
import { projectsController } from './projectsController'
import { todosController } from './todosController'

const projectsRender = (() => {
  const index = (projects) => {
    appRender.clearContent();
    let content = document.getElementById('content');

    let spacer = document.createElement('div');
    spacer.style.height = '7px';
    content.appendChild(spacer);

    for(let i = 0; i < projects.length; i++) {
      let div = document.createElement('div');
      div.classList.add('itemDiv');
      div.id = `project_${projects[i]}`;
      div.addEventListener("click", function() {
        todosController.index(this.id);
      });
      // need different styling class for deletebox + eventlistener
      let deletebox = document.createElement('div');
      deletebox.classList.add('deletebox');

      let title = document.createElement('h2');
      title.innerHTML = projects[i];
      content.appendChild(div);
      div.appendChild(deletebox);
      div.appendChild(title);
      if (projects[i] == 'All projects / to-do items') {
        let line = document.createElement('hr');
        content.appendChild(line);
      }
    }

    // set navbar content & remove link to projects index
    let msgDiv = document.getElementById('msgDiv');
    msgDiv.style.width = '100%';
    let projectsBtn = document.getElementById('projectsBtn');
    projectsBtn.style.display = 'none';
    let navMsg = document.getElementById('navMsg');
    navMsg.innerHTML = 'Projects';
  };

  return { index };
})();

export { projectsRender }
