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
      deletebox.id = `delete_${projects[i]}`;
      deletebox.addEventListener("click", function(e) {
        e.stopPropagation();
        console.log(`clicked: ${this.id}`);

        //projectsController.destroy(this.id);
        removeProject(this.id);
      });
      let title = document.createElement('h2');
      title.innerHTML = projects[i];
      content.appendChild(div);
      div.appendChild(deletebox);
      div.appendChild(title);
      if (projects[i] == 'All projects & to-dos') {
        let line = document.createElement('hr');
        content.appendChild(line);
      }
    }

    let addNew = document.createElement('div');
    addNew.id = 'addNew';
    addNew.addEventListener("click", function() {
      form(this.id);
    });
    let plusSign = document.createElement('p');
    plusSign.id = 'plusSign';
    plusSign.innerHTML = '+';
    addNew.appendChild(plusSign);
    content.appendChild(addNew);

    // set navbar content & remove link to projects index
    let msgDiv = document.getElementById('msgDiv');
    msgDiv.style.width = '100%';
    let projectsBtn = document.getElementById('projectsBtn');
    projectsBtn.style.display = 'none';
    let navMsg = document.getElementById('navMsg');
    navMsg.innerHTML = 'Projects';
  };

  // private

  const removeProject = (thisId) => {
    let really = confirm("Really delete?");

  };

  // ? will use parent elelment as param, not id, then find ids needed
  const form = (thisId) => {
    console.log(thisId);
  };

  return { index };
})();

export { projectsRender }
