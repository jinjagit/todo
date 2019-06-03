const appRender = (() => {

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

  // declare functions to common to todosRender and projectsRender modules:

  const clearContent = () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
  };

  // ----------- extras -----------------

  (() => { // Resize: UNUSED
    let navDiv = document.getElementById('navDiv');

      //let titleDiv = document.getElementById('titleDiv');

    const resize = () => { // set navbar titleDiv width:
      if (navDiv.offsetWidth <= 652) {
        //titleDiv.style.width = `${(navDiv.offsetWidth - 173)}px`;
      }
    };

    //resize();
    //document.body.onresize = function(){ resize(); };
  })();

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

  return { clearContent, placeholderContent };

})();

export { appRender }
