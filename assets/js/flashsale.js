document.addEventListener('DOMContentLoaded', () => {
    // Initialize Swiper
    const swiper = new Swiper('.flashsale__items', {
      spaceBetween: 30,
      loop:true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: '.flashsale__slider__next-button',
        prevEl: '.flashsale__slider__previous-button',
      },
      pagination: false,
      breakpoints: {
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
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