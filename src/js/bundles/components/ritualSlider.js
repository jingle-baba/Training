import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
import 'swiper/swiper-bundle.css';

const container = document.querySelector(".ritual__row .swiper-container");
const currentIndex = document.querySelector('#current-index');
const totalIndex = document.querySelector('#total-number');

const swiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 10,
    watchOverflow: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      breakpoints: {
        540: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween:30,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    on: {
        afterInit: function () {
            totalIndex.innerHTML = (container.querySelectorAll('.swiper-slide')).length;
        },
    },
});

swiper.on('activeIndexChange', function () {
    currentIndex.innerHTML= swiper.activeIndex + 1;
    totalIndex.innerHTML = swiper.slides.length;
});


export default swiper;