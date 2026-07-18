  import Swiper from 'swiper';
  import { Autoplay, Pagination } from 'swiper/modules';
  
  export function initCompanyBannerSlider() {
    const swiperContainer = document.querySelector('.banner-swiper');
    if (!swiperContainer) return;
  
    new Swiper('.banner-swiper', {
        modules: [Autoplay, Pagination],
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 3000,
        pagination: {
            el: '.banner-swiper .swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false, // Keeps autoplay running after user swipes
        },
    });
  }