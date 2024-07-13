const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next.custom-arrow',
        prevEl: '.swiper-button-prev.custom-arrow',
    },
    breakpoints: {
        340: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
        481: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        769: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
    },
});