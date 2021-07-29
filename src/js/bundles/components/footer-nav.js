import $ from 'jquery';
export default() => {
  (function (footerNav) {

    'use strict';

    const dom = {};

    const cacheDom = () => {
      dom.el = $('.footerNav__title');
    }

    const bindUIActions = () => {
       $(dom.el).on('click', function(){
         $(this).siblings(".footerNav__items").toggleClass("active");
       })
    }


    const init = () => {
      cacheDom();
      bindUIActions();
    }

    footerNav.init = init;

  })((window.footerNav = window.footerNav || {}));
}