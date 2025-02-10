import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiperReviews = new Swiper(".swiper-reviews", {
  loop: true,
  pagination: {
    el: ".swiper-pagination-reviews",
    clickable: true,
  },
});

const swiperSertificates = new Swiper(".swiper-sertificates", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination-sertificates",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
      watchOverflow: true,
      loop: true,
    },
   768: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
      watchOverflow: true,
      loop: true,
    },
  },
});
