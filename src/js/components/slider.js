import Swiper from '../../../node_modules/swiper/swiper-bundle.js';
// ═══════════════════════════════════════════════════════
// Category Slider (Swiper)
// ═══════════════════════════════════════════════════════

export function initCategorySlider() {
  // Check if Swiper is available globally
  if (typeof Swiper === 'undefined') {
    return;
  }

  const swiperContainer = document.querySelector('.categories-swiper');
  if (!swiperContainer) return;

  new Swiper('.categories-swiper', {
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
