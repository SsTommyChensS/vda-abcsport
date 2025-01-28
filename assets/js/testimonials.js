document.addEventListener('DOMContentLoaded', () => {
    // Initialize Swiper
    const swiper = new Swiper(".testimonials__content__slider__feeback", {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        spaceBetween: 30,
        slidesPerView: 1,
        navigation: false,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
        },
    });
});