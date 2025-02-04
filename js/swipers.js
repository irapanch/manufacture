import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiperReviews = new Swiper('.swiper-reviews', {
   
    pagination: {
      el: '.swiper-pagination-reviews',
      clickable: true,
    },
   
   
  });

  const swiperSertificates = new Swiper('.swiper-sertificates', {
    slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-sertificates",
      clickable: true,
    },
   
    watchOverflow: true,
  });

