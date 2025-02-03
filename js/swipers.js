import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiperReviews = new Swiper('.swiper-reviews', {
   
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
   
   
  });

  const swiperSertificates = new Swiper('.swiper-sertificates', {
    slidesPerView: 3,
    spaceBetween: 20,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
   
   
  });

