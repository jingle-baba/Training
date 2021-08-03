import 'Styles/templates/product.scss';
import {mainSlider, paginationSlider,paginate} from '../components/productSlider';
import {addToCart} from '../components/ajax-add-to-cart';

window.addEventListener('DOMContentLoaded', () => {
  mainSlider;
  paginationSlider;
  paginate();

  const button = document.querySelector('.product__addToCart').addEventListener('click', (e) => {
    e.preventDefault();
    const qty = 1;
    const varId = document.querySelector('#product-variant').value;
    console.log(qty,varId);
    addToCart(varId,qty);
  })
});
 


