import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function relatedSlider() {
  const swiperContainer = document.querySelector('.similar-deals-swiper');
  if (!swiperContainer) return;

  new Swiper('.similar-deals-swiper', {
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
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 16 },
      900: { slidesPerView: 3, spaceBetween: 16 },
      1200: { slidesPerView: 4, spaceBetween: 18 },
    },
  });
}