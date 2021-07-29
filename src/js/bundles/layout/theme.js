/*
 * Basic file with global javascripts.
 * Files imported here will be available on every page.
 */

import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';
import footerNav from '../components/footer-nav';

import 'Styles/layout/theme.scss';

import mobileNavigation from '../components/mobile-navigation';
import headerSearch from '../components/header-search';
import ajaxSearch from '../components/ajax-search';
import showMegaMenu from '../components/mega-menu';
import swiper from '../components/ritualSlider';
mobileNavigation()
headerSearch()
ajaxSearch()
showMegaMenu();
footerNav();

window.headerSearch.init();
window.mobileNavigation.init();
window.ajaxSearch.init();
window.showMegaMenu.init();
window.footerNav.init();

window.addEventListener('DOMContentLoaded',() => {
 swiper;
})