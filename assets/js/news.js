document.addEventListener('DOMContentLoaded', () => {
    // Initialize Swiper
    const swiper = new Swiper('.news__items', {
      spaceBetween: 20,
      loop:true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: '.news__slider__next-button',
        prevEl: '.news__slider__previous-button',
      },
      pagination: false,
      breakpoints: {
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
});