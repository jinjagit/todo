/* setDimensions Module: AN IIFE with the following dimension related roles:
   1. (re)sets dimensions of elements / properties common to all views;
      e.g. navbar, row height.
   2. makes values of key dimension related vars available via namespace.
   3. (re)sets onscroll action (which hides / reveals navbar when content
      scrolled), since this involves dimensions proportional to above-mentioned
      dimensions.
   4. detects if device is mobile (by screen size) and adjusts dimensions
      accordingly, including readjusting dimensions if device orientation
      changes (portrait <-> landscape), using onresize action.
   5. TO ADD: Adds a fullscreen toggle icon to navbar in mobile view + related
      functionality. */

const setDimensions = (() => {
  let mobile = false;
  if (screen.width < 801) { mobile = true; }
  let rowH = '50px';
  let fontSize = '30px';

  if (mobile == true && screen.width < screen.height) {
    rowH = '100px'; // mobile-portrait
    fontSize = '60px';
  };

  let body = document.getElementsByTagName('body')[0];
  let navbar = document.getElementById('navbar');
  let content = document.getElementById('content');
  let navText = document.getElementById('navText');

  const setCommonDimensions = () => {
    navbar.style.height = rowH;
    navbar.style.lineHeight = rowH;
    navText.style.fontSize = fontSize;
    content.style.marginTop = rowH;
  };

  const mobileRotate = () => {
    if (rowH == '100px' && screen.width >= screen.height) {
      rowH = '50px';
      fontSize = '30px';
      setScroll();
      setCommonDimensions();
    } else if (rowH == '50px' && screen.width < screen.height) {
      rowH = '100px';
      fontSize = '60px';
      setScroll();
      setCommonDimensions();
    }
  };

  const setScroll = () => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
        content.style.marginTop = rowH;
      } else {
        navbar.style.top = rowH;
        content.style.marginTop = '0px';
      }
      prevScrollpos = currentScrollPos;
    }
  };

  body.onresize = function(){ if (mobile == true) { mobileRotate(); } };

  setScroll();
  setCommonDimensions();

  return { mobile, rowH, fontSize };
})();

export { setDimensions }
