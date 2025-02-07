document.addEventListener('DOMContentLoaded', () => {
    // Initialize Swiper
    const swiper = new Swiper('.introduction__slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.introduction__pagination',
            clickable: true,
        },
    });
});