export default() => {
    (function (showMegaMenu) {
  
      'use strict';
  
      const dom = {};
  
      const cacheDom = () => {
        dom.navLink = document.querySelectorAll('.nav__link');
      }
  
      const bindUIActions = () => {
        dom.navLink.forEach(e => e.addEventListener('mouseenter', ()=>{showNav(e)}));
      }
      
      const showNav= (e) => {
        let selectedNav = e.getAttribute("data-src");
        let overlay = document.querySelector(".overlay");
         document.querySelectorAll(".megamenu").forEach(item => {
            if(item.getAttribute("data-src") == selectedNav) {
                item.classList.add("active");
                overlay.classList.add("active");
            }
            else {
                item.classList.remove("active");
                overlay.classList.remove("active");
            }
            item.addEventListener('mouseleave',() => {
                item.classList.remove('active');
                overlay.classList.remove("active");
            })
        });

      }
  
      const init = () => {
        cacheDom();
        bindUIActions();
      }
  
      showMegaMenu.init = init;
  
    })((window.showMegaMenu = window.showMegaMenu || {}));
  }