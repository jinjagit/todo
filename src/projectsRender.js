import { appRender } from './appRender'
import { projectsController } from './projectsController'
import { todosController } from './todosController'

const projectsRender = (() => {
  const index = (projects) => {
    appRender.clearContent();
    let content = document.getElementById('content');
    let titleW = content.offsetWidth - 56;

    /*let spacer = document.createElement('div');
    spacer.style.height = '7px';
    content.appendChild(spacer);*/

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
        removeProject(this.id);
      });
      let title = document.createElement('h2');
      title.innerHTML = appRender.fitString(projects[i], titleW);
      title.classList.add('title');
      content.appendChild(div);
      div.appendChild(deletebox);
      div.appendChild(title);
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

    // set navbar content & link to 'all todo items' index
    let projectsBtn = document.getElementById('projectsBtn');
    projectsBtn.classList.add('eyeIcon');
    projectsBtn.title = 'view all todo items from all projects';
    projectsBtn.addEventListener("click", function() {
      todosController.index('project_All to-do items');
    });
    let navMsg = document.getElementById('navMsg');
    navMsg.innerHTML = 'Projects';

    const resize = () => {
      let titles = document.getElementsByClassName('title');
      for (let i = 0; i < titles.length; i++) {
        titles[i].innerHTML = appRender.fitString(
          projects[i], content.offsetWidth - 56
        );
      }
    };

    document.body.onresize = function(){ resize(); };
  };

  // private

  const removeProject = (thisId) => {
    let id = thisId.slice(7);
    if (confirm(`Really delete project: ${id}\nand all todo items it contains?`) == true) {
      projectsController.destroy(id);
      let projectDiv = document.getElementById(`project_${id}`);
      projectDiv.parentNode.removeChild(projectDiv);
    }
  };

  // ? will use parent elelment as param, not id, then find ids needed
  const form = (thisId) => {
    console.log(thisId);
  };

  return { index };
})();

export { projectsRender }
