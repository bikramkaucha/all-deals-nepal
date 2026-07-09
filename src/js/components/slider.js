import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function initCategorySlider() {
  const swiperContainer = document.querySelector('.categories-swiper');
  if (!swiperContainer) return;

  new Swiper('.categories-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1.6,
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
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 16 },
      900: { slidesPerView: 4, spaceBetween: 16 },
      1200: { slidesPerView: 6, spaceBetween: 18 },
    },
  });
}