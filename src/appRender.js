import { projectsRender } from './projectsRender'
import { todosRender } from './todosRender'

const appRender = (() => {
  const initialize = () => {
    let navbar = document.getElementById('navbar');
    let content = document.getElementById('content');

    // set navbar scroll behaviour (hide / reveal)
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

    // disable; return key submits form
    // from: https://stackoverflow.com/questions/5629805/disabling-enter-key-for-form
    window.addEventListener('keydown',function(e) {
      if (e.keyIdentifier=='U+000A'|| e.keyIdentifier=='Enter' || e.keyCode==13) {
        if (e.target.nodeName=='INPUT' && e.target.type=='text') {
          e.preventDefault();
          return false;}
        }
      }, true);

    // set initial navBtn icon & add click event
    let navBtn = document.getElementById('navBtn');
    navBtn.classList.add('foldersIcon');
    navBtn.title = 'view projects';
    navBtn.addEventListener("click", navBtnClick);

    todosRender.index('project_All to-do items');
  };

  // private

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

  return { initialize };

})();

export { appRender }
