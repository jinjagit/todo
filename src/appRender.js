import { projectsRender } from './projectsRender'
import { todosRender } from './todosRender'

const appRender = (() => {

  const fitString = (string, width) => {
    if (string.length * 12 > width) {
      let remove = (Math.floor(width / 12) - 3) - string.length;
      string = string.slice(0, remove).concat('...');
    }

    return string;
  };

  const navBtnClick = () => {
    if (navBtn.classList.value == 'foldersIcon') {
      navBtn.classList.remove('foldersIcon');
      navBtn.classList.add('eyeIcon');
      navBtn.title = 'view all todo items from all projects';
      projectsRender.index();
    } else {
      navBtn.classList.remove('eyeIcon');
      navBtn.classList.add('foldersIcon');
      navBtn.title = 'view projects';
      todosRender.index('project_All to-do items');
    }
  };

  const initialize = () => {

    // set styling / behaviours common to all views:
    let navbar = document.getElementById('navbar');
    let content = document.getElementById('content');

    // set navbar scroll behaviour (hide / reveal):
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
        content.style.marginTop = '50px';
      } else {
        navbar.style.top = '-50px';
        content.style.marginTop = '0px';
      }
      prevScrollpos = currentScrollPos;
    }


    todosRender.index('project_All to-do items');

    let navBtn = document.getElementById('navBtn');
    navBtn.classList.add('foldersIcon');
    navBtn.title = 'view projects';
    navBtn.addEventListener("click", navBtnClick);
  };






  // declare functions to common to todosRender and projectsRender modules:
  /*
  const clearContent = () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
  };
  */




  // ----------- extras -----------------




  // DEBUG: create content taller than page to test scroll effects
  const placeholderContent = () => {
    let content = document.getElementById('content');

    let spacer = document.createElement('div');
    spacer.style.height = '30px';
    content.appendChild(spacer);

    for(let i = 0; i < 70; i++) {
      const para = document.createElement('p');
      para.innerHTML = "placeholder content";
      para.style.textAlign = "center";
      content.appendChild(para);
    }

    window.dispatchEvent(new Event('resize'));
  };




  return { initialize, placeholderContent };

})();

export { appRender }
