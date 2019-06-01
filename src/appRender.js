const appRender = (() => {

  const setScroll = (() => {
    let navbar = document.getElementById('navbar');
    let content = document.getElementById('content');

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
  })();

  // DEBUG: create content taller than page to test scroll effects
  const placeholderContent = () => {
    let content = document.getElementById('content');

    for(let i = 0; i < 70; i++) {
      const para = document.createElement('p');
      para.innerHTML = "placeholder content";
      para.style.textAlign = "center";
      content.appendChild(para);
    }
  };

  return { placeholderContent }

})();

export { appRender }
