import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function dealSlider() {
  const swiperContainer = document.querySelector('.deal-swiper');
  if (!swiperContainer) return;

  new Swiper('.deal-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 18,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}