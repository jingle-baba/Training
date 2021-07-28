import $ from 'jquery';
export default() => {
  (function (mobileNavigation) {
    'use strict';

    const dom = {};

    const cacheDom = () => {
      dom.trigger = document.querySelectorAll('.nav-trigger');
      dom.body = document.getElementsByTagName('body')[0];
      dom.navTrigger = document.querySelectorAll('.mobile-nav__item-child');
      dom.subNav= $('.subnav__close');
    }
    
    const openSubnav = (navItem) => {
          let subNavLength = (navItem.querySelectorAll(".subnav")).length;
          if(subNavLength > 0) {
            navItem.classList.add("open-subnav");
          }
    }

    const closeSubNav = () => {
       $('.mobile-nav__item').removeClass("open-subnav");
    }

    const bindUIActions = () => {
      dom.trigger.forEach(item => item.addEventListener('click', () => {toggleNavigation()}));
      dom.navTrigger.forEach(nav => {
         nav.addEventListener('click', () => {
            openSubnav(nav);
         })
      });

      $(document).on('click','.subnav__close',function(){
        closeSubNav();
      })
    }

    const toggleNavigation = () => {
      dom.body.classList.toggle('nav-open');
    }

    const init = () => {
      cacheDom();
      bindUIActions();
    }

    mobileNavigation.init = init;

  })((window.mobileNavigation = window.mobileNavigation || {}));
}