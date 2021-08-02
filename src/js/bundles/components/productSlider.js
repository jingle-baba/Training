import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const paginateItem = document.querySelectorAll(".product__pagination .product__imageList .swiper-slide")
export const mainSlider = new Swiper('.product__carousel', {
    speed: 400,
    spaceBetween: 4,
    slidesPerView: 1.35,
    breakpoints: {
        540: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 14,
        }
      },
  })
  
export const paginationSlider = new Swiper('.product__pagination', {
    speed: 400,
    spaceBetween: 4,
    slidesPerView: 'auto'
});

export const paginate = (paginateList = paginateItem,speed=400) => {
    paginateList.forEach((item,index) => {
        console.log(index);
        item.addEventListener('click', () => {
            console.log(index);
            mainSlider.slideTo(index,speed);
        })
    })
}