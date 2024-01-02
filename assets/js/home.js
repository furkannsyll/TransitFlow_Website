const sliderHero = new Swiper(".slider--hero", {
    slidesPerView: 1,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,
});
const sliderBlog = new Swiper(".slider--blog", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 5,
        },
    },
});
const sliderTestimonial = new Swiper(".slider--testimonial", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".btn-testimonial-next",
        prevEl: ".btn-testimonial-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        },
    },
});
const sliderTeam = new Swiper(".slider--team", {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
});