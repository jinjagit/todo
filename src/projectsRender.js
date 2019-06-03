import { appRender } from './appRender'
import { projectsController } from './projectsController'

const projectsRender = (() => {
  const index = (projects) => {
    appRender.clearContent();
    let content = document.getElementById('content');

    for(let i = 0; i < projects.length; i++) {
      let div = document.createElement('div');
      div.classList.add('itemDiv');
      div.id = `project_${projects[i]}`;
      div.addEventListener("click", function() {
        console.log(`clicked div: ${this.id}`);
      });
      let checkbox = document.createElement('div');
      checkbox.classList.add('checkbox');

      let title = document.createElement('h2');
      title.innerHTML = projects[i];
      content.appendChild(div);
      div.appendChild(checkbox);
      div.appendChild(title);
    }


    // set navbar content & link to projects index
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
